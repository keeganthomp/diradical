import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const {
  DO_SPACES_ACCESS_KEY_ID,
  DO_SPACES_SECRET_ACCESS_KEY,
  DO_SPACES_ENDPOINT,
  DO_SPACES_CDN_ENDPOINT,
} = process.env

const SPACE_NAME = 'dierad-dev'

const s3Client = new S3Client({
  endpoint: DO_SPACES_ENDPOINT,
  region: 'sfo3',
  credentials: {
    accessKeyId: DO_SPACES_ACCESS_KEY_ID,
    secretAccessKey: DO_SPACES_SECRET_ACCESS_KEY,
  },
})

const defaultParams = {
  Bucket: SPACE_NAME,
  ACL: 'public-read', // Defines ACL permissions, such as private or public.
}

type UploadArgs = {
  folder: string
  fileName: string
  file: Buffer
}

const uploadFile = async ({ folder, fileName, file }: UploadArgs) => {
  const params = {
    ...defaultParams,
    Key: `${folder}/${fileName}`,
    Body: file,
  }
  try {
    await s3Client.send(new PutObjectCommand(params))
    const url = `${DO_SPACES_CDN_ENDPOINT}/${folder}/${fileName}`
    return url
  } catch (err) {
    throw new Error(err)
  }
}

export default {
  uploadFile,
}
