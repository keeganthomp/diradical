import useModal from 'hooks/useModal'
import axios from 'axios'
import useContract from './useContract'
import useMagicWallet from './useMagicWallet'

type UploadProps = {
  title: string
  audioFile: File
  coverArtFile: File
}

export default function useUpload() {
  const { addSong } = useContract()
  const { walletAddress } = useMagicWallet()
  const { openModal, ModalType, closeModal } = useModal()

  const showSignModal = () => {
    openModal(ModalType.SIGNING)
  }
  const showErrorModal = (error: string) => {
    openModal(ModalType.ERROR, error)
  }

  const upload = async ({ title, coverArtFile, audioFile }: UploadProps) => {
    if (!walletAddress) return
    try {
      showSignModal()
      const formData = new FormData()
      formData.set('coverArtFile', coverArtFile)
      formData.set('audioFile', audioFile)
      // upload to IPFS
      const {
        data: { audioIPFSCid, coverArtIPFSCid },
      } = await axios.post('/api/ipfs', formData)
      // add to royalty contract
      // callback - index in db
      await addSong(coverArtIPFSCid, audioIPFSCid, (songId) =>
        axios.post('/api/tracks/upload', {
          songId,
          title,
          audioIPFSCid,
          coverArtIPFSCid,
          wallet: walletAddress,
        }),
      )
      closeModal()
    } catch (err) {
      showErrorModal('Error uploading track')
      console.log('err uploading track', err)
    }
  }

  return { upload }
}
