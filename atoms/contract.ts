import { atom } from 'recoil'

const contractViewState = atom({
  key: 'contract',
  default: {
    votingPeriod: null as null | number,
    currentSecs: null as null | number,
    currentBlock: null as null | number,
    contractBalance: null as null | number | string,
    membershipCost: null as null | number | string,
    endPeriodTime: null as null | number,
    periodPayouts: null as null | number | string,
  },
})

export default contractViewState
