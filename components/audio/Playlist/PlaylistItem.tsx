import styled from 'styled-components'
import { FaPlay, FaPause } from 'react-icons/fa'
import { Track } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import { devices } from 'styles/theme'

type Props = {
  track: Track
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'action title artist plays';
  grid-template-columns: 2rem 6rem 1fr 3rem;
  grid-template-rows: 3rem;
  align-items: center;
  font-size: 14px;
  @media ${devices.mobile} {
    grid-template-columns: 2rem repeat(3, 1fr);
  }
`

const ActionIcon = styled(FaPlay)`
  grid-area: action;
  justify-self: start;
  cursor: pointer;
`
const Title = styled.p`
  grid-area: title;
  font-weight: bold;
`
const Artist = styled.p`
  grid-area: artist;
  justify-self: center;
`
const Plays = styled.p`
  grid-area: plays;
  justify-self: end;
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
