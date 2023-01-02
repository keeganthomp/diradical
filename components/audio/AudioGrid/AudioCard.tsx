import { TrackWithArtist } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import React, { useState } from 'react'
import mobile from 'is-mobile'
import { truncateWalletAddress } from 'utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'components/ui/Buttons'
import { FaPlay, FaPause } from 'react-icons/fa'

type Props = {
  track: TrackWithArtist
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

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
`

const Meta = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  font-size: 14px;
  align-items: center;
`
const TitleInfo = styled.div`
  margin: 0;
  text-align: left;
  font-size: 14px;
  margin: 0;
  line-height: 20px;
`
const Artist = styled.p`
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  text-decoration: underline;
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

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
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

const VoteButton = styled(Button)`
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  @media ${devices.mobile} {
    opacity: 1;
  }
`
const ArchiveButton = styled(Button)`
  background: #ff5959;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  @media ${devices.mobile} {
    opacity: 1;
  }
`

export default function AudioCard({ track }: Props) {
  const router = useRouter()
  const isMobile = mobile()
  const [isHovering, setHovering] = useState(isMobile)
  const { isPlaying, track: nowPlayingTrack, play, pause } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleMouseEnter = () => !isMobile && setHovering(true)
  const handleMouseLeave = () => !isMobile && setHovering(false)

  const isArtistPage = router.pathname.includes('/artist/')
  const isMyMusicPage = router.pathname.includes('/me')
  const isListenPage = router.pathname.includes('/listen')

  return (
    <Wrapper>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgImage={track.coverArt}
      >
        <ArtOverlay show={isHovering} />
        <CoverArt
          src={`${process.env.NEXT_PUBLIC_INFURA_IPFS_GATEWAY}/${track.coverArt}`}
        />
        {isHovering &&
          (isTrackPlaying ? (
            <PauseButton onClick={pause} />
          ) : (
            <PlayButton onClick={() => play(track)} />
          ))}
      </ImageContainer>
      <MetaData>
        <Meta>
          <TitleInfo>
            <p>{track.title}</p>
            {!isArtistPage && !isMyMusicPage && (
              <Link href={`/artist/${track.artist.wallet}`}>
                <Artist>{truncateWalletAddress(track.artist.wallet)}</Artist>
              </Link>
            )}
          </TitleInfo>
          <RightCol>
            {isMyMusicPage && <ArchiveButton>Archive</ArchiveButton>}
            {isListenPage && <VoteButton>Vote</VoteButton>}
          </RightCol>
        </Meta>
      </MetaData>
    </Wrapper>
  )
}