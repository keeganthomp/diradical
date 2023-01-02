import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { Button } from 'components/ui/Buttons'
import { useRouter } from 'next/router'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import useUserMusic from 'hooks/music/useUserMusic'
import { truncateWalletAddress } from 'utils'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h3`
  font-weight: 200;
  margin: 0;
`

const VoteButton = styled(Button)`
  width: 10rem;
  margin: 1rem 0;
`

export default function ArtistPage() {
  const router = useRouter()
  const artistWallet = router.query.artistId
  const { user } = useUser()
  const ctc = useContract()

  const { tracks, isFetching } = useUserMusic(artistWallet as string)

  const handleVote = async () => {
    await ctc.vote(artistWallet as string)
    console.log('done voting')
  }

  const showVoteButton =
    user &&
    ctc.votingPeriod &&
    !user.castedVotes.some((v) => v.period === ctc.votingPeriod)

  if (isFetching) return <Loader color='#000' />

  return (
    <Container>
      <Heading>{truncateWalletAddress(artistWallet as string)}</Heading>
      {showVoteButton && <VoteButton onClick={handleVote}>Vote</VoteButton>}
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
