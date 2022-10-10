import { TrackWithArtist } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayButton from 'components/ui/Buttons/PlayButton'
import PauseButton from 'components/ui/Buttons/PauseButton'
import { devices } from 'styles/theme'
import Image from 'next/image'
import AudioCardMenu from './Menu'

type Props = {
  track: TrackWithArtist
}

const Container = styled.div`
  height: 17rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  @media ${devices.mobile} {
    width: 100%;
    height: 30rem;
  }
`

const Meta = styled.div`
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 7px;
  p {
    padding: 0 4px;
    font-size: 14px;
    @media ${devices.mobile} {
      font-size: 30px;
    }
  }
`

const TitleTrackContainer = styled.div`
  opacity: 0.9;
`

const Title = styled.p`
  font-weight: bold;
  background: black;
  font-weight: bold;
  margin: 0;
  margin-bottom: 7px;
  text-align: center;
`
const Artist = styled.p`
  background: black;
  position: relative;
  bottom: 6px;
  margin: 0;
  text-align: center;
`
const CoverArt = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function AudioCard({ track }: Props) {
  const { isPlaying, track: nowPlayingTrack } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id
  return (
    <Container bgImage={track.coverArt}>
      <AudioCardMenu track={track} />
      <CoverArt src={track.coverArt} />
      <Meta>
        <TitleTrackContainer>
          <Title>{track.title}</Title>
          <Artist>{track.artist.username || track.artist.email}</Artist>
        </TitleTrackContainer>
        {isTrackPlaying ? <PauseButton /> : <PlayButton track={track} />}
      </Meta>
    </Container>
  )
}
