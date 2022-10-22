import { create } from 'ipfs-http-client'

const UPLOAD_IPFS_URL = 'https://ipfs.infura.io:5001/api/v0'
const IPFS_GATEWAY = 'https://diradical.infura-ipfs.io/ipfs'

const projectId = process.env.INFURA_PROJECT_ID
const projectSecret = process.env.INFURA_PROJECT_SECRET
const authorization = 'Basic ' + btoa(projectId + ':' + projectSecret)

export const getIPFSUrl = (path: string) => `${IPFS_GATEWAY}/${path}`

const ipfs = create({
  url: UPLOAD_IPFS_URL,
  headers: {
    authorization,
  },
})

export default ipfs
