import { User, Track } from '@prisma/client'
import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'

type Props = {
  tracks: Track[]
  user: User
}

const Message = styled.p`
  text-align: center;
`

export default function UserTacks({ tracks, user }: Props) {
  const hasNoTracks = tracks.length === 0
  if (hasNoTracks) return <Message>You have not uploaded any tracks.</Message>
  return <AudioGrid tracks={tracks.map((t) => ({ ...t, artist: user }))} />
}
