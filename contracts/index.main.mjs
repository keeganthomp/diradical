// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12'
export const _versionHash = '0.1.12 (1f68dfdb)'
export const _backendVersion = 26

export function getExports(s) {
  const stdlib = s.reachStdlib
  return {}
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib
  const ctc0 = stdlib.T_UInt
  return {
    songAdded: [ctc0],
  }
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib
  const ctc0 = stdlib.T_Address
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc3 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc0],
    ['art', ctc2],
    ['audio', ctc2],
    ['votes', ctc1],
  ])
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc5 = stdlib.T_Bool
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc0])
  const ctc7 = stdlib.T_Null
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc1,
  })
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc3,
  })
  const ctc10 = stdlib.T_Data({
    None: ctc7,
    Some: ctc5,
  })
  const map0_ctc = ctc8

  const map1_ctc = ctc9

  const map2_ctc = ctc8

  const map3_ctc = ctc10

  const map4_ctc = ctc8

  const map5_ctc = ctc8

  const map6_ctc = ctc10

  const _getContractBalance = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async () => {
        const v4794 = stdlib.safeAdd(v4744, v4743)

        return v4794
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getCurrentVotingPeriod = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async () => {
        return v4748
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getMembershipCost = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async () => {
        return v4732
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getMembershipExp = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async (_v4795) => {
        const v4795 = stdlib.protect(ctc0, _v4795, null)

        const v4796 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v4795),
          null,
        )
        const v4797 = {
          None: 0,
          Some: 1,
        }[v4796[0]]
        const v4798 = stdlib.eq(
          v4797,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4798, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:138:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:137:29:application call to [unknown function] (defined at: ./index.rsh:137:29:application)',
          ],
          msg: 'is member',
          who: 'Module',
        })
        const v4801 = stdlib.fromSome(
          v4796,
          stdlib.checkedBigNumberify(
            './index.rsh:139:43:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v4801
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getPeriodEndTime = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async () => {
        return v4742
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getSong = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async (_v4784) => {
        const v4784 = stdlib.protect(ctc1, _v4784, null)

        const v4785 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, v4784),
          null,
        )
        const v4786 = {
          None: 0,
          Some: 1,
        }[v4785[0]]
        const v4787 = stdlib.eq(
          v4786,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4787, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:130:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:129:20:application call to [unknown function] (defined at: ./index.rsh:129:20:application)',
          ],
          msg: 'song exists',
          who: 'Module',
        })
        const v4790 = '                                              '
        const v4792 = {
          art: v4790,
          audio: v4790,
          creator: v4731,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v4793 = stdlib.fromSome(v4785, v4792)

        return v4793
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getSongPayout = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async (_v4802, _v4803) => {
        const v4802 = stdlib.protect(ctc1, _v4802, null)
        const v4803 = stdlib.protect(ctc1, _v4803, null)

        const v4804 = stdlib.protect(
          map5_ctc,
          await viewlib.viewMapRef(5, v4803),
          null,
        )
        const v4805 = {
          None: 0,
          Some: 1,
        }[v4804[0]]
        const v4806 = stdlib.eq(
          v4805,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4806, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:141:61:application call to "getSongPayout" (defined at: ./index.rsh:102:47:function exp)',
            'at ./index.rsh:141:26:application call to [unknown function] (defined at: ./index.rsh:141:26:application)',
          ],
          msg: 'voting period ended',
          who: 'Module',
        })
        const v4809 = stdlib.fromSome(
          v4804,
          stdlib.checkedBigNumberify(
            './index.rsh:104:63:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4810 = stdlib.protect(
          map4_ctc,
          await viewlib.viewMapRef(4, v4803),
          null,
        )
        const v4811 = stdlib.fromSome(
          v4810,
          stdlib.checkedBigNumberify(
            './index.rsh:107:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4812 = [v4803, v4802]
        const v4813 = stdlib.protect(
          map2_ctc,
          await viewlib.viewMapRef(2, stdlib.digest([ctc4], [v4812])),
          null,
        )
        const v4814 = stdlib.fromSome(
          v4813,
          stdlib.checkedBigNumberify(
            './index.rsh:111:46:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4815 = stdlib.safeMuldiv(v4809, v4814, v4811)

        return v4815
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _hasVoted = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4731, v4732] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4731,
        v4732,
        v4742,
        v4743,
        v4744,
        v4745,
        v4746,
        v4747,
        v4748,
        v4752,
        v4756,
      ] = svs
      return await (async (_v4816, _v4817) => {
        const v4816 = stdlib.protect(ctc1, _v4816, null)
        const v4817 = stdlib.protect(ctc0, _v4817, null)

        const v4818 = [v4748, v4816, v4817]
        const v4819 = stdlib.protect(
          map3_ctc,
          await viewlib.viewMapRef(3, stdlib.digest([ctc6], [v4818])),
          null,
        )
        const v4820 = stdlib.fromSome(v4819, false)

        return v4820
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  return {
    infos: {
      getContractBalance: {
        decode: _getContractBalance,
        dom: [],
        rng: ctc1,
      },
      getCurrentVotingPeriod: {
        decode: _getCurrentVotingPeriod,
        dom: [],
        rng: ctc1,
      },
      getMembershipCost: {
        decode: _getMembershipCost,
        dom: [],
        rng: ctc1,
      },
      getMembershipExp: {
        decode: _getMembershipExp,
        dom: [ctc0],
        rng: ctc1,
      },
      getPeriodEndTime: {
        decode: _getPeriodEndTime,
        dom: [],
        rng: ctc1,
      },
      getSong: {
        decode: _getSong,
        dom: [ctc1],
        rng: ctc3,
      },
      getSongPayout: {
        decode: _getSongPayout,
        dom: [ctc1, ctc1],
        rng: ctc1,
      },
      hasVoted: {
        decode: _hasVoted,
        dom: [ctc1, ctc0],
        rng: ctc5,
      },
    },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    },
  }
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib
  const ctc0 = stdlib.T_Null
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  })
  const ctc3 = stdlib.T_Address
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc5 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['votes', ctc1],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Bool
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7,
  })
  const ctc9 = stdlib.T_Tuple([ctc2, ctc6, ctc2, ctc8, ctc2, ctc2, ctc8])
  return {
    mapDataTy: ctc9,
  }
}
export async function Deployer(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Deployer expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for Deployer expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const ctc0 = stdlib.T_Null
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  })
  const ctc3 = stdlib.T_Address
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc5 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['votes', ctc1],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Bool
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7,
  })
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc10 = stdlib.T_Tuple([])
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Data({
    addSong0_655: ctc9,
    buyMembership0_655: ctc10,
    endVotingPeriod0_655: ctc10,
    receivePayout0_655: ctc11,
    vote0_655: ctc12,
  })
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc3])

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  })

  const map1_ctc = ctc6
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc,
  })

  const map2_ctc = ctc2
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc,
  })

  const map3_ctc = ctc8
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc,
  })

  const map4_ctc = ctc2
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc,
  })

  const map5_ctc = ctc2
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc,
  })

  const map6_ctc = ctc8
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc,
  })

  const v4728 = stdlib.protect(
    ctc1,
    interact.membershipCost,
    "for Deployer's interact field membershipCost",
  )

  const txn1 = await ctc.sendrecv({
    args: [v4728],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:51:5:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:51:5:decimal',
        stdlib.UInt_max,
        '0',
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)
      stdlib.simMapDupe(sim_r, 1, map1)
      stdlib.simMapDupe(sim_r, 2, map2)
      stdlib.simMapDupe(sim_r, 3, map3)
      stdlib.simMapDupe(sim_r, 4, map4)
      stdlib.simMapDupe(sim_r, 5, map5)
      stdlib.simMapDupe(sim_r, 6, map6)

      const {
        data: [v4732],
        secs: v4734,
        time: v4733,
        didSend: v27,
        from: v4731,
      } = txn1

      sim_r.isHalt = false

      return sim_r
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false,
  })
  const {
    data: [v4732],
    secs: v4734,
    time: v4733,
    didSend: v27,
    from: v4731,
  } = txn1
  const txn2 = await ctc.sendrecv({
    args: [v4731, v4732],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4733,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:75:5:decimal',
        stdlib.UInt_max,
        '0',
      ),
      [],
    ],
    sim_p: async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)
      stdlib.simMapDupe(sim_r, 1, map1)
      stdlib.simMapDupe(sim_r, 2, map2)
      stdlib.simMapDupe(sim_r, 3, map3)
      stdlib.simMapDupe(sim_r, 4, map4)
      stdlib.simMapDupe(sim_r, 5, map5)
      stdlib.simMapDupe(sim_r, 6, map6)

      const {
        data: [],
        secs: v4737,
        time: v4736,
        didSend: v32,
        from: v4735,
      } = txn2

      const v4741 = stdlib.safeAdd(
        v4737,
        stdlib.checkedBigNumberify(
          './index.rsh:5:19:decimal',
          stdlib.UInt_max,
          '5',
        ),
      )
      const v4742 = v4741
      const v4743 = stdlib.checkedBigNumberify(
        './index.rsh:88:29:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4744 = stdlib.checkedBigNumberify(
        './index.rsh:88:26:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4745 = stdlib.checkedBigNumberify(
        './index.rsh:88:23:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4746 = stdlib.checkedBigNumberify(
        './index.rsh:88:62:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4747 = stdlib.checkedBigNumberify(
        './index.rsh:88:59:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4748 = stdlib.checkedBigNumberify(
        './index.rsh:88:32:decimal',
        stdlib.UInt_max,
        '1',
      )
      const v4749 = v4736
      const v4752 = v4737
      const v4756 = stdlib.checkedBigNumberify(
        './index.rsh:47:9:after expr stmt semicolon',
        stdlib.UInt_max,
        '0',
      )

      if (
        await (async () => {
          return true
        })()
      ) {
        sim_r.isHalt = false
      } else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */,
        })
        sim_r.isHalt = true
      }
      return sim_r
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1],
    waitIfNotPresent: false,
  })
  const {
    data: [],
    secs: v4737,
    time: v4736,
    didSend: v32,
    from: v4735,
  } = txn2
  const v4738 = stdlib.addressEq(v4731, v4735)
  stdlib.assert(v4738, {
    at: './index.rsh:75:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer',
  })
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:76:19:application',
    fs: [
      'at ./index.rsh:76:19:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)',
      'at ./index.rsh:76:19:application call to "liftedInteract" (defined at: ./index.rsh:76:19:application)',
    ],
    msg: 'ready',
    who: 'Deployer',
  })

  const v4741 = stdlib.safeAdd(
    v4737,
    stdlib.checkedBigNumberify(
      './index.rsh:5:19:decimal',
      stdlib.UInt_max,
      '5',
    ),
  )
  let v4742 = v4741
  let v4743 = stdlib.checkedBigNumberify(
    './index.rsh:88:29:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4744 = stdlib.checkedBigNumberify(
    './index.rsh:88:26:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4745 = stdlib.checkedBigNumberify(
    './index.rsh:88:23:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4746 = stdlib.checkedBigNumberify(
    './index.rsh:88:62:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4747 = stdlib.checkedBigNumberify(
    './index.rsh:88:59:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4748 = stdlib.checkedBigNumberify(
    './index.rsh:88:32:decimal',
    stdlib.UInt_max,
    '1',
  )
  let v4749 = v4736
  let v4752 = v4737
  let v4756 = stdlib.checkedBigNumberify(
    './index.rsh:47:9:after expr stmt semicolon',
    stdlib.UInt_max,
    '0',
  )

  let txn3 = txn2
  while (
    await (async () => {
      return true
    })()
  ) {
    const txn4 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    })
    const {
      data: [v5083],
      secs: v5085,
      time: v5084,
      didSend: v4161,
      from: v5082,
    } = txn4
    switch (v5083[0]) {
      case 'addSong0_655': {
        const v5086 = v5083[1]
        undefined /* setApiDetails */
        const v5093 = stdlib.addressEq(v5082, v4731)
        const v5094 = v5093 ? false : true
        stdlib.assert(v5094, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:174:35:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5096 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5082),
          null,
        )
        const v5097 = {
          None: 0,
          Some: 1,
        }[v5096[0]]
        const v5098 = stdlib.eq(
          v5097,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5098, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:176:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
            'at ./index.rsh:174:35:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5207 =
          v5086[
            stdlib.checkedBigNumberify(
              './index.rsh:174:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5208 =
          v5086[
            stdlib.checkedBigNumberify(
              './index.rsh:174:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v5219 = v5085
        const v5221 = {
          art: v5207,
          audio: v5208,
          creator: v5082,
          id: v5085,
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        await stdlib.mapSet(map1, v5085, v5221)
        null
        await txn4.getOutput('addSong', 'v5219', ctc1, v5219)
        const cv4742 = v4742
        const cv4743 = v4743
        const cv4744 = v4744
        const cv4745 = v4745
        const cv4746 = v4746
        const cv4747 = v4747
        const cv4748 = v4748
        const cv4749 = v5084
        const cv4752 = v5085
        const cv4756 = v4756

        v4742 = cv4742
        v4743 = cv4743
        v4744 = cv4744
        v4745 = cv4745
        v4746 = cv4746
        v4747 = cv4747
        v4748 = cv4748
        v4749 = cv4749
        v4752 = cv4752
        v4756 = cv4756

        txn3 = txn4
        continue
        break
      }
      case 'buyMembership0_655': {
        const v5391 = v5083[1]
        undefined /* setApiDetails */
        const v5409 = stdlib.addressEq(v5082, v4731)
        const v5410 = v5409 ? false : true
        stdlib.assert(v5410, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:151:31:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5414 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5082),
          null,
        )
        const v5415 = stdlib.fromSome(
          v5414,
          stdlib.checkedBigNumberify(
            './index.rsh:155:61:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5416 = stdlib.lt(v5415, v4752)
        stdlib.assert(v5416, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:156:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:151:31:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'membership still valid',
          who: 'Deployer',
        })
        const v5510 = stdlib.add(v4756, v4732)
        const v5540 = stdlib.safeAdd(
          v5085,
          stdlib.checkedBigNumberify(
            './index.rsh:5:19:decimal',
            stdlib.UInt_max,
            '5',
          ),
        )
        const v5543 = stdlib.lt(v5415, v5085)
        stdlib.assert(v5543, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:156:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:159:16:application call to [unknown function] (defined at: ./index.rsh:159:16:function exp)',
          ],
          msg: 'membership still valid',
          who: 'Deployer',
        })
        await stdlib.mapSet(map0, v5082, v5540)
        await txn4.getOutput('buyMembership', 'v5540', ctc1, v5540)
        const v5550 = stdlib.safeAdd(
          v4745,
          stdlib.checkedBigNumberify(
            './index.rsh:163:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5551 = stdlib.safeAdd(v4744, v4732)
        const cv4742 = v4742
        const cv4743 = v4743
        const cv4744 = v5551
        const cv4745 = v5550
        const cv4746 = v4746
        const cv4747 = v4747
        const cv4748 = v4748
        const cv4749 = v5084
        const cv4752 = v5085
        const cv4756 = v5510

        v4742 = cv4742
        v4743 = cv4743
        v4744 = cv4744
        v4745 = cv4745
        v4746 = cv4746
        v4747 = cv4747
        v4748 = cv4748
        v4749 = cv4749
        v4752 = cv4752
        v4756 = cv4756

        txn3 = txn4
        continue
        break
      }
      case 'endVotingPeriod0_655': {
        const v5696 = v5083[1]
        undefined /* setApiDetails */
        const v5727 = stdlib.addressEq(v5082, v4731)
        const v5728 = v5727 ? false : true
        stdlib.assert(v5728, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5730 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5082),
          null,
        )
        const v5731 = {
          None: 0,
          Some: 1,
        }[v5730[0]]
        const v5732 = stdlib.eq(
          v5731,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5732, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:228:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
            'at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5866 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v4748),
          null,
        )
        const v5867 = stdlib.fromSome(
          v5866,
          stdlib.checkedBigNumberify(
            './index.rsh:230:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5868 = stdlib.safeDiv(
          v4744,
          stdlib.checkedBigNumberify(
            './index.rsh:231:40:decimal',
            stdlib.UInt_max,
            '3',
          ),
        )
        const v5869 = stdlib.safeSub(v4744, v5868)
        const v5871 = stdlib.safeAdd(v5867, v5869)
        await stdlib.mapSet(map5, v4748, v5871)
        const v5872 = null
        await txn4.getOutput('endVotingPeriod', 'v5872', ctc0, v5872)
        const v5878 = stdlib.safeSub(v4744, v5869)
        const v5879 = stdlib.safeAdd(v4743, v5869)
        const v5880 = stdlib.safeAdd(
          v4748,
          stdlib.checkedBigNumberify(
            './index.rsh:243:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5881 = stdlib.safeAdd(
          v4742,
          stdlib.checkedBigNumberify(
            './index.rsh:5:19:decimal',
            stdlib.UInt_max,
            '5',
          ),
        )
        const cv4742 = v5881
        const cv4743 = v5879
        const cv4744 = v5878
        const cv4745 = v4745
        const cv4746 = v4746
        const cv4747 = stdlib.checkedBigNumberify(
          './index.rsh:245:13:decimal',
          stdlib.UInt_max,
          '0',
        )
        const cv4748 = v5880
        const cv4749 = v5084
        const cv4752 = v5085
        const cv4756 = v4756

        v4742 = cv4742
        v4743 = cv4743
        v4744 = cv4744
        v4745 = cv4745
        v4746 = cv4746
        v4747 = cv4747
        v4748 = cv4748
        v4749 = cv4749
        v4752 = cv4752
        v4756 = cv4756

        txn3 = txn4
        continue
        break
      }
      case 'receivePayout0_655': {
        const v6001 = v5083[1]
        undefined /* setApiDetails */
        const v6047 =
          v6001[
            stdlib.checkedBigNumberify(
              './index.rsh:251:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6048 =
          v6001[
            stdlib.checkedBigNumberify(
              './index.rsh:251:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v6049 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v6047),
          null,
        )
        const v6050 = '                                              '
        const v6052 = {
          art: v6050,
          audio: v6050,
          creator: v4731,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v6053 = stdlib.fromSome(v6049, v6052)
        const v6056 = v6053.creator
        const v6060 = stdlib.addressEq(v5082, v6056)
        stdlib.assert(v6060, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:253:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'not song creator',
          who: 'Deployer',
        })
        const v6062 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5082),
          null,
        )
        const v6063 = {
          None: 0,
          Some: 1,
        }[v6062[0]]
        const v6064 = stdlib.eq(
          v6063,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6064, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:254:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
            'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v6067 = {
          None: 0,
          Some: 1,
        }[v6049[0]]
        const v6068 = stdlib.eq(
          v6067,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6068, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v6070 = [v6048, v6047, v5082]
        const v6071 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, stdlib.digest([ctc14], [v6070])),
          null,
        )
        const v6072 = {
          None: 0,
          Some: 1,
        }[v6071[0]]
        const v6073 = stdlib.eq(
          v6072,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v6073, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:256:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'has received payout',
          who: 'Deployer',
        })
        const v6075 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v6048),
          null,
        )
        const v6076 = stdlib.fromSome(
          v6075,
          stdlib.checkedBigNumberify(
            './index.rsh:260:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6078 = {
          None: 0,
          Some: 1,
        }[v6075[0]]
        const v6079 = stdlib.eq(
          v6078,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6079, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:261:41:application call to "getSongPayout" (defined at: ./index.rsh:102:47:function exp)',
            'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'voting period ended',
          who: 'Deployer',
        })
        const v6083 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v6048),
          null,
        )
        const v6084 = stdlib.fromSome(
          v6083,
          stdlib.checkedBigNumberify(
            './index.rsh:107:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6085 = [v6048, v6047]
        const v6086 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc11], [v6085])),
          null,
        )
        const v6087 = stdlib.fromSome(
          v6086,
          stdlib.checkedBigNumberify(
            './index.rsh:111:46:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6088 = stdlib.safeMuldiv(v6076, v6087, v6084)
        const v6089 = stdlib.le(v6088, v6076)
        stdlib.assert(v6089, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v6092 = stdlib.ge(v4756, v6088)
        stdlib.assert(v6092, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        const v6241 = stdlib.sub(v4756, v6088)
        await stdlib.mapSet(map6, stdlib.digest([ctc14], [v6070]), true)
        const v6243 = stdlib.safeSub(v6076, v6088)
        await stdlib.mapSet(map5, v6048, v6243)
        await txn4.getOutput('receivePayout', 'v6088', ctc1, v6088)
        const v6251 = stdlib.safeSub(v4743, v6088)
        const cv4742 = v4742
        const cv4743 = v6251
        const cv4744 = v4744
        const cv4745 = v4745
        const cv4746 = v4746
        const cv4747 = v4747
        const cv4748 = v4748
        const cv4749 = v5084
        const cv4752 = v5085
        const cv4756 = v6241

        v4742 = cv4742
        v4743 = cv4743
        v4744 = cv4744
        v4745 = cv4745
        v4746 = cv4746
        v4747 = cv4747
        v4748 = cv4748
        v4749 = cv4749
        v4752 = cv4752
        v4756 = cv4756

        txn3 = txn4
        continue
        break
      }
      case 'vote0_655': {
        const v6306 = v5083[1]
        undefined /* setApiDetails */
        const v6403 =
          v6306[
            stdlib.checkedBigNumberify(
              './index.rsh:203:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6404 = stdlib.addressEq(v5082, v4731)
        const v6405 = v6404 ? false : true
        stdlib.assert(v6405, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v6407 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5082),
          null,
        )
        const v6408 = {
          None: 0,
          Some: 1,
        }[v6407[0]]
        const v6409 = stdlib.eq(
          v6408,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6409, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:205:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
            'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v6411 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v6403),
          null,
        )
        const v6412 = {
          None: 0,
          Some: 1,
        }[v6411[0]]
        const v6413 = stdlib.eq(
          v6412,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6413, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v6415 = [v4748, v6403, v5082]
        const v6416 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc14], [v6415])),
          null,
        )
        const v6417 = {
          None: 0,
          Some: 1,
        }[v6416[0]]
        const v6418 = stdlib.eq(
          v6417,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v6418, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
            'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
          ],
          msg: 'has voted',
          who: 'Deployer',
        })
        const v6579 = '                                              '
        const v6581 = {
          art: v6579,
          audio: v6579,
          creator: v4731,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v6582 = stdlib.fromSome(v6411, v6581)
        const v6583 = v6582.art
        const v6584 = v6582.audio
        const v6585 = v6582.creator
        const v6586 = v6582.id
        const v6587 = v6582.votes
        const v6589 = [v4748, v6403]
        const v6590 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc11], [v6589])),
          null,
        )
        const v6591 = stdlib.fromSome(
          v6590,
          stdlib.checkedBigNumberify(
            './index.rsh:118:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6593 = stdlib.safeAdd(
          v6591,
          stdlib.checkedBigNumberify(
            './index.rsh:119:45:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map2, stdlib.digest([ctc11], [v6589]), v6593)
        await stdlib.mapSet(map3, stdlib.digest([ctc14], [v6415]), true)
        const v6595 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v4748),
          null,
        )
        const v6596 = stdlib.fromSome(
          v6595,
          stdlib.checkedBigNumberify(
            './index.rsh:122:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6597 = stdlib.safeAdd(
          v6596,
          stdlib.checkedBigNumberify(
            './index.rsh:122:59:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map4, v4748, v6597)
        const v6598 = stdlib.safeAdd(
          v6587,
          stdlib.checkedBigNumberify(
            './index.rsh:125:31:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v6599 = {
          art: v6583,
          audio: v6584,
          creator: v6585,
          id: v6586,
          votes: v6598,
        }
        await stdlib.mapSet(map1, v6403, v6599)
        const v6601 = null
        await txn4.getOutput('vote', 'v6601', ctc0, v6601)
        const v6608 = stdlib.safeAdd(
          v4747,
          stdlib.checkedBigNumberify(
            './index.rsh:220:30:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v6609 = stdlib.safeAdd(
          v4746,
          stdlib.checkedBigNumberify(
            './index.rsh:221:26:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv4742 = v4742
        const cv4743 = v4743
        const cv4744 = v4744
        const cv4745 = v4745
        const cv4746 = v6609
        const cv4747 = v6608
        const cv4748 = v4748
        const cv4749 = v5084
        const cv4752 = v5085
        const cv4756 = v4756

        v4742 = cv4742
        v4743 = cv4743
        v4744 = cv4744
        v4745 = cv4745
        v4746 = cv4746
        v4747 = cv4747
        v4748 = cv4748
        v4749 = cv4749
        v4752 = cv4752
        v4756 = cv4756

        txn3 = txn4
        continue
        break
      }
    }
  }
  return
}
export async function _addSong4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _addSong4 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _addSong4 expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const ctc0 = stdlib.T_Null
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  })
  const ctc3 = stdlib.T_Address
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc5 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['votes', ctc1],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Bool
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7,
  })
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc10 = stdlib.T_Tuple([])
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Data({
    addSong0_655: ctc9,
    buyMembership0_655: ctc10,
    endVotingPeriod0_655: ctc10,
    receivePayout0_655: ctc11,
    vote0_655: ctc12,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const map1_ctc = ctc6
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  })

  const map2_ctc = ctc2
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc8
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc2
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc,
  })

  const map5_ctc = ctc2
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc,
  })

  const map6_ctc = ctc8
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const [
    v4731,
    v4732,
    v4742,
    v4743,
    v4744,
    v4745,
    v4746,
    v4747,
    v4748,
    v4752,
    v4756,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4838 = ctc.selfAddress()
  const v4840 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:174:35:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
      'at ./index.rsh:88:21:application call to "runaddSong0_655" (defined at: ./index.rsh:174:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'in',
    who: 'addSong',
  })
  const v4845 = stdlib.addressEq(v4838, v4731)
  const v4846 = v4845 ? false : true
  stdlib.assert(v4846, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:174:35:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
      'at ./index.rsh:88:21:application call to "runaddSong0_655" (defined at: ./index.rsh:174:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'addSong',
  })
  const v4848 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4838), null)
  const v4849 = {
    None: 0,
    Some: 1,
  }[v4848[0]]
  const v4850 = stdlib.eq(
    v4849,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4850, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:176:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
      'at ./index.rsh:174:35:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
      'at ./index.rsh:88:21:application call to "runaddSong0_655" (defined at: ./index.rsh:174:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'is member',
    who: 'addSong',
  })
  const v4859 = ['addSong0_655', v4840]

  const txn1 = await ctc.sendrecv({
    args: [
      v4731,
      v4732,
      v4742,
      v4743,
      v4744,
      v4745,
      v4746,
      v4747,
      v4748,
      v4752,
      v4756,
      v4859,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:178:10:decimal',
        stdlib.UInt_max,
        '0',
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)
      stdlib.simMapDupe(sim_r, 1, map1)
      stdlib.simMapDupe(sim_r, 2, map2)
      stdlib.simMapDupe(sim_r, 3, map3)
      stdlib.simMapDupe(sim_r, 4, map4)
      stdlib.simMapDupe(sim_r, 5, map5)
      stdlib.simMapDupe(sim_r, 6, map6)

      const {
        data: [v5083],
        secs: v5085,
        time: v5084,
        didSend: v4161,
        from: v5082,
      } = txn1

      switch (v5083[0]) {
        case 'addSong0_655': {
          const v5086 = v5083[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'addSong',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5082),
            null,
          )
          const v5207 =
            v5086[
              stdlib.checkedBigNumberify(
                './index.rsh:174:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v5208 =
            v5086[
              stdlib.checkedBigNumberify(
                './index.rsh:174:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v5219 = v5085
          const v5221 = {
            art: v5207,
            audio: v5208,
            creator: v5082,
            id: v5085,
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          await stdlib.simMapSet(sim_r, 1, v5085, v5221)
          null
          const v5222 = await txn1.getOutput('addSong', 'v5219', ctc1, v5219)

          const v12335 = v4742
          const v12336 = v4743
          const v12337 = v4744
          const v12338 = v4745
          const v12339 = v4746
          const v12340 = v4747
          const v12341 = v4748
          const v12343 = v5085
          const v12344 = v4756
          sim_r.isHalt = false

          break
        }
        case 'buyMembership0_655': {
          const v5391 = v5083[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5696 = v5083[1]

          break
        }
        case 'receivePayout0_655': {
          const v6001 = v5083[1]

          break
        }
        case 'vote0_655': {
          const v6306 = v5083[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [
      ctc3,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc13,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5083],
    secs: v5085,
    time: v5084,
    didSend: v4161,
    from: v5082,
  } = txn1
  switch (v5083[0]) {
    case 'addSong0_655': {
      const v5086 = v5083[1]
      undefined /* setApiDetails */
      const v5093 = stdlib.addressEq(v5082, v4731)
      const v5094 = v5093 ? false : true
      stdlib.assert(v5094, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:174:35:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'addSong',
      })
      const v5096 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5082),
        null,
      )
      const v5097 = {
        None: 0,
        Some: 1,
      }[v5096[0]]
      const v5098 = stdlib.eq(
        v5097,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5098, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:176:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
          'at ./index.rsh:174:35:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'is member',
        who: 'addSong',
      })
      const v5207 =
        v5086[
          stdlib.checkedBigNumberify(
            './index.rsh:174:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5208 =
        v5086[
          stdlib.checkedBigNumberify(
            './index.rsh:174:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v5219 = v5085
      const v5221 = {
        art: v5207,
        audio: v5208,
        creator: v5082,
        id: v5085,
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      await stdlib.mapSet(map1, v5085, v5221)
      null
      const v5222 = await txn1.getOutput('addSong', 'v5219', ctc1, v5219)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v5086, v5222), {
          at: './index.rsh:174:11:application',
          fs: [
            'at ./index.rsh:174:11:application call to [unknown function] (defined at: ./index.rsh:174:11:function exp)',
            'at ./index.rsh:190:17:application call to "notify" (defined at: ./index.rsh:179:16:function exp)',
            'at ./index.rsh:179:16:application call to [unknown function] (defined at: ./index.rsh:179:16:function exp)',
          ],
          msg: 'out',
          who: 'addSong',
        })
      } else {
      }

      const v12335 = v4742
      const v12336 = v4743
      const v12337 = v4744
      const v12338 = v4745
      const v12339 = v4746
      const v12340 = v4747
      const v12341 = v4748
      const v12343 = v5085
      const v12344 = v4756
      return

      break
    }
    case 'buyMembership0_655': {
      const v5391 = v5083[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5696 = v5083[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6001 = v5083[1]
      return
      break
    }
    case 'vote0_655': {
      const v6306 = v5083[1]
      return
      break
    }
  }
}
export async function _buyMembership4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _buyMembership4 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _buyMembership4 expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const ctc0 = stdlib.T_Null
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  })
  const ctc3 = stdlib.T_Address
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc5 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['votes', ctc1],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Bool
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7,
  })
  const ctc9 = stdlib.T_Tuple([])
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Data({
    addSong0_655: ctc10,
    buyMembership0_655: ctc9,
    endVotingPeriod0_655: ctc9,
    receivePayout0_655: ctc11,
    vote0_655: ctc12,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const map1_ctc = ctc6
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  })

  const map2_ctc = ctc2
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc8
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc2
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc,
  })

  const map5_ctc = ctc2
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc,
  })

  const map6_ctc = ctc8
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const [
    v4731,
    v4732,
    v4742,
    v4743,
    v4744,
    v4745,
    v4746,
    v4747,
    v4748,
    v4752,
    v4756,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4821 = ctc.selfAddress()
  const v4823 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:151:31:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
      'at ./index.rsh:88:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:151:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'in',
    who: 'buyMembership',
  })
  const v4824 = stdlib.addressEq(v4821, v4731)
  const v4825 = v4824 ? false : true
  stdlib.assert(v4825, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:151:31:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
      'at ./index.rsh:88:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:151:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'buyMembership',
  })
  const v4829 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4821), null)
  const v4830 = stdlib.fromSome(
    v4829,
    stdlib.checkedBigNumberify(
      './index.rsh:155:61:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4831 = stdlib.lt(v4830, v4752)
  stdlib.assert(v4831, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:156:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:151:31:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
      'at ./index.rsh:88:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:151:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'membership still valid',
    who: 'buyMembership',
  })
  const v4836 = ['buyMembership0_655', v4823]

  const txn1 = await ctc.sendrecv({
    args: [
      v4731,
      v4732,
      v4742,
      v4743,
      v4744,
      v4745,
      v4746,
      v4747,
      v4748,
      v4752,
      v4756,
      v4836,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v4732, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)
      stdlib.simMapDupe(sim_r, 1, map1)
      stdlib.simMapDupe(sim_r, 2, map2)
      stdlib.simMapDupe(sim_r, 3, map3)
      stdlib.simMapDupe(sim_r, 4, map4)
      stdlib.simMapDupe(sim_r, 5, map5)
      stdlib.simMapDupe(sim_r, 6, map6)

      const {
        data: [v5083],
        secs: v5085,
        time: v5084,
        didSend: v4161,
        from: v5082,
      } = txn1

      switch (v5083[0]) {
        case 'addSong0_655': {
          const v5086 = v5083[1]

          break
        }
        case 'buyMembership0_655': {
          const v5391 = v5083[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'buyMembership',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5082),
            null,
          )
          const v5510 = stdlib.add(v4756, v4732)
          sim_r.txns.push({
            amt: v4732,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          const v5540 = stdlib.safeAdd(
            v5085,
            stdlib.checkedBigNumberify(
              './index.rsh:5:19:decimal',
              stdlib.UInt_max,
              '5',
            ),
          )
          await stdlib.simMapSet(sim_r, 0, v5082, v5540)
          const v5545 = await txn1.getOutput(
            'buyMembership',
            'v5540',
            ctc1,
            v5540,
          )

          const v5550 = stdlib.safeAdd(
            v4745,
            stdlib.checkedBigNumberify(
              './index.rsh:163:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5551 = stdlib.safeAdd(v4744, v4732)
          const v12395 = v4742
          const v12396 = v4743
          const v12397 = v5551
          const v12398 = v5550
          const v12399 = v4746
          const v12400 = v4747
          const v12401 = v4748
          const v12403 = v5085
          const v12404 = v5510
          sim_r.isHalt = false

          break
        }
        case 'endVotingPeriod0_655': {
          const v5696 = v5083[1]

          break
        }
        case 'receivePayout0_655': {
          const v6001 = v5083[1]

          break
        }
        case 'vote0_655': {
          const v6306 = v5083[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [
      ctc3,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc13,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5083],
    secs: v5085,
    time: v5084,
    didSend: v4161,
    from: v5082,
  } = txn1
  switch (v5083[0]) {
    case 'addSong0_655': {
      const v5086 = v5083[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5391 = v5083[1]
      undefined /* setApiDetails */
      const v5409 = stdlib.addressEq(v5082, v4731)
      const v5410 = v5409 ? false : true
      stdlib.assert(v5410, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:151:31:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'buyMembership',
      })
      const v5414 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5082),
        null,
      )
      const v5415 = stdlib.fromSome(
        v5414,
        stdlib.checkedBigNumberify(
          './index.rsh:155:61:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5416 = stdlib.lt(v5415, v4752)
      stdlib.assert(v5416, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:156:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:151:31:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:151:31:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'membership still valid',
        who: 'buyMembership',
      })
      const v5510 = stdlib.add(v4756, v4732)
      const v5540 = stdlib.safeAdd(
        v5085,
        stdlib.checkedBigNumberify(
          './index.rsh:5:19:decimal',
          stdlib.UInt_max,
          '5',
        ),
      )
      const v5543 = stdlib.lt(v5415, v5085)
      stdlib.assert(v5543, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:156:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:159:16:application call to [unknown function] (defined at: ./index.rsh:159:16:function exp)',
        ],
        msg: 'membership still valid',
        who: 'buyMembership',
      })
      await stdlib.mapSet(map0, v5082, v5540)
      const v5545 = await txn1.getOutput('buyMembership', 'v5540', ctc1, v5540)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v5391, v5545), {
          at: './index.rsh:151:11:application',
          fs: [
            'at ./index.rsh:151:11:application call to [unknown function] (defined at: ./index.rsh:151:11:function exp)',
            'at ./index.rsh:161:17:application call to "notify" (defined at: ./index.rsh:159:16:function exp)',
            'at ./index.rsh:159:16:application call to [unknown function] (defined at: ./index.rsh:159:16:function exp)',
          ],
          msg: 'out',
          who: 'buyMembership',
        })
      } else {
      }

      const v5550 = stdlib.safeAdd(
        v4745,
        stdlib.checkedBigNumberify(
          './index.rsh:163:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5551 = stdlib.safeAdd(v4744, v4732)
      const v12395 = v4742
      const v12396 = v4743
      const v12397 = v5551
      const v12398 = v5550
      const v12399 = v4746
      const v12400 = v4747
      const v12401 = v4748
      const v12403 = v5085
      const v12404 = v5510
      return

      break
    }
    case 'endVotingPeriod0_655': {
      const v5696 = v5083[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6001 = v5083[1]
      return
      break
    }
    case 'vote0_655': {
      const v6306 = v5083[1]
      return
      break
    }
  }
}
export async function _endVotingPeriod4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _endVotingPeriod4 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _endVotingPeriod4 expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const ctc0 = stdlib.T_Null
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  })
  const ctc3 = stdlib.T_Address
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc5 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['votes', ctc1],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Bool
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7,
  })
  const ctc9 = stdlib.T_Tuple([])
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Data({
    addSong0_655: ctc10,
    buyMembership0_655: ctc9,
    endVotingPeriod0_655: ctc9,
    receivePayout0_655: ctc11,
    vote0_655: ctc12,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const map1_ctc = ctc6
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  })

  const map2_ctc = ctc2
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc8
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc2
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc,
  })

  const map5_ctc = ctc2
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc,
  })

  const map6_ctc = ctc8
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const [
    v4731,
    v4732,
    v4742,
    v4743,
    v4744,
    v4745,
    v4746,
    v4747,
    v4748,
    v4752,
    v4756,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4889 = ctc.selfAddress()
  const v4891 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
      'at ./index.rsh:88:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:226:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'in',
    who: 'endVotingPeriod',
  })
  const v4892 = stdlib.addressEq(v4889, v4731)
  const v4893 = v4892 ? false : true
  stdlib.assert(v4893, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
      'at ./index.rsh:88:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:226:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'endVotingPeriod',
  })
  const v4895 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4889), null)
  const v4896 = {
    None: 0,
    Some: 1,
  }[v4895[0]]
  const v4897 = stdlib.eq(
    v4896,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4897, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:228:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
      'at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
      'at ./index.rsh:88:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:226:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'is member',
    who: 'endVotingPeriod',
  })
  const v4906 = ['endVotingPeriod0_655', v4891]

  const txn1 = await ctc.sendrecv({
    args: [
      v4731,
      v4732,
      v4742,
      v4743,
      v4744,
      v4745,
      v4746,
      v4747,
      v4748,
      v4752,
      v4756,
      v4906,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:234:10:decimal',
        stdlib.UInt_max,
        '0',
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)
      stdlib.simMapDupe(sim_r, 1, map1)
      stdlib.simMapDupe(sim_r, 2, map2)
      stdlib.simMapDupe(sim_r, 3, map3)
      stdlib.simMapDupe(sim_r, 4, map4)
      stdlib.simMapDupe(sim_r, 5, map5)
      stdlib.simMapDupe(sim_r, 6, map6)

      const {
        data: [v5083],
        secs: v5085,
        time: v5084,
        didSend: v4161,
        from: v5082,
      } = txn1

      switch (v5083[0]) {
        case 'addSong0_655': {
          const v5086 = v5083[1]

          break
        }
        case 'buyMembership0_655': {
          const v5391 = v5083[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5696 = v5083[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'endVotingPeriod',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5082),
            null,
          )
          const v5866 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v4748),
            null,
          )
          const v5867 = stdlib.fromSome(
            v5866,
            stdlib.checkedBigNumberify(
              './index.rsh:230:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5868 = stdlib.safeDiv(
            v4744,
            stdlib.checkedBigNumberify(
              './index.rsh:231:40:decimal',
              stdlib.UInt_max,
              '3',
            ),
          )
          const v5869 = stdlib.safeSub(v4744, v5868)
          const v5871 = stdlib.safeAdd(v5867, v5869)
          await stdlib.simMapSet(sim_r, 5, v4748, v5871)
          const v5872 = null
          const v5873 = await txn1.getOutput(
            'endVotingPeriod',
            'v5872',
            ctc0,
            v5872,
          )

          const v5878 = stdlib.safeSub(v4744, v5869)
          const v5879 = stdlib.safeAdd(v4743, v5869)
          const v5880 = stdlib.safeAdd(
            v4748,
            stdlib.checkedBigNumberify(
              './index.rsh:243:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5881 = stdlib.safeAdd(
            v4742,
            stdlib.checkedBigNumberify(
              './index.rsh:5:19:decimal',
              stdlib.UInt_max,
              '5',
            ),
          )
          const v12455 = v5881
          const v12456 = v5879
          const v12457 = v5878
          const v12458 = v4745
          const v12459 = v4746
          const v12460 = stdlib.checkedBigNumberify(
            './index.rsh:245:13:decimal',
            stdlib.UInt_max,
            '0',
          )
          const v12461 = v5880
          const v12463 = v5085
          const v12464 = v4756
          sim_r.isHalt = false

          break
        }
        case 'receivePayout0_655': {
          const v6001 = v5083[1]

          break
        }
        case 'vote0_655': {
          const v6306 = v5083[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [
      ctc3,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc13,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5083],
    secs: v5085,
    time: v5084,
    didSend: v4161,
    from: v5082,
  } = txn1
  switch (v5083[0]) {
    case 'addSong0_655': {
      const v5086 = v5083[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5391 = v5083[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5696 = v5083[1]
      undefined /* setApiDetails */
      const v5727 = stdlib.addressEq(v5082, v4731)
      const v5728 = v5727 ? false : true
      stdlib.assert(v5728, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'endVotingPeriod',
      })
      const v5730 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5082),
        null,
      )
      const v5731 = {
        None: 0,
        Some: 1,
      }[v5730[0]]
      const v5732 = stdlib.eq(
        v5731,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5732, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:228:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
          'at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:226:33:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'is member',
        who: 'endVotingPeriod',
      })
      const v5866 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v4748),
        null,
      )
      const v5867 = stdlib.fromSome(
        v5866,
        stdlib.checkedBigNumberify(
          './index.rsh:230:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5868 = stdlib.safeDiv(
        v4744,
        stdlib.checkedBigNumberify(
          './index.rsh:231:40:decimal',
          stdlib.UInt_max,
          '3',
        ),
      )
      const v5869 = stdlib.safeSub(v4744, v5868)
      const v5871 = stdlib.safeAdd(v5867, v5869)
      await stdlib.mapSet(map5, v4748, v5871)
      const v5872 = null
      const v5873 = await txn1.getOutput(
        'endVotingPeriod',
        'v5872',
        ctc0,
        v5872,
      )
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v5696, v5873), {
          at: './index.rsh:226:11:application',
          fs: [
            'at ./index.rsh:226:11:application call to [unknown function] (defined at: ./index.rsh:226:11:function exp)',
            'at ./index.rsh:238:17:application call to "notify" (defined at: ./index.rsh:235:16:function exp)',
            'at ./index.rsh:235:16:application call to [unknown function] (defined at: ./index.rsh:235:16:function exp)',
          ],
          msg: 'out',
          who: 'endVotingPeriod',
        })
      } else {
      }

      const v5878 = stdlib.safeSub(v4744, v5869)
      const v5879 = stdlib.safeAdd(v4743, v5869)
      const v5880 = stdlib.safeAdd(
        v4748,
        stdlib.checkedBigNumberify(
          './index.rsh:243:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5881 = stdlib.safeAdd(
        v4742,
        stdlib.checkedBigNumberify(
          './index.rsh:5:19:decimal',
          stdlib.UInt_max,
          '5',
        ),
      )
      const v12455 = v5881
      const v12456 = v5879
      const v12457 = v5878
      const v12458 = v4745
      const v12459 = v4746
      const v12460 = stdlib.checkedBigNumberify(
        './index.rsh:245:13:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v12461 = v5880
      const v12463 = v5085
      const v12464 = v4756
      return

      break
    }
    case 'receivePayout0_655': {
      const v6001 = v5083[1]
      return
      break
    }
    case 'vote0_655': {
      const v6306 = v5083[1]
      return
      break
    }
  }
}
export async function _receivePayout4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _receivePayout4 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _receivePayout4 expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const ctc0 = stdlib.T_Null
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  })
  const ctc3 = stdlib.T_Address
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc5 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['votes', ctc1],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Bool
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7,
  })
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc3])
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc12 = stdlib.T_Tuple([])
  const ctc13 = stdlib.T_Tuple([ctc1])
  const ctc14 = stdlib.T_Data({
    addSong0_655: ctc11,
    buyMembership0_655: ctc12,
    endVotingPeriod0_655: ctc12,
    receivePayout0_655: ctc9,
    vote0_655: ctc13,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const map1_ctc = ctc6
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  })

  const map2_ctc = ctc2
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc8
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc2
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc,
  })

  const map5_ctc = ctc2
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc,
  })

  const map6_ctc = ctc8
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const [
    v4731,
    v4732,
    v4742,
    v4743,
    v4744,
    v4745,
    v4746,
    v4747,
    v4748,
    v4752,
    v4756,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4908 = ctc.selfAddress()
  const v4910 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'in',
    who: 'receivePayout',
  })
  const v4911 =
    v4910[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4912 =
    v4910[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '1',
      )
    ]
  const v4915 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4911), null)
  const v4916 = '                                              '
  const v4918 = {
    art: v4916,
    audio: v4916,
    creator: v4731,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
  }
  const v4919 = stdlib.fromSome(v4915, v4918)
  const v4922 = v4919.creator
  const v4926 = stdlib.addressEq(v4908, v4922)
  stdlib.assert(v4926, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:253:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'not song creator',
    who: 'receivePayout',
  })
  const v4928 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4908), null)
  const v4929 = {
    None: 0,
    Some: 1,
  }[v4928[0]]
  const v4930 = stdlib.eq(
    v4929,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4930, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:254:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'is member',
    who: 'receivePayout',
  })
  const v4933 = {
    None: 0,
    Some: 1,
  }[v4915[0]]
  const v4934 = stdlib.eq(
    v4933,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4934, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'receivePayout',
  })
  const v4936 = [v4912, v4911, v4908]
  const v4937 = stdlib.protect(
    map6_ctc,
    await stdlib.mapRef(map6, stdlib.digest([ctc10], [v4936])),
    null,
  )
  const v4938 = {
    None: 0,
    Some: 1,
  }[v4937[0]]
  const v4939 = stdlib.eq(
    v4938,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4939, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:256:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'receivePayout',
  })
  const v4941 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v4912), null)
  const v4942 = stdlib.fromSome(
    v4941,
    stdlib.checkedBigNumberify(
      './index.rsh:260:54:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4944 = {
    None: 0,
    Some: 1,
  }[v4941[0]]
  const v4945 = stdlib.eq(
    v4944,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4945, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:41:application call to "getSongPayout" (defined at: ./index.rsh:102:47:function exp)',
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'voting period ended',
    who: 'receivePayout',
  })
  const v4949 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v4912), null)
  const v4950 = stdlib.fromSome(
    v4949,
    stdlib.checkedBigNumberify(
      './index.rsh:107:11:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4951 = [v4912, v4911]
  const v4952 = stdlib.protect(
    map2_ctc,
    await stdlib.mapRef(map2, stdlib.digest([ctc9], [v4951])),
    null,
  )
  const v4953 = stdlib.fromSome(
    v4952,
    stdlib.checkedBigNumberify(
      './index.rsh:111:46:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4954 = stdlib.safeMuldiv(v4942, v4953, v4950)
  const v4955 = stdlib.le(v4954, v4942)
  stdlib.assert(v4955, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4958 = stdlib.ge(v4756, v4954)
  stdlib.assert(v4958, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
      'at ./index.rsh:88:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:251:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })
  const v4967 = ['receivePayout0_655', v4910]

  const txn1 = await ctc.sendrecv({
    args: [
      v4731,
      v4732,
      v4742,
      v4743,
      v4744,
      v4745,
      v4746,
      v4747,
      v4748,
      v4752,
      v4756,
      v4967,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:265:10:decimal',
        stdlib.UInt_max,
        '0',
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)
      stdlib.simMapDupe(sim_r, 1, map1)
      stdlib.simMapDupe(sim_r, 2, map2)
      stdlib.simMapDupe(sim_r, 3, map3)
      stdlib.simMapDupe(sim_r, 4, map4)
      stdlib.simMapDupe(sim_r, 5, map5)
      stdlib.simMapDupe(sim_r, 6, map6)

      const {
        data: [v5083],
        secs: v5085,
        time: v5084,
        didSend: v4161,
        from: v5082,
      } = txn1

      switch (v5083[0]) {
        case 'addSong0_655': {
          const v5086 = v5083[1]

          break
        }
        case 'buyMembership0_655': {
          const v5391 = v5083[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5696 = v5083[1]

          break
        }
        case 'receivePayout0_655': {
          const v6001 = v5083[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'receivePayout',
          })
          const v6047 =
            v6001[
              stdlib.checkedBigNumberify(
                './index.rsh:251:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v6048 =
            v6001[
              stdlib.checkedBigNumberify(
                './index.rsh:251:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v6047),
            null,
          )
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5082),
            null,
          )
          const v6070 = [v6048, v6047, v5082]
          stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, stdlib.digest([ctc10], [v6070])),
            null,
          )
          const v6075 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v6048),
            null,
          )
          const v6076 = stdlib.fromSome(
            v6075,
            stdlib.checkedBigNumberify(
              './index.rsh:260:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6083 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v6048),
            null,
          )
          const v6084 = stdlib.fromSome(
            v6083,
            stdlib.checkedBigNumberify(
              './index.rsh:107:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6085 = [v6048, v6047]
          const v6086 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc9], [v6085])),
            null,
          )
          const v6087 = stdlib.fromSome(
            v6086,
            stdlib.checkedBigNumberify(
              './index.rsh:111:46:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6088 = stdlib.safeMuldiv(v6076, v6087, v6084)
          const v6241 = stdlib.sub(v4756, v6088)
          sim_r.txns.push({
            kind: 'from',
            to: v5082,
            tok: undefined /* Nothing */,
          })
          await stdlib.simMapSet(
            sim_r,
            6,
            stdlib.digest([ctc10], [v6070]),
            true,
          )
          const v6243 = stdlib.safeSub(v6076, v6088)
          await stdlib.simMapSet(sim_r, 5, v6048, v6243)
          const v6244 = await txn1.getOutput(
            'receivePayout',
            'v6088',
            ctc1,
            v6088,
          )

          const v6251 = stdlib.safeSub(v4743, v6088)
          const v12515 = v4742
          const v12516 = v6251
          const v12517 = v4744
          const v12518 = v4745
          const v12519 = v4746
          const v12520 = v4747
          const v12521 = v4748
          const v12523 = v5085
          const v12524 = v6241
          sim_r.isHalt = false

          break
        }
        case 'vote0_655': {
          const v6306 = v5083[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [
      ctc3,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc14,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5083],
    secs: v5085,
    time: v5084,
    didSend: v4161,
    from: v5082,
  } = txn1
  switch (v5083[0]) {
    case 'addSong0_655': {
      const v5086 = v5083[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5391 = v5083[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5696 = v5083[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6001 = v5083[1]
      undefined /* setApiDetails */
      const v6047 =
        v6001[
          stdlib.checkedBigNumberify(
            './index.rsh:251:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6048 =
        v6001[
          stdlib.checkedBigNumberify(
            './index.rsh:251:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v6049 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v6047),
        null,
      )
      const v6050 = '                                              '
      const v6052 = {
        art: v6050,
        audio: v6050,
        creator: v4731,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v6053 = stdlib.fromSome(v6049, v6052)
      const v6056 = v6053.creator
      const v6060 = stdlib.addressEq(v5082, v6056)
      stdlib.assert(v6060, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:253:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'not song creator',
        who: 'receivePayout',
      })
      const v6062 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5082),
        null,
      )
      const v6063 = {
        None: 0,
        Some: 1,
      }[v6062[0]]
      const v6064 = stdlib.eq(
        v6063,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6064, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:254:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
          'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'is member',
        who: 'receivePayout',
      })
      const v6067 = {
        None: 0,
        Some: 1,
      }[v6049[0]]
      const v6068 = stdlib.eq(
        v6067,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6068, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'receivePayout',
      })
      const v6070 = [v6048, v6047, v5082]
      const v6071 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, stdlib.digest([ctc10], [v6070])),
        null,
      )
      const v6072 = {
        None: 0,
        Some: 1,
      }[v6071[0]]
      const v6073 = stdlib.eq(
        v6072,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v6073, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:256:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'has received payout',
        who: 'receivePayout',
      })
      const v6075 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v6048),
        null,
      )
      const v6076 = stdlib.fromSome(
        v6075,
        stdlib.checkedBigNumberify(
          './index.rsh:260:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6078 = {
        None: 0,
        Some: 1,
      }[v6075[0]]
      const v6079 = stdlib.eq(
        v6078,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6079, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:261:41:application call to "getSongPayout" (defined at: ./index.rsh:102:47:function exp)',
          'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'voting period ended',
        who: 'receivePayout',
      })
      const v6083 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v6048),
        null,
      )
      const v6084 = stdlib.fromSome(
        v6083,
        stdlib.checkedBigNumberify(
          './index.rsh:107:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6085 = [v6048, v6047]
      const v6086 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, stdlib.digest([ctc9], [v6085])),
        null,
      )
      const v6087 = stdlib.fromSome(
        v6086,
        stdlib.checkedBigNumberify(
          './index.rsh:111:46:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6088 = stdlib.safeMuldiv(v6076, v6087, v6084)
      const v6089 = stdlib.le(v6088, v6076)
      stdlib.assert(v6089, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v6092 = stdlib.ge(v4756, v6088)
      stdlib.assert(v6092, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:251:46:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:251:46:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      const v6241 = stdlib.sub(v4756, v6088)
      await stdlib.mapSet(map6, stdlib.digest([ctc10], [v6070]), true)
      const v6243 = stdlib.safeSub(v6076, v6088)
      await stdlib.mapSet(map5, v6048, v6243)
      const v6244 = await txn1.getOutput('receivePayout', 'v6088', ctc1, v6088)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v6001, v6244), {
          at: './index.rsh:251:11:application',
          fs: [
            'at ./index.rsh:251:11:application call to [unknown function] (defined at: ./index.rsh:251:11:function exp)',
            'at ./index.rsh:270:17:application call to "notify" (defined at: ./index.rsh:266:16:function exp)',
            'at ./index.rsh:266:16:application call to [unknown function] (defined at: ./index.rsh:266:16:function exp)',
          ],
          msg: 'out',
          who: 'receivePayout',
        })
      } else {
      }

      const v6251 = stdlib.safeSub(v4743, v6088)
      const v12515 = v4742
      const v12516 = v6251
      const v12517 = v4744
      const v12518 = v4745
      const v12519 = v4746
      const v12520 = v4747
      const v12521 = v4748
      const v12523 = v5085
      const v12524 = v6241
      return

      break
    }
    case 'vote0_655': {
      const v6306 = v5083[1]
      return
      break
    }
  }
}
export async function _vote4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _vote4 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _vote4 expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const ctc0 = stdlib.T_Null
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  })
  const ctc3 = stdlib.T_Address
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '46'),
  )
  const ctc5 = stdlib.T_Struct([
    ['id', ctc1],
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['votes', ctc1],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Bool
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7,
  })
  const ctc9 = stdlib.T_Tuple([ctc1])
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc3])
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc12 = stdlib.T_Tuple([])
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc14 = stdlib.T_Data({
    addSong0_655: ctc11,
    buyMembership0_655: ctc12,
    endVotingPeriod0_655: ctc12,
    receivePayout0_655: ctc13,
    vote0_655: ctc9,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const map1_ctc = ctc6
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc,
  })

  const map2_ctc = ctc2
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc8
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc2
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc,
  })

  const map5_ctc = ctc2
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc,
  })

  const map6_ctc = ctc8
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const [
    v4731,
    v4732,
    v4742,
    v4743,
    v4744,
    v4745,
    v4746,
    v4747,
    v4748,
    v4752,
    v4756,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4861 = ctc.selfAddress()
  const v4863 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
      'at ./index.rsh:88:21:application call to "runvote0_655" (defined at: ./index.rsh:203:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'in',
    who: 'vote',
  })
  const v4864 =
    v4863[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4866 = stdlib.addressEq(v4861, v4731)
  const v4867 = v4866 ? false : true
  stdlib.assert(v4867, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
      'at ./index.rsh:88:21:application call to "runvote0_655" (defined at: ./index.rsh:203:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'vote',
  })
  const v4869 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4861), null)
  const v4870 = {
    None: 0,
    Some: 1,
  }[v4869[0]]
  const v4871 = stdlib.eq(
    v4870,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4871, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:205:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
      'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
      'at ./index.rsh:88:21:application call to "runvote0_655" (defined at: ./index.rsh:203:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'is member',
    who: 'vote',
  })
  const v4873 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4864), null)
  const v4874 = {
    None: 0,
    Some: 1,
  }[v4873[0]]
  const v4875 = stdlib.eq(
    v4874,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4875, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
      'at ./index.rsh:88:21:application call to "runvote0_655" (defined at: ./index.rsh:203:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'vote',
  })
  const v4877 = [v4748, v4864, v4861]
  const v4878 = stdlib.protect(
    map3_ctc,
    await stdlib.mapRef(map3, stdlib.digest([ctc10], [v4877])),
    null,
  )
  const v4879 = {
    None: 0,
    Some: 1,
  }[v4878[0]]
  const v4880 = stdlib.eq(
    v4879,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4880, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
      'at ./index.rsh:88:21:application call to "runvote0_655" (defined at: ./index.rsh:203:10:function exp)',
      'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
    ],
    msg: 'has voted',
    who: 'vote',
  })
  const v4887 = ['vote0_655', v4863]

  const txn1 = await ctc.sendrecv({
    args: [
      v4731,
      v4732,
      v4742,
      v4743,
      v4744,
      v4745,
      v4746,
      v4747,
      v4748,
      v4752,
      v4756,
      v4887,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:209:10:decimal',
        stdlib.UInt_max,
        '0',
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)
      stdlib.simMapDupe(sim_r, 1, map1)
      stdlib.simMapDupe(sim_r, 2, map2)
      stdlib.simMapDupe(sim_r, 3, map3)
      stdlib.simMapDupe(sim_r, 4, map4)
      stdlib.simMapDupe(sim_r, 5, map5)
      stdlib.simMapDupe(sim_r, 6, map6)

      const {
        data: [v5083],
        secs: v5085,
        time: v5084,
        didSend: v4161,
        from: v5082,
      } = txn1

      switch (v5083[0]) {
        case 'addSong0_655': {
          const v5086 = v5083[1]

          break
        }
        case 'buyMembership0_655': {
          const v5391 = v5083[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5696 = v5083[1]

          break
        }
        case 'receivePayout0_655': {
          const v6001 = v5083[1]

          break
        }
        case 'vote0_655': {
          const v6306 = v5083[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'vote',
          })
          const v6403 =
            v6306[
              stdlib.checkedBigNumberify(
                './index.rsh:203:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5082),
            null,
          )
          const v6411 = stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v6403),
            null,
          )
          const v6415 = [v4748, v6403, v5082]
          stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc10], [v6415])),
            null,
          )
          const v6579 = '                                              '
          const v6581 = {
            art: v6579,
            audio: v6579,
            creator: v4731,
            id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          const v6582 = stdlib.fromSome(v6411, v6581)
          const v6583 = v6582.art
          const v6584 = v6582.audio
          const v6585 = v6582.creator
          const v6586 = v6582.id
          const v6587 = v6582.votes
          const v6589 = [v4748, v6403]
          const v6590 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc13], [v6589])),
            null,
          )
          const v6591 = stdlib.fromSome(
            v6590,
            stdlib.checkedBigNumberify(
              './index.rsh:118:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6593 = stdlib.safeAdd(
            v6591,
            stdlib.checkedBigNumberify(
              './index.rsh:119:45:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(
            sim_r,
            2,
            stdlib.digest([ctc13], [v6589]),
            v6593,
          )
          await stdlib.simMapSet(
            sim_r,
            3,
            stdlib.digest([ctc10], [v6415]),
            true,
          )
          const v6595 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v4748),
            null,
          )
          const v6596 = stdlib.fromSome(
            v6595,
            stdlib.checkedBigNumberify(
              './index.rsh:122:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6597 = stdlib.safeAdd(
            v6596,
            stdlib.checkedBigNumberify(
              './index.rsh:122:59:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(sim_r, 4, v4748, v6597)
          const v6598 = stdlib.safeAdd(
            v6587,
            stdlib.checkedBigNumberify(
              './index.rsh:125:31:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v6599 = {
            art: v6583,
            audio: v6584,
            creator: v6585,
            id: v6586,
            votes: v6598,
          }
          await stdlib.simMapSet(sim_r, 1, v6403, v6599)
          const v6601 = null
          const v6602 = await txn1.getOutput('vote', 'v6601', ctc0, v6601)

          const v6608 = stdlib.safeAdd(
            v4747,
            stdlib.checkedBigNumberify(
              './index.rsh:220:30:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v6609 = stdlib.safeAdd(
            v4746,
            stdlib.checkedBigNumberify(
              './index.rsh:221:26:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v12575 = v4742
          const v12576 = v4743
          const v12577 = v4744
          const v12578 = v4745
          const v12579 = v6609
          const v12580 = v6608
          const v12581 = v4748
          const v12583 = v5085
          const v12584 = v4756
          sim_r.isHalt = false

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [
      ctc3,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc14,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5083],
    secs: v5085,
    time: v5084,
    didSend: v4161,
    from: v5082,
  } = txn1
  switch (v5083[0]) {
    case 'addSong0_655': {
      const v5086 = v5083[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5391 = v5083[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5696 = v5083[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6001 = v5083[1]
      return
      break
    }
    case 'vote0_655': {
      const v6306 = v5083[1]
      undefined /* setApiDetails */
      const v6403 =
        v6306[
          stdlib.checkedBigNumberify(
            './index.rsh:203:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6404 = stdlib.addressEq(v5082, v4731)
      const v6405 = v6404 ? false : true
      stdlib.assert(v6405, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'vote',
      })
      const v6407 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5082),
        null,
      )
      const v6408 = {
        None: 0,
        Some: 1,
      }[v6407[0]]
      const v6409 = stdlib.eq(
        v6408,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6409, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:91:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:205:20:application call to "chkMembership" (defined at: ./index.rsh:91:33:function exp)',
          'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'is member',
        who: 'vote',
      })
      const v6411 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v6403),
        null,
      )
      const v6412 = {
        None: 0,
        Some: 1,
      }[v6411[0]]
      const v6413 = stdlib.eq(
        v6412,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6413, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'vote',
      })
      const v6415 = [v4748, v6403, v5082]
      const v6416 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, stdlib.digest([ctc10], [v6415])),
        null,
      )
      const v6417 = {
        None: 0,
        Some: 1,
      }[v6416[0]]
      const v6418 = stdlib.eq(
        v6417,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v6418, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:203:26:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:203:26:function exp)',
          'at ./index.rsh:88:21:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)',
        ],
        msg: 'has voted',
        who: 'vote',
      })
      const v6579 = '                                              '
      const v6581 = {
        art: v6579,
        audio: v6579,
        creator: v4731,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v6582 = stdlib.fromSome(v6411, v6581)
      const v6583 = v6582.art
      const v6584 = v6582.audio
      const v6585 = v6582.creator
      const v6586 = v6582.id
      const v6587 = v6582.votes
      const v6589 = [v4748, v6403]
      const v6590 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, stdlib.digest([ctc13], [v6589])),
        null,
      )
      const v6591 = stdlib.fromSome(
        v6590,
        stdlib.checkedBigNumberify(
          './index.rsh:118:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6593 = stdlib.safeAdd(
        v6591,
        stdlib.checkedBigNumberify(
          './index.rsh:119:45:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map2, stdlib.digest([ctc13], [v6589]), v6593)
      await stdlib.mapSet(map3, stdlib.digest([ctc10], [v6415]), true)
      const v6595 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v4748),
        null,
      )
      const v6596 = stdlib.fromSome(
        v6595,
        stdlib.checkedBigNumberify(
          './index.rsh:122:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6597 = stdlib.safeAdd(
        v6596,
        stdlib.checkedBigNumberify(
          './index.rsh:122:59:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map4, v4748, v6597)
      const v6598 = stdlib.safeAdd(
        v6587,
        stdlib.checkedBigNumberify(
          './index.rsh:125:31:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v6599 = {
        art: v6583,
        audio: v6584,
        creator: v6585,
        id: v6586,
        votes: v6598,
      }
      await stdlib.mapSet(map1, v6403, v6599)
      const v6601 = null
      const v6602 = await txn1.getOutput('vote', 'v6601', ctc0, v6601)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v6306, v6602), {
          at: './index.rsh:203:11:application',
          fs: [
            'at ./index.rsh:203:11:application call to [unknown function] (defined at: ./index.rsh:203:11:function exp)',
            'at ./index.rsh:213:17:application call to "notify" (defined at: ./index.rsh:210:16:function exp)',
            'at ./index.rsh:210:16:application call to [unknown function] (defined at: ./index.rsh:210:16:function exp)',
          ],
          msg: 'out',
          who: 'vote',
        })
      } else {
      }

      const v6608 = stdlib.safeAdd(
        v4747,
        stdlib.checkedBigNumberify(
          './index.rsh:220:30:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v6609 = stdlib.safeAdd(
        v4746,
        stdlib.checkedBigNumberify(
          './index.rsh:221:26:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v12575 = v4742
      const v12576 = v4743
      const v12577 = v4744
      const v12578 = v4745
      const v12579 = v6609
      const v12580 = v6608
      const v12581 = v4748
      const v12583 = v5085
      const v12584 = v4756
      return

      break
    }
  }
}
export async function addSong(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for addSong expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for addSong expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 4) {
    return _addSong4(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
export async function buyMembership(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for buyMembership expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for buyMembership expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 4) {
    return _buyMembership4(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
export async function endVotingPeriod(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for endVotingPeriod expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for endVotingPeriod expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 4) {
    return _endVotingPeriod4(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
export async function receivePayout(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for receivePayout expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for receivePayout expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 4) {
    return _receivePayout4(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
export async function vote(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for vote expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for vote expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 4) {
    return _vote4(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"v12633","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"elem0","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"_addSong0_655","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_655","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_655","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"_receivePayout0_655","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_vote0_655","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5219","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5540","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5872","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v6088","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6601","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"songAdded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"art","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"audio","type":"tuple"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T2","name":"_Some","type":"tuple"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T4","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_5Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_6Ref","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T4","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v12635","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"elem0","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"_addSong0_655","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_655","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_655","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"_receivePayout0_655","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_vote0_655","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v12647","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"v12607","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"v12608","type":"tuple"}],"name":"addSong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endVotingPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentVotingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembershipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12591","type":"address"}],"name":"getMembershipExp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12596","type":"uint256"}],"name":"getSong","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"art","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes14","name":"elem1","type":"bytes14"}],"internalType":"struct T1","name":"audio","type":"tuple"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12599","type":"uint256"},{"internalType":"uint256","name":"v12600","type":"uint256"}],"name":"getSongPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12603","type":"uint256"},{"internalType":"address payable","name":"v12604","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12621","type":"uint256"},{"internalType":"uint256","name":"v12622","type":"uint256"}],"name":"receivePayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12627","type":"uint256"}],"name":"vote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200405c60806001600160401b03601f1938849003601f81018216840190848210848311176200039f5780859160409788948552833981010312620003b5578351926200004c84620003ba565b8051845260208091015190808501918252436003558551906101c08201828110868211176200039f578752600091828152828282015282888201528260608201528260808201528260a08201528260c08201528260e082015282610100820152875160a08101818110888211176200038b57916101a09185938b5283815283858201528a51620000dc81620003ba565b84815284868201528b8201528a51620000f581620003ba565b84815284868201526060820152836080820152610120820152826101408201528261016082015282610180820152015260049560ff87541662000374577f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f6060895133815283518582015286518b820152a151801590811562000367575b501562000350573462000339578651926200018e84620003ba565b818401938385523390525183526001958683554387558751933383860152518885015287845260608401848110878211176200032657885283519586116200031357600254908782811c9216801562000308575b83831014620002f55750601f8111620002a9575b508093601f8611600114620002415750509183949184939462000235575b50501b916000199060031b1c1916176002555b51613c859081620003d78239f35b01519250388062000214565b600283528183209493928692918316915b888383106200028e575050501062000274575b505050811b0160025562000227565b015160001960f88460031b161c1916905538808062000265565b85870151885590960195948501948793509081019062000252565b60028352818320601f870160051c810191838810620002ea575b601f0160051c019087905b828110620002de575050620001f6565b848155018790620002ce565b9091508190620002c3565b634e487b7160e01b845260229052602483fd5b91607f1691620001e2565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b865163100960cb60e01b8152601481880152602490fd5b865163100960cb60e01b8152601381880152602490fd5b9050600154143862000173565b875163100960cb60e01b8152601281890152602490fd5b634e487b7160e01b85526041600452602485fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176200039f5760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c80630121b93f146112065780630ca52f77146111825780631248dfcf146110855780631ca8b66d1461105d5780631e93b0f11461103f57806336e56ea51461100657806342acaa6614610ea55780634385963214610d665780634c76706d14610c1a578063544774a914610bc3578063573b8510146107575780635c5811191461071a5780636f9fb98a146106bc578063832307571461069e5780638b75d81714610643578063a4d0d39114610448578063ab53f2c6146103d4578063ad76d8b4146103a0578063ae40bc7914610351578063bda4463b14610329578063d4f4e75414610259578063d61ba282146101ed578063da70a525146101c5578063e80a57a51461016d5763ec192d610361000e573461016857602036600319011261016857610149611501565b506101646101586004356117cb565b604051918291826112cc565b0390f35b600080fd5b600036600319011261016857602060606101856118a6565b6101b981610191613c3c565b85810190600282515251151585825101526101aa613c3c565b90600082525186820152611b5b565b01511515604051908152f35b34610168576020366003190112610168576101de611501565b5061016461015860043561170f565b34610168576000366003190112610168576102066118a6565b600460005403610240576101006020916040610231610223611456565b858082518301019101611a60565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b36600319016080811261016857604013610168576040366043190112610168576102816118a6565b610289611a1c565b604051916102968361138f565b6004358352602435916001600160901b031983168303610168578161031f9160209586958682015281528481016102cc366119e3565b8152604051906102db8261138f565b6102e3611a1c565b8252868201926102f1613bd1565b8452518251525186825101526000825152518582510152610310613c3c565b90600082525185820152611b5b565b0151604051908152f35b3461016857602036600319011261016857610342611501565b50610164610158600435611814565b346101685760003660031901126101685761036a6118a6565b6004600054036103875760a0602091610100610231610223611456565b60405163100960cb60e01b815260086004820152602490fd5b34610168576020366003190112610168576103b9611501565b506101646103c8600435611758565b6040519182918261129f565b34610168576000366003190112610168576000546103f0611456565b6040519182528160206040818301528251908160408401526000935b82851061042f575050606092506000838284010152601f80199101168101030190f35b848101820151868601606001529381019385935061040c565b346101685761045636611269565b9061045f6118a6565b6040519161046c8361138f565b6020938484019184528152604051906104848261138f565b61048c611501565b82528482019360405161049e8161138f565b60008152600087820152855260046000540361062a576104cd6104bf611456565b878082518301019101611a60565b5060016104da8351611814565b808552516104e78161127f565b6104f08161127f565b0361061157610140946105e8936105af928451835152518883510152600181515161051a8161127f565b6105238161127f565b03610608575160400151905b805190600161056560405193846105498d82019283611b25565b039461055d601f1996878101835282611433565b51902061170f565b5161056f8161127f565b6105788161127f565b036105fe5760409161059b61055d6105a79351928c865193849182019586611b25565b03908101835282611433565b015190613b92565b9060016105bc82516117cb565b516105c68161127f565b6105cf8161127f565b036105f5576105e0604091516117cb565b015190611b3b565b9182910152604051908152f35b50600090611b3b565b5050600090613b92565b5060009061052f565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b346101685760003660031901126101685761065c6118a6565b6004600054036106855760c060209182610231610677611456565b828082518301019101611a60565b60405163100960cb60e01b815260096004820152602490fd5b34610168576000366003190112610168576020600154604051908152f35b34610168576000366003190112610168576106d56118a6565b6004600054036107015760806020916105e86106f2610223611456565b606084820151910151906119cf565b60405163100960cb60e01b815260076004820152602490fd5b600036600319011261016857602060406107326118a6565b61031f8161073e613c3c565b85810190600182515251151585825101526101aa613c3c565b60203660031901126101685761076b6118a6565b50604051610778816113aa565b600435815260ff60045416610baa577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040805133815283516020820152a1600160005403610b91576107c9611456565b906040828051810103126101685760408051926107e58461138f565b6107f160208201611926565b845201519060208301918252518015908115610b85575b5015610b6c5734610b53578151336001600160a01b0390911603610b3a5761082e61193a565b91516001600160a01b031682525160208201524260058101908110610b24574281106101685760408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526001610100820152436101208201524261014082015260006101608201526101406040516108a9816113e0565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e081015161010084015261010081015161012084015261012081015182840152015161016082015261016081526109ec81611417565b80516001600160401b038111610b0e57610a07600254611355565b601f8111610abb575b50602091601f8211600114610a5657918192600092610a4b575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610a2a565b601f19821692600260005260206000209160005b858110610aa357508360019510610a8a575b505050811b01600255610a40565b015160001960f88460031b161c19169055828080610a7c565b91926020600181928685015181550194019201610a6a565b6002600052600080516020613c59833981519152601f830160051c81019160208410610b04575b601f0160051c01905b818110610af85750610a10565b60008155600101610aeb565b9091508190610ae2565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b90506001541483610808565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b3461016857602036600319011261016857610bdc6115f7565b50610120610beb60043561164a565b610c1860408051928051610bfe8161127f565b845260208101511515602085015201516040830190611310565bf35b61016036600319011261016857610c2f6118a6565b60405190610c3c8261138f565b6004358252610140366023190112610168576040519060c082016001600160401b03811183821017610b0e57604052602435600581101561016857825260803660431901126101685760405192610c928461138f565b610c9b366119e3565b845260403660831901126101685760405193610cb68561138f565b608435855260a435946001600160901b0319861686036101685760209586820152858201528484015260c435801515810361016857604084015260e435801515810361016857606084015260403661010319011261016857604051610d1a8161138f565b61010435815261012435858201526080840152836101431936011261016857610d5d92604051610d49816113aa565b61014435815260a082015284820152611b5b565b60405160008152f35b34610168576040366003190112610168576001600160a01b036024358181169081900361016857610d956118a6565b60405191610da28361138f565b602093848401916004358552825260405191610dbd836113aa565b610dc5611501565b8352600460005403610e8c5761016094610100610df1610de3611456565b898082518301019101611a60565b015184515251868451015251166040825101528051906001610e3a6040519384610e1e8982019283611afb565b0394610e32601f1996878101835282611433565b519020611758565b51610e448161127f565b610e4d8161127f565b03610e8357604091610e6f915190610e328451918261059b8a82019586611afb565b015115155b15159182910152604051908152f35b50506000610e74565b60405163100960cb60e01b815260116004820152602490fd5b346101685760208060031936011261016857610ebf6115a3565b50610ec86118a6565b60405190610ed5826113c5565b610edd6115f7565b825282820191604051610eef8161138f565b6000815260008582015283526040810190610f086115a3565b8252600460005403610fed57610f2d610f1f611456565b868082518301019101611a60565b936001610f3b60043561164a565b80845251610f488161127f565b610f518161127f565b03610fd45760e09561012095600083515260008284510152600085515260018060a01b03905116908451015280516040845101525160608351015260006080835101526001815151610fa28161127f565b610fab8161127f565b03610fca57604091505101519182915b0152610c186040518092611310565b5051918291610fbb565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b34610168576020366003190112610168576004356001600160a01b03811681036101685761015861016491611039611501565b50611520565b34610168576000366003190112610168576020600354604051908152f35b3461016857602036600319011261016857611076611501565b506101646103c860043561185d565b34610168576020366003190112610168576004356001600160a01b03811690819003610168576110b36118a6565b90604051906110c1826113aa565b6110c9611501565b8252600460005403611169576110f56001916110396110e6611456565b60208082518301019101611a60565b808352516111028161127f565b61110b8161127f565b036111505760209181600160e09351516111248161127f565b61112d8161127f565b036111455751604001519182915b0152604051908152f35b50600091829161113b565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b61018061118e36611269565b919061031f61119b6118a6565b8092604051906111aa8261138f565b6020968783019183528152604051906111c28261138f565b6040516111ce8161138f565b600081526000898201528252878201926111e6613bd1565b8452518251525187825101526003825152516080825101526101aa613c3c565b60203660031901126101685760206101a061121f6118a6565b6101b98160405161122f8161138f565b60405161123b816113aa565b6000815281528581019061124d613bd1565b825260043581515260048251525160a0825101526101aa613c3c565b6040906003190112610168576004359060243590565b6002111561128957565b634e487b7160e01b600052602160045260246000fd5b919091604080606083019480516112b58161127f565b845260208101511515602085015201511515910152565b919091604080606083019480516112e28161127f565b84526020810151151560208501520151910152565b805182526020908101516001600160901b031916910152565b608060c0918051845260018060a01b03602082015116602085015261133d604082015160408601906112f7565b61134e6060820151838601906112f7565b0151910152565b90600182811c92168015611385575b602083101461136f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611364565b604081019081106001600160401b03821117610b0e57604052565b602081019081106001600160401b03821117610b0e57604052565b606081019081106001600160401b03821117610b0e57604052565b61016081019081106001600160401b03821117610b0e57604052565b60a081019081106001600160401b03821117610b0e57604052565b61018081019081106001600160401b03821117610b0e57604052565b601f909101601f19168101906001600160401b03821190821017610b0e57604052565b604051906000826002549161146a83611355565b8083526001938085169081156114e05750600114611492575b5061149092500383611433565b565b60026000908152600080516020613c5983398151915294602093509091905b8183106114c8575050611490935082010138611483565b855488840185015294850194879450918301916114b1565b905061149094506020925060ff191682840152151560051b82010138611483565b6040519061150e826113c5565b60006040838281528260208201520152565b90611529611501565b9160018060a01b03166000908082526005602052600160ff6040842054166115508161127f565b036115985760409293508152600560205220600160405191611571836113c5565b60ff81548181166115818161127f565b855260081c16151560208401520154604082015290565b508083526020830152565b604051906115b0826113fc565b8160806000918281528260208201526040516115cb8161138f565b83815283602082015260408201526040516115e58161138f565b83815283602082015260608201520152565b60405190611604826113c5565b816000815260006020820152604061161a6115a3565b910152565b9060405161162c8161138f565b8254815260019092015460901b6001600160901b0319166020830152565b906116536115f7565b9160008181526006602052604091600160ff84842054166116738161127f565b0361170357829394508152600660205220815191611690836113c5565b60ff82548181166116a08161127f565b855260081c161515602084015260078151926116bb846113fc565b6001810154845260028101546001600160a01b031660208501526116e16003820161161f565b838501526116f16005820161161f565b60608501520154608083015282015290565b50808452602084015250565b90611718611501565b916000908082526007602052600160ff6040842054166117378161127f565b036115985760409293508152600760205220600160405191611571836113c5565b90611761611501565b916000908082526008602052600160ff6040842054166117808161127f565b03611598576040929350815260086020522060ff604051916117a1836113c5565b548181166117ae8161127f565b8352818160081c161515602084015260101c161515604082015290565b906117d4611501565b916000908082526009602052600160ff6040842054166117f38161127f565b036115985760409293508152600960205220600160405191611571836113c5565b9061181d611501565b91600090808252600a602052600160ff60408420541661183c8161127f565b036115985760409293508152600a60205220600160405191611571836113c5565b90611866611501565b91600090808252600b602052600160ff6040842054166118858161127f565b036115985760409293508152600b6020522060ff604051916117a1836113c5565b604051906101c082016001600160401b03811183821017610b0e57604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526119076115a3565b6101208201528261014082015282610160820152826101808201520152565b51906001600160a01b038216820361016857565b6040519061018082016001600160401b03811183821017610b0e57604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b906001820191828111610b2457821061016857565b906005820191828111610b2457821061016857565b9190820191828111610b2457821061016857565b604090604319011261016857604051906119fc8261138f565b6044358252606435826001600160901b0319821682036101685760200152565b60405190611a298261138f565b81604051611a368161138f565b60008152600060208201528152602060405191611a528361138f565b600083526000828401520152565b90816101609103126101685760405190611a79826113e0565b611a8281611926565b82526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151908301526101208082015190830152610140809101519082015290565b5160058110156112895790565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b9190916020806040830194805184520151910152565b8115611b45570490565b634e487b7160e01b600052601260045260246000fd5b604051909291906102c081016001600160401b03811182821017610b0e57604052611b84611a1c565b8152611b8e6115a3565b6020820152600060408201526000606082015260006080820152604051611bb48161138f565b600081526000602082015260a0820152611bcc6115f7565b60c0820152604051611bdd8161138f565b600081526000602082015260e0820152611bf56115a3565b610100820152611c03611501565b610120820152611c11611501565b6101408201526000610160820152604051611c2b8161138f565b600081526000602082015261018082015260006101a0820152604051611c50816113aa565b600081526101c0820152611c626115f7565b6101e0820152611c70611501565b610200820152604051611c828161138f565b6000815260006020820152610220820152611c9b6115a3565b610240820152611ca96115a3565b610260820152604051611cbb8161138f565b6000815260006020820152610280820152611cd46115a3565b6102a082015260ff60045416613b6c5760405133815284516020820152602085015180519160058310156112895760a0610180927f26cba06137b829a7336e6638d8222be7c0586fec648ab2de1e66a763b23c5c8d946040840152611d51602080830151611d466060870182516112f7565b0151838501906112f7565b6040810151151560e0840152606081015115156101008401526020608082015180516101208601520151610140840152015151610160820152a1600460005403613b5357611da06110e6611456565b9380518015908115613b47575b5015613b2e57611dc06020820151611aee565b60058110156112895761227857602090810151015181528351336001600160a01b03909116036122715760005b15612258576001611dfd33611520565b51611e078161127f565b611e108161127f565b0361223f57346122265760209042828201515233828083015101528051516040838301510152818151015160608383015101526000608083830151015242600052600682526040600020600160ff19825416179055015160076080604060002092805160018501556002840160018060a01b0360208301511660018060a01b03198254161790556040810151805160038601556020600486019101519060018060701b03199160901c828254161790556060820151908151600587015560206006870192015160901c9082541617905501519101557fc50146df3744254d2c4df384a8513863cda206482d8bf1740acc2caeb38c3e776020604051428152a17f619a58214658cfff223c501148a25fc2a544ebdf65132339dcef4b912952ac626020604051428152a1602042910152610140611f4a61193a565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501526101008101516101008501524361012085015242828501520151610160830152610140604051611fcc816113e0565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261210f82611417565b81516001600160401b038111610b0e5761212a600254611355565b601f81116121d3575b50602092601f82116001146121705792819293600092612165575b50508160011b916000199060031b1c191617600255565b01519050388061214e565b601f19821693600260005260206000209160005b8681106121bb57508360019596106121a2575b505050811b01600255565b015160001960f88460031b161c19169055388080612197565b91926020600181928685015181550194019201612184565b6002600052600080516020613c59833981519152601f830160051c8101916020841061221c575b601f0160051c01905b8181106122105750612133565b60008155600101612203565b90915081906121fa565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b6001611ded565b6122856020820151611aee565b6005811015611289576001036126c357508351336001600160a01b03909116036126bc5760005b156126a35760016122bc33611520565b516122c68161127f565b6122cf8161127f565b0361269c5760406122df33611520565b01515b8060408301526101208501511115612683576020840151340361266a57612308426119ba565b6060820152426040820151101561265157606060409133600052600560205282600020600160ff198254161790557fba2c4a0d51bc6c23cad3537c27c114276c0d11652ec108a347a4c81fdaa5525f6020838301518060018760002001558551908152a1015191015261237961193a565b9160018060a01b0381511683526020810151602084015260408101516040840152606081015160608401526123b760808201516020830151906119cf565b60808401526123c960a08201516119a5565b60a084015260c081015160c084015260e081015160e0840152610100810151610100840152436101208401524261014084015260206101408201519101510161016083015261014060405161241d816113e0565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261256082611417565b81516001600160401b038111610b0e5761257b600254611355565b601f81116125fe575b50602092601f82116001146125b557928192936000926121655750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106125e657508360019596106121a257505050811b01600255565b919260206001819286850151815501940192016125c9565b6002600052600080516020613c59833981519152601f830160051c81019160208410612647575b601f0160051c01905b81811061263b5750612584565b6000815560010161262e565b9091508190612625565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b60006122e2565b60405163100960cb60e01b815260206004820152602490fd5b60016122ac565b6126d36020829693960151611aee565b600581101561128957600203612b2d57508051336001600160a01b0390911603612b265760005b15612b0f57600161270a33611520565b516127148161127f565b61271d8161127f565b03612af65734612add57600060606101409361274160808501516003810490613b85565b60808801526101008401518352600a60205260408320600160ff198254161790556001612772610100860151611814565b5161277c8161127f565b6127858161127f565b148314612ad4576127ad604061279f610100870151611814565b01515b6080890151906119cf565b6101008501518452600a60205260016040852001557f6b9c85b3735f2ac4b7f335870f68b287fb28542cd0c890985f18533f740a4aad6020604051858152a101526128496127f961193a565b9460018060a01b0383511686526020830151602087015261281d60408401516119ba565b604087015261283560608401516080830151906119cf565b606087015260808084015191015190613b85565b608085015260a081015160a085015260c081015160c0850152600060e08501526128776101008201516119a5565b61010085015243610120850152428285015201516101608301526101406040516128a0816113e0565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e081015161010085015261010081015161012085015261012081015182850152015161016083015261016082526129e382611417565b81516001600160401b038111610b0e576129fe600254611355565b601f8111612a81575b50602092601f8211600114612a3857928192936000926121655750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612a6957508360019596106121a257505050811b01600255565b91926020600181928685015181550194019201612a4c565b6002600052600080516020613c59833981519152601f830160051c81019160208410612aca575b601f0160051c01905b818110612abe5750612a07565b60008155600101612ab1565b9091508190612aa8565b6127ad836127a2565b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b60016126fa565b612b3e602082969493960151611aee565b6005811015611289576003036132e55760806020612b6692015101518060a08501525161164a565b60c0830190815260e0830180516000908190528151602090810182905261010086018051839052885181516001600160a01b03909116920191909152825181516040015291518251606001529051608001525151600190612bc68161127f565b612bcf8161127f565b036132da57604060c083015101515b602001516001600160a01b031633036132c1576001612bfc33611520565b51612c068161127f565b612c0f8161127f565b036132a857600160c083015151612c258161127f565b612c2e8161127f565b0361328f57602060a083015101516101208301515260a082015151602061012084015101523360406101208401510152612c96612c7c612c8a61012085015160405192839160208301611afb565b03601f198101835282611433565b6020815191012061185d565b51612ca08161127f565b612ca98161127f565b613276576001612cc0602060a08501510151611814565b8061014085015251612cd18161127f565b612cda8161127f565b0361326f57604061014083015101515b610160830152600161014083015151612d028161127f565b612d0b8161127f565b0361325657602060a083015101516101808301515260a08201515160206101808401510152612dd1612d936101608401516001612d5c61018087015160405161055d81612c7c602082019485611b25565b51612d668161127f565b612d6f8161127f565b0361324e5760406105a7610180870151825161055d81612c7c602082019485611b25565b6001612da6602060a087015101516117cb565b51612db08161127f565b612db98161127f565b036132465760406105e0602060a087015101516117cb565b806101a08401526101608301511061322d576101408401516101a08301511161321457346131fb5760008080806101a08601518181156131f2575b3390f1156131e657610120820151604051612e2f81612c7c602082019485611afb565b519020600052600b602052604060002060ff1990600182825416179055610120830151604051612e6781612c7c602082019485611afb565b519020600052600b60205260406000206201000062ff000019825416179055602060a08401510151600052600a6020526001604060002091825416179055612eba6101608301516101a084015190613b85565b602060a08401510151600052600a6020526001604060002001557f54efafdc3ada77eaa6576bbd4c6b1e3a1461cfbe83bd12c3d8ac7cb8a9b5510e60206101a0840151604051908152a16101806101a08301519101526101a0610140612f1e61193a565b9460018060a01b0381511686526020810151602087015260408101516040870152612f5160608201518486015190613b85565b60608701526080810151608087015260a081015160a087015260c081015160c087015260e081015160e087015261010081015161010087015243610120870152428287015201519101519003610160830152610140604051612fb2816113e0565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e081015161010085015261010081015161012085015261012081015182850152015161016083015261016082526130f582611417565b81516001600160401b038111610b0e57613110600254611355565b601f8111613193575b50602092601f821160011461314a57928192936000926121655750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061317b57508360019596106121a257505050811b01600255565b9192602060018192868501518155019401920161315e565b6002600052600080516020613c59833981519152601f830160051c810191602084106131dc575b601f0160051c01905b8181106131d05750613119565b600081556001016131c3565b90915081906131ba565b6040513d6000823e3d90fd5b506108fc612e0c565b60405163100960cb60e01b8152602e6004820152602490fd5b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b600090611b3b565b600090613b92565b60405163100960cb60e01b8152602b6004820152602490fd5b6000612cea565b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b610100820151612bde565b6132f56020829493940151611aee565b60058110156112895760041461330d575b5050509050565b6020015160a001516101c08201528351336001600160a01b0390911603613b275760005b15613b0e57600161334133611520565b5161334b8161127f565b6133548161127f565b03613af557600161336a6101c08301515161164a565b806101e08401525161337b8161127f565b6133848161127f565b03613adc57610100840151610200820151526101c0810151516020610200830151015233604061020083015101526133dc612c7c6133d061020084015160405192839160208301611afb565b60208151910120611758565b516133e68161127f565b6133ef8161127f565b613ac35734613aaa5760009181836102206101a0940151528360206102208301510152836102408201515260018060a01b03865116602061024083015101526102208101516040610240830151015261022081015160606102408301510152836080610240830151015260016101e08201515161346b8161127f565b6134748161127f565b148414613a9f5760406101e082015101515b610260820152610100860151610280820151526101c081015151602061028083015101526102808101516040516134c581612c7c602082019485611b25565b5190208452600760205260408420600160ff1982541617905560016134fe61028083015160405161055d81612c7c602082019485611b25565b516135088161127f565b6135118161127f565b148414613a9657613541604061353a610280840151825161055d81612c7c602082019485611b25565b01516119a5565b61028082015160405161355c81612c7c602082019485611b25565b51902085526007602052600160408620015561020081015160405161358981612c7c602082019485611afb565b5190208452600860205260408420600160ff198254161790556102008101516040516135bd81612c7c602082019485611afb565b51902084526008602052604084206201000062ff0000198254161790556101008601518452600960205260408420600160ff1982541617905560016136066101008801516117cb565b516136108161127f565b6136198161127f565b148414613a8d57613633604061353a6101008901516117cb565b610100870151855260096020526001604086200155610260810151516102a08201515260018060a01b03602061026083015101511660206102a083015101526040610260820151015160406102a083015101526060610260820151015160606102a083015101526136ac608061026083015101516119a5565b60806102a083015101526101c0810151518452600660205260408420600160ff198254161790556101c06102a0820151910151518452600760806040862092805160018501556002840160018060a01b0360208301511660018060a01b03198254161790556040810151805160038601556020600486019101519060018060701b03199160901c828254161790556060820151908151600587015560206006870192015160901c9082541617905501519101557f8f6c5106377f5ec559ec7a7bd7c91c80cf1b1e90135d9144c24013de5b8d32bf6020604051858152a1015261014061379661193a565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a08501526137e260c08201516119a5565b60c08501526137f460e08201516119a5565b60e08501526101008101516101008501524361012085015242828501520151610160830152610140604051613828816113e0565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261396b82611417565b81516001600160401b038111610b0e57613986600254611355565b601f8111613a3a575b50602092601f82116001146139d457928192936000926139c9575b50508160011b916000199060031b1c1916176002555b80388080613306565b0151905038806139aa565b601f19821693600260005260206000209160005b868110613a225750836001959610613a09575b505050811b016002556139c0565b015160001960f88460031b161c191690553880806139fb565b919260206001819286850151815501940192016139e8565b6002600052600080516020613c59833981519152601f830160051c81019160208410613a83575b601f0160051c01905b818110613a77575061398f565b60008155600101613a6a565b9091508190613a61565b613633846119a5565b613541846119a5565b610240810151613486565b60405163100960cb60e01b815260336004820152602490fd5b60405163100960cb60e01b815260326004820152602490fd5b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b6001613331565b60405163100960cb60e01b8152601c6004820152602490fd5b90506001541438611dad565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b908103908111610b245790565b600092918015918215613ba9575b50501561016857565b915092508060001904831181151516610b2457613bc98382029384611b3b565b143880613ba0565b6040519060c082016001600160401b03811183821017610b0e57604052600080835260a083613bfe611a1c565b6020820152826040820152826060820152604051613c1b8161138f565b838152836020820152608082015260405192613c36846113aa565b83520152565b60405190613c498261138f565b8160008152602061161a613bd156fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 16476,
  version: 9,
  views: {},
}
export const _stateSourceMap = {
  1: {
    at: './index.rsh:74:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:88:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
}
export const _Connectors = {
  ETH: _ETH,
}
export const _Participants = {
  Deployer: Deployer,
  addSong: addSong,
  buyMembership: buyMembership,
  endVotingPeriod: endVotingPeriod,
  receivePayout: receivePayout,
  vote: vote,
}
export const _APIs = {
  addSong: addSong,
  buyMembership: buyMembership,
  endVotingPeriod: endVotingPeriod,
  receivePayout: receivePayout,
  vote: vote,
}
