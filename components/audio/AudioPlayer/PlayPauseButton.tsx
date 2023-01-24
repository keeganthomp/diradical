import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import { FaPause, FaPlay } from 'react-icons/fa'

const Icon = styled.div`
  position: relative;
  top: 1px;
  font-size: 20px;
  font-size: ${(p) => (p.audioPlayer ? '2rem' : '20px')};
  cursor: pointer;
`

export default function PlayPauseButton({
  isPlaying,
}: {
  isPlaying?: boolean
}) {
  const { pause, play, track } = useNowPlaying()

  const handleClick = () => {
    if (isPlaying) {
      pause()
    } else {
      play(track)
    }
  }

  return (
    <Icon onClick={handleClick}>{isPlaying ? <FaPause /> : <FaPlay />}</Icon>
  )
}
