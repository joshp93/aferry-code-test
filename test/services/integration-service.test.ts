import { setupServer } from 'msw/node';
import { http } from 'msw';
import {
  mapBookingCompleteEventsToExternalProductOrders,
  publishProductOrdersToExternalServer,
} from 'src/services/integration-service';
import { EVENT_MOCK } from 'test/mock-data/event-mock';
import { EVENT_MOCK_NO_COMPLETED } from 'test/mock-data/event-mock-no-completed';
import { EXPECTED_EXTERNAL_PRODUCT_ORDER } from 'test/mock-data/expected-external-product-orders';

describe('Integration Service', () => {
  let postRequestsMade = 0;
  let resultsMap: Map<number, 'resolve' | 'reject'>;
  let resultsMapIndex = -1;

  const server = setupServer(
    http.post('http://localhost:3000', () => {
      postRequestsMade++;
      resultsMapIndex++;
      if (resultsMap.get(resultsMapIndex) === 'reject') {
        return new Response(JSON.stringify({ status: 'Have a bad day!' }), {
          headers: {
            'Content-Type': 'application/json',
          },
          status: 500,
        });
      }
      return new Response(JSON.stringify({ status: 'Have a nice day!' }), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
  );

  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    resultsMap = new Map();
    postRequestsMade = 0;
    resultsMapIndex = -1;
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  it('Should return an array of external product orders with only booking_completed events', () => {
    const result = mapBookingCompleteEventsToExternalProductOrders(EVENT_MOCK);
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(EXPECTED_EXTERNAL_PRODUCT_ORDER)
    );
  });

  it('Should return an empty array if there are no booking completed events', () => {
    const result = mapBookingCompleteEventsToExternalProductOrders(
      EVENT_MOCK_NO_COMPLETED
    );
    expect(result).toEqual([]);
  });

  it('Should make a single web request for every external product order', () => {
    publishProductOrdersToExternalServer(EXPECTED_EXTERNAL_PRODUCT_ORDER).then(
      () => {
        expect(postRequestsMade).toBe(2);
      }
    );
  });

  it('Should allow resolutions to continue and report errors when there is a mixture of success and fail', () => {
    const logSpy = vi.spyOn(console, 'log');
    const errorSpy = vi.spyOn(console, 'error');
    for (let i = 0; i < EXPECTED_EXTERNAL_PRODUCT_ORDER.length; i++) {
      resultsMap.set(i, i % 2 ? 'reject' : 'resolve');
    }

    publishProductOrdersToExternalServer(EXPECTED_EXTERNAL_PRODUCT_ORDER)
      .then(() => {
        expect(postRequestsMade).toBe(2);
        expect(logSpy).toHaveBeenCalledWith(
          'Server responded',
          expect.anything()
        );
        expect(errorSpy).toHaveBeenCalledWith('1 error(s) were received');
      })
      .finally(() => {
        logSpy.mockRestore();
        errorSpy.mockRestore();
      });
  });
});
