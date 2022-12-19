import { TrackWithArtist } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayButton from 'components/ui/Buttons/PlayButton'
import PauseButton from 'components/ui/Buttons/PauseButton'
import { devices } from 'styles/theme'
import React, { useState } from 'react'
import mobile from 'is-mobile'
import moment from 'moment'
import { truncateWalletAddress } from 'utils'
import AudioCardMenu from './Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  track: TrackWithArtist
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 17rem auto;
  grid-template-columns: 1fr;
  color: #000;
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
  align-items: baseline;
  width: 100%;
  p {
    font-size: 14px;
  }
`
const TitleInfo = styled.div`
  margin: 0;
  text-align: left;
  p {
    font-size: 14px;
    margin: 0;
  }
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

const Realesed = styled.p`
  margin: 0;
  font-size: 14px;
  text-transform: lowercase;
`
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
`

export default function AudioCard({ track }: Props) {
  const router = useRouter()
  const isMobile = mobile()
  const [isHovering, setHovering] = useState(isMobile)
  const { isPlaying, track: nowPlayingTrack } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleMouseEnter = () => !isMobile && setHovering(true)
  const handleMouseLeave = () => !isMobile && setHovering(false)

  const isArtistPage = router.pathname.includes('/artist/')
  const isMyMusicPage = router.pathname.includes('/my-music')

  return (
    <Wrapper>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgImage={track.coverArt}
      >
        <AudioCardMenu track={track} isOpenToPublic={false} />
        <CoverArt
          src={`${process.env.NEXT_PUBLIC_INFURA_IPFS_GATEWAY}/${track.coverArt}`}
        />
        {isHovering &&
          (isTrackPlaying ? <PauseButton /> : <PlayButton track={track} />)}
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
            <Realesed>{moment(track.createdAt).calendar()}</Realesed>
          </RightCol>
        </Meta>
      </MetaData>
    </Wrapper>
  )
}
