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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async () => {
        const v4023 = stdlib.safeAdd(v3970, v3969)

        return v4023
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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async () => {
        return v3974
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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async () => {
        return v3957
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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async (_v4024) => {
        const v4024 = stdlib.protect(ctc0, _v4024, null)

        const v4025 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v4024),
          null,
        )
        const v4026 = {
          None: 0,
          Some: 1,
        }[v4025[0]]
        const v4027 = stdlib.eq(
          v4026,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4027, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:143:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:142:29:application call to [unknown function] (defined at: ./index.rsh:142:29:application)',
          ],
          msg: 'is member',
          who: 'Module',
        })
        const v4030 = stdlib.fromSome(
          v4025,
          stdlib.checkedBigNumberify(
            './index.rsh:144:43:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v4030
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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async () => {
        return v3968
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getPeriodPayouts = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async (_v4020) => {
        const v4020 = stdlib.protect(ctc1, _v4020, null)

        const v4021 = stdlib.protect(
          map5_ctc,
          await viewlib.viewMapRef(5, v4020),
          null,
        )
        const v4022 = stdlib.fromSome(
          v4021,
          stdlib.checkedBigNumberify(
            './index.rsh:137:68:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v4022
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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async (_v4010) => {
        const v4010 = stdlib.protect(ctc1, _v4010, null)

        const v4011 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, v4010),
          null,
        )
        const v4012 = {
          None: 0,
          Some: 1,
        }[v4011[0]]
        const v4013 = stdlib.eq(
          v4012,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4013, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:134:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:133:20:application call to [unknown function] (defined at: ./index.rsh:133:20:application)',
          ],
          msg: 'song exists',
          who: 'Module',
        })
        const v4016 = '                                '
        const v4018 = {
          art: v4016,
          audio: v4016,
          creator: v3956,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v4019 = stdlib.fromSome(v4011, v4018)

        return v4019
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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async (_v4031, _v4032) => {
        const v4031 = stdlib.protect(ctc1, _v4031, null)
        const v4032 = stdlib.protect(ctc1, _v4032, null)

        const v4033 = stdlib.protect(
          map5_ctc,
          await viewlib.viewMapRef(5, v4032),
          null,
        )
        const v4034 = stdlib.fromSome(
          v4033,
          stdlib.checkedBigNumberify(
            './index.rsh:106:63:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4035 = stdlib.protect(
          map4_ctc,
          await viewlib.viewMapRef(4, v4032),
          null,
        )
        const v4036 = stdlib.fromSome(
          v4035,
          stdlib.checkedBigNumberify(
            './index.rsh:109:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4037 = stdlib.eq(
          v4036,
          stdlib.checkedBigNumberify(
            './index.rsh:111:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v4038
        if (v4037) {
          v4038 = stdlib.checkedBigNumberify(
            './index.rsh:112:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v4039 = [v4032, v4031]
          const v4040 = stdlib.protect(
            map2_ctc,
            await viewlib.viewMapRef(2, stdlib.digest([ctc4], [v4039])),
            null,
          )
          const v4041 = stdlib.fromSome(
            v4040,
            stdlib.checkedBigNumberify(
              './index.rsh:115:50:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v4042 = stdlib.safeMuldiv(v4034, v4041, v4036)
          v4038 = v4042
        }

        return v4038
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
      const [v3956, v3957, v3958] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3956,
        v3957,
        v3958,
        v3968,
        v3969,
        v3970,
        v3971,
        v3972,
        v3973,
        v3974,
        v3982,
      ] = svs
      return await (async (_v4043, _v4044) => {
        const v4043 = stdlib.protect(ctc1, _v4043, null)
        const v4044 = stdlib.protect(ctc0, _v4044, null)

        const v4045 = [v3974, v4043, v4044]
        const v4046 = stdlib.protect(
          map3_ctc,
          await viewlib.viewMapRef(3, stdlib.digest([ctc6], [v4045])),
          null,
        )
        const v4047 = stdlib.fromSome(v4046, false)

        return v4047
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
      getPeriodPayouts: {
        decode: _getPeriodPayouts,
        dom: [ctc1],
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
      1: [ctc0, ctc1, ctc1],
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
    addSong0_579: ctc9,
    buyMembership0_579: ctc10,
    endVotingPeriod0_579: ctc10,
    receivePayout0_579: ctc11,
    vote0_579: ctc12,
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

  const v3952 = stdlib.protect(
    ctc1,
    interact.membershipCost,
    "for Deployer's interact field membershipCost",
  )
  const v3953 = stdlib.protect(
    ctc1,
    interact.periodLength,
    "for Deployer's interact field periodLength",
  )

  const txn1 = await ctc.sendrecv({
    args: [v3952, v3953],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:55:5:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:55:5:decimal',
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
        data: [v3957, v3958],
        secs: v3960,
        time: v3959,
        didSend: v29,
        from: v3956,
      } = txn1

      sim_r.isHalt = false

      return sim_r
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1],
    waitIfNotPresent: false,
  })
  const {
    data: [v3957, v3958],
    secs: v3960,
    time: v3959,
    didSend: v29,
    from: v3956,
  } = txn1
  const txn2 = await ctc.sendrecv({
    args: [v3956, v3957, v3958],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3959,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:79:5:decimal',
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
        secs: v3963,
        time: v3962,
        didSend: v34,
        from: v3961,
      } = txn2

      const v3967 = stdlib.safeAdd(v3963, v3958)
      const v3968 = v3967
      const v3969 = stdlib.checkedBigNumberify(
        './index.rsh:92:29:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3970 = stdlib.checkedBigNumberify(
        './index.rsh:92:26:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3971 = stdlib.checkedBigNumberify(
        './index.rsh:92:23:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3972 = stdlib.checkedBigNumberify(
        './index.rsh:92:65:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3973 = stdlib.checkedBigNumberify(
        './index.rsh:92:62:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3974 = stdlib.checkedBigNumberify(
        './index.rsh:92:32:decimal',
        stdlib.UInt_max,
        '1',
      )
      const v3975 = v3962
      const v3982 = stdlib.checkedBigNumberify(
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
    tys: [ctc3, ctc1, ctc1],
    waitIfNotPresent: false,
  })
  const {
    data: [],
    secs: v3963,
    time: v3962,
    didSend: v34,
    from: v3961,
  } = txn2
  const v3964 = stdlib.addressEq(v3956, v3961)
  stdlib.assert(v3964, {
    at: './index.rsh:79:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer',
  })
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:80:19:application',
    fs: [
      'at ./index.rsh:80:19:application call to [unknown function] (defined at: ./index.rsh:80:19:function exp)',
      'at ./index.rsh:80:19:application call to "liftedInteract" (defined at: ./index.rsh:80:19:application)',
    ],
    msg: 'ready',
    who: 'Deployer',
  })

  const v3967 = stdlib.safeAdd(v3963, v3958)
  let v3968 = v3967
  let v3969 = stdlib.checkedBigNumberify(
    './index.rsh:92:29:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3970 = stdlib.checkedBigNumberify(
    './index.rsh:92:26:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3971 = stdlib.checkedBigNumberify(
    './index.rsh:92:23:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3972 = stdlib.checkedBigNumberify(
    './index.rsh:92:65:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3973 = stdlib.checkedBigNumberify(
    './index.rsh:92:62:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3974 = stdlib.checkedBigNumberify(
    './index.rsh:92:32:decimal',
    stdlib.UInt_max,
    '1',
  )
  let v3975 = v3962
  let v3982 = stdlib.checkedBigNumberify(
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
      data: [v4288],
      secs: v4290,
      time: v4289,
      didSend: v3455,
      from: v4287,
    } = txn4
    switch (v4288[0]) {
      case 'addSong0_579': {
        const v4291 = v4288[1]
        undefined /* setApiDetails */
        const v4298 = stdlib.addressEq(v4287, v3956)
        const v4299 = v4298 ? false : true
        stdlib.assert(v4299, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:185:35:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v4301 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4287),
          null,
        )
        const v4302 = {
          None: 0,
          Some: 1,
        }[v4301[0]]
        const v4303 = stdlib.eq(
          v4302,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4303, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:187:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
            'at ./index.rsh:185:35:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v4401 =
          v4291[
            stdlib.checkedBigNumberify(
              './index.rsh:185:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v4402 =
          v4291[
            stdlib.checkedBigNumberify(
              './index.rsh:185:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v4415 = stdlib.fromSome(
          v4301,
          stdlib.checkedBigNumberify(
            './index.rsh:98:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4416 = stdlib.le(v4290, v4415)
        stdlib.assert(v4416, {
          at: './index.rsh:99:16:application',
          fs: [
            'at ./index.rsh:191:28:application call to "enforceMembership" (defined at: ./index.rsh:96:37:function exp)',
            'at ./index.rsh:190:16:application call to [unknown function] (defined at: ./index.rsh:190:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v4417 = v4290
        const v4419 = {
          art: v4401,
          audio: v4402,
          creator: v4287,
          id: v4290,
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        await stdlib.mapSet(map1, v4290, v4419)
        null
        await txn4.getOutput('addSong', 'v4417', ctc1, v4417)
        const cv3968 = v3968
        const cv3969 = v3969
        const cv3970 = v3970
        const cv3971 = v3971
        const cv3972 = v3972
        const cv3973 = v3973
        const cv3974 = v3974
        const cv3975 = v4289
        const cv3982 = v3982

        v3968 = cv3968
        v3969 = cv3969
        v3970 = cv3970
        v3971 = cv3971
        v3972 = cv3972
        v3973 = cv3973
        v3974 = cv3974
        v3975 = cv3975
        v3982 = cv3982

        txn3 = txn4
        continue
        break
      }
      case 'buyMembership0_579': {
        const v4585 = v4288[1]
        undefined /* setApiDetails */
        const v4603 = stdlib.addressEq(v4287, v3956)
        const v4604 = v4603 ? false : true
        stdlib.assert(v4604, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:156:31:application call to [unknown function] (defined at: ./index.rsh:156:31:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:156:31:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v4693 = stdlib.add(v3982, v3957)
        const v4727 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4287),
          null,
        )
        switch (v4727[0]) {
          case 'None': {
            const v4728 = v4727[1]

            break
          }
          case 'Some': {
            const v4729 = v4727[1]
            const v4730 = stdlib.gt(v4290, v4729)
            stdlib.assert(v4730, {
              at: './index.rsh:167:22:application',
              fs: [
                'at ./index.rsh:162:16:application call to [unknown function] (defined at: ./index.rsh:162:16:function exp)',
              ],
              msg: 'membership expired',
              who: 'Deployer',
            })

            break
          }
        }
        const v4731 = stdlib.safeAdd(v4290, v3958)
        await stdlib.mapSet(map0, v4287, v4731)
        null
        await txn4.getOutput('buyMembership', 'v4731', ctc1, v4731)
        const v4737 = stdlib.safeAdd(
          v3971,
          stdlib.checkedBigNumberify(
            './index.rsh:174:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v4738 = stdlib.safeAdd(v3970, v3957)
        const cv3968 = v3968
        const cv3969 = v3969
        const cv3970 = v4738
        const cv3971 = v4737
        const cv3972 = v3972
        const cv3973 = v3973
        const cv3974 = v3974
        const cv3975 = v4289
        const cv3982 = v4693

        v3968 = cv3968
        v3969 = cv3969
        v3970 = cv3970
        v3971 = cv3971
        v3972 = cv3972
        v3973 = cv3973
        v3974 = cv3974
        v3975 = cv3975
        v3982 = cv3982

        txn3 = txn4
        continue
        break
      }
      case 'endVotingPeriod0_579': {
        const v4879 = v4288[1]
        undefined /* setApiDetails */
        const v5036 = stdlib.gt(v4290, v3968)
        const v5037 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v3974),
          null,
        )
        const v5038 = stdlib.fromSome(
          v5037,
          stdlib.checkedBigNumberify(
            './index.rsh:241:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5039 = stdlib.safeDiv(
          v3970,
          stdlib.checkedBigNumberify(
            './index.rsh:242:40:decimal',
            stdlib.UInt_max,
            '3',
          ),
        )
        const v5040 = stdlib.safeSub(v3970, v5039)
        stdlib.assert(v5036, {
          at: './index.rsh:247:18:application',
          fs: [
            'at ./index.rsh:246:16:application call to [unknown function] (defined at: ./index.rsh:246:16:function exp)',
          ],
          msg: 'voting period over',
          who: 'Deployer',
        })
        const v5041 = stdlib.safeAdd(v5038, v5040)
        await stdlib.mapSet(map5, v3974, v5041)
        null
        const v5042 = null
        await txn4.getOutput('endVotingPeriod', 'v5042', ctc0, v5042)
        const v5048 = stdlib.safeSub(v3970, v5040)
        const v5049 = stdlib.safeAdd(v3969, v5040)
        const v5050 = stdlib.safeAdd(
          v3974,
          stdlib.checkedBigNumberify(
            './index.rsh:255:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5051 = stdlib.safeAdd(v4290, v3958)
        const cv3968 = v5051
        const cv3969 = v5049
        const cv3970 = v5048
        const cv3971 = v3971
        const cv3972 = v3972
        const cv3973 = stdlib.checkedBigNumberify(
          './index.rsh:257:13:decimal',
          stdlib.UInt_max,
          '0',
        )
        const cv3974 = v5050
        const cv3975 = v4289
        const cv3982 = v3982

        v3968 = cv3968
        v3969 = cv3969
        v3970 = cv3970
        v3971 = cv3971
        v3972 = cv3972
        v3973 = cv3973
        v3974 = cv3974
        v3975 = cv3975
        v3982 = cv3982

        txn3 = txn4
        continue
        break
      }
      case 'receivePayout0_579': {
        const v5173 = v4288[1]
        undefined /* setApiDetails */
        const v5210 =
          v5173[
            stdlib.checkedBigNumberify(
              './index.rsh:263:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5211 =
          v5173[
            stdlib.checkedBigNumberify(
              './index.rsh:263:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v5212 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v5210),
          null,
        )
        const v5213 = '                                '
        const v5215 = {
          art: v5213,
          audio: v5213,
          creator: v3956,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v5216 = stdlib.fromSome(v5212, v5215)
        const v5219 = v5216.creator
        const v5223 = stdlib.addressEq(v4287, v5219)
        stdlib.assert(v5223, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'not song creator',
          who: 'Deployer',
        })
        const v5225 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4287),
          null,
        )
        const v5226 = {
          None: 0,
          Some: 1,
        }[v5225[0]]
        const v5227 = stdlib.eq(
          v5226,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5227, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:266:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
            'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5230 = {
          None: 0,
          Some: 1,
        }[v5212[0]]
        const v5231 = stdlib.eq(
          v5230,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5231, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v5233 = [v5211, v5210, v4287]
        const v5234 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, stdlib.digest([ctc14], [v5233])),
          null,
        )
        const v5235 = {
          None: 0,
          Some: 1,
        }[v5234[0]]
        const v5236 = stdlib.eq(
          v5235,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v5236, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'has received payout',
          who: 'Deployer',
        })
        const v5238 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v5211),
          null,
        )
        const v5239 = stdlib.fromSome(
          v5238,
          stdlib.checkedBigNumberify(
            './index.rsh:272:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5242 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v5211),
          null,
        )
        const v5243 = stdlib.fromSome(
          v5242,
          stdlib.checkedBigNumberify(
            './index.rsh:109:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5244 = stdlib.eq(
          v5243,
          stdlib.checkedBigNumberify(
            './index.rsh:111:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v5245
        if (v5244) {
          v5245 = stdlib.checkedBigNumberify(
            './index.rsh:112:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5246 = [v5211, v5210]
          const v5247 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, stdlib.digest([ctc11], [v5246])),
            null,
          )
          const v5248 = stdlib.fromSome(
            v5247,
            stdlib.checkedBigNumberify(
              './index.rsh:115:50:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5249 = stdlib.safeMuldiv(v5239, v5248, v5243)
          v5245 = v5249
        }
        const v5250 = stdlib.le(v5245, v5239)
        stdlib.assert(v5250, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v5253 = stdlib.ge(v3982, v5245)
        stdlib.assert(v5253, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        let v5383
        if (v5244) {
          v5383 = stdlib.checkedBigNumberify(
            './index.rsh:112:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5384 = [v5211, v5210]
          const v5385 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, stdlib.digest([ctc11], [v5384])),
            null,
          )
          const v5386 = stdlib.fromSome(
            v5385,
            stdlib.checkedBigNumberify(
              './index.rsh:115:50:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5387 = stdlib.safeMuldiv(v5239, v5386, v5243)
          v5383 = v5387
        }
        const v5388 = stdlib.le(v5383, v5239)
        stdlib.assert(v5388, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:278:16:application call to [unknown function] (defined at: ./index.rsh:278:16:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v5391 = stdlib.ge(v3982, v5383)
        stdlib.assert(v5391, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:278:16:application call to [unknown function] (defined at: ./index.rsh:278:16:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        const v5398 = stdlib.sub(v3982, v5383)
        await stdlib.mapSet(map6, stdlib.digest([ctc14], [v5233]), true)
        const v5400 = stdlib.safeSub(v5239, v5383)
        await stdlib.mapSet(map5, v5211, v5400)
        null
        await txn4.getOutput('receivePayout', 'v5383', ctc1, v5383)
        const v5408 = stdlib.safeSub(v3969, v5383)
        const cv3968 = v3968
        const cv3969 = v5408
        const cv3970 = v3970
        const cv3971 = v3971
        const cv3972 = v3972
        const cv3973 = v3973
        const cv3974 = v3974
        const cv3975 = v4289
        const cv3982 = v5398

        v3968 = cv3968
        v3969 = cv3969
        v3970 = cv3970
        v3971 = cv3971
        v3972 = cv3972
        v3973 = cv3973
        v3974 = cv3974
        v3975 = cv3975
        v3982 = cv3982

        txn3 = txn4
        continue
        break
      }
      case 'vote0_579': {
        const v5467 = v4288[1]
        undefined /* setApiDetails */
        const v5553 =
          v5467[
            stdlib.checkedBigNumberify(
              './index.rsh:214:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5554 = stdlib.addressEq(v4287, v3956)
        const v5555 = v5554 ? false : true
        stdlib.assert(v5555, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:215:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5557 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4287),
          null,
        )
        const v5558 = {
          None: 0,
          Some: 1,
        }[v5557[0]]
        const v5559 = stdlib.eq(
          v5558,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5559, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:216:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
            'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5561 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v5553),
          null,
        )
        const v5562 = {
          None: 0,
          Some: 1,
        }[v5561[0]]
        const v5563 = stdlib.eq(
          v5562,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5563, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v5565 = [v3974, v5553, v4287]
        const v5566 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc14], [v5565])),
          null,
        )
        const v5567 = {
          None: 0,
          Some: 1,
        }[v5566[0]]
        const v5568 = stdlib.eq(
          v5567,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v5568, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
            'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
          ],
          msg: 'has voted',
          who: 'Deployer',
        })
        const v5726 = stdlib.fromSome(
          v5557,
          stdlib.checkedBigNumberify(
            './index.rsh:98:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5727 = stdlib.le(v4290, v5726)
        stdlib.assert(v5727, {
          at: './index.rsh:99:16:application',
          fs: [
            'at ./index.rsh:222:28:application call to "enforceMembership" (defined at: ./index.rsh:96:37:function exp)',
            'at ./index.rsh:221:16:application call to [unknown function] (defined at: ./index.rsh:221:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v5729 = '                                '
        const v5731 = {
          art: v5729,
          audio: v5729,
          creator: v3956,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v5732 = stdlib.fromSome(v5561, v5731)
        const v5733 = v5732.art
        const v5734 = v5732.audio
        const v5735 = v5732.creator
        const v5736 = v5732.id
        const v5737 = v5732.votes
        const v5739 = [v3974, v5553]
        const v5740 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc11], [v5739])),
          null,
        )
        const v5741 = stdlib.fromSome(
          v5740,
          stdlib.checkedBigNumberify(
            './index.rsh:122:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5743 = stdlib.safeAdd(
          v5741,
          stdlib.checkedBigNumberify(
            './index.rsh:123:45:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map2, stdlib.digest([ctc11], [v5739]), v5743)
        await stdlib.mapSet(map3, stdlib.digest([ctc14], [v5565]), true)
        const v5745 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v3974),
          null,
        )
        const v5746 = stdlib.fromSome(
          v5745,
          stdlib.checkedBigNumberify(
            './index.rsh:126:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5747 = stdlib.safeAdd(
          v5746,
          stdlib.checkedBigNumberify(
            './index.rsh:126:59:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map4, v3974, v5747)
        const v5748 = stdlib.safeAdd(
          v5737,
          stdlib.checkedBigNumberify(
            './index.rsh:129:31:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5749 = {
          art: v5733,
          audio: v5734,
          creator: v5735,
          id: v5736,
          votes: v5748,
        }
        await stdlib.mapSet(map1, v5553, v5749)
        null
        const v5751 = null
        await txn4.getOutput('vote', 'v5751', ctc0, v5751)
        const v5758 = stdlib.safeAdd(
          v3973,
          stdlib.checkedBigNumberify(
            './index.rsh:232:30:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5759 = stdlib.safeAdd(
          v3972,
          stdlib.checkedBigNumberify(
            './index.rsh:233:26:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv3968 = v3968
        const cv3969 = v3969
        const cv3970 = v3970
        const cv3971 = v3971
        const cv3972 = v5759
        const cv3973 = v5758
        const cv3974 = v3974
        const cv3975 = v4289
        const cv3982 = v3982

        v3968 = cv3968
        v3969 = cv3969
        v3970 = cv3970
        v3971 = cv3971
        v3972 = cv3972
        v3973 = cv3973
        v3974 = cv3974
        v3975 = cv3975
        v3982 = cv3982

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
    addSong0_579: ctc9,
    buyMembership0_579: ctc10,
    endVotingPeriod0_579: ctc10,
    receivePayout0_579: ctc11,
    vote0_579: ctc12,
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
    v3956,
    v3957,
    v3958,
    v3968,
    v3969,
    v3970,
    v3971,
    v3972,
    v3973,
    v3974,
    v3982,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4061 = ctc.selfAddress()
  const v4063 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:185:35:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
      'at ./index.rsh:92:21:application call to "runaddSong0_579" (defined at: ./index.rsh:185:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'in',
    who: 'addSong',
  })
  const v4068 = stdlib.addressEq(v4061, v3956)
  const v4069 = v4068 ? false : true
  stdlib.assert(v4069, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:185:35:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
      'at ./index.rsh:92:21:application call to "runaddSong0_579" (defined at: ./index.rsh:185:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'addSong',
  })
  const v4071 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4061), null)
  const v4072 = {
    None: 0,
    Some: 1,
  }[v4071[0]]
  const v4073 = stdlib.eq(
    v4072,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4073, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:187:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
      'at ./index.rsh:185:35:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
      'at ./index.rsh:92:21:application call to "runaddSong0_579" (defined at: ./index.rsh:185:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'is member',
    who: 'addSong',
  })
  const v4082 = ['addSong0_579', v4063]

  const txn1 = await ctc.sendrecv({
    args: [
      v3956,
      v3957,
      v3958,
      v3968,
      v3969,
      v3970,
      v3971,
      v3972,
      v3973,
      v3974,
      v3982,
      v4082,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:189:10:decimal',
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
        data: [v4288],
        secs: v4290,
        time: v4289,
        didSend: v3455,
        from: v4287,
      } = txn1

      switch (v4288[0]) {
        case 'addSong0_579': {
          const v4291 = v4288[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'addSong',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4287),
            null,
          )
          const v4401 =
            v4291[
              stdlib.checkedBigNumberify(
                './index.rsh:185:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v4402 =
            v4291[
              stdlib.checkedBigNumberify(
                './index.rsh:185:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v4417 = v4290
          const v4419 = {
            art: v4401,
            audio: v4402,
            creator: v4287,
            id: v4290,
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          await stdlib.simMapSet(sim_r, 1, v4290, v4419)
          null
          const v4420 = await txn1.getOutput('addSong', 'v4417', ctc1, v4417)

          const v11600 = v3968
          const v11601 = v3969
          const v11602 = v3970
          const v11603 = v3971
          const v11604 = v3972
          const v11605 = v3973
          const v11606 = v3974
          const v11608 = v3982
          sim_r.isHalt = false

          break
        }
        case 'buyMembership0_579': {
          const v4585 = v4288[1]

          break
        }
        case 'endVotingPeriod0_579': {
          const v4879 = v4288[1]

          break
        }
        case 'receivePayout0_579': {
          const v5173 = v4288[1]

          break
        }
        case 'vote0_579': {
          const v5467 = v4288[1]

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
    data: [v4288],
    secs: v4290,
    time: v4289,
    didSend: v3455,
    from: v4287,
  } = txn1
  switch (v4288[0]) {
    case 'addSong0_579': {
      const v4291 = v4288[1]
      undefined /* setApiDetails */
      const v4298 = stdlib.addressEq(v4287, v3956)
      const v4299 = v4298 ? false : true
      stdlib.assert(v4299, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:185:35:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'addSong',
      })
      const v4301 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4287),
        null,
      )
      const v4302 = {
        None: 0,
        Some: 1,
      }[v4301[0]]
      const v4303 = stdlib.eq(
        v4302,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v4303, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:187:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
          'at ./index.rsh:185:35:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:185:35:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'is member',
        who: 'addSong',
      })
      const v4401 =
        v4291[
          stdlib.checkedBigNumberify(
            './index.rsh:185:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v4402 =
        v4291[
          stdlib.checkedBigNumberify(
            './index.rsh:185:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v4415 = stdlib.fromSome(
        v4301,
        stdlib.checkedBigNumberify(
          './index.rsh:98:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v4416 = stdlib.le(v4290, v4415)
      stdlib.assert(v4416, {
        at: './index.rsh:99:16:application',
        fs: [
          'at ./index.rsh:191:28:application call to "enforceMembership" (defined at: ./index.rsh:96:37:function exp)',
          'at ./index.rsh:190:16:application call to [unknown function] (defined at: ./index.rsh:190:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'addSong',
      })
      const v4417 = v4290
      const v4419 = {
        art: v4401,
        audio: v4402,
        creator: v4287,
        id: v4290,
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      await stdlib.mapSet(map1, v4290, v4419)
      null
      const v4420 = await txn1.getOutput('addSong', 'v4417', ctc1, v4417)
      if (v3455) {
        stdlib.protect(ctc0, await interact.out(v4291, v4420), {
          at: './index.rsh:185:11:application',
          fs: [
            'at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:11:function exp)',
            'at ./index.rsh:201:17:application call to "notify" (defined at: ./index.rsh:190:16:function exp)',
            'at ./index.rsh:190:16:application call to [unknown function] (defined at: ./index.rsh:190:16:function exp)',
          ],
          msg: 'out',
          who: 'addSong',
        })
      } else {
      }

      const v11600 = v3968
      const v11601 = v3969
      const v11602 = v3970
      const v11603 = v3971
      const v11604 = v3972
      const v11605 = v3973
      const v11606 = v3974
      const v11608 = v3982
      return

      break
    }
    case 'buyMembership0_579': {
      const v4585 = v4288[1]
      return
      break
    }
    case 'endVotingPeriod0_579': {
      const v4879 = v4288[1]
      return
      break
    }
    case 'receivePayout0_579': {
      const v5173 = v4288[1]
      return
      break
    }
    case 'vote0_579': {
      const v5467 = v4288[1]
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
    addSong0_579: ctc10,
    buyMembership0_579: ctc9,
    endVotingPeriod0_579: ctc9,
    receivePayout0_579: ctc11,
    vote0_579: ctc12,
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
    v3956,
    v3957,
    v3958,
    v3968,
    v3969,
    v3970,
    v3971,
    v3972,
    v3973,
    v3974,
    v3982,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4048 = ctc.selfAddress()
  const v4050 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:156:31:application call to [unknown function] (defined at: ./index.rsh:156:31:function exp)',
      'at ./index.rsh:92:21:application call to "runbuyMembership0_579" (defined at: ./index.rsh:156:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'in',
    who: 'buyMembership',
  })
  const v4051 = stdlib.addressEq(v4048, v3956)
  const v4052 = v4051 ? false : true
  stdlib.assert(v4052, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:156:31:application call to [unknown function] (defined at: ./index.rsh:156:31:function exp)',
      'at ./index.rsh:92:21:application call to "runbuyMembership0_579" (defined at: ./index.rsh:156:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'buyMembership',
  })
  const v4059 = ['buyMembership0_579', v4050]

  const txn1 = await ctc.sendrecv({
    args: [
      v3956,
      v3957,
      v3958,
      v3968,
      v3969,
      v3970,
      v3971,
      v3972,
      v3973,
      v3974,
      v3982,
      v4059,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3957, []],
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
        data: [v4288],
        secs: v4290,
        time: v4289,
        didSend: v3455,
        from: v4287,
      } = txn1

      switch (v4288[0]) {
        case 'addSong0_579': {
          const v4291 = v4288[1]

          break
        }
        case 'buyMembership0_579': {
          const v4585 = v4288[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'buyMembership',
          })
          const v4693 = stdlib.add(v3982, v3957)
          sim_r.txns.push({
            amt: v3957,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4287),
            null,
          )
          const v4731 = stdlib.safeAdd(v4290, v3958)
          await stdlib.simMapSet(sim_r, 0, v4287, v4731)
          null
          const v4732 = await txn1.getOutput(
            'buyMembership',
            'v4731',
            ctc1,
            v4731,
          )

          const v4737 = stdlib.safeAdd(
            v3971,
            stdlib.checkedBigNumberify(
              './index.rsh:174:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v4738 = stdlib.safeAdd(v3970, v3957)
          const v11654 = v3968
          const v11655 = v3969
          const v11656 = v4738
          const v11657 = v4737
          const v11658 = v3972
          const v11659 = v3973
          const v11660 = v3974
          const v11662 = v4693
          sim_r.isHalt = false

          break
        }
        case 'endVotingPeriod0_579': {
          const v4879 = v4288[1]

          break
        }
        case 'receivePayout0_579': {
          const v5173 = v4288[1]

          break
        }
        case 'vote0_579': {
          const v5467 = v4288[1]

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
    data: [v4288],
    secs: v4290,
    time: v4289,
    didSend: v3455,
    from: v4287,
  } = txn1
  switch (v4288[0]) {
    case 'addSong0_579': {
      const v4291 = v4288[1]
      return
      break
    }
    case 'buyMembership0_579': {
      const v4585 = v4288[1]
      undefined /* setApiDetails */
      const v4603 = stdlib.addressEq(v4287, v3956)
      const v4604 = v4603 ? false : true
      stdlib.assert(v4604, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:156:31:application call to [unknown function] (defined at: ./index.rsh:156:31:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:156:31:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'buyMembership',
      })
      const v4693 = stdlib.add(v3982, v3957)
      const v4727 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4287),
        null,
      )
      switch (v4727[0]) {
        case 'None': {
          const v4728 = v4727[1]

          break
        }
        case 'Some': {
          const v4729 = v4727[1]
          const v4730 = stdlib.gt(v4290, v4729)
          stdlib.assert(v4730, {
            at: './index.rsh:167:22:application',
            fs: [
              'at ./index.rsh:162:16:application call to [unknown function] (defined at: ./index.rsh:162:16:function exp)',
            ],
            msg: 'membership expired',
            who: 'buyMembership',
          })

          break
        }
      }
      const v4731 = stdlib.safeAdd(v4290, v3958)
      await stdlib.mapSet(map0, v4287, v4731)
      null
      const v4732 = await txn1.getOutput('buyMembership', 'v4731', ctc1, v4731)
      if (v3455) {
        stdlib.protect(ctc0, await interact.out(v4585, v4732), {
          at: './index.rsh:156:11:application',
          fs: [
            'at ./index.rsh:156:11:application call to [unknown function] (defined at: ./index.rsh:156:11:function exp)',
            'at ./index.rsh:172:17:application call to "notify" (defined at: ./index.rsh:162:16:function exp)',
            'at ./index.rsh:162:16:application call to [unknown function] (defined at: ./index.rsh:162:16:function exp)',
          ],
          msg: 'out',
          who: 'buyMembership',
        })
      } else {
      }

      const v4737 = stdlib.safeAdd(
        v3971,
        stdlib.checkedBigNumberify(
          './index.rsh:174:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v4738 = stdlib.safeAdd(v3970, v3957)
      const v11654 = v3968
      const v11655 = v3969
      const v11656 = v4738
      const v11657 = v4737
      const v11658 = v3972
      const v11659 = v3973
      const v11660 = v3974
      const v11662 = v4693
      return

      break
    }
    case 'endVotingPeriod0_579': {
      const v4879 = v4288[1]
      return
      break
    }
    case 'receivePayout0_579': {
      const v5173 = v4288[1]
      return
      break
    }
    case 'vote0_579': {
      const v5467 = v4288[1]
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
    addSong0_579: ctc10,
    buyMembership0_579: ctc9,
    endVotingPeriod0_579: ctc9,
    receivePayout0_579: ctc11,
    vote0_579: ctc12,
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
    v3956,
    v3957,
    v3958,
    v3968,
    v3969,
    v3970,
    v3971,
    v3972,
    v3973,
    v3974,
    v3982,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4114 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:238:33:application call to [unknown function] (defined at: ./index.rsh:238:33:function exp)',
      'at ./index.rsh:92:21:application call to "runendVotingPeriod0_579" (defined at: ./index.rsh:238:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'in',
    who: 'endVotingPeriod',
  })
  const v4124 = ['endVotingPeriod0_579', v4114]

  const txn1 = await ctc.sendrecv({
    args: [
      v3956,
      v3957,
      v3958,
      v3968,
      v3969,
      v3970,
      v3971,
      v3972,
      v3973,
      v3974,
      v3982,
      v4124,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:245:10:decimal',
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
        data: [v4288],
        secs: v4290,
        time: v4289,
        didSend: v3455,
        from: v4287,
      } = txn1

      switch (v4288[0]) {
        case 'addSong0_579': {
          const v4291 = v4288[1]

          break
        }
        case 'buyMembership0_579': {
          const v4585 = v4288[1]

          break
        }
        case 'endVotingPeriod0_579': {
          const v4879 = v4288[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'endVotingPeriod',
          })
          const v5037 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v3974),
            null,
          )
          const v5038 = stdlib.fromSome(
            v5037,
            stdlib.checkedBigNumberify(
              './index.rsh:241:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5039 = stdlib.safeDiv(
            v3970,
            stdlib.checkedBigNumberify(
              './index.rsh:242:40:decimal',
              stdlib.UInt_max,
              '3',
            ),
          )
          const v5040 = stdlib.safeSub(v3970, v5039)
          const v5041 = stdlib.safeAdd(v5038, v5040)
          await stdlib.simMapSet(sim_r, 5, v3974, v5041)
          null
          const v5042 = null
          const v5043 = await txn1.getOutput(
            'endVotingPeriod',
            'v5042',
            ctc0,
            v5042,
          )

          const v5048 = stdlib.safeSub(v3970, v5040)
          const v5049 = stdlib.safeAdd(v3969, v5040)
          const v5050 = stdlib.safeAdd(
            v3974,
            stdlib.checkedBigNumberify(
              './index.rsh:255:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5051 = stdlib.safeAdd(v4290, v3958)
          const v11708 = v5051
          const v11709 = v5049
          const v11710 = v5048
          const v11711 = v3971
          const v11712 = v3972
          const v11713 = stdlib.checkedBigNumberify(
            './index.rsh:257:13:decimal',
            stdlib.UInt_max,
            '0',
          )
          const v11714 = v5050
          const v11716 = v3982
          sim_r.isHalt = false

          break
        }
        case 'receivePayout0_579': {
          const v5173 = v4288[1]

          break
        }
        case 'vote0_579': {
          const v5467 = v4288[1]

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
    data: [v4288],
    secs: v4290,
    time: v4289,
    didSend: v3455,
    from: v4287,
  } = txn1
  switch (v4288[0]) {
    case 'addSong0_579': {
      const v4291 = v4288[1]
      return
      break
    }
    case 'buyMembership0_579': {
      const v4585 = v4288[1]
      return
      break
    }
    case 'endVotingPeriod0_579': {
      const v4879 = v4288[1]
      undefined /* setApiDetails */
      const v5036 = stdlib.gt(v4290, v3968)
      const v5037 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v3974),
        null,
      )
      const v5038 = stdlib.fromSome(
        v5037,
        stdlib.checkedBigNumberify(
          './index.rsh:241:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5039 = stdlib.safeDiv(
        v3970,
        stdlib.checkedBigNumberify(
          './index.rsh:242:40:decimal',
          stdlib.UInt_max,
          '3',
        ),
      )
      const v5040 = stdlib.safeSub(v3970, v5039)
      stdlib.assert(v5036, {
        at: './index.rsh:247:18:application',
        fs: [
          'at ./index.rsh:246:16:application call to [unknown function] (defined at: ./index.rsh:246:16:function exp)',
        ],
        msg: 'voting period over',
        who: 'endVotingPeriod',
      })
      const v5041 = stdlib.safeAdd(v5038, v5040)
      await stdlib.mapSet(map5, v3974, v5041)
      null
      const v5042 = null
      const v5043 = await txn1.getOutput(
        'endVotingPeriod',
        'v5042',
        ctc0,
        v5042,
      )
      if (v3455) {
        stdlib.protect(ctc0, await interact.out(v4879, v5043), {
          at: './index.rsh:238:11:application',
          fs: [
            'at ./index.rsh:238:11:application call to [unknown function] (defined at: ./index.rsh:238:11:function exp)',
            'at ./index.rsh:250:17:application call to "notify" (defined at: ./index.rsh:246:16:function exp)',
            'at ./index.rsh:246:16:application call to [unknown function] (defined at: ./index.rsh:246:16:function exp)',
          ],
          msg: 'out',
          who: 'endVotingPeriod',
        })
      } else {
      }

      const v5048 = stdlib.safeSub(v3970, v5040)
      const v5049 = stdlib.safeAdd(v3969, v5040)
      const v5050 = stdlib.safeAdd(
        v3974,
        stdlib.checkedBigNumberify(
          './index.rsh:255:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5051 = stdlib.safeAdd(v4290, v3958)
      const v11708 = v5051
      const v11709 = v5049
      const v11710 = v5048
      const v11711 = v3971
      const v11712 = v3972
      const v11713 = stdlib.checkedBigNumberify(
        './index.rsh:257:13:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v11714 = v5050
      const v11716 = v3982
      return

      break
    }
    case 'receivePayout0_579': {
      const v5173 = v4288[1]
      return
      break
    }
    case 'vote0_579': {
      const v5467 = v4288[1]
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
    addSong0_579: ctc11,
    buyMembership0_579: ctc12,
    endVotingPeriod0_579: ctc12,
    receivePayout0_579: ctc9,
    vote0_579: ctc13,
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
    v3956,
    v3957,
    v3958,
    v3968,
    v3969,
    v3970,
    v3971,
    v3972,
    v3973,
    v3974,
    v3982,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4126 = ctc.selfAddress()
  const v4128 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to "runreceivePayout0_579" (defined at: ./index.rsh:263:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'in',
    who: 'receivePayout',
  })
  const v4129 =
    v4128[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4130 =
    v4128[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '1',
      )
    ]
  const v4133 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4129), null)
  const v4134 = '                                '
  const v4136 = {
    art: v4134,
    audio: v4134,
    creator: v3956,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
  }
  const v4137 = stdlib.fromSome(v4133, v4136)
  const v4140 = v4137.creator
  const v4144 = stdlib.addressEq(v4126, v4140)
  stdlib.assert(v4144, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to "runreceivePayout0_579" (defined at: ./index.rsh:263:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'not song creator',
    who: 'receivePayout',
  })
  const v4146 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4126), null)
  const v4147 = {
    None: 0,
    Some: 1,
  }[v4146[0]]
  const v4148 = stdlib.eq(
    v4147,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4148, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:266:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to "runreceivePayout0_579" (defined at: ./index.rsh:263:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'is member',
    who: 'receivePayout',
  })
  const v4151 = {
    None: 0,
    Some: 1,
  }[v4133[0]]
  const v4152 = stdlib.eq(
    v4151,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4152, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to "runreceivePayout0_579" (defined at: ./index.rsh:263:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'receivePayout',
  })
  const v4154 = [v4130, v4129, v4126]
  const v4155 = stdlib.protect(
    map6_ctc,
    await stdlib.mapRef(map6, stdlib.digest([ctc10], [v4154])),
    null,
  )
  const v4156 = {
    None: 0,
    Some: 1,
  }[v4155[0]]
  const v4157 = stdlib.eq(
    v4156,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4157, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to "runreceivePayout0_579" (defined at: ./index.rsh:263:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'receivePayout',
  })
  const v4159 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v4130), null)
  const v4160 = stdlib.fromSome(
    v4159,
    stdlib.checkedBigNumberify(
      './index.rsh:272:54:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4163 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v4130), null)
  const v4164 = stdlib.fromSome(
    v4163,
    stdlib.checkedBigNumberify(
      './index.rsh:109:11:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4165 = stdlib.eq(
    v4164,
    stdlib.checkedBigNumberify(
      './index.rsh:111:44:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  let v4166
  if (v4165) {
    v4166 = stdlib.checkedBigNumberify(
      './index.rsh:112:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v4167 = [v4130, v4129]
    const v4168 = stdlib.protect(
      map2_ctc,
      await stdlib.mapRef(map2, stdlib.digest([ctc9], [v4167])),
      null,
    )
    const v4169 = stdlib.fromSome(
      v4168,
      stdlib.checkedBigNumberify(
        './index.rsh:115:50:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v4170 = stdlib.safeMuldiv(v4160, v4169, v4164)
    v4166 = v4170
  }
  const v4171 = stdlib.le(v4166, v4160)
  stdlib.assert(v4171, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to "runreceivePayout0_579" (defined at: ./index.rsh:263:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4174 = stdlib.ge(v3982, v4166)
  stdlib.assert(v4174, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to "runreceivePayout0_579" (defined at: ./index.rsh:263:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })
  const v4183 = ['receivePayout0_579', v4128]

  let v4253
  if (v4165) {
    v4253 = stdlib.checkedBigNumberify(
      './index.rsh:112:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v4254 = [v4130, v4129]
    const v4255 = stdlib.protect(
      map2_ctc,
      await stdlib.mapRef(map2, stdlib.digest([ctc9], [v4254])),
      null,
    )
    const v4256 = stdlib.fromSome(
      v4255,
      stdlib.checkedBigNumberify(
        './index.rsh:115:50:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v4257 = stdlib.safeMuldiv(v4160, v4256, v4164)
    v4253 = v4257
  }
  const v4258 = stdlib.le(v4253, v4160)
  stdlib.assert(v4258, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4261 = stdlib.ge(v3982, v4253)
  stdlib.assert(v4261, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })

  const txn1 = await ctc.sendrecv({
    args: [
      v3956,
      v3957,
      v3958,
      v3968,
      v3969,
      v3970,
      v3971,
      v3972,
      v3973,
      v3974,
      v3982,
      v4183,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:277:10:decimal',
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
        data: [v4288],
        secs: v4290,
        time: v4289,
        didSend: v3455,
        from: v4287,
      } = txn1

      switch (v4288[0]) {
        case 'addSong0_579': {
          const v4291 = v4288[1]

          break
        }
        case 'buyMembership0_579': {
          const v4585 = v4288[1]

          break
        }
        case 'endVotingPeriod0_579': {
          const v4879 = v4288[1]

          break
        }
        case 'receivePayout0_579': {
          const v5173 = v4288[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'receivePayout',
          })
          const v5210 =
            v5173[
              stdlib.checkedBigNumberify(
                './index.rsh:263:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v5211 =
            v5173[
              stdlib.checkedBigNumberify(
                './index.rsh:263:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v5210),
            null,
          )
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4287),
            null,
          )
          const v5233 = [v5211, v5210, v4287]
          stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, stdlib.digest([ctc10], [v5233])),
            null,
          )
          const v5238 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v5211),
            null,
          )
          const v5239 = stdlib.fromSome(
            v5238,
            stdlib.checkedBigNumberify(
              './index.rsh:272:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5242 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v5211),
            null,
          )
          const v5243 = stdlib.fromSome(
            v5242,
            stdlib.checkedBigNumberify(
              './index.rsh:109:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5244 = stdlib.eq(
            v5243,
            stdlib.checkedBigNumberify(
              './index.rsh:111:44:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          if (v5244) {
          } else {
            const v5246 = [v5211, v5210]
            stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc9], [v5246])),
              null,
            )
          }
          let v5383
          if (v5244) {
            v5383 = stdlib.checkedBigNumberify(
              './index.rsh:112:13:decimal',
              stdlib.UInt_max,
              '0',
            )
          } else {
            const v5384 = [v5211, v5210]
            const v5385 = stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc9], [v5384])),
              null,
            )
            const v5386 = stdlib.fromSome(
              v5385,
              stdlib.checkedBigNumberify(
                './index.rsh:115:50:decimal',
                stdlib.UInt_max,
                '0',
              ),
            )
            const v5387 = stdlib.safeMuldiv(v5239, v5386, v5243)
            v5383 = v5387
          }
          const v5398 = stdlib.sub(v3982, v5383)
          sim_r.txns.push({
            kind: 'from',
            to: v4287,
            tok: undefined /* Nothing */,
          })
          await stdlib.simMapSet(
            sim_r,
            6,
            stdlib.digest([ctc10], [v5233]),
            true,
          )
          const v5400 = stdlib.safeSub(v5239, v5383)
          await stdlib.simMapSet(sim_r, 5, v5211, v5400)
          null
          const v5401 = await txn1.getOutput(
            'receivePayout',
            'v5383',
            ctc1,
            v5383,
          )

          const v5408 = stdlib.safeSub(v3969, v5383)
          const v11762 = v3968
          const v11763 = v5408
          const v11764 = v3970
          const v11765 = v3971
          const v11766 = v3972
          const v11767 = v3973
          const v11768 = v3974
          const v11770 = v5398
          sim_r.isHalt = false

          break
        }
        case 'vote0_579': {
          const v5467 = v4288[1]

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
    data: [v4288],
    secs: v4290,
    time: v4289,
    didSend: v3455,
    from: v4287,
  } = txn1
  switch (v4288[0]) {
    case 'addSong0_579': {
      const v4291 = v4288[1]
      return
      break
    }
    case 'buyMembership0_579': {
      const v4585 = v4288[1]
      return
      break
    }
    case 'endVotingPeriod0_579': {
      const v4879 = v4288[1]
      return
      break
    }
    case 'receivePayout0_579': {
      const v5173 = v4288[1]
      undefined /* setApiDetails */
      const v5210 =
        v5173[
          stdlib.checkedBigNumberify(
            './index.rsh:263:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5211 =
        v5173[
          stdlib.checkedBigNumberify(
            './index.rsh:263:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v5212 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v5210),
        null,
      )
      const v5213 = '                                '
      const v5215 = {
        art: v5213,
        audio: v5213,
        creator: v3956,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v5216 = stdlib.fromSome(v5212, v5215)
      const v5219 = v5216.creator
      const v5223 = stdlib.addressEq(v4287, v5219)
      stdlib.assert(v5223, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'not song creator',
        who: 'receivePayout',
      })
      const v5225 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4287),
        null,
      )
      const v5226 = {
        None: 0,
        Some: 1,
      }[v5225[0]]
      const v5227 = stdlib.eq(
        v5226,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5227, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:266:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
          'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'is member',
        who: 'receivePayout',
      })
      const v5230 = {
        None: 0,
        Some: 1,
      }[v5212[0]]
      const v5231 = stdlib.eq(
        v5230,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5231, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'receivePayout',
      })
      const v5233 = [v5211, v5210, v4287]
      const v5234 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, stdlib.digest([ctc10], [v5233])),
        null,
      )
      const v5235 = {
        None: 0,
        Some: 1,
      }[v5234[0]]
      const v5236 = stdlib.eq(
        v5235,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v5236, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'has received payout',
        who: 'receivePayout',
      })
      const v5238 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v5211),
        null,
      )
      const v5239 = stdlib.fromSome(
        v5238,
        stdlib.checkedBigNumberify(
          './index.rsh:272:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5242 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v5211),
        null,
      )
      const v5243 = stdlib.fromSome(
        v5242,
        stdlib.checkedBigNumberify(
          './index.rsh:109:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5244 = stdlib.eq(
        v5243,
        stdlib.checkedBigNumberify(
          './index.rsh:111:44:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      let v5245
      if (v5244) {
        v5245 = stdlib.checkedBigNumberify(
          './index.rsh:112:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5246 = [v5211, v5210]
        const v5247 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc9], [v5246])),
          null,
        )
        const v5248 = stdlib.fromSome(
          v5247,
          stdlib.checkedBigNumberify(
            './index.rsh:115:50:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5249 = stdlib.safeMuldiv(v5239, v5248, v5243)
        v5245 = v5249
      }
      const v5250 = stdlib.le(v5245, v5239)
      stdlib.assert(v5250, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v5253 = stdlib.ge(v3982, v5245)
      stdlib.assert(v5253, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:263:46:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:263:46:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      let v5383
      if (v5244) {
        v5383 = stdlib.checkedBigNumberify(
          './index.rsh:112:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5384 = [v5211, v5210]
        const v5385 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc9], [v5384])),
          null,
        )
        const v5386 = stdlib.fromSome(
          v5385,
          stdlib.checkedBigNumberify(
            './index.rsh:115:50:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5387 = stdlib.safeMuldiv(v5239, v5386, v5243)
        v5383 = v5387
      }
      const v5388 = stdlib.le(v5383, v5239)
      stdlib.assert(v5388, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:278:16:application call to [unknown function] (defined at: ./index.rsh:278:16:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v5391 = stdlib.ge(v3982, v5383)
      stdlib.assert(v5391, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:278:16:application call to [unknown function] (defined at: ./index.rsh:278:16:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      const v5398 = stdlib.sub(v3982, v5383)
      await stdlib.mapSet(map6, stdlib.digest([ctc10], [v5233]), true)
      const v5400 = stdlib.safeSub(v5239, v5383)
      await stdlib.mapSet(map5, v5211, v5400)
      null
      const v5401 = await txn1.getOutput('receivePayout', 'v5383', ctc1, v5383)
      if (v3455) {
        stdlib.protect(ctc0, await interact.out(v5173, v5401), {
          at: './index.rsh:263:11:application',
          fs: [
            'at ./index.rsh:263:11:application call to [unknown function] (defined at: ./index.rsh:263:11:function exp)',
            'at ./index.rsh:283:17:application call to "notify" (defined at: ./index.rsh:278:16:function exp)',
            'at ./index.rsh:278:16:application call to [unknown function] (defined at: ./index.rsh:278:16:function exp)',
          ],
          msg: 'out',
          who: 'receivePayout',
        })
      } else {
      }

      const v5408 = stdlib.safeSub(v3969, v5383)
      const v11762 = v3968
      const v11763 = v5408
      const v11764 = v3970
      const v11765 = v3971
      const v11766 = v3972
      const v11767 = v3973
      const v11768 = v3974
      const v11770 = v5398
      return

      break
    }
    case 'vote0_579': {
      const v5467 = v4288[1]
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
    addSong0_579: ctc11,
    buyMembership0_579: ctc12,
    endVotingPeriod0_579: ctc12,
    receivePayout0_579: ctc13,
    vote0_579: ctc9,
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
    v3956,
    v3957,
    v3958,
    v3968,
    v3969,
    v3970,
    v3971,
    v3972,
    v3973,
    v3974,
    v3982,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4084 = ctc.selfAddress()
  const v4086 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
      'at ./index.rsh:92:21:application call to "runvote0_579" (defined at: ./index.rsh:214:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'in',
    who: 'vote',
  })
  const v4087 =
    v4086[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4089 = stdlib.addressEq(v4084, v3956)
  const v4090 = v4089 ? false : true
  stdlib.assert(v4090, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:215:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
      'at ./index.rsh:92:21:application call to "runvote0_579" (defined at: ./index.rsh:214:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'vote',
  })
  const v4092 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4084), null)
  const v4093 = {
    None: 0,
    Some: 1,
  }[v4092[0]]
  const v4094 = stdlib.eq(
    v4093,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4094, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:216:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
      'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
      'at ./index.rsh:92:21:application call to "runvote0_579" (defined at: ./index.rsh:214:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'is member',
    who: 'vote',
  })
  const v4096 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4087), null)
  const v4097 = {
    None: 0,
    Some: 1,
  }[v4096[0]]
  const v4098 = stdlib.eq(
    v4097,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4098, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
      'at ./index.rsh:92:21:application call to "runvote0_579" (defined at: ./index.rsh:214:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'vote',
  })
  const v4100 = [v3974, v4087, v4084]
  const v4101 = stdlib.protect(
    map3_ctc,
    await stdlib.mapRef(map3, stdlib.digest([ctc10], [v4100])),
    null,
  )
  const v4102 = {
    None: 0,
    Some: 1,
  }[v4101[0]]
  const v4103 = stdlib.eq(
    v4102,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4103, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
      'at ./index.rsh:92:21:application call to "runvote0_579" (defined at: ./index.rsh:214:10:function exp)',
      'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
    ],
    msg: 'has voted',
    who: 'vote',
  })
  const v4110 = ['vote0_579', v4086]

  const txn1 = await ctc.sendrecv({
    args: [
      v3956,
      v3957,
      v3958,
      v3968,
      v3969,
      v3970,
      v3971,
      v3972,
      v3973,
      v3974,
      v3982,
      v4110,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:220:10:decimal',
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
        data: [v4288],
        secs: v4290,
        time: v4289,
        didSend: v3455,
        from: v4287,
      } = txn1

      switch (v4288[0]) {
        case 'addSong0_579': {
          const v4291 = v4288[1]

          break
        }
        case 'buyMembership0_579': {
          const v4585 = v4288[1]

          break
        }
        case 'endVotingPeriod0_579': {
          const v4879 = v4288[1]

          break
        }
        case 'receivePayout0_579': {
          const v5173 = v4288[1]

          break
        }
        case 'vote0_579': {
          const v5467 = v4288[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'vote',
          })
          const v5553 =
            v5467[
              stdlib.checkedBigNumberify(
                './index.rsh:214:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4287),
            null,
          )
          const v5561 = stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v5553),
            null,
          )
          const v5565 = [v3974, v5553, v4287]
          stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc10], [v5565])),
            null,
          )
          const v5729 = '                                '
          const v5731 = {
            art: v5729,
            audio: v5729,
            creator: v3956,
            id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          const v5732 = stdlib.fromSome(v5561, v5731)
          const v5733 = v5732.art
          const v5734 = v5732.audio
          const v5735 = v5732.creator
          const v5736 = v5732.id
          const v5737 = v5732.votes
          const v5739 = [v3974, v5553]
          const v5740 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc13], [v5739])),
            null,
          )
          const v5741 = stdlib.fromSome(
            v5740,
            stdlib.checkedBigNumberify(
              './index.rsh:122:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5743 = stdlib.safeAdd(
            v5741,
            stdlib.checkedBigNumberify(
              './index.rsh:123:45:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(
            sim_r,
            2,
            stdlib.digest([ctc13], [v5739]),
            v5743,
          )
          await stdlib.simMapSet(
            sim_r,
            3,
            stdlib.digest([ctc10], [v5565]),
            true,
          )
          const v5745 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v3974),
            null,
          )
          const v5746 = stdlib.fromSome(
            v5745,
            stdlib.checkedBigNumberify(
              './index.rsh:126:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5747 = stdlib.safeAdd(
            v5746,
            stdlib.checkedBigNumberify(
              './index.rsh:126:59:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(sim_r, 4, v3974, v5747)
          const v5748 = stdlib.safeAdd(
            v5737,
            stdlib.checkedBigNumberify(
              './index.rsh:129:31:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5749 = {
            art: v5733,
            audio: v5734,
            creator: v5735,
            id: v5736,
            votes: v5748,
          }
          await stdlib.simMapSet(sim_r, 1, v5553, v5749)
          null
          const v5751 = null
          const v5752 = await txn1.getOutput('vote', 'v5751', ctc0, v5751)

          const v5758 = stdlib.safeAdd(
            v3973,
            stdlib.checkedBigNumberify(
              './index.rsh:232:30:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5759 = stdlib.safeAdd(
            v3972,
            stdlib.checkedBigNumberify(
              './index.rsh:233:26:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v11816 = v3968
          const v11817 = v3969
          const v11818 = v3970
          const v11819 = v3971
          const v11820 = v5759
          const v11821 = v5758
          const v11822 = v3974
          const v11824 = v3982
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
    data: [v4288],
    secs: v4290,
    time: v4289,
    didSend: v3455,
    from: v4287,
  } = txn1
  switch (v4288[0]) {
    case 'addSong0_579': {
      const v4291 = v4288[1]
      return
      break
    }
    case 'buyMembership0_579': {
      const v4585 = v4288[1]
      return
      break
    }
    case 'endVotingPeriod0_579': {
      const v4879 = v4288[1]
      return
      break
    }
    case 'receivePayout0_579': {
      const v5173 = v4288[1]
      return
      break
    }
    case 'vote0_579': {
      const v5467 = v4288[1]
      undefined /* setApiDetails */
      const v5553 =
        v5467[
          stdlib.checkedBigNumberify(
            './index.rsh:214:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5554 = stdlib.addressEq(v4287, v3956)
      const v5555 = v5554 ? false : true
      stdlib.assert(v5555, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:215:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'vote',
      })
      const v5557 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4287),
        null,
      )
      const v5558 = {
        None: 0,
        Some: 1,
      }[v5557[0]]
      const v5559 = stdlib.eq(
        v5558,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5559, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:95:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:216:20:application call to "chkMembership" (defined at: ./index.rsh:95:33:function exp)',
          'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'is member',
        who: 'vote',
      })
      const v5561 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v5553),
        null,
      )
      const v5562 = {
        None: 0,
        Some: 1,
      }[v5561[0]]
      const v5563 = stdlib.eq(
        v5562,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5563, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'vote',
      })
      const v5565 = [v3974, v5553, v4287]
      const v5566 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, stdlib.digest([ctc10], [v5565])),
        null,
      )
      const v5567 = {
        None: 0,
        Some: 1,
      }[v5566[0]]
      const v5568 = stdlib.eq(
        v5567,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v5568, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:214:26:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:214:26:function exp)',
          'at ./index.rsh:92:21:application call to [unknown function] (defined at: ./index.rsh:92:21:function exp)',
        ],
        msg: 'has voted',
        who: 'vote',
      })
      const v5726 = stdlib.fromSome(
        v5557,
        stdlib.checkedBigNumberify(
          './index.rsh:98:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5727 = stdlib.le(v4290, v5726)
      stdlib.assert(v5727, {
        at: './index.rsh:99:16:application',
        fs: [
          'at ./index.rsh:222:28:application call to "enforceMembership" (defined at: ./index.rsh:96:37:function exp)',
          'at ./index.rsh:221:16:application call to [unknown function] (defined at: ./index.rsh:221:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'vote',
      })
      const v5729 = '                                '
      const v5731 = {
        art: v5729,
        audio: v5729,
        creator: v3956,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v5732 = stdlib.fromSome(v5561, v5731)
      const v5733 = v5732.art
      const v5734 = v5732.audio
      const v5735 = v5732.creator
      const v5736 = v5732.id
      const v5737 = v5732.votes
      const v5739 = [v3974, v5553]
      const v5740 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, stdlib.digest([ctc13], [v5739])),
        null,
      )
      const v5741 = stdlib.fromSome(
        v5740,
        stdlib.checkedBigNumberify(
          './index.rsh:122:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5743 = stdlib.safeAdd(
        v5741,
        stdlib.checkedBigNumberify(
          './index.rsh:123:45:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map2, stdlib.digest([ctc13], [v5739]), v5743)
      await stdlib.mapSet(map3, stdlib.digest([ctc10], [v5565]), true)
      const v5745 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v3974),
        null,
      )
      const v5746 = stdlib.fromSome(
        v5745,
        stdlib.checkedBigNumberify(
          './index.rsh:126:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5747 = stdlib.safeAdd(
        v5746,
        stdlib.checkedBigNumberify(
          './index.rsh:126:59:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map4, v3974, v5747)
      const v5748 = stdlib.safeAdd(
        v5737,
        stdlib.checkedBigNumberify(
          './index.rsh:129:31:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5749 = {
        art: v5733,
        audio: v5734,
        creator: v5735,
        id: v5736,
        votes: v5748,
      }
      await stdlib.mapSet(map1, v5553, v5749)
      null
      const v5751 = null
      const v5752 = await txn1.getOutput('vote', 'v5751', ctc0, v5751)
      if (v3455) {
        stdlib.protect(ctc0, await interact.out(v5467, v5752), {
          at: './index.rsh:214:11:application',
          fs: [
            'at ./index.rsh:214:11:application call to [unknown function] (defined at: ./index.rsh:214:11:function exp)',
            'at ./index.rsh:225:17:application call to "notify" (defined at: ./index.rsh:221:16:function exp)',
            'at ./index.rsh:221:16:application call to [unknown function] (defined at: ./index.rsh:221:16:function exp)',
          ],
          msg: 'out',
          who: 'vote',
        })
      } else {
      }

      const v5758 = stdlib.safeAdd(
        v3973,
        stdlib.checkedBigNumberify(
          './index.rsh:232:30:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5759 = stdlib.safeAdd(
        v3972,
        stdlib.checkedBigNumberify(
          './index.rsh:233:26:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v11816 = v3968
      const v11817 = v3969
      const v11818 = v3970
      const v11819 = v3971
      const v11820 = v5759
      const v11821 = v5758
      const v11822 = v3974
      const v11824 = v3982
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T13","name":"v11876","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_579","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_579","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_579","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_579","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_579","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4417","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4731","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5042","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5383","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5751","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"endedVotingPeriod","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"membershipPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v3","type":"uint256"}],"name":"payoutReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"songAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"voted","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_5Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_6Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v11878","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_579","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_579","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_579","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_579","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_579","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v11889","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"v11850","type":"bytes32"},{"internalType":"bytes32","name":"v11851","type":"bytes32"}],"name":"addSong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endVotingPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentVotingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembershipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v11831","type":"address"}],"name":"getMembershipExp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11836","type":"uint256"}],"name":"getPeriodPayouts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11839","type":"uint256"}],"name":"getSong","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11842","type":"uint256"},{"internalType":"uint256","name":"v11843","type":"uint256"}],"name":"getSongPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11846","type":"uint256"},{"internalType":"address payable","name":"v11847","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11864","type":"uint256"},{"internalType":"uint256","name":"v11865","type":"uint256"}],"name":"receivePayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11870","type":"uint256"}],"name":"vote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200411c90813803601f1980601f83011683019360018060401b0392848610848711176200039d5780859260409788528339606094859181010312620003b3578451936200004f85620003b8565b815185526020868184015193828801948552015195878101968752436003558751926101e08401848110888211176200039d5789526000938481528484820152848a82015284828201528460808201528460a08201528460c08201528460e08201528461010082015284610120820152895160a081018181108a8211176200038957916101c09187938d528381528387820152838d82015283858201528360808201526101408201528261016082015282610180820152826101a0820152015260049160ff83541662000372577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808b5133815283518782015288518d8201528b5185820152a151801590811562000365575b50156200034e573462000337578851976200017e89620003b8565b838901958587528a8a0199868b523390525186525188526001978885554389558951953385880152518a8701525181860152845260808401848110878211176200032457885283519586116200031157600254908782811c9216801562000306575b83831014620002f35750601f8111620002a7575b508093601f86116001146200023f5750509183949184939462000233575b50501b916000199060031b1c1916176002555b51613d479081620003d58239f35b01519250388062000212565b600283528183209493928692918316915b888383106200028c575050501062000272575b505050811b0160025562000225565b015160001960f88460031b161c1916905538808062000263565b85870151885590960195948501948793509081019062000250565b60028352818320601f870160051c810191838810620002e8575b601f0160051c019087905b828110620002dc575050620001f4565b848155018790620002cc565b9091508190620002c1565b634e487b7160e01b845260229052602483fd5b91607f1691620001e0565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b885163100960cb60e01b8152601481840152602490fd5b885163100960cb60e01b8152601381840152602490fd5b9050600154143862000163565b895163100960cb60e01b8152601281850152602490fd5b634e487b7160e01b87526041600452602487fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b038211176200039d5760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c80630121b93f146111e05780630be3c76b1461114b5780630ca52f77146110c75780631248dfcf14610fe55780631ca8b66d14610fbd5780631e93b0f114610f9f57806336e56ea514610f6657806342acaa6614610e225780634385963214610cf1578063544774a914610c9b57806355bfc2ba14610c05578063573b8510146107bd5780635c581119146107765780636f9fb98a1461070b57806383230757146106ed5780638b75d81714610692578063a4d0d391146104a8578063ab53f2c614610434578063ad76d8b414610400578063ae40bc79146103b1578063bda4463b14610389578063d61ba2821461031d578063d650b241146101f8578063da70a525146101d0578063e80a57a5146101785763ec192d610361000e5734610173576020366003190112610173576101546114b3565b5061016f61016360043561171b565b604051918291826112a6565b0390f35b600080fd5b600036600319011261017357602060606101906117f6565b6101c48161019c613cfe565b85810190600282515251151585825101526101b5613cfe565b90600082525186820152611a36565b01511515604051908152f35b34610173576020366003190112610173576101e96114b3565b5061016f61016360043561165f565b6101203660031901126101735761020d6117f6565b6040519061021a82611341565b6004358252610100366023190112610173576040519060c082016001600160401b038111838210176103075760405260243560058110156101735782526040366043190112610173576040519261027084611341565b60443584526020936064358582015284840152608435801515810361017357604084015260a435801515810361017357606084015260403660c3190112610173576040516102bd81611341565b60c435815260e4358582015260808401528361010319360112610173576102fe926040516102ea8161135c565b61010435815260a082015284820152611a36565b60405160008152f35b634e487b7160e01b600052604160045260246000fd5b34610173576000366003190112610173576103366117f6565b600460005403610370576101006020916060610361610353611408565b85808251830101910161193b565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b34610173576020366003190112610173576103a26114b3565b5061016f610163600435611764565b34610173576000366003190112610173576103ca6117f6565b6004600054036103e75760a0602091610120610361610353611408565b60405163100960cb60e01b815260086004820152602490fd5b34610173576020366003190112610173576104196114b3565b5061016f6104286004356116a8565b60405191829182611279565b3461017357600036600319011261017357600054610450611408565b6040519182528160206040818301528251908160408401526000935b82851061048f575050606092506000838284010152601f80199101168101030190f35b848101820151868601606001529381019385935061046c565b34610173576104b636611243565b906104bf6117f6565b604051916104cc83611341565b6020938484019184528152604051906104e482611377565b600082528482019160008352604081019460405161050181611341565b6000815260008882015286526004600054036106795761016095610534610526611408565b89808251830101910161193b565b506001610541855161171b565b5161054b81611259565b61055481611259565b03610672576040610565855161171b565b01515b8084526105865750505050600081525b519182910152604051908152f35b8361064d92610655955183515251898351015260016105a58251611764565b516105af81611259565b6105b881611259565b036106665760406105cc6105e79251611764565b0151915b600161060382518c60405195869182019283611a00565b03946105fb601f19968781018352826113e5565b51902061165f565b5161060d81611259565b61061681611259565b0361065c576040916106396105fb6106459351928d865193849182019586611a00565b039081018352826113e5565b015190613c4a565b905190611a16565b8152610578565b5050600090613c4a565b506105e76000916105d0565b6000610568565b60405163100960cb60e01b815260106004820152602490fd5b34610173576000366003190112610173576106ab6117f6565b6004600054036106d45760c0602091826103616106c6611408565b82808251830101910161193b565b60405163100960cb60e01b815260096004820152602490fd5b34610173576000366003190112610173576020600154604051908152f35b34610173576000366003190112610173576107246117f6565b60046000540361075d576080602091610750610741610353611408565b8360a082015191015190611927565b9182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b6000366003190112610173576020604061078e6117f6565b6107b38161079a613cfe565b85810190600182515251151585825101526101b5613cfe565b0151604051908152f35b6020366003190112610173576107d16117f6565b506040516107de8161135c565b600435815260ff60045416610bec577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040805133815283516020820152a1600160005403610bd35761082f611408565b606081805181010312610173576040519161084983611377565b6108556020830161187d565b835260606040830151926020850193845201519060408401918252518015908115610bc7575b5015610bae5734610b95578251336001600160a01b0390911603610b7c576108c6916108a5611891565b93516001600160a01b03168452516020840152805160408401525142611927565b606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600161012082015243610140820152600061016082015261014060405161091581611392565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e08101516101008401526101008101516101208401526101208101518284015201516101608201526101608152610a5a816113c9565b80516001600160401b03811161030757610a75600254611307565b601f8111610b29575b50602091601f8211600114610ac457918192600092610ab9575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610a98565b601f19821692600260005260206000209160005b858110610b1157508360019510610af8575b505050811b01600255610aae565b015160001960f88460031b161c19169055828080610aea565b91926020600181928685015181550194019201610ad8565b6002600052600080516020613d1b833981519152601f830160051c81019160208410610b72575b601f0160051c01905b818110610b665750610a7e565b60008155600101610b59565b9091508190610b50565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b9050600154148461087b565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b3461017357602036600319011261017357600435610c216117f6565b90600460005403610c825760209161012091610c3e610353611408565b506001610c4a82611764565b51610c5481611259565b610c5d81611259565b03610c7757610361604091611764565b0152604051908152f35b506000918291610c6d565b60405163100960cb60e01b8152600d6004820152602490fd5b3461017357602036600319011261017357610cb4611580565b5060e0610cc26004356115a8565b610cef60408051928051610cd581611259565b8452602081015115156020850152015160408301906112d1565bf35b34610173576040366003190112610173576001600160a01b036024358181169081900361017357610d206117f6565b60405191610d2d83611341565b602093848401916004358552825260405191610d488361135c565b610d506114b3565b8352600460005403610e095761018094610120610d6e610526611408565b015184515251868451015251166040825101528051906001610db76040519384610d9b89820192836119d6565b0394610daf601f19968781018352826113e5565b5190206116a8565b51610dc181611259565b610dca81611259565b03610e0057604091610dec915190610daf845191826106398a820195866119d6565b015115155b15159182910152604051908152f35b50506000610df1565b60405163100960cb60e01b815260116004820152602490fd5b3461017357602036600319011261017357610e3b611555565b50610e446117f6565b604051610e5081611377565b610e58611580565b815260208101916000835260408201610e6f611555565b8152600460005403610f4d57610e95610e86611408565b6020808251830101910161193b565b926001610ea36004356115a8565b80835251610eb081611259565b610eb981611259565b03610f34578461014094600060a097526000845152600180881b0390511660208451015280516040845101525160608351015260006080835101526001815151610f0281611259565b610f0b81611259565b03610f2a57604091505101519182915b0152610cef60405180926112d1565b5051918291610f1b565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b34610173576020366003190112610173576004356001600160a01b03811681036101735761016361016f91610f996114b3565b506114d2565b34610173576000366003190112610173576020600354604051908152f35b3461017357602036600319011261017357610fd66114b3565b5061016f6104286004356117ad565b34610173576020366003190112610173576004356001600160a01b03811690819003610173576110136117f6565b90604051906110218261135c565b6110296114b3565b82526004600054036110ae57611046600191610f99610e86611408565b8083525161105381611259565b61105c81611259565b036110955760209181600160e093515161107581611259565b61107e81611259565b03610c775751604001519182910152604051908152f35b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b6101a06110d336611243565b91906107b36110e06117f6565b8092604051906110ef82611341565b60209687830191835281526040519061110782611341565b60405161111381611341565b6000815260008982015282528782019261112b613c89565b8452518251525187825101526003825152516080825101526101b5613cfe565b60403660031901126101735761115f6117f6565b60405161116b81611341565b816107b36020938385809501600435825260243581526040519061118e82611341565b60405161119a81611341565b600081526000888201528252868201926111b2613c89565b84525182515251868251015260008251525185825101526111d1613cfe565b90600082525185820152611a36565b60203660031901126101735760206101c06111f96117f6565b6101c48160405161120981611341565b6040516112158161135c565b60008152815285810190611227613c89565b825260043581515260048251525160a0825101526101b5613cfe565b6040906003190112610173576004359060243590565b6002111561126357565b634e487b7160e01b600052602160045260246000fd5b9190916040806060830194805161128f81611259565b845260208101511515602085015201511515910152565b919091604080606083019480516112bc81611259565b84526020810151151560208501520151910152565b805182526020808201516001600160a01b0316908301526040808201519083015260608082015190830152608090810151910152565b90600182811c92168015611337575b602083101461132157565b634e487b7160e01b600052602260045260246000fd5b91607f1691611316565b604081019081106001600160401b0382111761030757604052565b602081019081106001600160401b0382111761030757604052565b606081019081106001600160401b0382111761030757604052565b61016081019081106001600160401b0382111761030757604052565b60a081019081106001600160401b0382111761030757604052565b61018081019081106001600160401b0382111761030757604052565b601f909101601f19168101906001600160401b0382119082101761030757604052565b604051906000826002549161141c83611307565b8083526001938085169081156114925750600114611444575b50611442925003836113e5565b565b60026000908152600080516020613d1b83398151915294602093509091905b81831061147a575050611442935082010138611435565b85548884018501529485019487945091830191611463565b905061144294506020925060ff191682840152151560051b82010138611435565b604051906114c082611377565b60006040838281528260208201520152565b906114db6114b3565b9160018060a01b03166000908082526005602052600160ff60408420541661150281611259565b0361154a576040929350815260056020522060016040519161152383611377565b60ff815481811661153381611259565b855260081c16151560208401520154604082015290565b508083526020830152565b60405190611562826113ae565b60006080838281528260208201528260408201528260608201520152565b6040519061158d82611377565b81600081526000602082015260406115a3611555565b910152565b906115b1611580565b9160008181526006602052604091600160ff84842054166115d181611259565b03611653578293945081526006602052208151916115ee83611377565b60ff82548181166115fe81611259565b855260081c16151560208401526005815192611619846113ae565b6001810154845260028101546001600160a01b03166020850152600381015483850152600481015460608501520154608083015282015290565b50808452602084015250565b906116686114b3565b916000908082526007602052600160ff60408420541661168781611259565b0361154a576040929350815260076020522060016040519161152383611377565b906116b16114b3565b916000908082526008602052600160ff6040842054166116d081611259565b0361154a576040929350815260086020522060ff604051916116f183611377565b548181166116fe81611259565b8352818160081c161515602084015260101c161515604082015290565b906117246114b3565b916000908082526009602052600160ff60408420541661174381611259565b0361154a576040929350815260096020522060016040519161152383611377565b9061176d6114b3565b91600090808252600a602052600160ff60408420541661178c81611259565b0361154a5760409293508152600a6020522060016040519161152383611377565b906117b66114b3565b91600090808252600b602052600160ff6040842054166117d581611259565b0361154a5760409293508152600b6020522060ff604051916116f183611377565b604051906101e082016001600160401b0381118382101761030757604052816101c06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261185e611555565b6101408201528261016082015282610180820152826101a08201520152565b51906001600160a01b038216820361017357565b6040519061018082016001600160401b0381118382101761030757604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b90600182019182811161191157821061017357565b634e487b7160e01b600052601160045260246000fd5b919082019182811161191157821061017357565b9081610160910312610173576040519061195482611392565b61195d8161187d565b82526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151908301526101208082015190830152610140809101519082015290565b5160058110156112635790565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b9190916020806040830194805184520151910152565b8115611a20570490565b634e487b7160e01b600052601260045260246000fd5b6040519092919061036081016001600160401b038111828210176103075780604052611a6181611341565b6000815260006103808301528152611a776114b3565b6020820152611a84611555565b60408201526000606082015260006080820152600060a0820152604051611aaa81611341565b600081526000602082015260c0820152611ac2611580565b60e08201526000610100820152611ad7611555565b610120820152611ae56114b3565b6101408201526000610160820152600061018082015260006101a082015260006101c0820152604051611b1781611341565b60008152600060208201526101e08201526000610200820152604051611b3c81611341565b6000815260006020820152610220820152604051611b598161135c565b60008152610240820152611b6b6114b3565b610260820152611b79611580565b610280820152611b876114b3565b6102a082015260006102c0820152611b9d611555565b6102e0820152611bab611555565b610300820152604051611bbd81611341565b6000815260006020820152610320820152611bd6611555565b61034082015260ff60045416613c245760405133815284516020820152602085015180519160058310156112635760a0610140927f5a05a7d5188bfb3a2ffa3c8addfc939b40a803afde86b8d9b53402567bcc1182946040840152602080820151805160608601520151608084015260408101511515828401526060810151151560c084015260206080820151805160e08601520151610100840152015151610120820152a1600460005403613c0b57611c91610e86611408565b9380518015908115613bff575b5015613be657611cb160208201516119c9565b60058110156112635761219157602090810151015181528351336001600160a01b039091160361218a5760005b15612171576001611cee336114d2565b80602084015251611cfe81611259565b611d0781611259565b03612158573461213f576001602082015151611d2281611259565b611d2b81611259565b03612138576040602082015101515b421161211f576040904282820151523360208383015101528051518280830151015260208151015160608383015101526000608083830151015242600052600660205281600020600160ff19825416179055015160056080604060002092805160018501556002840160018060a01b0360208301511660018060a01b0319825416179055604081015160038501556060810151600485015501519101557fc50146df3744254d2c4df384a8513863cda206482d8bf1740acc2caeb38c3e776020604051428152a17f9384f90742a1e8941753b2c7b3f2d81556a5e71f19bc0b559a37af597d6969236020604051428152a1602042910152610140611e3c611891565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015261012081015161012085015243828501520151610160830152610140604051611ec381611392565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252612008826113c9565b81516001600160401b03811161030757612023600254611307565b601f81116120cc575b50602092601f8211600114612069579281929360009261205e575b50508160011b916000199060031b1c191617600255565b015190503880612047565b601f19821693600260005260206000209160005b8681106120b4575083600195961061209b575b505050811b01600255565b015160001960f88460031b161c19169055388080612090565b9192602060018192868501518155019401920161207d565b6002600052600080516020613d1b833981519152601f830160051c81019160208410612115575b601f0160051c01905b818110612109575061202c565b600081556001016120fc565b90915081906120f3565b60405163100960cb60e01b815260206004820152602490fd5b6000611d3a565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b6001611cde565b61219e60208201516119c9565b60058110156112635760010361260657508351336001600160a01b03909116036125ff5760005b156125e657602084015134036125cd576121de336114d2565b516121e881611259565b6121f181611259565b612578575b60806040916122088387015142611927565b8282015233600052600560205282600020600160ff198254161790557ff01b311f9779b91a7fa2ba5c8138c46f4ae1acfc247c95553fa57767e0667ac783838301518060018360002001558151903382526020820152a17f49e31607e146e7dd1f7d723398a07fca09f29195776d5b2403add7fce3a320966020838301518551908152a10151910152612299611891565b9160018060a01b038151168352602081015160208401526040810151604084015260608101516060840152608081015160808401526122e160a0820151602083015190611927565b60a08401526122f360c08201516118fc565b60c084015260e081015160e08401526101008101516101008401526101208101516101208401524361014084015260206101408201519101510161016083015261014060405161234281611392565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252612487826113c9565b81516001600160401b038111610307576124a2600254611307565b601f8111612525575b50602092601f82116001146124dc579281929360009261205e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061250d575083600195961061209b57505050811b01600255565b919260206001819286850151815501940192016124f0565b6002600052600080516020613d1b833981519152601f830160051c8101916020841061256e575b601f0160051c01905b81811061256257506124ab565b60008155600101612555565b909150819061254c565b6001612583336114d2565b5161258d81611259565b61259681611259565b036121f65760406125a6336114d2565b015180606083015242116121f65760405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b60016121c5565b61261660208296939601516119c9565b600581101561126357600203612a55575034612a3e5761263e60a08201516003810490613c3d565b60a08501526060810151421115612a255760006060610140936101208401518352600a60205260408320600160ff198254161790556001612683610120860151611764565b5161268d81611259565b61269681611259565b148314612a1c576126be60406126b0610120870151611764565b01515b60a089015190611927565b6101208501518452600a60205260016040852001557f22393b527bdbf9b348ee4129f2a13cd63b7a78bf3bc7786a69eb3e3b74b799c26020610120860151604051908152a17fb3ddfa7c4c510daae61e290d4f49d156ce4429329a35bfc977bac0c6e8f4b4146020604051858152a1015261279561273a611891565b9460018060a01b0383511686526020830151602087015260408301516040870152612769604084015142611927565b6060870152612781608084015160a083015190611927565b608087015260a08084015191015190613c3d565b60a085015260c081015160c085015260e081015160e085015260006101008501526127c46101208201516118fc565b610120850152438285015201516101608301526101406040516127e681611392565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261292b826113c9565b81516001600160401b03811161030757612946600254611307565b601f81116129c9575b50602092601f8211600114612980579281929360009261205e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106129b1575083600195961061209b57505050811b01600255565b91926020600181928685015181550194019201612994565b6002600052600080516020613d1b833981519152601f830160051c81019160208410612a12575b601f0160051c01905b818110612a06575061294f565b600081556001016129f9565b90915081906129f0565b6126be836126b3565b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b612a666020829694939601516119c9565b60058110156112635760030361334c5760806020612a8e92015101518060c0850152516115a8565b60e083019081526000610100840181815261012085018051839052875181516001600160a01b039091166020909101528151815160400152905181516060015251608001525151600190612ae181611259565b612aea81611259565b0361334157604060e083015101515b602001516001600160a01b03163303613328576001612b17336114d2565b51612b2181611259565b612b2a81611259565b0361330f57600160e083015151612b4081611259565b612b4981611259565b036132f657602060c083015101516101408301515260c082015151602061014084015101523360406101408401510152612bb1612b97612ba5610140850151604051928391602083016119d6565b03601f1981018352826113e5565b602081519101206117ad565b51612bbb81611259565b612bc481611259565b6132dd576001612bdb602060c08501510151611764565b51612be581611259565b612bee81611259565b036132d6576040612c06602060c08501510151611764565b01515b6101608301526001612c22602060c0850151015161171b565b51612c2c81611259565b612c3581611259565b036132cf576040612c4d602060c0850151015161171b565b01515b8061018084015215806101a08401526000146132415760006101c08301525b6101c082015161016083015110613228576101408401516101c08301511161320f57346131f6576101a0820151156131545760006102008301525b6102008201516101608301511061313b5761014084015161020083015111613122576000808080610200860151818115613119575b3390f11561310d57610140820151604051612d0281612b976020820194856119d6565b519020600052600b602052604060002060ff1990600182825416179055610140830151604051612d3a81612b976020820194856119d6565b519020600052600b60205260406000206201000062ff000019825416179055602060c08401510151600052600a6020526001604060002091825416179055612d8d61016083015161020084015190613c3d565b602060c08401510151600052600a6020526001604060002001557f6aa35f8fbfa97661b0ad449ba66aca95b0a4eebb14e52af30f0f3574a4c79153608060c0840151602081519101516102008601519060405192338452602084015260408301526060820152a17fac876d777668b19ef76822ffd0dee73c2655bddf9224d0782707e50d8f2104b16020610200840151604051908152a16101a0610200830151910152610200610140612e3e611891565b9460018060a01b038151168652602081015160208701526040810151604087015260608101516060870152612e7b60808201518486015190613c3d565b608087015260a081015160a087015260c081015160c087015260e081015160e0870152610100810151610100870152610120810151610120870152438287015201519101519003610160830152610140604051612ed781611392565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261301c826113c9565b81516001600160401b03811161030757613037600254611307565b601f81116130ba575b50602092601f8211600114613071579281929360009261205e5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106130a2575083600195961061209b57505050811b01600255565b91926020600181928685015181550194019201613085565b6002600052600080516020613d1b833981519152601f830160051c81019160208410613103575b601f0160051c01905b8181106130f75750613040565b600081556001016130ea565b90915081906130e1565b6040513d6000823e3d90fd5b506108fc612cdf565b60405163100960cb60e01b8152602e6004820152602490fd5b60405163100960cb60e01b8152602d6004820152602490fd5b602060c083015101516102208301515260c082015151602061022084015101526131e36131d761016084015160016131a06102208701516040516105fb81612b97602082019485611a00565b516131aa81611259565b6131b381611259565b036131ee57604061064561022087015182516105fb81612b97602082019485611a00565b61018084015190611a16565b610200830152612caa565b600090613c4a565b60405163100960cb60e01b8152602c6004820152602490fd5b60405163100960cb60e01b8152602b6004820152602490fd5b60405163100960cb60e01b8152602a6004820152602490fd5b602060c083015101516101e08301515260c08201515160206101e084015101526132c46131d7610160840151600161328d6101e08701516040516105fb81612b97602082019485611a00565b5161329781611259565b6132a081611259565b036131ee5760406106456101e087015182516105fb81612b97602082019485611a00565b6101c0830152612c6f565b6000612c50565b6000612c09565b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b610120820151612af9565b61335c60208294939401516119c9565b600581101561126357600414613374575b5050509050565b6020015160a001516102408201528351336001600160a01b0390911603613bdf5760005b15613bc65760016133a8336114d2565b80610260840152516133b981611259565b6133c281611259565b03613bad5760016133d8610240830151516115a8565b80610280840152516133e981611259565b6133f281611259565b03613b94576101208401516102a0820151526102408101515160206102a083015101523360406102a0830151015261344a612b9761343e6102a0840151604051928391602083016119d6565b602081519101206116a8565b5161345481611259565b61345d81611259565b613b7b5734613b625760016102608201515161347881611259565b61348181611259565b03613b5b57604061026082015101515b4211613b42576000917fb091fe3ff5bcc354914ab49469d6febeeec7ad0134e4f94bb8c834da0c391c9f606061024084866102c06101c0970152866102e08201515260018060a01b0389511660206102e083015101526102c081015160406102e083015101526102c0810151836102e083015101528660806102e0830151015260016102808201515161352381611259565b61352c81611259565b148714613b3757604061028082015101515b6103008201526101208901516103208201515281810151516020610320830151015261032081015160405161357b81612b97602082019485611a00565b519020875260076020526040872060ff199060018282541617905560016135b66103208401516040516105fb81612b97602082019485611a00565b516135c081611259565b6135c981611259565b148814613b2e576135f960406135f261032085015182516105fb81612b97602082019485611a00565b01516118fc565b61032083015160405161361481612b97602082019485611a00565b51902089526007602052600160408a2001556102a082015160405161364181612b976020820194856119d6565b51902088526008602052604088206001828254161790556102a082015160405161367381612b976020820194856119d6565b51902088526008602052604088206201000062ff0000198254161790556101208a0151885260096020526040882060018282541617905560016136ba6101208c015161171b565b516136c481611259565b6136cd81611259565b148814613b25576136e760406135f26101208d015161171b565b6101208b015189526009602052600160408a200155610300820151516103408301515260018060a01b03602061030084015101511660206103408401510152604061030083015101516040610340840151015283610300830151015184610340840151015261375e608061030084015101516118fc565b6080610340840151015282820151518852600660205260016040892091825416179055610340810151828201515188526005608060408a2092805160018501556002840160018060a01b0360208301511660018060a01b03198254161790556040810151600385015586810151600485015501519101550151516101208801516040519133835260208301526040820152a17f414abbcdeac46fe7c8b5974205e77c440cfbed93cb78e22e517b4d81f34e1fb06020604051858152a10152610140613827611891565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015261387d60e08201516118fc565b60e08501526138906101008201516118fc565b610100850152610120810151610120850152438285015201516101608301526101406040516138be81611392565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252613a03826113c9565b81516001600160401b03811161030757613a1e600254611307565b601f8111613ad2575b50602092601f8211600114613a6c5792819293600092613a61575b50508160011b916000199060031b1c1916176002555b8038808061336d565b015190503880613a42565b601f19821693600260005260206000209160005b868110613aba5750836001959610613aa1575b505050811b01600255613a58565b015160001960f88460031b161c19169055388080613a93565b91926020600181928685015181550194019201613a80565b6002600052600080516020613d1b833981519152601f830160051c81019160208410613b1b575b601f0160051c01905b818110613b0f5750613a27565b60008155600101613b02565b9091508190613af9565b6136e7886118fc565b6135f9886118fc565b6102e081015161353e565b60405163100960cb60e01b815260346004820152602490fd5b6000613491565b60405163100960cb60e01b815260336004820152602490fd5b60405163100960cb60e01b815260326004820152602490fd5b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b6001613398565b60405163100960cb60e01b8152601c6004820152602490fd5b90506001541438611c9e565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b9081039081116119115790565b600092918015918215613c61575b50501561017357565b91509250806000190483118115151661191157613c818382029384611a16565b143880613c58565b60408051919060c083016001600160401b0381118482101761030757815260a0836000928382528051613cbb81611341565b848152846020820152602083015283818301528360608301528051613cdf81611341565b84815284602082015260808301525192613cf88461135c565b83520152565b60405190613d0b82611341565b816000815260206115a3613c8956fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 16668,
  version: 9,
  views: {},
}
export const _stateSourceMap = {
  1: {
    at: './index.rsh:78:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:297:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:92:21:after expr stmt semicolon',
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
