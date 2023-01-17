import React, { useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { Button } from 'components/ui/Buttons'
import styled from 'styled-components'
import { devices } from 'styles/theme'

const Wrapper = styled.div`
  width: 100%;
`

const Total = styled.h3`
  text-align: center;
  margin: 0;
`

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 1.25rem;
  padding: 2rem 0;
  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`

const ArtistContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 0.75rem;
  border-radius: 15px;
  border: 1px solid #e9e9e9;
`

export default function PayoutsToSend() {
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating, distribution } = useUser()

  // amount is in cents
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount / 100)
  }

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  if (distribution.artists.length === 0) return <p>No suggested payouts</p>

  return (
    <Wrapper>
      <Total>Total to give: {formatCurrency(distribution.totalAmount)}</Total>
      <ArtistsGrid>
        {distribution.artists.map((dist, i) => {
          return (
            <ArtistContainer key={i}>
              <p>{dist.artist.username}</p>
              <p>{dist.percentOfListens * 100}% of listen time</p>
              <p>{formatCurrency(dist.suggestedAmount)}</p>
            </ArtistContainer>
          )
        })}
      </ArtistsGrid>
    </Wrapper>
  )
}
