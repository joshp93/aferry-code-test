import { KinesisStreamEvent } from 'aws-lambda';

/* eslint-disable max-len */
export const EVENT_MOCK_NO_COMPLETED: KinesisStreamEvent = {
  Records: [
    {
      kinesis: {
        data:
          'eyJpZCI6ImE0Mzg4MTMxLTE0OTItMTFlYy1hMGIyLWM3OGZmYmQ2OTM0NyIsInBhcnRpdGlvbktleSI6ImM3NzI0YjA2LTgxM2QtNDEwYS1hZGJjLTdkMTllYmZmMDRiMiIsInRpbWVzdGFtcCI6MTYzMTUzODA1OTQ1OSwidHlwZSI6ImJvb2tpbmdfcmVxdWVzdGVkIiwiYm9va2luZ19yZXF1ZXN0ZWQiOnsidGltZXN0YW1wIjoxNjMxNTM4MDU5NDU5LCJvcmRlcklkIjoxMDAxNiwicHJvZHVjdF9wcm92aWRlciI6IkJyaXR0YW55IEZlcnJpZXMifX0=',
        partitionKey: 'c7724b06-813d-410a-adbc-7d19ebff04b2',
        approximateArrivalTimestamp: 1631538059459,
        kinesisSchemaVersion: '1.0',
        sequenceNumber: 'c7724b06-813d-410a-adbc-7d19ebff04b2',
      },
      eventSource: 'aws:kinesis',
      eventID:
        'shardId-000000000000:49545115243490985018280067714973144582180062593244200961',
      invokeIdentityArn: 'arn:aws:iam::EXAMPLE',
      eventVersion: '1.0',
      eventName: 'aws:kinesis:record',
      eventSourceARN: 'arn:aws:kinesis:EXAMPLE',
      awsRegion: 'us-east-1',
    },
    {
      kinesis: {
        data:
          'eyJpZCI6ImE0MzhhODQzLTE0OTItMTFlYy1hMGIyLWM3OGZmYmQ2OTM0NyIsInBhcnRpdGlvbktleSI6IjllNWZiZmFiLTQwMjAtNGI5Zi04NDQzLTIzZjQ0MGVjM2ExNiIsInRpbWVzdGFtcCI6MTYzMTUzODA1OTQ2MCwidHlwZSI6ImJvb2tpbmdfcmVxdWVzdGVkIiwiYm9va2luZ19yZXF1ZXN0ZWQiOnsidGltZXN0YW1wIjoxNjMxNTM4MDU5NDYwLCJvcmRlcklkIjoxMDAyMywicHJvZHVjdF9wcm92aWRlciI6IkJyaXR0YW55IEZlcnJpZXMifX0=',
        partitionKey: '9e5fbfab-4020-4b9f-8443-23f440ec3a16',
        approximateArrivalTimestamp: 1631538059460,
        kinesisSchemaVersion: '1.0',
        sequenceNumber: '9e5fbfab-4020-4b9f-8443-23f440ec3a16',
      },
      eventSource: 'aws:kinesis',
      eventID:
        'shardId-000000000000:49545115243490985018280067714973144582180062593244200961',
      invokeIdentityArn: 'arn:aws:iam::EXAMPLE',
      eventVersion: '1.0',
      eventName: 'aws:kinesis:record',
      eventSourceARN: 'arn:aws:kinesis:EXAMPLE',
      awsRegion: 'us-east-1',
    },
  ],
};
