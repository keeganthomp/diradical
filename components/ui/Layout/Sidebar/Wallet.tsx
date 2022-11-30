import styled from 'styled-components'
import QRCode from 'react-qr-code'
import Loader from 'components/ui/Loader'
import React from 'react'

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
const Balance = styled.p`
  font-size: 12px;
  font-weight: 200;
  font-style: italic;
`

function CustodialWallet() {
  const [fetching, setFetching] = React.useState(false)
  const [bal, setBal] = React.useState<null | number>(null)

  return (
    <Container>
      <QRCode size={120} value={''} />
      {fetching || bal === null ? (
        <Loader />
      ) : (
        <Balance>Balance: {bal}</Balance>
      )}
    </Container>
  )
}

export default CustodialWallet
