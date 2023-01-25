import styled from 'styled-components'
import useNowPlaying from 'hooks/useNowPlaying'
import { Track, Album } from 'types'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  track?: Track
  album?: Album
}

const CARD_SIZE = '10rem'

const CardContainer = styled.div`
  width: ${CARD_SIZE};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 1.25rem;
  }
`
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  font-size: 12px;
  object-fit: cover;
`
const CardImage = styled.img`
  width: 100%;
  height: ${CARD_SIZE};
  border-radius: 10px;
  cursor: pointer;
`
const CardTitle = styled.p``
const CardArtist = styled.p`
  cursor: pointer;
`

export default function AudioCard({ track, album }: Props) {
  const router = useRouter()
  const { isPlaying, track: nowPlayingTrack, play, pause } = useNowPlaying()
  const isTrackPlaying =
    !album && nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleClick = () => {
    if (album) {
      router.push(`/album/${album.id}`)
    } else {
      if (isTrackPlaying) {
        pause()
      } else {
        play(track)
      }
    }
  }

  const art = album ? album.art : track.art
  const title = album ? album.title : track.title
  const artist = album ? album.artist.username : track.artist.username

  return (
    <CardContainer>
      <CardImage onClick={handleClick} src={art} />
      <InfoContainer>
        <CardTitle>{title}</CardTitle>
        <Link href={`/artist/${artist}`}>
          <CardArtist>{artist}</CardArtist>
        </Link>
      </InfoContainer>
    </CardContainer>
  )
}
