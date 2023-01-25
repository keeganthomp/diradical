import styled from 'styled-components'
import { Track, Album } from 'types'
import React from 'react'
import AudioCard from './AudioCard'

type Props = {
  title: string
  tracks?: Track[]
  albums?: Album[]
}

const Wrapper = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  &:not(:last-child) {
    margin-bottom: 1.75rem;
  }
`
const RowContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
`

const RowTitle = styled.h3`
  position: sticky;
  left: 0;
  margin: 0;
  padding-bottom: 1.75rem;
`

export default function AudioRow({ title, tracks, albums }: Props) {
  return (
    <Wrapper>
      <RowTitle>{title}</RowTitle>
      <RowContainer>
        {tracks
          ? tracks.map((t) => <AudioCard key={t.id} track={t} />)
          : albums?.map((a) => <AudioCard key={a.id} album={a} />)}
      </RowContainer>
    </Wrapper>
  )
}
