import useS3 from 'hooks/useS3'
import useModal from 'hooks/useModal'
import axios from 'axios'
import useContract from './useContract'
import useMagicWallet from './useMagicWallet'

type UploadProps = {
  title: string
  audioFile: File
  artFile: File
}

export default function useUpload() {
  const { addSong } = useContract()
  const { walletAddress } = useMagicWallet()
  const { uploadToS3 } = useS3()
  const { openModal, ModalType, closeModal } = useModal()

  const showSignModal = () => {
    openModal(ModalType.SIGNING)
  }
  const showErrorModal = (error: string) => {
    openModal(ModalType.ERROR, error)
  }

  const upload = async ({ title, artFile, audioFile }: UploadProps) => {
    if (!walletAddress) return
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
      await addSong(artIPFSHash, audioIPFSHash, (songId) =>
        axios.post('/api/tracks', {
          ...payload,
          songId,
          wallet: walletAddress,
        }),
      )
      closeModal()
    } catch (err) {
      console.log('err uploading track', err)
    }
  }

  return { upload }
}
