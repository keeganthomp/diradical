import { TrackWithVotes } from 'types'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayButton from 'components/ui/Buttons/PlayButton'
import PauseButton from 'components/ui/Buttons/PauseButton'
import { devices } from 'styles/theme'
import React, { useState } from 'react'
import mobile from 'is-mobile'
import moment from 'moment'
import useContract from 'hooks/useCtc'
import { truncateAddress } from 'lib/reach'
import useReachAccount from 'hooks/useReachAccount'
import AudioCardMenu from './Menu'
import useUser from 'hooks/useUser'
import API from 'lib/api'

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
  const { vote } = useContract()
  const { reachAcc } = useReachAccount()
  const { user } = useUser()
  const isMobile = mobile()
  const [isHovering, setHovering] = useState(isMobile)
  const [isVoting, setIsVoting] = useState(false)
  const { isPlaying, track: nowPlayingTrack } = useNowPlaying()
  const isTrackPlaying =
    nowPlayingTrack && isPlaying && track.id === nowPlayingTrack.id

  const handleMouseEnter = () => !isMobile && setHovering(true)
  const handleMouseLeave = () => !isMobile && setHovering(false)

  const hasVoted = track.votes.some((v) => v.userId === user?.wallet)
  const shouldShowVoteButton = user && !hasVoted

  const handleVote = async () => {
    if (!reachAcc) return
    setIsVoting(true)
    await vote(reachAcc, track.songId)
    await API.addVote(reachAcc.networkAccount.address, track.id)
    setIsVoting(false)
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
            <Artist>{truncateAddress(track.artist.wallet)}</Artist>
          </TitleInfo>
          <RightCol>
            <Realesed>{moment(track.createdAt).calendar()}</Realesed>
            {shouldShowVoteButton && (
              <button disabled={isVoting} onClick={handleVote}>
                Vote
              </button>
            )}
          </RightCol>
        </Meta>
      </MetaData>
    </Wrapper>
  )
}
