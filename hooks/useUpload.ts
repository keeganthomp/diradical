import axios from 'axios'
import useApi from './useApi'
import useContract from './useContract'
import useMagicWallet from './useMagicWallet'
import { ErrorMessage } from 'types'

type UploadProps = {
  title: string
  audioFile: File
  coverArtFile: File
}

export default function useUpload() {
  const { addSong, checkIfPeriodEnded } = useContract()
  const { addSong: addSongToDb } = useApi()
  const { walletAddress } = useMagicWallet()

  const upload = async ({ title, coverArtFile, audioFile }: UploadProps) => {
    if (!walletAddress) return
    try {
      const isPeriodOver = await checkIfPeriodEnded()
      if (isPeriodOver) throw new Error(ErrorMessage.SEASON_OVER)
      const formData = new FormData()
      formData.set('coverArtFile', coverArtFile)
      formData.set('audioFile', audioFile)
      // upload to IPFS
      const {
        data: { audioIPFSCid, coverArtIPFSCid },
      } = await axios.post('/api/ipfs', formData)
      // add to royalty contract
      const songId = await addSong(coverArtIPFSCid, audioIPFSCid)
      console.log('songId', songId)
      // index in db
      await addSongToDb({
        songId,
        title,
        audioIPFSCid,
        coverArtIPFSCid,
        wallet: walletAddress,
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  return { upload }
}
