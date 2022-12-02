import useS3 from 'hooks/useS3'
import useModal from 'hooks/useModal'
import useUser from 'hooks/useReachAccount'
import useContract from 'hooks/useCtc'
import axios from 'axios'
import { fmtNum } from 'contracts'

type UploadProps = {
  title: string
  audioFile: File
  artFile: File
}

export default function useUpload() {
  const contract = useContract()
  const { reachAcc } = useUser()
  const { uploadToS3 } = useS3()
  const { openModal, ModalType, closeModal } = useModal()

  const showSignModal = () => {
    openModal(ModalType.SIGNING)
  }
  const showErrorModal = (error: string) => {
    openModal(ModalType.ERROR, error)
  }

  const upload = async ({ title, artFile, audioFile }: UploadProps) => {
    if (!reachAcc) return
    const { address: walletAddress } = reachAcc.networkAccount
    try {
      showSignModal()
      // upload to S3
      const audioS3Url = await uploadToS3(audioFile, title, walletAddress)
      const artS3Url = await uploadToS3(artFile, title, walletAddress)
      // upload to IPFS
      const payload = {
        title,
        audioS3Url,
        artS3Url,
      }
      const {
        data: { audioIPFSHash, artIPFSHash },
      } = await axios.post('/api/ipfs', payload)
      // add to royalty contract
      const songId = await contract.addSong(
        reachAcc,
        audioIPFSHash,
        artIPFSHash,
      )
      // add to remote database
      const track = await axios.post('/api/tracks', {
        title,
        songId: fmtNum(songId),
        audioS3Url,
        artS3Url,
        wallet: walletAddress,
      })
      closeModal()
    } catch (err) {
      console.log('err uploading track', err)
      const { message } = err.response.data
      const isOverspend = message.toLowerCase().includes('overspend')
      if (isOverspend) {
        showErrorModal('Not enough Matic in wallet to upload track')
      } else {
        showErrorModal('unable to upload track')
      }
    }
  }

  return { upload }
}
