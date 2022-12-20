import useContract from 'hooks/useContract'
import seasonState from 'atoms/season'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import moment from 'moment'

export default function useSeason() {
  const [season, setSeason] = useRecoilState(seasonState)
  const ctc = useContract()

  useEffect(() => {
    if (ctc?.votingPeriod) {
      setSeason({
        current: ctc.votingPeriod,
        end: moment(ctc.endPeriodTime * 1000).fromNow(),
        hasEnded: ctc.currentSecs > ctc.endPeriodTime,
      })
    }
  }, [ctc?.votingPeriod])

  return { season }
}
