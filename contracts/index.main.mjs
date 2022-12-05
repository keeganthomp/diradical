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
            'at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:136:29:application call to [unknown function] (defined at: ./index.rsh:136:29:application)',
          ],
          msg: 'is member',
          who: 'Module',
        })
        const v4801 = stdlib.fromSome(
          v4796,
          stdlib.checkedBigNumberify(
            './index.rsh:138:43:decimal',
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
            'at ./index.rsh:129:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:128:20:application call to [unknown function] (defined at: ./index.rsh:128:20:application)',
          ],
          msg: 'song exists',
          who: 'Module',
        })
        const v4790 = '                                '
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
            'at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:140:61:application call to "getSongPayout" (defined at: ./index.rsh:101:47:function exp)',
            'at ./index.rsh:140:26:application call to [unknown function] (defined at: ./index.rsh:140:26:application)',
          ],
          msg: 'voting period ended',
          who: 'Module',
        })
        const v4809 = stdlib.fromSome(
          v4804,
          stdlib.checkedBigNumberify(
            './index.rsh:103:63:decimal',
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
            './index.rsh:106:11:decimal',
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
            './index.rsh:110:46:decimal',
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
      './index.rsh:50:5:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:50:5:decimal',
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
        './index.rsh:74:5:decimal',
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
          './index.rsh:4:32:application',
          stdlib.UInt_max,
          '2592000',
        ),
      )
      const v4742 = v4741
      const v4743 = stdlib.checkedBigNumberify(
        './index.rsh:87:29:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4744 = stdlib.checkedBigNumberify(
        './index.rsh:87:26:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4745 = stdlib.checkedBigNumberify(
        './index.rsh:87:23:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4746 = stdlib.checkedBigNumberify(
        './index.rsh:87:62:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4747 = stdlib.checkedBigNumberify(
        './index.rsh:87:59:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v4748 = stdlib.checkedBigNumberify(
        './index.rsh:87:32:decimal',
        stdlib.UInt_max,
        '1',
      )
      const v4749 = v4736
      const v4752 = v4737
      const v4756 = stdlib.checkedBigNumberify(
        './index.rsh:46:9:after expr stmt semicolon',
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
    at: './index.rsh:74:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer',
  })
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:75:19:application',
    fs: [
      'at ./index.rsh:75:19:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)',
      'at ./index.rsh:75:19:application call to "liftedInteract" (defined at: ./index.rsh:75:19:application)',
    ],
    msg: 'ready',
    who: 'Deployer',
  })

  const v4741 = stdlib.safeAdd(
    v4737,
    stdlib.checkedBigNumberify(
      './index.rsh:4:32:application',
      stdlib.UInt_max,
      '2592000',
    ),
  )
  let v4742 = v4741
  let v4743 = stdlib.checkedBigNumberify(
    './index.rsh:87:29:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4744 = stdlib.checkedBigNumberify(
    './index.rsh:87:26:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4745 = stdlib.checkedBigNumberify(
    './index.rsh:87:23:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4746 = stdlib.checkedBigNumberify(
    './index.rsh:87:62:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4747 = stdlib.checkedBigNumberify(
    './index.rsh:87:59:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v4748 = stdlib.checkedBigNumberify(
    './index.rsh:87:32:decimal',
    stdlib.UInt_max,
    '1',
  )
  let v4749 = v4736
  let v4752 = v4737
  let v4756 = stdlib.checkedBigNumberify(
    './index.rsh:46:9:after expr stmt semicolon',
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
            'at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:173:35:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:175:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
            'at ./index.rsh:173:35:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
          ],
          msg: 'is member',
          who: 'Deployer',
        })
        const v5207 =
          v5086[
            stdlib.checkedBigNumberify(
              './index.rsh:173:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v5208 =
          v5086[
            stdlib.checkedBigNumberify(
              './index.rsh:173:10:spread',
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
            'at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:150:31:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            './index.rsh:154:61:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5416 = stdlib.lt(v5415, v4752)
        stdlib.assert(v5416, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:150:31:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
          ],
          msg: 'membership still valid',
          who: 'Deployer',
        })
        const v5510 = stdlib.add(v4756, v4732)
        const v5540 = stdlib.safeAdd(
          v5085,
          stdlib.checkedBigNumberify(
            './index.rsh:4:32:application',
            stdlib.UInt_max,
            '2592000',
          ),
        )
        const v5543 = stdlib.lt(v5415, v5085)
        stdlib.assert(v5543, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:158:16:application call to [unknown function] (defined at: ./index.rsh:158:16:function exp)',
          ],
          msg: 'membership still valid',
          who: 'Deployer',
        })
        await stdlib.mapSet(map0, v5082, v5540)
        await txn4.getOutput('buyMembership', 'v5540', ctc1, v5540)
        const v5550 = stdlib.safeAdd(
          v4745,
          stdlib.checkedBigNumberify(
            './index.rsh:162:28:decimal',
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
            'at ./index.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:225:33:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:227:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
            'at ./index.rsh:225:33:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            './index.rsh:229:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v5868 = stdlib.safeDiv(
          v4744,
          stdlib.checkedBigNumberify(
            './index.rsh:230:40:decimal',
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
            './index.rsh:242:28:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v5881 = stdlib.safeAdd(
          v4742,
          stdlib.checkedBigNumberify(
            './index.rsh:4:32:application',
            stdlib.UInt_max,
            '2592000',
          ),
        )
        const cv4742 = v5881
        const cv4743 = v5879
        const cv4744 = v5878
        const cv4745 = v4745
        const cv4746 = v4746
        const cv4747 = stdlib.checkedBigNumberify(
          './index.rsh:244:13:decimal',
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
              './index.rsh:250:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6048 =
          v6001[
            stdlib.checkedBigNumberify(
              './index.rsh:250:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v6049 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, v6047),
          null,
        )
        const v6050 = '                                '
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
            'at ./index.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:253:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
            'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:254:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            './index.rsh:259:54:decimal',
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
            'at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:260:41:application call to "getSongPayout" (defined at: ./index.rsh:101:47:function exp)',
            'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            './index.rsh:106:11:decimal',
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
            './index.rsh:110:46:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6088 = stdlib.safeMuldiv(v6076, v6087, v6084)
        const v6089 = stdlib.le(v6088, v6076)
        stdlib.assert(v6089, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
          ],
          msg: 'payouts balance check',
          who: 'Deployer',
        })
        const v6092 = stdlib.ge(v4756, v6088)
        stdlib.assert(v6092, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
              './index.rsh:202:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v6404 = stdlib.addressEq(v5082, v4731)
        const v6405 = v6404 ? false : true
        stdlib.assert(v6405, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:204:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
            'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
            'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
            'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
          ],
          msg: 'has voted',
          who: 'Deployer',
        })
        const v6579 = '                                '
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
            './index.rsh:117:59:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6593 = stdlib.safeAdd(
          v6591,
          stdlib.checkedBigNumberify(
            './index.rsh:118:45:decimal',
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
            './index.rsh:121:54:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v6597 = stdlib.safeAdd(
          v6596,
          stdlib.checkedBigNumberify(
            './index.rsh:121:59:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        await stdlib.mapSet(map4, v4748, v6597)
        const v6598 = stdlib.safeAdd(
          v6587,
          stdlib.checkedBigNumberify(
            './index.rsh:124:31:decimal',
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
            './index.rsh:219:30:decimal',
            stdlib.UInt_max,
            '1',
          ),
        )
        const v6609 = stdlib.safeAdd(
          v4746,
          stdlib.checkedBigNumberify(
            './index.rsh:220:26:decimal',
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
      'at ./index.rsh:173:35:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
      'at ./index.rsh:87:21:application call to "runaddSong0_655" (defined at: ./index.rsh:173:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
    ],
    msg: 'in',
    who: 'addSong',
  })
  const v4845 = stdlib.addressEq(v4838, v4731)
  const v4846 = v4845 ? false : true
  stdlib.assert(v4846, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:173:35:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
      'at ./index.rsh:87:21:application call to "runaddSong0_655" (defined at: ./index.rsh:173:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:175:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
      'at ./index.rsh:173:35:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
      'at ./index.rsh:87:21:application call to "runaddSong0_655" (defined at: ./index.rsh:173:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
        './index.rsh:177:10:decimal',
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
                './index.rsh:173:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v5208 =
            v5086[
              stdlib.checkedBigNumberify(
                './index.rsh:173:10:spread',
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
          'at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:173:35:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:175:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
          'at ./index.rsh:173:35:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:173:35:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
        ],
        msg: 'is member',
        who: 'addSong',
      })
      const v5207 =
        v5086[
          stdlib.checkedBigNumberify(
            './index.rsh:173:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v5208 =
        v5086[
          stdlib.checkedBigNumberify(
            './index.rsh:173:10:spread',
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
          at: './index.rsh:173:11:application',
          fs: [
            'at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)',
            'at ./index.rsh:189:17:application call to "notify" (defined at: ./index.rsh:178:16:function exp)',
            'at ./index.rsh:178:16:application call to [unknown function] (defined at: ./index.rsh:178:16:function exp)',
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
      'at ./index.rsh:150:31:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
      'at ./index.rsh:87:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:150:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
    ],
    msg: 'in',
    who: 'buyMembership',
  })
  const v4824 = stdlib.addressEq(v4821, v4731)
  const v4825 = v4824 ? false : true
  stdlib.assert(v4825, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:150:31:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
      'at ./index.rsh:87:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:150:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
    ],
    msg: 'not deployer',
    who: 'buyMembership',
  })
  const v4829 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4821), null)
  const v4830 = stdlib.fromSome(
    v4829,
    stdlib.checkedBigNumberify(
      './index.rsh:154:61:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4831 = stdlib.lt(v4830, v4752)
  stdlib.assert(v4831, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:150:31:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
      'at ./index.rsh:87:21:application call to "runbuyMembership0_655" (defined at: ./index.rsh:150:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
              './index.rsh:4:32:application',
              stdlib.UInt_max,
              '2592000',
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
              './index.rsh:162:28:decimal',
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
          'at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:150:31:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          './index.rsh:154:61:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5416 = stdlib.lt(v5415, v4752)
      stdlib.assert(v5416, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:150:31:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
        ],
        msg: 'membership still valid',
        who: 'buyMembership',
      })
      const v5510 = stdlib.add(v4756, v4732)
      const v5540 = stdlib.safeAdd(
        v5085,
        stdlib.checkedBigNumberify(
          './index.rsh:4:32:application',
          stdlib.UInt_max,
          '2592000',
        ),
      )
      const v5543 = stdlib.lt(v5415, v5085)
      stdlib.assert(v5543, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:158:16:application call to [unknown function] (defined at: ./index.rsh:158:16:function exp)',
        ],
        msg: 'membership still valid',
        who: 'buyMembership',
      })
      await stdlib.mapSet(map0, v5082, v5540)
      const v5545 = await txn1.getOutput('buyMembership', 'v5540', ctc1, v5540)
      if (v4161) {
        stdlib.protect(ctc0, await interact.out(v5391, v5545), {
          at: './index.rsh:150:11:application',
          fs: [
            'at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)',
            'at ./index.rsh:160:17:application call to "notify" (defined at: ./index.rsh:158:16:function exp)',
            'at ./index.rsh:158:16:application call to [unknown function] (defined at: ./index.rsh:158:16:function exp)',
          ],
          msg: 'out',
          who: 'buyMembership',
        })
      } else {
      }

      const v5550 = stdlib.safeAdd(
        v4745,
        stdlib.checkedBigNumberify(
          './index.rsh:162:28:decimal',
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
      'at ./index.rsh:225:33:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
      'at ./index.rsh:87:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:225:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
    ],
    msg: 'in',
    who: 'endVotingPeriod',
  })
  const v4892 = stdlib.addressEq(v4889, v4731)
  const v4893 = v4892 ? false : true
  stdlib.assert(v4893, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:225:33:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
      'at ./index.rsh:87:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:225:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:227:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
      'at ./index.rsh:225:33:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
      'at ./index.rsh:87:21:application call to "runendVotingPeriod0_655" (defined at: ./index.rsh:225:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
        './index.rsh:233:10:decimal',
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
              './index.rsh:229:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v5868 = stdlib.safeDiv(
            v4744,
            stdlib.checkedBigNumberify(
              './index.rsh:230:40:decimal',
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
              './index.rsh:242:28:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v5881 = stdlib.safeAdd(
            v4742,
            stdlib.checkedBigNumberify(
              './index.rsh:4:32:application',
              stdlib.UInt_max,
              '2592000',
            ),
          )
          const v12455 = v5881
          const v12456 = v5879
          const v12457 = v5878
          const v12458 = v4745
          const v12459 = v4746
          const v12460 = stdlib.checkedBigNumberify(
            './index.rsh:244:13:decimal',
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
          'at ./index.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:225:33:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:227:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
          'at ./index.rsh:225:33:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:225:33:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          './index.rsh:229:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v5868 = stdlib.safeDiv(
        v4744,
        stdlib.checkedBigNumberify(
          './index.rsh:230:40:decimal',
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
          at: './index.rsh:225:11:application',
          fs: [
            'at ./index.rsh:225:11:application call to [unknown function] (defined at: ./index.rsh:225:11:function exp)',
            'at ./index.rsh:237:17:application call to "notify" (defined at: ./index.rsh:234:16:function exp)',
            'at ./index.rsh:234:16:application call to [unknown function] (defined at: ./index.rsh:234:16:function exp)',
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
          './index.rsh:242:28:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v5881 = stdlib.safeAdd(
        v4742,
        stdlib.checkedBigNumberify(
          './index.rsh:4:32:application',
          stdlib.UInt_max,
          '2592000',
        ),
      )
      const v12455 = v5881
      const v12456 = v5879
      const v12457 = v5878
      const v12458 = v4745
      const v12459 = v4746
      const v12460 = stdlib.checkedBigNumberify(
        './index.rsh:244:13:decimal',
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
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
  const v4916 = '                                '
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
      'at ./index.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:253:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:254:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
    ],
    msg: 'has received payout',
    who: 'receivePayout',
  })
  const v4941 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v4912), null)
  const v4942 = stdlib.fromSome(
    v4941,
    stdlib.checkedBigNumberify(
      './index.rsh:259:54:decimal',
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
      'at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:260:41:application call to "getSongPayout" (defined at: ./index.rsh:101:47:function exp)',
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
    ],
    msg: 'voting period ended',
    who: 'receivePayout',
  })
  const v4949 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v4912), null)
  const v4950 = stdlib.fromSome(
    v4949,
    stdlib.checkedBigNumberify(
      './index.rsh:106:11:decimal',
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
      './index.rsh:110:46:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  const v4954 = stdlib.safeMuldiv(v4942, v4953, v4950)
  const v4955 = stdlib.le(v4954, v4942)
  stdlib.assert(v4955, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
    ],
    msg: 'payouts balance check',
    who: 'receivePayout',
  })
  const v4958 = stdlib.ge(v4756, v4954)
  stdlib.assert(v4958, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
      'at ./index.rsh:87:21:application call to "runreceivePayout0_655" (defined at: ./index.rsh:250:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
        './index.rsh:264:10:decimal',
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
                './index.rsh:250:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v6048 =
            v6001[
              stdlib.checkedBigNumberify(
                './index.rsh:250:10:spread',
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
              './index.rsh:259:54:decimal',
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
              './index.rsh:106:11:decimal',
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
              './index.rsh:110:46:decimal',
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
            './index.rsh:250:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6048 =
        v6001[
          stdlib.checkedBigNumberify(
            './index.rsh:250:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v6049 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, v6047),
        null,
      )
      const v6050 = '                                '
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
          'at ./index.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:253:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
          'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:254:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          './index.rsh:259:54:decimal',
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
          'at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:260:41:application call to "getSongPayout" (defined at: ./index.rsh:101:47:function exp)',
          'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          './index.rsh:106:11:decimal',
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
          './index.rsh:110:46:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6088 = stdlib.safeMuldiv(v6076, v6087, v6084)
      const v6089 = stdlib.le(v6088, v6076)
      stdlib.assert(v6089, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
        ],
        msg: 'payouts balance check',
        who: 'receivePayout',
      })
      const v6092 = stdlib.ge(v4756, v6088)
      stdlib.assert(v6092, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:250:46:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:250:46:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          at: './index.rsh:250:11:application',
          fs: [
            'at ./index.rsh:250:11:application call to [unknown function] (defined at: ./index.rsh:250:11:function exp)',
            'at ./index.rsh:269:17:application call to "notify" (defined at: ./index.rsh:265:16:function exp)',
            'at ./index.rsh:265:16:application call to [unknown function] (defined at: ./index.rsh:265:16:function exp)',
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
      'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
      'at ./index.rsh:87:21:application call to "runvote0_655" (defined at: ./index.rsh:202:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
      'at ./index.rsh:87:21:application call to "runvote0_655" (defined at: ./index.rsh:202:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:204:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
      'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
      'at ./index.rsh:87:21:application call to "runvote0_655" (defined at: ./index.rsh:202:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
      'at ./index.rsh:87:21:application call to "runvote0_655" (defined at: ./index.rsh:202:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
      'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
      'at ./index.rsh:87:21:application call to "runvote0_655" (defined at: ./index.rsh:202:10:function exp)',
      'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
                './index.rsh:202:10:spread',
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
          const v6579 = '                                '
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
              './index.rsh:117:59:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6593 = stdlib.safeAdd(
            v6591,
            stdlib.checkedBigNumberify(
              './index.rsh:118:45:decimal',
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
              './index.rsh:121:54:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v6597 = stdlib.safeAdd(
            v6596,
            stdlib.checkedBigNumberify(
              './index.rsh:121:59:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          await stdlib.simMapSet(sim_r, 4, v4748, v6597)
          const v6598 = stdlib.safeAdd(
            v6587,
            stdlib.checkedBigNumberify(
              './index.rsh:124:31:decimal',
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
              './index.rsh:219:30:decimal',
              stdlib.UInt_max,
              '1',
            ),
          )
          const v6609 = stdlib.safeAdd(
            v4746,
            stdlib.checkedBigNumberify(
              './index.rsh:220:26:decimal',
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
            './index.rsh:202:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v6404 = stdlib.addressEq(v5082, v4731)
      const v6405 = v6404 ? false : true
      stdlib.assert(v6405, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:90:41:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:204:20:application call to "chkMembership" (defined at: ./index.rsh:90:33:function exp)',
          'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
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
          'at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:202:26:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:202:26:function exp)',
          'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)',
        ],
        msg: 'has voted',
        who: 'vote',
      })
      const v6579 = '                                '
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
          './index.rsh:117:59:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6593 = stdlib.safeAdd(
        v6591,
        stdlib.checkedBigNumberify(
          './index.rsh:118:45:decimal',
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
          './index.rsh:121:54:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v6597 = stdlib.safeAdd(
        v6596,
        stdlib.checkedBigNumberify(
          './index.rsh:121:59:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      await stdlib.mapSet(map4, v4748, v6597)
      const v6598 = stdlib.safeAdd(
        v6587,
        stdlib.checkedBigNumberify(
          './index.rsh:124:31:decimal',
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
          at: './index.rsh:202:11:application',
          fs: [
            'at ./index.rsh:202:11:application call to [unknown function] (defined at: ./index.rsh:202:11:function exp)',
            'at ./index.rsh:212:17:application call to "notify" (defined at: ./index.rsh:209:16:function exp)',
            'at ./index.rsh:209:16:application call to [unknown function] (defined at: ./index.rsh:209:16:function exp)',
          ],
          msg: 'out',
          who: 'vote',
        })
      } else {
      }

      const v6608 = stdlib.safeAdd(
        v4747,
        stdlib.checkedBigNumberify(
          './index.rsh:219:30:decimal',
          stdlib.UInt_max,
          '1',
        ),
      )
      const v6609 = stdlib.safeAdd(
        v4746,
        stdlib.checkedBigNumberify(
          './index.rsh:220:26:decimal',
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"v12633","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_655","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_655","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_655","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_655","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_655","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5219","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v5540","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5872","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v6088","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6601","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"songAdded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_5Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_6Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v12635","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"}],"internalType":"struct T4","name":"_addSong0_655","type":"tuple"},{"internalType":"bool","name":"_buyMembership0_655","type":"bool"},{"internalType":"bool","name":"_endVotingPeriod0_655","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_receivePayout0_655","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_vote0_655","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v12647","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"v12607","type":"bytes32"},{"internalType":"bytes32","name":"v12608","type":"bytes32"}],"name":"addSong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyMembership","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endVotingPeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentVotingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembershipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12591","type":"address"}],"name":"getMembershipExp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12596","type":"uint256"}],"name":"getSong","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"bytes32","name":"art","type":"bytes32"},{"internalType":"bytes32","name":"audio","type":"bytes32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12599","type":"uint256"},{"internalType":"uint256","name":"v12600","type":"uint256"}],"name":"getSongPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12603","type":"uint256"},{"internalType":"address payable","name":"v12604","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12621","type":"uint256"},{"internalType":"uint256","name":"v12622","type":"uint256"}],"name":"receivePayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12627","type":"uint256"}],"name":"vote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62003e7360806001600160401b03601f1938849003601f81018216840190848210848311176200037757808591604097889485528339810103126200038d578351926200004c8462000392565b8051845260208091015190808501918252436003558551906101c082018281108682111762000377578752600091828152828282015282888201528260608201528260808201528260a08201528260c08201528260e082015282610100820152875160a08101818110888211176200036357916101a09185938b528381528385820152838b820152836060820152836080820152610120820152826101408201528261016082015282610180820152015260049560ff8754166200034c577f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f6060895133815283518582015286518b820152a15180159081156200033f575b50156200032857346200031157865192620001668462000392565b81840193838552339052518352600195868355438755875193338386015251888501528784526060840184811087821117620002fe5788528351958611620002eb57600254908782811c92168015620002e0575b83831014620002cd5750601f811162000281575b508093601f861160011462000219575050918394918493946200020d575b50501b916000199060031b1c1916176002555b51613ac49081620003af8239f35b015192503880620001ec565b600283528183209493928692918316915b888383106200026657505050106200024c575b505050811b01600255620001ff565b015160001960f88460031b161c191690553880806200023d565b8587015188559096019594850194879350908101906200022a565b60028352818320601f870160051c810191838810620002c2575b601f0160051c019087905b828110620002b6575050620001ce565b848155018790620002a6565b90915081906200029b565b634e487b7160e01b845260229052602483fd5b91607f1691620001ba565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b865163100960cb60e01b8152601481880152602490fd5b865163100960cb60e01b8152601381880152602490fd5b905060015414386200014b565b875163100960cb60e01b8152601281890152602490fd5b634e487b7160e01b85526041600452602485fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b03821117620003775760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c80630121b93f1461114b5780630be3c76b146110b65780630ca52f77146110325780631248dfcf14610f445780631ca8b66d14610f1c5780631e93b0f114610efe57806336e56ea514610ec557806342acaa6614610d815780634385963214610c42578063544774a914610bec578063573b8510146107b65780635c5811191461076f5780636f9fb98a1461071157806383230757146106f35780638b75d81714610698578063a4d0d3911461049d578063ab53f2c614610429578063ad76d8b4146103f5578063ae40bc79146103a6578063bda4463b1461037e578063d61ba28214610312578063d650b241146101ed578063da70a525146101c5578063e80a57a51461016d5763ec192d610361000e57346101685760203660031901126101685761014961141e565b50610164610158600435611686565b60405191829182611211565b0390f35b600080fd5b60003660031901126101685760206060610185611761565b6101b981610191613a7b565b85810190600282515251151585825101526101aa613a7b565b906000825251868201526119b1565b01511515604051908152f35b34610168576020366003190112610168576101de61141e565b506101646101586004356115ca565b61012036600319011261016857610202611761565b6040519061020f826112ac565b6004358252610100366023190112610168576040519060c082016001600160401b038111838210176102fc57604052602435600581101561016857825260403660431901126101685760405192610265846112ac565b60443584526020936064358582015284840152608435801515810361016857604084015260a435801515810361016857606084015260403660c3190112610168576040516102b2816112ac565b60c435815260e4358582015260808401528361010319360112610168576102f3926040516102df816112c7565b61010435815260a0820152848201526119b1565b60405160008152f35b634e487b7160e01b600052604160045260246000fd5b346101685760003660031901126101685761032b611761565b600460005403610365576101006020916040610356610348611373565b8580825183010191016118b6565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b346101685760203660031901126101685761039761141e565b506101646101586004356116cf565b34610168576000366003190112610168576103bf611761565b6004600054036103dc5760a0602091610100610356610348611373565b60405163100960cb60e01b815260086004820152602490fd5b346101685760203660031901126101685761040e61141e565b5061016461041d600435611613565b604051918291826111e4565b3461016857600036600319011261016857600054610445611373565b6040519182528160206040818301528251908160408401526000935b828510610484575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610461565b34610168576104ab366111ae565b906104b4611761565b604051916104c1836112ac565b6020938484019184528152604051906104d9826112ac565b6104e161141e565b8252848201936040516104f3816112ac565b60008152600087820152855260046000540361067f57610522610514611373565b8780825183010191016118b6565b50600161052f83516116cf565b8085525161053c816111c4565b610545816111c4565b03610666576101409461063d93610604928451835152518883510152600181515161056f816111c4565b610578816111c4565b0361065d575160400151905b80519060016105ba604051938461059e8d8201928361197b565b03946105b2601f1996878101835282611350565b5190206115ca565b516105c4816111c4565b6105cd816111c4565b03610653576040916105f06105b26105fc9351928c86519384918201958661197b565b03908101835282611350565b0151906139c7565b9060016106118251611686565b5161061b816111c4565b610624816111c4565b0361064a5761063560409151611686565b015190611991565b9182910152604051908152f35b50600090611991565b50506000906139c7565b50600090610584565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b34610168576000366003190112610168576106b1611761565b6004600054036106da5760c0602091826103566106cc611373565b8280825183010191016118b6565b60405163100960cb60e01b815260096004820152602490fd5b34610168576000366003190112610168576020600154604051908152f35b346101685760003660031901126101685761072a611761565b60046000540361075657608060209161063d610747610348611373565b606084820151910151906118a2565b60405163100960cb60e01b815260076004820152602490fd5b60003660031901126101685760206040610787611761565b6107ac81610793613a7b565b85810190600182515251151585825101526101aa613a7b565b0151604051908152f35b6020366003190112610168576107ca611761565b506040516107d7816112c7565b600435815260ff60045416610bd3577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040805133815283516020820152a1600160005403610bba57610828611373565b90604082805181010312610168576040805192610844846112ac565b610850602082016117e1565b845201519060208301918252518015908115610bae575b5015610b955734610b7c578151336001600160a01b0390911603610b635761088d6117f5565b91516001600160a01b031682525160208201526108a942611860565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526001610100820152436101208201524261014082015260006101608201526101406040516108fe816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e084015260e08101516101008401526101008101516101208401526101208101518284015201516101608201526101608152610a4181611334565b80516001600160401b0381116102fc57610a5c600254611272565b601f8111610b10575b50602091601f8211600114610aab57918192600092610aa0575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610a7f565b601f19821692600260005260206000209160005b858110610af857508360019510610adf575b505050811b01600255610a95565b015160001960f88460031b161c19169055828080610ad1565b91926020600181928685015181550194019201610abf565b6002600052600080516020613a98833981519152601f830160051c81019160208410610b59575b601f0160051c01905b818110610b4d5750610a65565b60008155600101610b40565b9091508190610b37565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b90506001541483610867565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b3461016857602036600319011261016857610c056114eb565b5060e0610c13600435611513565b610c4060408051928051610c26816111c4565b84526020810151151560208501520151604083019061123c565bf35b34610168576040366003190112610168576001600160a01b036024358181169081900361016857610c71611761565b60405191610c7e836112ac565b602093848401916004358552825260405191610c99836112c7565b610ca161141e565b8352600460005403610d685761016094610100610ccd610cbf611373565b8980825183010191016118b6565b015184515251868451015251166040825101528051906001610d166040519384610cfa8982019283611951565b0394610d0e601f1996878101835282611350565b519020611613565b51610d20816111c4565b610d29816111c4565b03610d5f57604091610d4b915190610d0e845191826105f08a82019586611951565b015115155b15159182910152604051908152f35b50506000610d50565b60405163100960cb60e01b815260116004820152602490fd5b3461016857602036600319011261016857610d9a6114c0565b50610da3611761565b604051610daf816112e2565b610db76114eb565b815260208101916000835260408201610dce6114c0565b8152600460005403610eac57610df4610de5611373565b602080825183010191016118b6565b926001610e02600435611513565b80835251610e0f816111c4565b610e18816111c4565b03610e93578461012094600060a097526000845152600180881b0390511660208451015280516040845101525160608351015260006080835101526001815151610e61816111c4565b610e6a816111c4565b03610e8957604091505101519182915b0152610c40604051809261123c565b5051918291610e7a565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b34610168576020366003190112610168576004356001600160a01b03811681036101685761015861016491610ef861141e565b5061143d565b34610168576000366003190112610168576020600354604051908152f35b3461016857602036600319011261016857610f3561141e565b5061016461041d600435611718565b34610168576020366003190112610168576004356001600160a01b0381169081900361016857610f72611761565b9060405190610f80826112c7565b610f8861141e565b825260046000540361101957610fa5600191610ef8610de5611373565b80835251610fb2816111c4565b610fbb816111c4565b036110005760209181600160e0935151610fd4816111c4565b610fdd816111c4565b03610ff55751604001519182915b0152604051908152f35b506000918291610feb565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b61018061103e366111ae565b91906107ac61104b611761565b80926040519061105a826112ac565b602096878301918352815260405190611072826112ac565b60405161107e816112ac565b60008152600089820152825287820192611096613a06565b8452518251525187825101526003825152516080825101526101aa613a7b565b6040366003190112610168576110ca611761565b6040516110d6816112ac565b816107ac602093838580950160043582526024358152604051906110f9826112ac565b604051611105816112ac565b6000815260008882015282528682019261111d613a06565b845251825152518682510152600082515251858251015261113c613a7b565b906000825251858201526119b1565b60203660031901126101685760206101a0611164611761565b6101b981604051611174816112ac565b604051611180816112c7565b60008152815285810190611192613a06565b825260043581515260048251525160a0825101526101aa613a7b565b6040906003190112610168576004359060243590565b600211156111ce57565b634e487b7160e01b600052602160045260246000fd5b919091604080606083019480516111fa816111c4565b845260208101511515602085015201511515910152565b91909160408060608301948051611227816111c4565b84526020810151151560208501520151910152565b805182526020808201516001600160a01b0316908301526040808201519083015260608082015190830152608090810151910152565b90600182811c921680156112a2575b602083101461128c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611281565b604081019081106001600160401b038211176102fc57604052565b602081019081106001600160401b038211176102fc57604052565b606081019081106001600160401b038211176102fc57604052565b61016081019081106001600160401b038211176102fc57604052565b60a081019081106001600160401b038211176102fc57604052565b61018081019081106001600160401b038211176102fc57604052565b601f909101601f19168101906001600160401b038211908210176102fc57604052565b604051906000826002549161138783611272565b8083526001938085169081156113fd57506001146113af575b506113ad92500383611350565b565b60026000908152600080516020613a9883398151915294602093509091905b8183106113e55750506113ad9350820101386113a0565b855488840185015294850194879450918301916113ce565b90506113ad94506020925060ff191682840152151560051b820101386113a0565b6040519061142b826112e2565b60006040838281528260208201520152565b9061144661141e565b9160018060a01b03166000908082526005602052600160ff60408420541661146d816111c4565b036114b5576040929350815260056020522060016040519161148e836112e2565b60ff815481811661149e816111c4565b855260081c16151560208401520154604082015290565b508083526020830152565b604051906114cd82611319565b60006080838281528260208201528260408201528260608201520152565b604051906114f8826112e2565b816000815260006020820152604061150e6114c0565b910152565b9061151c6114eb565b9160008181526006602052604091600160ff848420541661153c816111c4565b036115be57829394508152600660205220815191611559836112e2565b60ff8254818116611569816111c4565b855260081c1615156020840152600581519261158484611319565b6001810154845260028101546001600160a01b03166020850152600381015483850152600481015460608501520154608083015282015290565b50808452602084015250565b906115d361141e565b916000908082526007602052600160ff6040842054166115f2816111c4565b036114b5576040929350815260076020522060016040519161148e836112e2565b9061161c61141e565b916000908082526008602052600160ff60408420541661163b816111c4565b036114b5576040929350815260086020522060ff6040519161165c836112e2565b54818116611669816111c4565b8352818160081c161515602084015260101c161515604082015290565b9061168f61141e565b916000908082526009602052600160ff6040842054166116ae816111c4565b036114b5576040929350815260096020522060016040519161148e836112e2565b906116d861141e565b91600090808252600a602052600160ff6040842054166116f7816111c4565b036114b55760409293508152600a6020522060016040519161148e836112e2565b9061172161141e565b91600090808252600b602052600160ff604084205416611740816111c4565b036114b55760409293508152600b6020522060ff6040519161165c836112e2565b604051906101c082016001600160401b038111838210176102fc57604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526117c26114c0565b6101208201528261014082015282610160820152826101808201520152565b51906001600160a01b038216820361016857565b6040519061018082016001600160401b038111838210176102fc57604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b9062278d0082019182811161187757821061016857565b634e487b7160e01b600052601160045260246000fd5b90600182019182811161187757821061016857565b919082019182811161187757821061016857565b908161016091031261016857604051906118cf826112fd565b6118d8816117e1565b82526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151908301526101208082015190830152610140809101519082015290565b5160058110156111ce5790565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b9190916020806040830194805184520151910152565b811561199b570490565b634e487b7160e01b600052601260045260246000fd5b604051909291906102c081016001600160401b038111828210176102fc57806040526119dc816112ac565b6000815260006102e083015281526119f26114c0565b6020820152600060408201526000606082015260006080820152604051611a18816112ac565b600081526000602082015260a0820152611a306114eb565b60c0820152600060e0820152611a446114c0565b610100820152611a5261141e565b610120820152611a6061141e565b6101408201526000610160820152604051611a7a816112ac565b600081526000602082015261018082015260006101a0820152604051611a9f816112c7565b600081526101c0820152611ab16114eb565b6101e0820152611abf61141e565b6102008201526000610220820152611ad56114c0565b610240820152611ae36114c0565b610260820152604051611af5816112ac565b6000815260006020820152610280820152611b0e6114c0565b6102a082015260ff600454166139a15760405133815284516020820152602085015180519160058310156111ce5760a0610140927f5a05a7d5188bfb3a2ffa3c8addfc939b40a803afde86b8d9b53402567bcc1182946040840152602080820151805160608601520151608084015260408101511515828401526060810151151560c084015260206080820151805160e08601520151610100840152015151610120820152a1600460005403613988576040516000600254611bcf81611272565b80845290600181169081156139645750600114613917575b5090610de581611bf8930382611350565b938051801590811561390b575b50156138f257611c186020820151611944565b60058110156111ce5761209b57602090810151015181528351336001600160a01b03909116036120945760005b1561207b576001611c553361143d565b51611c5f816111c4565b611c68816111c4565b0361206257346120495760209042828201515233828083015101528051516040838301510152818151015160608383015101526000608083830151015242600052600682526040600020600160ff19825416179055015160056080604060002092805160018501556002840160018060a01b0360208301511660018060a01b0319825416179055604081015160038501556060810151600485015501519101557fc50146df3744254d2c4df384a8513863cda206482d8bf1740acc2caeb38c3e776020604051428152a17f619a58214658cfff223c501148a25fc2a544ebdf65132339dcef4b912952ac626020604051428152a1602042910152610140611d6d6117f5565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501526101008101516101008501524361012085015242828501520151610160830152610140604051611def816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252611f3282611334565b81516001600160401b0381116102fc57611f4d600254611272565b601f8111611ff6575b50602092601f8211600114611f935792819293600092611f88575b50508160011b916000199060031b1c191617600255565b015190503880611f71565b601f19821693600260005260206000209160005b868110611fde5750836001959610611fc5575b505050811b01600255565b015160001960f88460031b161c19169055388080611fba565b91926020600181928685015181550194019201611fa7565b6002600052600080516020613a98833981519152601f830160051c8101916020841061203f575b601f0160051c01905b8181106120335750611f56565b60008155600101612026565b909150819061201d565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b6001611c45565b6120a86020820151611944565b60058110156111ce576001036124e657508351336001600160a01b03909116036124df5760005b156124c65760016120df3361143d565b516120e9816111c4565b6120f2816111c4565b036124bf5760406121023361143d565b01515b80604083015261012085015111156124a6576020840151340361248d5761212b42611860565b6060820152426040820151101561247457606060409133600052600560205282600020600160ff198254161790557fba2c4a0d51bc6c23cad3537c27c114276c0d11652ec108a347a4c81fdaa5525f6020838301518060018760002001558551908152a1015191015261219c6117f5565b9160018060a01b0381511683526020810151602084015260408101516040840152606081015160608401526121da60808201516020830151906118a2565b60808401526121ec60a082015161188d565b60a084015260c081015160c084015260e081015160e08401526101008101516101008401524361012084015242610140840152602061014082015191015101610160830152610140604051612240816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261238382611334565b81516001600160401b0381116102fc5761239e600254611272565b601f8111612421575b50602092601f82116001146123d85792819293600092611f885750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106124095750836001959610611fc557505050811b01600255565b919260206001819286850151815501940192016123ec565b6002600052600080516020613a98833981519152601f830160051c8101916020841061246a575b601f0160051c01905b81811061245e57506123a7565b60008155600101612451565b9091508190612448565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b6000612105565b60405163100960cb60e01b815260206004820152602490fd5b60016120cf565b6124f66020829693960151611944565b60058110156111ce5760020361295057508051336001600160a01b03909116036129495760005b1561293257600161252d3361143d565b51612537816111c4565b612540816111c4565b036129195734612900576000606061014093612564608085015160038104906139ba565b60808801526101008401518352600a60205260408320600160ff1982541617905560016125956101008601516116cf565b5161259f816111c4565b6125a8816111c4565b1483146128f7576125d060406125c26101008701516116cf565b01515b6080890151906118a2565b6101008501518452600a60205260016040852001557f6b9c85b3735f2ac4b7f335870f68b287fb28542cd0c890985f18533f740a4aad6020604051858152a1015261266c61261c6117f5565b9460018060a01b038351168652602083015160208701526126406040840151611860565b604087015261265860608401516080830151906118a2565b6060870152608080840151910151906139ba565b608085015260a081015160a085015260c081015160c0850152600060e085015261269a61010082015161188d565b61010085015243610120850152428285015201516101608301526101406040516126c3816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261280682611334565b81516001600160401b0381116102fc57612821600254611272565b601f81116128a4575b50602092601f821160011461285b5792819293600092611f885750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061288c5750836001959610611fc557505050811b01600255565b9192602060018192868501518155019401920161286f565b6002600052600080516020613a98833981519152601f830160051c810191602084106128ed575b601f0160051c01905b8181106128e1575061282a565b600081556001016128d4565b90915081906128cb565b6125d0836125c5565b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b600161251d565b612961602082969493960151611944565b60058110156111ce576003036130fa576080602061298992015101518060a085015251611513565b60c08301908152600060e0840181815261010085018051839052875181516001600160a01b0390911660209091015281518151604001529051815160600152516080015251516001906129db816111c4565b6129e4816111c4565b036130ef57604060c083015101515b602001516001600160a01b031633036130d6576001612a113361143d565b51612a1b816111c4565b612a24816111c4565b036130bd57600160c083015151612a3a816111c4565b612a43816111c4565b036130a457602060a083015101516101208301515260a082015151602061012084015101523360406101208401510152612aab612a91612a9f61012085015160405192839160208301611951565b03601f198101835282611350565b60208151910120611718565b51612ab5816111c4565b612abe816111c4565b61308b576001612ad5602060a085015101516116cf565b8061014085015251612ae6816111c4565b612aef816111c4565b0361308457604061014083015101515b610160830152600161014083015151612b17816111c4565b612b20816111c4565b0361306b57602060a083015101516101808301515260a08201515160206101808401510152612be6612ba86101608401516001612b716101808701516040516105b281612a9160208201948561197b565b51612b7b816111c4565b612b84816111c4565b036130635760406105fc61018087015182516105b281612a9160208201948561197b565b6001612bbb602060a08701510151611686565b51612bc5816111c4565b612bce816111c4565b0361305b576040610635602060a08701510151611686565b806101a084015261016083015110613042576101408401516101a08301511161302957346130105760008080806101a0860151818115613007575b3390f115612ffb57610120820151604051612c4481612a91602082019485611951565b519020600052600b602052604060002060ff1990600182825416179055610120830151604051612c7c81612a91602082019485611951565b519020600052600b60205260406000206201000062ff000019825416179055602060a08401510151600052600a6020526001604060002091825416179055612ccf6101608301516101a0840151906139ba565b602060a08401510151600052600a6020526001604060002001557f54efafdc3ada77eaa6576bbd4c6b1e3a1461cfbe83bd12c3d8ac7cb8a9b5510e60206101a0840151604051908152a16101806101a08301519101526101a0610140612d336117f5565b9460018060a01b0381511686526020810151602087015260408101516040870152612d66606082015184860151906139ba565b60608701526080810151608087015260a081015160a087015260c081015160c087015260e081015160e087015261010081015161010087015243610120870152428287015201519101519003610160830152610140604051612dc7816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e08101516101008501526101008101516101208501526101208101518285015201516101608301526101608252612f0a82611334565b81516001600160401b0381116102fc57612f25600254611272565b601f8111612fa8575b50602092601f8211600114612f5f5792819293600092611f885750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612f905750836001959610611fc557505050811b01600255565b91926020600181928685015181550194019201612f73565b6002600052600080516020613a98833981519152601f830160051c81019160208410612ff1575b601f0160051c01905b818110612fe55750612f2e565b60008155600101612fd8565b9091508190612fcf565b6040513d6000823e3d90fd5b506108fc612c21565b60405163100960cb60e01b8152602e6004820152602490fd5b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b600090611991565b6000906139c7565b60405163100960cb60e01b8152602b6004820152602490fd5b6000612aff565b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b6101008201516129f3565b61310a6020829493940151611944565b60058110156111ce57600414613122575b5050509050565b6020015160a001516101c08201528351336001600160a01b03909116036138eb5760005b156138d25760016131563361143d565b51613160816111c4565b613169816111c4565b036138b957600161317f6101c083015151611513565b806101e084015251613190816111c4565b613199816111c4565b036138a057610100840151610200820151526101c0810151516020610200830151015233604061020083015101526131f1612a916131e561020084015160405192839160208301611951565b60208151910120611613565b516131fb816111c4565b613204816111c4565b613887573461386e576000610220820181815261024083018051839052865181516001600160a01b0390911660209091015281518151604001529051815160600152516080018190526101e08201515190926101a0929091600190613268816111c4565b613271816111c4565b1484146138635760406101e082015101515b610260820152610100860151610280820151526101c081015151602061028083015101526102808101516040516132c281612a9160208201948561197b565b519020845260076020526040842060ff199060018282541617905560016132fd6102808401516040516105b281612a9160208201948561197b565b51613307816111c4565b613310816111c4565b14851461385a57613340604061333961028085015182516105b281612a9160208201948561197b565b015161188d565b61028083015160405161335b81612a9160208201948561197b565b51902086526007602052600160408720015561020082015160405161338881612a91602082019485611951565b51902085526008602052604085206001828254161790556102008201516040516133ba81612a91602082019485611951565b51902085526008602052604085206201000062ff00001982541617905561010087015185526009602052604085206001828254161790556001613401610100890151611686565b5161340b816111c4565b613414816111c4565b1485146138515761342e60406133396101008a0151611686565b610100880151865260096020526001604087200155610260820151516102a08301515260018060a01b03602061026084015101511660206102a084015101526040610260830151015160406102a084015101526060610260830151015160606102a084015101526134a76080610260840151015161188d565b60806102a084015101526101c08201515185526006602052600160408620918254161790556101c06102a0820151910151518452600560806040862092805160018501556002840160018060a01b0360208301511660018060a01b0319825416179055604081015160038501556060810151600485015501519101557f8f6c5106377f5ec559ec7a7bd7c91c80cf1b1e90135d9144c24013de5b8d32bf6020604051858152a1015261014061355a6117f5565b9260018060a01b0381511684526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a08501526135a660c082015161188d565b60c08501526135b860e082015161188d565b60e085015261010081015161010085015243610120850152428285015201516101608301526101406040516135ec816112fd565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260008282015261016060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015261010081015161010084015283810151610120840152015182820152600460005543600155604051936020850152602081015160408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260c081015160e085015260e0810151610100850152610100810151610120850152610120810151828501520151610160830152610160825261372f82611334565b81516001600160401b0381116102fc5761374a600254611272565b601f81116137fe575b50602092601f8211600114613798579281929360009261378d575b50508160011b916000199060031b1c1916176002555b8038808061311b565b01519050388061376e565b601f19821693600260005260206000209160005b8681106137e657508360019596106137cd575b505050811b01600255613784565b015160001960f88460031b161c191690553880806137bf565b919260206001819286850151815501940192016137ac565b6002600052600080516020613a98833981519152601f830160051c81019160208410613847575b601f0160051c01905b81811061383b5750613753565b6000815560010161382e565b9091508190613825565b61342e8561188d565b6133408561188d565b610240810151613283565b60405163100960cb60e01b815260336004820152602490fd5b60405163100960cb60e01b815260326004820152602490fd5b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b6001613146565b60405163100960cb60e01b8152601c6004820152602490fd5b90506001541438611c05565b60026000908152600080516020613a98833981519152939250905b80821061394a57509091508101602001610de5611be7565b919260018160209254838588010152019101909291613932565b60ff191660208086019190915291151560051b84019091019150610de59050611be7565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b9081039081116118775790565b6000929180159182156139de575b50501561016857565b915092508060001904831181151516611877576139fe8382029384611991565b1438806139d5565b60408051919060c083016001600160401b038111848210176102fc57815260a0836000928382528051613a38816112ac565b848152846020820152602083015283818301528360608301528051613a5c816112ac565b84815284602082015260808301525192613a75846112c7565b83520152565b60405190613a88826112ac565b8160008152602061150e613a0656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 15987,
  version: 9,
  views: {},
}
export const _stateSourceMap = {
  1: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:283:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:87:21:after expr stmt semicolon',
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
