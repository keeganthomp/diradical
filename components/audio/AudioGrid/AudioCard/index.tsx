import { TrackWithArtist } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayButton from 'components/ui/Buttons/PlayButton'
import PauseButton from 'components/ui/Buttons/PauseButton'
import { devices } from 'styles/theme'
import { useState } from 'react'
import mobile from 'is-mobile'
import moment from 'moment'
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
  align-items: center;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  color: white;
  p {
    padding: 0 4px;
    font-size: 14px;
  }
`

const TitleAndTrack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.p`
  font-weight: bold;
  font-weight: bold;
  margin: 0;
  text-align: center;
`
const Artist = styled.p`
  position: relative;
  bottom: 6px;
  margin: 0;
  text-align: center;
  font-weight: 200;
`
const CoverArt = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Realesed = styled.p`
  margin: 0;
`

export default function AudioCard({ track }: Props) {
  const isMobile = mobile()
  const [isHovering, setHovering] = useState(isMobile)
  const { isPlaying, track: nowPlayingTrack } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleMouseEnter = () => !isMobile && setHovering(true)
  const handleMouseLeave = () => !isMobile && setHovering(false)

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
        <TitleAndTrack>
          <Title>{track.title}</Title>
          <Artist>{track.artist.username || track.artist.email}</Artist>
        </TitleAndTrack>
        <Realesed>{moment(track.createdAt).calendar()}</Realesed>
      </Meta>
    </Wrapper>
  )
}
