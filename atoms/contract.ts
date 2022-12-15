import { atom } from 'recoil'

const contractViewState = atom({
  key: 'contract',
  default: {
    votingPeriod: null as null | number,
    currentSecs: null as null | number,
    currentBlock: null as null | number,
    membershipCost: null as null | number | string,
    endPeriodTime: null as null | number,
  },
})

export default contractViewState
