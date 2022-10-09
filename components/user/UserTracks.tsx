import { User, Track } from '@prisma/client'
import AudioGrid from 'components/audio/AudioGrid'

type Props = {
  tracks: Track[]
  user: User
}

export default function UserTacks({ tracks, user }: Props) {
  return <AudioGrid tracks={tracks.map((t) => ({ ...t, artist: user }))} />
}
