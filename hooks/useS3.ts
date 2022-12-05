import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import S3 from 'lib/aws/s3'

const BASE_S3_URL = 'https://d3e39cq64d4jdw.cloudfront.net'
const BASE_PRESIGNED_API_URL = '/api/presigned-url'

export type FolderOptions = 'singles' | 'album'

export default function useS3() {
  const uploadToS3 = async (
    file: any,
    title: string,
    walletAddress: string,
    parentFolder: FolderOptions = 'singles',
  ): Promise<string> => {
    try {
      const fileExtension = file.name.split('.').pop()
      const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, '')
      // replace spaces with underscores
      const fmtFileName = fileNameWithoutExt.replace(/ /g, '_')
      // i.e. me.jpeg becomes me_123e4567-e89b-12d3-a456-426655440000.jpeg
      const fileNameWithUid = `${fmtFileName}_${uuidv4()}.${fileExtension}`
      const titleWithUuid = `${title}_${uuidv4()}`
      const folder = `${parentFolder}/${titleWithUuid}`
      const { data } = await axios(
        BASE_PRESIGNED_API_URL +
          '?' +
          `fileName=${fileNameWithUid}` +
          `&folder=${folder}` +
          `&wallet=${walletAddress}`,
      )
      const { url: presignedUrl } = data
      await axios.put(presignedUrl, file)
      const key = S3.createKey({
        fileName: fileNameWithUid,
        folder,
        walletAddress,
      })
      return `${BASE_S3_URL}/${key}`
    } catch {
      throw new Error('Unable to get presigned URL')
    }
  }

  return { uploadToS3 }
}
