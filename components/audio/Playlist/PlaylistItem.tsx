import styled from 'styled-components'
import { FaPlay, FaPause } from 'react-icons/fa'
import { Track } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'

type Props = {
  track: Track
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'action title artist plays';
  grid-template-columns: 2rem 6rem 1fr 3rem;
  grid-template-rows: 3rem;
  align-items: center;
`

const ActionIcon = styled(FaPlay)`
  grid-area: action;
`
const Title = styled.p`
  grid-area: title;
`
const Artist = styled.p`
  grid-area: artist;
  justify-self: center;
`
const Plays = styled.p`
  grid-area: plays;
`

export default function PlaylistItem({ track }: Props) {
  const { isPlaying, track: nowPlayingTrack, play, pause } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleClick = () => {
    if (isTrackPlaying) {
      pause()
    } else {
      play(track)
    }
  }
  return (
    <Wrapper>
      <ActionIcon onClick={handleClick} />
      <Title>{track.title}</Title>
      <Artist>{track.artist.username}</Artist>
      <Plays>{track.plays} Plays</Plays>
    </Wrapper>
  )
}
