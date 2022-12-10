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
  const ctc1 = stdlib.T_Address
  return {
    endedVotingPeriod: [ctc0],
    membershipPurchased: [ctc1, ctc0],
    payoutReceived: [ctc1, ctc0, ctc0, ctc0],
    songAdded: [ctc0],
    voted: [ctc1, ctc0, ctc0],
  }
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib
  const ctc0 = stdlib.T_Address
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async () => {
        const v4809 = stdlib.safeAdd(v4759, v4758)

        return v4809
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async () => {
        return v4763
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async () => {
        return v4747
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async (_v4810) => {
        const v4810 = stdlib.protect(ctc0, _v4810, null)

        const v4811 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v4810),
          null,
        )
        const v4812 = {
          None: 0,
          Some: 1,
        }[v4811[0]]
        const v4813 = stdlib.eq(
          v4812,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4813, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:140:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:139:29:application call to [unknown function] (defined at: ./index.rsh:139:29:application)',
          ],
          msg: 'is member',
          who: 'Module',
        })
        const v4816 = stdlib.fromSome(
          v4811,
          stdlib.checkedBigNumberify(
            './index.rsh:141:43:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v4816
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async () => {
        return v4757
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async (_v4799) => {
        const v4799 = stdlib.protect(ctc1, _v4799, null)

        const v4800 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, v4799),
          null,
        )
        const v4801 = {
          None: 0,
          Some: 1,
        }[v4800[0]]
        const v4802 = stdlib.eq(
          v4801,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4802, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:132:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:131:20:application call to [unknown function] (defined at: ./index.rsh:131:20:application)',
          ],
          msg: 'song exists',
          who: 'Module',
        })
        const v4805 = '                                '
        const v4807 = {
          art: v4805,
          audio: v4805,
          creator: v4746,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v4808 = stdlib.fromSome(v4800, v4807)

        return v4808
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async (_v4817, _v4818) => {
        const v4817 = stdlib.protect(ctc1, _v4817, null)
        const v4818 = stdlib.protect(ctc1, _v4818, null)

        const v4819 = stdlib.protect(
          map5_ctc,
          await viewlib.viewMapRef(5, v4818),
          null,
        )
        const v4820 = {
          None: 0,
          Some: 1,
        }[v4819[0]]
        const v4821 = stdlib.eq(
          v4820,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4821, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:143:61:application call to "getSongPayout" (defined at: ./index.rsh:104:47:function exp)',
            'at ./index.rsh:143:26:application call to [unknown function] (defined at: ./index.rsh:143:26:application)',
          ],
          msg: 'voting period ended',
          who: 'Module',
        })
        const v4824 = stdlib.fromSome(
          v4819,
          stdlib.checkedBigNumberify(
            './index.rsh:106:63:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4825 = stdlib.protect(
          map4_ctc,
          await viewlib.viewMapRef(4, v4818),
          null,
        )
        const v4826 = stdlib.fromSome(
          v4825,
          stdlib.checkedBigNumberify(
            './index.rsh:109:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4827 = [v4818, v4817]
        const v4828 = stdlib.protect(
          map2_ctc,
          await viewlib.viewMapRef(2, stdlib.digest([ctc4], [v4827])),
          null,
        )
        const v4829 = stdlib.fromSome(
          v4828,
          stdlib.checkedBigNumberify(
            './index.rsh:113:46:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4830 = stdlib.safeMuldiv(v4824, v4829, v4826)

        return v4830
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
      const [v4746, v4747] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4746,
        v4747,
        v4757,
        v4758,
        v4759,
        v4760,
        v4761,
        v4762,
        v4763,
        v4767,
        v4771,
      ] = svs
      return await (async (_v4831, _v4832) => {
        const v4831 = stdlib.protect(ctc1, _v4831, null)
        const v4832 = stdlib.protect(ctc0, _v4832, null)

        const v4833 = [v4763, v4831, v4832]
        const v4834 = stdlib.protect(
          map3_ctc,
          await viewlib.viewMapRef(3, stdlib.digest([ctc6], [v4833])),
          null,
        )
        const v4835 = stdlib.fromSome(v4834, false)

        return v4835
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
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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

  const v4743 = stdlib.protect(
    ctc1,
    interact.membershipCost,
    "for Deployer's interact field membershipCost",
  )

  const txn1 = await ctc.sendrecv({
    args: [v4743],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:54:5:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:54:5:decimal',
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
        data: [v4747],
        secs: v4749,
        time: v4748,
        didSend: v27,
        from: v4746,
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
    data: [v4747],
    secs: v4749,
    time: v4748,
    didSend: v27,
    from: v4746,
  } = txn1
  const txn2 = await ctc.sendrecv({
    args: [v4746, v4747],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4748,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:78:5:decimal',
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
        secs: v4752,
        time: v4751,
        didSend: v32,
        from: v4750,
      } = txn2

      const v4756 = stdlib.safeAdd(
        v4752,
        stdlib.checkedBigNumberify(
          './index.rsh:4:32:application',
          stdlib.UInt_max,
          '2592000',
        ),
      )
      const v4757 = v4756
      const v4758 = stdlib.checkedBigNumberify(
        './index.rsh:91:29:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4759 = stdlib.checkedBigNumberify(
        './index.rsh:91:26:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4760 = stdlib.checkedBigNumberify(
        './index.rsh:91:23:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4761 = stdlib.checkedBigNumberify(
        './index.rsh:91:62:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4762 = stdlib.checkedBigNumberify(
        './index.rsh:91:59:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4763 = stdlib.checkedBigNumberify(
        './index.rsh:91:32:decimal',
        stdlib.UInt_max,
        '1',
      )
      const v4764 = v4751
      const v4767 = v4752
      const v4771 = stdlib.checkedBigNumberify(
        './index.rsh:50:9:after expr stmt semicolon',
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
    secs: v4752,
    time: v4751,
    didSend: v32,
    from: v4750,
  } = txn2
  const v4753 = stdlib.addressEq(v4746, v4750)
  stdlib.assert(v4753, {
    at: './index.rsh:78:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer',
  })
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:79:19:application',
    fs: [
      'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)',
      'at ./index.rsh:79:19:application call to "liftedInteract" (defined at: ./index.rsh:79:19:application)',
    ],
    msg: 'ready',
    who: 'Deployer',
  })

  const v4756 = stdlib.safeAdd(
    v4752,
    stdlib.checkedBigNumberify(
      './index.rsh:4:32:application',
      stdlib.UInt_max,
      '2592000',
    ),
  )
  let v4757 = v4756
  let v4758 = stdlib.checkedBigNumberify(
    './index.rsh:91:29:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4759 = stdlib.checkedBigNumberify(
    './index.rsh:91:26:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4760 = stdlib.checkedBigNumberify(
    './index.rsh:91:23:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4761 = stdlib.checkedBigNumberify(
    './index.rsh:91:62:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4762 = stdlib.checkedBigNumberify(
    './index.rsh:91:59:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4763 = stdlib.checkedBigNumberify(
    './index.rsh:91:32:decimal',
    stdlib.UInt_max,
    '1',
  )
  let v4764 = v4751
  let v4767 = v4752
  let v4771 = stdlib.checkedBigNumberify(
    './index.rsh:50:9:after expr stmt semicolon',
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
      data: [v5098],
      secs: v5100,
      time: v5099,
      didSend: v4161,
      from: v5097,
    } = txn4
    switch (v5098[0]) {
      case 'addSong0_655': {
        const v5101 = v5098[1]
        undefined /* setApiDetails */
        const v5108 = stdlib.addressEq(v5097, v4746)
        const v5109 = v5108 ? false : true
        stdlib.assert(v5109, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:178:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:177:35:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5111 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5097),
          null,
        )
        const v5112 = {
          None: 0,
          Some: 1,
        }[v5111[0]]
        const v5113 = stdlib.eq(
          v5112,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5113, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:179:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
            'at ./index.rsh:177:35:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5222 =
          v5101[
            stdlib.checkedBigNumberify(
              './index.rsh:177:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5223 =
          v5101[
            stdlib.checkedBigNumberify(
              './index.rsh:177:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v5236 = stdlib.fromSome(
          v5111,
          stdlib.checkedBigNumberify(
            './index.rsh:97:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5237 = stdlib.gt(v5236, v5100)
        stdlib.assert(v5237, {
          at: './index.rsh:98:16:application',
          fs: [
            'at ./index.rsh:183:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
            'at ./index.rsh:182:16:application call to [unknown function] (defined at: ./index.rsh:182:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v5238 = v5100
        const v5240 = {
          art: v5222,
          audio: v5223,
          creator: v5097,
          id: v5100,
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        await stdlib.mapSet(map1, v5100, v5240)
        null
        await txn4.getOutput('addSong', 'v5238', ctc1, v5238)
        const cv4757 = v4757
        const cv4758 = v4758
        const cv4759 = v4759
        const cv4760 = v4760
        const cv4761 = v4761
        const cv4762 = v4762
        const cv4763 = v4763
        const cv4764 = v5099
        const cv4767 = v5100
        const cv4771 = v4771

        v4757 = cv4757
        v4758 = cv4758
        v4759 = cv4759
        v4760 = cv4760
        v4761 = cv4761
        v4762 = cv4762
        v4763 = cv4763
        v4764 = cv4764
        v4767 = cv4767
        v4771 = cv4771

        txn3 = txn4
        continue
        break
      }
      case 'buyMembership0_655': {
        const v5418 = v5098[1]
        undefined /* setApiDetails */
        const v5436 = stdlib.addressEq(v5097, v4746)
        const v5437 = v5436 ? false : true
        stdlib.assert(v5437, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:153:31:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5441 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5097),
          null,
        )
        const v5442 = stdlib.fromSome(
          v5441,
          stdlib.checkedBigNumberify(
            './index.rsh:157:61:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5443 = stdlib.lt(v5442, v4767)
        stdlib.assert(v5443, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:153:31:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'membership still valid',
          who: 'Deployer',
        })
        const v5537 = stdlib.add(v4771, v4747)
        const v5571 = stdlib.safeAdd(
          v5100,
          stdlib.checkedBigNumberify(
            './index.rsh:4:32:application',
            stdlib.UInt_max,
            '2592000',
          ),
        )
        const v5574 = stdlib.lt(v5442, v5100)
        stdlib.assert(v5574, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:161:16:application call to [unknown function] (defined at: ./index.rsh:161:16:function exp)',
          ],
          msg: 'membership still valid',
          who: 'Deployer',
        })
        await stdlib.mapSet(map0, v5097, v5571)
        null
        await txn4.getOutput('buyMembership', 'v5571', ctc1, v5571)
        const v5581 = stdlib.safeAdd(
          v4760,
          stdlib.checkedBigNumberify(
            './index.rsh:166:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5582 = stdlib.safeAdd(v4759, v4747)
        const cv4757 = v4757
        const cv4758 = v4758
        const cv4759 = v5582
        const cv4760 = v5581
        const cv4761 = v4761
        const cv4762 = v4762
        const cv4763 = v4763
        const cv4764 = v5099
        const cv4767 = v5100
        const cv4771 = v5537

        v4757 = cv4757
        v4758 = cv4758
        v4759 = cv4759
        v4760 = cv4760
        v4761 = cv4761
        v4762 = cv4762
        v4763 = cv4763
        v4764 = cv4764
        v4767 = cv4767
        v4771 = cv4771

        txn3 = txn4
        continue
        break
      }
      case 'endVotingPeriod0_655': {
        const v5735 = v5098[1]
        undefined /* setApiDetails */
        const v5766 = stdlib.addressEq(v5097, v4746)
        const v5767 = v5766 ? false : true
        stdlib.assert(v5767, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:231:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:230:33:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5769 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5097),
          null,
        )
        const v5770 = {
          None: 0,
          Some: 1,
        }[v5769[0]]
        const v5771 = stdlib.eq(
          v5770,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5771, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:232:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
            'at ./index.rsh:230:33:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5909 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v4763),
          null,
        )
        const v5910 = stdlib.fromSome(
          v5909,
          stdlib.checkedBigNumberify(
            './index.rsh:234:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5911 = stdlib.safeDiv(
          v4759,
          stdlib.checkedBigNumberify(
            './index.rsh:235:40:decimal',
            stdlib.UInt_max,
            '3',
          ),
        )
        const v5912 = stdlib.safeSub(v4759, v5911)
        const v5916 = stdlib.fromSome(
          v5769,
          stdlib.checkedBigNumberify(
            './index.rsh:97:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5917 = stdlib.gt(v5916, v5100)
        stdlib.assert(v5917, {
          at: './index.rsh:98:16:application',
          fs: [
            'at ./index.rsh:240:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
            'at ./index.rsh:239:16:application call to [unknown function] (defined at: ./index.rsh:239:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v5918 = stdlib.safeAdd(v5910, v5912)
        await stdlib.mapSet(map5, v4763, v5918)
        null
        const v5919 = null
        await txn4.getOutput('endVotingPeriod', 'v5919', ctc0, v5919)
        const v5925 = stdlib.safeSub(v4759, v5912)
        const v5926 = stdlib.safeAdd(v4758, v5912)
        const v5927 = stdlib.safeAdd(
          v4763,
          stdlib.checkedBigNumberify(
            './index.rsh:248:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5928 = stdlib.safeAdd(
          v4757,
          stdlib.checkedBigNumberify(
            './index.rsh:4:32:application',
            stdlib.UInt_max,
            '2592000',
          ),
        )
        const cv4757 = v5928
        const cv4758 = v5926
        const cv4759 = v5925
        const cv4760 = v4760
        const cv4761 = v4761
        const cv4762 = stdlib.checkedBigNumberify(
          './index.rsh:250:13:decimal',
          stdlib.UInt_max,
          '0',
        )
        const cv4763 = v5927
        const cv4764 = v5099
        const cv4767 = v5100
        const cv4771 = v4771

        v4757 = cv4757
        v4758 = cv4758
        v4759 = cv4759
        v4760 = cv4760
        v4761 = cv4761
        v4762 = cv4762
        v4763 = cv4763
        v4764 = cv4764
        v4767 = cv4767
        v4771 = cv4771

        txn3 = txn4
        continue
        break
      }
      case 'receivePayout0_655': {
        const v6052 = v5098[1]
        undefined /* setApiDetails */
        const v6098 =
          v6052[
            stdlib.checkedBigNumberify(
              './index.rsh:256:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6099 =
          v6052[
            stdlib.checkedBigNumberify(
              './index.rsh:256:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v6100 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v6098),
          null,
        )
        const v6101 = '                                '
        const v6103 = {
          art: v6101,
          audio: v6101,
          creator: v4746,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v6104 = stdlib.fromSome(v6100, v6103)
        const v6107 = v6104.creator
        const v6111 = stdlib.addressEq(v5097, v6107)
        stdlib.assert(v6111, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not song creator',
          who: 'Deployer',
        })
        const v6113 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5097),
          null,
        )
        const v6114 = {
          None: 0,
          Some: 1,
        }[v6113[0]]
        const v6115 = stdlib.eq(
          v6114,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6115, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:259:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
            'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v6118 = {
          None: 0,
          Some: 1,
        }[v6100[0]]
        const v6119 = stdlib.eq(
          v6118,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6119, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v6121 = [v6099, v6098, v5097]
        const v6122 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, stdlib.digest([ctc14], [v6121])),
          null,
        )
        const v6123 = {
          None: 0,
          Some: 1,
        }[v6122[0]]
        const v6124 = stdlib.eq(
          v6123,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v6124, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'has received payout',
          who: 'Deployer',
        })
        const v6126 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v6099),
          null,
        )
        const v6127 = stdlib.fromSome(
          v6126,
          stdlib.checkedBigNumberify(
            './index.rsh:265:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6129 = {
          None: 0,
          Some: 1,
        }[v6126[0]]
        const v6130 = stdlib.eq(
          v6129,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6130, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:266:41:application call to "getSongPayout" (defined at: ./index.rsh:104:47:function exp)',
            'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'voting period ended',
          who: 'Deployer',
        })
        const v6134 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v6099),
          null,
        )
        const v6135 = stdlib.fromSome(
          v6134,
          stdlib.checkedBigNumberify(
            './index.rsh:109:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6136 = [v6099, v6098]
        const v6137 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc11], [v6136])),
          null,
        )
        const v6138 = stdlib.fromSome(
          v6137,
          stdlib.checkedBigNumberify(
            './index.rsh:113:46:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6139 = stdlib.safeMuldiv(v6127, v6138, v6135)
        const v6140 = stdlib.le(v6139, v6127)
        stdlib.assert(v6140, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v6143 = stdlib.ge(v4771, v6139)
        stdlib.assert(v6143, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        const v6300 = stdlib.sub(v4771, v6139)
        await stdlib.mapSet(map6, stdlib.digest([ctc14], [v6121]), true)
        const v6302 = stdlib.safeSub(v6127, v6139)
        await stdlib.mapSet(map5, v6099, v6302)
        null
        await txn4.getOutput('receivePayout', 'v6139', ctc1, v6139)
        const v6310 = stdlib.safeSub(v4758, v6139)
        const cv4757 = v4757
        const cv4758 = v6310
        const cv4759 = v4759
        const cv4760 = v4760
        const cv4761 = v4761
        const cv4762 = v4762
        const cv4763 = v4763
        const cv4764 = v5099
        const cv4767 = v5100
        const cv4771 = v6300

        v4757 = cv4757
        v4758 = cv4758
        v4759 = cv4759
        v4760 = cv4760
        v4761 = cv4761
        v4762 = cv4762
        v4763 = cv4763
        v4764 = cv4764
        v4767 = cv4767
        v4771 = cv4771

        txn3 = txn4
        continue
        break
      }
      case 'vote0_655': {
        const v6369 = v5098[1]
        undefined /* setApiDetails */
        const v6466 =
          v6369[
            stdlib.checkedBigNumberify(
              './index.rsh:206:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6467 = stdlib.addressEq(v5097, v4746)
        const v6468 = v6467 ? false : true
        stdlib.assert(v6468, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v6470 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5097),
          null,
        )
        const v6471 = {
          None: 0,
          Some: 1,
        }[v6470[0]]
        const v6472 = stdlib.eq(
          v6471,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6472, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:208:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
            'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v6474 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v6466),
          null,
        )
        const v6475 = {
          None: 0,
          Some: 1,
        }[v6474[0]]
        const v6476 = stdlib.eq(
          v6475,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6476, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:209:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v6478 = [v4763, v6466, v5097]
        const v6479 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc14], [v6478])),
          null,
        )
        const v6480 = {
          None: 0,
          Some: 1,
        }[v6479[0]]
        const v6481 = stdlib.eq(
          v6480,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v6481, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:210:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'has voted',
          who: 'Deployer',
        })
        const v6651 = stdlib.fromSome(
          v6470,
          stdlib.checkedBigNumberify(
            './index.rsh:97:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6652 = stdlib.gt(v6651, v5100)
        stdlib.assert(v6652, {
          at: './index.rsh:98:16:application',
          fs: [
            'at ./index.rsh:214:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
            'at ./index.rsh:213:16:application call to [unknown function] (defined at: ./index.rsh:213:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v6654 = '                                '
        const v6656 = {
          art: v6654,
          audio: v6654,
          creator: v4746,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v6657 = stdlib.fromSome(v6474, v6656)
        const v6658 = v6657.art
        const v6659 = v6657.audio
        const v6660 = v6657.creator
        const v6661 = v6657.id
        const v6662 = v6657.votes
        const v6664 = [v4763, v6466]
        const v6665 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc11], [v6664])),
          null,
        )
        const v6666 = stdlib.fromSome(
          v6665,
          stdlib.checkedBigNumberify(
            './index.rsh:120:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6668 = stdlib.safeAdd(
          v6666,
          stdlib.checkedBigNumberify(
            './index.rsh:121:45:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map2, stdlib.digest([ctc11], [v6664]), v6668)
        await stdlib.mapSet(map3, stdlib.digest([ctc14], [v6478]), true)
        const v6670 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v4763),
          null,
        )
        const v6671 = stdlib.fromSome(
          v6670,
          stdlib.checkedBigNumberify(
            './index.rsh:124:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6672 = stdlib.safeAdd(
          v6671,
          stdlib.checkedBigNumberify(
            './index.rsh:124:59:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map4, v4763, v6672)
        const v6673 = stdlib.safeAdd(
          v6662,
          stdlib.checkedBigNumberify(
            './index.rsh:127:31:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v6674 = {
          art: v6658,
          audio: v6659,
          creator: v6660,
          id: v6661,
          votes: v6673,
        }
        await stdlib.mapSet(map1, v6466, v6674)
        null
        const v6676 = null
        await txn4.getOutput('vote', 'v6676', ctc0, v6676)
        const v6683 = stdlib.safeAdd(
          v4762,
          stdlib.checkedBigNumberify(
            './index.rsh:224:30:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v6684 = stdlib.safeAdd(
          v4761,
          stdlib.checkedBigNumberify(
            './index.rsh:225:26:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv4757 = v4757
        const cv4758 = v4758
        const cv4759 = v4759
        const cv4760 = v4760
        const cv4761 = v6684
        const cv4762 = v6683
        const cv4763 = v4763
        const cv4764 = v5099
        const cv4767 = v5100
        const cv4771 = v4771

        v4757 = cv4757
        v4758 = cv4758
        v4759 = cv4759
        v4760 = cv4760
        v4761 = cv4761
        v4762 = cv4762
        v4763 = cv4763
        v4764 = cv4764
        v4767 = cv4767
        v4771 = cv4771

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
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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
    v4746,
    v4747,
    v4757,
    v4758,
    v4759,
    v4760,
    v4761,
    v4762,
    v4763,
    v4767,
    v4771,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4853 = ctc.selfAddress()
  const v4855 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:177:35:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
      'at ./index.rsh:91:21:application call to "runaddSong0_655" (defined at: ./index.rsh:177:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'addSong',
  })
  const v4860 = stdlib.addressEq(v4853, v4746)
  const v4861 = v4860 ? false : true
  stdlib.assert(v4861, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:178:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:177:35:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
      'at ./index.rsh:91:21:application call to "runaddSong0_655" (defined at: ./index.rsh:177:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'addSong',
  })
  const v4863 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4853), null)
  const v4864 = {
    None: 0,
    Some: 1,
  }[v4863[0]]
  const v4865 = stdlib.eq(
    v4864,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4865, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:179:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
      'at ./index.rsh:177:35:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
      'at ./index.rsh:91:21:application call to "runaddSong0_655" (defined at: ./index.rsh:177:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'is member',
    who: 'addSong',
  })
  const v4874 = ['addSong0_655', v4855]

  const txn1 = await ctc.sendrecv({
    args: [
      v4746,
      v4747,
      v4757,
      v4758,
      v4759,
      v4760,
      v4761,
      v4762,
      v4763,
      v4767,
      v4771,
      v4874,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:181:10:decimal',
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
        data: [v5098],
        secs: v5100,
        time: v5099,
        didSend: v4161,
        from: v5097,
      } = txn1

      switch (v5098[0]) {
        case 'addSong0_655': {
          const v5101 = v5098[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'addSong',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5097),
            null,
          )
          const v5222 =
            v5101[
              stdlib.checkedBigNumberify(
                './index.rsh:177:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v5223 =
            v5101[
              stdlib.checkedBigNumberify(
                './index.rsh:177:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v5238 = v5100
          const v5240 = {
            art: v5222,
            audio: v5223,
            creator: v5097,
            id: v5100,
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          await stdlib.simMapSet(sim_r, 1, v5100, v5240)
          null
          const v5241 = await txn1.getOutput('addSong', 'v5238', ctc1, v5238)

          const v12410 = v4757
          const v12411 = v4758
          const v12412 = v4759
          const v12413 = v4760
          const v12414 = v4761
          const v12415 = v4762
          const v12416 = v4763
          const v12418 = v5100
          const v12419 = v4771
          sim_r.isHalt = false

          break
        }
        case 'buyMembership0_655': {
          const v5418 = v5098[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5735 = v5098[1]

          break
        }
        case 'receivePayout0_655': {
          const v6052 = v5098[1]

          break
        }
        case 'vote0_655': {
          const v6369 = v5098[1]

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
    data: [v5098],
    secs: v5100,
    time: v5099,
    didSend: v4161,
    from: v5097,
  } = txn1
  switch (v5098[0]) {
    case 'addSong0_655': {
      const v5101 = v5098[1]
      undefined /* setApiDetails */
      const v5108 = stdlib.addressEq(v5097, v4746)
      const v5109 = v5108 ? false : true
      stdlib.assert(v5109, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:178:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:177:35:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'addSong',
      })
      const v5111 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5097),
        null,
      )
      const v5112 = {
        None: 0,
        Some: 1,
      }[v5111[0]]
      const v5113 = stdlib.eq(
        v5112,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5113, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:179:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
          'at ./index.rsh:177:35:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:177:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'is member',
        who: 'addSong',
      })
      const v5222 =
        v5101[
          stdlib.checkedBigNumberify(
            './index.rsh:177:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5223 =
        v5101[
          stdlib.checkedBigNumberify(
            './index.rsh:177:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v5236 = stdlib.fromSome(
        v5111,
        stdlib.checkedBigNumberify(
          './index.rsh:97:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5237 = stdlib.gt(v5236, v5100)
      stdlib.assert(v5237, {
        at: './index.rsh:98:16:application',
        fs: [
          'at ./index.rsh:183:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
          'at ./index.rsh:182:16:application call to [unknown function] (defined at: ./index.rsh:182:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'addSong',
      })
      const v5238 = v5100
      const v5240 = {
        art: v5222,
        audio: v5223,
        creator: v5097,
        id: v5100,
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      await stdlib.mapSet(map1, v5100, v5240)
      null
      const v5241 = await txn1.getOutput('addSong', 'v5238', ctc1, v5238)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v5101, v5241), {
          at: './index.rsh:177:11:application',
          fs: [
            'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)',
            'at ./index.rsh:193:17:application call to "notify" (defined at: ./index.rsh:182:16:function exp)',
            'at ./index.rsh:182:16:application call to [unknown function] (defined at: ./index.rsh:182:16:function exp)',
          ],
          msg: 'out',
          who: 'addSong',
        })
      } else {
      }

      const v12410 = v4757
      const v12411 = v4758
      const v12412 = v4759
      const v12413 = v4760
      const v12414 = v4761
      const v12415 = v4762
      const v12416 = v4763
      const v12418 = v5100
      const v12419 = v4771
      return

      break
    }
    case 'buyMembership0_655': {
      const v5418 = v5098[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5735 = v5098[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6052 = v5098[1]
      return
      break
    }
    case 'vote0_655': {
      const v6369 = v5098[1]
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
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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
    v4746,
    v4747,
    v4757,
    v4758,
    v4759,
    v4760,
    v4761,
    v4762,
    v4763,
    v4767,
    v4771,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4836 = ctc.selfAddress()
  const v4838 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:153:31:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
      'at ./index.rsh:91:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:153:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'buyMembership',
  })
  const v4839 = stdlib.addressEq(v4836, v4746)
  const v4840 = v4839 ? false : true
  stdlib.assert(v4840, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:153:31:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
      'at ./index.rsh:91:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:153:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'buyMembership',
  })
  const v4844 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4836), null)
  const v4845 = stdlib.fromSome(
    v4844,
    stdlib.checkedBigNumberify(
      './index.rsh:157:61:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4846 = stdlib.lt(v4845, v4767)
  stdlib.assert(v4846, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:153:31:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
      'at ./index.rsh:91:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:153:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'membership still valid',
    who: 'buyMembership',
  })
  const v4851 = ['buyMembership0_655', v4838]

  const txn1 = await ctc.sendrecv({
    args: [
      v4746,
      v4747,
      v4757,
      v4758,
      v4759,
      v4760,
      v4761,
      v4762,
      v4763,
      v4767,
      v4771,
      v4851,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v4747, []],
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
        data: [v5098],
        secs: v5100,
        time: v5099,
        didSend: v4161,
        from: v5097,
      } = txn1

      switch (v5098[0]) {
        case 'addSong0_655': {
          const v5101 = v5098[1]

          break
        }
        case 'buyMembership0_655': {
          const v5418 = v5098[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'buyMembership',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5097),
            null,
          )
          const v5537 = stdlib.add(v4771, v4747)
          sim_r.txns.push({
            amt: v4747,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          const v5571 = stdlib.safeAdd(
            v5100,
            stdlib.checkedBigNumberify(
              './index.rsh:4:32:application',
              stdlib.UInt_max,
              '2592000',
            ),
          )
          await stdlib.simMapSet(sim_r, 0, v5097, v5571)
          null
          const v5576 = await txn1.getOutput(
            'buyMembership',
            'v5571',
            ctc1,
            v5571,
          )

          const v5581 = stdlib.safeAdd(
            v4760,
            stdlib.checkedBigNumberify(
              './index.rsh:166:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5582 = stdlib.safeAdd(v4759, v4747)
          const v12470 = v4757
          const v12471 = v4758
          const v12472 = v5582
          const v12473 = v5581
          const v12474 = v4761
          const v12475 = v4762
          const v12476 = v4763
          const v12478 = v5100
          const v12479 = v5537
          sim_r.isHalt = false

          break
        }
        case 'endVotingPeriod0_655': {
          const v5735 = v5098[1]

          break
        }
        case 'receivePayout0_655': {
          const v6052 = v5098[1]

          break
        }
        case 'vote0_655': {
          const v6369 = v5098[1]

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
    data: [v5098],
    secs: v5100,
    time: v5099,
    didSend: v4161,
    from: v5097,
  } = txn1
  switch (v5098[0]) {
    case 'addSong0_655': {
      const v5101 = v5098[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5418 = v5098[1]
      undefined /* setApiDetails */
      const v5436 = stdlib.addressEq(v5097, v4746)
      const v5437 = v5436 ? false : true
      stdlib.assert(v5437, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:153:31:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'buyMembership',
      })
      const v5441 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5097),
        null,
      )
      const v5442 = stdlib.fromSome(
        v5441,
        stdlib.checkedBigNumberify(
          './index.rsh:157:61:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5443 = stdlib.lt(v5442, v4767)
      stdlib.assert(v5443, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:153:31:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:153:31:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'membership still valid',
        who: 'buyMembership',
      })
      const v5537 = stdlib.add(v4771, v4747)
      const v5571 = stdlib.safeAdd(
        v5100,
        stdlib.checkedBigNumberify(
          './index.rsh:4:32:application',
          stdlib.UInt_max,
          '2592000',
        ),
      )
      const v5574 = stdlib.lt(v5442, v5100)
      stdlib.assert(v5574, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:161:16:application call to [unknown function] (defined at: ./index.rsh:161:16:function exp)',
        ],
        msg: 'membership still valid',
        who: 'buyMembership',
      })
      await stdlib.mapSet(map0, v5097, v5571)
      null
      const v5576 = await txn1.getOutput('buyMembership', 'v5571', ctc1, v5571)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v5418, v5576), {
          at: './index.rsh:153:11:application',
          fs: [
            'at ./index.rsh:153:11:application call to [unknown function] (defined at: ./index.rsh:153:11:function exp)',
            'at ./index.rsh:164:17:application call to "notify" (defined at: ./index.rsh:161:16:function exp)',
            'at ./index.rsh:161:16:application call to [unknown function] (defined at: ./index.rsh:161:16:function exp)',
          ],
          msg: 'out',
          who: 'buyMembership',
        })
      } else {
      }

      const v5581 = stdlib.safeAdd(
        v4760,
        stdlib.checkedBigNumberify(
          './index.rsh:166:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5582 = stdlib.safeAdd(v4759, v4747)
      const v12470 = v4757
      const v12471 = v4758
      const v12472 = v5582
      const v12473 = v5581
      const v12474 = v4761
      const v12475 = v4762
      const v12476 = v4763
      const v12478 = v5100
      const v12479 = v5537
      return

      break
    }
    case 'endVotingPeriod0_655': {
      const v5735 = v5098[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6052 = v5098[1]
      return
      break
    }
    case 'vote0_655': {
      const v6369 = v5098[1]
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
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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
    v4746,
    v4747,
    v4757,
    v4758,
    v4759,
    v4760,
    v4761,
    v4762,
    v4763,
    v4767,
    v4771,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4904 = ctc.selfAddress()
  const v4906 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:230:33:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
      'at ./index.rsh:91:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:230:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'endVotingPeriod',
  })
  const v4907 = stdlib.addressEq(v4904, v4746)
  const v4908 = v4907 ? false : true
  stdlib.assert(v4908, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:231:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:230:33:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
      'at ./index.rsh:91:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:230:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'endVotingPeriod',
  })
  const v4910 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4904), null)
  const v4911 = {
    None: 0,
    Some: 1,
  }[v4910[0]]
  const v4912 = stdlib.eq(
    v4911,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4912, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:232:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
      'at ./index.rsh:230:33:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
      'at ./index.rsh:91:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:230:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'is member',
    who: 'endVotingPeriod',
  })
  const v4921 = ['endVotingPeriod0_655', v4906]

  const txn1 = await ctc.sendrecv({
    args: [
      v4746,
      v4747,
      v4757,
      v4758,
      v4759,
      v4760,
      v4761,
      v4762,
      v4763,
      v4767,
      v4771,
      v4921,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:238:10:decimal',
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
        data: [v5098],
        secs: v5100,
        time: v5099,
        didSend: v4161,
        from: v5097,
      } = txn1

      switch (v5098[0]) {
        case 'addSong0_655': {
          const v5101 = v5098[1]

          break
        }
        case 'buyMembership0_655': {
          const v5418 = v5098[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5735 = v5098[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'endVotingPeriod',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5097),
            null,
          )
          const v5909 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v4763),
            null,
          )
          const v5910 = stdlib.fromSome(
            v5909,
            stdlib.checkedBigNumberify(
              './index.rsh:234:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5911 = stdlib.safeDiv(
            v4759,
            stdlib.checkedBigNumberify(
              './index.rsh:235:40:decimal',
              stdlib.UInt_max,
              '3',
            ),
          )
          const v5912 = stdlib.safeSub(v4759, v5911)
          const v5918 = stdlib.safeAdd(v5910, v5912)
          await stdlib.simMapSet(sim_r, 5, v4763, v5918)
          null
          const v5919 = null
          const v5920 = await txn1.getOutput(
            'endVotingPeriod',
            'v5919',
            ctc0,
            v5919,
          )

          const v5925 = stdlib.safeSub(v4759, v5912)
          const v5926 = stdlib.safeAdd(v4758, v5912)
          const v5927 = stdlib.safeAdd(
            v4763,
            stdlib.checkedBigNumberify(
              './index.rsh:248:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5928 = stdlib.safeAdd(
            v4757,
            stdlib.checkedBigNumberify(
              './index.rsh:4:32:application',
              stdlib.UInt_max,
              '2592000',
            ),
          )
          const v12530 = v5928
          const v12531 = v5926
          const v12532 = v5925
          const v12533 = v4760
          const v12534 = v4761
          const v12535 = stdlib.checkedBigNumberify(
            './index.rsh:250:13:decimal',
            stdlib.UInt_max,
            '0',
          )
          const v12536 = v5927
          const v12538 = v5100
          const v12539 = v4771
          sim_r.isHalt = false

          break
        }
        case 'receivePayout0_655': {
          const v6052 = v5098[1]

          break
        }
        case 'vote0_655': {
          const v6369 = v5098[1]

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
    data: [v5098],
    secs: v5100,
    time: v5099,
    didSend: v4161,
    from: v5097,
  } = txn1
  switch (v5098[0]) {
    case 'addSong0_655': {
      const v5101 = v5098[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5418 = v5098[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5735 = v5098[1]
      undefined /* setApiDetails */
      const v5766 = stdlib.addressEq(v5097, v4746)
      const v5767 = v5766 ? false : true
      stdlib.assert(v5767, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:231:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:230:33:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'endVotingPeriod',
      })
      const v5769 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5097),
        null,
      )
      const v5770 = {
        None: 0,
        Some: 1,
      }[v5769[0]]
      const v5771 = stdlib.eq(
        v5770,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5771, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:232:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
          'at ./index.rsh:230:33:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:230:33:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'is member',
        who: 'endVotingPeriod',
      })
      const v5909 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v4763),
        null,
      )
      const v5910 = stdlib.fromSome(
        v5909,
        stdlib.checkedBigNumberify(
          './index.rsh:234:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5911 = stdlib.safeDiv(
        v4759,
        stdlib.checkedBigNumberify(
          './index.rsh:235:40:decimal',
          stdlib.UInt_max,
          '3',
        ),
      )
      const v5912 = stdlib.safeSub(v4759, v5911)
      const v5916 = stdlib.fromSome(
        v5769,
        stdlib.checkedBigNumberify(
          './index.rsh:97:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5917 = stdlib.gt(v5916, v5100)
      stdlib.assert(v5917, {
        at: './index.rsh:98:16:application',
        fs: [
          'at ./index.rsh:240:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
          'at ./index.rsh:239:16:application call to [unknown function] (defined at: ./index.rsh:239:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'endVotingPeriod',
      })
      const v5918 = stdlib.safeAdd(v5910, v5912)
      await stdlib.mapSet(map5, v4763, v5918)
      null
      const v5919 = null
      const v5920 = await txn1.getOutput(
        'endVotingPeriod',
        'v5919',
        ctc0,
        v5919,
      )
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v5735, v5920), {
          at: './index.rsh:230:11:application',
          fs: [
            'at ./index.rsh:230:11:application call to [unknown function] (defined at: ./index.rsh:230:11:function exp)',
            'at ./index.rsh:243:17:application call to "notify" (defined at: ./index.rsh:239:16:function exp)',
            'at ./index.rsh:239:16:application call to [unknown function] (defined at: ./index.rsh:239:16:function exp)',
          ],
          msg: 'out',
          who: 'endVotingPeriod',
        })
      } else {
      }

      const v5925 = stdlib.safeSub(v4759, v5912)
      const v5926 = stdlib.safeAdd(v4758, v5912)
      const v5927 = stdlib.safeAdd(
        v4763,
        stdlib.checkedBigNumberify(
          './index.rsh:248:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5928 = stdlib.safeAdd(
        v4757,
        stdlib.checkedBigNumberify(
          './index.rsh:4:32:application',
          stdlib.UInt_max,
          '2592000',
        ),
      )
      const v12530 = v5928
      const v12531 = v5926
      const v12532 = v5925
      const v12533 = v4760
      const v12534 = v4761
      const v12535 = stdlib.checkedBigNumberify(
        './index.rsh:250:13:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v12536 = v5927
      const v12538 = v5100
      const v12539 = v4771
      return

      break
    }
    case 'receivePayout0_655': {
      const v6052 = v5098[1]
      return
      break
    }
    case 'vote0_655': {
      const v6369 = v5098[1]
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
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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
    v4746,
    v4747,
    v4757,
    v4758,
    v4759,
    v4760,
    v4761,
    v4762,
    v4763,
    v4767,
    v4771,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4923 = ctc.selfAddress()
  const v4925 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'receivePayout',
  })
  const v4926 =
    v4925[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4927 =
    v4925[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '1',
      )
    ]
  const v4930 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4926), null)
  const v4931 = '                                '
  const v4933 = {
    art: v4931,
    audio: v4931,
    creator: v4746,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
  }
  const v4934 = stdlib.fromSome(v4930, v4933)
  const v4937 = v4934.creator
  const v4941 = stdlib.addressEq(v4923, v4937)
  stdlib.assert(v4941, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not song creator',
    who: 'receivePayout',
  })
  const v4943 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4923), null)
  const v4944 = {
    None: 0,
    Some: 1,
  }[v4943[0]]
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
      'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:259:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'is member',
    who: 'receivePayout',
  })
  const v4948 = {
    None: 0,
    Some: 1,
  }[v4930[0]]
  const v4949 = stdlib.eq(
    v4948,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4949, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'receivePayout',
  })
  const v4951 = [v4927, v4926, v4923]
  const v4952 = stdlib.protect(
    map6_ctc,
    await stdlib.mapRef(map6, stdlib.digest([ctc10], [v4951])),
    null,
  )
  const v4953 = {
    None: 0,
    Some: 1,
  }[v4952[0]]
  const v4954 = stdlib.eq(
    v4953,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4954, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'receivePayout',
  })
  const v4956 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v4927), null)
  const v4957 = stdlib.fromSome(
    v4956,
    stdlib.checkedBigNumberify(
      './index.rsh:265:54:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4959 = {
    None: 0,
    Some: 1,
  }[v4956[0]]
  const v4960 = stdlib.eq(
    v4959,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4960, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:266:41:application call to "getSongPayout" (defined at: ./index.rsh:104:47:function exp)',
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'voting period ended',
    who: 'receivePayout',
  })
  const v4964 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v4927), null)
  const v4965 = stdlib.fromSome(
    v4964,
    stdlib.checkedBigNumberify(
      './index.rsh:109:11:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4966 = [v4927, v4926]
  const v4967 = stdlib.protect(
    map2_ctc,
    await stdlib.mapRef(map2, stdlib.digest([ctc9], [v4966])),
    null,
  )
  const v4968 = stdlib.fromSome(
    v4967,
    stdlib.checkedBigNumberify(
      './index.rsh:113:46:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4969 = stdlib.safeMuldiv(v4957, v4968, v4965)
  const v4970 = stdlib.le(v4969, v4957)
  stdlib.assert(v4970, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4973 = stdlib.ge(v4771, v4969)
  stdlib.assert(v4973, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:256:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })
  const v4982 = ['receivePayout0_655', v4925]

  const txn1 = await ctc.sendrecv({
    args: [
      v4746,
      v4747,
      v4757,
      v4758,
      v4759,
      v4760,
      v4761,
      v4762,
      v4763,
      v4767,
      v4771,
      v4982,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:270:10:decimal',
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
        data: [v5098],
        secs: v5100,
        time: v5099,
        didSend: v4161,
        from: v5097,
      } = txn1

      switch (v5098[0]) {
        case 'addSong0_655': {
          const v5101 = v5098[1]

          break
        }
        case 'buyMembership0_655': {
          const v5418 = v5098[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5735 = v5098[1]

          break
        }
        case 'receivePayout0_655': {
          const v6052 = v5098[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'receivePayout',
          })
          const v6098 =
            v6052[
              stdlib.checkedBigNumberify(
                './index.rsh:256:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v6099 =
            v6052[
              stdlib.checkedBigNumberify(
                './index.rsh:256:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v6098),
            null,
          )
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5097),
            null,
          )
          const v6121 = [v6099, v6098, v5097]
          stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, stdlib.digest([ctc10], [v6121])),
            null,
          )
          const v6126 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v6099),
            null,
          )
          const v6127 = stdlib.fromSome(
            v6126,
            stdlib.checkedBigNumberify(
              './index.rsh:265:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6134 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v6099),
            null,
          )
          const v6135 = stdlib.fromSome(
            v6134,
            stdlib.checkedBigNumberify(
              './index.rsh:109:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6136 = [v6099, v6098]
          const v6137 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc9], [v6136])),
            null,
          )
          const v6138 = stdlib.fromSome(
            v6137,
            stdlib.checkedBigNumberify(
              './index.rsh:113:46:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6139 = stdlib.safeMuldiv(v6127, v6138, v6135)
          const v6300 = stdlib.sub(v4771, v6139)
          sim_r.txns.push({
            kind: 'from',
            to: v5097,
            tok: undefined /* Nothing */,
          })
          await stdlib.simMapSet(
            sim_r,
            6,
            stdlib.digest([ctc10], [v6121]),
            true,
          )
          const v6302 = stdlib.safeSub(v6127, v6139)
          await stdlib.simMapSet(sim_r, 5, v6099, v6302)
          null
          const v6303 = await txn1.getOutput(
            'receivePayout',
            'v6139',
            ctc1,
            v6139,
          )

          const v6310 = stdlib.safeSub(v4758, v6139)
          const v12590 = v4757
          const v12591 = v6310
          const v12592 = v4759
          const v12593 = v4760
          const v12594 = v4761
          const v12595 = v4762
          const v12596 = v4763
          const v12598 = v5100
          const v12599 = v6300
          sim_r.isHalt = false

          break
        }
        case 'vote0_655': {
          const v6369 = v5098[1]

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
    data: [v5098],
    secs: v5100,
    time: v5099,
    didSend: v4161,
    from: v5097,
  } = txn1
  switch (v5098[0]) {
    case 'addSong0_655': {
      const v5101 = v5098[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5418 = v5098[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5735 = v5098[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6052 = v5098[1]
      undefined /* setApiDetails */
      const v6098 =
        v6052[
          stdlib.checkedBigNumberify(
            './index.rsh:256:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6099 =
        v6052[
          stdlib.checkedBigNumberify(
            './index.rsh:256:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v6100 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v6098),
        null,
      )
      const v6101 = '                                '
      const v6103 = {
        art: v6101,
        audio: v6101,
        creator: v4746,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v6104 = stdlib.fromSome(v6100, v6103)
      const v6107 = v6104.creator
      const v6111 = stdlib.addressEq(v5097, v6107)
      stdlib.assert(v6111, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not song creator',
        who: 'receivePayout',
      })
      const v6113 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5097),
        null,
      )
      const v6114 = {
        None: 0,
        Some: 1,
      }[v6113[0]]
      const v6115 = stdlib.eq(
        v6114,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6115, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:259:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
          'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'is member',
        who: 'receivePayout',
      })
      const v6118 = {
        None: 0,
        Some: 1,
      }[v6100[0]]
      const v6119 = stdlib.eq(
        v6118,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6119, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'receivePayout',
      })
      const v6121 = [v6099, v6098, v5097]
      const v6122 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, stdlib.digest([ctc10], [v6121])),
        null,
      )
      const v6123 = {
        None: 0,
        Some: 1,
      }[v6122[0]]
      const v6124 = stdlib.eq(
        v6123,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v6124, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'has received payout',
        who: 'receivePayout',
      })
      const v6126 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v6099),
        null,
      )
      const v6127 = stdlib.fromSome(
        v6126,
        stdlib.checkedBigNumberify(
          './index.rsh:265:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6129 = {
        None: 0,
        Some: 1,
      }[v6126[0]]
      const v6130 = stdlib.eq(
        v6129,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6130, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:266:41:application call to "getSongPayout" (defined at: ./index.rsh:104:47:function exp)',
          'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'voting period ended',
        who: 'receivePayout',
      })
      const v6134 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v6099),
        null,
      )
      const v6135 = stdlib.fromSome(
        v6134,
        stdlib.checkedBigNumberify(
          './index.rsh:109:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6136 = [v6099, v6098]
      const v6137 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, stdlib.digest([ctc9], [v6136])),
        null,
      )
      const v6138 = stdlib.fromSome(
        v6137,
        stdlib.checkedBigNumberify(
          './index.rsh:113:46:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6139 = stdlib.safeMuldiv(v6127, v6138, v6135)
      const v6140 = stdlib.le(v6139, v6127)
      stdlib.assert(v6140, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v6143 = stdlib.ge(v4771, v6139)
      stdlib.assert(v6143, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:256:46:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:256:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      const v6300 = stdlib.sub(v4771, v6139)
      await stdlib.mapSet(map6, stdlib.digest([ctc10], [v6121]), true)
      const v6302 = stdlib.safeSub(v6127, v6139)
      await stdlib.mapSet(map5, v6099, v6302)
      null
      const v6303 = await txn1.getOutput('receivePayout', 'v6139', ctc1, v6139)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v6052, v6303), {
          at: './index.rsh:256:11:application',
          fs: [
            'at ./index.rsh:256:11:application call to [unknown function] (defined at: ./index.rsh:256:11:function exp)',
            'at ./index.rsh:276:17:application call to "notify" (defined at: ./index.rsh:271:16:function exp)',
            'at ./index.rsh:271:16:application call to [unknown function] (defined at: ./index.rsh:271:16:function exp)',
          ],
          msg: 'out',
          who: 'receivePayout',
        })
      } else {
      }

      const v6310 = stdlib.safeSub(v4758, v6139)
      const v12590 = v4757
      const v12591 = v6310
      const v12592 = v4759
      const v12593 = v4760
      const v12594 = v4761
      const v12595 = v4762
      const v12596 = v4763
      const v12598 = v5100
      const v12599 = v6300
      return

      break
    }
    case 'vote0_655': {
      const v6369 = v5098[1]
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
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
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
    v4746,
    v4747,
    v4757,
    v4758,
    v4759,
    v4760,
    v4761,
    v4762,
    v4763,
    v4767,
    v4771,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4876 = ctc.selfAddress()
  const v4878 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_655" (defined at: ./index.rsh:206:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'vote',
  })
  const v4879 =
    v4878[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4881 = stdlib.addressEq(v4876, v4746)
  const v4882 = v4881 ? false : true
  stdlib.assert(v4882, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_655" (defined at: ./index.rsh:206:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'vote',
  })
  const v4884 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4876), null)
  const v4885 = {
    None: 0,
    Some: 1,
  }[v4884[0]]
  const v4886 = stdlib.eq(
    v4885,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4886, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:208:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
      'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_655" (defined at: ./index.rsh:206:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'is member',
    who: 'vote',
  })
  const v4888 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4879), null)
  const v4889 = {
    None: 0,
    Some: 1,
  }[v4888[0]]
  const v4890 = stdlib.eq(
    v4889,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4890, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:209:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_655" (defined at: ./index.rsh:206:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'vote',
  })
  const v4892 = [v4763, v4879, v4876]
  const v4893 = stdlib.protect(
    map3_ctc,
    await stdlib.mapRef(map3, stdlib.digest([ctc10], [v4892])),
    null,
  )
  const v4894 = {
    None: 0,
    Some: 1,
  }[v4893[0]]
  const v4895 = stdlib.eq(
    v4894,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4895, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:210:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_655" (defined at: ./index.rsh:206:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'has voted',
    who: 'vote',
  })
  const v4902 = ['vote0_655', v4878]

  const txn1 = await ctc.sendrecv({
    args: [
      v4746,
      v4747,
      v4757,
      v4758,
      v4759,
      v4760,
      v4761,
      v4762,
      v4763,
      v4767,
      v4771,
      v4902,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:212:10:decimal',
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
        data: [v5098],
        secs: v5100,
        time: v5099,
        didSend: v4161,
        from: v5097,
      } = txn1

      switch (v5098[0]) {
        case 'addSong0_655': {
          const v5101 = v5098[1]

          break
        }
        case 'buyMembership0_655': {
          const v5418 = v5098[1]

          break
        }
        case 'endVotingPeriod0_655': {
          const v5735 = v5098[1]

          break
        }
        case 'receivePayout0_655': {
          const v6052 = v5098[1]

          break
        }
        case 'vote0_655': {
          const v6369 = v5098[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'vote',
          })
          const v6466 =
            v6369[
              stdlib.checkedBigNumberify(
                './index.rsh:206:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5097),
            null,
          )
          const v6474 = stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v6466),
            null,
          )
          const v6478 = [v4763, v6466, v5097]
          stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc10], [v6478])),
            null,
          )
          const v6654 = '                                '
          const v6656 = {
            art: v6654,
            audio: v6654,
            creator: v4746,
            id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          const v6657 = stdlib.fromSome(v6474, v6656)
          const v6658 = v6657.art
          const v6659 = v6657.audio
          const v6660 = v6657.creator
          const v6661 = v6657.id
          const v6662 = v6657.votes
          const v6664 = [v4763, v6466]
          const v6665 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc13], [v6664])),
            null,
          )
          const v6666 = stdlib.fromSome(
            v6665,
            stdlib.checkedBigNumberify(
              './index.rsh:120:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6668 = stdlib.safeAdd(
            v6666,
            stdlib.checkedBigNumberify(
              './index.rsh:121:45:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(
            sim_r,
            2,
            stdlib.digest([ctc13], [v6664]),
            v6668,
          )
          await stdlib.simMapSet(
            sim_r,
            3,
            stdlib.digest([ctc10], [v6478]),
            true,
          )
          const v6670 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v4763),
            null,
          )
          const v6671 = stdlib.fromSome(
            v6670,
            stdlib.checkedBigNumberify(
              './index.rsh:124:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6672 = stdlib.safeAdd(
            v6671,
            stdlib.checkedBigNumberify(
              './index.rsh:124:59:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(sim_r, 4, v4763, v6672)
          const v6673 = stdlib.safeAdd(
            v6662,
            stdlib.checkedBigNumberify(
              './index.rsh:127:31:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v6674 = {
            art: v6658,
            audio: v6659,
            creator: v6660,
            id: v6661,
            votes: v6673,
          }
          await stdlib.simMapSet(sim_r, 1, v6466, v6674)
          null
          const v6676 = null
          const v6677 = await txn1.getOutput('vote', 'v6676', ctc0, v6676)

          const v6683 = stdlib.safeAdd(
            v4762,
            stdlib.checkedBigNumberify(
              './index.rsh:224:30:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v6684 = stdlib.safeAdd(
            v4761,
            stdlib.checkedBigNumberify(
              './index.rsh:225:26:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v12650 = v4757
          const v12651 = v4758
          const v12652 = v4759
          const v12653 = v4760
          const v12654 = v6684
          const v12655 = v6683
          const v12656 = v4763
          const v12658 = v5100
          const v12659 = v4771
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
    data: [v5098],
    secs: v5100,
    time: v5099,
    didSend: v4161,
    from: v5097,
  } = txn1
  switch (v5098[0]) {
    case 'addSong0_655': {
      const v5101 = v5098[1]
      return
      break
    }
    case 'buyMembership0_655': {
      const v5418 = v5098[1]
      return
      break
    }
    case 'endVotingPeriod0_655': {
      const v5735 = v5098[1]
      return
      break
    }
    case 'receivePayout0_655': {
      const v6052 = v5098[1]
      return
      break
    }
    case 'vote0_655': {
      const v6369 = v5098[1]
      undefined /* setApiDetails */
      const v6466 =
        v6369[
          stdlib.checkedBigNumberify(
            './index.rsh:206:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6467 = stdlib.addressEq(v5097, v4746)
      const v6468 = v6467 ? false : true
      stdlib.assert(v6468, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'vote',
      })
      const v6470 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5097),
        null,
      )
      const v6471 = {
        None: 0,
        Some: 1,
      }[v6470[0]]
      const v6472 = stdlib.eq(
        v6471,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6472, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:208:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
          'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'is member',
        who: 'vote',
      })
      const v6474 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v6466),
        null,
      )
      const v6475 = {
        None: 0,
        Some: 1,
      }[v6474[0]]
      const v6476 = stdlib.eq(
        v6475,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6476, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:209:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'vote',
      })
      const v6478 = [v4763, v6466, v5097]
      const v6479 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, stdlib.digest([ctc10], [v6478])),
        null,
      )
      const v6480 = {
        None: 0,
        Some: 1,
      }[v6479[0]]
      const v6481 = stdlib.eq(
        v6480,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v6481, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:210:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:206:26:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:206:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'has voted',
        who: 'vote',
      })
      const v6651 = stdlib.fromSome(
        v6470,
        stdlib.checkedBigNumberify(
          './index.rsh:97:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6652 = stdlib.gt(v6651, v5100)
      stdlib.assert(v6652, {
        at: './index.rsh:98:16:application',
        fs: [
          'at ./index.rsh:214:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
          'at ./index.rsh:213:16:application call to [unknown function] (defined at: ./index.rsh:213:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'vote',
      })
      const v6654 = '                                '
      const v6656 = {
        art: v6654,
        audio: v6654,
        creator: v4746,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v6657 = stdlib.fromSome(v6474, v6656)
      const v6658 = v6657.art
      const v6659 = v6657.audio
      const v6660 = v6657.creator
      const v6661 = v6657.id
      const v6662 = v6657.votes
      const v6664 = [v4763, v6466]
      const v6665 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, stdlib.digest([ctc13], [v6664])),
        null,
      )
      const v6666 = stdlib.fromSome(
        v6665,
        stdlib.checkedBigNumberify(
          './index.rsh:120:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6668 = stdlib.safeAdd(
        v6666,
        stdlib.checkedBigNumberify(
          './index.rsh:121:45:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map2, stdlib.digest([ctc13], [v6664]), v6668)
      await stdlib.mapSet(map3, stdlib.digest([ctc10], [v6478]), true)
      const v6670 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v4763),
        null,
      )
      const v6671 = stdlib.fromSome(
        v6670,
        stdlib.checkedBigNumberify(
          './index.rsh:124:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6672 = stdlib.safeAdd(
        v6671,
        stdlib.checkedBigNumberify(
          './index.rsh:124:59:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map4, v4763, v6672)
      const v6673 = stdlib.safeAdd(
        v6662,
        stdlib.checkedBigNumberify(
          './index.rsh:127:31:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v6674 = {
        art: v6658,
        audio: v6659,
        creator: v6660,
        id: v6661,
        votes: v6673,
      }
      await stdlib.mapSet(map1, v6466, v6674)
      null
      const v6676 = null
      const v6677 = await txn1.getOutput('vote', 'v6676', ctc0, v6676)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v6369, v6677), {
          at: './index.rsh:206:11:application',
          fs: [
            'at ./index.rsh:206:11:application call to [unknown function] (defined at: ./index.rsh:206:11:function exp)',
            'at ./index.rsh:217:17:application call to "notify" (defined at: ./index.rsh:213:16:function exp)',
            'at ./index.rsh:213:16:application call to [unknown function] (defined at: ./index.rsh:213:16:function exp)',
          ],
          msg: 'out',
          who: 'vote',
        })
      } else {
      }

      const v6683 = stdlib.safeAdd(
        v4762,
        stdlib.checkedBigNumberify(
          './index.rsh:224:30:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v6684 = stdlib.safeAdd(
        v4761,
        stdlib.checkedBigNumberify(
          './index.rsh:225:26:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v12650 = v4757
      const v12651 = v4758
      const v12652 = v4759
      const v12653 = v4760
      const v12654 = v6684
      const v12655 = v6683
      const v12656 = v4763
      const v12658 = v5100
      const v12659 = v4771
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"v12708","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_655","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_655","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_655","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_655","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_655","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5238","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5571","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5919","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v6139","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6676","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"endedVotingPeriod","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"membershipPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v3","type":"uint256"}],"name":"payoutReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"songAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"voted","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_5Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_6Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v12710","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_655","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_655","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_655","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_655","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_655","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v12722","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"v12682","type":"bytes32"},{"internalType":"bytes32","name":"v12683","type":"bytes32"}],"name":"addSong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endVotingPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentVotingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembershipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12666","type":"address"}],"name":"getMembershipExp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12671","type":"uint256"}],"name":"getSong","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12674","type":"uint256"},{"internalType":"uint256","name":"v12675","type":"uint256"}],"name":"getSongPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12678","type":"uint256"},{"internalType":"address payable","name":"v12679","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12696","type":"uint256"},{"internalType":"uint256","name":"v12697","type":"uint256"}],"name":"receivePayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12702","type":"uint256"}],"name":"vote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200409a60806001600160401b03601f1938849003601f81018216840190848210848311176200037757808591604097889485528339810103126200038d578351926200004c8462000392565b8051845260208091015190808501918252436003558551906101c082018281108682111762000377578752600091828152828282015282888201528260608201528260808201528260a08201528260c08201528260e082015282610100820152875160a08101818110888211176200036357916101a09185938b528381528385820152838b820152836060820152836080820152610120820152826101408201528261016082015282610180820152015260049560ff8754166200034c577f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f6060895133815283518582015286518b820152a15180159081156200033f575b50156200032857346200031157865192620001668462000392565b81840193838552339052518352600195868355438755875193338386015251888501528784526060840184811087821117620002fe5788528351958611620002eb57600254908782811c92168015620002e0575b83831014620002cd5750601f811162000281575b508093601f861160011462000219575050918394918493946200020d575b50501b916000199060031b1c1916176002555b51613ceb9081620003af8239f35b015192503880620001ec565b600283528183209493928692918316915b888383106200026657505050106200024c575b505050811b01600255620001ff565b015160001960f88460031b161c191690553880806200023d565b8587015188559096019594850194879350908101906200022a565b60028352818320601f870160051c810191838810620002c2575b601f0160051c019087905b828110620002b6575050620001ce565b848155018790620002a6565b90915081906200029b565b634e487b7160e01b845260229052602483fd5b91607f1691620001ba565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b865163100960cb60e01b8152601481880152602490fd5b865163100960cb60e01b8152601381880152602490fd5b905060015414386200014b565b875163100960cb60e01b8152601281890152602490fd5b634e487b7160e01b85526041600452602485fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b03821117620003775760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c80630121b93f1461114b5780630be3c76b146110b65780630ca52f77146110325780631248dfcf14610f445780631ca8b66d14610f1c5780631e93b0f114610efe57806336e56ea514610ec557806342acaa6614610d815780634385963214610c42578063544774a914610bec578063573b8510146107b65780635c5811191461076f5780636f9fb98a1461071157806383230757146106f35780638b75d81714610698578063a4d0d3911461049d578063ab53f2c614610429578063ad76d8b4146103f5578063ae40bc79146103a6578063bda4463b1461037e578063d61ba28214610312578063d650b241146101ed578063da70a525146101c5578063e80a57a51461016d5763ec192d610361000e57346101685760203660031901126101685761014961141e565b50610164610158600435611686565b60405191829182611211565b0390f35b600080fd5b60003660031901126101685760206060610185611761565b6101b981610191613ca2565b85810190600282515251151585825101526101aa613ca2565b906000825251868201526119b1565b01511515604051908152f35b34610168576020366003190112610168576101de61141e565b506101646101586004356115ca565b61012036600319011261016857610202611761565b6040519061020f826112ac565b6004358252610100366023190112610168576040519060c082016001600160401b038111838210176102fc57604052602435600581101561016857825260403660431901126101685760405192610265846112ac565b60443584526020936064358582015284840152608435801515810361016857604084015260a435801515810361016857606084015260403660c3190112610168576040516102b2816112ac565b60c435815260e4358582015260808401528361010319360112610168576102f3926040516102df816112c7565b61010435815260a0820152848201526119b1565b60405160008152f35b634e487b7160e01b600052604160045260246000fd5b346101685760003660031901126101685761032b611761565b600460005403610365576101006020916040610356610348611373565b8580825183010191016118b6565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b346101685760203660031901126101685761039761141e565b506101646101586004356116cf565b34610168576000366003190112610168576103bf611761565b6004600054036103dc5760a0602091610100610356610348611373565b60405163100960cb60e01b815260086004820152602490fd5b346101685760203660031901126101685761040e61141e565b5061016461041d600435611613565b604051918291826111e4565b3461016857600036600319011261016857600054610445611373565b6040519182528160206040818301528251908160408401526000935b828510610484575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610461565b34610168576104ab366111ae565b906104b4611761565b604051916104c1836112ac565b6020938484019184528152604051906104d9826112ac565b6104e161141e565b8252848201936040516104f3816112ac565b60008152600087820152855260046000540361067f57610522610514611373565b8780825183010191016118b6565b50600161052f83516116cf565b8085525161053c816111c4565b610545816111c4565b03610666576101409461063d93610604928451835152518883510152600181515161056f816111c4565b610578816111c4565b0361065d575160400151905b80519060016105ba604051938461059e8d8201928361197b565b03946105b2601f1996878101835282611350565b5190206115ca565b516105c4816111c4565b6105cd816111c4565b03610653576040916105f06105b26105fc9351928c86519384918201958661197b565b03908101835282611350565b015190613bee565b9060016106118251611686565b5161061b816111c4565b610624816111c4565b0361064a5761063560409151611686565b015190611991565b9182910152604051908152f35b50600090611991565b5050600090613bee565b50600090610584565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b34610168576000366003190112610168576106b1611761565b6004600054036106da5760c0602091826103566106cc611373565b8280825183010191016118b6565b60405163100960cb60e01b815260096004820152602490fd5b34610168576000366003190112610168576020600154604051908152f35b346101685760003660031901126101685761072a611761565b60046000540361075657608060209161063d610747610348611373565b606084820151910151906118a2565b60405163100960cb60e01b815260076004820152602490fd5b60003660031901126101685760206040610787611761565b6107ac81610793613ca2565b85810190600182515251151585825101526101aa613ca2565b0151604051908152f35b6020366003190112610168576107ca611761565b506040516107d7816112c7565b600435815260ff60045416610bd3577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040805133815283516020820152a1600160005403610bba57610828611373565b90604082805181010312610168576040805192610844846112ac565b610850602082016117e1565b845201519060208301918252518015908115610bae575b5015610b955734610b7c578151336001600160a01b0390911603610b635761088d6117f5565b91516001600160a01b031682525160208201526108a942611860565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526001610100820152436101208201524261014082015260006101608201526101406040516108fe816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e08101516101008401526101008101516101208401526101208101518284015201516101608201526101608152610a4181611334565b80516001600160401b0381116102fc57610a5c600254611272565b601f8111610b10575b50602091601f8211600114610aab57918192600092610aa0575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610a7f565b601f19821692600260005260206000209160005b858110610af857508360019510610adf575b505050811b01600255610a95565b015160001960f88460031b161c19169055828080610ad1565b91926020600181928685015181550194019201610abf565b6002600052600080516020613cbf833981519152601f830160051c81019160208410610b59575b601f0160051c01905b818110610b4d5750610a65565b60008155600101610b40565b9091508190610b37565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b90506001541483610867565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b3461016857602036600319011261016857610c056114eb565b5060e0610c13600435611513565b610c4060408051928051610c26816111c4565b84526020810151151560208501520151604083019061123c565bf35b34610168576040366003190112610168576001600160a01b036024358181169081900361016857610c71611761565b60405191610c7e836112ac565b602093848401916004358552825260405191610c99836112c7565b610ca161141e565b8352600460005403610d685761016094610100610ccd610cbf611373565b8980825183010191016118b6565b015184515251868451015251166040825101528051906001610d166040519384610cfa8982019283611951565b0394610d0e601f1996878101835282611350565b519020611613565b51610d20816111c4565b610d29816111c4565b03610d5f57604091610d4b915190610d0e845191826105f08a82019586611951565b015115155b15159182910152604051908152f35b50506000610d50565b60405163100960cb60e01b815260116004820152602490fd5b3461016857602036600319011261016857610d9a6114c0565b50610da3611761565b604051610daf816112e2565b610db76114eb565b815260208101916000835260408201610dce6114c0565b8152600460005403610eac57610df4610de5611373565b602080825183010191016118b6565b926001610e02600435611513565b80835251610e0f816111c4565b610e18816111c4565b03610e93578461012094600060a097526000845152600180881b0390511660208451015280516040845101525160608351015260006080835101526001815151610e61816111c4565b610e6a816111c4565b03610e8957604091505101519182915b0152610c40604051809261123c565b5051918291610e7a565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b34610168576020366003190112610168576004356001600160a01b03811681036101685761015861016491610ef861141e565b5061143d565b34610168576000366003190112610168576020600354604051908152f35b3461016857602036600319011261016857610f3561141e565b5061016461041d600435611718565b34610168576020366003190112610168576004356001600160a01b0381169081900361016857610f72611761565b9060405190610f80826112c7565b610f8861141e565b825260046000540361101957610fa5600191610ef8610de5611373565b80835251610fb2816111c4565b610fbb816111c4565b036110005760209181600160e0935151610fd4816111c4565b610fdd816111c4565b03610ff55751604001519182915b0152604051908152f35b506000918291610feb565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b61018061103e366111ae565b91906107ac61104b611761565b80926040519061105a826112ac565b602096878301918352815260405190611072826112ac565b60405161107e816112ac565b60008152600089820152825287820192611096613c2d565b8452518251525187825101526003825152516080825101526101aa613ca2565b6040366003190112610168576110ca611761565b6040516110d6816112ac565b816107ac602093838580950160043582526024358152604051906110f9826112ac565b604051611105816112ac565b6000815260008882015282528682019261111d613c2d565b845251825152518682510152600082515251858251015261113c613ca2565b906000825251858201526119b1565b60203660031901126101685760206101a0611164611761565b6101b981604051611174816112ac565b604051611180816112c7565b60008152815285810190611192613c2d565b825260043581515260048251525160a0825101526101aa613ca2565b6040906003190112610168576004359060243590565b600211156111ce57565b634e487b7160e01b600052602160045260246000fd5b919091604080606083019480516111fa816111c4565b845260208101511515602085015201511515910152565b91909160408060608301948051611227816111c4565b84526020810151151560208501520151910152565b805182526020808201516001600160a01b0316908301526040808201519083015260608082015190830152608090810151910152565b90600182811c921680156112a2575b602083101461128c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611281565b604081019081106001600160401b038211176102fc57604052565b602081019081106001600160401b038211176102fc57604052565b606081019081106001600160401b038211176102fc57604052565b61016081019081106001600160401b038211176102fc57604052565b60a081019081106001600160401b038211176102fc57604052565b61018081019081106001600160401b038211176102fc57604052565b601f909101601f19168101906001600160401b038211908210176102fc57604052565b604051906000826002549161138783611272565b8083526001938085169081156113fd57506001146113af575b506113ad92500383611350565b565b60026000908152600080516020613cbf83398151915294602093509091905b8183106113e55750506113ad9350820101386113a0565b855488840185015294850194879450918301916113ce565b90506113ad94506020925060ff191682840152151560051b820101386113a0565b6040519061142b826112e2565b60006040838281528260208201520152565b9061144661141e565b9160018060a01b03166000908082526005602052600160ff60408420541661146d816111c4565b036114b5576040929350815260056020522060016040519161148e836112e2565b60ff815481811661149e816111c4565b855260081c16151560208401520154604082015290565b508083526020830152565b604051906114cd82611319565b60006080838281528260208201528260408201528260608201520152565b604051906114f8826112e2565b816000815260006020820152604061150e6114c0565b910152565b9061151c6114eb565b9160008181526006602052604091600160ff848420541661153c816111c4565b036115be57829394508152600660205220815191611559836112e2565b60ff8254818116611569816111c4565b855260081c1615156020840152600581519261158484611319565b6001810154845260028101546001600160a01b03166020850152600381015483850152600481015460608501520154608083015282015290565b50808452602084015250565b906115d361141e565b916000908082526007602052600160ff6040842054166115f2816111c4565b036114b5576040929350815260076020522060016040519161148e836112e2565b9061161c61141e565b916000908082526008602052600160ff60408420541661163b816111c4565b036114b5576040929350815260086020522060ff6040519161165c836112e2565b54818116611669816111c4565b8352818160081c161515602084015260101c161515604082015290565b9061168f61141e565b916000908082526009602052600160ff6040842054166116ae816111c4565b036114b5576040929350815260096020522060016040519161148e836112e2565b906116d861141e565b91600090808252600a602052600160ff6040842054166116f7816111c4565b036114b55760409293508152600a6020522060016040519161148e836112e2565b9061172161141e565b91600090808252600b602052600160ff604084205416611740816111c4565b036114b55760409293508152600b6020522060ff6040519161165c836112e2565b604051906101c082016001600160401b038111838210176102fc57604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526117c26114c0565b6101208201528261014082015282610160820152826101808201520152565b51906001600160a01b038216820361016857565b6040519061018082016001600160401b038111838210176102fc57604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b9062278d0082019182811161187757821061016857565b634e487b7160e01b600052601160045260246000fd5b90600182019182811161187757821061016857565b919082019182811161187757821061016857565b908161016091031261016857604051906118cf826112fd565b6118d8816117e1565b82526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151908301526101208082015190830152610140809101519082015290565b5160058110156111ce5790565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b9190916020806040830194805184520151910152565b811561199b570490565b634e487b7160e01b600052601260045260246000fd5b6040519092919061032081016001600160401b038111828210176102fc57806040526119dc816112ac565b60008152600061034083015281526119f261141e565b60208201526119ff6114c0565b60408201526000606082015260006080820152611a1a61141e565b60a0820152600060c0820152604051611a32816112ac565b600081526000602082015260e0820152611a4a6114eb565b6101008201526000610120820152611a606114c0565b610140820152611a6e61141e565b610160820152611a7c61141e565b61018082015260006101a0820152604051611a96816112ac565b60008152600060208201526101c082015260006101e0820152604051611abb816112c7565b60008152610200820152611acd61141e565b610220820152611adb6114eb565b610240820152611ae961141e565b6102608201526000610280820152611aff6114c0565b6102a0820152611b0d6114c0565b6102c0820152604051611b1f816112ac565b60008152600060208201526102e0820152611b386114c0565b61030082015260ff60045416613bc85760405133815284516020820152602085015180519160058310156111ce5760a0610140927f5a05a7d5188bfb3a2ffa3c8addfc939b40a803afde86b8d9b53402567bcc1182946040840152602080820151805160608601520151608084015260408101511515828401526060810151151560c084015260206080820151805160e08601520151610100840152015151610120820152a1600460005403613baf576040516000600254611bf981611272565b8084529060018116908115613b8b5750600114613b3e575b5090610de581611c22930382611350565b9380518015908115613b32575b5015613b1957611c426020820151611944565b60058110156111ce5761211c57602090810151015181528351336001600160a01b03909116036121155760005b156120fc576001611c7f3361143d565b80602084015251611c8f816111c4565b611c98816111c4565b036120e357346120ca576001602082015151611cb3816111c4565b611cbc816111c4565b036120c3576040602082015101515b4210156120aa576040904282820151523360208383015101528051518280830151015260208151015160608383015101526000608083830151015242600052600660205281600020600160ff19825416179055015160056080604060002092805160018501556002840160018060a01b0360208301511660018060a01b0319825416179055604081015160038501556060810151600485015501519101557fc50146df3744254d2c4df384a8513863cda206482d8bf1740acc2caeb38c3e776020604051428152a17ff46e05e09464f65bfc8d4ffa0c875e9ed178843b6202aaaf02cf5818fc435ec46020604051428152a1602042910152610140611dce6117f5565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501526101008101516101008501524361012085015242828501520151610160830152610140604051611e50816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252611f9382611334565b81516001600160401b0381116102fc57611fae600254611272565b601f8111612057575b50602092601f8211600114611ff45792819293600092611fe9575b50508160011b916000199060031b1c191617600255565b015190503880611fd2565b601f19821693600260005260206000209160005b86811061203f5750836001959610612026575b505050811b01600255565b015160001960f88460031b161c1916905538808061201b565b91926020600181928685015181550194019201612008565b6002600052600080516020613cbf833981519152601f830160051c810191602084106120a0575b601f0160051c01905b8181106120945750611fb7565b60008155600101612087565b909150819061207e565b60405163100960cb60e01b815260206004820152602490fd5b6000611ccb565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b6001611c6f565b6121296020820151611944565b60058110156111ce5760010361259757508351336001600160a01b03909116036125905760005b156125775760016121603361143d565b5161216a816111c4565b612173816111c4565b036125705760406121833361143d565b01515b8060608301526101208501511115612557576020840151340361253e576121ac42611860565b6080820152426060820151101561252757608060409133600052600560205282600020600160ff198254161790557ff01b311f9779b91a7fa2ba5c8138c46f4ae1acfc247c95553fa57767e0667ac783838301518060018360002001558151903382526020820152a17fc7af94a600e017f346e074dc5738784aa925d049bea96a1c09e21891b0ad95fb6020838301518551908152a1015191015261224f6117f5565b9160018060a01b03815116835260208101516020840152604081015160408401526060810151606084015261228d60808201516020830151906118a2565b608084015261229f60a082015161188d565b60a084015260c081015160c084015260e081015160e084015261010081015161010084015243610120840152426101408401526020610140820151910151016101608301526101406040516122f3816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261243682611334565b81516001600160401b0381116102fc57612451600254611272565b601f81116124d4575b50602092601f821160011461248b5792819293600092611fe95750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106124bc575083600195961061202657505050811b01600255565b9192602060018192868501518155019401920161249f565b6002600052600080516020613cbf833981519152601f830160051c8101916020841061251d575b601f0160051c01905b818110612511575061245a565b60008155600101612504565b90915081906124fb565b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b6000612186565b60405163100960cb60e01b815260216004820152602490fd5b6001612150565b6125a76020829693960151611944565b60058110156111ce57600203612a8a57508051336001600160a01b0390911603612a835760005b15612a6a5760016125de3361143d565b8060a0870152516125ee816111c4565b6125f7816111c4565b03612a515734612a385761261360808201516003810490613be1565b60c0850152600160a085015151612629816111c4565b612632816111c4565b03612a3157604060a085015101515b421015612a185760006060610140936101008401518352600a60205260408320600160ff19825416179055600161267c6101008601516116cf565b51612686816111c4565b61268f816111c4565b148314612a0f576126b760406126a96101008701516116cf565b01515b60c0890151906118a2565b6101008501518452600a60205260016040852001557f22393b527bdbf9b348ee4129f2a13cd63b7a78bf3bc7786a69eb3e3b74b799c26020610100860151604051908152a17fc8e5a84e1dd3d4e5f52e8e3fb5bc4f6bbacaabee8c473277b6f3ab6873d344466020604051858152a101526127846127336117f5565b9460018060a01b038351168652602083015160208701526127576040840151611860565b604087015261276f606084015160c0830151906118a2565b606087015260c0608084015191015190613be1565b608085015260a081015160a085015260c081015160c0850152600060e08501526127b261010082015161188d565b61010085015243610120850152428285015201516101608301526101406040516127db816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261291e82611334565b81516001600160401b0381116102fc57612939600254611272565b601f81116129bc575b50602092601f82116001146129735792819293600092611fe95750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106129a4575083600195961061202657505050811b01600255565b91926020600181928685015181550194019201612987565b6002600052600080516020613cbf833981519152601f830160051c81019160208410612a05575b601f0160051c01905b8181106129f95750612942565b600081556001016129ec565b90915081906129e3565b6126b7836126ac565b60405163100960cb60e01b815260286004820152602490fd5b6000612641565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b60016125ce565b612a9b602082969493960151611944565b60058110156111ce576003036132855760806020612ac392015101518060e085015251611513565b61010083019081526000610120840181815261014085018051839052875181516001600160a01b039091166020909101528151815160400152905181516060015251608001525151600190612b17816111c4565b612b20816111c4565b0361327a57604061010083015101515b602001516001600160a01b03163303613261576001612b4e3361143d565b51612b58816111c4565b612b61816111c4565b0361324857600161010083015151612b78816111c4565b612b81816111c4565b0361322f57602060e083015101516101608301515260e082015151602061016084015101523360406101608401510152612be9612bcf612bdd61016085015160405192839160208301611951565b03601f198101835282611350565b60208151910120611718565b51612bf3816111c4565b612bfc816111c4565b613216576001612c13602060e085015101516116cf565b8061018085015251612c24816111c4565b612c2d816111c4565b0361320f57604061018083015101515b6101a0830152600161018083015151612c55816111c4565b612c5e816111c4565b036131f657602060e083015101516101c08301515260e08201515160206101c08401510152612d24612ce66101a08401516001612caf6101c08701516040516105b281612bcf60208201948561197b565b51612cb9816111c4565b612cc2816111c4565b036131ee5760406105fc6101c087015182516105b281612bcf60208201948561197b565b6001612cf9602060e08701510151611686565b51612d03816111c4565b612d0c816111c4565b036131e6576040610635602060e08701510151611686565b806101e08401526101a0830151106131cd576101408401516101e0830151116131b4573461319b5760008080806101e0860151818115613192575b3390f11561318657610160820151604051612d8281612bcf602082019485611951565b519020600052600b602052604060002060ff1990600182825416179055610160830151604051612dba81612bcf602082019485611951565b519020600052600b60205260406000206201000062ff000019825416179055602060e08401510151600052600a6020526001604060002091825416179055612e0d6101a08301516101e084015190613be1565b602060e08401510151600052600a6020526001604060002001557f6aa35f8fbfa97661b0ad449ba66aca95b0a4eebb14e52af30f0f3574a4c79153608060e0840151602081519101516101e08601519060405192338452602084015260408301526060820152a17f8904dfe7a8f05075e3c1736a86fcff557d1ff724bf36164249b646eb58810c6360206101e0840151604051908152a16101806101e08301519101526101e0610140612ebe6117f5565b9460018060a01b0381511686526020810151602087015260408101516040870152612ef160608201518486015190613be1565b60608701526080810151608087015260a081015160a087015260c081015160c087015260e081015160e087015261010081015161010087015243610120870152428287015201519101519003610160830152610140604051612f52816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261309582611334565b81516001600160401b0381116102fc576130b0600254611272565b601f8111613133575b50602092601f82116001146130ea5792819293600092611fe95750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061311b575083600195961061202657505050811b01600255565b919260206001819286850151815501940192016130fe565b6002600052600080516020613cbf833981519152601f830160051c8101916020841061317c575b601f0160051c01905b81811061317057506130b9565b60008155600101613163565b909150819061315a565b6040513d6000823e3d90fd5b506108fc612d5f565b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b600090611991565b600090613bee565b60405163100960cb60e01b8152602d6004820152602490fd5b6000612c3d565b60405163100960cb60e01b8152602c6004820152602490fd5b60405163100960cb60e01b8152602b6004820152602490fd5b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b610140820151612b30565b6132956020829493940151611944565b60058110156111ce576004146132ad575b5050509050565b6020015160a001516102008201528351336001600160a01b0390911603613b125760005b15613af95760016132e13361143d565b80610220840152516132f2816111c4565b6132fb816111c4565b03613ae057600161331161020083015151611513565b8061024084015251613322816111c4565b61332b816111c4565b03613ac7576101008401516102608201515261020081015151602061026083015101523360406102608301510152613383612bcf61337761026084015160405192839160208301611951565b60208151910120611613565b5161338d816111c4565b613396816111c4565b613aae5734613a95576001610220820151516133b1816111c4565b6133ba816111c4565b03613a8e57604061022082015101515b421015613a75576000917fb091fe3ff5bcc354914ab49469d6febeeec7ad0134e4f94bb8c834da0c391c9f606061020084866102806101a0970152866102a08201515260018060a01b0389511660206102a0830151015261028081015160406102a08301510152610280810151836102a083015101528660806102a0830151015260016102408201515161345d816111c4565b613466816111c4565b148714613a6a57604061024082015101515b6102c08201526101008901516102e082015152818101515160206102e083015101526102e08101516040516134b581612bcf60208201948561197b565b519020875260076020526040872060ff199060018282541617905560016134f06102e08401516040516105b281612bcf60208201948561197b565b516134fa816111c4565b613503816111c4565b148814613a6157613533604061352c6102e085015182516105b281612bcf60208201948561197b565b015161188d565b6102e083015160405161354e81612bcf60208201948561197b565b51902089526007602052600160408a20015561026082015160405161357b81612bcf602082019485611951565b51902088526008602052604088206001828254161790556102608201516040516135ad81612bcf602082019485611951565b51902088526008602052604088206201000062ff0000198254161790556101008a0151885260096020526040882060018282541617905560016135f46101008c0151611686565b516135fe816111c4565b613607816111c4565b148814613a5857613621604061352c6101008d0151611686565b6101008b015189526009602052600160408a2001556102c0820151516103008301515260018060a01b0360206102c08401510151166020610300840151015260406102c0830151015160406103008401510152836102c0830151015184610300840151015261369860806102c0840151015161188d565b6080610300840151015282820151518852600660205260016040892091825416179055610300810151828201515188526005608060408a2092805160018501556002840160018060a01b0360208301511660018060a01b03198254161790556040810151600385015586810151600485015501519101550151516101008801516040519133835260208301526040820152a17fb5949d3a619508f481afef840332945b58e0d228f07f118793eb38a50857e1866020604051858152a101526101406137616117f5565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a08501526137ad60c082015161188d565b60c08501526137bf60e082015161188d565b60e085015261010081015161010085015243610120850152428285015201516101608301526101406040516137f3816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261393682611334565b81516001600160401b0381116102fc57613951600254611272565b601f8111613a05575b50602092601f821160011461399f5792819293600092613994575b50508160011b916000199060031b1c1916176002555b803880806132a6565b015190503880613975565b601f19821693600260005260206000209160005b8681106139ed57508360019596106139d4575b505050811b0160025561398b565b015160001960f88460031b161c191690553880806139c6565b919260206001819286850151815501940192016139b3565b6002600052600080516020613cbf833981519152601f830160051c81019160208410613a4e575b601f0160051c01905b818110613a42575061395a565b60008155600101613a35565b9091508190613a2c565b6136218861188d565b6135338861188d565b6102a0810151613478565b60405163100960cb60e01b815260366004820152602490fd5b60006133ca565b60405163100960cb60e01b815260356004820152602490fd5b60405163100960cb60e01b815260346004820152602490fd5b60405163100960cb60e01b815260336004820152602490fd5b60405163100960cb60e01b815260326004820152602490fd5b60405163100960cb60e01b815260316004820152602490fd5b60016132d1565b60405163100960cb60e01b8152601c6004820152602490fd5b90506001541438611c2f565b60026000908152600080516020613cbf833981519152939250905b808210613b7157509091508101602001610de5611c11565b919260018160209254838588010152019101909291613b59565b60ff191660208086019190915291151560051b84019091019150610de59050611c11565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b9081039081116118775790565b600092918015918215613c05575b50501561016857565b91509250806000190483118115151661187757613c258382029384611991565b143880613bfc565b60408051919060c083016001600160401b038111848210176102fc57815260a0836000928382528051613c5f816112ac565b848152846020820152602083015283818301528360608301528051613c83816112ac565b84815284602082015260808301525192613c9c846112c7565b83520152565b60405190613caf826112ac565b8160008152602061150e613c2d56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 16538,
  version: 9,
  views: {},
}
export const _stateSourceMap = {
  1: {
    at: './index.rsh:77:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:290:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:91:21:after expr stmt semicolon',
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
