import React from 'react'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import { useRouter } from 'next/router'

const BOXES = [
  { title: 'Upload', description: 'Upload tracks', to: '/upload' },
  { title: 'Listen', description: 'Listen to music', to: '/listen' },
]

const Container = styled.div`
  padding: 3rem 4rem;
  height: 100%;
  text-align: center;
  @media ${devices.mobile} {
    overflow: hidden;
    padding: 0.5rem;
  }
`

const PageDescription = styled.p`
  font-weight: bold;
  font-size: 3rem;
  @media ${devices.mobile} {
    font-size: 2.2rem;
  }
`
const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 3rem 0;
  @media ${devices.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 0;
  }
`

const BoxContainer = styled.div`
  background: #fff;
  border: 2px solid ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.main};
  border-radius: 10px;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${(p) => p.theme.colors.main};
    color: #fff;
  }
  @media ${devices.mobile} {
    background: ${(p) => p.theme.colors.main};
    color: #fff;
    height: 2rem;
  }
`

const BoxTitle = styled.p`
  font-weight: bold;
  font-size: 2rem;
  @media ${devices.mobile} {
    font-size: 1.5rem;
  }
`
const BoxDescription = styled.p`
  font-style: italic;
  @media ${devices.mobile} {
    display: none;
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InfoTitle = styled.p`
  padding-bottom: 1rem;
`

const Box = ({ title, description, onClick }) => (
  <BoxContainer onClick={onClick}>
    <BoxTitle>{title}</BoxTitle>
    <BoxDescription>{description}</BoxDescription>
  </BoxContainer>
)

export default function HomePage() {
  const router = useRouter()
  return (
    <Container>
      <PageDescription>What can you do?</PageDescription>
      <BoxWrapper>
        {BOXES.map((box) => (
          <Box key={box.title} {...box} onClick={() => router.push(box.to)} />
        ))}
      </BoxWrapper>
      <InfoContainer>
        <InfoTitle>
          Uploading and voting require you to login & have an active membership
        </InfoTitle>
      </InfoContainer>
    </Container>
  )
}
