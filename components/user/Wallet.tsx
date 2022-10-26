import styled from 'styled-components'
import QRCode from 'react-qr-code'
import { User } from '@prisma/client'
import { useQuery } from 'react-query'

const Container = styled.div``

function Wallet() {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery<User>(
    'userWallet',
    () => fetch(`/api/user`).then((res) => res.json()),
    {
      refetchInterval: 30000,
    },
  )
  console.log('user', user)
  return (
    <Container>
      <QRCode value='algorand://AMESZ5UX7ZJL5M6GYEHXM63OMFCPOJ23UXCQ6CVTI2HVX6WUELYIY262WI' />
    </Container>
  )
}

export default Wallet
