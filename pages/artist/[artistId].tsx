import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import prisma from 'lib/prisma'
import { Button } from 'components/ui/Buttons'
import { useRouter } from 'next/router'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'

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

export default function ArtistPage({ artistTracks }) {
  const { user } = useUser()
  const ctc = useContract()
  const router = useRouter()
  const artistWallet = router.query.artistId

  const handleVote = async () => {
    await ctc.vote(artistWallet as string)
    console.log('done voting')
  }

  const showVoteButton =
    user &&
    ctc.votingPeriod &&
    !user.castedVotes.some((v) => v.period === ctc.votingPeriod)

  return (
    <Container>
      <Heading>{artistWallet}</Heading>
      {showVoteButton && <VoteButton onClick={handleVote}>Vote</VoteButton>}
      <AudioGrid tracks={artistTracks} />
    </Container>
  )
}

export const getServerSideProps = async (context) => {
  const artistTracks = await prisma.track.findMany({
    where: { wallet: context.params.artistId },
    include: { artist: { select: { wallet: true } } },
  })
  return { props: { artistTracks: JSON.parse(JSON.stringify(artistTracks)) } }
}
