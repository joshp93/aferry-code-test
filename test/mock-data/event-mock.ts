import { KinesisStreamEvent } from 'aws-lambda';

/* eslint-disable max-len */
export const EVENT_MOCK: KinesisStreamEvent = {
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
    {
      kinesis: {
        data:
          'eyJpZCI6ImE0Mzc5NmQ0LTE0OTItMTFlYy1hMGIyLWM3OGZmYmQ2OTM0NyIsInBhcnRpdGlvbktleSI6IjE5ZTlkMmFjLTJlNTgtNGE4Yi05MjA5LWM0NTU4ZTkxZWFhMyIsInRpbWVzdGFtcCI6MTYzMTUzODA1OTQ1MywidHlwZSI6ImJvb2tpbmdfY29tcGxldGVkIiwiYm9va2luZ19jb21wbGV0ZWQiOnsidGltZXN0YW1wIjoxNjMxNTM4MDU5NDUzLCJwcm9kdWN0X3Byb3ZpZGVyIjoiUCZPIEZlcnJpZXMiLCJvcmRlcklkIjoxMjM0NjF9fQ==',
        partitionKey: '19e9d2ac-2e58-4a8b-9209-c4558e91eaa3',
        approximateArrivalTimestamp: 1631538059453,
        kinesisSchemaVersion: '1.0',
        sequenceNumber: '19e9d2ac-2e58-4a8b-9209-c4558e91eaa3',
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
          'eyJpZCI6ImE0MzgwYzAxLTE0OTItMTFlYy1hMGIyLWM3OGZmYmQ2OTM0NyIsInBhcnRpdGlvbktleSI6IjY0MWY4MTFiLTNkNGMtNDgwOS05OWUyLWQyY2MzODM4ODIyMyIsInRpbWVzdGFtcCI6MTYzMTUzODA1OTQ1NiwidHlwZSI6ImJvb2tpbmdfY29tcGxldGVkIiwiYm9va2luZ19jb21wbGV0ZWQiOnsidGltZXN0YW1wIjoxNjMxNTM4MDU5NDU2LCJwcm9kdWN0X3Byb3ZpZGVyIjoiQmFsZWFyaWEiLCJvcmRlcklkIjoxMjM0Nzd9fQ==',
        partitionKey: '641f811b-3d4c-4809-99e2-d2cc38388223',
        approximateArrivalTimestamp: 1631538059456,
        kinesisSchemaVersion: '1.0',
        sequenceNumber: '641f811b-3d4c-4809-99e2-d2cc38388223',
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
