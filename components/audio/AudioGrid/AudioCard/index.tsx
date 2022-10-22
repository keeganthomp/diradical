import { TrackWithArtist } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayButton from 'components/ui/Buttons/PlayButton'
import PauseButton from 'components/ui/Buttons/PauseButton'
import { devices } from 'styles/theme'
import React, { useState } from 'react'
import mobile from 'is-mobile'
import moment from 'moment'
import useContractViews from 'hooks/useCtcViews'
import AudioCardMenu from './Menu'
import Button from 'components/ui/Buttons/Base'
import { useRouter } from 'next/router'

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
  border-radius: 5px;
  overflow: hidden;
  color: white;
  @media ${devices.mobile} {
    width: 100%;
  }
`

const MetaData = styled.div``

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

const TitleInfo = styled.p`
  font-weight: bold;
  font-weight: bold;
  margin: 0;
  text-align: left;
  line-height: 13px;
`
const Artist = styled.span`
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
const Shares = styled.p`
  margin: 0;
  text-transform: lowercase;
  font-weight: 400;
  z-index: 9;
  position: absolute;
  bottom: 3px;
  left: 2px;
  font-size: 12px;
  background: #fff;
  color: #000;
  padding: 0 4px;
  border-radius: 5px;
  opacity: 0.8;
`
const BuyButton = styled(Button)`
  font-size: 12px;
  padding: 0 4px;
  text-transform: lowercase;
  border-radius: 5px;
  width: 4.5rem;
  z-index: 9;
  position: absolute;
  bottom: 2px;
  right: 2px;
  opacity: 0.9;
  background: #000;
  color: #fff;
  height: 25px;
`

export default function AudioCard({ track }: Props) {
  const router = useRouter()
  const isProfilePage = router.pathname === '/profile'
  const { isFetching, views } = useContractViews(track.contractAddress)
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
          <>
            {isTrackPlaying ? <PauseButton /> : <PlayButton track={track} />}
            {!isProfilePage && !isFetching && views && (
              <>
                <Shares>Shares Available: {views.sharesAvailable}</Shares>
                <BuyButton disabled={views.sharesAvailable > 0}>
                  Buy shares
                </BuyButton>
              </>
            )}
          </>
        )}
      </ImageContainer>
      <MetaData>
        <Meta>
          <TitleInfo>
            {track.title} <br />{' '}
            <Artist>{track.artist.username || track.artist.email}</Artist>
          </TitleInfo>
          <Realesed>{moment(track.createdAt).calendar()}</Realesed>
        </Meta>
      </MetaData>
    </Wrapper>
  )
}
