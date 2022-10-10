import { TrackWithArtist } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayButton from 'components/ui/Buttons/PlayButton'
import PauseButton from 'components/ui/Buttons/PauseButton'
import { devices } from 'styles/theme'
import { useState } from 'react'
import AudioCardMenu from './Menu'

type Props = {
  track: TrackWithArtist
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 17rem auto;
  grid-template-columns: 1fr;
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  @media ${devices.mobile} {
    width: 100%;
  }
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 7px;
  p {
    padding: 0 4px;
    font-size: 14px;
    @media ${devices.mobile} {
      font-size: 30px;
    }
  }
`

const Title = styled.p`
  font-weight: bold;
  color: white;
  font-weight: bold;
  margin: 0;
  text-align: center;
`
const Artist = styled.p`
  color: white;
  position: relative;
  bottom: 6px;
  margin: 0;
  text-align: center;
  @media ${devices.mobile} {
    bottom: 22px;
  }
`
const CoverArt = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function AudioCard({ track }: Props) {
  const [isHovering, setHovering] = useState(false)
  const { isPlaying, track: nowPlayingTrack } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleMouseEnter = () => setHovering(true)
  const handleMouseLeave = () => setHovering(false)

  return (
    <Wrapper>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgImage={track.coverArt}
      >
        <AudioCardMenu track={track} />
        <CoverArt src={track.coverArt} />
        {isHovering && (
          <>{isTrackPlaying ? <PauseButton /> : <PlayButton track={track} />}</>
        )}
      </ImageContainer>
      <Meta>
        <Title>{track.title}</Title>
        <Artist>{track.artist.username || track.artist.email}</Artist>
      </Meta>
    </Wrapper>
  )
}
