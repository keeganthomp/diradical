import styled from 'styled-components'
import { devices } from 'styles/theme'

type Props = {
  progress: number
  duration: number
}

const Container = styled.div`
  grid-area: progress;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: baseline;
  p {
    margin: 0;
    font-size: 15px;
  }
  @media ${devices.mobile} {
    position: absolute;
    bottom: 0;
  }
`

const Bar = styled.div`
  height: 2px;
  width: 15rem;
  position: relative;
  margin: 0 0.5rem;
  border-radius: 7px;
  overflow: hidden;
  background: #aeadadcd;
  @media ${devices.mobile} {
    margin: 0;
    border-radius: 0px;
    width: 100vw;
  }
`
const BarFill = styled.div<Props>`
  background: ${(p) => p.theme.colors.main};
  height: 100%;
  width: ${(p) => `${p.progress}%`};
  position: absolute;
  left: 0;
`

const CurrentTime = styled.p`
  width: 2.5rem;
  text-align: right;
  @media ${devices.mobile} {
    display: none;
  }
`
const Duration = styled.p`
  width: 2.5rem;
  @media ${devices.mobile} {
    display: none;
  }
`

const formatTime = (secs: number) => {
  const minutes = Math.floor(secs / 60)
  const seconds = Math.round(secs % 60)
  const fmtSeconds = seconds < 10 ? `0${seconds}` : seconds
  return `${minutes}:${fmtSeconds}`
}

export default function ProgressBar({ progress, duration }: Props) {
  const progressValue = progress && duration ? (progress / duration) * 100 : 0
  return (
    <Container>
      <CurrentTime>{formatTime(progress)}</CurrentTime>
      <Bar>
        <BarFill progress={progressValue} />
      </Bar>
      <Duration>{formatTime(duration)}</Duration>
    </Container>
  )
}
