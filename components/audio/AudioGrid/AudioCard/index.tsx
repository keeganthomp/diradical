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
import modalState, { ModalType } from 'atoms/modal'
import { useSetRecoilState } from 'recoil'

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
  color: white;
  p {
    font-size: 14px;
  }
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
  font-size: 14px;
  text-transform: lowercase;
`
const Tag = styled.p`
  margin: 0;
  text-transform: lowercase;
  font-weight: 400;
  z-index: 9;
  font-size: 12px;
  background: #fff;
  color: #000;
  padding: 0 4px;
  border-radius: 5px;
`

const AvailablePercent = styled(Tag)``
const ArtistPercent = styled(Tag)`
  position: absolute;
  top: 3px;
  right: 2px;
`
const NotAvailable = styled(Tag)`
  position: absolute;
  top: 3px;
  right: 2px;
`

const BuyButton = styled(Button)`
  font-size: 12px;
  padding: 0 4px;
  border-radius: 5px;
  width: 5.75rem;
  z-index: 9;
  background: #7d12ff;
  border: 1px solid lightgray;
  font-weight: bold;
  color: #fff;
  height: 25px;
`
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 13px;
`
const ContractAddress = styled.a`
  font-size: 12px;
  text-align: right;
  cursor: pointer;
  text-decoration: underline;
  color: white;
  justify-self: flex-start;
  font-weight: 200;
  &:visited {
    color: white;
  }
`

export default function AudioCard({ track }: Props) {
  const setModal = useSetRecoilState(modalState)
  const router = useRouter()
  const isProfilePage = router.pathname === '/profile'
  const { views, refetch: refetchViews } = useContractViews(
    track.contractAddress,
  )
  const isMobile = mobile()
  const [isHovering, setHovering] = useState(isMobile)
  const { isPlaying, track: nowPlayingTrack } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleMouseEnter = () => !isMobile && setHovering(true)
  const handleMouseLeave = () => !isMobile && setHovering(false)

  const openBuySharesModal = () =>
    setModal({
      type: ModalType.PURCHASE_SHARES,
      state: { track },
      onClose: refetchViews,
    })

  return (
    <Wrapper>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgImage={track.coverArt}
      >
        <AudioCardMenu track={track} isOpenToPublic={views?.isOpenToPublic} />
        <CoverArt src={track.coverArt} />
        {isHovering &&
          (isTrackPlaying ? <PauseButton /> : <PlayButton track={track} />)}
      </ImageContainer>
      <MetaData>
        <Meta>
          <TitleInfo>
            {track.title} <br />{' '}
            <Artist>{track.artist.username || track.artist.email}</Artist>
          </TitleInfo>
          <RightCol>
            <Realesed>{moment(track.createdAt).calendar()}</Realesed>
            <ContractAddress
              target='_blank'
              href={`https://testnet.algoexplorer.io/application/${track.contractAddress}`}
            >
              {track.contractAddress}
            </ContractAddress>
          </RightCol>
        </Meta>
        {views && (
          <Meta>
            {views.isOpenToPublic ? (
              <AvailablePercent>
                ~
                {(
                  (views.tokensAvailable / views.totalTokenAllocation) *
                  100
                ).toFixed(2)}
                % Available
              </AvailablePercent>
            ) : (
              <AvailablePercent>Not Available</AvailablePercent>
            )}
            {views.isOpenToPublic && !isProfilePage && (
              <BuyButton
                onClick={openBuySharesModal}
                disabled={views.tokensAvailable === 0}
              >
                Buy Ownership
              </BuyButton>
            )}
          </Meta>
        )}
      </MetaData>
    </Wrapper>
  )
}
