import styled from 'styled-components'
import QRCode from 'react-qr-code'
import React from 'react'
import useReachAccount from 'hooks/useReachAccount'
import { truncateAddress } from 'lib/reach'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 1.75rem;
  color: #fff;
  position: absolute;
  bottom: 1rem;
`

const WalletAddress = styled.p``

function Wallet() {
  const { reachAcc } = useReachAccount()
  if (!reachAcc) return null
  return (
    <Container>
      <WalletAddress>
        {truncateAddress(reachAcc.networkAccount.address)}
      </WalletAddress>
      <QRCode size={120} value={reachAcc.networkAccount.address} />
    </Container>
  )
}

export default Wallet
