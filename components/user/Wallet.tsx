import styled from 'styled-components'
import QRCode from 'react-qr-code'
import { User } from '@prisma/client'
import { useQuery } from 'react-query'
import Loader from 'components/ui/Loader'
import React from 'react'
import stdlib from 'lib/reach'
import axios from 'axios'

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
  const [bal, setBal] = React.useState(null as number)
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

  React.useEffect(() => {
    if (!user) return
    const getBal = async () => {
      try {
        const { data } = await axios.get(
          `https://algoindexer.testnet.algoexplorerapi.io/v2/accounts/${user.walletAddress}`,
        )
        setBal(data.account.amount)
      } catch {
        // the balance wallet balance be 0
        setBal(0)
      }
    }
    getBal()
  }, [user])

  if (isLoading || bal === null)
    return (
      <Container>
        <Loader />
      </Container>
    )
  if (error)
    return (
      <Container>
        <div>Something went wrong</div>
      </Container>
    )
  return (
    <Container>
      <QRCode value={`algorand://${user.walletAddress}`} />
      <Address>{user.walletAddress}</Address>
      <Message>use the QR code above to fund account with algo</Message>
      {/* micro algos */}
      <Balance>Balance: {bal / 1000000} Algo</Balance>
    </Container>
  )
}

export default Wallet
