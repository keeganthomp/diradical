import useContract from 'hooks/useContract'
import seasonState from 'atoms/season'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import moment from 'moment'

export default function useSeason() {
  const [season, setSeason] = useRecoilState(seasonState)
  const ctc = useContract()

  useEffect(() => {
    let mounted = true
    const asyncFetchSeasonInfo = async () => {
      if (!ctc?.votingPeriod) return
      const { payout, members, votes } = await ctc.getSeasonInfo(
        ctc.votingPeriod,
      )
      const current = ctc.votingPeriod
      const end = moment(ctc.endPeriodTime * 1000).fromNow()
      const hasEnded = ctc.currentSecs > ctc.endPeriodTime
      if (mounted && !season) {
        setSeason({
          hasEnded,
          current,
          end,
          payout,
          members,
          votes,
        })
      }
    }
    asyncFetchSeasonInfo()
    return () => {
      mounted = false
    }
  }, [ctc?.votingPeriod])

  return { season }
}
