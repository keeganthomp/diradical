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
    if (ctc?.votingPeriod) {
      if (mounted && !season) {
        setSeason({
          current: ctc.votingPeriod,
          end: moment(ctc.endPeriodTime * 1000).fromNow(),
          hasEnded: ctc.currentSecs > ctc.endPeriodTime,
        })
      }
    }
    return () => {
      mounted = false
    }
  }, [ctc?.votingPeriod])

  return { season }
}
