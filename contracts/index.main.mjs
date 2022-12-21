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
    payoutReceived: [ctc1, ctc0, ctc0],
    songAdded: [ctc0],
    voted: [ctc1, ctc0],
  }
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib
  const ctc0 = stdlib.T_Address
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0])
  const ctc3 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'),
  )
  const ctc4 = stdlib.T_Struct([
    ['creator', ctc0],
    ['art', ctc3],
    ['audio', ctc3],
    ['owner', ctc0],
  ])
  const ctc5 = stdlib.T_Bool
  const ctc6 = stdlib.T_Null
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1,
  })
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc4,
  })
  const ctc9 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6,
  })
  const ctc10 = stdlib.T_Data({
    None: ctc6,
    Some: ctc5,
  })
  const map0_ctc = ctc7

  const map1_ctc = ctc8

  const map2_ctc = ctc9

  const map3_ctc = ctc7

  const map4_ctc = ctc10

  const map5_ctc = ctc7

  const map6_ctc = ctc7

  const map7_ctc = ctc10

  const map8_ctc = ctc7

  const map9_ctc = ctc10

  const _getCurrentVotingPeriod = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async () => {
        return v4980
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
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async () => {
        return v4962
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
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async (_v5046) => {
        const v5046 = stdlib.protect(ctc0, _v5046, null)

        const v5047 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v5046),
          null,
        )
        const v5048 = {
          None: 0,
          Some: 1,
        }[v5047[0]]
        const v5049 = stdlib.eq(
          v5048,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5049, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:147:29:application call to [unknown function] (defined at: ./index.rsh:147:29:application)',
          ],
          msg: 'is member',
          who: 'Module',
        })
        const v5052 = stdlib.fromSome(
          v5047,
          stdlib.checkedBigNumberify(
            './index.rsh:149:43:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v5052
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getOwnerPayout = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async (_v5053, _v5054) => {
        const v5053 = stdlib.protect(ctc0, _v5053, null)
        const v5054 = stdlib.protect(ctc1, _v5054, null)

        const v5055 = stdlib.protect(
          map6_ctc,
          await viewlib.viewMapRef(6, v5054),
          null,
        )
        const v5056 = stdlib.fromSome(
          v5055,
          stdlib.checkedBigNumberify(
            './index.rsh:111:63:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5057 = stdlib.protect(
          map5_ctc,
          await viewlib.viewMapRef(5, v5054),
          null,
        )
        const v5058 = stdlib.fromSome(
          v5057,
          stdlib.checkedBigNumberify(
            './index.rsh:114:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5059 = stdlib.eq(
          v5058,
          stdlib.checkedBigNumberify(
            './index.rsh:116:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v5060
        if (v5059) {
          v5060 = stdlib.checkedBigNumberify(
            './index.rsh:117:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5061 = [v5054, v5053]
          const v5062 = stdlib.protect(
            map3_ctc,
            await viewlib.viewMapRef(3, stdlib.digest([ctc2], [v5061])),
            null,
          )
          const v5063 = stdlib.fromSome(
            v5062,
            stdlib.checkedBigNumberify(
              './index.rsh:120:56:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5064 = stdlib.safeMuldiv(v5056, v5063, v5058)
          v5060 = v5064
        }

        return v5060
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
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async () => {
        return v4973
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getPeriodMembers = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async () => {
        return v4974
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
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async (_v5040) => {
        const v5040 = stdlib.protect(ctc1, _v5040, null)

        const v5041 = stdlib.protect(
          map6_ctc,
          await viewlib.viewMapRef(6, v5040),
          null,
        )
        const v5042 = stdlib.fromSome(
          v5041,
          stdlib.checkedBigNumberify(
            './index.rsh:140:68:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v5042
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getPeriodVotes = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async () => {
        return v4979
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _getProfitAmt = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async (_v5043) => {
        const v5043 = stdlib.protect(ctc1, _v5043, null)

        const v5044 = stdlib.protect(
          map8_ctc,
          await viewlib.viewMapRef(8, v5043),
          null,
        )
        const v5045 = stdlib.fromSome(
          v5044,
          stdlib.checkedBigNumberify(
            './index.rsh:141:63:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v5045
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
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async (_v5030) => {
        const v5030 = stdlib.protect(ctc1, _v5030, null)

        const v5031 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, v5030),
          null,
        )
        const v5032 = {
          None: 0,
          Some: 1,
        }[v5031[0]]
        const v5033 = stdlib.eq(
          v5032,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5033, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:136:20:application call to [unknown function] (defined at: ./index.rsh:136:20:application)',
          ],
          msg: 'song exists',
          who: 'Module',
        })
        const v5036 = '                                '
        const v5038 = {
          art: v5036,
          audio: v5036,
          creator: v4961,
          owner: v4961,
        }
        const v5039 = stdlib.fromSome(v5031, v5038)

        return v5039
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
      const [v4961, v4962, v4963] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v4961,
        v4962,
        v4963,
        v4973,
        v4974,
        v4975,
        v4976,
        v4977,
        v4978,
        v4979,
        v4980,
        v4988,
      ] = svs
      return await (async (_v5065, _v5066) => {
        const v5065 = stdlib.protect(ctc1, _v5065, null)
        const v5066 = stdlib.protect(ctc0, _v5066, null)

        const v5067 = [v5065, v5066]
        const v5068 = stdlib.protect(
          map4_ctc,
          await viewlib.viewMapRef(4, stdlib.digest([ctc2], [v5067])),
          null,
        )
        const v5069 = stdlib.fromSome(v5068, false)

        return v5069
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  return {
    infos: {
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
      getOwnerPayout: {
        decode: _getOwnerPayout,
        dom: [ctc0, ctc1],
        rng: ctc1,
      },
      getPeriodEndTime: {
        decode: _getPeriodEndTime,
        dom: [],
        rng: ctc1,
      },
      getPeriodMembers: {
        decode: _getPeriodMembers,
        dom: [],
        rng: ctc1,
      },
      getPeriodPayouts: {
        decode: _getPeriodPayouts,
        dom: [ctc1],
        rng: ctc1,
      },
      getPeriodVotes: {
        decode: _getPeriodVotes,
        dom: [],
        rng: ctc1,
      },
      getProfitAmt: {
        decode: _getProfitAmt,
        dom: [ctc1],
        rng: ctc1,
      },
      getSong: {
        decode: _getSong,
        dom: [ctc1],
        rng: ctc4,
      },
      hasVoted: {
        decode: _hasVoted,
        dom: [ctc1, ctc0],
        rng: ctc5,
      },
    },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [
        ctc0,
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
        ctc1,
      ],
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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([
    ctc2,
    ctc6,
    ctc7,
    ctc2,
    ctc9,
    ctc2,
    ctc2,
    ctc9,
    ctc2,
    ctc9,
  ])
  return {
    mapDataTy: ctc10,
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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc11 = stdlib.T_Tuple([])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Tuple([ctc3])
  const ctc14 = stdlib.T_Data({
    addSong0_636: ctc10,
    buyMembership0_636: ctc11,
    endVotingPeriod0_636: ctc11,
    receivePayout0_636: ctc12,
    takeProfit0_636: ctc12,
    vote0_636: ctc13,
  })
  const ctc15 = stdlib.T_Tuple([ctc1, ctc3])

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

  const map2_ctc = ctc7
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc,
  })

  const map3_ctc = ctc2
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc,
  })

  const map4_ctc = ctc9
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

  const map6_ctc = ctc2
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc,
  })

  const map7_ctc = ctc9
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc,
  })

  const map8_ctc = ctc2
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: false,
    ty: map8_ctc,
  })

  const map9_ctc = ctc9
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: false,
    ty: map9_ctc,
  })

  const v4957 = stdlib.protect(
    ctc1,
    interact.membershipCost,
    "for Deployer's interact field membershipCost",
  )
  const v4958 = stdlib.protect(
    ctc1,
    interact.periodLength,
    "for Deployer's interact field periodLength",
  )

  const txn1 = await ctc.sendrecv({
    args: [v4957, v4958],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:59:5:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:59:5:decimal',
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [v4962, v4963],
        secs: v4965,
        time: v4964,
        didSend: v29,
        from: v4961,
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
    data: [v4962, v4963],
    secs: v4965,
    time: v4964,
    didSend: v29,
    from: v4961,
  } = txn1
  const txn2 = await ctc.sendrecv({
    args: [v4961, v4962, v4963],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4964,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:86:5:decimal',
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [],
        secs: v4968,
        time: v4967,
        didSend: v35,
        from: v4966,
      } = txn2

      const v4972 = stdlib.safeAdd(v4968, v4963)
      const v4973 = v4972
      const v4974 = stdlib.checkedBigNumberify(
        './index.rsh:100:68:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4975 = stdlib.checkedBigNumberify(
        './index.rsh:100:65:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4976 = stdlib.checkedBigNumberify(
        './index.rsh:100:62:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4977 = stdlib.checkedBigNumberify(
        './index.rsh:100:23:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4978 = stdlib.checkedBigNumberify(
        './index.rsh:100:59:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4979 = stdlib.checkedBigNumberify(
        './index.rsh:100:56:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4980 = stdlib.checkedBigNumberify(
        './index.rsh:100:26:decimal',
        stdlib.UInt_max,
        '1',
      )
      const v4981 = v4967
      const v4988 = stdlib.checkedBigNumberify(
        './index.rsh:54:9:after expr stmt semicolon',
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
    secs: v4968,
    time: v4967,
    didSend: v35,
    from: v4966,
  } = txn2
  const v4969 = stdlib.addressEq(v4961, v4966)
  stdlib.assert(v4969, {
    at: './index.rsh:86:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer',
  })
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:87:19:application',
    fs: [
      'at ./index.rsh:87:19:application call to [unknown function] (defined at: ./index.rsh:87:19:function exp)',
      'at ./index.rsh:87:19:application call to "liftedInteract" (defined at: ./index.rsh:87:19:application)',
    ],
    msg: 'ready',
    who: 'Deployer',
  })

  const v4972 = stdlib.safeAdd(v4968, v4963)
  let v4973 = v4972
  let v4974 = stdlib.checkedBigNumberify(
    './index.rsh:100:68:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4975 = stdlib.checkedBigNumberify(
    './index.rsh:100:65:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4976 = stdlib.checkedBigNumberify(
    './index.rsh:100:62:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4977 = stdlib.checkedBigNumberify(
    './index.rsh:100:23:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4978 = stdlib.checkedBigNumberify(
    './index.rsh:100:59:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4979 = stdlib.checkedBigNumberify(
    './index.rsh:100:56:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4980 = stdlib.checkedBigNumberify(
    './index.rsh:100:26:decimal',
    stdlib.UInt_max,
    '1',
  )
  let v4981 = v4967
  let v4988 = stdlib.checkedBigNumberify(
    './index.rsh:54:9:after expr stmt semicolon',
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
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    })
    const {
      data: [v5334],
      secs: v5336,
      time: v5335,
      didSend: v4401,
      from: v5333,
    } = txn4
    switch (v5334[0]) {
      case 'addSong0_636': {
        const v5337 = v5334[1]
        undefined /* setApiDetails */
        const v5344 = stdlib.addressEq(v5333, v4961)
        const v5345 = v5344 ? false : true
        stdlib.assert(v5345, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5347 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5333),
          null,
        )
        const v5348 = {
          None: 0,
          Some: 1,
        }[v5347[0]]
        const v5349 = stdlib.eq(
          v5348,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5349, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:203:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
            'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5351 = stdlib.safeAdd(
          v4976,
          stdlib.checkedBigNumberify(
            './index.rsh:205:35:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5352 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v5351),
          null,
        )
        const v5353 = {
          None: 0,
          Some: 1,
        }[v5352[0]]
        const v5354 = stdlib.eq(
          v5353,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v5354, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'song id exist',
          who: 'Deployer',
        })
        const v5457 =
          v5337[
            stdlib.checkedBigNumberify(
              './index.rsh:201:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5458 =
          v5337[
            stdlib.checkedBigNumberify(
              './index.rsh:201:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v5476 = stdlib.fromSome(
          v5347,
          stdlib.checkedBigNumberify(
            './index.rsh:106:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5477 = stdlib.le(v5336, v5476)
        stdlib.assert(v5477, {
          at: './index.rsh:107:16:application',
          fs: [
            'at ./index.rsh:210:28:application call to "enforceMembership" (defined at: ./index.rsh:104:37:function exp)',
            'at ./index.rsh:209:16:application call to [unknown function] (defined at: ./index.rsh:209:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v5478 = {
          art: v5457,
          audio: v5458,
          creator: v5333,
          owner: v5333,
        }
        await stdlib.mapSet(map1, v5351, v5478)
        const v5479 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v5333),
          null,
        )
        const v5480 = {
          None: 0,
          Some: 1,
        }[v5479[0]]
        const v5481 = stdlib.eq(
          v5480,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        if (v5481) {
          null
          await txn4.getOutput('addSong', 'v5351', ctc1, v5351)
          const cv4973 = v4973
          const cv4974 = v4974
          const cv4975 = v4975
          const cv4976 = v5351
          const cv4977 = v4977
          const cv4978 = v4978
          const cv4979 = v4979
          const cv4980 = v4980
          const cv4981 = v5335
          const cv4988 = v4988

          v4973 = cv4973
          v4974 = cv4974
          v4975 = cv4975
          v4976 = cv4976
          v4977 = cv4977
          v4978 = cv4978
          v4979 = cv4979
          v4980 = cv4980
          v4981 = cv4981
          v4988 = cv4988

          txn3 = txn4
          continue
        } else {
          await stdlib.mapSet(map2, v5333, null)
          null
          await txn4.getOutput('addSong', 'v5351', ctc1, v5351)
          const cv4973 = v4973
          const cv4974 = v4974
          const cv4975 = v4975
          const cv4976 = v5351
          const cv4977 = v4977
          const cv4978 = v4978
          const cv4979 = v4979
          const cv4980 = v4980
          const cv4981 = v5335
          const cv4988 = v4988

          v4973 = cv4973
          v4974 = cv4974
          v4975 = cv4975
          v4976 = cv4976
          v4977 = cv4977
          v4978 = cv4978
          v4979 = cv4979
          v4980 = cv4980
          v4981 = cv4981
          v4988 = cv4988

          txn3 = txn4
          continue
        }
        break
      }
      case 'buyMembership0_636': {
        const v5658 = v5334[1]
        undefined /* setApiDetails */
        const v5681 = stdlib.addressEq(v5333, v4961)
        const v5682 = v5681 ? false : true
        stdlib.assert(v5682, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:163:31:application call to [unknown function] (defined at: ./index.rsh:163:31:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:163:31:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5776 = stdlib.add(v4988, v4962)
        const v5827 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, v4980),
          null,
        )
        const v5828 = stdlib.fromSome(
          v5827,
          stdlib.checkedBigNumberify(
            './index.rsh:165:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5829 = stdlib.protect(
          map8_ctc,
          await stdlib.mapRef(map8, v4980),
          null,
        )
        const v5830 = stdlib.fromSome(
          v5829,
          stdlib.checkedBigNumberify(
            './index.rsh:166:57:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5831 = stdlib.safeDiv(
          v4962,
          stdlib.checkedBigNumberify(
            './index.rsh:167:45:decimal',
            stdlib.UInt_max,
            '3',
          ),
        )
        const v5832 = stdlib.safeSub(v4962, v5831)
        const v5834 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5333),
          null,
        )
        const v5835 = stdlib.gt(v4973, v5336)
        stdlib.assert(v5835, {
          at: './index.rsh:175:18:application',
          fs: [
            'at ./index.rsh:174:16:application call to [unknown function] (defined at: ./index.rsh:174:16:function exp)',
          ],
          msg: 'period is live',
          who: 'Deployer',
        })
        switch (v5834[0]) {
          case 'None': {
            const v5836 = v5834[1]

            break
          }
          case 'Some': {
            const v5837 = v5834[1]
            const v5838 = stdlib.gt(v5336, v5837)
            stdlib.assert(v5838, {
              at: './index.rsh:180:22:application',
              fs: [
                'at ./index.rsh:174:16:application call to [unknown function] (defined at: ./index.rsh:174:16:function exp)',
              ],
              msg: 'membership expired',
              who: 'Deployer',
            })

            break
          }
        }
        const v5839 = stdlib.safeAdd(v5336, v4963)
        await stdlib.mapSet(map0, v5333, v5839)
        const v5840 = stdlib.safeAdd(v5830, v5831)
        await stdlib.mapSet(map8, v4980, v5840)
        const v5841 = stdlib.safeAdd(v5828, v5832)
        await stdlib.mapSet(map6, v4980, v5841)
        null
        await txn4.getOutput('buyMembership', 'v5839', ctc1, v5839)
        const v5847 = stdlib.safeAdd(
          v4977,
          stdlib.checkedBigNumberify(
            './index.rsh:189:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5848 = stdlib.safeAdd(v4975, v5831)
        const v5849 = stdlib.safeAdd(
          v4974,
          stdlib.checkedBigNumberify(
            './index.rsh:196:26:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv4973 = v4973
        const cv4974 = v5849
        const cv4975 = v5848
        const cv4976 = v4976
        const cv4977 = v5847
        const cv4978 = v4978
        const cv4979 = v4979
        const cv4980 = v4980
        const cv4981 = v5335
        const cv4988 = v5776

        v4973 = cv4973
        v4974 = cv4974
        v4975 = cv4975
        v4976 = cv4976
        v4977 = cv4977
        v4978 = cv4978
        v4979 = cv4979
        v4980 = cv4980
        v4981 = cv4981
        v4988 = cv4988

        txn3 = txn4
        continue
        break
      }
      case 'endVotingPeriod0_636': {
        const v5979 = v5334[1]
        undefined /* setApiDetails */
        const v6174 = stdlib.gt(v5336, v4973)
        stdlib.assert(v6174, {
          at: './index.rsh:267:18:application',
          fs: [
            'at ./index.rsh:266:16:application call to [unknown function] (defined at: ./index.rsh:266:16:function exp)',
          ],
          msg: 'voting period over',
          who: 'Deployer',
        })
        null
        const v6175 = null
        await txn4.getOutput('endVotingPeriod', 'v6175', ctc0, v6175)
        const v6181 = stdlib.safeAdd(
          v4980,
          stdlib.checkedBigNumberify(
            './index.rsh:272:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v6182 = stdlib.safeAdd(v5336, v4963)
        const cv4973 = v6182
        const cv4974 = stdlib.checkedBigNumberify(
          './index.rsh:278:13:decimal',
          stdlib.UInt_max,
          '0',
        )
        const cv4975 = v4975
        const cv4976 = v4976
        const cv4977 = v4977
        const cv4978 = v4978
        const cv4979 = stdlib.checkedBigNumberify(
          './index.rsh:274:13:decimal',
          stdlib.UInt_max,
          '0',
        )
        const cv4980 = v6181
        const cv4981 = v5335
        const cv4988 = v4988

        v4973 = cv4973
        v4974 = cv4974
        v4975 = cv4975
        v4976 = cv4976
        v4977 = cv4977
        v4978 = cv4978
        v4979 = cv4979
        v4980 = cv4980
        v4981 = cv4981
        v4988 = cv4988

        txn3 = txn4
        continue
        break
      }
      case 'receivePayout0_636': {
        const v6300 = v5334[1]
        undefined /* setApiDetails */
        const v6345 =
          v6300[
            stdlib.checkedBigNumberify(
              './index.rsh:283:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6346 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5333),
          null,
        )
        const v6347 = {
          None: 0,
          Some: 1,
        }[v6346[0]]
        const v6348 = stdlib.eq(
          v6347,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6348, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:285:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
            'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v6350 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v5333),
          null,
        )
        const v6351 = {
          None: 0,
          Some: 1,
        }[v6350[0]]
        const v6352 = stdlib.eq(
          v6351,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v6352, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'is owner',
          who: 'Deployer',
        })
        const v6354 = [v6345, v5333]
        const v6355 = stdlib.protect(
          map7_ctc,
          await stdlib.mapRef(map7, stdlib.digest([ctc15], [v6354])),
          null,
        )
        const v6356 = {
          None: 0,
          Some: 1,
        }[v6355[0]]
        const v6357 = stdlib.eq(
          v6356,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v6357, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'has received payout',
          who: 'Deployer',
        })
        const v6359 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, v6345),
          null,
        )
        const v6360 = stdlib.fromSome(
          v6359,
          stdlib.checkedBigNumberify(
            './index.rsh:288:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6363 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v6345),
          null,
        )
        const v6364 = stdlib.fromSome(
          v6363,
          stdlib.checkedBigNumberify(
            './index.rsh:114:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6365 = stdlib.eq(
          v6364,
          stdlib.checkedBigNumberify(
            './index.rsh:116:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v6366
        if (v6365) {
          v6366 = stdlib.checkedBigNumberify(
            './index.rsh:117:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v6368 = stdlib.protect(
            map3_ctc,
            await stdlib.mapRef(map3, stdlib.digest([ctc15], [v6354])),
            null,
          )
          const v6369 = stdlib.fromSome(
            v6368,
            stdlib.checkedBigNumberify(
              './index.rsh:120:56:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6370 = stdlib.safeMuldiv(v6360, v6369, v6364)
          v6366 = v6370
        }
        const v6371 = stdlib.le(v6366, v6360)
        stdlib.assert(v6371, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v6374 = stdlib.ge(v4988, v6366)
        stdlib.assert(v6374, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        let v6527
        if (v6365) {
          v6527 = stdlib.checkedBigNumberify(
            './index.rsh:117:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v6529 = stdlib.protect(
            map3_ctc,
            await stdlib.mapRef(map3, stdlib.digest([ctc15], [v6354])),
            null,
          )
          const v6530 = stdlib.fromSome(
            v6529,
            stdlib.checkedBigNumberify(
              './index.rsh:120:56:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6531 = stdlib.safeMuldiv(v6360, v6530, v6364)
          v6527 = v6531
        }
        const v6532 = stdlib.le(v6527, v6360)
        stdlib.assert(v6532, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:294:16:application call to [unknown function] (defined at: ./index.rsh:294:16:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v6535 = stdlib.ge(v4988, v6527)
        stdlib.assert(v6535, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:294:16:application call to [unknown function] (defined at: ./index.rsh:294:16:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        const v6541 = stdlib.sub(v4988, v6527)
        await stdlib.mapSet(map7, stdlib.digest([ctc15], [v6354]), true)
        const v6543 = stdlib.safeSub(v6360, v6527)
        await stdlib.mapSet(map6, v6345, v6543)
        null
        await txn4.getOutput('receivePayout', 'v6527', ctc1, v6527)
        const cv4973 = v4973
        const cv4974 = v4974
        const cv4975 = v4975
        const cv4976 = v4976
        const cv4977 = v4977
        const cv4978 = v4978
        const cv4979 = v4979
        const cv4980 = v4980
        const cv4981 = v5335
        const cv4988 = v6541

        v4973 = cv4973
        v4974 = cv4974
        v4975 = cv4975
        v4976 = cv4976
        v4977 = cv4977
        v4978 = cv4978
        v4979 = cv4979
        v4980 = cv4980
        v4981 = cv4981
        v4988 = cv4988

        txn3 = txn4
        continue
        break
      }
      case 'takeProfit0_636': {
        const v6621 = v5334[1]
        undefined /* setApiDetails */
        const v6701 =
          v6621[
            stdlib.checkedBigNumberify(
              './index.rsh:313:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6702 = stdlib.addressEq(v5333, v4961)
        stdlib.assert(v6702, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'is deployer',
          who: 'Deployer',
        })
        const v6704 = stdlib.protect(
          map9_ctc,
          await stdlib.mapRef(map9, v6701),
          null,
        )
        const v6705 = {
          None: 0,
          Some: 1,
        }[v6704[0]]
        const v6706 = stdlib.eq(
          v6705,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v6706, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'has received payout',
          who: 'Deployer',
        })
        const v6708 = stdlib.protect(
          map8_ctc,
          await stdlib.mapRef(map8, v6701),
          null,
        )
        const v6709 = stdlib.fromSome(
          v6708,
          stdlib.checkedBigNumberify(
            './index.rsh:317:57:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6711 = stdlib.ge(v4988, v6709)
        stdlib.assert(v6711, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:318:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        const v6889 = stdlib.sub(v4988, v6709)
        await stdlib.mapSet(map9, v6701, true)
        await stdlib.mapSet(
          map8,
          v6701,
          stdlib.checkedBigNumberify(
            './index.rsh:324:29:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        await txn4.getOutput('takeProfit', 'v6709', ctc1, v6709)
        const v6896 = stdlib.safeSub(v4975, v6709)
        const cv4973 = v4973
        const cv4974 = v4974
        const cv4975 = v6896
        const cv4976 = v4976
        const cv4977 = v4977
        const cv4978 = v4978
        const cv4979 = v4979
        const cv4980 = v4980
        const cv4981 = v5335
        const cv4988 = v6889

        v4973 = cv4973
        v4974 = cv4974
        v4975 = cv4975
        v4976 = cv4976
        v4977 = cv4977
        v4978 = cv4978
        v4979 = cv4979
        v4980 = cv4980
        v4981 = cv4981
        v4988 = cv4988

        txn3 = txn4
        continue
        break
      }
      case 'vote0_636': {
        const v6942 = v5334[1]
        undefined /* setApiDetails */
        const v7038 =
          v6942[
            stdlib.checkedBigNumberify(
              './index.rsh:235:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v7039 = stdlib.addressEq(v5333, v4961)
        const v7040 = v7039 ? false : true
        stdlib.assert(v7040, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v7042 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v5333),
          null,
        )
        const v7043 = {
          None: 0,
          Some: 1,
        }[v7042[0]]
        const v7044 = stdlib.eq(
          v7043,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v7044, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:238:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
            'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v7046 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v7038),
          null,
        )
        const v7047 = {
          None: 0,
          Some: 1,
        }[v7046[0]]
        const v7048 = stdlib.eq(
          v7047,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v7048, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'is valid artist',
          who: 'Deployer',
        })
        const v7050 = [v4980, v5333]
        const v7051 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, stdlib.digest([ctc15], [v7050])),
          null,
        )
        const v7052 = {
          None: 0,
          Some: 1,
        }[v7051[0]]
        const v7053 = stdlib.eq(
          v7052,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v7053, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
            'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
          ],
          msg: 'has voted',
          who: 'Deployer',
        })
        const v7241 = stdlib.fromSome(
          v7042,
          stdlib.checkedBigNumberify(
            './index.rsh:106:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v7242 = stdlib.le(v5336, v7241)
        stdlib.assert(v7242, {
          at: './index.rsh:107:16:application',
          fs: [
            'at ./index.rsh:244:28:application call to "enforceMembership" (defined at: ./index.rsh:104:37:function exp)',
            'at ./index.rsh:243:16:application call to [unknown function] (defined at: ./index.rsh:243:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v7243 = [v4980, v7038]
        const v7244 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc15], [v7243])),
          null,
        )
        const v7245 = stdlib.fromSome(
          v7244,
          stdlib.checkedBigNumberify(
            './index.rsh:126:62:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v7247 = stdlib.safeAdd(
          v7245,
          stdlib.checkedBigNumberify(
            './index.rsh:127:48:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map3, stdlib.digest([ctc15], [v7243]), v7247)
        await stdlib.mapSet(map4, stdlib.digest([ctc15], [v7050]), true)
        const v7249 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v4980),
          null,
        )
        const v7250 = stdlib.fromSome(
          v7249,
          stdlib.checkedBigNumberify(
            './index.rsh:131:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v7251 = stdlib.safeAdd(
          v7250,
          stdlib.checkedBigNumberify(
            './index.rsh:133:67:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map5, v4980, v7251)
        null
        const v7253 = null
        await txn4.getOutput('vote', 'v7253', ctc0, v7253)
        const v7260 = stdlib.safeAdd(
          v4979,
          stdlib.checkedBigNumberify(
            './index.rsh:252:30:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v7261 = stdlib.safeAdd(
          v4978,
          stdlib.checkedBigNumberify(
            './index.rsh:253:26:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv4973 = v4973
        const cv4974 = v4974
        const cv4975 = v4975
        const cv4976 = v4976
        const cv4977 = v4977
        const cv4978 = v7261
        const cv4979 = v7260
        const cv4980 = v4980
        const cv4981 = v5335
        const cv4988 = v4988

        v4973 = cv4973
        v4974 = cv4974
        v4975 = cv4975
        v4976 = cv4976
        v4977 = cv4977
        v4978 = cv4978
        v4979 = cv4979
        v4980 = cv4980
        v4981 = cv4981
        v4988 = cv4988

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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc11 = stdlib.T_Tuple([])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Tuple([ctc3])
  const ctc14 = stdlib.T_Data({
    addSong0_636: ctc10,
    buyMembership0_636: ctc11,
    endVotingPeriod0_636: ctc11,
    receivePayout0_636: ctc12,
    takeProfit0_636: ctc12,
    vote0_636: ctc13,
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

  const map2_ctc = ctc7
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc2
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc9
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

  const map6_ctc = ctc2
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const map7_ctc = ctc9
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc,
  })

  const map8_ctc = ctc2
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc,
  })

  const map9_ctc = ctc9
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc,
  })

  const [
    v4961,
    v4962,
    v4963,
    v4973,
    v4974,
    v4975,
    v4976,
    v4977,
    v4978,
    v4979,
    v4980,
    v4988,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v5090 = ctc.selfAddress()
  const v5092 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
      'at ./index.rsh:100:21:application call to "runaddSong0_636" (defined at: ./index.rsh:201:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'in',
    who: 'addSong',
  })
  const v5097 = stdlib.addressEq(v5090, v4961)
  const v5098 = v5097 ? false : true
  stdlib.assert(v5098, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
      'at ./index.rsh:100:21:application call to "runaddSong0_636" (defined at: ./index.rsh:201:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'addSong',
  })
  const v5100 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v5090), null)
  const v5101 = {
    None: 0,
    Some: 1,
  }[v5100[0]]
  const v5102 = stdlib.eq(
    v5101,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v5102, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:203:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
      'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
      'at ./index.rsh:100:21:application call to "runaddSong0_636" (defined at: ./index.rsh:201:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'is member',
    who: 'addSong',
  })
  const v5104 = stdlib.safeAdd(
    v4976,
    stdlib.checkedBigNumberify(
      './index.rsh:205:35:decimal',
      stdlib.UInt_max,
      '1',
    ),
  )
  const v5105 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v5104), null)
  const v5106 = {
    None: 0,
    Some: 1,
  }[v5105[0]]
  const v5107 = stdlib.eq(
    v5106,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v5107, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
      'at ./index.rsh:100:21:application call to "runaddSong0_636" (defined at: ./index.rsh:201:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'song id exist',
    who: 'addSong',
  })
  const v5116 = ['addSong0_636', v5092]

  const txn1 = await ctc.sendrecv({
    args: [
      v4961,
      v4962,
      v4963,
      v4973,
      v4974,
      v4975,
      v4976,
      v4977,
      v4978,
      v4979,
      v4980,
      v4988,
      v5116,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:208:10:decimal',
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [v5334],
        secs: v5336,
        time: v5335,
        didSend: v4401,
        from: v5333,
      } = txn1

      switch (v5334[0]) {
        case 'addSong0_636': {
          const v5337 = v5334[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'addSong',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5333),
            null,
          )
          const v5351 = stdlib.safeAdd(
            v4976,
            stdlib.checkedBigNumberify(
              './index.rsh:205:35:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v5351),
            null,
          )
          const v5457 =
            v5337[
              stdlib.checkedBigNumberify(
                './index.rsh:201:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v5458 =
            v5337[
              stdlib.checkedBigNumberify(
                './index.rsh:201:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v5478 = {
            art: v5457,
            audio: v5458,
            creator: v5333,
            owner: v5333,
          }
          await stdlib.simMapSet(sim_r, 1, v5351, v5478)
          const v5479 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, v5333),
            null,
          )
          const v5480 = {
            None: 0,
            Some: 1,
          }[v5479[0]]
          const v5481 = stdlib.eq(
            v5480,
            stdlib.checkedBigNumberify(
              'reach standard library:38:41:application',
              stdlib.UInt_max,
              '1',
            ),
          )
          if (v5481) {
            null
            const v5493 = await txn1.getOutput('addSong', 'v5351', ctc1, v5351)

            const v18841 = v4973
            const v18842 = v4974
            const v18843 = v4975
            const v18844 = v5351
            const v18845 = v4977
            const v18846 = v4978
            const v18847 = v4979
            const v18848 = v4980
            const v18850 = v4988
            sim_r.isHalt = false
          } else {
            await stdlib.simMapSet(sim_r, 2, v5333, null)
            null
            const v5484 = await txn1.getOutput('addSong', 'v5351', ctc1, v5351)

            const v18851 = v4973
            const v18852 = v4974
            const v18853 = v4975
            const v18854 = v5351
            const v18855 = v4977
            const v18856 = v4978
            const v18857 = v4979
            const v18858 = v4980
            const v18860 = v4988
            sim_r.isHalt = false
          }
          break
        }
        case 'buyMembership0_636': {
          const v5658 = v5334[1]

          break
        }
        case 'endVotingPeriod0_636': {
          const v5979 = v5334[1]

          break
        }
        case 'receivePayout0_636': {
          const v6300 = v5334[1]

          break
        }
        case 'takeProfit0_636': {
          const v6621 = v5334[1]

          break
        }
        case 'vote0_636': {
          const v6942 = v5334[1]

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
      ctc1,
      ctc14,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5334],
    secs: v5336,
    time: v5335,
    didSend: v4401,
    from: v5333,
  } = txn1
  switch (v5334[0]) {
    case 'addSong0_636': {
      const v5337 = v5334[1]
      undefined /* setApiDetails */
      const v5344 = stdlib.addressEq(v5333, v4961)
      const v5345 = v5344 ? false : true
      stdlib.assert(v5345, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'addSong',
      })
      const v5347 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5333),
        null,
      )
      const v5348 = {
        None: 0,
        Some: 1,
      }[v5347[0]]
      const v5349 = stdlib.eq(
        v5348,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5349, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:203:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
          'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'is member',
        who: 'addSong',
      })
      const v5351 = stdlib.safeAdd(
        v4976,
        stdlib.checkedBigNumberify(
          './index.rsh:205:35:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5352 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v5351),
        null,
      )
      const v5353 = {
        None: 0,
        Some: 1,
      }[v5352[0]]
      const v5354 = stdlib.eq(
        v5353,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v5354, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:201:35:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:201:35:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'song id exist',
        who: 'addSong',
      })
      const v5457 =
        v5337[
          stdlib.checkedBigNumberify(
            './index.rsh:201:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5458 =
        v5337[
          stdlib.checkedBigNumberify(
            './index.rsh:201:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v5476 = stdlib.fromSome(
        v5347,
        stdlib.checkedBigNumberify(
          './index.rsh:106:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5477 = stdlib.le(v5336, v5476)
      stdlib.assert(v5477, {
        at: './index.rsh:107:16:application',
        fs: [
          'at ./index.rsh:210:28:application call to "enforceMembership" (defined at: ./index.rsh:104:37:function exp)',
          'at ./index.rsh:209:16:application call to [unknown function] (defined at: ./index.rsh:209:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'addSong',
      })
      const v5478 = {
        art: v5457,
        audio: v5458,
        creator: v5333,
        owner: v5333,
      }
      await stdlib.mapSet(map1, v5351, v5478)
      const v5479 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, v5333),
        null,
      )
      const v5480 = {
        None: 0,
        Some: 1,
      }[v5479[0]]
      const v5481 = stdlib.eq(
        v5480,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      if (v5481) {
        null
        const v5493 = await txn1.getOutput('addSong', 'v5351', ctc1, v5351)
        if (v4401) {
          stdlib.protect(ctc0, await interact.out(v5337, v5493), {
            at: './index.rsh:201:11:application',
            fs: [
              'at ./index.rsh:201:11:application call to [unknown function] (defined at: ./index.rsh:201:11:function exp)',
              'at ./index.rsh:221:17:application call to "notify" (defined at: ./index.rsh:209:16:function exp)',
              'at ./index.rsh:209:16:application call to [unknown function] (defined at: ./index.rsh:209:16:function exp)',
            ],
            msg: 'out',
            who: 'addSong',
          })
        } else {
        }

        const v18841 = v4973
        const v18842 = v4974
        const v18843 = v4975
        const v18844 = v5351
        const v18845 = v4977
        const v18846 = v4978
        const v18847 = v4979
        const v18848 = v4980
        const v18850 = v4988
        return
      } else {
        await stdlib.mapSet(map2, v5333, null)
        null
        const v5484 = await txn1.getOutput('addSong', 'v5351', ctc1, v5351)
        if (v4401) {
          stdlib.protect(ctc0, await interact.out(v5337, v5484), {
            at: './index.rsh:201:11:application',
            fs: [
              'at ./index.rsh:201:11:application call to [unknown function] (defined at: ./index.rsh:201:11:function exp)',
              'at ./index.rsh:221:17:application call to "notify" (defined at: ./index.rsh:209:16:function exp)',
              'at ./index.rsh:209:16:application call to [unknown function] (defined at: ./index.rsh:209:16:function exp)',
            ],
            msg: 'out',
            who: 'addSong',
          })
        } else {
        }

        const v18851 = v4973
        const v18852 = v4974
        const v18853 = v4975
        const v18854 = v5351
        const v18855 = v4977
        const v18856 = v4978
        const v18857 = v4979
        const v18858 = v4980
        const v18860 = v4988
        return
      }
      break
    }
    case 'buyMembership0_636': {
      const v5658 = v5334[1]
      return
      break
    }
    case 'endVotingPeriod0_636': {
      const v5979 = v5334[1]
      return
      break
    }
    case 'receivePayout0_636': {
      const v6300 = v5334[1]
      return
      break
    }
    case 'takeProfit0_636': {
      const v6621 = v5334[1]
      return
      break
    }
    case 'vote0_636': {
      const v6942 = v5334[1]
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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([])
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Tuple([ctc3])
  const ctc14 = stdlib.T_Data({
    addSong0_636: ctc11,
    buyMembership0_636: ctc10,
    endVotingPeriod0_636: ctc10,
    receivePayout0_636: ctc12,
    takeProfit0_636: ctc12,
    vote0_636: ctc13,
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

  const map2_ctc = ctc7
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc2
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc9
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

  const map6_ctc = ctc2
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const map7_ctc = ctc9
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc,
  })

  const map8_ctc = ctc2
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc,
  })

  const map9_ctc = ctc9
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc,
  })

  const [
    v4961,
    v4962,
    v4963,
    v4973,
    v4974,
    v4975,
    v4976,
    v4977,
    v4978,
    v4979,
    v4980,
    v4988,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v5070 = ctc.selfAddress()
  const v5072 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:163:31:application call to [unknown function] (defined at: ./index.rsh:163:31:function exp)',
      'at ./index.rsh:100:21:application call to "runbuyMembership0_636" (defined at: ./index.rsh:163:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'in',
    who: 'buyMembership',
  })
  const v5073 = stdlib.addressEq(v5070, v4961)
  const v5074 = v5073 ? false : true
  stdlib.assert(v5074, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:163:31:application call to [unknown function] (defined at: ./index.rsh:163:31:function exp)',
      'at ./index.rsh:100:21:application call to "runbuyMembership0_636" (defined at: ./index.rsh:163:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'buyMembership',
  })
  const v5088 = ['buyMembership0_636', v5072]

  const txn1 = await ctc.sendrecv({
    args: [
      v4961,
      v4962,
      v4963,
      v4973,
      v4974,
      v4975,
      v4976,
      v4977,
      v4978,
      v4979,
      v4980,
      v4988,
      v5088,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v4962, []],
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [v5334],
        secs: v5336,
        time: v5335,
        didSend: v4401,
        from: v5333,
      } = txn1

      switch (v5334[0]) {
        case 'addSong0_636': {
          const v5337 = v5334[1]

          break
        }
        case 'buyMembership0_636': {
          const v5658 = v5334[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'buyMembership',
          })
          const v5776 = stdlib.add(v4988, v4962)
          sim_r.txns.push({
            amt: v4962,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          const v5827 = stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, v4980),
            null,
          )
          const v5828 = stdlib.fromSome(
            v5827,
            stdlib.checkedBigNumberify(
              './index.rsh:165:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5829 = stdlib.protect(
            map8_ctc,
            await stdlib.simMapRef(sim_r, 8, v4980),
            null,
          )
          const v5830 = stdlib.fromSome(
            v5829,
            stdlib.checkedBigNumberify(
              './index.rsh:166:57:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5831 = stdlib.safeDiv(
            v4962,
            stdlib.checkedBigNumberify(
              './index.rsh:167:45:decimal',
              stdlib.UInt_max,
              '3',
            ),
          )
          const v5832 = stdlib.safeSub(v4962, v5831)
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5333),
            null,
          )
          const v5839 = stdlib.safeAdd(v5336, v4963)
          await stdlib.simMapSet(sim_r, 0, v5333, v5839)
          const v5840 = stdlib.safeAdd(v5830, v5831)
          await stdlib.simMapSet(sim_r, 8, v4980, v5840)
          const v5841 = stdlib.safeAdd(v5828, v5832)
          await stdlib.simMapSet(sim_r, 6, v4980, v5841)
          null
          const v5842 = await txn1.getOutput(
            'buyMembership',
            'v5839',
            ctc1,
            v5839,
          )

          const v5847 = stdlib.safeAdd(
            v4977,
            stdlib.checkedBigNumberify(
              './index.rsh:189:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5848 = stdlib.safeAdd(v4975, v5831)
          const v5849 = stdlib.safeAdd(
            v4974,
            stdlib.checkedBigNumberify(
              './index.rsh:196:26:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v18931 = v4973
          const v18932 = v5849
          const v18933 = v5848
          const v18934 = v4976
          const v18935 = v5847
          const v18936 = v4978
          const v18937 = v4979
          const v18938 = v4980
          const v18940 = v5776
          sim_r.isHalt = false

          break
        }
        case 'endVotingPeriod0_636': {
          const v5979 = v5334[1]

          break
        }
        case 'receivePayout0_636': {
          const v6300 = v5334[1]

          break
        }
        case 'takeProfit0_636': {
          const v6621 = v5334[1]

          break
        }
        case 'vote0_636': {
          const v6942 = v5334[1]

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
      ctc1,
      ctc14,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5334],
    secs: v5336,
    time: v5335,
    didSend: v4401,
    from: v5333,
  } = txn1
  switch (v5334[0]) {
    case 'addSong0_636': {
      const v5337 = v5334[1]
      return
      break
    }
    case 'buyMembership0_636': {
      const v5658 = v5334[1]
      undefined /* setApiDetails */
      const v5681 = stdlib.addressEq(v5333, v4961)
      const v5682 = v5681 ? false : true
      stdlib.assert(v5682, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:163:31:application call to [unknown function] (defined at: ./index.rsh:163:31:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:163:31:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'buyMembership',
      })
      const v5776 = stdlib.add(v4988, v4962)
      const v5827 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, v4980),
        null,
      )
      const v5828 = stdlib.fromSome(
        v5827,
        stdlib.checkedBigNumberify(
          './index.rsh:165:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5829 = stdlib.protect(
        map8_ctc,
        await stdlib.mapRef(map8, v4980),
        null,
      )
      const v5830 = stdlib.fromSome(
        v5829,
        stdlib.checkedBigNumberify(
          './index.rsh:166:57:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5831 = stdlib.safeDiv(
        v4962,
        stdlib.checkedBigNumberify(
          './index.rsh:167:45:decimal',
          stdlib.UInt_max,
          '3',
        ),
      )
      const v5832 = stdlib.safeSub(v4962, v5831)
      const v5834 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5333),
        null,
      )
      const v5835 = stdlib.gt(v4973, v5336)
      stdlib.assert(v5835, {
        at: './index.rsh:175:18:application',
        fs: [
          'at ./index.rsh:174:16:application call to [unknown function] (defined at: ./index.rsh:174:16:function exp)',
        ],
        msg: 'period is live',
        who: 'buyMembership',
      })
      switch (v5834[0]) {
        case 'None': {
          const v5836 = v5834[1]

          break
        }
        case 'Some': {
          const v5837 = v5834[1]
          const v5838 = stdlib.gt(v5336, v5837)
          stdlib.assert(v5838, {
            at: './index.rsh:180:22:application',
            fs: [
              'at ./index.rsh:174:16:application call to [unknown function] (defined at: ./index.rsh:174:16:function exp)',
            ],
            msg: 'membership expired',
            who: 'buyMembership',
          })

          break
        }
      }
      const v5839 = stdlib.safeAdd(v5336, v4963)
      await stdlib.mapSet(map0, v5333, v5839)
      const v5840 = stdlib.safeAdd(v5830, v5831)
      await stdlib.mapSet(map8, v4980, v5840)
      const v5841 = stdlib.safeAdd(v5828, v5832)
      await stdlib.mapSet(map6, v4980, v5841)
      null
      const v5842 = await txn1.getOutput('buyMembership', 'v5839', ctc1, v5839)
      if (v4401) {
        stdlib.protect(ctc0, await interact.out(v5658, v5842), {
          at: './index.rsh:163:11:application',
          fs: [
            'at ./index.rsh:163:11:application call to [unknown function] (defined at: ./index.rsh:163:11:function exp)',
            'at ./index.rsh:187:17:application call to "notify" (defined at: ./index.rsh:174:16:function exp)',
            'at ./index.rsh:174:16:application call to [unknown function] (defined at: ./index.rsh:174:16:function exp)',
          ],
          msg: 'out',
          who: 'buyMembership',
        })
      } else {
      }

      const v5847 = stdlib.safeAdd(
        v4977,
        stdlib.checkedBigNumberify(
          './index.rsh:189:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5848 = stdlib.safeAdd(v4975, v5831)
      const v5849 = stdlib.safeAdd(
        v4974,
        stdlib.checkedBigNumberify(
          './index.rsh:196:26:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v18931 = v4973
      const v18932 = v5849
      const v18933 = v5848
      const v18934 = v4976
      const v18935 = v5847
      const v18936 = v4978
      const v18937 = v4979
      const v18938 = v4980
      const v18940 = v5776
      return

      break
    }
    case 'endVotingPeriod0_636': {
      const v5979 = v5334[1]
      return
      break
    }
    case 'receivePayout0_636': {
      const v6300 = v5334[1]
      return
      break
    }
    case 'takeProfit0_636': {
      const v6621 = v5334[1]
      return
      break
    }
    case 'vote0_636': {
      const v6942 = v5334[1]
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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([])
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc12 = stdlib.T_Tuple([ctc1])
  const ctc13 = stdlib.T_Tuple([ctc3])
  const ctc14 = stdlib.T_Data({
    addSong0_636: ctc11,
    buyMembership0_636: ctc10,
    endVotingPeriod0_636: ctc10,
    receivePayout0_636: ctc12,
    takeProfit0_636: ctc12,
    vote0_636: ctc13,
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

  const map2_ctc = ctc7
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc2
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc9
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

  const map6_ctc = ctc2
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const map7_ctc = ctc9
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc,
  })

  const map8_ctc = ctc2
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc,
  })

  const map9_ctc = ctc9
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc,
  })

  const [
    v4961,
    v4962,
    v4963,
    v4973,
    v4974,
    v4975,
    v4976,
    v4977,
    v4978,
    v4979,
    v4980,
    v4988,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v5148 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:261:33:application call to [unknown function] (defined at: ./index.rsh:261:33:function exp)',
      'at ./index.rsh:100:21:application call to "runendVotingPeriod0_636" (defined at: ./index.rsh:261:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'in',
    who: 'endVotingPeriod',
  })
  const v5154 = ['endVotingPeriod0_636', v5148]

  const txn1 = await ctc.sendrecv({
    args: [
      v4961,
      v4962,
      v4963,
      v4973,
      v4974,
      v4975,
      v4976,
      v4977,
      v4978,
      v4979,
      v4980,
      v4988,
      v5154,
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [v5334],
        secs: v5336,
        time: v5335,
        didSend: v4401,
        from: v5333,
      } = txn1

      switch (v5334[0]) {
        case 'addSong0_636': {
          const v5337 = v5334[1]

          break
        }
        case 'buyMembership0_636': {
          const v5658 = v5334[1]

          break
        }
        case 'endVotingPeriod0_636': {
          const v5979 = v5334[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'endVotingPeriod',
          })
          null
          const v6175 = null
          const v6176 = await txn1.getOutput(
            'endVotingPeriod',
            'v6175',
            ctc0,
            v6175,
          )

          const v6181 = stdlib.safeAdd(
            v4980,
            stdlib.checkedBigNumberify(
              './index.rsh:272:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v6182 = stdlib.safeAdd(v5336, v4963)
          const v19011 = v6182
          const v19012 = stdlib.checkedBigNumberify(
            './index.rsh:278:13:decimal',
            stdlib.UInt_max,
            '0',
          )
          const v19013 = v4975
          const v19014 = v4976
          const v19015 = v4977
          const v19016 = v4978
          const v19017 = stdlib.checkedBigNumberify(
            './index.rsh:274:13:decimal',
            stdlib.UInt_max,
            '0',
          )
          const v19018 = v6181
          const v19020 = v4988
          sim_r.isHalt = false

          break
        }
        case 'receivePayout0_636': {
          const v6300 = v5334[1]

          break
        }
        case 'takeProfit0_636': {
          const v6621 = v5334[1]

          break
        }
        case 'vote0_636': {
          const v6942 = v5334[1]

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
      ctc1,
      ctc14,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5334],
    secs: v5336,
    time: v5335,
    didSend: v4401,
    from: v5333,
  } = txn1
  switch (v5334[0]) {
    case 'addSong0_636': {
      const v5337 = v5334[1]
      return
      break
    }
    case 'buyMembership0_636': {
      const v5658 = v5334[1]
      return
      break
    }
    case 'endVotingPeriod0_636': {
      const v5979 = v5334[1]
      undefined /* setApiDetails */
      const v6174 = stdlib.gt(v5336, v4973)
      stdlib.assert(v6174, {
        at: './index.rsh:267:18:application',
        fs: [
          'at ./index.rsh:266:16:application call to [unknown function] (defined at: ./index.rsh:266:16:function exp)',
        ],
        msg: 'voting period over',
        who: 'endVotingPeriod',
      })
      null
      const v6175 = null
      const v6176 = await txn1.getOutput(
        'endVotingPeriod',
        'v6175',
        ctc0,
        v6175,
      )
      if (v4401) {
        stdlib.protect(ctc0, await interact.out(v5979, v6176), {
          at: './index.rsh:261:11:application',
          fs: [
            'at ./index.rsh:261:11:application call to [unknown function] (defined at: ./index.rsh:261:11:function exp)',
            'at ./index.rsh:269:17:application call to "notify" (defined at: ./index.rsh:266:16:function exp)',
            'at ./index.rsh:266:16:application call to [unknown function] (defined at: ./index.rsh:266:16:function exp)',
          ],
          msg: 'out',
          who: 'endVotingPeriod',
        })
      } else {
      }

      const v6181 = stdlib.safeAdd(
        v4980,
        stdlib.checkedBigNumberify(
          './index.rsh:272:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v6182 = stdlib.safeAdd(v5336, v4963)
      const v19011 = v6182
      const v19012 = stdlib.checkedBigNumberify(
        './index.rsh:278:13:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v19013 = v4975
      const v19014 = v4976
      const v19015 = v4977
      const v19016 = v4978
      const v19017 = stdlib.checkedBigNumberify(
        './index.rsh:274:13:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v19018 = v6181
      const v19020 = v4988
      return

      break
    }
    case 'receivePayout0_636': {
      const v6300 = v5334[1]
      return
      break
    }
    case 'takeProfit0_636': {
      const v6621 = v5334[1]
      return
      break
    }
    case 'vote0_636': {
      const v6942 = v5334[1]
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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([ctc1])
  const ctc11 = stdlib.T_Tuple([ctc1, ctc3])
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc13 = stdlib.T_Tuple([])
  const ctc14 = stdlib.T_Tuple([ctc3])
  const ctc15 = stdlib.T_Data({
    addSong0_636: ctc12,
    buyMembership0_636: ctc13,
    endVotingPeriod0_636: ctc13,
    receivePayout0_636: ctc10,
    takeProfit0_636: ctc10,
    vote0_636: ctc14,
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

  const map2_ctc = ctc7
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc2
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc9
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

  const map6_ctc = ctc2
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const map7_ctc = ctc9
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc,
  })

  const map8_ctc = ctc2
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc,
  })

  const map9_ctc = ctc9
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc,
  })

  const [
    v4961,
    v4962,
    v4963,
    v4973,
    v4974,
    v4975,
    v4976,
    v4977,
    v4978,
    v4979,
    v4980,
    v4988,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v5156 = ctc.selfAddress()
  const v5158 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to "runreceivePayout0_636" (defined at: ./index.rsh:283:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'in',
    who: 'receivePayout',
  })
  const v5159 =
    v5158[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v5161 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v5156), null)
  const v5162 = {
    None: 0,
    Some: 1,
  }[v5161[0]]
  const v5163 = stdlib.eq(
    v5162,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v5163, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:285:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to "runreceivePayout0_636" (defined at: ./index.rsh:283:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'is member',
    who: 'receivePayout',
  })
  const v5165 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v5156), null)
  const v5166 = {
    None: 0,
    Some: 1,
  }[v5165[0]]
  const v5167 = stdlib.eq(
    v5166,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v5167, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to "runreceivePayout0_636" (defined at: ./index.rsh:283:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'is owner',
    who: 'receivePayout',
  })
  const v5169 = [v5159, v5156]
  const v5170 = stdlib.protect(
    map7_ctc,
    await stdlib.mapRef(map7, stdlib.digest([ctc11], [v5169])),
    null,
  )
  const v5171 = {
    None: 0,
    Some: 1,
  }[v5170[0]]
  const v5172 = stdlib.eq(
    v5171,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v5172, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to "runreceivePayout0_636" (defined at: ./index.rsh:283:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'receivePayout',
  })
  const v5174 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v5159), null)
  const v5175 = stdlib.fromSome(
    v5174,
    stdlib.checkedBigNumberify(
      './index.rsh:288:54:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v5178 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v5159), null)
  const v5179 = stdlib.fromSome(
    v5178,
    stdlib.checkedBigNumberify(
      './index.rsh:114:11:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v5180 = stdlib.eq(
    v5179,
    stdlib.checkedBigNumberify(
      './index.rsh:116:44:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  let v5181
  if (v5180) {
    v5181 = stdlib.checkedBigNumberify(
      './index.rsh:117:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v5183 = stdlib.protect(
      map3_ctc,
      await stdlib.mapRef(map3, stdlib.digest([ctc11], [v5169])),
      null,
    )
    const v5184 = stdlib.fromSome(
      v5183,
      stdlib.checkedBigNumberify(
        './index.rsh:120:56:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v5185 = stdlib.safeMuldiv(v5175, v5184, v5179)
    v5181 = v5185
  }
  const v5186 = stdlib.le(v5181, v5175)
  stdlib.assert(v5186, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to "runreceivePayout0_636" (defined at: ./index.rsh:283:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v5189 = stdlib.ge(v4988, v5181)
  stdlib.assert(v5189, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to "runreceivePayout0_636" (defined at: ./index.rsh:283:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })
  const v5196 = ['receivePayout0_636', v5158]

  let v5283
  if (v5180) {
    v5283 = stdlib.checkedBigNumberify(
      './index.rsh:117:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v5285 = stdlib.protect(
      map3_ctc,
      await stdlib.mapRef(map3, stdlib.digest([ctc11], [v5169])),
      null,
    )
    const v5286 = stdlib.fromSome(
      v5285,
      stdlib.checkedBigNumberify(
        './index.rsh:120:56:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v5287 = stdlib.safeMuldiv(v5175, v5286, v5179)
    v5283 = v5287
  }
  const v5288 = stdlib.le(v5283, v5175)
  stdlib.assert(v5288, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v5291 = stdlib.ge(v4988, v5283)
  stdlib.assert(v5291, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })

  const txn1 = await ctc.sendrecv({
    args: [
      v4961,
      v4962,
      v4963,
      v4973,
      v4974,
      v4975,
      v4976,
      v4977,
      v4978,
      v4979,
      v4980,
      v4988,
      v5196,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:293:10:decimal',
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [v5334],
        secs: v5336,
        time: v5335,
        didSend: v4401,
        from: v5333,
      } = txn1

      switch (v5334[0]) {
        case 'addSong0_636': {
          const v5337 = v5334[1]

          break
        }
        case 'buyMembership0_636': {
          const v5658 = v5334[1]

          break
        }
        case 'endVotingPeriod0_636': {
          const v5979 = v5334[1]

          break
        }
        case 'receivePayout0_636': {
          const v6300 = v5334[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'receivePayout',
          })
          const v6345 =
            v6300[
              stdlib.checkedBigNumberify(
                './index.rsh:283:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5333),
            null,
          )
          stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, v5333),
            null,
          )
          const v6354 = [v6345, v5333]
          stdlib.protect(
            map7_ctc,
            await stdlib.simMapRef(sim_r, 7, stdlib.digest([ctc11], [v6354])),
            null,
          )
          const v6359 = stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, v6345),
            null,
          )
          const v6360 = stdlib.fromSome(
            v6359,
            stdlib.checkedBigNumberify(
              './index.rsh:288:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6363 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v6345),
            null,
          )
          const v6364 = stdlib.fromSome(
            v6363,
            stdlib.checkedBigNumberify(
              './index.rsh:114:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6365 = stdlib.eq(
            v6364,
            stdlib.checkedBigNumberify(
              './index.rsh:116:44:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          if (v6365) {
          } else {
            stdlib.protect(
              map3_ctc,
              await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc11], [v6354])),
              null,
            )
          }
          let v6527
          if (v6365) {
            v6527 = stdlib.checkedBigNumberify(
              './index.rsh:117:13:decimal',
              stdlib.UInt_max,
              '0',
            )
          } else {
            const v6529 = stdlib.protect(
              map3_ctc,
              await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc11], [v6354])),
              null,
            )
            const v6530 = stdlib.fromSome(
              v6529,
              stdlib.checkedBigNumberify(
                './index.rsh:120:56:decimal',
                stdlib.UInt_max,
                '0',
              ),
            )
            const v6531 = stdlib.safeMuldiv(v6360, v6530, v6364)
            v6527 = v6531
          }
          const v6541 = stdlib.sub(v4988, v6527)
          sim_r.txns.push({
            kind: 'from',
            to: v5333,
            tok: undefined /* Nothing */,
          })
          await stdlib.simMapSet(
            sim_r,
            7,
            stdlib.digest([ctc11], [v6354]),
            true,
          )
          const v6543 = stdlib.safeSub(v6360, v6527)
          await stdlib.simMapSet(sim_r, 6, v6345, v6543)
          null
          const v6544 = await txn1.getOutput(
            'receivePayout',
            'v6527',
            ctc1,
            v6527,
          )

          const v19091 = v4973
          const v19092 = v4974
          const v19093 = v4975
          const v19094 = v4976
          const v19095 = v4977
          const v19096 = v4978
          const v19097 = v4979
          const v19098 = v4980
          const v19100 = v6541
          sim_r.isHalt = false

          break
        }
        case 'takeProfit0_636': {
          const v6621 = v5334[1]

          break
        }
        case 'vote0_636': {
          const v6942 = v5334[1]

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
      ctc1,
      ctc15,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5334],
    secs: v5336,
    time: v5335,
    didSend: v4401,
    from: v5333,
  } = txn1
  switch (v5334[0]) {
    case 'addSong0_636': {
      const v5337 = v5334[1]
      return
      break
    }
    case 'buyMembership0_636': {
      const v5658 = v5334[1]
      return
      break
    }
    case 'endVotingPeriod0_636': {
      const v5979 = v5334[1]
      return
      break
    }
    case 'receivePayout0_636': {
      const v6300 = v5334[1]
      undefined /* setApiDetails */
      const v6345 =
        v6300[
          stdlib.checkedBigNumberify(
            './index.rsh:283:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6346 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5333),
        null,
      )
      const v6347 = {
        None: 0,
        Some: 1,
      }[v6346[0]]
      const v6348 = stdlib.eq(
        v6347,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6348, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:285:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
          'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'is member',
        who: 'receivePayout',
      })
      const v6350 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, v5333),
        null,
      )
      const v6351 = {
        None: 0,
        Some: 1,
      }[v6350[0]]
      const v6352 = stdlib.eq(
        v6351,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v6352, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'is owner',
        who: 'receivePayout',
      })
      const v6354 = [v6345, v5333]
      const v6355 = stdlib.protect(
        map7_ctc,
        await stdlib.mapRef(map7, stdlib.digest([ctc11], [v6354])),
        null,
      )
      const v6356 = {
        None: 0,
        Some: 1,
      }[v6355[0]]
      const v6357 = stdlib.eq(
        v6356,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v6357, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'has received payout',
        who: 'receivePayout',
      })
      const v6359 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, v6345),
        null,
      )
      const v6360 = stdlib.fromSome(
        v6359,
        stdlib.checkedBigNumberify(
          './index.rsh:288:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6363 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v6345),
        null,
      )
      const v6364 = stdlib.fromSome(
        v6363,
        stdlib.checkedBigNumberify(
          './index.rsh:114:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6365 = stdlib.eq(
        v6364,
        stdlib.checkedBigNumberify(
          './index.rsh:116:44:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      let v6366
      if (v6365) {
        v6366 = stdlib.checkedBigNumberify(
          './index.rsh:117:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v6368 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc11], [v6354])),
          null,
        )
        const v6369 = stdlib.fromSome(
          v6368,
          stdlib.checkedBigNumberify(
            './index.rsh:120:56:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6370 = stdlib.safeMuldiv(v6360, v6369, v6364)
        v6366 = v6370
      }
      const v6371 = stdlib.le(v6366, v6360)
      stdlib.assert(v6371, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v6374 = stdlib.ge(v4988, v6366)
      stdlib.assert(v6374, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:283:36:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:283:36:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      let v6527
      if (v6365) {
        v6527 = stdlib.checkedBigNumberify(
          './index.rsh:117:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v6529 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc11], [v6354])),
          null,
        )
        const v6530 = stdlib.fromSome(
          v6529,
          stdlib.checkedBigNumberify(
            './index.rsh:120:56:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6531 = stdlib.safeMuldiv(v6360, v6530, v6364)
        v6527 = v6531
      }
      const v6532 = stdlib.le(v6527, v6360)
      stdlib.assert(v6532, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:294:16:application call to [unknown function] (defined at: ./index.rsh:294:16:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v6535 = stdlib.ge(v4988, v6527)
      stdlib.assert(v6535, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:294:16:application call to [unknown function] (defined at: ./index.rsh:294:16:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      const v6541 = stdlib.sub(v4988, v6527)
      await stdlib.mapSet(map7, stdlib.digest([ctc11], [v6354]), true)
      const v6543 = stdlib.safeSub(v6360, v6527)
      await stdlib.mapSet(map6, v6345, v6543)
      null
      const v6544 = await txn1.getOutput('receivePayout', 'v6527', ctc1, v6527)
      if (v4401) {
        stdlib.protect(ctc0, await interact.out(v6300, v6544), {
          at: './index.rsh:283:11:application',
          fs: [
            'at ./index.rsh:283:11:application call to [unknown function] (defined at: ./index.rsh:283:11:function exp)',
            'at ./index.rsh:299:17:application call to "notify" (defined at: ./index.rsh:294:16:function exp)',
            'at ./index.rsh:294:16:application call to [unknown function] (defined at: ./index.rsh:294:16:function exp)',
          ],
          msg: 'out',
          who: 'receivePayout',
        })
      } else {
      }

      const v19091 = v4973
      const v19092 = v4974
      const v19093 = v4975
      const v19094 = v4976
      const v19095 = v4977
      const v19096 = v4978
      const v19097 = v4979
      const v19098 = v4980
      const v19100 = v6541
      return

      break
    }
    case 'takeProfit0_636': {
      const v6621 = v5334[1]
      return
      break
    }
    case 'vote0_636': {
      const v6942 = v5334[1]
      return
      break
    }
  }
}
export async function _takeProfit4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _takeProfit4 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _takeProfit4 expects to receive an interact object as its second argument.`,
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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([ctc1])
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc12 = stdlib.T_Tuple([])
  const ctc13 = stdlib.T_Tuple([ctc3])
  const ctc14 = stdlib.T_Data({
    addSong0_636: ctc11,
    buyMembership0_636: ctc12,
    endVotingPeriod0_636: ctc12,
    receivePayout0_636: ctc10,
    takeProfit0_636: ctc10,
    vote0_636: ctc13,
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

  const map2_ctc = ctc7
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc2
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc9
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

  const map6_ctc = ctc2
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const map7_ctc = ctc9
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc,
  })

  const map8_ctc = ctc2
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc,
  })

  const map9_ctc = ctc9
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc,
  })

  const [
    v4961,
    v4962,
    v4963,
    v4973,
    v4974,
    v4975,
    v4976,
    v4977,
    v4978,
    v4979,
    v4980,
    v4988,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v5198 = ctc.selfAddress()
  const v5200 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
      'at ./index.rsh:100:21:application call to "runtakeProfit0_636" (defined at: ./index.rsh:313:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'in',
    who: 'takeProfit',
  })
  const v5201 =
    v5200[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v5203 = stdlib.addressEq(v5198, v4961)
  stdlib.assert(v5203, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
      'at ./index.rsh:100:21:application call to "runtakeProfit0_636" (defined at: ./index.rsh:313:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'is deployer',
    who: 'takeProfit',
  })
  const v5205 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v5201), null)
  const v5206 = {
    None: 0,
    Some: 1,
  }[v5205[0]]
  const v5207 = stdlib.eq(
    v5206,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v5207, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
      'at ./index.rsh:100:21:application call to "runtakeProfit0_636" (defined at: ./index.rsh:313:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'takeProfit',
  })
  const v5209 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v5201), null)
  const v5210 = stdlib.fromSome(
    v5209,
    stdlib.checkedBigNumberify(
      './index.rsh:317:57:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v5212 = stdlib.ge(v4988, v5210)
  stdlib.assert(v5212, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:318:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
      'at ./index.rsh:100:21:application call to "runtakeProfit0_636" (defined at: ./index.rsh:313:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'takeProfit',
  })
  const v5219 = ['takeProfit0_636', v5200]

  const txn1 = await ctc.sendrecv({
    args: [
      v4961,
      v4962,
      v4963,
      v4973,
      v4974,
      v4975,
      v4976,
      v4977,
      v4978,
      v4979,
      v4980,
      v4988,
      v5219,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:320:10:decimal',
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [v5334],
        secs: v5336,
        time: v5335,
        didSend: v4401,
        from: v5333,
      } = txn1

      switch (v5334[0]) {
        case 'addSong0_636': {
          const v5337 = v5334[1]

          break
        }
        case 'buyMembership0_636': {
          const v5658 = v5334[1]

          break
        }
        case 'endVotingPeriod0_636': {
          const v5979 = v5334[1]

          break
        }
        case 'receivePayout0_636': {
          const v6300 = v5334[1]

          break
        }
        case 'takeProfit0_636': {
          const v6621 = v5334[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'takeProfit',
          })
          const v6701 =
            v6621[
              stdlib.checkedBigNumberify(
                './index.rsh:313:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map9_ctc,
            await stdlib.simMapRef(sim_r, 9, v6701),
            null,
          )
          const v6708 = stdlib.protect(
            map8_ctc,
            await stdlib.simMapRef(sim_r, 8, v6701),
            null,
          )
          const v6709 = stdlib.fromSome(
            v6708,
            stdlib.checkedBigNumberify(
              './index.rsh:317:57:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6889 = stdlib.sub(v4988, v6709)
          sim_r.txns.push({
            kind: 'from',
            to: v5333,
            tok: undefined /* Nothing */,
          })
          await stdlib.simMapSet(sim_r, 9, v6701, true)
          await stdlib.simMapSet(
            sim_r,
            8,
            v6701,
            stdlib.checkedBigNumberify(
              './index.rsh:324:29:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6890 = await txn1.getOutput('takeProfit', 'v6709', ctc1, v6709)

          const v6896 = stdlib.safeSub(v4975, v6709)
          const v19171 = v4973
          const v19172 = v4974
          const v19173 = v6896
          const v19174 = v4976
          const v19175 = v4977
          const v19176 = v4978
          const v19177 = v4979
          const v19178 = v4980
          const v19180 = v6889
          sim_r.isHalt = false

          break
        }
        case 'vote0_636': {
          const v6942 = v5334[1]

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
      ctc1,
      ctc14,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5334],
    secs: v5336,
    time: v5335,
    didSend: v4401,
    from: v5333,
  } = txn1
  switch (v5334[0]) {
    case 'addSong0_636': {
      const v5337 = v5334[1]
      return
      break
    }
    case 'buyMembership0_636': {
      const v5658 = v5334[1]
      return
      break
    }
    case 'endVotingPeriod0_636': {
      const v5979 = v5334[1]
      return
      break
    }
    case 'receivePayout0_636': {
      const v6300 = v5334[1]
      return
      break
    }
    case 'takeProfit0_636': {
      const v6621 = v5334[1]
      undefined /* setApiDetails */
      const v6701 =
        v6621[
          stdlib.checkedBigNumberify(
            './index.rsh:313:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6702 = stdlib.addressEq(v5333, v4961)
      stdlib.assert(v6702, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'is deployer',
        who: 'takeProfit',
      })
      const v6704 = stdlib.protect(
        map9_ctc,
        await stdlib.mapRef(map9, v6701),
        null,
      )
      const v6705 = {
        None: 0,
        Some: 1,
      }[v6704[0]]
      const v6706 = stdlib.eq(
        v6705,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v6706, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'has received payout',
        who: 'takeProfit',
      })
      const v6708 = stdlib.protect(
        map8_ctc,
        await stdlib.mapRef(map8, v6701),
        null,
      )
      const v6709 = stdlib.fromSome(
        v6708,
        stdlib.checkedBigNumberify(
          './index.rsh:317:57:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6711 = stdlib.ge(v4988, v6709)
      stdlib.assert(v6711, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:318:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:313:33:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:313:33:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'enough balance',
        who: 'takeProfit',
      })
      const v6889 = stdlib.sub(v4988, v6709)
      await stdlib.mapSet(map9, v6701, true)
      await stdlib.mapSet(
        map8,
        v6701,
        stdlib.checkedBigNumberify(
          './index.rsh:324:29:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6890 = await txn1.getOutput('takeProfit', 'v6709', ctc1, v6709)
      if (v4401) {
        stdlib.protect(ctc0, await interact.out(v6621, v6890), {
          at: './index.rsh:313:11:application',
          fs: [
            'at ./index.rsh:313:11:application call to [unknown function] (defined at: ./index.rsh:313:11:function exp)',
            'at ./index.rsh:325:17:application call to "notify" (defined at: ./index.rsh:321:16:function exp)',
            'at ./index.rsh:321:16:application call to [unknown function] (defined at: ./index.rsh:321:16:function exp)',
          ],
          msg: 'out',
          who: 'takeProfit',
        })
      } else {
      }

      const v6896 = stdlib.safeSub(v4975, v6709)
      const v19171 = v4973
      const v19172 = v4974
      const v19173 = v6896
      const v19174 = v4976
      const v19175 = v4977
      const v19176 = v4978
      const v19177 = v4979
      const v19178 = v4980
      const v19180 = v6889
      return

      break
    }
    case 'vote0_636': {
      const v6942 = v5334[1]
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
    ['creator', ctc3],
    ['art', ctc4],
    ['audio', ctc4],
    ['owner', ctc3],
  ])
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5,
  })
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  })
  const ctc8 = stdlib.T_Bool
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8,
  })
  const ctc10 = stdlib.T_Tuple([ctc3])
  const ctc11 = stdlib.T_Tuple([ctc1, ctc3])
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4])
  const ctc13 = stdlib.T_Tuple([])
  const ctc14 = stdlib.T_Tuple([ctc1])
  const ctc15 = stdlib.T_Data({
    addSong0_636: ctc12,
    buyMembership0_636: ctc13,
    endVotingPeriod0_636: ctc13,
    receivePayout0_636: ctc14,
    takeProfit0_636: ctc14,
    vote0_636: ctc10,
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

  const map2_ctc = ctc7
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc,
  })

  const map3_ctc = ctc2
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc,
  })

  const map4_ctc = ctc9
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

  const map6_ctc = ctc2
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc,
  })

  const map7_ctc = ctc9
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc,
  })

  const map8_ctc = ctc2
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc,
  })

  const map9_ctc = ctc9
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc,
  })

  const [
    v4961,
    v4962,
    v4963,
    v4973,
    v4974,
    v4975,
    v4976,
    v4977,
    v4978,
    v4979,
    v4980,
    v4988,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
  )
  const v5118 = ctc.selfAddress()
  const v5120 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
      'at ./index.rsh:100:21:application call to "runvote0_636" (defined at: ./index.rsh:235:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'in',
    who: 'vote',
  })
  const v5121 =
    v5120[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v5123 = stdlib.addressEq(v5118, v4961)
  const v5124 = v5123 ? false : true
  stdlib.assert(v5124, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
      'at ./index.rsh:100:21:application call to "runvote0_636" (defined at: ./index.rsh:235:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'vote',
  })
  const v5126 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v5118), null)
  const v5127 = {
    None: 0,
    Some: 1,
  }[v5126[0]]
  const v5128 = stdlib.eq(
    v5127,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v5128, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:238:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
      'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
      'at ./index.rsh:100:21:application call to "runvote0_636" (defined at: ./index.rsh:235:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'is member',
    who: 'vote',
  })
  const v5130 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v5121), null)
  const v5131 = {
    None: 0,
    Some: 1,
  }[v5130[0]]
  const v5132 = stdlib.eq(
    v5131,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v5132, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
      'at ./index.rsh:100:21:application call to "runvote0_636" (defined at: ./index.rsh:235:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'is valid artist',
    who: 'vote',
  })
  const v5134 = [v4980, v5118]
  const v5135 = stdlib.protect(
    map4_ctc,
    await stdlib.mapRef(map4, stdlib.digest([ctc11], [v5134])),
    null,
  )
  const v5136 = {
    None: 0,
    Some: 1,
  }[v5135[0]]
  const v5137 = stdlib.eq(
    v5136,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v5137, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
      'at ./index.rsh:100:21:application call to "runvote0_636" (defined at: ./index.rsh:235:10:function exp)',
      'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
    ],
    msg: 'has voted',
    who: 'vote',
  })
  const v5144 = ['vote0_636', v5120]

  const txn1 = await ctc.sendrecv({
    args: [
      v4961,
      v4962,
      v4963,
      v4973,
      v4974,
      v4975,
      v4976,
      v4977,
      v4978,
      v4979,
      v4980,
      v4988,
      v5144,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:242:10:decimal',
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)
      stdlib.simMapDupe(sim_r, 9, map9)

      const {
        data: [v5334],
        secs: v5336,
        time: v5335,
        didSend: v4401,
        from: v5333,
      } = txn1

      switch (v5334[0]) {
        case 'addSong0_636': {
          const v5337 = v5334[1]

          break
        }
        case 'buyMembership0_636': {
          const v5658 = v5334[1]

          break
        }
        case 'endVotingPeriod0_636': {
          const v5979 = v5334[1]

          break
        }
        case 'receivePayout0_636': {
          const v6300 = v5334[1]

          break
        }
        case 'takeProfit0_636': {
          const v6621 = v5334[1]

          break
        }
        case 'vote0_636': {
          const v6942 = v5334[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'vote',
          })
          const v7038 =
            v6942[
              stdlib.checkedBigNumberify(
                './index.rsh:235:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v5333),
            null,
          )
          stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, v7038),
            null,
          )
          const v7050 = [v4980, v5333]
          stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, stdlib.digest([ctc11], [v7050])),
            null,
          )
          const v7243 = [v4980, v7038]
          const v7244 = stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc11], [v7243])),
            null,
          )
          const v7245 = stdlib.fromSome(
            v7244,
            stdlib.checkedBigNumberify(
              './index.rsh:126:62:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v7247 = stdlib.safeAdd(
            v7245,
            stdlib.checkedBigNumberify(
              './index.rsh:127:48:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(
            sim_r,
            3,
            stdlib.digest([ctc11], [v7243]),
            v7247,
          )
          await stdlib.simMapSet(
            sim_r,
            4,
            stdlib.digest([ctc11], [v7050]),
            true,
          )
          const v7249 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v4980),
            null,
          )
          const v7250 = stdlib.fromSome(
            v7249,
            stdlib.checkedBigNumberify(
              './index.rsh:131:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v7251 = stdlib.safeAdd(
            v7250,
            stdlib.checkedBigNumberify(
              './index.rsh:133:67:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(sim_r, 5, v4980, v7251)
          null
          const v7253 = null
          const v7254 = await txn1.getOutput('vote', 'v7253', ctc0, v7253)

          const v7260 = stdlib.safeAdd(
            v4979,
            stdlib.checkedBigNumberify(
              './index.rsh:252:30:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v7261 = stdlib.safeAdd(
            v4978,
            stdlib.checkedBigNumberify(
              './index.rsh:253:26:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v19251 = v4973
          const v19252 = v4974
          const v19253 = v4975
          const v19254 = v4976
          const v19255 = v4977
          const v19256 = v7261
          const v19257 = v7260
          const v19258 = v4980
          const v19260 = v4988
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
      ctc1,
      ctc15,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v5334],
    secs: v5336,
    time: v5335,
    didSend: v4401,
    from: v5333,
  } = txn1
  switch (v5334[0]) {
    case 'addSong0_636': {
      const v5337 = v5334[1]
      return
      break
    }
    case 'buyMembership0_636': {
      const v5658 = v5334[1]
      return
      break
    }
    case 'endVotingPeriod0_636': {
      const v5979 = v5334[1]
      return
      break
    }
    case 'receivePayout0_636': {
      const v6300 = v5334[1]
      return
      break
    }
    case 'takeProfit0_636': {
      const v6621 = v5334[1]
      return
      break
    }
    case 'vote0_636': {
      const v6942 = v5334[1]
      undefined /* setApiDetails */
      const v7038 =
        v6942[
          stdlib.checkedBigNumberify(
            './index.rsh:235:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v7039 = stdlib.addressEq(v5333, v4961)
      const v7040 = v7039 ? false : true
      stdlib.assert(v7040, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'vote',
      })
      const v7042 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v5333),
        null,
      )
      const v7043 = {
        None: 0,
        Some: 1,
      }[v7042[0]]
      const v7044 = stdlib.eq(
        v7043,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v7044, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:103:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:238:20:application call to "chkMembership" (defined at: ./index.rsh:103:33:function exp)',
          'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'is member',
        who: 'vote',
      })
      const v7046 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, v7038),
        null,
      )
      const v7047 = {
        None: 0,
        Some: 1,
      }[v7046[0]]
      const v7048 = stdlib.eq(
        v7047,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v7048, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'is valid artist',
        who: 'vote',
      })
      const v7050 = [v4980, v5333]
      const v7051 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, stdlib.digest([ctc11], [v7050])),
        null,
      )
      const v7052 = {
        None: 0,
        Some: 1,
      }[v7051[0]]
      const v7053 = stdlib.eq(
        v7052,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v7053, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:235:26:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:235:26:function exp)',
          'at ./index.rsh:100:21:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)',
        ],
        msg: 'has voted',
        who: 'vote',
      })
      const v7241 = stdlib.fromSome(
        v7042,
        stdlib.checkedBigNumberify(
          './index.rsh:106:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v7242 = stdlib.le(v5336, v7241)
      stdlib.assert(v7242, {
        at: './index.rsh:107:16:application',
        fs: [
          'at ./index.rsh:244:28:application call to "enforceMembership" (defined at: ./index.rsh:104:37:function exp)',
          'at ./index.rsh:243:16:application call to [unknown function] (defined at: ./index.rsh:243:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'vote',
      })
      const v7243 = [v4980, v7038]
      const v7244 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, stdlib.digest([ctc11], [v7243])),
        null,
      )
      const v7245 = stdlib.fromSome(
        v7244,
        stdlib.checkedBigNumberify(
          './index.rsh:126:62:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v7247 = stdlib.safeAdd(
        v7245,
        stdlib.checkedBigNumberify(
          './index.rsh:127:48:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map3, stdlib.digest([ctc11], [v7243]), v7247)
      await stdlib.mapSet(map4, stdlib.digest([ctc11], [v7050]), true)
      const v7249 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v4980),
        null,
      )
      const v7250 = stdlib.fromSome(
        v7249,
        stdlib.checkedBigNumberify(
          './index.rsh:131:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v7251 = stdlib.safeAdd(
        v7250,
        stdlib.checkedBigNumberify(
          './index.rsh:133:67:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map5, v4980, v7251)
      null
      const v7253 = null
      const v7254 = await txn1.getOutput('vote', 'v7253', ctc0, v7253)
      if (v4401) {
        stdlib.protect(ctc0, await interact.out(v6942, v7254), {
          at: './index.rsh:235:11:application',
          fs: [
            'at ./index.rsh:235:11:application call to [unknown function] (defined at: ./index.rsh:235:11:function exp)',
            'at ./index.rsh:247:17:application call to "notify" (defined at: ./index.rsh:243:16:function exp)',
            'at ./index.rsh:243:16:application call to [unknown function] (defined at: ./index.rsh:243:16:function exp)',
          ],
          msg: 'out',
          who: 'vote',
        })
      } else {
      }

      const v7260 = stdlib.safeAdd(
        v4979,
        stdlib.checkedBigNumberify(
          './index.rsh:252:30:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v7261 = stdlib.safeAdd(
        v4978,
        stdlib.checkedBigNumberify(
          './index.rsh:253:26:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v19251 = v4973
      const v19252 = v4974
      const v19253 = v4975
      const v19254 = v4976
      const v19255 = v4977
      const v19256 = v7261
      const v19257 = v7260
      const v19258 = v4980
      const v19260 = v4988
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
export async function takeProfit(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for takeProfit expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for takeProfit expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 4) {
    return _takeProfit4(ctcTop, interact)
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T14","name":"v19321","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T5","name":"_addSong0_636","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_636","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_636","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_receivePayout0_636","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_takeProfit0_636","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T8","name":"_vote0_636","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5351","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5839","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6175","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v6527","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v6709","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7253","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"endedVotingPeriod","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"membershipPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"payoutReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"songAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"voted","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"address payable","name":"owner","type":"address"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T4","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_5Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_6Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_7Ref","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T4","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_8Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_9Ref","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T4","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v19323","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T5","name":"_addSong0_636","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_636","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_636","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_receivePayout0_636","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_takeProfit0_636","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T8","name":"_vote0_636","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v19335","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"v19291","type":"bytes32"},{"internalType":"bytes32","name":"v19292","type":"bytes32"}],"name":"addSong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endVotingPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getCurrentVotingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembershipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v19265","type":"address"}],"name":"getMembershipExp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v19268","type":"address"},{"internalType":"uint256","name":"v19269","type":"uint256"}],"name":"getOwnerPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodMembers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v19276","type":"uint256"}],"name":"getPeriodPayouts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v19281","type":"uint256"}],"name":"getProfitAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v19284","type":"uint256"}],"name":"getSong","outputs":[{"components":[{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"address payable","name":"owner","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v19287","type":"uint256"},{"internalType":"address payable","name":"v19288","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v19305","type":"uint256"}],"name":"receivePayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v19310","type":"uint256"}],"name":"takeProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v19315","type":"address"}],"name":"vote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062004bee90813803601f1980601f83011683019360018060401b039284861084871117620003ac5780859260409788528339606094859181010312620003c2578451936200004f85620003c7565b81518552602086818401519382880194855201519587810196875243600355875192610240840184811088821117620003ac5789526000938481528484820152848a82015284828201528460808201528460a08201528460c08201528460e082015284610100820152846101208201528461014082015284610160820152846101808201528951608081018181108a8211176200039857916102209187938d528381528387820152838d82015283858201526101a0820152826101c0820152826101e082015282610200820152015260049160ff83541662000381577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808b5133815283518782015288518d8201528b5185820152a151801590811562000374575b50156200035d573462000346578851976200018d89620003c7565b838901958587528a8a0199868b523390525186525188526001978885554389558951953385880152518a8701525181860152845260808401848110878211176200033357885283519586116200032057600254908782811c9216801562000315575b83831014620003025750601f8111620002b6575b508093601f86116001146200024e5750509183949184939462000242575b50501b916000199060031b1c1916176002555b5161480a9081620003e48239f35b01519250388062000221565b600283528183209493928692918316915b888383106200029b575050501062000281575b505050811b0160025562000234565b015160001960f88460031b161c1916905538808062000272565b8587015188559096019594850194879350908101906200025f565b60028352818320601f870160051c810191838810620002f7575b601f0160051c019087905b828110620002eb57505062000203565b848155018790620002db565b9091508190620002d0565b634e487b7160e01b845260229052602483fd5b91607f1691620001ef565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b885163100960cb60e01b8152601681840152602490fd5b885163100960cb60e01b8152601581840152602490fd5b9050600154143862000172565b895163100960cb60e01b8152601481850152602490fd5b634e487b7160e01b87526041600452602487fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003ac5760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c80630be3c76b146113d75780631248dfcf146112f5578063133f1f50146112b25780631ca8b66d1461128a5780631e93b0f11461126c57806336e56ea5146112335780633c1f5cd2146111e457806342acaa66146110a55780634385963214610f6257806346287a4514610f1f5780634ec4246814610ef7578063544774a914610ea157806355bfc2ba14610e20578063573b8510146109955780635c5811191461094e5780636dd7d8ea146108d857806372ee0928146108b0578063746235351461084f57806378e026f91461064e57806383230757146106305780638a961a6b146105e05780638b75d81714610585578063912141c31461055d578063934c0bc414610433578063ab53f2c6146103bf578063ad76d8b414610397578063ae40bc7914610348578063b2368bbb146102b2578063bda4463b1461027e578063d61ba28214610212578063e80a57a5146101ba5763ec192d610361000e57346101b55760203660031901126101b5576101966116f0565b506101b16101a5600435611955565b604051918291826114fc565b0390f35b600080fd5b60003660031901126101b557602060606101d2611b0b565b610206816101de614757565b85810190600282515251151585825101526101f7614757565b90600082525186820152611d6d565b01511515604051908152f35b346101b55760003660031901126101b55761022b611b0b565b600460005403610265576101006020916060610256610248611645565b858082518301019101611c6c565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b346101b55760203660031901126101b5576102976116f0565b506101b16102a660043561199e565b604051918291826114a2565b346101b55760203660031901126101b5576004356102ce611b0b565b9060046000540361032f57602091610180916102eb610248611645565b5060016102f782611a79565b5161030181611482565b61030a81611482565b0361032457610256604091611a79565b0152604051908152f35b50600091829161031a565b60405163100960cb60e01b815260106004820152602490fd5b346101b55760003660031901126101b557610361611b0b565b60046000540361037e576080602091610140610256610248611645565b60405163100960cb60e01b815260076004820152602490fd5b346101b55760203660031901126101b5576103b06116f0565b506101b16102a660043561190c565b346101b55760003660031901126101b5576000546103db611645565b6040519182528160206040818301528251908160408401526000935b82851061041a575050606092506000838284010152601f80199101168101030190f35b84810182015186860160600152938101938593506103f7565b6101203660031901126101b557610448611b0b565b6040519061045582611563565b60043582526101003660231901126101b55760405190610474826115d0565b60243560068110156101b557825260403660431901126101b5576040519261049b84611563565b6044358452602093606435858201528484015260843580151581036101b557604084015260a43580151581036101b55760608401528360c3193601126101b5576040516104e78161157e565b60c435815260808401528360e3193601126101b5576040516105088161157e565b60e435815260a084015283610103193601126101b5576040519261052b8461157e565b61010435936001600160a01b03851685036101b55761055494815260c082015284820152611d6d565b60405160008152f35b346101b55760203660031901126101b5576105766116f0565b506101b16101a5600435611a30565b346101b55760003660031901126101b55761059e611b0b565b6004600054036105c75760a0602091826102566105b9611645565b828082518301019101611c6c565b60405163100960cb60e01b815260086004820152602490fd5b346101b55760003660031901126101b5576105f9611b0b565b60046000540361061757610160602091610120610256610248611645565b60405163100960cb60e01b8152600f6004820152602490fd5b346101b55760003660031901126101b5576020600154604051908152f35b346101b55760403660031901126101b55761066761146c565b61066f611b0b565b906040519161067d83611563565b6020928381019260018060a01b03809116825260243584526040516106a181611599565b600081528581019260008452604082016040516106bd81611563565b6000815260008982015281526004600054036108365760e0966106ef6106e1611645565b8a8082518301019101611c6c565b5060016106fc825161199e565b5161070681611482565b61070f81611482565b0361082f576040610720825161199e565b01515b808552610742575050505050600081525b519182910152604051908152f35b6108129461080a93825184515251168983510152600161076282516119e7565b5161076c81611482565b61077581611482565b036108235760406107896107a492516119e7565b0151915b60016107c082518c60405195869182019283611d12565b03946107b8601f1996878101835282611622565b51902061190c565b516107ca81611482565b6107d381611482565b03610819576040916107f66107b86108029351928d865193849182019586611d12565b03908101835282611622565b0151906146a5565b905190611d4d565b8152610734565b50506000906146a5565b506107a460009161078d565b6000610723565b60405163100960cb60e01b8152600b6004820152602490fd5b346101b55760203660031901126101b5576004356001600160a01b03811681036101b5576108876060916108816116f0565b50611891565b6040805191805161089781611482565b8352602081015115156020840152015115156040820152f35b346101b55760203660031901126101b5576108c96116f0565b506101b16102a6600435611a79565b60203660031901126101b55760206102206108f161146c565b6102066108fc611b0b565b809260405161090a81611563565b6040516109168161157e565b600081528152868101916109286146e4565b835281516001600160a01b03909116905281516005905251815160c001526101f7614757565b60003660031901126101b55760206040610966611b0b565b61098b81610972614757565b85810190600182515251151585825101526101f7614757565b0151604051908152f35b60203660031901126101b5576109a9611b0b565b506040516109b68161157e565b600435815260ff60045416610e07577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040805133815283516020820152a1600160005403610dee57610a07611645565b906060828051810103126101b557606060405192610a2484611599565b610a3060208201611ba7565b84526040810151602085015201516040830152518015908115610de2575b5015610dc95734610db0578051336001600160a01b0390911603610d9757610aa36040610a79611bbb565b83516001600160a01b03168152602080850151908201529281018051918401919091525142611c58565b606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260006101208201526001610140820152436101608201526000610180820152610160604051610afa816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e08101516101008401526101008101516101208401526101208101516101408401526101408101518284015201516101808201526101808152610c5f81611606565b80516001600160401b038111610d8157610c7a600254611529565b601f8111610d2e575b50602091601f8211600114610cc957918192600092610cbe575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610c9d565b601f19821692600260005260206000209160005b858110610d1657508360019510610cfd575b505050811b01600255610cb3565b015160001960f88460031b161c19169055828080610cef565b91926020600181928685015181550194019201610cdd565b600260005260008051602061479e833981519152601f830160051c81019160208410610d77575b601f0160051c01905b818110610d6b5750610c83565b60008155600101610d5e565b9091508190610d55565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b90506001541482610a4e565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b346101b55760203660031901126101b557600435610e3c611b0b565b90600460005403610e885760209161014091610e59610248611645565b506001610e65826119e7565b51610e6f81611482565b610e7881611482565b03610324576102566040916119e7565b60405163100960cb60e01b8152600e6004820152602490fd5b346101b55760203660031901126101b557610eba6117b7565b5060c0610ec86004356117df565b610ef560408051928051610edb81611482565b8452602081015115156020850152015160408301906114cd565bf35b346101b55760203660031901126101b557610f106116f0565b506101b16101a5600435611ac2565b60203660031901126101b55760206101e0610f38611b0b565b61098b81610f44614773565b600435815152858101906003825152516080825101526101f7614757565b346101b55760403660031901126101b5576001600160a01b03602435818116908190036101b557610f91611b0b565b60405191610f9e83611563565b602093848401916004358552825260405191610fb98361157e565b604051610fc581611563565b60008152600087820152835260046000540361108c576101c094610ff8610fea611645565b888082518301019101611c6c565b505183515251168482510152805190600161103a604051938461101e8982019283611d12565b0394611032601f1996878101835282611622565b519020611955565b5161104481611482565b61104d81611482565b036110835760409161106f915190611032845191826107f68a82019586611d12565b015115155b15159182910152604051908152f35b50506000611074565b60405163100960cb60e01b815260136004820152602490fd5b346101b55760203660031901126101b5576110be611792565b506110c7611b0b565b6040516110d381611599565b6110db6117b7565b8152602081019160008352604082016110f2611792565b81526004600054036111cb57611118611109611645565b60208082518301019101611c6c565b9260016111266004356117df565b8083525161113381611482565b61113c81611482565b036111b257846101a09460006080975260018060a01b0391828251168551528051602086510152516040855101525116606083510152600181515161118081611482565b61118981611482565b036111a857604091505101519182915b0152610ef560405180926114cd565b5051918291611199565b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b346101b55760003660031901126101b5576111fd611b0b565b60046000540361121a576101206020916080610256610248611645565b60405163100960cb60e01b8152600d6004820152602490fd5b346101b55760203660031901126101b5576004356001600160a01b03811681036101b5576102a66101b1916112666116f0565b5061170f565b346101b55760003660031901126101b5576020600354604051908152f35b346101b55760203660031901126101b5576112a36116f0565b506101b16102a66004356119e7565b60203660031901126101b55760206102006112cb611b0b565b61098b816112d7614773565b6004358151528581019060048251525160a0825101526101f7614757565b346101b55760203660031901126101b55761130e61146c565b611316611b0b565b90604051906113248261157e565b61132c6116f0565b82526004600054036113be57611356600191611349611109611645565b50828060a01b031661170f565b8083525161136381611482565b61136c81611482565b036113a55760209181600160c093515161138581611482565b61138e81611482565b036103245751604001519182910152604051908152f35b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b60403660031901126101b5576113eb611b0b565b6040516113f781611563565b8161098b6020938385809501600435825260243581526040519061141a82611563565b60405161142681611563565b6000815260008882015282528682019261143e6146e4565b845251825152518682510152600082515251858251015261145d614757565b90600082525185820152611d6d565b600435906001600160a01b03821682036101b557565b6002111561148c57565b634e487b7160e01b600052602160045260246000fd5b919091604080606083019480516114b881611482565b84526020810151151560208501520151910152565b80516001600160a01b039081168352602080830151908401526040808301519084015260609182015116910152565b9190916040806060830194805161151281611482565b845260208101511515602085015201511515910152565b90600182811c92168015611559575b602083101461154357565b634e487b7160e01b600052602260045260246000fd5b91607f1691611538565b604081019081106001600160401b03821117610d8157604052565b602081019081106001600160401b03821117610d8157604052565b606081019081106001600160401b03821117610d8157604052565b61018081019081106001600160401b03821117610d8157604052565b60e081019081106001600160401b03821117610d8157604052565b608081019081106001600160401b03821117610d8157604052565b6101a081019081106001600160401b03821117610d8157604052565b601f909101601f19168101906001600160401b03821190821017610d8157604052565b604051906000826002549161165983611529565b8083526001938085169081156116cf5750600114611681575b5061167f92500383611622565b565b6002600090815260008051602061479e83398151915294602093509091905b8183106116b757505061167f935082010138611672565b855488840185015294850194879450918301916116a0565b905061167f94506020925060ff191682840152151560051b82010138611672565b604051906116fd82611599565b60006040838281528260208201520152565b906117186116f0565b9160018060a01b03166000908082526005602052600160ff60408420541661173f81611482565b03611787576040929350815260056020522060016040519161176083611599565b60ff815481811661177081611482565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061179f826115eb565b60006060838281528260208201528260408201520152565b604051906117c482611599565b81600081526000602082015260406117da611792565b910152565b906117e86117b7565b9160008181526006602052604091600160ff848420541661180881611482565b036118855782939450815260066020522081519161182583611599565b60ff825481811661183581611482565b855260081c161515602084015280519161184e836115eb565b60018101546001600160a01b0390811684526002820154602085015260038201548385015260049091015416606083015282015290565b50808452602084015250565b9061189a6116f0565b9160018060a01b03166000908082526007602052600160ff6040842054166118c181611482565b03611787576040929350815260076020522060ff604051916118e283611599565b548181166118ef81611482565b8352818160081c161515602084015260101c161515604082015290565b906119156116f0565b916000908082526008602052600160ff60408420541661193481611482565b03611787576040929350815260086020522060016040519161176083611599565b9061195e6116f0565b916000908082526009602052600160ff60408420541661197d81611482565b03611787576040929350815260096020522060ff604051916118e283611599565b906119a76116f0565b91600090808252600a602052600160ff6040842054166119c681611482565b036117875760409293508152600a6020522060016040519161176083611599565b906119f06116f0565b91600090808252600b602052600160ff604084205416611a0f81611482565b036117875760409293508152600b6020522060016040519161176083611599565b90611a396116f0565b91600090808252600c602052600160ff604084205416611a5881611482565b036117875760409293508152600c6020522060ff604051916118e283611599565b90611a826116f0565b91600090808252600d602052600160ff604084205416611aa181611482565b036117875760409293508152600d6020522060016040519161176083611599565b90611acb6116f0565b91600090808252600e602052600160ff604084205416611aea81611482565b036117875760409293508152600e6020522060ff604051916118e283611599565b6040519061024082016001600160401b03811183821017610d8157604052816102206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152611b88611792565b6101a0820152826101c0820152826101e0820152826102008201520152565b51906001600160a01b03821682036101b557565b604051906101a082016001600160401b03811183821017610d8157604052816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015282610140820152826101608201520152565b906001820191828111611c425782106101b557565b634e487b7160e01b600052601160045260246000fd5b9190820191828111611c425782106101b557565b90816101809103126101b55760405190611c85826115b4565b611c8e81611ba7565b82526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201519083015261012080820151908301526101408082015190830152610160809101519082015290565b51600681101561148c5790565b815181526020918201516001600160a01b03169181019190915260400190565b6001600160a01b039091168152602081019190915260400190565b8115611d57570490565b634e487b7160e01b600052601260045260246000fd5b60405192919061028084016001600160401b03811185821017610d815780604052611d9781611563565b6000815260006102a08601528452611dad6116f0565b602085015260006040850152611dc1611792565b606085015260006080850152600060a0850152600060c0850152604051611de78161157e565b6000815260e0850152604051611dfc81611563565b6000815260006020820152610100850152600061012085015260006101408501526000610160850152600061018085015260006101a0850152604051611e418161157e565b600081526101c085015260006101e0850152604051611e5f8161157e565b60008152610200850152611e716116f0565b610220850152604051611e8381611563565b6000815260006020820152610240850152604051611ea081611563565b600081526000602082015261026085015260ff6004541661467f5760405133815281516020820152602082015190815190600682101561148c577f7802b9e9ae11e364258b3c14e2375d09b305e8f1c27bc2939057c213b6b70e999261014092604083015260208082015180516060850152015160808301526040810151151560a08301526060810151151560c083015260808101515160e083015260a08101515161010083015260c060018060a01b039101515116610120820152a160046000540361466657611f72611109611645565b908051801590811561465a575b501561464157611f926020820151611d05565b600681101561148c5761286057602090810151015184528051336001600160a01b03909116036128595760005b15612840576001611fcf3361170f565b80602087015251611fdf81611482565b611fe881611482565b036128275760c08101516001810190818111611c425781106101b557806120139160408701526117df565b5161201d81611482565b61202681611482565b61280e57346127f557600160208501515161204081611482565b61204981611482565b036127ee576040602085015101515b42116127d5576101609133606086015152845151602060608701510152602085510151604060608701510152336060808701510152604085015160005260066020526040600020600160ff1982541617905560608501516040860151600052600460406000206001810160018060a01b0384511660018060a01b031982541617905560208301516002820155604083015160038201550190606060018060a01b039101511660018060a01b0319825416179055600161211633611891565b5161212081611482565b61212981611482565b03612486576000805160206147be83398151915260206040870151604051908152a16000805160206147de83398151915260206040870151604051908152a160206040860151910152604061217c611bbb565b9460018060a01b038351168652602083015160208701528183015182870152606083015160608701526080830151608087015260a083015160a0870152015160c085015260e081015160e08501526101008101516101008501526101208101516101208501526101408101516101408501524382850152015161018083015261016060405161220a816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151610140850152610140810151828501520151610180830152610180825261236f82611606565b81516001600160401b038111610d815761238a600254611529565b601f8111612433575b50602092601f82116001146123d057928192936000926123c5575b50508160011b916000199060031b1c191617600255565b0151905038806123ae565b601f19821693600260005260206000209160005b86811061241b5750836001959610612402575b505050811b01600255565b015160001960f88460031b161c191690553880806123f7565b919260206001819286850151815501940192016123e4565b600260005260008051602061479e833981519152601f830160051c8101916020841061247c575b601f0160051c01905b8181106124705750612393565b60008155600101612463565b909150819061245a565b33600090815260076020908152604091829020805462ff00ff191660011790558682015191519182526000805160206147be83398151915291a16000805160206147de83398151915260206040870151604051908152a16020604086015191015260406124f1611bbb565b9460018060a01b038351168652602083015160208701528183015182870152606083015160608701526080830151608087015260a083015160a0870152015160c085015260e081015160e08501526101008101516101008501526101208101516101208501526101408101516101408501524382850152015161018083015261016060405161257f816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e081015161010085015261010081015161012085015261012081015161014085015261014081015182850152015161018083015261018082526126e482611606565b81516001600160401b038111610d81576126ff600254611529565b601f8111612782575b50602092601f821160011461273957928192936000926123c55750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061276a575083600195961061240257505050811b01600255565b9192602060018192868501518155019401920161274d565b600260005260008051602061479e833981519152601f830160051c810191602084106127cb575b601f0160051c01905b8181106127bf5750612708565b600081556001016127b2565b90915081906127a9565b60405163100960cb60e01b815260236004820152602490fd5b6000612058565b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b6001611fbf565b6128706020829493940151611d05565b600681101561148c57600103612e6b57508151336001600160a01b0390911603612e645760005b15612e4d5760208201513403612e3457600360208301510460808501526060820151421015612e1b576128c93361170f565b516128d381611482565b6128dc81611482565b612dc6575b6128ef604083015142611c58565b60c08501523360005260056020526040600020600160ff1982541617905560c0840151600160406000200155610140820151600052600d6020526040600020600160ff198254161790556001612949610140840151611a79565b5161295381611482565b61295c81611482565b03612dbc576129826040612974610140850151611a79565b01515b608086015190611c58565b610140830151600052600d602052600160406000200155610140820151600052600b6020526040600020600160ff1982541617905560016129c76101408401516119e7565b516129d181611482565b6129da81611482565b03612db257612a0e60406129f26101408501516119e7565b01515b612a086020850151608088015190614698565b90611c58565b610140830151600052600b6020526001604060002001557ff01b311f9779b91a7fa2ba5c8138c46f4ae1acfc247c95553fa57767e0667ac7612a5b60c08601516040519182913383611d32565b0390a17fc8a8c97c26c92329f18a7e78dacbd35559a4fb657e60d3930ec18c48f161b2c2602060c0860151604051908152a1604060c0850151910152612aef612aa2611bbb565b9360018060a01b038351168552602083015160208601526040830151604086015260608301516060860152612ada6080840151611c2d565b6080860152608060a084015191015190611c58565b60a084015260c081015160c0840152612b0b60e0820151611c2d565b60e084015261010081015161010084015261012081015161012084015261014081015161014084015243610160840152602061016082015191015101610180830152610160604051612b5c816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101516101408501526101408101518285015201516101808301526101808252612cc182611606565b81516001600160401b038111610d8157612cdc600254611529565b601f8111612d5f575b50602092601f8211600114612d1657928192936000926123c55750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612d47575083600195961061240257505050811b01600255565b91926020600181928685015181550194019201612d2a565b600260005260008051602061479e833981519152601f830160051c81019160208410612da8575b601f0160051c01905b818110612d9c5750612ce5565b60008155600101612d8f565b9091508190612d86565b612a0e60006129f5565b6129826000612977565b6001612dd13361170f565b51612ddb81611482565b612de481611482565b036128e1576040612df43361170f565b01518060a086015242116128e15760405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b6001612897565b612e7b6020829694960151611d05565b600681101561148c5760020361323057509050346132175760608301514211156131fe5760606000917f22393b527bdbf9b348ee4129f2a13cd63b7a78bf3bc7786a69eb3e3b74b799c26020610140870151604051908152a17f163f9d5048e35e8cb9127e54b7b00ade2194731036d9f4846d59cc795f4fa7ce6020604051858152a10152610160612f0b611bbb565b9260018060a01b0381511684526020810151602085015260408101516040850152612f3a604082015142611c58565b60608501526000608085015260a081015160a085015260c081015160c085015260e081015160e08501526101008101516101008501526000610120850152612f86610140820151611c2d565b61014085015243828501520151610180830152610160604051612fa8816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151610140850152610140810151828501520151610180830152610180825261310d82611606565b81516001600160401b038111610d8157613128600254611529565b601f81116131ab575b50602092601f821160011461316257928192936000926123c55750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613193575083600195961061240257505050811b01600255565b91926020600181928685015181550194019201613176565b600260005260008051602061479e833981519152601f830160051c810191602084106131f4575b601f0160051c01905b8181106131e85750613131565b600081556001016131db565b90915081906131d2565b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b61323d6020820151611d05565b600681101561148c576003036139f157602001516080015160e083015260016132653361170f565b5161326f81611482565b61327881611482565b036139d857600161328833611891565b5161329281611482565b61329b81611482565b036139bf5760e0820151516101008301515233602061010084015101526132f06132d66132e461010085015160405192839160208301611d12565b03601f198101835282611622565b60208151910120611a30565b516132fa81611482565b61330381611482565b6139a657600161331760e0840151516119e7565b5161332181611482565b61332a81611482565b0361399f57604061333f60e0840151516119e7565b01515b610120830152600161335860e08401515161199e565b5161336281611482565b61336b81611482565b0361399857604061338060e08401515161199e565b01515b8061014084015215806101608401526000146139615760006101808301525b61018082015161012083015110613948576101608401516101808301511161392f573461391657610160820151156138945760006101a08301525b6101a08201516101208301511061387b576101608401516101a0830151116138625760008080806101a0860151818115613859575b3390f11561384d57610100820151604051613435816132d6602082019485611d12565b519020600052600c602052604060002060ff199060018282541617905561010083015160405161346d816132d6602082019485611d12565b519020600052600c60205260406000206201000062ff00001982541617905560e083015151600052600b60205260016040600020918254161790556134bd6101208301516101a084015190614698565b60e083015151600052600b6020526001604060002001557f3db40f0eba95e6fa59aa1eae0e927a856aa7754f1465c71a52978d243c321a71606060e0840151516101a08501516040519133835260208301526040820152a17f9a65c97d7f070984b051c700c4ffdda5d3b54630f0cf3039931eed3a07fe1ec760206101a0840151604051908152a16101e06101a08301519101526101a061016061355f611bbb565b9460018060a01b0381511686526020810151602087015260408101516040870152606081015160608701526080810151608087015260a081015160a087015260c081015160c087015260e081015160e08701526101008101516101008701526101208101516101208701526101408101516101408701524382870152015191015190036101808301526101606040516135f7816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151610140850152610140810151828501520151610180830152610180825261375c82611606565b81516001600160401b038111610d8157613777600254611529565b601f81116137fa575b50602092601f82116001146137b157928192936000926123c55750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106137e2575083600195961061240257505050811b01600255565b919260206001819286850151815501940192016137c5565b600260005260008051602061479e833981519152601f830160051c81019160208410613843575b601f0160051c01905b8181106138375750613780565b6000815560010161382a565b9091508190613821565b6040513d6000823e3d90fd5b506108fc613412565b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b6139036138f761012084015160016138c06101008701516040516107b8816132d6602082019485611d12565b516138ca81611482565b6138d381611482565b0361390e57604061080261010087015182516107b8816132d6602082019485611d12565b61014084015190611d4d565b6101a08301526133dd565b6000906146a5565b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b60405163100960cb60e01b8152602d6004820152602490fd5b61398d6138f761012084015160016138c06101008701516040516107b8816132d6602082019485611d12565b6101808301526133a2565b6000613383565b6000613342565b60405163100960cb60e01b8152602c6004820152602490fd5b60405163100960cb60e01b8152602b6004820152602490fd5b60405163100960cb60e01b8152602a6004820152602490fd5b6139fe6020820151611d05565b600681101561148c57600403613eeb576020015160a001516101c083015283516001600160a01b03163303613ed257613a3c6101c083015151611ac2565b51613a4681611482565b613a4f81611482565b613eb9576001613a646101c084015151611a79565b51613a6e81611482565b613a7781611482565b03613eb2576040613a8d6101c084015151611a79565b01515b806101e084015261016085015110613e995734613e805760008080806101e0860151818115613e77575b3390f11561384d576101c082015151600052600e602052604060002060ff19906001828254161790556101c08301515160005260406000206201000062ff0000198254161790556101c083015151600052600d60205260016040600020918254161790556101c082015151600052600060016040822001557f72363b33544c452f9573d04e8bc0caf323241d689c75d21f3f6042f3d372f55c60206101e0840151604051908152a16102006101e08301519101526101e0610160613b7c611bbb565b9460018060a01b03815116865260208101516020870152604081015160408701526060810151606087015260808101516080870152613bc360a08201518486015190614698565b60a087015260c081015160c087015260e081015160e0870152610100810151610100870152610120810151610120870152610140810151610140870152438287015201519101519003610180830152610160604051613c21816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101516101408501526101408101518285015201516101808301526101808252613d8682611606565b81516001600160401b038111610d8157613da1600254611529565b601f8111613e24575b50602092601f8211600114613ddb57928192936000926123c55750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613e0c575083600195961061240257505050811b01600255565b91926020600181928685015181550194019201613def565b600260005260008051602061479e833981519152601f830160051c81019160208410613e6d575b601f0160051c01905b818110613e615750613daa565b60008155600101613e54565b9091508190613e4b565b506108fc613aba565b60405163100960cb60e01b815260356004820152602490fd5b60405163100960cb60e01b815260346004820152602490fd5b6000613a90565b60405163100960cb60e01b815260336004820152602490fd5b60405163100960cb60e01b815260326004820152602490fd5b613efb6020829493940151611d05565b600681101561148c57600514613f13575b5050509050565b6020015160c001516102008201528351336001600160a01b039091160361463a5760005b15614621576001613f473361170f565b8061022084015251613f5881611482565b613f6181611482565b036146085761020081015151600190613f82906001600160a01b0316611891565b51613f8c81611482565b613f9581611482565b036145ef57610140840151610240820151523360206102408301510152613fdc6132d6613fd061024084015160405192839160208301611d12565b60208151910120611955565b51613fe681611482565b613fef81611482565b6145d657346145bd5760016102208201515161400a81611482565b61401381611482565b036145b657604061022082015101515b421161459d57600091610220916101408601516102608201515260018060a01b03610200820151511660206102608301510152610260810151604051614071816132d6602082019485611d12565b51902084526008602052610240604085209160ff199260018482541617905560016140b06102608301516040516107b8816132d6602082019485611d12565b516140ba81611482565b6140c381611482565b148614614594576140f360406140ec61026084015182516107b8816132d6602082019485611d12565b0151611c2d565b61026082015160405161410e816132d6602082019485611d12565b51902087526008602052600160408820015581810151604051614139816132d6602082019485611d12565b51902086526009602052604086206001848254161790550151604051614167816132d6602082019485611d12565b51902084526009602052604084206201000062ff0000198254161790556101408601518452600a6020526001604085209182541617905560016141ae61014087015161199e565b516141b881611482565b6141c181611482565b14831461458b576141db60406140ec61014088015161199e565b6101408601518452600a60205260016040852001557fc591aa98f3e7d1c3a106f4653e39eba694fcc03ba3c686dfbefbf82f6b06bcea6142276101408701516040519182913383611d32565b0390a17fd7819a47efbba0e66a9d2b98189a7d13b11e88686395b1ddd8551ef7053790df6020604051858152a10152610160614261611bbb565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501526142c2610100820151611c2d565b6101008501526142d6610120820151611c2d565b61012085015261014081015161014085015243828501520151610180830152610160604051614304816115b4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260008282015261018060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152610120810151610120840152610140810151610140840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151610140850152610140810151828501520151610180830152610180825261446982611606565b81516001600160401b038111610d8157614484600254611529565b601f8111614538575b50602092601f82116001146144d257928192936000926144c7575b50508160011b916000199060031b1c1916176002555b80388080613f0c565b0151905038806144a8565b601f19821693600260005260206000209160005b8681106145205750836001959610614507575b505050811b016002556144be565b015160001960f88460031b161c191690553880806144f9565b919260206001819286850151815501940192016144e6565b600260005260008051602061479e833981519152601f830160051c81019160208410614581575b601f0160051c01905b818110614575575061448d565b60008155600101614568565b909150819061455f565b6141db83611c2d565b6140f386611c2d565b60405163100960cb60e01b8152603b6004820152602490fd5b6000614023565b60405163100960cb60e01b8152603a6004820152602490fd5b60405163100960cb60e01b815260396004820152602490fd5b60405163100960cb60e01b815260386004820152602490fd5b60405163100960cb60e01b815260376004820152602490fd5b60405163100960cb60e01b815260366004820152602490fd5b6001613f37565b60405163100960cb60e01b8152601e6004820152602490fd5b90506001541438611f7f565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b908103908111611c425790565b6000929180159182156146bc575b5050156101b557565b915092508060001904831181151516611c42576146dc8382029384611d4d565b1438806146b3565b6040908151916146f3836115d0565b60c083600092838252805161470781611563565b84815284602082015260208301528381830152836060830152805161472b8161157e565b8481526080830152805161473e8161157e565b84815260a083015251926147518461157e565b83520152565b6040519061476482611563565b816000815260206117da6146e4565b6040519061478082611563565b8160405161478d8161157e565b60008152815260206117da6146e456fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acec50146df3744254d2c4df384a8513863cda206482d8bf1740acc2caeb38c3e777e5291079d4877d87def9614855c0826482c44eb3f26d1a531f100bb526d73b4a164736f6c6343000810000a`,
  BytecodeLen: 19438,
  version: 9,
  views: {},
}
export const _stateSourceMap = {
  1: {
    at: './index.rsh:85:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:340:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:100:21:after expr stmt semicolon',
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
  takeProfit: takeProfit,
  vote: vote,
}
export const _APIs = {
  addSong: addSong,
  buyMembership: buyMembership,
  endVotingPeriod: endVotingPeriod,
  receivePayout: receivePayout,
  takeProfit: takeProfit,
  vote: vote,
}
