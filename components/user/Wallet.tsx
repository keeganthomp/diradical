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
  color: #000;
`
const Address = styled.p`
  font-weight: 200;
  font-size: 10px;
`
const Message = styled.p``
const Balance = styled.p``

function Wallet() {
  const { data: user } = useUser()
  const { balance, isFetching } = useWalletBalance()

  if (!user)
    return (
      <Container>
        <Loader />
      </Container>
    )

  return (
    <Container>
      <QRCode value={`algorand://${user.walletAddress}`} />
      <Address>{user.walletAddress}</Address>
      <Message>use the QR code above to fund account with algo</Message>
      {/* micro algos */}
      {isFetching ? (
        <Loader />
      ) : (
        <Balance>Balance: {balance / 1000000} Algo</Balance>
      )}
    </Container>
  )
}

export default Wallet
