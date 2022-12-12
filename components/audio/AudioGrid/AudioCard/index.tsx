import { TrackWithVotes } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayButton from 'components/ui/Buttons/PlayButton'
import PauseButton from 'components/ui/Buttons/PauseButton'
import { devices } from 'styles/theme'
import React, { useEffect, useState } from 'react'
import mobile from 'is-mobile'
import moment from 'moment'
import useContract from 'hooks/useContract'
import { truncateWalletAddress, formatCurrency } from 'utils'
import { useRouter } from 'next/router'
import AudioCardMenu from './Menu'
import useUser from 'hooks/useUser'
import useApi from 'hooks/useApi'

type Props = {
  track: TrackWithVotes
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
const TitleInfo = styled.p`
  font-weight: bold;
  font-weight: bold;
  margin: 0;
  text-align: left;
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
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
`

export default function AudioCard({ track }: Props) {
  const router = useRouter()
  const [payouts, setPayouts] = useState(0)
  const { addVote } = useApi()
  const ctc = useContract()
  const { user } = useUser()
  const isMobile = mobile()
  const [isHovering, setHovering] = useState(isMobile)
  const { isPlaying, track: nowPlayingTrack } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const isProfilePage = router.pathname === '/profile'

  useEffect(() => {
    const getSongInfoFromCtc = async () => {
      if (!isProfilePage) return
      const currentPeriod = await ctc.votingPeriod
      if (currentPeriod === 1) return
      const arr = [...Array(currentPeriod - 1).keys()].map((_, i) =>
        ctc.getSongInfo(track.songId, i + 1),
      )
      const pms = await Promise.all(arr)
      const totalPayouts = pms.reduce((acc, cur) => acc + cur?.payout || 0, 0)
      setPayouts(totalPayouts)
    }
    if (ctc?.votingPeriod) getSongInfoFromCtc()
  }, [ctc?.votingPeriod])

  const handleReceivePayouts = async () => {
    await ctc.receivePayout(track.songId, 1)
  }

  const handleMouseEnter = () => !isMobile && setHovering(true)
  const handleMouseLeave = () => !isMobile && setHovering(false)

  const hasVoted = track.votes.some((v) => v.userId === user?.wallet)
  const shouldShowVoteButton = user && !hasVoted

  const handleVote = async () => {
    await ctc.vote(track.songId, (wallet, votingPeriod) =>
      addVote(wallet, track.id, votingPeriod),
    )
    console.log('done voting')
  }

  return (
    <Wrapper>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgImage={track.coverArt}
      >
        <AudioCardMenu track={track} isOpenToPublic={false} />
        <CoverArt src={track.coverArt} />
        {isHovering &&
          (isTrackPlaying ? <PauseButton /> : <PlayButton track={track} />)}
      </ImageContainer>
      <MetaData>
        <Meta>
          <TitleInfo>
            {track.title} <br />{' '}
            <Artist>{truncateWalletAddress(track.artist.wallet)}</Artist>
          </TitleInfo>
          <RightCol>
            <Realesed>{moment(track.createdAt).calendar()}</Realesed>
            {shouldShowVoteButton && <button onClick={handleVote}>Vote</button>}
          </RightCol>
        </Meta>
        {isProfilePage && (
          <p>Payouts: {Number(formatCurrency(payouts)).toFixed(5)}</p>
        )}
        {isProfilePage && (
          <button onClick={handleReceivePayouts}>ReceivePayout</button>
        )}
      </MetaData>
    </Wrapper>
  )
}
