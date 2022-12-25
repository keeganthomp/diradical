import { useRef, useState, useEffect, SyntheticEvent } from 'react'
import ProgressBar from './ProgressBar'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import { FaPause, FaPlay } from 'react-icons/fa'
import { truncateWalletAddress } from 'utils'

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
  height: 3.25rem;
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
  font-size: 14px;
  align-self: end;
`

const CoverArt = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 4px;
  padding-left: 3px;
  margin-right: 6px;
  object-fit: contain;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.75rem 0rem 0.75rem;
`
const ArtAndTitle = styled.div`
  display: flex;
`
const TitleAndArtist = styled.div``

export default function MobileAudioPlayer() {
  const { track: nowPlayingTrack, isPlaying, pause, play } = useNowPlaying()
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  const audioRef = useRef<HTMLAudioElement>()

  const handleProgressChange = (e: SyntheticEvent<HTMLAudioElement>) => {
    const { currentTime } = e.currentTarget
    const isFinished = currentTime === duration
    if (isFinished) {
      setProgress(0)
      pause()
      return
    }
    setProgress(currentTime)
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    if (!nowPlayingTrack) return
    const isCurrentTrack = audioRef?.current.src.includes(nowPlayingTrack.audio)
    if (isCurrentTrack && !isPlaying) return
    if (isPlaying) {
      audioRef.current.play()
    }
  }, [nowPlayingTrack, isPlaying])

  const handlePlay = () => {
    if (nowPlayingTrack) {
      play(nowPlayingTrack)
    }
  }

  if (!nowPlayingTrack) return null
  return (
    <>
      <Container>
        <TopBar>
          <ArtAndTitle>
            <CoverArt
              src={`${process.env.NEXT_PUBLIC_INFURA_IPFS_GATEWAY}/${nowPlayingTrack.coverArt}`}
            />
            <TitleAndArtist>
              <SongTitle>{nowPlayingTrack.title}</SongTitle>
              <Artist>
                {truncateWalletAddress(nowPlayingTrack.artist.wallet)}
              </Artist>
            </TitleAndArtist>
          </ArtAndTitle>
          {isPlaying ? (
            <FaPause onClick={pause} />
          ) : (
            <FaPlay onClick={handlePlay} />
          )}
        </TopBar>
        <ProgressBar progress={progress} duration={duration} />
      </Container>
      {/* Used as a ref */}
      <audio
        hidden
        ref={audioRef}
        src={`${process.env.NEXT_PUBLIC_INFURA_IPFS_GATEWAY}/${nowPlayingTrack.audio}`}
        onTimeUpdate={handleProgressChange}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />
    </>
  )
}
