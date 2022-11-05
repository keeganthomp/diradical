import styled from 'styled-components'
import QRCode from 'react-qr-code'
import Loader from 'components/ui/Loader'
import React from 'react'
import useWalletBalance from 'hooks/useWalletBalance'
import useUser from 'hooks/useUser'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 1.75rem;
  color: #fff;
`
const Balance = styled.p`
  font-size: 12px;
  font-weight: 200;
  font-style: italic;
`

function Wallet() {
  const { data: user } = useUser()
  const { balance, isFetching } = useWalletBalance()

  if (user?.error) return null

  if (!user)
    return (
      <Container>
        <Loader />
      </Container>
    )

  return (
    <Container>
      <QRCode size={120} value={`algorand://${user.walletAddress}`} />
      {isFetching ? (
        <Loader />
      ) : (
        <Balance>Balance: {balance / 1000000} Algo</Balance>
      )}
    </Container>
  )
}

export default Wallet
