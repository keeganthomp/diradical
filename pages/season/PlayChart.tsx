import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import mobile from 'is-mobile'
import useUser from 'hooks/useUser'
import { devices } from 'styles/theme'

const Wrapper = styled.div`
  width: 100%;
  height: 36rem;
  @media ${devices.mobile} {
    height: 16rem;
  }
`

const LabelText = styled.text`
  font-size: 16px;
  @media ${devices.mobile} {
    font-size: 12px;
  }
`

const Fill_COLOR = '#00C49F'

const RADIAN = Math.PI / 180

export default function PlayChart() {
  const isMobile = mobile()
  const { distribution } = useUser()

  if (!distribution) return null

  if (distribution.artists.length === 0)
    return (
      <Wrapper>
        <p>No listens to calculate</p>
      </Wrapper>
    )

  const chartData = distribution?.artists
    ? distribution.artists.map((dist) => ({
        name: dist.artist.username,
        value: dist.totalPlays,
      }))
    : []

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    payload,
  }) => {
    const { name } = payload
    const radius = 25 + innerRadius + (outerRadius - innerRadius)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    return (
      <>
        <LabelText
          x={x}
          y={y}
          fill='#000'
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline='central'
        >
          {isMobile ? name : `${name} (${(percent * 100).toFixed(0)}%)`}
        </LabelText>
      </>
    )
  }

  return (
    <Wrapper>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={chartData}
            cx='50%'
            cy='50%'
            label={renderCustomizedLabel}
            outerRadius={isMobile ? 87 : 250}
            fill={Fill_COLOR}
            dataKey='value'
          />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}
