require('dotenv').config();
import { S3 } from 'aws-sdk';
const kms = new S3({
  accessKeyId: process.env.AWS_KMS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_KMS_SECRET_ACCESS_KEY,
  region: process.env.AWS_KMS_REGION,
});

// source is plaintext
async function encrypt(source) {
  const params = {
    KeyId: config.aws.kmsKeyId,
    Plaintext: source,
  };
  const { CiphertextBlob } = await kms.encrypt(params).promise();

  // store encrypted data as base64 encoded string
  return CiphertextBlob.toString('base64');
}

// source is plaintext
async function decrypt(source) {
  const params = {
    CiphertextBlob: Buffer.from(source, 'base64'),
  };
  const { Plaintext } = await kms.decrypt(params).promise();
  return Plaintext.toString();
}

export default {
  encrypt,
  decrypt,
};

encrypt("hello world!") // this will return base64 encoded string
  .then(decrypt) // this one accepts encrypted string
  .then(decoded => console.log(decoded)); // hello world!