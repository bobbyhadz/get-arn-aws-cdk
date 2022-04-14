# How to get ARN of resources in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/get-arn-aws-cdk)

> If you use CDK v1, switch to the cdk-v1 branch

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Create the CDK stack

```bash
npx aws-cdk deploy
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup

```bash
npx aws-cdk destroy
```
