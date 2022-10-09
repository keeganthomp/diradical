import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'

export enum S3Method {
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const REGION = 'us-west-1'
const BUCKET_NAME = 'muzic'

const s3Params = {
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
}
const s3Client = new S3Client(s3Params)

// returns seconds from desired minutes
const getMinutes = (minutes: number) => minutes * 60

type PresignedUrl = {
  key: string
  method?: S3Method
}

/**
 *
 * @param key name of file to upload - should include file extension
 * @param method optional - defaults to PUT
 * @returns a URL that can be used to upload a file to S3
 */
const generatePresignedUrl = async ({
  key,
  method = S3Method.PUT,
}: PresignedUrl) => {
  const putCmdParams = {
    Bucket: BUCKET_NAME,
    Key: key, // the name that will be used to store the file in the s3 bucket
  }
  let cmd
  switch (method) {
    case S3Method.PUT:
      cmd = new PutObjectCommand(putCmdParams)
      break
    case S3Method.DELETE:
      cmd = new DeleteObjectCommand(putCmdParams)
      break
  }
  const presignedUrl = await getSignedUrl(s3Client, cmd, {
    expiresIn: getMinutes(10), // in seconds
  })
  return presignedUrl
}

const createKey = ({
  fileName,
  user,
  folder,
}: {
  fileName: string
  user: string
  folder: string
}) => `${user}/${folder}/${fileName}`

const S3 = {
  generatePresignedUrl,
  createKey,
}

export default S3
