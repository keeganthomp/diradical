import { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import S3 from 'lib/aws/s3'
import { useUser } from '@auth0/nextjs-auth0'

const { NEXT_PUBLIC_BASE_S3_URL } = process.env

export type FolderOptions = 'singles' | 'album'

const BASE_PRESIGNED_API_URL = '/api/presigned-url'

export default function useS3() {
  const [isUploading, setUploading] = useState(false)
  const { user } = useUser()

  const uploadFile = async (
    files: any,
    title: string,
    parentFolder: FolderOptions = 'singles',
  ): Promise<string | string[]> => {
    const filesToUpload = Array.isArray(files) ? files : [files]
    const results: any[] = []
    try {
      setUploading(true)
      for await (const fileUpload of filesToUpload) {
        const fileExtension = fileUpload.name.split('.').pop()
        const fileNameWithoutExt = fileUpload.name.replace(/\.[^/.]+$/, '')
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
            `&folder=${folder}`,
        )
        const { url: presignedUrl } = data
        await axios.put(presignedUrl, fileUpload)
        const key = S3.createKey({
          fileName: fileNameWithUid,
          folder,
          user: user.sid as string,
        })
        results.push(`${NEXT_PUBLIC_BASE_S3_URL}/${key}`)
      }
      return results.length === 1 ? results[0] : results
    } catch {
      throw new Error('Unable to get presigned URL')
    } finally {
      setUploading(false)
    }
  }

  return { uploadFile, isUploading }
}
