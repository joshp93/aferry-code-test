# Josh Pearson's response to the AFerry coding assignment

Hi AFerry, Thanks for giving me this opportunity to complete this challenge. This is my response. I welcome your feedback and look forward to hearing from you.

## How you can check it
- Pull this repo and branch to you local environment
- You will need to update the `launch.json` `runtimeExecutable` because I use `fnm` and the node modules are therefore in my AppData folder
- Spin up the external server and invoke the code. The results will be output as console log statements. You can also run the tests with `npm test` or `npm run test`

## How I did it
### Technologies and frameworks used
- TypeScript
- Vitest for the unit tests
- Axios for the web requests (I considered using the built-in HTTP package as I don't like introducing dependencies when not needed. However, but axios is much simpler to read and unit test so I decided to go with it)

### Development process
I started by reading the README through a few times to make sure I understood it. Based on my understanding, the event stream is represented by the `event.json` file provided in the route of the project.

I noticed that the `kinesis.data` property for each record was a base64-encoded json string which represented different events (`booking_requested` and `booking_completed`). I therefore understood that I needed to decode this data, find the relevant `booking_completed` events and sent those to the external service in the required format.

I created the `integration-service` as a place to store code which integrates with the external server. Here I created 2 functions because I saw that there were 2 main tasks that needed doing:
- `mapBookingCompleteEventsToExternalProductOrders` - this finds the relevant events from the event stream and transforms them into the format needed by the external server. I considered using functional methods like `.filter` and `.map` but this would have been less efficient because it would require looping over the events multiple times. I used a simple for loop which allows me to transform and filter at the same time

- `publishProductOrdersToExternalServer` - This takes this data and sends a series of web requests to the external server. The web requests are sent asynchronously and I used `.Promise.allSettled` to determine when all the web requests were finished and do some final processing. I used `allSettled` because this allows us to more accurately report how many were successful and how many failed rather than just `.all` which will reject if any 1 child promise rejects. I used axios (as described above) to send the web requests

## Conclusion and findings
I really enjoyed this test! It introduced me to a few new concepts (such as `.allSettled`) which I wasn't aware of before.

The hardest part for me was getting to 100% unit test coverage - it was very simple in the end, but initially whilst I was using the http package this was proving to be quite difficult for me because the error event emitter is only fired if there a problem such as a network issue. In order to test this I would need to use something like `rewiremock` to mock the package and get better control of the event emitters. I have done this before on previous tasks, but in the end I decided to work with axios as it was quicker and simpler.
