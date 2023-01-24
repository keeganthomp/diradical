import ProgressBar from './ProgressBar'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayPauseButton from './PlayPauseButton'

const Container = styled.div`
  display: none;
  z-index: 9;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(10px);
  -webkitbackdropfilter: saturate(180%) blur(20px);
  color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  flex-direction: column;
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
`

const SongTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  align-self: end;
`
const Artist = styled.p`
  margin: 0;
  font-size: 12px;
  align-self: end;
`

const CoverArt = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 4px;
  margin-left: 3px;
  margin-right: 6px;
  object-fit: fill;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-top: 8px;
`
const ArtAndTitle = styled.div`
  display: flex;
`
const TitleAndArtist = styled.div``

export default function MobileAudioPlayer({
  progress,
  duration,
}: {
  progress: number
  duration: number
}) {
  const { track: nowPlayingTrack, isPlaying } = useNowPlaying()

  return (
    <Container>
      <TopBar>
        <ArtAndTitle>
          <CoverArt src={nowPlayingTrack.art} />
          <TitleAndArtist>
            <SongTitle>{nowPlayingTrack.title}</SongTitle>
            <Artist>{nowPlayingTrack.artist.username}</Artist>
          </TitleAndArtist>
        </ArtAndTitle>
        <PlayPauseButton isPlaying={isPlaying} />
      </TopBar>
      <ProgressBar progress={progress} duration={duration} />
    </Container>
  )
}
