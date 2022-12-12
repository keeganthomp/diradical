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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async () => {
        const v4032 = stdlib.safeAdd(v3982, v3981)

        return v4032
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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async () => {
        return v3986
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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async () => {
        return v3969
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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async (_v4033) => {
        const v4033 = stdlib.protect(ctc0, _v4033, null)

        const v4034 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v4033),
          null,
        )
        const v4035 = {
          None: 0,
          Some: 1,
        }[v4034[0]]
        const v4036 = stdlib.eq(
          v4035,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4036, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:141:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:140:29:application call to [unknown function] (defined at: ./index.rsh:140:29:application)',
          ],
          msg: 'is member',
          who: 'Module',
        })
        const v4039 = stdlib.fromSome(
          v4034,
          stdlib.checkedBigNumberify(
            './index.rsh:142:43:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v4039
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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async () => {
        return v3980
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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async (_v4022) => {
        const v4022 = stdlib.protect(ctc1, _v4022, null)

        const v4023 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, v4022),
          null,
        )
        const v4024 = {
          None: 0,
          Some: 1,
        }[v4023[0]]
        const v4025 = stdlib.eq(
          v4024,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4025, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:133:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:132:20:application call to [unknown function] (defined at: ./index.rsh:132:20:application)',
          ],
          msg: 'song exists',
          who: 'Module',
        })
        const v4028 = '                                '
        const v4030 = {
          art: v4028,
          audio: v4028,
          creator: v3968,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v4031 = stdlib.fromSome(v4023, v4030)

        return v4031
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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async (_v4040, _v4041) => {
        const v4040 = stdlib.protect(ctc1, _v4040, null)
        const v4041 = stdlib.protect(ctc1, _v4041, null)

        const v4042 = stdlib.protect(
          map5_ctc,
          await viewlib.viewMapRef(5, v4041),
          null,
        )
        const v4043 = stdlib.fromSome(
          v4042,
          stdlib.checkedBigNumberify(
            './index.rsh:105:63:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4044 = stdlib.protect(
          map4_ctc,
          await viewlib.viewMapRef(4, v4041),
          null,
        )
        const v4045 = stdlib.fromSome(
          v4044,
          stdlib.checkedBigNumberify(
            './index.rsh:108:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4046 = stdlib.eq(
          v4045,
          stdlib.checkedBigNumberify(
            './index.rsh:110:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v4047
        if (v4046) {
          v4047 = stdlib.checkedBigNumberify(
            './index.rsh:111:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v4048 = [v4041, v4040]
          const v4049 = stdlib.protect(
            map2_ctc,
            await viewlib.viewMapRef(2, stdlib.digest([ctc4], [v4048])),
            null,
          )
          const v4050 = stdlib.fromSome(
            v4049,
            stdlib.checkedBigNumberify(
              './index.rsh:114:50:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v4051 = stdlib.safeMuldiv(v4043, v4050, v4045)
          v4047 = v4051
        }

        return v4047
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
      const [v3968, v3969, v3970] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3968,
        v3969,
        v3970,
        v3980,
        v3981,
        v3982,
        v3983,
        v3984,
        v3985,
        v3986,
        v3994,
      ] = svs
      return await (async (_v4052, _v4053) => {
        const v4052 = stdlib.protect(ctc1, _v4052, null)
        const v4053 = stdlib.protect(ctc0, _v4053, null)

        const v4054 = [v3986, v4052, v4053]
        const v4055 = stdlib.protect(
          map3_ctc,
          await viewlib.viewMapRef(3, stdlib.digest([ctc6], [v4054])),
          null,
        )
        const v4056 = stdlib.fromSome(v4055, false)

        return v4056
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
    addSong0_555: ctc9,
    buyMembership0_555: ctc10,
    endVotingPeriod0_555: ctc10,
    receivePayout0_555: ctc11,
    vote0_555: ctc12,
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

  const v3964 = stdlib.protect(
    ctc1,
    interact.membershipCost,
    "for Deployer's interact field membershipCost",
  )
  const v3965 = stdlib.protect(
    ctc1,
    interact.periodLength,
    "for Deployer's interact field periodLength",
  )

  const txn1 = await ctc.sendrecv({
    args: [v3964, v3965],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:54:5:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [ctc1, ctc1],
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
        data: [v3969, v3970],
        secs: v3972,
        time: v3971,
        didSend: v29,
        from: v3968,
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
    data: [v3969, v3970],
    secs: v3972,
    time: v3971,
    didSend: v29,
    from: v3968,
  } = txn1
  const txn2 = await ctc.sendrecv({
    args: [v3968, v3969, v3970],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3971,
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
        secs: v3975,
        time: v3974,
        didSend: v34,
        from: v3973,
      } = txn2

      const v3979 = stdlib.safeAdd(v3975, v3970)
      const v3980 = v3979
      const v3981 = stdlib.checkedBigNumberify(
        './index.rsh:91:29:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3982 = stdlib.checkedBigNumberify(
        './index.rsh:91:26:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3983 = stdlib.checkedBigNumberify(
        './index.rsh:91:23:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3984 = stdlib.checkedBigNumberify(
        './index.rsh:91:65:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3985 = stdlib.checkedBigNumberify(
        './index.rsh:91:62:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3986 = stdlib.checkedBigNumberify(
        './index.rsh:91:32:decimal',
        stdlib.UInt_max,
        '1',
      )
      const v3987 = v3974
      const v3994 = stdlib.checkedBigNumberify(
        './index.rsh:49:9:after expr stmt semicolon',
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
    secs: v3975,
    time: v3974,
    didSend: v34,
    from: v3973,
  } = txn2
  const v3976 = stdlib.addressEq(v3968, v3973)
  stdlib.assert(v3976, {
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

  const v3979 = stdlib.safeAdd(v3975, v3970)
  let v3980 = v3979
  let v3981 = stdlib.checkedBigNumberify(
    './index.rsh:91:29:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3982 = stdlib.checkedBigNumberify(
    './index.rsh:91:26:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3983 = stdlib.checkedBigNumberify(
    './index.rsh:91:23:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3984 = stdlib.checkedBigNumberify(
    './index.rsh:91:65:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3985 = stdlib.checkedBigNumberify(
    './index.rsh:91:62:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3986 = stdlib.checkedBigNumberify(
    './index.rsh:91:32:decimal',
    stdlib.UInt_max,
    '1',
  )
  let v3987 = v3974
  let v3994 = stdlib.checkedBigNumberify(
    './index.rsh:49:9:after expr stmt semicolon',
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
      data: [v4305],
      secs: v4307,
      time: v4306,
      didSend: v3467,
      from: v4304,
    } = txn4
    switch (v4305[0]) {
      case 'addSong0_555': {
        const v4308 = v4305[1]
        undefined /* setApiDetails */
        const v4315 = stdlib.addressEq(v4304, v3968)
        const v4316 = v4315 ? false : true
        stdlib.assert(v4316, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:183:35:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v4318 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4304),
          null,
        )
        const v4319 = {
          None: 0,
          Some: 1,
        }[v4318[0]]
        const v4320 = stdlib.eq(
          v4319,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4320, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:185:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
            'at ./index.rsh:183:35:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v4422 =
          v4308[
            stdlib.checkedBigNumberify(
              './index.rsh:183:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v4423 =
          v4308[
            stdlib.checkedBigNumberify(
              './index.rsh:183:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v4436 = stdlib.fromSome(
          v4318,
          stdlib.checkedBigNumberify(
            './index.rsh:97:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4437 = stdlib.le(v4307, v4436)
        stdlib.assert(v4437, {
          at: './index.rsh:98:16:application',
          fs: [
            'at ./index.rsh:189:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
            'at ./index.rsh:188:16:application call to [unknown function] (defined at: ./index.rsh:188:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v4438 = v4307
        const v4440 = {
          art: v4422,
          audio: v4423,
          creator: v4304,
          id: v4307,
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        await stdlib.mapSet(map1, v4307, v4440)
        null
        await txn4.getOutput('addSong', 'v4438', ctc1, v4438)
        const cv3980 = v3980
        const cv3981 = v3981
        const cv3982 = v3982
        const cv3983 = v3983
        const cv3984 = v3984
        const cv3985 = v3985
        const cv3986 = v3986
        const cv3987 = v4306
        const cv3994 = v3994

        v3980 = cv3980
        v3981 = cv3981
        v3982 = cv3982
        v3983 = cv3983
        v3984 = cv3984
        v3985 = cv3985
        v3986 = cv3986
        v3987 = cv3987
        v3994 = cv3994

        txn3 = txn4
        continue
        break
      }
      case 'buyMembership0_555': {
        const v4610 = v4305[1]
        undefined /* setApiDetails */
        const v4628 = stdlib.addressEq(v4304, v3968)
        const v4629 = v4628 ? false : true
        stdlib.assert(v4629, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:154:31:application call to [unknown function] (defined at: ./index.rsh:154:31:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:154:31:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v4722 = stdlib.add(v3994, v3969)
        const v4756 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4304),
          null,
        )
        switch (v4756[0]) {
          case 'None': {
            const v4757 = v4756[1]

            break
          }
          case 'Some': {
            const v4758 = v4756[1]
            const v4759 = stdlib.gt(v4307, v4758)
            stdlib.assert(v4759, {
              at: './index.rsh:165:22:application',
              fs: [
                'at ./index.rsh:160:16:application call to [unknown function] (defined at: ./index.rsh:160:16:function exp)',
              ],
              msg: 'membership expired',
              who: 'Deployer',
            })

            break
          }
        }
        const v4760 = stdlib.safeAdd(v4307, v3970)
        await stdlib.mapSet(map0, v4304, v4760)
        null
        await txn4.getOutput('buyMembership', 'v4760', ctc1, v4760)
        const v4766 = stdlib.safeAdd(
          v3983,
          stdlib.checkedBigNumberify(
            './index.rsh:172:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v4767 = stdlib.safeAdd(v3982, v3969)
        const cv3980 = v3980
        const cv3981 = v3981
        const cv3982 = v4767
        const cv3983 = v4766
        const cv3984 = v3984
        const cv3985 = v3985
        const cv3986 = v3986
        const cv3987 = v4306
        const cv3994 = v4722

        v3980 = cv3980
        v3981 = cv3981
        v3982 = cv3982
        v3983 = cv3983
        v3984 = cv3984
        v3985 = cv3985
        v3986 = cv3986
        v3987 = cv3987
        v3994 = cv3994

        txn3 = txn4
        continue
        break
      }
      case 'endVotingPeriod0_555': {
        const v4912 = v4305[1]
        undefined /* setApiDetails */
        const v4941 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v3986),
          null,
        )
        const v4942 = stdlib.fromSome(
          v4941,
          stdlib.checkedBigNumberify(
            './index.rsh:239:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4943 = stdlib.eq(
          v4942,
          stdlib.checkedBigNumberify(
            './index.rsh:240:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5073 = stdlib.gt(v4307, v3980)
        let v5077
        if (v4943) {
          v5077 = stdlib.checkedBigNumberify(
            './index.rsh:240:48:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5078 = stdlib.safeDiv(
            v3982,
            stdlib.checkedBigNumberify(
              './index.rsh:240:64:decimal',
              stdlib.UInt_max,
              '3',
            ),
          )
          v5077 = v5078
        }
        let v5080
        if (v4943) {
          v5080 = stdlib.checkedBigNumberify(
            './index.rsh:241:48:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5081 = stdlib.safeSub(v3982, v5077)
          v5080 = v5081
        }
        stdlib.assert(v5073, {
          at: './index.rsh:245:18:application',
          fs: [
            'at ./index.rsh:244:16:application call to [unknown function] (defined at: ./index.rsh:244:16:function exp)',
          ],
          msg: 'voting period over',
          who: 'Deployer',
        })
        const v5082 = stdlib.safeAdd(v4942, v5080)
        await stdlib.mapSet(map5, v3986, v5082)
        null
        const v5083 = null
        await txn4.getOutput('endVotingPeriod', 'v5083', ctc0, v5083)
        const v5089 = stdlib.safeSub(v3982, v5080)
        const v5090 = stdlib.safeAdd(v3981, v5080)
        const v5091 = stdlib.safeAdd(
          v3986,
          stdlib.checkedBigNumberify(
            './index.rsh:253:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5092 = stdlib.safeAdd(v4307, v3970)
        const cv3980 = v5092
        const cv3981 = v5090
        const cv3982 = v5089
        const cv3983 = v3983
        const cv3984 = v3984
        const cv3985 = stdlib.checkedBigNumberify(
          './index.rsh:255:13:decimal',
          stdlib.UInt_max,
          '0',
        )
        const cv3986 = v5091
        const cv3987 = v4306
        const cv3994 = v3994

        v3980 = cv3980
        v3981 = cv3981
        v3982 = cv3982
        v3983 = cv3983
        v3984 = cv3984
        v3985 = cv3985
        v3986 = cv3986
        v3987 = cv3987
        v3994 = cv3994

        txn3 = txn4
        continue
        break
      }
      case 'receivePayout0_555': {
        const v5214 = v4305[1]
        undefined /* setApiDetails */
        const v5255 =
          v5214[
            stdlib.checkedBigNumberify(
              './index.rsh:261:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5256 =
          v5214[
            stdlib.checkedBigNumberify(
              './index.rsh:261:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v5257 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v5255),
          null,
        )
        const v5258 = '                                '
        const v5260 = {
          art: v5258,
          audio: v5258,
          creator: v3968,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v5261 = stdlib.fromSome(v5257, v5260)
        const v5264 = v5261.creator
        const v5268 = stdlib.addressEq(v4304, v5264)
        stdlib.assert(v5268, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not song creator',
          who: 'Deployer',
        })
        const v5270 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4304),
          null,
        )
        const v5271 = {
          None: 0,
          Some: 1,
        }[v5270[0]]
        const v5272 = stdlib.eq(
          v5271,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5272, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:264:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
            'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5275 = {
          None: 0,
          Some: 1,
        }[v5257[0]]
        const v5276 = stdlib.eq(
          v5275,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5276, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v5278 = [v5256, v5255, v4304]
        const v5279 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, stdlib.digest([ctc14], [v5278])),
          null,
        )
        const v5280 = {
          None: 0,
          Some: 1,
        }[v5279[0]]
        const v5281 = stdlib.eq(
          v5280,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v5281, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'has received payout',
          who: 'Deployer',
        })
        const v5283 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v5256),
          null,
        )
        const v5284 = stdlib.fromSome(
          v5283,
          stdlib.checkedBigNumberify(
            './index.rsh:270:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5287 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v5256),
          null,
        )
        const v5288 = stdlib.fromSome(
          v5287,
          stdlib.checkedBigNumberify(
            './index.rsh:108:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5289 = stdlib.eq(
          v5288,
          stdlib.checkedBigNumberify(
            './index.rsh:110:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v5290
        if (v5289) {
          v5290 = stdlib.checkedBigNumberify(
            './index.rsh:111:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5291 = [v5256, v5255]
          const v5292 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, stdlib.digest([ctc11], [v5291])),
            null,
          )
          const v5293 = stdlib.fromSome(
            v5292,
            stdlib.checkedBigNumberify(
              './index.rsh:114:50:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5294 = stdlib.safeMuldiv(v5284, v5293, v5288)
          v5290 = v5294
        }
        const v5295 = stdlib.le(v5290, v5284)
        stdlib.assert(v5295, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v5298 = stdlib.ge(v3994, v5290)
        stdlib.assert(v5298, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        let v5432
        if (v5289) {
          v5432 = stdlib.checkedBigNumberify(
            './index.rsh:111:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5433 = [v5256, v5255]
          const v5434 = stdlib.protect(
            map2_ctc,
            await stdlib.mapRef(map2, stdlib.digest([ctc11], [v5433])),
            null,
          )
          const v5435 = stdlib.fromSome(
            v5434,
            stdlib.checkedBigNumberify(
              './index.rsh:114:50:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5436 = stdlib.safeMuldiv(v5284, v5435, v5288)
          v5432 = v5436
        }
        const v5437 = stdlib.le(v5432, v5284)
        stdlib.assert(v5437, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:276:16:application call to [unknown function] (defined at: ./index.rsh:276:16:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v5440 = stdlib.ge(v3994, v5432)
        stdlib.assert(v5440, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:276:16:application call to [unknown function] (defined at: ./index.rsh:276:16:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        const v5447 = stdlib.sub(v3994, v5432)
        await stdlib.mapSet(map6, stdlib.digest([ctc14], [v5278]), true)
        const v5449 = stdlib.safeSub(v5284, v5432)
        await stdlib.mapSet(map5, v5256, v5449)
        null
        await txn4.getOutput('receivePayout', 'v5432', ctc1, v5432)
        const v5457 = stdlib.safeSub(v3981, v5432)
        const cv3980 = v3980
        const cv3981 = v5457
        const cv3982 = v3982
        const cv3983 = v3983
        const cv3984 = v3984
        const cv3985 = v3985
        const cv3986 = v3986
        const cv3987 = v4306
        const cv3994 = v5447

        v3980 = cv3980
        v3981 = cv3981
        v3982 = cv3982
        v3983 = cv3983
        v3984 = cv3984
        v3985 = cv3985
        v3986 = cv3986
        v3987 = cv3987
        v3994 = cv3994

        txn3 = txn4
        continue
        break
      }
      case 'vote0_555': {
        const v5516 = v4305[1]
        undefined /* setApiDetails */
        const v5606 =
          v5516[
            stdlib.checkedBigNumberify(
              './index.rsh:212:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5607 = stdlib.addressEq(v4304, v3968)
        const v5608 = v5607 ? false : true
        stdlib.assert(v5608, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5610 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4304),
          null,
        )
        const v5611 = {
          None: 0,
          Some: 1,
        }[v5610[0]]
        const v5612 = stdlib.eq(
          v5611,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5612, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:214:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
            'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5614 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v5606),
          null,
        )
        const v5615 = {
          None: 0,
          Some: 1,
        }[v5614[0]]
        const v5616 = stdlib.eq(
          v5615,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5616, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:215:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'song does not exist',
          who: 'Deployer',
        })
        const v5618 = [v3986, v5606, v4304]
        const v5619 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc14], [v5618])),
          null,
        )
        const v5620 = {
          None: 0,
          Some: 1,
        }[v5619[0]]
        const v5621 = stdlib.eq(
          v5620,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v5621, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:216:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
            'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
          ],
          msg: 'has voted',
          who: 'Deployer',
        })
        const v5783 = stdlib.fromSome(
          v5610,
          stdlib.checkedBigNumberify(
            './index.rsh:97:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5784 = stdlib.le(v4307, v5783)
        stdlib.assert(v5784, {
          at: './index.rsh:98:16:application',
          fs: [
            'at ./index.rsh:220:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
            'at ./index.rsh:219:16:application call to [unknown function] (defined at: ./index.rsh:219:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v5786 = '                                '
        const v5788 = {
          art: v5786,
          audio: v5786,
          creator: v3968,
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        }
        const v5789 = stdlib.fromSome(v5614, v5788)
        const v5790 = v5789.art
        const v5791 = v5789.audio
        const v5792 = v5789.creator
        const v5793 = v5789.id
        const v5794 = v5789.votes
        const v5796 = [v3986, v5606]
        const v5797 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc11], [v5796])),
          null,
        )
        const v5798 = stdlib.fromSome(
          v5797,
          stdlib.checkedBigNumberify(
            './index.rsh:121:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5800 = stdlib.safeAdd(
          v5798,
          stdlib.checkedBigNumberify(
            './index.rsh:122:45:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map2, stdlib.digest([ctc11], [v5796]), v5800)
        await stdlib.mapSet(map3, stdlib.digest([ctc14], [v5618]), true)
        const v5802 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, v3986),
          null,
        )
        const v5803 = stdlib.fromSome(
          v5802,
          stdlib.checkedBigNumberify(
            './index.rsh:125:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5804 = stdlib.safeAdd(
          v5803,
          stdlib.checkedBigNumberify(
            './index.rsh:125:59:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map4, v3986, v5804)
        const v5805 = stdlib.safeAdd(
          v5794,
          stdlib.checkedBigNumberify(
            './index.rsh:128:31:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5806 = {
          art: v5790,
          audio: v5791,
          creator: v5792,
          id: v5793,
          votes: v5805,
        }
        await stdlib.mapSet(map1, v5606, v5806)
        null
        const v5808 = null
        await txn4.getOutput('vote', 'v5808', ctc0, v5808)
        const v5815 = stdlib.safeAdd(
          v3985,
          stdlib.checkedBigNumberify(
            './index.rsh:230:30:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5816 = stdlib.safeAdd(
          v3984,
          stdlib.checkedBigNumberify(
            './index.rsh:231:26:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv3980 = v3980
        const cv3981 = v3981
        const cv3982 = v3982
        const cv3983 = v3983
        const cv3984 = v5816
        const cv3985 = v5815
        const cv3986 = v3986
        const cv3987 = v4306
        const cv3994 = v3994

        v3980 = cv3980
        v3981 = cv3981
        v3982 = cv3982
        v3983 = cv3983
        v3984 = cv3984
        v3985 = cv3985
        v3986 = cv3986
        v3987 = cv3987
        v3994 = cv3994

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
    addSong0_555: ctc9,
    buyMembership0_555: ctc10,
    endVotingPeriod0_555: ctc10,
    receivePayout0_555: ctc11,
    vote0_555: ctc12,
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
    v3968,
    v3969,
    v3970,
    v3980,
    v3981,
    v3982,
    v3983,
    v3984,
    v3985,
    v3986,
    v3994,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4070 = ctc.selfAddress()
  const v4072 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:183:35:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
      'at ./index.rsh:91:21:application call to "runaddSong0_555" (defined at: ./index.rsh:183:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'addSong',
  })
  const v4077 = stdlib.addressEq(v4070, v3968)
  const v4078 = v4077 ? false : true
  stdlib.assert(v4078, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:183:35:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
      'at ./index.rsh:91:21:application call to "runaddSong0_555" (defined at: ./index.rsh:183:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'addSong',
  })
  const v4080 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4070), null)
  const v4081 = {
    None: 0,
    Some: 1,
  }[v4080[0]]
  const v4082 = stdlib.eq(
    v4081,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4082, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:185:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
      'at ./index.rsh:183:35:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
      'at ./index.rsh:91:21:application call to "runaddSong0_555" (defined at: ./index.rsh:183:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'is member',
    who: 'addSong',
  })
  const v4091 = ['addSong0_555', v4072]

  const txn1 = await ctc.sendrecv({
    args: [
      v3968,
      v3969,
      v3970,
      v3980,
      v3981,
      v3982,
      v3983,
      v3984,
      v3985,
      v3986,
      v3994,
      v4091,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:187:10:decimal',
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
        data: [v4305],
        secs: v4307,
        time: v4306,
        didSend: v3467,
        from: v4304,
      } = txn1

      switch (v4305[0]) {
        case 'addSong0_555': {
          const v4308 = v4305[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'addSong',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4304),
            null,
          )
          const v4422 =
            v4308[
              stdlib.checkedBigNumberify(
                './index.rsh:183:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v4423 =
            v4308[
              stdlib.checkedBigNumberify(
                './index.rsh:183:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v4438 = v4307
          const v4440 = {
            art: v4422,
            audio: v4423,
            creator: v4304,
            id: v4307,
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          await stdlib.simMapSet(sim_r, 1, v4307, v4440)
          null
          const v4441 = await txn1.getOutput('addSong', 'v4438', ctc1, v4438)

          const v11606 = v3980
          const v11607 = v3981
          const v11608 = v3982
          const v11609 = v3983
          const v11610 = v3984
          const v11611 = v3985
          const v11612 = v3986
          const v11614 = v3994
          sim_r.isHalt = false

          break
        }
        case 'buyMembership0_555': {
          const v4610 = v4305[1]

          break
        }
        case 'endVotingPeriod0_555': {
          const v4912 = v4305[1]

          break
        }
        case 'receivePayout0_555': {
          const v5214 = v4305[1]

          break
        }
        case 'vote0_555': {
          const v5516 = v4305[1]

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
    data: [v4305],
    secs: v4307,
    time: v4306,
    didSend: v3467,
    from: v4304,
  } = txn1
  switch (v4305[0]) {
    case 'addSong0_555': {
      const v4308 = v4305[1]
      undefined /* setApiDetails */
      const v4315 = stdlib.addressEq(v4304, v3968)
      const v4316 = v4315 ? false : true
      stdlib.assert(v4316, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:183:35:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'addSong',
      })
      const v4318 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4304),
        null,
      )
      const v4319 = {
        None: 0,
        Some: 1,
      }[v4318[0]]
      const v4320 = stdlib.eq(
        v4319,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v4320, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:185:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
          'at ./index.rsh:183:35:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:183:35:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'is member',
        who: 'addSong',
      })
      const v4422 =
        v4308[
          stdlib.checkedBigNumberify(
            './index.rsh:183:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v4423 =
        v4308[
          stdlib.checkedBigNumberify(
            './index.rsh:183:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v4436 = stdlib.fromSome(
        v4318,
        stdlib.checkedBigNumberify(
          './index.rsh:97:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v4437 = stdlib.le(v4307, v4436)
      stdlib.assert(v4437, {
        at: './index.rsh:98:16:application',
        fs: [
          'at ./index.rsh:189:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
          'at ./index.rsh:188:16:application call to [unknown function] (defined at: ./index.rsh:188:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'addSong',
      })
      const v4438 = v4307
      const v4440 = {
        art: v4422,
        audio: v4423,
        creator: v4304,
        id: v4307,
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      await stdlib.mapSet(map1, v4307, v4440)
      null
      const v4441 = await txn1.getOutput('addSong', 'v4438', ctc1, v4438)
      if (v3467) {
        stdlib.protect(ctc0, await interact.out(v4308, v4441), {
          at: './index.rsh:183:11:application',
          fs: [
            'at ./index.rsh:183:11:application call to [unknown function] (defined at: ./index.rsh:183:11:function exp)',
            'at ./index.rsh:199:17:application call to "notify" (defined at: ./index.rsh:188:16:function exp)',
            'at ./index.rsh:188:16:application call to [unknown function] (defined at: ./index.rsh:188:16:function exp)',
          ],
          msg: 'out',
          who: 'addSong',
        })
      } else {
      }

      const v11606 = v3980
      const v11607 = v3981
      const v11608 = v3982
      const v11609 = v3983
      const v11610 = v3984
      const v11611 = v3985
      const v11612 = v3986
      const v11614 = v3994
      return

      break
    }
    case 'buyMembership0_555': {
      const v4610 = v4305[1]
      return
      break
    }
    case 'endVotingPeriod0_555': {
      const v4912 = v4305[1]
      return
      break
    }
    case 'receivePayout0_555': {
      const v5214 = v4305[1]
      return
      break
    }
    case 'vote0_555': {
      const v5516 = v4305[1]
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
    addSong0_555: ctc10,
    buyMembership0_555: ctc9,
    endVotingPeriod0_555: ctc9,
    receivePayout0_555: ctc11,
    vote0_555: ctc12,
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
    v3968,
    v3969,
    v3970,
    v3980,
    v3981,
    v3982,
    v3983,
    v3984,
    v3985,
    v3986,
    v3994,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4057 = ctc.selfAddress()
  const v4059 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:154:31:application call to [unknown function] (defined at: ./index.rsh:154:31:function exp)',
      'at ./index.rsh:91:21:application call to "runbuyMembership0_555" (defined at: ./index.rsh:154:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'buyMembership',
  })
  const v4060 = stdlib.addressEq(v4057, v3968)
  const v4061 = v4060 ? false : true
  stdlib.assert(v4061, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:154:31:application call to [unknown function] (defined at: ./index.rsh:154:31:function exp)',
      'at ./index.rsh:91:21:application call to "runbuyMembership0_555" (defined at: ./index.rsh:154:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'buyMembership',
  })
  const v4068 = ['buyMembership0_555', v4059]

  const txn1 = await ctc.sendrecv({
    args: [
      v3968,
      v3969,
      v3970,
      v3980,
      v3981,
      v3982,
      v3983,
      v3984,
      v3985,
      v3986,
      v3994,
      v4068,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3969, []],
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
        data: [v4305],
        secs: v4307,
        time: v4306,
        didSend: v3467,
        from: v4304,
      } = txn1

      switch (v4305[0]) {
        case 'addSong0_555': {
          const v4308 = v4305[1]

          break
        }
        case 'buyMembership0_555': {
          const v4610 = v4305[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'buyMembership',
          })
          const v4722 = stdlib.add(v3994, v3969)
          sim_r.txns.push({
            amt: v3969,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4304),
            null,
          )
          const v4760 = stdlib.safeAdd(v4307, v3970)
          await stdlib.simMapSet(sim_r, 0, v4304, v4760)
          null
          const v4761 = await txn1.getOutput(
            'buyMembership',
            'v4760',
            ctc1,
            v4760,
          )

          const v4766 = stdlib.safeAdd(
            v3983,
            stdlib.checkedBigNumberify(
              './index.rsh:172:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v4767 = stdlib.safeAdd(v3982, v3969)
          const v11660 = v3980
          const v11661 = v3981
          const v11662 = v4767
          const v11663 = v4766
          const v11664 = v3984
          const v11665 = v3985
          const v11666 = v3986
          const v11668 = v4722
          sim_r.isHalt = false

          break
        }
        case 'endVotingPeriod0_555': {
          const v4912 = v4305[1]

          break
        }
        case 'receivePayout0_555': {
          const v5214 = v4305[1]

          break
        }
        case 'vote0_555': {
          const v5516 = v4305[1]

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
    data: [v4305],
    secs: v4307,
    time: v4306,
    didSend: v3467,
    from: v4304,
  } = txn1
  switch (v4305[0]) {
    case 'addSong0_555': {
      const v4308 = v4305[1]
      return
      break
    }
    case 'buyMembership0_555': {
      const v4610 = v4305[1]
      undefined /* setApiDetails */
      const v4628 = stdlib.addressEq(v4304, v3968)
      const v4629 = v4628 ? false : true
      stdlib.assert(v4629, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:154:31:application call to [unknown function] (defined at: ./index.rsh:154:31:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:154:31:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'buyMembership',
      })
      const v4722 = stdlib.add(v3994, v3969)
      const v4756 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4304),
        null,
      )
      switch (v4756[0]) {
        case 'None': {
          const v4757 = v4756[1]

          break
        }
        case 'Some': {
          const v4758 = v4756[1]
          const v4759 = stdlib.gt(v4307, v4758)
          stdlib.assert(v4759, {
            at: './index.rsh:165:22:application',
            fs: [
              'at ./index.rsh:160:16:application call to [unknown function] (defined at: ./index.rsh:160:16:function exp)',
            ],
            msg: 'membership expired',
            who: 'buyMembership',
          })

          break
        }
      }
      const v4760 = stdlib.safeAdd(v4307, v3970)
      await stdlib.mapSet(map0, v4304, v4760)
      null
      const v4761 = await txn1.getOutput('buyMembership', 'v4760', ctc1, v4760)
      if (v3467) {
        stdlib.protect(ctc0, await interact.out(v4610, v4761), {
          at: './index.rsh:154:11:application',
          fs: [
            'at ./index.rsh:154:11:application call to [unknown function] (defined at: ./index.rsh:154:11:function exp)',
            'at ./index.rsh:170:17:application call to "notify" (defined at: ./index.rsh:160:16:function exp)',
            'at ./index.rsh:160:16:application call to [unknown function] (defined at: ./index.rsh:160:16:function exp)',
          ],
          msg: 'out',
          who: 'buyMembership',
        })
      } else {
      }

      const v4766 = stdlib.safeAdd(
        v3983,
        stdlib.checkedBigNumberify(
          './index.rsh:172:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v4767 = stdlib.safeAdd(v3982, v3969)
      const v11660 = v3980
      const v11661 = v3981
      const v11662 = v4767
      const v11663 = v4766
      const v11664 = v3984
      const v11665 = v3985
      const v11666 = v3986
      const v11668 = v4722
      return

      break
    }
    case 'endVotingPeriod0_555': {
      const v4912 = v4305[1]
      return
      break
    }
    case 'receivePayout0_555': {
      const v5214 = v4305[1]
      return
      break
    }
    case 'vote0_555': {
      const v5516 = v4305[1]
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
    addSong0_555: ctc10,
    buyMembership0_555: ctc9,
    endVotingPeriod0_555: ctc9,
    receivePayout0_555: ctc11,
    vote0_555: ctc12,
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
    v3968,
    v3969,
    v3970,
    v3980,
    v3981,
    v3982,
    v3983,
    v3984,
    v3985,
    v3986,
    v3994,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4123 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:236:33:application call to [unknown function] (defined at: ./index.rsh:236:33:function exp)',
      'at ./index.rsh:91:21:application call to "runendVotingPeriod0_555" (defined at: ./index.rsh:236:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'endVotingPeriod',
  })
  const v4137 = ['endVotingPeriod0_555', v4123]

  const txn1 = await ctc.sendrecv({
    args: [
      v3968,
      v3969,
      v3970,
      v3980,
      v3981,
      v3982,
      v3983,
      v3984,
      v3985,
      v3986,
      v3994,
      v4137,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:243:10:decimal',
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
        data: [v4305],
        secs: v4307,
        time: v4306,
        didSend: v3467,
        from: v4304,
      } = txn1

      switch (v4305[0]) {
        case 'addSong0_555': {
          const v4308 = v4305[1]

          break
        }
        case 'buyMembership0_555': {
          const v4610 = v4305[1]

          break
        }
        case 'endVotingPeriod0_555': {
          const v4912 = v4305[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'endVotingPeriod',
          })
          const v4941 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v3986),
            null,
          )
          const v4942 = stdlib.fromSome(
            v4941,
            stdlib.checkedBigNumberify(
              './index.rsh:239:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v4943 = stdlib.eq(
            v4942,
            stdlib.checkedBigNumberify(
              './index.rsh:240:44:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          let v5077
          if (v4943) {
            v5077 = stdlib.checkedBigNumberify(
              './index.rsh:240:48:decimal',
              stdlib.UInt_max,
              '0',
            )
          } else {
            const v5078 = stdlib.safeDiv(
              v3982,
              stdlib.checkedBigNumberify(
                './index.rsh:240:64:decimal',
                stdlib.UInt_max,
                '3',
              ),
            )
            v5077 = v5078
          }
          let v5080
          if (v4943) {
            v5080 = stdlib.checkedBigNumberify(
              './index.rsh:241:48:decimal',
              stdlib.UInt_max,
              '0',
            )
          } else {
            const v5081 = stdlib.safeSub(v3982, v5077)
            v5080 = v5081
          }
          const v5082 = stdlib.safeAdd(v4942, v5080)
          await stdlib.simMapSet(sim_r, 5, v3986, v5082)
          null
          const v5083 = null
          const v5084 = await txn1.getOutput(
            'endVotingPeriod',
            'v5083',
            ctc0,
            v5083,
          )

          const v5089 = stdlib.safeSub(v3982, v5080)
          const v5090 = stdlib.safeAdd(v3981, v5080)
          const v5091 = stdlib.safeAdd(
            v3986,
            stdlib.checkedBigNumberify(
              './index.rsh:253:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5092 = stdlib.safeAdd(v4307, v3970)
          const v11714 = v5092
          const v11715 = v5090
          const v11716 = v5089
          const v11717 = v3983
          const v11718 = v3984
          const v11719 = stdlib.checkedBigNumberify(
            './index.rsh:255:13:decimal',
            stdlib.UInt_max,
            '0',
          )
          const v11720 = v5091
          const v11722 = v3994
          sim_r.isHalt = false

          break
        }
        case 'receivePayout0_555': {
          const v5214 = v4305[1]

          break
        }
        case 'vote0_555': {
          const v5516 = v4305[1]

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
    data: [v4305],
    secs: v4307,
    time: v4306,
    didSend: v3467,
    from: v4304,
  } = txn1
  switch (v4305[0]) {
    case 'addSong0_555': {
      const v4308 = v4305[1]
      return
      break
    }
    case 'buyMembership0_555': {
      const v4610 = v4305[1]
      return
      break
    }
    case 'endVotingPeriod0_555': {
      const v4912 = v4305[1]
      undefined /* setApiDetails */
      const v4941 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v3986),
        null,
      )
      const v4942 = stdlib.fromSome(
        v4941,
        stdlib.checkedBigNumberify(
          './index.rsh:239:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v4943 = stdlib.eq(
        v4942,
        stdlib.checkedBigNumberify(
          './index.rsh:240:44:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5073 = stdlib.gt(v4307, v3980)
      let v5077
      if (v4943) {
        v5077 = stdlib.checkedBigNumberify(
          './index.rsh:240:48:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5078 = stdlib.safeDiv(
          v3982,
          stdlib.checkedBigNumberify(
            './index.rsh:240:64:decimal',
            stdlib.UInt_max,
            '3',
          ),
        )
        v5077 = v5078
      }
      let v5080
      if (v4943) {
        v5080 = stdlib.checkedBigNumberify(
          './index.rsh:241:48:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5081 = stdlib.safeSub(v3982, v5077)
        v5080 = v5081
      }
      stdlib.assert(v5073, {
        at: './index.rsh:245:18:application',
        fs: [
          'at ./index.rsh:244:16:application call to [unknown function] (defined at: ./index.rsh:244:16:function exp)',
        ],
        msg: 'voting period over',
        who: 'endVotingPeriod',
      })
      const v5082 = stdlib.safeAdd(v4942, v5080)
      await stdlib.mapSet(map5, v3986, v5082)
      null
      const v5083 = null
      const v5084 = await txn1.getOutput(
        'endVotingPeriod',
        'v5083',
        ctc0,
        v5083,
      )
      if (v3467) {
        stdlib.protect(ctc0, await interact.out(v4912, v5084), {
          at: './index.rsh:236:11:application',
          fs: [
            'at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)',
            'at ./index.rsh:248:17:application call to "notify" (defined at: ./index.rsh:244:16:function exp)',
            'at ./index.rsh:244:16:application call to [unknown function] (defined at: ./index.rsh:244:16:function exp)',
          ],
          msg: 'out',
          who: 'endVotingPeriod',
        })
      } else {
      }

      const v5089 = stdlib.safeSub(v3982, v5080)
      const v5090 = stdlib.safeAdd(v3981, v5080)
      const v5091 = stdlib.safeAdd(
        v3986,
        stdlib.checkedBigNumberify(
          './index.rsh:253:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5092 = stdlib.safeAdd(v4307, v3970)
      const v11714 = v5092
      const v11715 = v5090
      const v11716 = v5089
      const v11717 = v3983
      const v11718 = v3984
      const v11719 = stdlib.checkedBigNumberify(
        './index.rsh:255:13:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v11720 = v5091
      const v11722 = v3994
      return

      break
    }
    case 'receivePayout0_555': {
      const v5214 = v4305[1]
      return
      break
    }
    case 'vote0_555': {
      const v5516 = v4305[1]
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
    addSong0_555: ctc11,
    buyMembership0_555: ctc12,
    endVotingPeriod0_555: ctc12,
    receivePayout0_555: ctc9,
    vote0_555: ctc13,
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
    v3968,
    v3969,
    v3970,
    v3980,
    v3981,
    v3982,
    v3983,
    v3984,
    v3985,
    v3986,
    v3994,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4139 = ctc.selfAddress()
  const v4141 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_555" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'receivePayout',
  })
  const v4142 =
    v4141[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4143 =
    v4141[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '1',
      )
    ]
  const v4146 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4142), null)
  const v4147 = '                                '
  const v4149 = {
    art: v4147,
    audio: v4147,
    creator: v3968,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
  }
  const v4150 = stdlib.fromSome(v4146, v4149)
  const v4153 = v4150.creator
  const v4157 = stdlib.addressEq(v4139, v4153)
  stdlib.assert(v4157, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_555" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not song creator',
    who: 'receivePayout',
  })
  const v4159 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4139), null)
  const v4160 = {
    None: 0,
    Some: 1,
  }[v4159[0]]
  const v4161 = stdlib.eq(
    v4160,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4161, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:264:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_555" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'is member',
    who: 'receivePayout',
  })
  const v4164 = {
    None: 0,
    Some: 1,
  }[v4146[0]]
  const v4165 = stdlib.eq(
    v4164,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4165, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_555" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'receivePayout',
  })
  const v4167 = [v4143, v4142, v4139]
  const v4168 = stdlib.protect(
    map6_ctc,
    await stdlib.mapRef(map6, stdlib.digest([ctc10], [v4167])),
    null,
  )
  const v4169 = {
    None: 0,
    Some: 1,
  }[v4168[0]]
  const v4170 = stdlib.eq(
    v4169,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4170, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_555" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'receivePayout',
  })
  const v4172 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v4143), null)
  const v4173 = stdlib.fromSome(
    v4172,
    stdlib.checkedBigNumberify(
      './index.rsh:270:54:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4176 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v4143), null)
  const v4177 = stdlib.fromSome(
    v4176,
    stdlib.checkedBigNumberify(
      './index.rsh:108:11:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4178 = stdlib.eq(
    v4177,
    stdlib.checkedBigNumberify(
      './index.rsh:110:44:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  let v4179
  if (v4178) {
    v4179 = stdlib.checkedBigNumberify(
      './index.rsh:111:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v4180 = [v4143, v4142]
    const v4181 = stdlib.protect(
      map2_ctc,
      await stdlib.mapRef(map2, stdlib.digest([ctc9], [v4180])),
      null,
    )
    const v4182 = stdlib.fromSome(
      v4181,
      stdlib.checkedBigNumberify(
        './index.rsh:114:50:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v4183 = stdlib.safeMuldiv(v4173, v4182, v4177)
    v4179 = v4183
  }
  const v4184 = stdlib.le(v4179, v4173)
  stdlib.assert(v4184, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_555" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4187 = stdlib.ge(v3994, v4179)
  stdlib.assert(v4187, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to "runreceivePayout0_555" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })
  const v4196 = ['receivePayout0_555', v4141]

  let v4270
  if (v4178) {
    v4270 = stdlib.checkedBigNumberify(
      './index.rsh:111:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v4271 = [v4143, v4142]
    const v4272 = stdlib.protect(
      map2_ctc,
      await stdlib.mapRef(map2, stdlib.digest([ctc9], [v4271])),
      null,
    )
    const v4273 = stdlib.fromSome(
      v4272,
      stdlib.checkedBigNumberify(
        './index.rsh:114:50:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v4274 = stdlib.safeMuldiv(v4173, v4273, v4177)
    v4270 = v4274
  }
  const v4275 = stdlib.le(v4270, v4173)
  stdlib.assert(v4275, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4278 = stdlib.ge(v3994, v4270)
  stdlib.assert(v4278, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })

  const txn1 = await ctc.sendrecv({
    args: [
      v3968,
      v3969,
      v3970,
      v3980,
      v3981,
      v3982,
      v3983,
      v3984,
      v3985,
      v3986,
      v3994,
      v4196,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:275:10:decimal',
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
        data: [v4305],
        secs: v4307,
        time: v4306,
        didSend: v3467,
        from: v4304,
      } = txn1

      switch (v4305[0]) {
        case 'addSong0_555': {
          const v4308 = v4305[1]

          break
        }
        case 'buyMembership0_555': {
          const v4610 = v4305[1]

          break
        }
        case 'endVotingPeriod0_555': {
          const v4912 = v4305[1]

          break
        }
        case 'receivePayout0_555': {
          const v5214 = v4305[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'receivePayout',
          })
          const v5255 =
            v5214[
              stdlib.checkedBigNumberify(
                './index.rsh:261:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v5256 =
            v5214[
              stdlib.checkedBigNumberify(
                './index.rsh:261:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v5255),
            null,
          )
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4304),
            null,
          )
          const v5278 = [v5256, v5255, v4304]
          stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, stdlib.digest([ctc10], [v5278])),
            null,
          )
          const v5283 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v5256),
            null,
          )
          const v5284 = stdlib.fromSome(
            v5283,
            stdlib.checkedBigNumberify(
              './index.rsh:270:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5287 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v5256),
            null,
          )
          const v5288 = stdlib.fromSome(
            v5287,
            stdlib.checkedBigNumberify(
              './index.rsh:108:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5289 = stdlib.eq(
            v5288,
            stdlib.checkedBigNumberify(
              './index.rsh:110:44:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          if (v5289) {
          } else {
            const v5291 = [v5256, v5255]
            stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc9], [v5291])),
              null,
            )
          }
          let v5432
          if (v5289) {
            v5432 = stdlib.checkedBigNumberify(
              './index.rsh:111:13:decimal',
              stdlib.UInt_max,
              '0',
            )
          } else {
            const v5433 = [v5256, v5255]
            const v5434 = stdlib.protect(
              map2_ctc,
              await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc9], [v5433])),
              null,
            )
            const v5435 = stdlib.fromSome(
              v5434,
              stdlib.checkedBigNumberify(
                './index.rsh:114:50:decimal',
                stdlib.UInt_max,
                '0',
              ),
            )
            const v5436 = stdlib.safeMuldiv(v5284, v5435, v5288)
            v5432 = v5436
          }
          const v5447 = stdlib.sub(v3994, v5432)
          sim_r.txns.push({
            kind: 'from',
            to: v4304,
            tok: undefined /* Nothing */,
          })
          await stdlib.simMapSet(
            sim_r,
            6,
            stdlib.digest([ctc10], [v5278]),
            true,
          )
          const v5449 = stdlib.safeSub(v5284, v5432)
          await stdlib.simMapSet(sim_r, 5, v5256, v5449)
          null
          const v5450 = await txn1.getOutput(
            'receivePayout',
            'v5432',
            ctc1,
            v5432,
          )

          const v5457 = stdlib.safeSub(v3981, v5432)
          const v11768 = v3980
          const v11769 = v5457
          const v11770 = v3982
          const v11771 = v3983
          const v11772 = v3984
          const v11773 = v3985
          const v11774 = v3986
          const v11776 = v5447
          sim_r.isHalt = false

          break
        }
        case 'vote0_555': {
          const v5516 = v4305[1]

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
    data: [v4305],
    secs: v4307,
    time: v4306,
    didSend: v3467,
    from: v4304,
  } = txn1
  switch (v4305[0]) {
    case 'addSong0_555': {
      const v4308 = v4305[1]
      return
      break
    }
    case 'buyMembership0_555': {
      const v4610 = v4305[1]
      return
      break
    }
    case 'endVotingPeriod0_555': {
      const v4912 = v4305[1]
      return
      break
    }
    case 'receivePayout0_555': {
      const v5214 = v4305[1]
      undefined /* setApiDetails */
      const v5255 =
        v5214[
          stdlib.checkedBigNumberify(
            './index.rsh:261:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5256 =
        v5214[
          stdlib.checkedBigNumberify(
            './index.rsh:261:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v5257 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v5255),
        null,
      )
      const v5258 = '                                '
      const v5260 = {
        art: v5258,
        audio: v5258,
        creator: v3968,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v5261 = stdlib.fromSome(v5257, v5260)
      const v5264 = v5261.creator
      const v5268 = stdlib.addressEq(v4304, v5264)
      stdlib.assert(v5268, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not song creator',
        who: 'receivePayout',
      })
      const v5270 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4304),
        null,
      )
      const v5271 = {
        None: 0,
        Some: 1,
      }[v5270[0]]
      const v5272 = stdlib.eq(
        v5271,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5272, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:264:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
          'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'is member',
        who: 'receivePayout',
      })
      const v5275 = {
        None: 0,
        Some: 1,
      }[v5257[0]]
      const v5276 = stdlib.eq(
        v5275,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5276, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'receivePayout',
      })
      const v5278 = [v5256, v5255, v4304]
      const v5279 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, stdlib.digest([ctc10], [v5278])),
        null,
      )
      const v5280 = {
        None: 0,
        Some: 1,
      }[v5279[0]]
      const v5281 = stdlib.eq(
        v5280,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v5281, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'has received payout',
        who: 'receivePayout',
      })
      const v5283 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v5256),
        null,
      )
      const v5284 = stdlib.fromSome(
        v5283,
        stdlib.checkedBigNumberify(
          './index.rsh:270:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5287 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v5256),
        null,
      )
      const v5288 = stdlib.fromSome(
        v5287,
        stdlib.checkedBigNumberify(
          './index.rsh:108:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5289 = stdlib.eq(
        v5288,
        stdlib.checkedBigNumberify(
          './index.rsh:110:44:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      let v5290
      if (v5289) {
        v5290 = stdlib.checkedBigNumberify(
          './index.rsh:111:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5291 = [v5256, v5255]
        const v5292 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc9], [v5291])),
          null,
        )
        const v5293 = stdlib.fromSome(
          v5292,
          stdlib.checkedBigNumberify(
            './index.rsh:114:50:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5294 = stdlib.safeMuldiv(v5284, v5293, v5288)
        v5290 = v5294
      }
      const v5295 = stdlib.le(v5290, v5284)
      stdlib.assert(v5295, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v5298 = stdlib.ge(v3994, v5290)
      stdlib.assert(v5298, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:261:46:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:261:46:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      let v5432
      if (v5289) {
        v5432 = stdlib.checkedBigNumberify(
          './index.rsh:111:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5433 = [v5256, v5255]
        const v5434 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, stdlib.digest([ctc9], [v5433])),
          null,
        )
        const v5435 = stdlib.fromSome(
          v5434,
          stdlib.checkedBigNumberify(
            './index.rsh:114:50:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5436 = stdlib.safeMuldiv(v5284, v5435, v5288)
        v5432 = v5436
      }
      const v5437 = stdlib.le(v5432, v5284)
      stdlib.assert(v5437, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:276:16:application call to [unknown function] (defined at: ./index.rsh:276:16:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v5440 = stdlib.ge(v3994, v5432)
      stdlib.assert(v5440, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:276:16:application call to [unknown function] (defined at: ./index.rsh:276:16:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      const v5447 = stdlib.sub(v3994, v5432)
      await stdlib.mapSet(map6, stdlib.digest([ctc10], [v5278]), true)
      const v5449 = stdlib.safeSub(v5284, v5432)
      await stdlib.mapSet(map5, v5256, v5449)
      null
      const v5450 = await txn1.getOutput('receivePayout', 'v5432', ctc1, v5432)
      if (v3467) {
        stdlib.protect(ctc0, await interact.out(v5214, v5450), {
          at: './index.rsh:261:11:application',
          fs: [
            'at ./index.rsh:261:11:application call to [unknown function] (defined at: ./index.rsh:261:11:function exp)',
            'at ./index.rsh:281:17:application call to "notify" (defined at: ./index.rsh:276:16:function exp)',
            'at ./index.rsh:276:16:application call to [unknown function] (defined at: ./index.rsh:276:16:function exp)',
          ],
          msg: 'out',
          who: 'receivePayout',
        })
      } else {
      }

      const v5457 = stdlib.safeSub(v3981, v5432)
      const v11768 = v3980
      const v11769 = v5457
      const v11770 = v3982
      const v11771 = v3983
      const v11772 = v3984
      const v11773 = v3985
      const v11774 = v3986
      const v11776 = v5447
      return

      break
    }
    case 'vote0_555': {
      const v5516 = v4305[1]
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
    addSong0_555: ctc11,
    buyMembership0_555: ctc12,
    endVotingPeriod0_555: ctc12,
    receivePayout0_555: ctc13,
    vote0_555: ctc9,
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
    v3968,
    v3969,
    v3970,
    v3980,
    v3981,
    v3982,
    v3983,
    v3984,
    v3985,
    v3986,
    v3994,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v4093 = ctc.selfAddress()
  const v4095 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_555" (defined at: ./index.rsh:212:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'in',
    who: 'vote',
  })
  const v4096 =
    v4095[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v4098 = stdlib.addressEq(v4093, v3968)
  const v4099 = v4098 ? false : true
  stdlib.assert(v4099, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_555" (defined at: ./index.rsh:212:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'vote',
  })
  const v4101 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4093), null)
  const v4102 = {
    None: 0,
    Some: 1,
  }[v4101[0]]
  const v4103 = stdlib.eq(
    v4102,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4103, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:214:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
      'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_555" (defined at: ./index.rsh:212:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'is member',
    who: 'vote',
  })
  const v4105 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4096), null)
  const v4106 = {
    None: 0,
    Some: 1,
  }[v4105[0]]
  const v4107 = stdlib.eq(
    v4106,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4107, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:215:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_555" (defined at: ./index.rsh:212:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'song does not exist',
    who: 'vote',
  })
  const v4109 = [v3986, v4096, v4093]
  const v4110 = stdlib.protect(
    map3_ctc,
    await stdlib.mapRef(map3, stdlib.digest([ctc10], [v4109])),
    null,
  )
  const v4111 = {
    None: 0,
    Some: 1,
  }[v4110[0]]
  const v4112 = stdlib.eq(
    v4111,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4112, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:216:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
      'at ./index.rsh:91:21:application call to "runvote0_555" (defined at: ./index.rsh:212:10:function exp)',
      'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
    ],
    msg: 'has voted',
    who: 'vote',
  })
  const v4119 = ['vote0_555', v4095]

  const txn1 = await ctc.sendrecv({
    args: [
      v3968,
      v3969,
      v3970,
      v3980,
      v3981,
      v3982,
      v3983,
      v3984,
      v3985,
      v3986,
      v3994,
      v4119,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:218:10:decimal',
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
        data: [v4305],
        secs: v4307,
        time: v4306,
        didSend: v3467,
        from: v4304,
      } = txn1

      switch (v4305[0]) {
        case 'addSong0_555': {
          const v4308 = v4305[1]

          break
        }
        case 'buyMembership0_555': {
          const v4610 = v4305[1]

          break
        }
        case 'endVotingPeriod0_555': {
          const v4912 = v4305[1]

          break
        }
        case 'receivePayout0_555': {
          const v5214 = v4305[1]

          break
        }
        case 'vote0_555': {
          const v5516 = v4305[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'vote',
          })
          const v5606 =
            v5516[
              stdlib.checkedBigNumberify(
                './index.rsh:212:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4304),
            null,
          )
          const v5614 = stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v5606),
            null,
          )
          const v5618 = [v3986, v5606, v4304]
          stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc10], [v5618])),
            null,
          )
          const v5786 = '                                '
          const v5788 = {
            art: v5786,
            audio: v5786,
            creator: v3968,
            id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            votes: stdlib.checkedBigNumberify(
              '<builtin>',
              stdlib.UInt_max,
              '0',
            ),
          }
          const v5789 = stdlib.fromSome(v5614, v5788)
          const v5790 = v5789.art
          const v5791 = v5789.audio
          const v5792 = v5789.creator
          const v5793 = v5789.id
          const v5794 = v5789.votes
          const v5796 = [v3986, v5606]
          const v5797 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, stdlib.digest([ctc13], [v5796])),
            null,
          )
          const v5798 = stdlib.fromSome(
            v5797,
            stdlib.checkedBigNumberify(
              './index.rsh:121:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5800 = stdlib.safeAdd(
            v5798,
            stdlib.checkedBigNumberify(
              './index.rsh:122:45:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(
            sim_r,
            2,
            stdlib.digest([ctc13], [v5796]),
            v5800,
          )
          await stdlib.simMapSet(
            sim_r,
            3,
            stdlib.digest([ctc10], [v5618]),
            true,
          )
          const v5802 = stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, v3986),
            null,
          )
          const v5803 = stdlib.fromSome(
            v5802,
            stdlib.checkedBigNumberify(
              './index.rsh:125:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5804 = stdlib.safeAdd(
            v5803,
            stdlib.checkedBigNumberify(
              './index.rsh:125:59:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(sim_r, 4, v3986, v5804)
          const v5805 = stdlib.safeAdd(
            v5794,
            stdlib.checkedBigNumberify(
              './index.rsh:128:31:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5806 = {
            art: v5790,
            audio: v5791,
            creator: v5792,
            id: v5793,
            votes: v5805,
          }
          await stdlib.simMapSet(sim_r, 1, v5606, v5806)
          null
          const v5808 = null
          const v5809 = await txn1.getOutput('vote', 'v5808', ctc0, v5808)

          const v5815 = stdlib.safeAdd(
            v3985,
            stdlib.checkedBigNumberify(
              './index.rsh:230:30:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5816 = stdlib.safeAdd(
            v3984,
            stdlib.checkedBigNumberify(
              './index.rsh:231:26:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v11822 = v3980
          const v11823 = v3981
          const v11824 = v3982
          const v11825 = v3983
          const v11826 = v5816
          const v11827 = v5815
          const v11828 = v3986
          const v11830 = v3994
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
    data: [v4305],
    secs: v4307,
    time: v4306,
    didSend: v3467,
    from: v4304,
  } = txn1
  switch (v4305[0]) {
    case 'addSong0_555': {
      const v4308 = v4305[1]
      return
      break
    }
    case 'buyMembership0_555': {
      const v4610 = v4305[1]
      return
      break
    }
    case 'endVotingPeriod0_555': {
      const v4912 = v4305[1]
      return
      break
    }
    case 'receivePayout0_555': {
      const v5214 = v4305[1]
      return
      break
    }
    case 'vote0_555': {
      const v5516 = v4305[1]
      undefined /* setApiDetails */
      const v5606 =
        v5516[
          stdlib.checkedBigNumberify(
            './index.rsh:212:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5607 = stdlib.addressEq(v4304, v3968)
      const v5608 = v5607 ? false : true
      stdlib.assert(v5608, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'vote',
      })
      const v5610 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4304),
        null,
      )
      const v5611 = {
        None: 0,
        Some: 1,
      }[v5610[0]]
      const v5612 = stdlib.eq(
        v5611,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5612, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:214:20:application call to "chkMembership" (defined at: ./index.rsh:94:33:function exp)',
          'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'is member',
        who: 'vote',
      })
      const v5614 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v5606),
        null,
      )
      const v5615 = {
        None: 0,
        Some: 1,
      }[v5614[0]]
      const v5616 = stdlib.eq(
        v5615,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5616, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:215:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'song does not exist',
        who: 'vote',
      })
      const v5618 = [v3986, v5606, v4304]
      const v5619 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, stdlib.digest([ctc10], [v5618])),
        null,
      )
      const v5620 = {
        None: 0,
        Some: 1,
      }[v5619[0]]
      const v5621 = stdlib.eq(
        v5620,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v5621, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:216:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:212:26:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:212:26:function exp)',
          'at ./index.rsh:91:21:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)',
        ],
        msg: 'has voted',
        who: 'vote',
      })
      const v5783 = stdlib.fromSome(
        v5610,
        stdlib.checkedBigNumberify(
          './index.rsh:97:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5784 = stdlib.le(v4307, v5783)
      stdlib.assert(v5784, {
        at: './index.rsh:98:16:application',
        fs: [
          'at ./index.rsh:220:28:application call to "enforceMembership" (defined at: ./index.rsh:95:37:function exp)',
          'at ./index.rsh:219:16:application call to [unknown function] (defined at: ./index.rsh:219:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'vote',
      })
      const v5786 = '                                '
      const v5788 = {
        art: v5786,
        audio: v5786,
        creator: v3968,
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        votes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      }
      const v5789 = stdlib.fromSome(v5614, v5788)
      const v5790 = v5789.art
      const v5791 = v5789.audio
      const v5792 = v5789.creator
      const v5793 = v5789.id
      const v5794 = v5789.votes
      const v5796 = [v3986, v5606]
      const v5797 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, stdlib.digest([ctc13], [v5796])),
        null,
      )
      const v5798 = stdlib.fromSome(
        v5797,
        stdlib.checkedBigNumberify(
          './index.rsh:121:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5800 = stdlib.safeAdd(
        v5798,
        stdlib.checkedBigNumberify(
          './index.rsh:122:45:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map2, stdlib.digest([ctc13], [v5796]), v5800)
      await stdlib.mapSet(map3, stdlib.digest([ctc10], [v5618]), true)
      const v5802 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, v3986),
        null,
      )
      const v5803 = stdlib.fromSome(
        v5802,
        stdlib.checkedBigNumberify(
          './index.rsh:125:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5804 = stdlib.safeAdd(
        v5803,
        stdlib.checkedBigNumberify(
          './index.rsh:125:59:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map4, v3986, v5804)
      const v5805 = stdlib.safeAdd(
        v5794,
        stdlib.checkedBigNumberify(
          './index.rsh:128:31:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5806 = {
        art: v5790,
        audio: v5791,
        creator: v5792,
        id: v5793,
        votes: v5805,
      }
      await stdlib.mapSet(map1, v5606, v5806)
      null
      const v5808 = null
      const v5809 = await txn1.getOutput('vote', 'v5808', ctc0, v5808)
      if (v3467) {
        stdlib.protect(ctc0, await interact.out(v5516, v5809), {
          at: './index.rsh:212:11:application',
          fs: [
            'at ./index.rsh:212:11:application call to [unknown function] (defined at: ./index.rsh:212:11:function exp)',
            'at ./index.rsh:223:17:application call to "notify" (defined at: ./index.rsh:219:16:function exp)',
            'at ./index.rsh:219:16:application call to [unknown function] (defined at: ./index.rsh:219:16:function exp)',
          ],
          msg: 'out',
          who: 'vote',
        })
      } else {
      }

      const v5815 = stdlib.safeAdd(
        v3985,
        stdlib.checkedBigNumberify(
          './index.rsh:230:30:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5816 = stdlib.safeAdd(
        v3984,
        stdlib.checkedBigNumberify(
          './index.rsh:231:26:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v11822 = v3980
      const v11823 = v3981
      const v11824 = v3982
      const v11825 = v3983
      const v11826 = v5816
      const v11827 = v5815
      const v11828 = v3986
      const v11830 = v3994
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T13","name":"v11879","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_555","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_555","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_555","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_555","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_555","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4438","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4760","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5083","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5432","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5808","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"endedVotingPeriod","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"membershipPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v3","type":"uint256"}],"name":"payoutReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"songAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"voted","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_5Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_6Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v11881","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_555","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_555","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_555","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_555","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_555","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v11892","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"v11853","type":"bytes32"},{"internalType":"bytes32","name":"v11854","type":"bytes32"}],"name":"addSong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endVotingPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentVotingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembershipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v11837","type":"address"}],"name":"getMembershipExp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11842","type":"uint256"}],"name":"getSong","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11845","type":"uint256"},{"internalType":"uint256","name":"v11846","type":"uint256"}],"name":"getSongPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11849","type":"uint256"},{"internalType":"address payable","name":"v11850","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11867","type":"uint256"},{"internalType":"uint256","name":"v11868","type":"uint256"}],"name":"receivePayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11873","type":"uint256"}],"name":"vote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620040f190813803601f1980601f83011683019360018060401b039284861084871117620003965780859260409788528339606094859181010312620003ac578451936200004f85620003b1565b815185526020868184015193828801948552015195878101968752436003558751926101c0840184811088821117620003965789526000938481528484820152848a82015284828201528460808201528460a08201528460c08201528460e082015284610100820152895160a081018181108a8211176200038257916101a09187938d528381528387820152838d8201528385820152836080820152610120820152826101408201528261016082015282610180820152015260049160ff8354166200036b577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808b5133815283518782015288518d8201528b5185820152a15180159081156200035e575b501562000347573462000330578851976200017789620003b1565b838901958587528a8a0199868b523390525186525188526001978885554389558951953385880152518a8701525181860152845260808401848110878211176200031d57885283519586116200030a57600254908782811c92168015620002ff575b83831014620002ec5750601f8111620002a0575b508093601f861160011462000238575050918394918493946200022c575b50501b916000199060031b1c1916176002555b51613d239081620003ce8239f35b0151925038806200020b565b600283528183209493928692918316915b888383106200028557505050106200026b575b505050811b016002556200021e565b015160001960f88460031b161c191690553880806200025c565b85870151885590960195948501948793509081019062000249565b60028352818320601f870160051c810191838810620002e1575b601f0160051c019087905b828110620002d5575050620001ed565b848155018790620002c5565b9091508190620002ba565b634e487b7160e01b845260229052602483fd5b91607f1691620001d9565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b885163100960cb60e01b8152601381840152602490fd5b885163100960cb60e01b8152601281840152602490fd5b905060015414386200015c565b895163100960cb60e01b8152601181850152602490fd5b634e487b7160e01b87526041600452602487fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003965760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c80630121b93f1461114b5780630be3c76b146110b65780630ca52f77146110325780631248dfcf14610f445780631ca8b66d14610f1c5780631e93b0f114610efe57806336e56ea514610ec557806342acaa6614610d815780634385963214610c50578063544774a914610bfa578063573b8510146107b25780635c5811191461076b5780636f9fb98a1461070057806383230757146106e25780638b75d81714610687578063a4d0d3911461049d578063ab53f2c614610429578063ad76d8b4146103f5578063ae40bc79146103a6578063bda4463b1461037e578063d61ba28214610312578063d650b241146101ed578063da70a525146101c5578063e80a57a51461016d5763ec192d610361000e57346101685760203660031901126101685761014961141e565b50610164610158600435611686565b60405191829182611211565b0390f35b600080fd5b60003660031901126101685760206060610185611761565b6101b981610191613cda565b85810190600282515251151585825101526101aa613cda565b9060008252518682015261199a565b01511515604051908152f35b34610168576020366003190112610168576101de61141e565b506101646101586004356115ca565b61012036600319011261016857610202611761565b6040519061020f826112ac565b6004358252610100366023190112610168576040519060c082016001600160401b038111838210176102fc57604052602435600581101561016857825260403660431901126101685760405192610265846112ac565b60443584526020936064358582015284840152608435801515810361016857604084015260a435801515810361016857606084015260403660c3190112610168576040516102b2816112ac565b60c435815260e4358582015260808401528361010319360112610168576102f3926040516102df816112c7565b61010435815260a08201528482015261199a565b60405160008152f35b634e487b7160e01b600052604160045260246000fd5b346101685760003660031901126101685761032b611761565b600460005403610365576101006020916060610356610348611373565b85808251830101910161189f565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b346101685760203660031901126101685761039761141e565b506101646101586004356116cf565b34610168576000366003190112610168576103bf611761565b6004600054036103dc5760a0602091610120610356610348611373565b60405163100960cb60e01b815260086004820152602490fd5b346101685760203660031901126101685761040e61141e565b5061016461041d600435611613565b604051918291826111e4565b3461016857600036600319011261016857600054610445611373565b6040519182528160206040818301528251908160408401526000935b828510610484575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610461565b34610168576104ab366111ae565b906104b4611761565b604051916104c1836112ac565b6020938484019184528152604051906104d9826112e2565b60008252848201916000835260408101946040516104f6816112ac565b60008152600088820152865260046000540361066e576101409561052961051b611373565b89808251830101910161189f565b5060016105368551611686565b51610540816111c4565b610549816111c4565b0361066757604061055a8551611686565b01515b80845261057b5750505050600081525b519182910152604051908152f35b836106429261064a9551835152518983510152600161059a82516116cf565b516105a4816111c4565b6105ad816111c4565b0361065b5760406105c16105dc92516116cf565b0151915b60016105f882518c60405195869182019283611964565b03946105f0601f1996878101835282611350565b5190206115ca565b51610602816111c4565b61060b816111c4565b036106515760409161062e6105f061063a9351928d865193849182019586611964565b03908101835282611350565b015190613c26565b90519061197a565b815261056d565b5050600090613c26565b506105dc6000916105c5565b600061055d565b60405163100960cb60e01b8152600f6004820152602490fd5b34610168576000366003190112610168576106a0611761565b6004600054036106c95760c0602091826103566106bb611373565b82808251830101910161189f565b60405163100960cb60e01b815260096004820152602490fd5b34610168576000366003190112610168576020600154604051908152f35b3461016857600036600319011261016857610719611761565b600460005403610752576080602091610745610736610348611373565b8360a08201519101519061188b565b9182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b60003660031901126101685760206040610783611761565b6107a88161078f613cda565b85810190600182515251151585825101526101aa613cda565b0151604051908152f35b6020366003190112610168576107c6611761565b506040516107d3816112c7565b600435815260ff60045416610be1577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040805133815283516020820152a1600160005403610bc857610824611373565b606081805181010312610168576040519161083e836112e2565b61084a602083016117e1565b835260606040830151926020850193845201519060408401918252518015908115610bbc575b5015610ba35734610b8a578251336001600160a01b0390911603610b71576108bb9161089a6117f5565b93516001600160a01b0316845251602084015280516040840152514261188b565b606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600161012082015243610140820152600061016082015261014060405161090a816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e08101516101008401526101008101516101208401526101208101518284015201516101608201526101608152610a4f81611334565b80516001600160401b0381116102fc57610a6a600254611272565b601f8111610b1e575b50602091601f8211600114610ab957918192600092610aae575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610a8d565b601f19821692600260005260206000209160005b858110610b0657508360019510610aed575b505050811b01600255610aa3565b015160001960f88460031b161c19169055828080610adf565b91926020600181928685015181550194019201610acd565b6002600052600080516020613cf7833981519152601f830160051c81019160208410610b67575b601f0160051c01905b818110610b5b5750610a73565b60008155600101610b4e565b9091508190610b45565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541484610870565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b3461016857602036600319011261016857610c136114eb565b5060e0610c21600435611513565b610c4e60408051928051610c34816111c4565b84526020810151151560208501520151604083019061123c565bf35b34610168576040366003190112610168576001600160a01b036024358181169081900361016857610c7f611761565b60405191610c8c836112ac565b602093848401916004358552825260405191610ca7836112c7565b610caf61141e565b8352600460005403610d685761016094610120610ccd61051b611373565b015184515251868451015251166040825101528051906001610d166040519384610cfa898201928361193a565b0394610d0e601f1996878101835282611350565b519020611613565b51610d20816111c4565b610d29816111c4565b03610d5f57604091610d4b915190610d0e8451918261062e8a8201958661193a565b015115155b15159182910152604051908152f35b50506000610d50565b60405163100960cb60e01b815260106004820152602490fd5b3461016857602036600319011261016857610d9a6114c0565b50610da3611761565b604051610daf816112e2565b610db76114eb565b815260208101916000835260408201610dce6114c0565b8152600460005403610eac57610df4610de5611373565b6020808251830101910161189f565b926001610e02600435611513565b80835251610e0f816111c4565b610e18816111c4565b03610e93578461012094600060a097526000845152600180881b0390511660208451015280516040845101525160608351015260006080835101526001815151610e61816111c4565b610e6a816111c4565b03610e8957604091505101519182915b0152610c4e604051809261123c565b5051918291610e7a565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b34610168576020366003190112610168576004356001600160a01b03811681036101685761015861016491610ef861141e565b5061143d565b34610168576000366003190112610168576020600354604051908152f35b3461016857602036600319011261016857610f3561141e565b5061016461041d600435611718565b34610168576020366003190112610168576004356001600160a01b0381169081900361016857610f72611761565b9060405190610f80826112c7565b610f8861141e565b825260046000540361101957610fa5600191610ef8610de5611373565b80835251610fb2816111c4565b610fbb816111c4565b036110005760209181600160e0935151610fd4816111c4565b610fdd816111c4565b03610ff55751604001519182915b0152604051908152f35b506000918291610feb565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b61018061103e366111ae565b91906107a861104b611761565b80926040519061105a826112ac565b602096878301918352815260405190611072826112ac565b60405161107e816112ac565b60008152600089820152825287820192611096613c65565b8452518251525187825101526003825152516080825101526101aa613cda565b6040366003190112610168576110ca611761565b6040516110d6816112ac565b816107a8602093838580950160043582526024358152604051906110f9826112ac565b604051611105816112ac565b6000815260008882015282528682019261111d613c65565b845251825152518682510152600082515251858251015261113c613cda565b9060008252518582015261199a565b60203660031901126101685760206101a0611164611761565b6101b981604051611174816112ac565b604051611180816112c7565b60008152815285810190611192613c65565b825260043581515260048251525160a0825101526101aa613cda565b6040906003190112610168576004359060243590565b600211156111ce57565b634e487b7160e01b600052602160045260246000fd5b919091604080606083019480516111fa816111c4565b845260208101511515602085015201511515910152565b91909160408060608301948051611227816111c4565b84526020810151151560208501520151910152565b805182526020808201516001600160a01b0316908301526040808201519083015260608082015190830152608090810151910152565b90600182811c921680156112a2575b602083101461128c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611281565b604081019081106001600160401b038211176102fc57604052565b602081019081106001600160401b038211176102fc57604052565b606081019081106001600160401b038211176102fc57604052565b61016081019081106001600160401b038211176102fc57604052565b60a081019081106001600160401b038211176102fc57604052565b61018081019081106001600160401b038211176102fc57604052565b601f909101601f19168101906001600160401b038211908210176102fc57604052565b604051906000826002549161138783611272565b8083526001938085169081156113fd57506001146113af575b506113ad92500383611350565b565b60026000908152600080516020613cf783398151915294602093509091905b8183106113e55750506113ad9350820101386113a0565b855488840185015294850194879450918301916113ce565b90506113ad94506020925060ff191682840152151560051b820101386113a0565b6040519061142b826112e2565b60006040838281528260208201520152565b9061144661141e565b9160018060a01b03166000908082526005602052600160ff60408420541661146d816111c4565b036114b5576040929350815260056020522060016040519161148e836112e2565b60ff815481811661149e816111c4565b855260081c16151560208401520154604082015290565b508083526020830152565b604051906114cd82611319565b60006080838281528260208201528260408201528260608201520152565b604051906114f8826112e2565b816000815260006020820152604061150e6114c0565b910152565b9061151c6114eb565b9160008181526006602052604091600160ff848420541661153c816111c4565b036115be57829394508152600660205220815191611559836112e2565b60ff8254818116611569816111c4565b855260081c1615156020840152600581519261158484611319565b6001810154845260028101546001600160a01b03166020850152600381015483850152600481015460608501520154608083015282015290565b50808452602084015250565b906115d361141e565b916000908082526007602052600160ff6040842054166115f2816111c4565b036114b5576040929350815260076020522060016040519161148e836112e2565b9061161c61141e565b916000908082526008602052600160ff60408420541661163b816111c4565b036114b5576040929350815260086020522060ff6040519161165c836112e2565b54818116611669816111c4565b8352818160081c161515602084015260101c161515604082015290565b9061168f61141e565b916000908082526009602052600160ff6040842054166116ae816111c4565b036114b5576040929350815260096020522060016040519161148e836112e2565b906116d861141e565b91600090808252600a602052600160ff6040842054166116f7816111c4565b036114b55760409293508152600a6020522060016040519161148e836112e2565b9061172161141e565b91600090808252600b602052600160ff604084205416611740816111c4565b036114b55760409293508152600b6020522060ff6040519161165c836112e2565b604051906101c082016001600160401b038111838210176102fc57604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526117c26114c0565b6101208201528261014082015282610160820152826101808201520152565b51906001600160a01b038216820361016857565b6040519061018082016001600160401b038111838210176102fc57604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b90600182019182811161187557821061016857565b634e487b7160e01b600052601160045260246000fd5b919082019182811161187557821061016857565b908161016091031261016857604051906118b8826112fd565b6118c1816117e1565b82526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151908301526101208082015190830152610140809101519082015290565b5160058110156111ce5790565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b9190916020806040830194805184520151910152565b8115611984570490565b634e487b7160e01b600052601260045260246000fd5b604051909291906103c081016001600160401b038111828210176102fc57806040526119c5816112ac565b6000815260006103e083015281526119db61141e565b60208201526119e86114c0565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152604051611a24816112ac565b6000815260006020820152610120820152611a3d6114eb565b6101408201526000610160820152611a536114c0565b610180820152611a6161141e565b6101a082015260006101c082015260006101e082015260006102008201526000610220820152604051611a93816112ac565b60008152600060208201526102408201526000610260820152604051611ab8816112ac565b6000815260006020820152610280820152604051611ad5816112c7565b600081526102a0820152611ae761141e565b6102c0820152611af56114eb565b6102e0820152611b0361141e565b6103008201526000610320820152611b196114c0565b610340820152611b276114c0565b610360820152604051611b39816112ac565b6000815260006020820152610380820152611b526114c0565b6103a082015260ff60045416613c005760405133815284516020820152602085015180519160058310156111ce5760a0610140927f5a05a7d5188bfb3a2ffa3c8addfc939b40a803afde86b8d9b53402567bcc1182946040840152602080820151805160608601520151608084015260408101511515828401526060810151151560c084015260206080820151805160e08601520151610100840152015151610120820152a1600460005403613be757611c0d610de5611373565b9380518015908115613bdb575b5015613bc257611c2d602082015161192d565b60058110156111ce5761210d57602090810151015181528351336001600160a01b03909116036121065760005b156120ed576001611c6a3361143d565b80602084015251611c7a816111c4565b611c83816111c4565b036120d457346120bb576001602082015151611c9e816111c4565b611ca7816111c4565b036120b4576040602082015101515b421161209b576040904282820151523360208383015101528051518280830151015260208151015160608383015101526000608083830151015242600052600660205281600020600160ff19825416179055015160056080604060002092805160018501556002840160018060a01b0360208301511660018060a01b0319825416179055604081015160038501556060810151600485015501519101557fc50146df3744254d2c4df384a8513863cda206482d8bf1740acc2caeb38c3e776020604051428152a17f2e4fd14e7542fc77c52cafc45e4df23c805cc4042532e685d965c35579fac7dd6020604051428152a1602042910152610140611db86117f5565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015261012081015161012085015243828501520151610160830152610140604051611e3f816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252611f8482611334565b81516001600160401b0381116102fc57611f9f600254611272565b601f8111612048575b50602092601f8211600114611fe55792819293600092611fda575b50508160011b916000199060031b1c191617600255565b015190503880611fc3565b601f19821693600260005260206000209160005b8681106120305750836001959610612017575b505050811b01600255565b015160001960f88460031b161c1916905538808061200c565b91926020600181928685015181550194019201611ff9565b6002600052600080516020613cf7833981519152601f830160051c81019160208410612091575b601f0160051c01905b8181106120855750611fa8565b60008155600101612078565b909150819061206f565b60405163100960cb60e01b8152601f6004820152602490fd5b6000611cb6565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b6001611c5a565b61211a602082015161192d565b60058110156111ce5760010361258257508351336001600160a01b039091160361257b5760005b1561256257602084015134036125495761215a3361143d565b51612164816111c4565b61216d816111c4565b6124f4575b6080604091612184838701514261188b565b8282015233600052600560205282600020600160ff198254161790557ff01b311f9779b91a7fa2ba5c8138c46f4ae1acfc247c95553fa57767e0667ac783838301518060018360002001558151903382526020820152a17fc150f8bdf6208dc5da5d83c9182bf5e2f30bd97e81952ca3b2c8ffa1585a33486020838301518551908152a101519101526122156117f5565b9160018060a01b0381511683526020810151602084015260408101516040840152606081015160608401526080810151608084015261225d60a082015160208301519061188b565b60a084015261226f60c0820151611860565b60c084015260e081015160e0840152610100810151610100840152610120810151610120840152436101408401526020610140820151910151016101608301526101406040516122be816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261240382611334565b81516001600160401b0381116102fc5761241e600254611272565b601f81116124a1575b50602092601f82116001146124585792819293600092611fda5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612489575083600195961061201757505050811b01600255565b9192602060018192868501518155019401920161246c565b6002600052600080516020613cf7833981519152601f830160051c810191602084106124ea575b601f0160051c01905b8181106124de5750612427565b600081556001016124d1565b90915081906124c8565b60016124ff3361143d565b51612509816111c4565b612512816111c4565b036121725760406125223361143d565b015180606083015242116121725760405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b6001612141565b612592602082969396015161192d565b60058110156111ce57600203612a20575060016125b36101208301516116cf565b516125bd816111c4565b6125c6816111c4565b03612a195760406125db6101208301516116cf565b01515b8060a08601521560c085015234612a005760c0840151156129ee57600060e08501525b60c0840151156129d05760006101008501525b60608101514211156129b95760006060610140936101208401518352600a60205260408320600160ff1982541617905561265860a08801516101008901519061188b565b6101208501518452600a60205260016040852001557f22393b527bdbf9b348ee4129f2a13cd63b7a78bf3bc7786a69eb3e3b74b799c26020610120860151604051908152a17fed81edf0db3659b4d1452e7dff29ab439938a270afdef7f8e2a2fffcf5a63ba76020604051858152a101526127326126d46117f5565b9460018060a01b038351168652602083015160208701526040830151604087015261270360408401514261188b565b606087015261271c60808401516101008301519061188b565b608087015261010060a084015191015190613c19565b60a085015260c081015160c085015260e081015160e08501526000610100850152612761610120820151611860565b61012085015243828501520151610160830152610140604051612783816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e081015161010085015261010081015161012085015261012081015182850152015161016083015261016082526128c882611334565b81516001600160401b0381116102fc576128e3600254611272565b601f8111612966575b50602092601f821160011461291d5792819293600092611fda5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061294e575083600195961061201757505050811b01600255565b91926020600181928685015181550194019201612931565b6002600052600080516020613cf7833981519152601f830160051c810191602084106129af575b601f0160051c01905b8181106129a357506128ec565b60008155600101612996565b909150819061298d565b602460405163100960cb60e01b8152816004820152fd5b6129e360a082015160e086015190613c19565b610100850152612614565b600360a08201510460e0850152612601565b60405163100960cb60e01b815260236004820152602490fd5b60006125de565b612a3160208296949396015161192d565b60058110156111ce576003036133285760806020612a5a92015101518061012085015251611513565b61014083019081526000610160840181815261018085018051839052875181516001600160a01b039091166020909101528151815160400152905181516060015251608001525151600190612aae816111c4565b612ab7816111c4565b0361331d57604061014083015101515b602001516001600160a01b03163303613304576001612ae53361143d565b51612aef816111c4565b612af8816111c4565b036132eb57600161014083015151612b0f816111c4565b612b18816111c4565b036132d257602061012083015101516101a0830151526101208201515160206101a084015101523360406101a08401510152612b82612b68612b766101a08501516040519283916020830161193a565b03601f198101835282611350565b60208151910120611718565b51612b8c816111c4565b612b95816111c4565b6132b9576001612bad602061012085015101516116cf565b51612bb7816111c4565b612bc0816111c4565b036132b2576040612bd9602061012085015101516116cf565b01515b6101c08301526001612bf660206101208501510151611686565b51612c00816111c4565b612c09816111c4565b036132ab576040612c2260206101208501510151611686565b01515b806101e0840152158061020084015260001461321b5760006102208301525b6102208201516101c08301511061320257610140840151610220830151116131e957346131d0576102008201511561312c5760006102608301525b6102608201516101c08301511061311357610140840151610260830151116130fa5760008080806102608601518181156130f1575b3390f1156130e5576101a0820151604051612cd781612b6860208201948561193a565b519020600052600b602052604060002060ff19906001828254161790556101a0830151604051612d0f81612b6860208201948561193a565b519020600052600b60205260406000206201000062ff00001982541617905560206101208401510151600052600a6020526001604060002091825416179055612d636101c083015161026084015190613c19565b60206101208401510151600052600a6020526001604060002001557f6aa35f8fbfa97661b0ad449ba66aca95b0a4eebb14e52af30f0f3574a4c791536080610120840151602081519101516102608601519060405192338452602084015260408301526060820152a17f3deccc6d3690f1f619d3b6b86b54500fe55d8af9968b58a02ff4d6b42b6a0f646020610260840151604051908152a1610180610260830151910152610260610140612e166117f5565b9460018060a01b038151168652602081015160208701526040810151604087015260608101516060870152612e5360808201518486015190613c19565b608087015260a081015160a087015260c081015160c087015260e081015160e0870152610100810151610100870152610120810151610120870152438287015201519101519003610160830152610140604051612eaf816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252612ff482611334565b81516001600160401b0381116102fc5761300f600254611272565b601f8111613092575b50602092601f82116001146130495792819293600092611fda5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061307a575083600195961061201757505050811b01600255565b9192602060018192868501518155019401920161305d565b6002600052600080516020613cf7833981519152601f830160051c810191602084106130db575b601f0160051c01905b8181106130cf5750613018565b600081556001016130c2565b90915081906130b9565b6040513d6000823e3d90fd5b506108fc612cb4565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b602061012083015101516102808301515261012082015151602061028084015101526131bd6131b16101c0840151600161317a6102808701516040516105f081612b68602082019485611964565b51613184816111c4565b61318d816111c4565b036131c857604061063a61028087015182516105f081612b68602082019485611964565b6101e08401519061197a565b610260830152612c7f565b600090613c26565b60405163100960cb60e01b8152602b6004820152602490fd5b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b602061012083015101516102408301515261012082015151602061024084015101526132a06131b16101c084015160016132696102408701516040516105f081612b68602082019485611964565b51613273816111c4565b61327c816111c4565b036131c857604061063a61024087015182516105f081612b68602082019485611964565b610220830152612c44565b6000612c25565b6000612bdc565b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b610180820151612ac7565b613338602082949394015161192d565b60058110156111ce57600414613350575b5050509050565b6020015160a001516102a08201528351336001600160a01b0390911603613bbb5760005b15613ba25760016133843361143d565b806102c084015251613395816111c4565b61339e816111c4565b03613b895760016133b46102a083015151611513565b806102e0840152516133c5816111c4565b6133ce816111c4565b03613b7057610120840151610300820151526102a081015151602061030083015101523360406103008301510152613426612b6861341a6103008401516040519283916020830161193a565b60208151910120611613565b51613430816111c4565b613439816111c4565b613b575734613b3e5760016102c082015151613454816111c4565b61345d816111c4565b03613b375760406102c082015101515b4211613b1e576000917fb091fe3ff5bcc354914ab49469d6febeeec7ad0134e4f94bb8c834da0c391c9f60606102a084866103206101a0970152866103408201515260018060a01b038951166020610340830151015261032081015160406103408301510152610320810151836103408301510152866080610340830151015260016102e0820151516134ff816111c4565b613508816111c4565b148714613b135760406102e082015101515b6103608201526101208901516103808201515281810151516020610380830151015261038081015160405161355781612b68602082019485611964565b519020875260076020526040872060ff199060018282541617905560016135926103808401516040516105f081612b68602082019485611964565b5161359c816111c4565b6135a5816111c4565b148814613b0a576135d560406135ce61038085015182516105f081612b68602082019485611964565b0151611860565b6103808301516040516135f081612b68602082019485611964565b51902089526007602052600160408a20015561030082015160405161361d81612b6860208201948561193a565b519020885260086020526040882060018282541617905561030082015160405161364f81612b6860208201948561193a565b51902088526008602052604088206201000062ff0000198254161790556101208a0151885260096020526040882060018282541617905560016136966101208c0151611686565b516136a0816111c4565b6136a9816111c4565b148814613b01576136c360406135ce6101208d0151611686565b6101208b015189526009602052600160408a200155610360820151516103a08301515260018060a01b03602061036084015101511660206103a084015101526040610360830151015160406103a08401510152836103608301510151846103a0840151015261373a60806103608401510151611860565b60806103a08401510152828201515188526006602052600160408920918254161790556103a0810151828201515188526005608060408a2092805160018501556002840160018060a01b0360208301511660018060a01b03198254161790556040810151600385015586810151600485015501519101550151516101208801516040519133835260208301526040820152a17f368b9d3111860d52a8ffa73f285e3a88d35368ab7fd1a207aec2a8bb9e39400b6020604051858152a101526101406138036117f5565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015261385960e0820151611860565b60e085015261386c610100820151611860565b6101008501526101208101516101208501524382850152015161016083015261014060405161389a816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e081015161010085015261010081015161012085015261012081015182850152015161016083015261016082526139df82611334565b81516001600160401b0381116102fc576139fa600254611272565b601f8111613aae575b50602092601f8211600114613a485792819293600092613a3d575b50508160011b916000199060031b1c1916176002555b80388080613349565b015190503880613a1e565b601f19821693600260005260206000209160005b868110613a965750836001959610613a7d575b505050811b01600255613a34565b015160001960f88460031b161c19169055388080613a6f565b91926020600181928685015181550194019201613a5c565b6002600052600080516020613cf7833981519152601f830160051c81019160208410613af7575b601f0160051c01905b818110613aeb5750613a03565b60008155600101613ade565b9091508190613ad5565b6136c388611860565b6135d588611860565b61034081015161351a565b60405163100960cb60e01b815260336004820152602490fd5b600061346d565b60405163100960cb60e01b815260326004820152602490fd5b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b6001613374565b60405163100960cb60e01b8152601b6004820152602490fd5b90506001541438611c1a565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b9081039081116118755790565b600092918015918215613c3d575b50501561016857565b91509250806000190483118115151661187557613c5d838202938461197a565b143880613c34565b60408051919060c083016001600160401b038111848210176102fc57815260a0836000928382528051613c97816112ac565b848152846020820152602083015283818301528360608301528051613cbb816112ac565b84815284602082015260808301525192613cd4846112c7565b83520152565b60405190613ce7826112ac565b8160008152602061150e613c6556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 16625,
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
    at: './index.rsh:295:11:after expr stmt semicolon',
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
