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

  const _getCurrentVotingPeriod = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
      )
    ) {
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async () => {
        return v3827
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
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async () => {
        return v3811
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
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async (_v3882) => {
        const v3882 = stdlib.protect(ctc0, _v3882, null)

        const v3883 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v3882),
          null,
        )
        const v3884 = {
          None: 0,
          Some: 1,
        }[v3883[0]]
        const v3885 = stdlib.eq(
          v3884,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v3885, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:138:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:137:29:application call to [unknown function] (defined at: ./index.rsh:137:29:application)',
          ],
          msg: 'is member',
          who: 'Module',
        })
        const v3888 = stdlib.fromSome(
          v3883,
          stdlib.checkedBigNumberify(
            './index.rsh:139:43:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v3888
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
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async (_v3889, _v3890) => {
        const v3889 = stdlib.protect(ctc0, _v3889, null)
        const v3890 = stdlib.protect(ctc1, _v3890, null)

        const v3891 = stdlib.protect(
          map6_ctc,
          await viewlib.viewMapRef(6, v3890),
          null,
        )
        const v3892 = stdlib.fromSome(
          v3891,
          stdlib.checkedBigNumberify(
            './index.rsh:104:63:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v3893 = stdlib.protect(
          map5_ctc,
          await viewlib.viewMapRef(5, v3890),
          null,
        )
        const v3894 = stdlib.fromSome(
          v3893,
          stdlib.checkedBigNumberify(
            './index.rsh:107:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v3895 = stdlib.eq(
          v3894,
          stdlib.checkedBigNumberify(
            './index.rsh:109:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v3896
        if (v3895) {
          v3896 = stdlib.checkedBigNumberify(
            './index.rsh:110:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v3897 = [v3890, v3889]
          const v3898 = stdlib.protect(
            map3_ctc,
            await viewlib.viewMapRef(3, stdlib.digest([ctc2], [v3897])),
            null,
          )
          const v3899 = stdlib.fromSome(
            v3898,
            stdlib.checkedBigNumberify(
              './index.rsh:113:56:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v3900 = stdlib.safeMuldiv(v3892, v3899, v3894)
          v3896 = v3900
        }

        return v3896
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
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async () => {
        return v3822
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
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async (_v3879) => {
        const v3879 = stdlib.protect(ctc1, _v3879, null)

        const v3880 = stdlib.protect(
          map6_ctc,
          await viewlib.viewMapRef(6, v3879),
          null,
        )
        const v3881 = stdlib.fromSome(
          v3880,
          stdlib.checkedBigNumberify(
            './index.rsh:133:68:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v3881
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
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async (_v3869) => {
        const v3869 = stdlib.protect(ctc1, _v3869, null)

        const v3870 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, v3869),
          null,
        )
        const v3871 = {
          None: 0,
          Some: 1,
        }[v3870[0]]
        const v3872 = stdlib.eq(
          v3871,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v3872, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:130:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:129:20:application call to [unknown function] (defined at: ./index.rsh:129:20:application)',
          ],
          msg: 'song exists',
          who: 'Module',
        })
        const v3875 = '                                '
        const v3877 = {
          art: v3875,
          audio: v3875,
          creator: v3810,
          owner: v3810,
        }
        const v3878 = stdlib.fromSome(v3870, v3877)

        return v3878
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
      const [v3810, v3811, v3812] = svs
      stdlib.assert(false, 'illegal view')
    }
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      )
    ) {
      const [
        v3810,
        v3811,
        v3812,
        v3822,
        v3823,
        v3824,
        v3825,
        v3826,
        v3827,
        v3835,
      ] = svs
      return await (async (_v3901, _v3902) => {
        const v3901 = stdlib.protect(ctc1, _v3901, null)
        const v3902 = stdlib.protect(ctc0, _v3902, null)

        const v3903 = [v3901, v3902]
        const v3904 = stdlib.protect(
          map4_ctc,
          await viewlib.viewMapRef(4, stdlib.digest([ctc2], [v3903])),
          null,
        )
        const v3905 = stdlib.fromSome(v3904, false)

        return v3905
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
      getPeriodPayouts: {
        decode: _getPeriodPayouts,
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
      4: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
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
    addSong0_504: ctc10,
    buyMembership0_504: ctc11,
    endVotingPeriod0_504: ctc11,
    receivePayout0_504: ctc12,
    vote0_504: ctc13,
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

  const v3806 = stdlib.protect(
    ctc1,
    interact.membershipCost,
    "for Deployer's interact field membershipCost",
  )
  const v3807 = stdlib.protect(
    ctc1,
    interact.periodLength,
    "for Deployer's interact field periodLength",
  )

  const txn1 = await ctc.sendrecv({
    args: [v3806, v3807],
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
      stdlib.simMapDupe(sim_r, 7, map7)
      stdlib.simMapDupe(sim_r, 8, map8)

      const {
        data: [v3811, v3812],
        secs: v3814,
        time: v3813,
        didSend: v29,
        from: v3810,
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
    data: [v3811, v3812],
    secs: v3814,
    time: v3813,
    didSend: v29,
    from: v3810,
  } = txn1
  const txn2 = await ctc.sendrecv({
    args: [v3810, v3811, v3812],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3813,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:81:5:decimal',
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

      const {
        data: [],
        secs: v3817,
        time: v3816,
        didSend: v35,
        from: v3815,
      } = txn2

      const v3821 = stdlib.safeAdd(v3817, v3812)
      const v3822 = v3821
      const v3823 = stdlib.checkedBigNumberify(
        './index.rsh:93:62:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3824 = stdlib.checkedBigNumberify(
        './index.rsh:93:23:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3825 = stdlib.checkedBigNumberify(
        './index.rsh:93:59:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3826 = stdlib.checkedBigNumberify(
        './index.rsh:93:56:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v3827 = stdlib.checkedBigNumberify(
        './index.rsh:93:26:decimal',
        stdlib.UInt_max,
        '1',
      )
      const v3828 = v3816
      const v3835 = stdlib.checkedBigNumberify(
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
    secs: v3817,
    time: v3816,
    didSend: v35,
    from: v3815,
  } = txn2
  const v3818 = stdlib.addressEq(v3810, v3815)
  stdlib.assert(v3818, {
    at: './index.rsh:81:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer',
  })
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:82:19:application',
    fs: [
      'at ./index.rsh:82:19:application call to [unknown function] (defined at: ./index.rsh:82:19:function exp)',
      'at ./index.rsh:82:19:application call to "liftedInteract" (defined at: ./index.rsh:82:19:application)',
    ],
    msg: 'ready',
    who: 'Deployer',
  })

  const v3821 = stdlib.safeAdd(v3817, v3812)
  let v3822 = v3821
  let v3823 = stdlib.checkedBigNumberify(
    './index.rsh:93:62:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3824 = stdlib.checkedBigNumberify(
    './index.rsh:93:23:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3825 = stdlib.checkedBigNumberify(
    './index.rsh:93:59:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3826 = stdlib.checkedBigNumberify(
    './index.rsh:93:56:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v3827 = stdlib.checkedBigNumberify(
    './index.rsh:93:26:decimal',
    stdlib.UInt_max,
    '1',
  )
  let v3828 = v3816
  let v3835 = stdlib.checkedBigNumberify(
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
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    })
    const {
      data: [v4129],
      secs: v4131,
      time: v4130,
      didSend: v3330,
      from: v4128,
    } = txn4
    switch (v4129[0]) {
      case 'addSong0_504': {
        const v4132 = v4129[1]
        undefined /* setApiDetails */
        const v4139 = stdlib.addressEq(v4128, v3810)
        const v4140 = v4139 ? false : true
        stdlib.assert(v4140, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v4142 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4128),
          null,
        )
        const v4143 = {
          None: 0,
          Some: 1,
        }[v4142[0]]
        const v4144 = stdlib.eq(
          v4143,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v4144, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:188:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
            'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v4146 = stdlib.safeAdd(
          v3823,
          stdlib.checkedBigNumberify(
            './index.rsh:190:35:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v4147 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v4146),
          null,
        )
        const v4148 = {
          None: 0,
          Some: 1,
        }[v4147[0]]
        const v4149 = stdlib.eq(
          v4148,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v4149, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'song id exist',
          who: 'Deployer',
        })
        const v4235 =
          v4132[
            stdlib.checkedBigNumberify(
              './index.rsh:186:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v4236 =
          v4132[
            stdlib.checkedBigNumberify(
              './index.rsh:186:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v4254 = stdlib.fromSome(
          v4142,
          stdlib.checkedBigNumberify(
            './index.rsh:99:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4255 = stdlib.le(v4131, v4254)
        stdlib.assert(v4255, {
          at: './index.rsh:100:16:application',
          fs: [
            'at ./index.rsh:195:28:application call to "enforceMembership" (defined at: ./index.rsh:97:37:function exp)',
            'at ./index.rsh:194:16:application call to [unknown function] (defined at: ./index.rsh:194:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v4256 = {
          art: v4235,
          audio: v4236,
          creator: v4128,
          owner: v4128,
        }
        await stdlib.mapSet(map1, v4146, v4256)
        const v4257 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v4128),
          null,
        )
        const v4258 = {
          None: 0,
          Some: 1,
        }[v4257[0]]
        const v4259 = stdlib.eq(
          v4258,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        if (v4259) {
          null
          await txn4.getOutput('addSong', 'v4146', ctc1, v4146)
          const cv3822 = v3822
          const cv3823 = v4146
          const cv3824 = v3824
          const cv3825 = v3825
          const cv3826 = v3826
          const cv3827 = v3827
          const cv3828 = v4130
          const cv3835 = v3835

          v3822 = cv3822
          v3823 = cv3823
          v3824 = cv3824
          v3825 = cv3825
          v3826 = cv3826
          v3827 = cv3827
          v3828 = cv3828
          v3835 = cv3835

          txn3 = txn4
          continue
        } else {
          await stdlib.mapSet(map2, v4128, null)
          null
          await txn4.getOutput('addSong', 'v4146', ctc1, v4146)
          const cv3822 = v3822
          const cv3823 = v4146
          const cv3824 = v3824
          const cv3825 = v3825
          const cv3826 = v3826
          const cv3827 = v3827
          const cv3828 = v4130
          const cv3835 = v3835

          v3822 = cv3822
          v3823 = cv3823
          v3824 = cv3824
          v3825 = cv3825
          v3826 = cv3826
          v3827 = cv3827
          v3828 = cv3828
          v3835 = cv3835

          txn3 = txn4
          continue
        }
        break
      }
      case 'buyMembership0_504': {
        const v4407 = v4129[1]
        undefined /* setApiDetails */
        const v4430 = stdlib.addressEq(v4128, v3810)
        const v4431 = v4430 ? false : true
        stdlib.assert(v4431, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:152:31:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v4508 = stdlib.add(v3835, v3811)
        const v4559 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, v3827),
          null,
        )
        const v4560 = stdlib.fromSome(
          v4559,
          stdlib.checkedBigNumberify(
            './index.rsh:154:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4561 = stdlib.protect(
          map8_ctc,
          await stdlib.mapRef(map8, v3827),
          null,
        )
        const v4562 = stdlib.fromSome(
          v4561,
          stdlib.checkedBigNumberify(
            './index.rsh:155:57:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v4563 = stdlib.safeDiv(
          v3811,
          stdlib.checkedBigNumberify(
            './index.rsh:156:45:decimal',
            stdlib.UInt_max,
            '3',
          ),
        )
        const v4564 = stdlib.safeSub(v3811, v4563)
        const v4566 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4128),
          null,
        )
        switch (v4566[0]) {
          case 'None': {
            const v4567 = v4566[1]

            break
          }
          case 'Some': {
            const v4568 = v4566[1]
            const v4569 = stdlib.gt(v4131, v4568)
            stdlib.assert(v4569, {
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
        const v4570 = stdlib.safeAdd(v4131, v3812)
        await stdlib.mapSet(map0, v4128, v4570)
        const v4571 = stdlib.safeAdd(v4562, v4563)
        await stdlib.mapSet(map8, v3827, v4571)
        const v4572 = stdlib.safeAdd(v4560, v4564)
        await stdlib.mapSet(map6, v3827, v4572)
        null
        await txn4.getOutput('buyMembership', 'v4570', ctc1, v4570)
        const v4578 = stdlib.safeAdd(
          v3824,
          stdlib.checkedBigNumberify(
            './index.rsh:176:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv3822 = v3822
        const cv3823 = v3823
        const cv3824 = v4578
        const cv3825 = v3825
        const cv3826 = v3826
        const cv3827 = v3827
        const cv3828 = v4130
        const cv3835 = v4508

        v3822 = cv3822
        v3823 = cv3823
        v3824 = cv3824
        v3825 = cv3825
        v3826 = cv3826
        v3827 = cv3827
        v3828 = cv3828
        v3835 = cv3835

        txn3 = txn4
        continue
        break
      }
      case 'endVotingPeriod0_504': {
        const v4682 = v4129[1]
        undefined /* setApiDetails */
        const v4857 = stdlib.gt(v4131, v3822)
        stdlib.assert(v4857, {
          at: './index.rsh:248:18:application',
          fs: [
            'at ./index.rsh:247:16:application call to [unknown function] (defined at: ./index.rsh:247:16:function exp)',
          ],
          msg: 'voting period over',
          who: 'Deployer',
        })
        null
        const v4858 = null
        await txn4.getOutput('endVotingPeriod', 'v4858', ctc0, v4858)
        const v4864 = stdlib.safeAdd(
          v3827,
          stdlib.checkedBigNumberify(
            './index.rsh:253:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v4865 = stdlib.safeAdd(v4131, v3812)
        const cv3822 = v4865
        const cv3823 = v3823
        const cv3824 = v3824
        const cv3825 = v3825
        const cv3826 = stdlib.checkedBigNumberify(
          './index.rsh:255:13:decimal',
          stdlib.UInt_max,
          '0',
        )
        const cv3827 = v4864
        const cv3828 = v4130
        const cv3835 = v3835

        v3822 = cv3822
        v3823 = cv3823
        v3824 = cv3824
        v3825 = cv3825
        v3826 = cv3826
        v3827 = cv3827
        v3828 = cv3828
        v3835 = cv3835

        txn3 = txn4
        continue
        break
      }
      case 'receivePayout0_504': {
        const v4957 = v4129[1]
        undefined /* setApiDetails */
        const v5001 =
          v4957[
            stdlib.checkedBigNumberify(
              './index.rsh:262:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5002 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4128),
          null,
        )
        const v5003 = {
          None: 0,
          Some: 1,
        }[v5002[0]]
        const v5004 = stdlib.eq(
          v5003,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5004, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:264:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
            'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5006 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v4128),
          null,
        )
        const v5007 = {
          None: 0,
          Some: 1,
        }[v5006[0]]
        const v5008 = stdlib.eq(
          v5007,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5008, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'is owner',
          who: 'Deployer',
        })
        const v5010 = [v5001, v4128]
        const v5011 = stdlib.protect(
          map7_ctc,
          await stdlib.mapRef(map7, stdlib.digest([ctc15], [v5010])),
          null,
        )
        const v5012 = {
          None: 0,
          Some: 1,
        }[v5011[0]]
        const v5013 = stdlib.eq(
          v5012,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v5013, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'has received payout',
          who: 'Deployer',
        })
        const v5015 = stdlib.protect(
          map6_ctc,
          await stdlib.mapRef(map6, v5001),
          null,
        )
        const v5016 = stdlib.fromSome(
          v5015,
          stdlib.checkedBigNumberify(
            './index.rsh:267:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5019 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v5001),
          null,
        )
        const v5020 = stdlib.fromSome(
          v5019,
          stdlib.checkedBigNumberify(
            './index.rsh:107:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5021 = stdlib.eq(
          v5020,
          stdlib.checkedBigNumberify(
            './index.rsh:109:44:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        let v5022
        if (v5021) {
          v5022 = stdlib.checkedBigNumberify(
            './index.rsh:110:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5024 = stdlib.protect(
            map3_ctc,
            await stdlib.mapRef(map3, stdlib.digest([ctc15], [v5010])),
            null,
          )
          const v5025 = stdlib.fromSome(
            v5024,
            stdlib.checkedBigNumberify(
              './index.rsh:113:56:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5026 = stdlib.safeMuldiv(v5016, v5025, v5020)
          v5022 = v5026
        }
        const v5027 = stdlib.le(v5022, v5016)
        stdlib.assert(v5027, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v5030 = stdlib.ge(v3835, v5022)
        stdlib.assert(v5030, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:270:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        let v5164
        if (v5021) {
          v5164 = stdlib.checkedBigNumberify(
            './index.rsh:110:13:decimal',
            stdlib.UInt_max,
            '0',
          )
        } else {
          const v5166 = stdlib.protect(
            map3_ctc,
            await stdlib.mapRef(map3, stdlib.digest([ctc15], [v5010])),
            null,
          )
          const v5167 = stdlib.fromSome(
            v5166,
            stdlib.checkedBigNumberify(
              './index.rsh:113:56:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5168 = stdlib.safeMuldiv(v5016, v5167, v5020)
          v5164 = v5168
        }
        const v5169 = stdlib.le(v5164, v5016)
        stdlib.assert(v5169, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:273:16:application call to [unknown function] (defined at: ./index.rsh:273:16:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v5172 = stdlib.ge(v3835, v5164)
        stdlib.assert(v5172, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:270:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:273:16:application call to [unknown function] (defined at: ./index.rsh:273:16:function exp)',
          ],
          msg: 'enough balance',
          who: 'Deployer',
        })
        const v5178 = stdlib.sub(v3835, v5164)
        await stdlib.mapSet(map7, stdlib.digest([ctc15], [v5010]), true)
        const v5180 = stdlib.safeSub(v5016, v5164)
        await stdlib.mapSet(map6, v5001, v5180)
        null
        await txn4.getOutput('receivePayout', 'v5164', ctc1, v5164)
        const cv3822 = v3822
        const cv3823 = v3823
        const cv3824 = v3824
        const cv3825 = v3825
        const cv3826 = v3826
        const cv3827 = v3827
        const cv3828 = v4130
        const cv3835 = v5178

        v3822 = cv3822
        v3823 = cv3823
        v3824 = cv3824
        v3825 = cv3825
        v3826 = cv3826
        v3827 = cv3827
        v3828 = cv3828
        v3835 = cv3835

        txn3 = txn4
        continue
        break
      }
      case 'vote0_504': {
        const v5232 = v4129[1]
        undefined /* setApiDetails */
        const v5311 =
          v5232[
            stdlib.checkedBigNumberify(
              './index.rsh:218:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5312 = stdlib.addressEq(v4128, v3810)
        const v5313 = v5312 ? false : true
        stdlib.assert(v5313, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'not deployer',
          who: 'Deployer',
        })
        const v5315 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v4128),
          null,
        )
        const v5316 = {
          None: 0,
          Some: 1,
        }[v5315[0]]
        const v5317 = stdlib.eq(
          v5316,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5317, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:221:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
            'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5319 = stdlib.protect(
          map2_ctc,
          await stdlib.mapRef(map2, v5311),
          null,
        )
        const v5320 = {
          None: 0,
          Some: 1,
        }[v5319[0]]
        const v5321 = stdlib.eq(
          v5320,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1',
          ),
        )
        stdlib.assert(v5321, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'is valid artist',
          who: 'Deployer',
        })
        const v5323 = [v3827, v4128]
        const v5324 = stdlib.protect(
          map4_ctc,
          await stdlib.mapRef(map4, stdlib.digest([ctc15], [v5323])),
          null,
        )
        const v5325 = {
          None: 0,
          Some: 1,
        }[v5324[0]]
        const v5326 = stdlib.eq(
          v5325,
          stdlib.checkedBigNumberify(
            'reach standard library:39:41:application',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v5326, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
            'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
          ],
          msg: 'has voted',
          who: 'Deployer',
        })
        const v5485 = stdlib.fromSome(
          v5315,
          stdlib.checkedBigNumberify(
            './index.rsh:99:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5486 = stdlib.le(v4131, v5485)
        stdlib.assert(v5486, {
          at: './index.rsh:100:16:application',
          fs: [
            'at ./index.rsh:227:28:application call to "enforceMembership" (defined at: ./index.rsh:97:37:function exp)',
            'at ./index.rsh:226:16:application call to [unknown function] (defined at: ./index.rsh:226:16:function exp)',
          ],
          msg: 'membership valid',
          who: 'Deployer',
        })
        const v5487 = [v3827, v5311]
        const v5488 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc15], [v5487])),
          null,
        )
        const v5489 = stdlib.fromSome(
          v5488,
          stdlib.checkedBigNumberify(
            './index.rsh:119:62:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5491 = stdlib.safeAdd(
          v5489,
          stdlib.checkedBigNumberify(
            './index.rsh:120:48:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map3, stdlib.digest([ctc15], [v5487]), v5491)
        await stdlib.mapSet(map4, stdlib.digest([ctc15], [v5323]), true)
        const v5493 = stdlib.protect(
          map5_ctc,
          await stdlib.mapRef(map5, v3827),
          null,
        )
        const v5494 = stdlib.fromSome(
          v5493,
          stdlib.checkedBigNumberify(
            './index.rsh:124:11:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5495 = stdlib.safeAdd(
          v5494,
          stdlib.checkedBigNumberify(
            './index.rsh:126:67:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map5, v3827, v5495)
        null
        const v5497 = null
        await txn4.getOutput('vote', 'v5497', ctc0, v5497)
        const v5504 = stdlib.safeAdd(
          v3826,
          stdlib.checkedBigNumberify(
            './index.rsh:235:30:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5505 = stdlib.safeAdd(
          v3825,
          stdlib.checkedBigNumberify(
            './index.rsh:236:26:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const cv3822 = v3822
        const cv3823 = v3823
        const cv3824 = v3824
        const cv3825 = v5505
        const cv3826 = v5504
        const cv3827 = v3827
        const cv3828 = v4130
        const cv3835 = v3835

        v3822 = cv3822
        v3823 = cv3823
        v3824 = cv3824
        v3825 = cv3825
        v3826 = cv3826
        v3827 = cv3827
        v3828 = cv3828
        v3835 = cv3835

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
    addSong0_504: ctc10,
    buyMembership0_504: ctc11,
    endVotingPeriod0_504: ctc11,
    receivePayout0_504: ctc12,
    vote0_504: ctc13,
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

  const [v3810, v3811, v3812, v3822, v3823, v3824, v3825, v3826, v3827, v3835] =
    await ctc.getState(
      stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    )
  const v3925 = ctc.selfAddress()
  const v3927 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
      'at ./index.rsh:93:21:application call to "runaddSong0_504" (defined at: ./index.rsh:186:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'in',
    who: 'addSong',
  })
  const v3932 = stdlib.addressEq(v3925, v3810)
  const v3933 = v3932 ? false : true
  stdlib.assert(v3933, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
      'at ./index.rsh:93:21:application call to "runaddSong0_504" (defined at: ./index.rsh:186:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'addSong',
  })
  const v3935 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3925), null)
  const v3936 = {
    None: 0,
    Some: 1,
  }[v3935[0]]
  const v3937 = stdlib.eq(
    v3936,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v3937, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:188:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
      'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
      'at ./index.rsh:93:21:application call to "runaddSong0_504" (defined at: ./index.rsh:186:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'is member',
    who: 'addSong',
  })
  const v3939 = stdlib.safeAdd(
    v3823,
    stdlib.checkedBigNumberify(
      './index.rsh:190:35:decimal',
      stdlib.UInt_max,
      '1',
    ),
  )
  const v3940 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3939), null)
  const v3941 = {
    None: 0,
    Some: 1,
  }[v3940[0]]
  const v3942 = stdlib.eq(
    v3941,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v3942, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
      'at ./index.rsh:93:21:application call to "runaddSong0_504" (defined at: ./index.rsh:186:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'song id exist',
    who: 'addSong',
  })
  const v3951 = ['addSong0_504', v3927]

  const txn1 = await ctc.sendrecv({
    args: [
      v3810,
      v3811,
      v3812,
      v3822,
      v3823,
      v3824,
      v3825,
      v3826,
      v3827,
      v3835,
      v3951,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:193:10:decimal',
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

      const {
        data: [v4129],
        secs: v4131,
        time: v4130,
        didSend: v3330,
        from: v4128,
      } = txn1

      switch (v4129[0]) {
        case 'addSong0_504': {
          const v4132 = v4129[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'addSong',
          })
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4128),
            null,
          )
          const v4146 = stdlib.safeAdd(
            v3823,
            stdlib.checkedBigNumberify(
              './index.rsh:190:35:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, v4146),
            null,
          )
          const v4235 =
            v4132[
              stdlib.checkedBigNumberify(
                './index.rsh:186:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v4236 =
            v4132[
              stdlib.checkedBigNumberify(
                './index.rsh:186:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v4256 = {
            art: v4235,
            audio: v4236,
            creator: v4128,
            owner: v4128,
          }
          await stdlib.simMapSet(sim_r, 1, v4146, v4256)
          const v4257 = stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, v4128),
            null,
          )
          const v4258 = {
            None: 0,
            Some: 1,
          }[v4257[0]]
          const v4259 = stdlib.eq(
            v4258,
            stdlib.checkedBigNumberify(
              'reach standard library:38:41:application',
              stdlib.UInt_max,
              '1',
            ),
          )
          if (v4259) {
            null
            const v4271 = await txn1.getOutput('addSong', 'v4146', ctc1, v4146)

            const v11661 = v3822
            const v11662 = v4146
            const v11663 = v3824
            const v11664 = v3825
            const v11665 = v3826
            const v11666 = v3827
            const v11668 = v3835
            sim_r.isHalt = false
          } else {
            await stdlib.simMapSet(sim_r, 2, v4128, null)
            null
            const v4262 = await txn1.getOutput('addSong', 'v4146', ctc1, v4146)

            const v11669 = v3822
            const v11670 = v4146
            const v11671 = v3824
            const v11672 = v3825
            const v11673 = v3826
            const v11674 = v3827
            const v11676 = v3835
            sim_r.isHalt = false
          }
          break
        }
        case 'buyMembership0_504': {
          const v4407 = v4129[1]

          break
        }
        case 'endVotingPeriod0_504': {
          const v4682 = v4129[1]

          break
        }
        case 'receivePayout0_504': {
          const v4957 = v4129[1]

          break
        }
        case 'vote0_504': {
          const v5232 = v4129[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false,
  })
  const {
    data: [v4129],
    secs: v4131,
    time: v4130,
    didSend: v3330,
    from: v4128,
  } = txn1
  switch (v4129[0]) {
    case 'addSong0_504': {
      const v4132 = v4129[1]
      undefined /* setApiDetails */
      const v4139 = stdlib.addressEq(v4128, v3810)
      const v4140 = v4139 ? false : true
      stdlib.assert(v4140, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'addSong',
      })
      const v4142 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4128),
        null,
      )
      const v4143 = {
        None: 0,
        Some: 1,
      }[v4142[0]]
      const v4144 = stdlib.eq(
        v4143,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v4144, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:188:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
          'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'is member',
        who: 'addSong',
      })
      const v4146 = stdlib.safeAdd(
        v3823,
        stdlib.checkedBigNumberify(
          './index.rsh:190:35:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v4147 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v4146),
        null,
      )
      const v4148 = {
        None: 0,
        Some: 1,
      }[v4147[0]]
      const v4149 = stdlib.eq(
        v4148,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v4149, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:186:35:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:186:35:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'song id exist',
        who: 'addSong',
      })
      const v4235 =
        v4132[
          stdlib.checkedBigNumberify(
            './index.rsh:186:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v4236 =
        v4132[
          stdlib.checkedBigNumberify(
            './index.rsh:186:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v4254 = stdlib.fromSome(
        v4142,
        stdlib.checkedBigNumberify(
          './index.rsh:99:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v4255 = stdlib.le(v4131, v4254)
      stdlib.assert(v4255, {
        at: './index.rsh:100:16:application',
        fs: [
          'at ./index.rsh:195:28:application call to "enforceMembership" (defined at: ./index.rsh:97:37:function exp)',
          'at ./index.rsh:194:16:application call to [unknown function] (defined at: ./index.rsh:194:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'addSong',
      })
      const v4256 = {
        art: v4235,
        audio: v4236,
        creator: v4128,
        owner: v4128,
      }
      await stdlib.mapSet(map1, v4146, v4256)
      const v4257 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, v4128),
        null,
      )
      const v4258 = {
        None: 0,
        Some: 1,
      }[v4257[0]]
      const v4259 = stdlib.eq(
        v4258,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      if (v4259) {
        null
        const v4271 = await txn1.getOutput('addSong', 'v4146', ctc1, v4146)
        if (v3330) {
          stdlib.protect(ctc0, await interact.out(v4132, v4271), {
            at: './index.rsh:186:11:application',
            fs: [
              'at ./index.rsh:186:11:application call to [unknown function] (defined at: ./index.rsh:186:11:function exp)',
              'at ./index.rsh:206:17:application call to "notify" (defined at: ./index.rsh:194:16:function exp)',
              'at ./index.rsh:194:16:application call to [unknown function] (defined at: ./index.rsh:194:16:function exp)',
            ],
            msg: 'out',
            who: 'addSong',
          })
        } else {
        }

        const v11661 = v3822
        const v11662 = v4146
        const v11663 = v3824
        const v11664 = v3825
        const v11665 = v3826
        const v11666 = v3827
        const v11668 = v3835
        return
      } else {
        await stdlib.mapSet(map2, v4128, null)
        null
        const v4262 = await txn1.getOutput('addSong', 'v4146', ctc1, v4146)
        if (v3330) {
          stdlib.protect(ctc0, await interact.out(v4132, v4262), {
            at: './index.rsh:186:11:application',
            fs: [
              'at ./index.rsh:186:11:application call to [unknown function] (defined at: ./index.rsh:186:11:function exp)',
              'at ./index.rsh:206:17:application call to "notify" (defined at: ./index.rsh:194:16:function exp)',
              'at ./index.rsh:194:16:application call to [unknown function] (defined at: ./index.rsh:194:16:function exp)',
            ],
            msg: 'out',
            who: 'addSong',
          })
        } else {
        }

        const v11669 = v3822
        const v11670 = v4146
        const v11671 = v3824
        const v11672 = v3825
        const v11673 = v3826
        const v11674 = v3827
        const v11676 = v3835
        return
      }
      break
    }
    case 'buyMembership0_504': {
      const v4407 = v4129[1]
      return
      break
    }
    case 'endVotingPeriod0_504': {
      const v4682 = v4129[1]
      return
      break
    }
    case 'receivePayout0_504': {
      const v4957 = v4129[1]
      return
      break
    }
    case 'vote0_504': {
      const v5232 = v4129[1]
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
    addSong0_504: ctc11,
    buyMembership0_504: ctc10,
    endVotingPeriod0_504: ctc10,
    receivePayout0_504: ctc12,
    vote0_504: ctc13,
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

  const [v3810, v3811, v3812, v3822, v3823, v3824, v3825, v3826, v3827, v3835] =
    await ctc.getState(
      stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    )
  const v3906 = ctc.selfAddress()
  const v3908 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:152:31:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)',
      'at ./index.rsh:93:21:application call to "runbuyMembership0_504" (defined at: ./index.rsh:152:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'in',
    who: 'buyMembership',
  })
  const v3909 = stdlib.addressEq(v3906, v3810)
  const v3910 = v3909 ? false : true
  stdlib.assert(v3910, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:152:31:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)',
      'at ./index.rsh:93:21:application call to "runbuyMembership0_504" (defined at: ./index.rsh:152:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'buyMembership',
  })
  const v3923 = ['buyMembership0_504', v3908]

  const txn1 = await ctc.sendrecv({
    args: [
      v3810,
      v3811,
      v3812,
      v3822,
      v3823,
      v3824,
      v3825,
      v3826,
      v3827,
      v3835,
      v3923,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v3811, []],
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

      const {
        data: [v4129],
        secs: v4131,
        time: v4130,
        didSend: v3330,
        from: v4128,
      } = txn1

      switch (v4129[0]) {
        case 'addSong0_504': {
          const v4132 = v4129[1]

          break
        }
        case 'buyMembership0_504': {
          const v4407 = v4129[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'buyMembership',
          })
          const v4508 = stdlib.add(v3835, v3811)
          sim_r.txns.push({
            amt: v3811,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          const v4559 = stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, v3827),
            null,
          )
          const v4560 = stdlib.fromSome(
            v4559,
            stdlib.checkedBigNumberify(
              './index.rsh:154:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v4561 = stdlib.protect(
            map8_ctc,
            await stdlib.simMapRef(sim_r, 8, v3827),
            null,
          )
          const v4562 = stdlib.fromSome(
            v4561,
            stdlib.checkedBigNumberify(
              './index.rsh:155:57:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v4563 = stdlib.safeDiv(
            v3811,
            stdlib.checkedBigNumberify(
              './index.rsh:156:45:decimal',
              stdlib.UInt_max,
              '3',
            ),
          )
          const v4564 = stdlib.safeSub(v3811, v4563)
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4128),
            null,
          )
          const v4570 = stdlib.safeAdd(v4131, v3812)
          await stdlib.simMapSet(sim_r, 0, v4128, v4570)
          const v4571 = stdlib.safeAdd(v4562, v4563)
          await stdlib.simMapSet(sim_r, 8, v3827, v4571)
          const v4572 = stdlib.safeAdd(v4560, v4564)
          await stdlib.simMapSet(sim_r, 6, v3827, v4572)
          null
          const v4573 = await txn1.getOutput(
            'buyMembership',
            'v4570',
            ctc1,
            v4570,
          )

          const v4578 = stdlib.safeAdd(
            v3824,
            stdlib.checkedBigNumberify(
              './index.rsh:176:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v11725 = v3822
          const v11726 = v3823
          const v11727 = v4578
          const v11728 = v3825
          const v11729 = v3826
          const v11730 = v3827
          const v11732 = v4508
          sim_r.isHalt = false

          break
        }
        case 'endVotingPeriod0_504': {
          const v4682 = v4129[1]

          break
        }
        case 'receivePayout0_504': {
          const v4957 = v4129[1]

          break
        }
        case 'vote0_504': {
          const v5232 = v4129[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false,
  })
  const {
    data: [v4129],
    secs: v4131,
    time: v4130,
    didSend: v3330,
    from: v4128,
  } = txn1
  switch (v4129[0]) {
    case 'addSong0_504': {
      const v4132 = v4129[1]
      return
      break
    }
    case 'buyMembership0_504': {
      const v4407 = v4129[1]
      undefined /* setApiDetails */
      const v4430 = stdlib.addressEq(v4128, v3810)
      const v4431 = v4430 ? false : true
      stdlib.assert(v4431, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:152:31:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'buyMembership',
      })
      const v4508 = stdlib.add(v3835, v3811)
      const v4559 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, v3827),
        null,
      )
      const v4560 = stdlib.fromSome(
        v4559,
        stdlib.checkedBigNumberify(
          './index.rsh:154:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v4561 = stdlib.protect(
        map8_ctc,
        await stdlib.mapRef(map8, v3827),
        null,
      )
      const v4562 = stdlib.fromSome(
        v4561,
        stdlib.checkedBigNumberify(
          './index.rsh:155:57:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v4563 = stdlib.safeDiv(
        v3811,
        stdlib.checkedBigNumberify(
          './index.rsh:156:45:decimal',
          stdlib.UInt_max,
          '3',
        ),
      )
      const v4564 = stdlib.safeSub(v3811, v4563)
      const v4566 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4128),
        null,
      )
      switch (v4566[0]) {
        case 'None': {
          const v4567 = v4566[1]

          break
        }
        case 'Some': {
          const v4568 = v4566[1]
          const v4569 = stdlib.gt(v4131, v4568)
          stdlib.assert(v4569, {
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
      const v4570 = stdlib.safeAdd(v4131, v3812)
      await stdlib.mapSet(map0, v4128, v4570)
      const v4571 = stdlib.safeAdd(v4562, v4563)
      await stdlib.mapSet(map8, v3827, v4571)
      const v4572 = stdlib.safeAdd(v4560, v4564)
      await stdlib.mapSet(map6, v3827, v4572)
      null
      const v4573 = await txn1.getOutput('buyMembership', 'v4570', ctc1, v4570)
      if (v3330) {
        stdlib.protect(ctc0, await interact.out(v4407, v4573), {
          at: './index.rsh:152:11:application',
          fs: [
            'at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)',
            'at ./index.rsh:174:17:application call to "notify" (defined at: ./index.rsh:162:16:function exp)',
            'at ./index.rsh:162:16:application call to [unknown function] (defined at: ./index.rsh:162:16:function exp)',
          ],
          msg: 'out',
          who: 'buyMembership',
        })
      } else {
      }

      const v4578 = stdlib.safeAdd(
        v3824,
        stdlib.checkedBigNumberify(
          './index.rsh:176:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v11725 = v3822
      const v11726 = v3823
      const v11727 = v4578
      const v11728 = v3825
      const v11729 = v3826
      const v11730 = v3827
      const v11732 = v4508
      return

      break
    }
    case 'endVotingPeriod0_504': {
      const v4682 = v4129[1]
      return
      break
    }
    case 'receivePayout0_504': {
      const v4957 = v4129[1]
      return
      break
    }
    case 'vote0_504': {
      const v5232 = v4129[1]
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
    addSong0_504: ctc11,
    buyMembership0_504: ctc10,
    endVotingPeriod0_504: ctc10,
    receivePayout0_504: ctc12,
    vote0_504: ctc13,
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

  const [v3810, v3811, v3812, v3822, v3823, v3824, v3825, v3826, v3827, v3835] =
    await ctc.getState(
      stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    )
  const v3983 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:242:33:application call to [unknown function] (defined at: ./index.rsh:242:33:function exp)',
      'at ./index.rsh:93:21:application call to "runendVotingPeriod0_504" (defined at: ./index.rsh:242:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'in',
    who: 'endVotingPeriod',
  })
  const v3989 = ['endVotingPeriod0_504', v3983]

  const txn1 = await ctc.sendrecv({
    args: [
      v3810,
      v3811,
      v3812,
      v3822,
      v3823,
      v3824,
      v3825,
      v3826,
      v3827,
      v3835,
      v3989,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:246:10:decimal',
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

      const {
        data: [v4129],
        secs: v4131,
        time: v4130,
        didSend: v3330,
        from: v4128,
      } = txn1

      switch (v4129[0]) {
        case 'addSong0_504': {
          const v4132 = v4129[1]

          break
        }
        case 'buyMembership0_504': {
          const v4407 = v4129[1]

          break
        }
        case 'endVotingPeriod0_504': {
          const v4682 = v4129[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'endVotingPeriod',
          })
          null
          const v4858 = null
          const v4859 = await txn1.getOutput(
            'endVotingPeriod',
            'v4858',
            ctc0,
            v4858,
          )

          const v4864 = stdlib.safeAdd(
            v3827,
            stdlib.checkedBigNumberify(
              './index.rsh:253:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v4865 = stdlib.safeAdd(v4131, v3812)
          const v11781 = v4865
          const v11782 = v3823
          const v11783 = v3824
          const v11784 = v3825
          const v11785 = stdlib.checkedBigNumberify(
            './index.rsh:255:13:decimal',
            stdlib.UInt_max,
            '0',
          )
          const v11786 = v4864
          const v11788 = v3835
          sim_r.isHalt = false

          break
        }
        case 'receivePayout0_504': {
          const v4957 = v4129[1]

          break
        }
        case 'vote0_504': {
          const v5232 = v4129[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc14],
    waitIfNotPresent: false,
  })
  const {
    data: [v4129],
    secs: v4131,
    time: v4130,
    didSend: v3330,
    from: v4128,
  } = txn1
  switch (v4129[0]) {
    case 'addSong0_504': {
      const v4132 = v4129[1]
      return
      break
    }
    case 'buyMembership0_504': {
      const v4407 = v4129[1]
      return
      break
    }
    case 'endVotingPeriod0_504': {
      const v4682 = v4129[1]
      undefined /* setApiDetails */
      const v4857 = stdlib.gt(v4131, v3822)
      stdlib.assert(v4857, {
        at: './index.rsh:248:18:application',
        fs: [
          'at ./index.rsh:247:16:application call to [unknown function] (defined at: ./index.rsh:247:16:function exp)',
        ],
        msg: 'voting period over',
        who: 'endVotingPeriod',
      })
      null
      const v4858 = null
      const v4859 = await txn1.getOutput(
        'endVotingPeriod',
        'v4858',
        ctc0,
        v4858,
      )
      if (v3330) {
        stdlib.protect(ctc0, await interact.out(v4682, v4859), {
          at: './index.rsh:242:11:application',
          fs: [
            'at ./index.rsh:242:11:application call to [unknown function] (defined at: ./index.rsh:242:11:function exp)',
            'at ./index.rsh:250:17:application call to "notify" (defined at: ./index.rsh:247:16:function exp)',
            'at ./index.rsh:247:16:application call to [unknown function] (defined at: ./index.rsh:247:16:function exp)',
          ],
          msg: 'out',
          who: 'endVotingPeriod',
        })
      } else {
      }

      const v4864 = stdlib.safeAdd(
        v3827,
        stdlib.checkedBigNumberify(
          './index.rsh:253:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v4865 = stdlib.safeAdd(v4131, v3812)
      const v11781 = v4865
      const v11782 = v3823
      const v11783 = v3824
      const v11784 = v3825
      const v11785 = stdlib.checkedBigNumberify(
        './index.rsh:255:13:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v11786 = v4864
      const v11788 = v3835
      return

      break
    }
    case 'receivePayout0_504': {
      const v4957 = v4129[1]
      return
      break
    }
    case 'vote0_504': {
      const v5232 = v4129[1]
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
    addSong0_504: ctc12,
    buyMembership0_504: ctc13,
    endVotingPeriod0_504: ctc13,
    receivePayout0_504: ctc10,
    vote0_504: ctc14,
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

  const [v3810, v3811, v3812, v3822, v3823, v3824, v3825, v3826, v3827, v3835] =
    await ctc.getState(
      stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    )
  const v3991 = ctc.selfAddress()
  const v3993 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to "runreceivePayout0_504" (defined at: ./index.rsh:262:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'in',
    who: 'receivePayout',
  })
  const v3994 =
    v3993[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v3996 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3991), null)
  const v3997 = {
    None: 0,
    Some: 1,
  }[v3996[0]]
  const v3998 = stdlib.eq(
    v3997,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v3998, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:264:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to "runreceivePayout0_504" (defined at: ./index.rsh:262:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'is member',
    who: 'receivePayout',
  })
  const v4000 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3991), null)
  const v4001 = {
    None: 0,
    Some: 1,
  }[v4000[0]]
  const v4002 = stdlib.eq(
    v4001,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v4002, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to "runreceivePayout0_504" (defined at: ./index.rsh:262:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'is owner',
    who: 'receivePayout',
  })
  const v4004 = [v3994, v3991]
  const v4005 = stdlib.protect(
    map7_ctc,
    await stdlib.mapRef(map7, stdlib.digest([ctc11], [v4004])),
    null,
  )
  const v4006 = {
    None: 0,
    Some: 1,
  }[v4005[0]]
  const v4007 = stdlib.eq(
    v4006,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v4007, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to "runreceivePayout0_504" (defined at: ./index.rsh:262:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'receivePayout',
  })
  const v4009 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3994), null)
  const v4010 = stdlib.fromSome(
    v4009,
    stdlib.checkedBigNumberify(
      './index.rsh:267:54:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4013 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3994), null)
  const v4014 = stdlib.fromSome(
    v4013,
    stdlib.checkedBigNumberify(
      './index.rsh:107:11:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4015 = stdlib.eq(
    v4014,
    stdlib.checkedBigNumberify(
      './index.rsh:109:44:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  let v4016
  if (v4015) {
    v4016 = stdlib.checkedBigNumberify(
      './index.rsh:110:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v4018 = stdlib.protect(
      map3_ctc,
      await stdlib.mapRef(map3, stdlib.digest([ctc11], [v4004])),
      null,
    )
    const v4019 = stdlib.fromSome(
      v4018,
      stdlib.checkedBigNumberify(
        './index.rsh:113:56:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v4020 = stdlib.safeMuldiv(v4010, v4019, v4014)
    v4016 = v4020
  }
  const v4021 = stdlib.le(v4016, v4010)
  stdlib.assert(v4021, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to "runreceivePayout0_504" (defined at: ./index.rsh:262:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4024 = stdlib.ge(v3835, v4016)
  stdlib.assert(v4024, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:270:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to "runreceivePayout0_504" (defined at: ./index.rsh:262:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })
  const v4031 = ['receivePayout0_504', v3993]

  let v4094
  if (v4015) {
    v4094 = stdlib.checkedBigNumberify(
      './index.rsh:110:13:decimal',
      stdlib.UInt_max,
      '0',
    )
  } else {
    const v4096 = stdlib.protect(
      map3_ctc,
      await stdlib.mapRef(map3, stdlib.digest([ctc11], [v4004])),
      null,
    )
    const v4097 = stdlib.fromSome(
      v4096,
      stdlib.checkedBigNumberify(
        './index.rsh:113:56:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const v4098 = stdlib.safeMuldiv(v4010, v4097, v4014)
    v4094 = v4098
  }
  const v4099 = stdlib.le(v4094, v4010)
  stdlib.assert(v4099, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4102 = stdlib.ge(v3835, v4094)
  stdlib.assert(v4102, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:270:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'enough balance',
    who: 'receivePayout',
  })

  const txn1 = await ctc.sendrecv({
    args: [
      v3810,
      v3811,
      v3812,
      v3822,
      v3823,
      v3824,
      v3825,
      v3826,
      v3827,
      v3835,
      v4031,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:272:10:decimal',
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

      const {
        data: [v4129],
        secs: v4131,
        time: v4130,
        didSend: v3330,
        from: v4128,
      } = txn1

      switch (v4129[0]) {
        case 'addSong0_504': {
          const v4132 = v4129[1]

          break
        }
        case 'buyMembership0_504': {
          const v4407 = v4129[1]

          break
        }
        case 'endVotingPeriod0_504': {
          const v4682 = v4129[1]

          break
        }
        case 'receivePayout0_504': {
          const v4957 = v4129[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'receivePayout',
          })
          const v5001 =
            v4957[
              stdlib.checkedBigNumberify(
                './index.rsh:262:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4128),
            null,
          )
          stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, v4128),
            null,
          )
          const v5010 = [v5001, v4128]
          stdlib.protect(
            map7_ctc,
            await stdlib.simMapRef(sim_r, 7, stdlib.digest([ctc11], [v5010])),
            null,
          )
          const v5015 = stdlib.protect(
            map6_ctc,
            await stdlib.simMapRef(sim_r, 6, v5001),
            null,
          )
          const v5016 = stdlib.fromSome(
            v5015,
            stdlib.checkedBigNumberify(
              './index.rsh:267:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5019 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v5001),
            null,
          )
          const v5020 = stdlib.fromSome(
            v5019,
            stdlib.checkedBigNumberify(
              './index.rsh:107:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5021 = stdlib.eq(
            v5020,
            stdlib.checkedBigNumberify(
              './index.rsh:109:44:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          if (v5021) {
          } else {
            stdlib.protect(
              map3_ctc,
              await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc11], [v5010])),
              null,
            )
          }
          let v5164
          if (v5021) {
            v5164 = stdlib.checkedBigNumberify(
              './index.rsh:110:13:decimal',
              stdlib.UInt_max,
              '0',
            )
          } else {
            const v5166 = stdlib.protect(
              map3_ctc,
              await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc11], [v5010])),
              null,
            )
            const v5167 = stdlib.fromSome(
              v5166,
              stdlib.checkedBigNumberify(
                './index.rsh:113:56:decimal',
                stdlib.UInt_max,
                '0',
              ),
            )
            const v5168 = stdlib.safeMuldiv(v5016, v5167, v5020)
            v5164 = v5168
          }
          const v5178 = stdlib.sub(v3835, v5164)
          sim_r.txns.push({
            kind: 'from',
            to: v4128,
            tok: undefined /* Nothing */,
          })
          await stdlib.simMapSet(
            sim_r,
            7,
            stdlib.digest([ctc11], [v5010]),
            true,
          )
          const v5180 = stdlib.safeSub(v5016, v5164)
          await stdlib.simMapSet(sim_r, 6, v5001, v5180)
          null
          const v5181 = await txn1.getOutput(
            'receivePayout',
            'v5164',
            ctc1,
            v5164,
          )

          const v11837 = v3822
          const v11838 = v3823
          const v11839 = v3824
          const v11840 = v3825
          const v11841 = v3826
          const v11842 = v3827
          const v11844 = v5178
          sim_r.isHalt = false

          break
        }
        case 'vote0_504': {
          const v5232 = v4129[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc15],
    waitIfNotPresent: false,
  })
  const {
    data: [v4129],
    secs: v4131,
    time: v4130,
    didSend: v3330,
    from: v4128,
  } = txn1
  switch (v4129[0]) {
    case 'addSong0_504': {
      const v4132 = v4129[1]
      return
      break
    }
    case 'buyMembership0_504': {
      const v4407 = v4129[1]
      return
      break
    }
    case 'endVotingPeriod0_504': {
      const v4682 = v4129[1]
      return
      break
    }
    case 'receivePayout0_504': {
      const v4957 = v4129[1]
      undefined /* setApiDetails */
      const v5001 =
        v4957[
          stdlib.checkedBigNumberify(
            './index.rsh:262:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5002 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4128),
        null,
      )
      const v5003 = {
        None: 0,
        Some: 1,
      }[v5002[0]]
      const v5004 = stdlib.eq(
        v5003,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5004, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:264:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
          'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'is member',
        who: 'receivePayout',
      })
      const v5006 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, v4128),
        null,
      )
      const v5007 = {
        None: 0,
        Some: 1,
      }[v5006[0]]
      const v5008 = stdlib.eq(
        v5007,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5008, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'is owner',
        who: 'receivePayout',
      })
      const v5010 = [v5001, v4128]
      const v5011 = stdlib.protect(
        map7_ctc,
        await stdlib.mapRef(map7, stdlib.digest([ctc11], [v5010])),
        null,
      )
      const v5012 = {
        None: 0,
        Some: 1,
      }[v5011[0]]
      const v5013 = stdlib.eq(
        v5012,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v5013, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'has received payout',
        who: 'receivePayout',
      })
      const v5015 = stdlib.protect(
        map6_ctc,
        await stdlib.mapRef(map6, v5001),
        null,
      )
      const v5016 = stdlib.fromSome(
        v5015,
        stdlib.checkedBigNumberify(
          './index.rsh:267:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5019 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v5001),
        null,
      )
      const v5020 = stdlib.fromSome(
        v5019,
        stdlib.checkedBigNumberify(
          './index.rsh:107:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5021 = stdlib.eq(
        v5020,
        stdlib.checkedBigNumberify(
          './index.rsh:109:44:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      let v5022
      if (v5021) {
        v5022 = stdlib.checkedBigNumberify(
          './index.rsh:110:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5024 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc11], [v5010])),
          null,
        )
        const v5025 = stdlib.fromSome(
          v5024,
          stdlib.checkedBigNumberify(
            './index.rsh:113:56:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5026 = stdlib.safeMuldiv(v5016, v5025, v5020)
        v5022 = v5026
      }
      const v5027 = stdlib.le(v5022, v5016)
      stdlib.assert(v5027, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v5030 = stdlib.ge(v3835, v5022)
      stdlib.assert(v5030, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:270:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:262:36:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:262:36:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      let v5164
      if (v5021) {
        v5164 = stdlib.checkedBigNumberify(
          './index.rsh:110:13:decimal',
          stdlib.UInt_max,
          '0',
        )
      } else {
        const v5166 = stdlib.protect(
          map3_ctc,
          await stdlib.mapRef(map3, stdlib.digest([ctc11], [v5010])),
          null,
        )
        const v5167 = stdlib.fromSome(
          v5166,
          stdlib.checkedBigNumberify(
            './index.rsh:113:56:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5168 = stdlib.safeMuldiv(v5016, v5167, v5020)
        v5164 = v5168
      }
      const v5169 = stdlib.le(v5164, v5016)
      stdlib.assert(v5169, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:273:16:application call to [unknown function] (defined at: ./index.rsh:273:16:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v5172 = stdlib.ge(v3835, v5164)
      stdlib.assert(v5172, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:270:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:273:16:application call to [unknown function] (defined at: ./index.rsh:273:16:function exp)',
        ],
        msg: 'enough balance',
        who: 'receivePayout',
      })
      const v5178 = stdlib.sub(v3835, v5164)
      await stdlib.mapSet(map7, stdlib.digest([ctc11], [v5010]), true)
      const v5180 = stdlib.safeSub(v5016, v5164)
      await stdlib.mapSet(map6, v5001, v5180)
      null
      const v5181 = await txn1.getOutput('receivePayout', 'v5164', ctc1, v5164)
      if (v3330) {
        stdlib.protect(ctc0, await interact.out(v4957, v5181), {
          at: './index.rsh:262:11:application',
          fs: [
            'at ./index.rsh:262:11:application call to [unknown function] (defined at: ./index.rsh:262:11:function exp)',
            'at ./index.rsh:278:17:application call to "notify" (defined at: ./index.rsh:273:16:function exp)',
            'at ./index.rsh:273:16:application call to [unknown function] (defined at: ./index.rsh:273:16:function exp)',
          ],
          msg: 'out',
          who: 'receivePayout',
        })
      } else {
      }

      const v11837 = v3822
      const v11838 = v3823
      const v11839 = v3824
      const v11840 = v3825
      const v11841 = v3826
      const v11842 = v3827
      const v11844 = v5178
      return

      break
    }
    case 'vote0_504': {
      const v5232 = v4129[1]
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
    addSong0_504: ctc12,
    buyMembership0_504: ctc13,
    endVotingPeriod0_504: ctc13,
    receivePayout0_504: ctc14,
    vote0_504: ctc10,
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

  const [v3810, v3811, v3812, v3822, v3823, v3824, v3825, v3826, v3827, v3835] =
    await ctc.getState(
      stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
      [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    )
  const v3953 = ctc.selfAddress()
  const v3955 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
      'at ./index.rsh:93:21:application call to "runvote0_504" (defined at: ./index.rsh:218:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'in',
    who: 'vote',
  })
  const v3956 =
    v3955[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v3958 = stdlib.addressEq(v3953, v3810)
  const v3959 = v3958 ? false : true
  stdlib.assert(v3959, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
      'at ./index.rsh:93:21:application call to "runvote0_504" (defined at: ./index.rsh:218:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'vote',
  })
  const v3961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3953), null)
  const v3962 = {
    None: 0,
    Some: 1,
  }[v3961[0]]
  const v3963 = stdlib.eq(
    v3962,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v3963, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:221:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
      'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
      'at ./index.rsh:93:21:application call to "runvote0_504" (defined at: ./index.rsh:218:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'is member',
    who: 'vote',
  })
  const v3965 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3956), null)
  const v3966 = {
    None: 0,
    Some: 1,
  }[v3965[0]]
  const v3967 = stdlib.eq(
    v3966,
    stdlib.checkedBigNumberify(
      'reach standard library:38:41:application',
      stdlib.UInt_max,
      '1',
    ),
  )
  stdlib.assert(v3967, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
      'at ./index.rsh:93:21:application call to "runvote0_504" (defined at: ./index.rsh:218:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'is valid artist',
    who: 'vote',
  })
  const v3969 = [v3827, v3953]
  const v3970 = stdlib.protect(
    map4_ctc,
    await stdlib.mapRef(map4, stdlib.digest([ctc11], [v3969])),
    null,
  )
  const v3971 = {
    None: 0,
    Some: 1,
  }[v3970[0]]
  const v3972 = stdlib.eq(
    v3971,
    stdlib.checkedBigNumberify(
      'reach standard library:39:41:application',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v3972, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
      'at ./index.rsh:93:21:application call to "runvote0_504" (defined at: ./index.rsh:218:10:function exp)',
      'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
    ],
    msg: 'has voted',
    who: 'vote',
  })
  const v3979 = ['vote0_504', v3955]

  const txn1 = await ctc.sendrecv({
    args: [
      v3810,
      v3811,
      v3812,
      v3822,
      v3823,
      v3824,
      v3825,
      v3826,
      v3827,
      v3835,
      v3979,
    ],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:225:10:decimal',
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

      const {
        data: [v4129],
        secs: v4131,
        time: v4130,
        didSend: v3330,
        from: v4128,
      } = txn1

      switch (v4129[0]) {
        case 'addSong0_504': {
          const v4132 = v4129[1]

          break
        }
        case 'buyMembership0_504': {
          const v4407 = v4129[1]

          break
        }
        case 'endVotingPeriod0_504': {
          const v4682 = v4129[1]

          break
        }
        case 'receivePayout0_504': {
          const v4957 = v4129[1]

          break
        }
        case 'vote0_504': {
          const v5232 = v4129[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'vote',
          })
          const v5311 =
            v5232[
              stdlib.checkedBigNumberify(
                './index.rsh:218:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v4128),
            null,
          )
          stdlib.protect(
            map2_ctc,
            await stdlib.simMapRef(sim_r, 2, v5311),
            null,
          )
          const v5323 = [v3827, v4128]
          stdlib.protect(
            map4_ctc,
            await stdlib.simMapRef(sim_r, 4, stdlib.digest([ctc11], [v5323])),
            null,
          )
          const v5487 = [v3827, v5311]
          const v5488 = stdlib.protect(
            map3_ctc,
            await stdlib.simMapRef(sim_r, 3, stdlib.digest([ctc11], [v5487])),
            null,
          )
          const v5489 = stdlib.fromSome(
            v5488,
            stdlib.checkedBigNumberify(
              './index.rsh:119:62:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5491 = stdlib.safeAdd(
            v5489,
            stdlib.checkedBigNumberify(
              './index.rsh:120:48:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(
            sim_r,
            3,
            stdlib.digest([ctc11], [v5487]),
            v5491,
          )
          await stdlib.simMapSet(
            sim_r,
            4,
            stdlib.digest([ctc11], [v5323]),
            true,
          )
          const v5493 = stdlib.protect(
            map5_ctc,
            await stdlib.simMapRef(sim_r, 5, v3827),
            null,
          )
          const v5494 = stdlib.fromSome(
            v5493,
            stdlib.checkedBigNumberify(
              './index.rsh:124:11:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5495 = stdlib.safeAdd(
            v5494,
            stdlib.checkedBigNumberify(
              './index.rsh:126:67:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(sim_r, 5, v3827, v5495)
          null
          const v5497 = null
          const v5498 = await txn1.getOutput('vote', 'v5497', ctc0, v5497)

          const v5504 = stdlib.safeAdd(
            v3826,
            stdlib.checkedBigNumberify(
              './index.rsh:235:30:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5505 = stdlib.safeAdd(
            v3825,
            stdlib.checkedBigNumberify(
              './index.rsh:236:26:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v11893 = v3822
          const v11894 = v3823
          const v11895 = v3824
          const v11896 = v5505
          const v11897 = v5504
          const v11898 = v3827
          const v11900 = v3835
          sim_r.isHalt = false

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc15],
    waitIfNotPresent: false,
  })
  const {
    data: [v4129],
    secs: v4131,
    time: v4130,
    didSend: v3330,
    from: v4128,
  } = txn1
  switch (v4129[0]) {
    case 'addSong0_504': {
      const v4132 = v4129[1]
      return
      break
    }
    case 'buyMembership0_504': {
      const v4407 = v4129[1]
      return
      break
    }
    case 'endVotingPeriod0_504': {
      const v4682 = v4129[1]
      return
      break
    }
    case 'receivePayout0_504': {
      const v4957 = v4129[1]
      return
      break
    }
    case 'vote0_504': {
      const v5232 = v4129[1]
      undefined /* setApiDetails */
      const v5311 =
        v5232[
          stdlib.checkedBigNumberify(
            './index.rsh:218:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5312 = stdlib.addressEq(v4128, v3810)
      const v5313 = v5312 ? false : true
      stdlib.assert(v5313, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'not deployer',
        who: 'vote',
      })
      const v5315 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v4128),
        null,
      )
      const v5316 = {
        None: 0,
        Some: 1,
      }[v5315[0]]
      const v5317 = stdlib.eq(
        v5316,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5317, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:96:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:221:20:application call to "chkMembership" (defined at: ./index.rsh:96:33:function exp)',
          'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'is member',
        who: 'vote',
      })
      const v5319 = stdlib.protect(
        map2_ctc,
        await stdlib.mapRef(map2, v5311),
        null,
      )
      const v5320 = {
        None: 0,
        Some: 1,
      }[v5319[0]]
      const v5321 = stdlib.eq(
        v5320,
        stdlib.checkedBigNumberify(
          'reach standard library:38:41:application',
          stdlib.UInt_max,
          '1',
        ),
      )
      stdlib.assert(v5321, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'is valid artist',
        who: 'vote',
      })
      const v5323 = [v3827, v4128]
      const v5324 = stdlib.protect(
        map4_ctc,
        await stdlib.mapRef(map4, stdlib.digest([ctc11], [v5323])),
        null,
      )
      const v5325 = {
        None: 0,
        Some: 1,
      }[v5324[0]]
      const v5326 = stdlib.eq(
        v5325,
        stdlib.checkedBigNumberify(
          'reach standard library:39:41:application',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v5326, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:218:26:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:218:26:function exp)',
          'at ./index.rsh:93:21:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)',
        ],
        msg: 'has voted',
        who: 'vote',
      })
      const v5485 = stdlib.fromSome(
        v5315,
        stdlib.checkedBigNumberify(
          './index.rsh:99:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5486 = stdlib.le(v4131, v5485)
      stdlib.assert(v5486, {
        at: './index.rsh:100:16:application',
        fs: [
          'at ./index.rsh:227:28:application call to "enforceMembership" (defined at: ./index.rsh:97:37:function exp)',
          'at ./index.rsh:226:16:application call to [unknown function] (defined at: ./index.rsh:226:16:function exp)',
        ],
        msg: 'membership valid',
        who: 'vote',
      })
      const v5487 = [v3827, v5311]
      const v5488 = stdlib.protect(
        map3_ctc,
        await stdlib.mapRef(map3, stdlib.digest([ctc11], [v5487])),
        null,
      )
      const v5489 = stdlib.fromSome(
        v5488,
        stdlib.checkedBigNumberify(
          './index.rsh:119:62:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5491 = stdlib.safeAdd(
        v5489,
        stdlib.checkedBigNumberify(
          './index.rsh:120:48:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map3, stdlib.digest([ctc11], [v5487]), v5491)
      await stdlib.mapSet(map4, stdlib.digest([ctc11], [v5323]), true)
      const v5493 = stdlib.protect(
        map5_ctc,
        await stdlib.mapRef(map5, v3827),
        null,
      )
      const v5494 = stdlib.fromSome(
        v5493,
        stdlib.checkedBigNumberify(
          './index.rsh:124:11:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5495 = stdlib.safeAdd(
        v5494,
        stdlib.checkedBigNumberify(
          './index.rsh:126:67:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map5, v3827, v5495)
      null
      const v5497 = null
      const v5498 = await txn1.getOutput('vote', 'v5497', ctc0, v5497)
      if (v3330) {
        stdlib.protect(ctc0, await interact.out(v5232, v5498), {
          at: './index.rsh:218:11:application',
          fs: [
            'at ./index.rsh:218:11:application call to [unknown function] (defined at: ./index.rsh:218:11:function exp)',
            'at ./index.rsh:230:17:application call to "notify" (defined at: ./index.rsh:226:16:function exp)',
            'at ./index.rsh:226:16:application call to [unknown function] (defined at: ./index.rsh:226:16:function exp)',
          ],
          msg: 'out',
          who: 'vote',
        })
      } else {
      }

      const v5504 = stdlib.safeAdd(
        v3826,
        stdlib.checkedBigNumberify(
          './index.rsh:235:30:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5505 = stdlib.safeAdd(
        v3825,
        stdlib.checkedBigNumberify(
          './index.rsh:236:26:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v11893 = v3822
      const v11894 = v3823
      const v11895 = v3824
      const v11896 = v5505
      const v11897 = v5504
      const v11898 = v3827
      const v11900 = v3835
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T14","name":"v11949","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T5","name":"_addSong0_504","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_504","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_504","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_receivePayout0_504","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T8","name":"_vote0_504","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4146","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v4570","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4858","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5164","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5497","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"endedVotingPeriod","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"membershipPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"payoutReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"songAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"voted","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"address payable","name":"owner","type":"address"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T4","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_5Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_6Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_7Ref","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T4","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_8Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v11951","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T5","name":"_addSong0_504","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_504","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_504","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_receivePayout0_504","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T8","name":"_vote0_504","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v11961","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"v11924","type":"bytes32"},{"internalType":"bytes32","name":"v11925","type":"bytes32"}],"name":"addSong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endVotingPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getCurrentVotingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembershipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v11905","type":"address"}],"name":"getMembershipExp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v11908","type":"address"},{"internalType":"uint256","name":"v11909","type":"uint256"}],"name":"getOwnerPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11914","type":"uint256"}],"name":"getPeriodPayouts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11917","type":"uint256"}],"name":"getSong","outputs":[{"components":[{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"address payable","name":"owner","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11920","type":"uint256"},{"internalType":"address payable","name":"v11921","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v11938","type":"uint256"}],"name":"receivePayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v11943","type":"address"}],"name":"vote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200417490813803601f1980601f83011683019360018060401b039284861084871117620003905780859260409788528339606094859181010312620003a6578451936200004f85620003ab565b815185526020868184015193828801948552015195878101968752436003558751926101c0840184811088821117620003905789526000938481528484820152848a82015284828201528460808201528460a08201528460c08201528460e082015284610100820152846101208201528951608081018181108a8211176200037c57916101a09187938d528381528387820152838d82015283858201526101408201528261016082015282610180820152015260049160ff83541662000365577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808b5133815283518782015288518d8201528b5185820152a151801590811562000358575b50156200034157346200032a578851976200017189620003ab565b838901958587528a8a0199868b523390525186525188526001978885554389558951953385880152518a8701525181860152845260808401848110878211176200031757885283519586116200030457600254908782811c92168015620002f9575b83831014620002e65750601f81116200029a575b508093601f8611600114620002325750509183949184939462000226575b50501b916000199060031b1c1916176002555b51613dac9081620003c88239f35b01519250388062000205565b600283528183209493928692918316915b888383106200027f575050501062000265575b505050811b0160025562000218565b015160001960f88460031b161c1916905538808062000256565b85870151885590960195948501948793509081019062000243565b60028352818320601f870160051c810191838810620002db575b601f0160051c019087905b828110620002cf575050620001e7565b848155018790620002bf565b9091508190620002b4565b634e487b7160e01b845260229052602483fd5b91607f1691620001d3565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b885163100960cb60e01b8152601381840152602490fd5b885163100960cb60e01b8152601281840152602490fd5b9050600154143862000156565b895163100960cb60e01b8152601181850152602490fd5b634e487b7160e01b87526041600452602487fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003905760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c80630be3c76b146111cc5780631248dfcf146110ea5780631ca8b66d146110c25780631e93b0f1146110a457806336e56ea51461106b57806342acaa6614610f2c5780634385963214610de957806346287a4514610d86578063544774a914610d3057806355bfc2ba14610c9a578063573b85101461087a5780635c581119146108335780636dd7d8ea146107bd57806372ee092814610795578063746235351461073457806378e026f91461053357806383230757146105155780638b75d817146104ba578063912141c314610492578063ab53f2c61461041e578063ad76d8b4146103f6578063ae40bc79146103a7578063bda4463b14610373578063ced6cdf814610247578063d61ba282146101db578063e80a57a5146101835763ec192d610361000e573461017e57602036600319011261017e5761015f6114ca565b5061017a61016e60043561172f565b604051918291826112f1565b0390f35b600080fd5b600036600319011261017e576020606061019b61189c565b6101cf816101a7613d23565b85810190600282515251151585825101526101c0613d23565b90600082525186820152611abe565b01511515604051908152f35b3461017e57600036600319011261017e576101f461189c565b60046000540361022e57610100602091606061021f61021161141f565b8580825183010191016119d3565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b61010036600319011261017e5761025c61189c565b6040519061026982611358565b600435825260e036602319011261017e576040519060c082016001600160401b0381118382101761035d57604052602435600581101561017e578252604036604319011261017e57604051926102be84611358565b60443584526020936064358582015284840152608435801515810361017e57604084015260a435801515810361017e5760608401528360c31936011261017e5760405161030a81611373565b60c435815260808401528360e31936011261017e576040519261032c84611373565b60e435936001600160a01b038516850361017e5761035494815260a082015284820152611abe565b60405160008152f35b634e487b7160e01b600052604160045260246000fd5b3461017e57602036600319011261017e5761038c6114ca565b5061017a61039b600435611778565b60405191829182611297565b3461017e57600036600319011261017e576103c061189c565b6004600054036103dd57608060209161010061021f61021161141f565b60405163100960cb60e01b815260076004820152602490fd5b3461017e57602036600319011261017e5761040f6114ca565b5061017a61039b6004356116e6565b3461017e57600036600319011261017e5760005461043a61141f565b6040519182528160206040818301528251908160408401526000935b828510610479575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610456565b3461017e57602036600319011261017e576104ab6114ca565b5061017a61016e60043561180a565b3461017e57600036600319011261017e576104d361189c565b6004600054036104fc5760a06020918261021f6104ee61141f565b8280825183010191016119d3565b60405163100960cb60e01b815260086004820152602490fd5b3461017e57600036600319011261017e576020600154604051908152f35b3461017e57604036600319011261017e5761054c611261565b61055461189c565b906040519161056283611358565b6020928381019260018060a01b03809116825260243584526040516105868161138e565b600081528581019260008452604082016040516105a281611358565b60008152600089820152815260046000540361071b5760e0966105d46105c661141f565b8a80825183010191016119d3565b5060016105e18251611778565b516105eb81611277565b6105f481611277565b036107145760406106058251611778565b01515b808552610627575050505050600081525b519182910152604051908152f35b6106f7946106ef93825184515251168983510152600161064782516117c1565b5161065181611277565b61065a81611277565b0361070857604061066e61068992516117c1565b0151915b60016106a582518c60405195869182019283611a63565b039461069d601f19968781018352826113fc565b5190206116e6565b516106af81611277565b6106b881611277565b036106fe576040916106db61069d6106e79351928d865193849182019586611a63565b039081018352826113fc565b015190613c75565b905190611a9e565b8152610619565b5050600090613c75565b50610689600091610672565b6000610608565b60405163100960cb60e01b8152600b6004820152602490fd5b3461017e57602036600319011261017e576004356001600160a01b038116810361017e5761076c6060916107666114ca565b5061166b565b6040805191805161077c81611277565b8352602081015115156020840152015115156040820152f35b3461017e57602036600319011261017e576107ae6114ca565b5061017a61039b600435611853565b602036600319011261017e5760206101a06107d6611261565b6101cf6107e161189c565b80926040516107ef81611358565b6040516107fb81611373565b6000815281528681019161080d613cb4565b835281516001600160a01b03909116905281516004905251815160a001526101c0613d23565b600036600319011261017e576020604061084b61189c565b61087081610857613d23565b85810190600182515251151585825101526101c0613d23565b0151604051908152f35b602036600319011261017e5761088e61189c565b5060405161089b81611373565b600435815260ff60045416610c81577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040805133815283516020820152a1600160005403610c68576108ec61141f565b60608180518101031261017e57604051916109068361138e565b6109126020830161191c565b835260606040830151926020850193845201519060408401918252518015908115610c5c575b5015610c435734610c2a578251336001600160a01b0390911603610c115761098391610962611930565b93516001600160a01b031684525160208401528051604084015251426119bf565b606082015260006080820152600060a0820152600060c0820152600060e082015260016101008201524361012082015260006101408201526101206040516109ca816113a9565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261014060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152015182820152600460005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e08101516101008401526101008101518284015201516101408201526101408152610aef816113e0565b80516001600160401b03811161035d57610b0a60025461131e565b601f8111610bbe575b50602091601f8211600114610b5957918192600092610b4e575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610b2d565b601f19821692600260005260206000209160005b858110610ba657508360019510610b8d575b505050811b01600255610b43565b015160001960f88460031b161c19169055828080610b7f565b91926020600181928685015181550194019201610b6d565b6002600052600080516020613d40833981519152601f830160051c81019160208410610c07575b601f0160051c01905b818110610bfb5750610b13565b60008155600101610bee565b9091508190610be5565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541484610938565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b3461017e57602036600319011261017e57600435610cb661189c565b90600460005403610d175760209161012091610cd361021161141f565b506001610cdf826117c1565b51610ce981611277565b610cf281611277565b03610d0c5761021f6040916117c1565b0152604051908152f35b506000918291610d02565b60405163100960cb60e01b8152600d6004820152602490fd5b3461017e57602036600319011261017e57610d49611591565b5060c0610d576004356115b9565b610d8460408051928051610d6a81611277565b8452602081015115156020850152015160408301906112c2565bf35b602036600319011261017e576020610180610d9f61189c565b61087081604051610daf81611358565b604051610dbb81611373565b60008152815285810190610dcd613cb4565b82526004358151526003825152516080825101526101c0613d23565b3461017e57604036600319011261017e576001600160a01b036024358181169081900361017e57610e1861189c565b60405191610e2583611358565b602093848401916004358552825260405191610e4083611373565b604051610e4c81611358565b600081526000878201528352600460005403610f135761016094610e7f610e7161141f565b8880825183010191016119d3565b5051835152511684825101528051906001610ec16040519384610ea58982019283611a63565b0394610eb9601f19968781018352826113fc565b51902061172f565b51610ecb81611277565b610ed481611277565b03610f0a57604091610ef6915190610eb9845191826106db8a82019586611a63565b015115155b15159182910152604051908152f35b50506000610efb565b60405163100960cb60e01b815260106004820152602490fd5b3461017e57602036600319011261017e57610f4561156c565b50610f4e61189c565b604051610f5a8161138e565b610f62611591565b815260208101916000835260408201610f7961156c565b815260046000540361105257610f9f610f9061141f565b602080825183010191016119d3565b926001610fad6004356115b9565b80835251610fba81611277565b610fc381611277565b0361103957846101409460006080975260018060a01b0391828251168551528051602086510152516040855101525116606083510152600181515161100781611277565b61101081611277565b0361102f57604091505101519182915b0152610d8460405180926112c2565b5051918291611020565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b3461017e57602036600319011261017e576004356001600160a01b038116810361017e5761039b61017a9161109e6114ca565b506114e9565b3461017e57600036600319011261017e576020600354604051908152f35b3461017e57602036600319011261017e576110db6114ca565b5061017a61039b6004356117c1565b3461017e57602036600319011261017e57611103611261565b61110b61189c565b906040519061111982611373565b6111216114ca565b82526004600054036111b35761114b60019161113e610f9061141f565b50828060a01b03166114e9565b8083525161115881611277565b61116181611277565b0361119a5760209181600160c093515161117a81611277565b61118381611277565b03610d0c5751604001519182910152604051908152f35b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b604036600319011261017e576111e061189c565b6040516111ec81611358565b816108706020938385809501600435825260243581526040519061120f82611358565b60405161121b81611358565b60008152600088820152825286820192611233613cb4565b8452518251525186825101526000825152518582510152611252613d23565b90600082525185820152611abe565b600435906001600160a01b038216820361017e57565b6002111561128157565b634e487b7160e01b600052602160045260246000fd5b919091604080606083019480516112ad81611277565b84526020810151151560208501520151910152565b80516001600160a01b039081168352602080830151908401526040808301519084015260609182015116910152565b9190916040806060830194805161130781611277565b845260208101511515602085015201511515910152565b90600182811c9216801561134e575b602083101461133857565b634e487b7160e01b600052602260045260246000fd5b91607f169161132d565b604081019081106001600160401b0382111761035d57604052565b602081019081106001600160401b0382111761035d57604052565b606081019081106001600160401b0382111761035d57604052565b61014081019081106001600160401b0382111761035d57604052565b608081019081106001600160401b0382111761035d57604052565b61016081019081106001600160401b0382111761035d57604052565b601f909101601f19168101906001600160401b0382119082101761035d57604052565b60405190600082600254916114338361131e565b8083526001938085169081156114a9575060011461145b575b50611459925003836113fc565b565b60026000908152600080516020613d4083398151915294602093509091905b81831061149157505061145993508201013861144c565b8554888401850152948501948794509183019161147a565b905061145994506020925060ff191682840152151560051b8201013861144c565b604051906114d78261138e565b60006040838281528260208201520152565b906114f26114ca565b9160018060a01b03166000908082526005602052600160ff60408420541661151981611277565b03611561576040929350815260056020522060016040519161153a8361138e565b60ff815481811661154a81611277565b855260081c16151560208401520154604082015290565b508083526020830152565b60405190611579826113c5565b60006060838281528260208201528260408201520152565b6040519061159e8261138e565b81600081526000602082015260406115b461156c565b910152565b906115c2611591565b9160008181526006602052604091600160ff84842054166115e281611277565b0361165f578293945081526006602052208151916115ff8361138e565b60ff825481811661160f81611277565b855260081c1615156020840152805191611628836113c5565b60018101546001600160a01b0390811684526002820154602085015260038201548385015260049091015416606083015282015290565b50808452602084015250565b906116746114ca565b9160018060a01b03166000908082526007602052600160ff60408420541661169b81611277565b03611561576040929350815260076020522060ff604051916116bc8361138e565b548181166116c981611277565b8352818160081c161515602084015260101c161515604082015290565b906116ef6114ca565b916000908082526008602052600160ff60408420541661170e81611277565b03611561576040929350815260086020522060016040519161153a8361138e565b906117386114ca565b916000908082526009602052600160ff60408420541661175781611277565b03611561576040929350815260096020522060ff604051916116bc8361138e565b906117816114ca565b91600090808252600a602052600160ff6040842054166117a081611277565b036115615760409293508152600a6020522060016040519161153a8361138e565b906117ca6114ca565b91600090808252600b602052600160ff6040842054166117e981611277565b036115615760409293508152600b6020522060016040519161153a8361138e565b906118136114ca565b91600090808252600c602052600160ff60408420541661183281611277565b036115615760409293508152600c6020522060ff604051916116bc8361138e565b9061185c6114ca565b91600090808252600d602052600160ff60408420541661187b81611277565b036115615760409293508152600d6020522060016040519161153a8361138e565b604051906101c082016001600160401b0381118382101761035d57604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261190461156c565b61014082015282610160820152826101808201520152565b51906001600160a01b038216820361017e57565b6040519061016082016001600160401b0381118382101761035d57604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201520152565b9060018201918281116119a957821061017e57565b634e487b7160e01b600052601160045260246000fd5b91908201918281116119a957821061017e57565b908161014091031261017e57604051906119ec826113a9565b6119f58161191c565b82526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015190830152610120809101519082015290565b5160058110156112815790565b815181526020918201516001600160a01b03169181019190915260400190565b6001600160a01b039091168152602081019190915260400190565b8115611aa8570490565b634e487b7160e01b600052601260045260246000fd5b60405192919061024084016001600160401b0381118582101761035d5780604052611ae881611358565b6000815260006102608601528452611afe6114ca565b602085015260006040850152611b1261156c565b606085015260006080850152600060a0850152600060c0850152604051611b3881611373565b6000815260e0850152604051611b4d81611358565b6000815260006020820152610100850152600061012085015260006101408501526000610160850152600061018085015260006101a0850152604051611b9281611373565b600081526101c0850152611ba46114ca565b6101e0850152604051611bb681611358565b6000815260006020820152610200850152604051611bd381611358565b600081526000602082015261022085015260ff60045416613c4f57604051338152815160208201526020820151908151906005821015611281577f32e06696a0ae0ee7b54e42ce0288d1359eaa7670205c736592545487835e80a09261012092604083015260208082015180516060850152015160808301526040810151151560a08301526060810151151560c083015260808101515160e083015260a0600180821b039101515116610100820152a1600460005403613c3657611c98610f9061141f565b9080518015908115613c2a575b5015613c1157611cb86020820151611a56565b6005811015611281576124d657602090810151015184528051336001600160a01b03909116036124cf5760005b156124b6576001611cf5336114e9565b80602087015251611d0581611277565b611d0e81611277565b0361249d57608081015160018101908181116119a957811061017e5780611d399160408701526115b9565b51611d4381611277565b611d4c81611277565b612484573461246b576001602085015151611d6681611277565b611d6f81611277565b03612464576040602085015101515b421161244b576101209133606086015152845151602060608701510152602085510151604060608701510152336060808701510152604085015160005260066020526040600020600160ff1982541617905560608501516040860151600052600460406000206001810160018060a01b0384511660018060a01b031982541617905560208301516002820155604083015160038201550190606060018060a01b039101511660018060a01b03198254161790556001611e3c3361166b565b51611e4681611277565b611e4f81611277565b0361215457600080516020613d6083398151915260206040870151604051908152a1600080516020613d8083398151915260206040870151604051908152a1602060408601519101526040611ea2611930565b9460018060a01b038351168652602083015160208701528183015182870152606083015160608701520151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015243828501520151610140830152610120604051611f18816113a9565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261014060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151828501520151610140830152610140825261203d826113e0565b81516001600160401b03811161035d5761205860025461131e565b601f8111612101575b50602092601f821160011461209e5792819293600092612093575b50508160011b916000199060031b1c191617600255565b01519050388061207c565b601f19821693600260005260206000209160005b8681106120e957508360019596106120d0575b505050811b01600255565b015160001960f88460031b161c191690553880806120c5565b919260206001819286850151815501940192016120b2565b6002600052600080516020613d40833981519152601f830160051c8101916020841061214a575b601f0160051c01905b81811061213e5750612061565b60008155600101612131565b9091508190612128565b33600090815260076020908152604091829020805462ff00ff19166001179055868201519151918252600080516020613d6083398151915291a1600080516020613d8083398151915260206040870151604051908152a16020604086015191015260406121bf611930565b9460018060a01b038351168652602083015160208701528183015182870152606083015160608701520151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015243828501520151610140830152610120604051612235816113a9565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261014060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151828501520151610140830152610140825261235a826113e0565b81516001600160401b03811161035d5761237560025461131e565b601f81116123f8575b50602092601f82116001146123af57928192936000926120935750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106123e057508360019596106120d057505050811b01600255565b919260206001819286850151815501940192016123c3565b6002600052600080516020613d40833981519152601f830160051c81019160208410612441575b601f0160051c01905b818110612435575061237e565b60008155600101612428565b909150819061241f565b60405163100960cb60e01b815260206004820152602490fd5b6000611d7e565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b6001611ce5565b6124e7602082969493960151611a56565b600581101561128157600103612a4157509060018060a01b038451163314600014612a3a5760005b15612a215760208401513403612a085760036020850151046080820152612535336114e9565b5161253f81611277565b61254881611277565b6129b3575b60c060409161255f83870151426119bf565b828201523360005260056020528260002060ff1990600182825416179055828201516001856000200155610100870151600052600d6020528360002060018282541617905560016125b4610100890151611853565b516125be81611277565b6125c781611277565b036129a9576125ec846125de6101008a0151611853565b01515b6080840151906119bf565b610100880151600052600d6020526001856000200155610100870151600052600b60205260018460002091825416179055600161262d6101008801516117c1565b5161263781611277565b61264081611277565b0361299f57612673836126576101008901516117c1565b01515b61266d6020890151608085015190613c68565b906119bf565b610100870151600052600b60205260018460002001557ff01b311f9779b91a7fa2ba5c8138c46f4ae1acfc247c95553fa57767e0667ac76126bd8383015185519182913383611a83565b0390a17f4de5bfb779d7819c9c0e8f036a85a43a67e3c181ae59401d0cbe01f6adbb4f276020838301518551908152a101519101526126fa611930565b9160018060a01b0381511683526020810151602084015260408101516040840152606081015160608401526080810151608084015261273c60a0820151611994565b60a084015260c081015160c084015260e081015160e084015261010081015161010084015243610120840152602061012082015191015101610140830152610120604051612789816113a9565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261014060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e081015161010085015261010081015182850152015161014083015261014082526128ae826113e0565b81516001600160401b03811161035d576128c960025461131e565b601f811161294c575b50602092601f821160011461290357928192936000926120935750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061293457508360019596106120d057505050811b01600255565b91926020600181928685015181550194019201612917565b6002600052600080516020613d40833981519152601f830160051c81019160208410612995575b601f0160051c01905b81811061298957506128d2565b6000815560010161297c565b9091508190612973565b612673600061265a565b6125ec60006125e1565b60016129be336114e9565b516129c881611277565b6129d181611277565b0361254d5760406129e1336114e9565b01518060a0830152421161254d5760405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b600161250f565b612a4e6020820151611a56565b600581101561128157600203612daa5750905034612d93576060830151421115612d7a5760606000917f22393b527bdbf9b348ee4129f2a13cd63b7a78bf3bc7786a69eb3e3b74b799c26020610100870151604051908152a17fecafded979b18b0987da1288f3e02c69a5ff1e1933f0b344cc9b99668c3140de6020604051858152a10152610120612ade611930565b9260018060a01b03815116845260208101516020850152612b0a604082018051604087015251426119bf565b60608501526080810151608085015260a081015160a085015260c081015160c0850152600060e0850152612b42610100820151611994565b61010085015243828501520151610140830152610120604051612b64816113a9565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261014060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101518285015201516101408301526101408252612c89826113e0565b81516001600160401b03811161035d57612ca460025461131e565b601f8111612d27575b50602092601f8211600114612cde57928192936000926120935750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612d0f57508360019596106120d057505050811b01600255565b91926020600181928685015181550194019201612cf2565b6002600052600080516020613d40833981519152601f830160051c81019160208410612d70575b601f0160051c01905b818110612d645750612cad565b60008155600101612d57565b9091508190612d4e565b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b612db76020820151611a56565b60058110156112815760030361351357602001516080015160e08301526001612ddf336114e9565b51612de981611277565b612df281611277565b036134fa576001612e023361166b565b51612e0c81611277565b612e1581611277565b036134e15760e082015151610100830151523360206101008401510152612e6a612e50612e5e61010085015160405192839160208301611a63565b03601f1981018352826113fc565b6020815191012061180a565b51612e7481611277565b612e7d81611277565b6134c8576001612e9160e0840151516117c1565b51612e9b81611277565b612ea481611277565b036134c1576040612eb960e0840151516117c1565b01515b6101208301526001612ed260e084015151611778565b51612edc81611277565b612ee581611277565b036134ba576040612efa60e084015151611778565b01515b8061014084015215806101608401526000146134835760006101808301525b6101808201516101208301511061346a5761012084015161018083015111613451573461343857610160820151156133b65760006101a08301525b6101a08201516101208301511061339d576101208401516101a0830151116133845760008080806101a086015181811561337b575b3390f11561336f57610100820151604051612faf81612e50602082019485611a63565b519020600052600c602052604060002060ff1990600182825416179055610100830151604051612fe781612e50602082019485611a63565b519020600052600c60205260406000206201000062ff00001982541617905560e083015151600052600b60205260016040600020918254161790556130376101208301516101a084015190613c68565b60e083015151600052600b6020526001604060002001557f3db40f0eba95e6fa59aa1eae0e927a856aa7754f1465c71a52978d243c321a71606060e0840151516101a08501516040519133835260208301526040820152a17f8eeb133eacfdf9c253fd318e96a6e52ab299de8c582269d6e8e4077ae61a373860206101a0840151604051908152a16101806101a08301519101526101a06101206130d9611930565b9460018060a01b0381511686526020810151602087015260408101516040870152606081015160608701526080810151608087015260a081015160a087015260c081015160c087015260e081015160e0870152610100810151610100870152438287015201519101519003610140830152610120604051613159816113a9565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261014060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151828501520151610140830152610140825261327e826113e0565b81516001600160401b03811161035d5761329960025461131e565b601f811161331c575b50602092601f82116001146132d357928192936000926120935750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061330457508360019596106120d057505050811b01600255565b919260206001819286850151815501940192016132e7565b6002600052600080516020613d40833981519152601f830160051c81019160208410613365575b601f0160051c01905b81811061335957506132a2565b6000815560010161334c565b9091508190613343565b6040513d6000823e3d90fd5b506108fc612f8c565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b61342561341961012084015160016133e261010087015160405161069d81612e50602082019485611a63565b516133ec81611277565b6133f581611277565b036134305760406106e7610100870151825161069d81612e50602082019485611a63565b61014084015190611a9e565b6101a0830152612f57565b600090613c75565b60405163100960cb60e01b8152602b6004820152602490fd5b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b6134af61341961012084015160016133e261010087015160405161069d81612e50602082019485611a63565b610180830152612f1c565b6000612efd565b6000612ebc565b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b6135236020829493940151611a56565b60058110156112815760041461353b575b5050509050565b6020015160a001516101c08201528351336001600160a01b0390911603613c0a5760005b15613bf157600161356f336114e9565b806101e08401525161358081611277565b61358981611277565b03613bd8576101c0810151516001906135aa906001600160a01b031661166b565b516135b481611277565b6135bd81611277565b03613bbf57610100840151610200820151523360206102008301510152613604612e506135f861020084015160405192839160208301611a63565b6020815191012061172f565b5161360e81611277565b61361781611277565b613ba65734613b8d5760016101e08201515161363281611277565b61363b81611277565b03613b865760406101e082015101515b4211613b6d576000916101a0916101008601516102208201515260018060a01b036101c082015151166020610220830151015261022081015160405161369981612e50602082019485611a63565b51902084526008602052610200604085209160ff199260018482541617905560016136d861022083015160405161069d81612e50602082019485611a63565b516136e281611277565b6136eb81611277565b148614613b645761371b6040613714610220840151825161069d81612e50602082019485611a63565b0151611994565b61022082015160405161373681612e50602082019485611a63565b5190208752600860205260016040882001558181015160405161376181612e50602082019485611a63565b5190208652600960205260408620600184825416179055015160405161378f81612e50602082019485611a63565b51902084526009602052604084206201000062ff0000198254161790556101008601518452600a6020526001604085209182541617905560016137d6610100870151611778565b516137e081611277565b6137e981611277565b148314613b5b576138036040613714610100880151611778565b6101008601518452600a60205260016040852001557fc591aa98f3e7d1c3a106f4653e39eba694fcc03ba3c686dfbefbf82f6b06bcea61384f6101008701516040519182913383611a83565b0390a17fde8ebaedd6a7ff4b398cb5afa2cb2ce3cc88073ef34091485344ad5f8e5350356020604051858152a10152610120613889611930565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a08501526138d560c0820151611994565b60c08501526138e760e0820151611994565b60e085015261010081015161010085015243828501520151610140830152610120604051613914816113a9565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261014060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152610100810151610100840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101518285015201516101408301526101408252613a39826113e0565b81516001600160401b03811161035d57613a5460025461131e565b601f8111613b08575b50602092601f8211600114613aa25792819293600092613a97575b50508160011b916000199060031b1c1916176002555b80388080613534565b015190503880613a78565b601f19821693600260005260206000209160005b868110613af05750836001959610613ad7575b505050811b01600255613a8e565b015160001960f88460031b161c19169055388080613ac9565b91926020600181928685015181550194019201613ab6565b6002600052600080516020613d40833981519152601f830160051c81019160208410613b51575b601f0160051c01905b818110613b455750613a5d565b60008155600101613b38565b9091508190613b2f565b61380383611994565b61371b86611994565b60405163100960cb60e01b815260336004820152602490fd5b600061364b565b60405163100960cb60e01b815260326004820152602490fd5b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b600161355f565b60405163100960cb60e01b8152601b6004820152602490fd5b90506001541438611ca5565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b9081039081116119a95790565b600092918015918215613c8c575b50501561017e57565b9150925080600019048311811515166119a957613cac8382029384611a9e565b143880613c83565b60408051919060c083016001600160401b0381118482101761035d57815260a0836000928382528051613ce681611358565b848152846020820152602083015283818301528360608301528051613d0a81611373565b84815260808301525192613d1d84611373565b83520152565b60405190613d3082611358565b816000815260206115b4613cb456fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acec50146df3744254d2c4df384a8513863cda206482d8bf1740acc2caeb38c3e77b79924d6f19c6c54ddcba63ff4832f1403a85ea3f5d2838f0dfbcac42548beafa164736f6c6343000810000a`,
  BytecodeLen: 16756,
  version: 9,
  views: {},
}
export const _stateSourceMap = {
  1: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:291:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:93:21:after expr stmt semicolon',
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
