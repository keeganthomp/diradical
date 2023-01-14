import { Track } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import React, { useState } from 'react'
import mobile from 'is-mobile'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaPlay, FaPause } from 'react-icons/fa'
import useApi from 'hooks/useApi'
import useUserMusic from 'hooks/music/useUserMusic'

type Props = {
  track: Track
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 17rem auto;
  grid-template-columns: 1fr;
  color: #000;
  @media ${devices.mobile} {
    grid-template-rows: 1fr;
    grid-template-columns: 3rem 1fr;
    gap: 10px;
    height: 3rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.borderRadius};
  overflow: hidden;
  color: white;
  @media ${devices.mobile} {
    width: 100%;
    border-radius: 4px;
  }
`

const MetaData = styled.div<{ isMyMusicPage: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 13px;
  align-items: flex-start;
  padding-top: 0.75rem;
  @media ${devices.mobile} {
    padding-top: 0;
  }
`
const Metrics = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex-direction: column;
  text-align: right;
`
const TitleAndArtist = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Title = styled.p`
  padding: 0;
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  text-align: left;
`
const Artist = styled.p`
  font-weight: 200;
  cursor: pointer;
  font-size: 14px;
`
const CoverArt = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const ArtOverlay = styled.div<{ show?: boolean }>`
  width: 100%;
  height: 100%;
  z-index: 9;
  position: absolute;
  background: ${(p) => (p.show ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)')};
`
const PlayButton = styled(FaPlay)`
  z-index: 9;
  font-size: 1.75rem;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobile} {
    font-size: 1rem;
  }
`
const PauseButton = styled(FaPause)`
  z-index: 9;
  font-size: 1.75rem;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobile} {
    font-size: 1rem;
  }
`
const ArchiveButton = styled.p`
  color: #ff5959;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
const MetricText = styled.p`
  font-weight: 200;
  padding-bottom: 3px;
`

export default function AudioCard({ track }: Props) {
  const { mutate, tracks } = useUserMusic(track.artist.username)
  const { archiveTrack } = useApi()
  const router = useRouter()
  const isMobile = mobile()
  const [isHovering, setHovering] = useState(isMobile)
  const { isPlaying, track: nowPlayingTrack, play, pause } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleMouseEnter = () => !isMobile && setHovering(true)
  const handleMouseLeave = () => !isMobile && setHovering(false)

  const isArtistPage = router.pathname.includes('/artist/')
  const isMyMusicPage = router.pathname.includes('/profile')

  const updateTrack = (updatedTrack: Partial<Track>) => {
    const updatedTracks = tracks.map((t) => {
      if (t.id === track.id) {
        return {
          ...t,
          artist: {
            ...t.artist,
          },
          ...updatedTrack,
        }
      }
      return t
    })
    mutate(updatedTracks, false)
  }

  const handleArchive = async () => {
    updateTrack({ archived: !track.archived })
    await archiveTrack(track.id)
  }

  return (
    <Wrapper>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgImage={track.art}
      >
        <ArtOverlay show={isHovering} />
        <CoverArt src={track.art} />
        {isHovering &&
          (isTrackPlaying ? (
            <PauseButton onClick={pause} />
          ) : (
            <PlayButton onClick={() => play(track)} />
          ))}
      </ImageContainer>
      <MetaData isMyMusicPage={isMyMusicPage}>
        <TitleAndArtist>
          <Title>{track.title}</Title>
          {!isArtistPage && !isMyMusicPage && (
            <Link href={`/artist/${track.artist.username}`}>
              <Artist>{track.artist.username}</Artist>
            </Link>
          )}
        </TitleAndArtist>
        <Metrics>
          <MetricText>{track.plays} Plays</MetricText>
          {isMyMusicPage && (
            <ArchiveButton onClick={handleArchive}>
              {track.archived ? 'Unarchive' : 'Archive'}
            </ArchiveButton>
          )}
        </Metrics>
      </MetaData>
    </Wrapper>
  )
}
