import { atom } from 'recoil'

const contractViewState = atom({
  key: 'contract',
  default: {
    membershipCost: null as null | number | string,
  },
})

export default contractViewState
