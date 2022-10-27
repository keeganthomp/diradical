import styled from 'styled-components'
import QRCode from 'react-qr-code'
import { User } from '@prisma/client'
import { useQuery } from 'react-query'
import Loader from 'components/ui/Loader'
import React from 'react'
import stdlib from 'lib/reach'
import axios from 'axios'
import useWalletBalance from 'hooks/useWalletBalance'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 1.75rem;
`
const Address = styled.p`
  font-weight: 200;
  font-size: 10px;
`
const Message = styled.p``
const Balance = styled.p``

function Wallet() {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery<User>(
    'user',
    () => fetch(`/api/user`).then((res) => res.json()),
    {
      refetchInterval: 30000,
    },
  )
  const { isLoading: isFetchingBalance, balance } = useWalletBalance(user)
  if (isFetchingBalance)
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
      <Balance>Balance: {balance / 1000000} Algo</Balance>
    </Container>
  )
}

export default Wallet
