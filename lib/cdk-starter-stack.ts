import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class MyCdkStack extends cdk.Stack {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, 'avatars-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // 👇 assign the arn to a variable
    const s3BucketArn = s3Bucket.bucketArn;
    console.log('bucketArn 👉 ', s3BucketArn);

    new cdk.CfnOutput(this, 'myBucketArn', {
      value: s3BucketArn,
      description: 'The arn of the s3 bucket',
    });
  }
}
