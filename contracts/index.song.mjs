// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12'
export const _versionHash = '0.1.12 (96568703)'
export const _backendVersion = 25

export function getExports(s) {
  const stdlib = s.reachStdlib
  return {}
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib
  return {}
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib
  const ctc0 = stdlib.T_Address
  const ctc1 = stdlib.T_UInt
  const ctc2 = stdlib.T_Bool
  const ctc3 = stdlib.T_Null
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1,
  })
  const map0_ctc = ctc4

  const _canPurchase = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [v781, v788, v789, v790, v791, v800] = svs
      return await (async () => {
        return v800
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _checkOwner = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [v781, v788, v789, v790, v791, v800] = svs
      return await (async (_v785) => {
        const v785 = stdlib.protect(ctc0, _v785, null)

        const v786 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v785),
          null,
        )
        const v787 = stdlib.fromSome(
          v786,
          stdlib.checkedBigNumberify(
            './index.rsh:33:51:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v787
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _creator = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [v781, v788, v789, v790, v791, v800] = svs
      return await (async () => {
        return v788
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _sharePrice = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [v781, v788, v789, v790, v791, v800] = svs
      return await (async () => {
        return v789
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _sharesAvailable = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [v781, v788, v789, v790, v791, v800] = svs
      return await (async () => {
        return v790
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  return {
    infos: {
      canPurchase: {
        decode: _canPurchase,
        dom: [],
        rng: ctc2,
      },
      checkOwner: {
        decode: _checkOwner,
        dom: [ctc0],
        rng: ctc1,
      },
      creator: {
        decode: _creator,
        dom: [],
        rng: ctc0,
      },
      sharePrice: {
        decode: _sharePrice,
        dom: [],
        rng: ctc1,
      },
      sharesAvailable: {
        decode: _sharesAvailable,
        dom: [],
        rng: ctc1,
      },
    },
    views: {
      3: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc2],
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
  const ctc3 = stdlib.T_Tuple([ctc2])
  return {
    mapDataTy: ctc3,
  }
}
export async function Creator(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Creator expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for Creator expects to receive an interact object as its second argument.`,
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
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc4 = stdlib.T_Tuple([ctc1])
  const ctc5 = stdlib.T_Data({
    makeSharesAvailable0_47: ctc3,
    purchaseShares0_47: ctc4,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  })

  const txn1 = await ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:27:11:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:27:11:decimal',
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

      const {
        data: [],
        secs: v783,
        time: v782,
        didSend: v24,
        from: v781,
      } = txn1

      const v788 = v781
      const v789 = stdlib.checkedBigNumberify(
        './index.rsh:36:33:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v790 = stdlib.checkedBigNumberify(
        './index.rsh:36:30:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v791 = stdlib.checkedBigNumberify(
        './index.rsh:36:36:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v792 = v782

      if (
        await (async () => {
          return true
        })()
      ) {
        const v800 = stdlib.gt(
          v790,
          stdlib.checkedBigNumberify(
            './index.rsh:40:45:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
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
    tys: [],
    waitIfNotPresent: false,
  })
  const {
    data: [],
    secs: v783,
    time: v782,
    didSend: v24,
    from: v781,
  } = txn1
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:28:25:application',
    fs: [
      'at ./index.rsh:28:25:application call to [unknown function] (defined at: ./index.rsh:28:25:function exp)',
      'at ./index.rsh:28:25:application call to "liftedInteract" (defined at: ./index.rsh:28:25:application)',
    ],
    msg: 'ready',
    who: 'Creator',
  })

  let v788 = v781
  let v789 = stdlib.checkedBigNumberify(
    './index.rsh:36:33:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v790 = stdlib.checkedBigNumberify(
    './index.rsh:36:30:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v791 = stdlib.checkedBigNumberify(
    './index.rsh:36:36:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v792 = v782

  let txn2 = txn1
  while (
    await (async () => {
      return true
    })()
  ) {
    const v800 = stdlib.gt(
      v790,
      stdlib.checkedBigNumberify(
        './index.rsh:40:45:decimal',
        stdlib.UInt_max,
        '0',
      ),
    )
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    })
    const {
      data: [v858],
      secs: v860,
      time: v859,
      didSend: v645,
      from: v857,
    } = txn3
    switch (v858[0]) {
      case 'makeSharesAvailable0_47': {
        const v861 = v858[1]
        undefined /* setApiDetails */
        const v866 =
          v861[
            stdlib.checkedBigNumberify(
              './index.rsh:45:12:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v867 =
          v861[
            stdlib.checkedBigNumberify(
              './index.rsh:45:12:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v868 = stdlib.addressEq(v857, v781)
        stdlib.assert(v868, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
          ],
          msg: 'is creator',
          who: 'Creator',
        })
        const v870 = stdlib.gt(
          v866,
          stdlib.checkedBigNumberify(
            './index.rsh:47:32:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v870, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:47:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
          ],
          msg: 'amtToMakeAvail > 0',
          who: 'Creator',
        })
        const v872 = stdlib.gt(
          v867,
          stdlib.checkedBigNumberify(
            './index.rsh:48:21:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v872, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:48:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
          ],
          msg: 'pps > 0',
          who: 'Creator',
        })
        const v874 = stdlib.safeAdd(v866, v790)
        const v875 = stdlib.le(
          v874,
          stdlib.checkedBigNumberify(
            './index.rsh:5:20:decimal',
            stdlib.UInt_max,
            '100',
          ),
        )
        stdlib.assert(v875, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:49:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
          ],
          msg: 'only allowed to make 100 shares available',
          who: 'Creator',
        })
        const v898 = null
        await txn3.getOutput('makeSharesAvailable', 'v898', ctc0, v898)
        const v906 = stdlib.safeAdd(v790, v866)
        const cv788 = v788
        const cv789 = v867
        const cv790 = v906
        const cv791 = v791
        const cv792 = v859

        v788 = cv788
        v789 = cv789
        v790 = cv790
        v791 = cv791
        v792 = cv792

        txn2 = txn3
        continue
        break
      }
      case 'purchaseShares0_47': {
        const v927 = v858[1]
        undefined /* setApiDetails */
        const v944 =
          v927[
            stdlib.checkedBigNumberify(
              './index.rsh:66:12:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v945 = stdlib.ge(v790, v944)
        stdlib.assert(v945, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:66:47:application call to [unknown function] (defined at: ./index.rsh:66:47:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:66:47:function exp)',
            'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
          ],
          msg: 'not enough shares available to purchase',
          who: 'Creator',
        })
        const v947 = stdlib.safeMul(v789, v944)
        const v979 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v857),
          null,
        )
        const v980 = stdlib.fromSome(
          v979,
          stdlib.checkedBigNumberify(
            './index.rsh:74:51:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v981 = stdlib.safeAdd(v980, v944)
        await stdlib.mapSet(map0, v857, v981)
        const v982 = null
        await txn3.getOutput('purchaseShares', 'v982', ctc0, v982)
        const v989 = stdlib.safeSub(v790, v944)
        const v991 = stdlib.safeAdd(v791, v947)
        const cv788 = v788
        const cv789 = v789
        const cv790 = v989
        const cv791 = v991
        const cv792 = v859

        v788 = cv788
        v789 = cv789
        v790 = cv790
        v791 = cv791
        v792 = cv792

        txn2 = txn3
        continue
        break
      }
    }
  }
  return
}
export async function _makeSharesAvailable3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _makeSharesAvailable3 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _makeSharesAvailable3 expects to receive an interact object as its second argument.`,
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
  const ctc4 = stdlib.T_Bool
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc6 = stdlib.T_Tuple([ctc1])
  const ctc7 = stdlib.T_Data({
    makeSharesAvailable0_47: ctc5,
    purchaseShares0_47: ctc6,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const [v781, v788, v789, v790, v791, v800] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc3, ctc3, ctc1, ctc1, ctc1, ctc4],
  )
  const v801 = ctc.selfAddress()
  const v803 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
      'at ./index.rsh:36:19:application call to "runmakeSharesAvailable0_47" (defined at: ./index.rsh:45:12:function exp)',
      'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
    ],
    msg: 'in',
    who: 'makeSharesAvailable',
  })
  const v804 =
    v803[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v805 =
    v803[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '1',
      )
    ]
  const v808 = stdlib.addressEq(v801, v781)
  stdlib.assert(v808, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
      'at ./index.rsh:36:19:application call to "runmakeSharesAvailable0_47" (defined at: ./index.rsh:45:12:function exp)',
      'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
    ],
    msg: 'is creator',
    who: 'makeSharesAvailable',
  })
  const v810 = stdlib.gt(
    v804,
    stdlib.checkedBigNumberify(
      './index.rsh:47:32:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v810, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:47:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
      'at ./index.rsh:36:19:application call to "runmakeSharesAvailable0_47" (defined at: ./index.rsh:45:12:function exp)',
      'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
    ],
    msg: 'amtToMakeAvail > 0',
    who: 'makeSharesAvailable',
  })
  const v812 = stdlib.gt(
    v805,
    stdlib.checkedBigNumberify(
      './index.rsh:48:21:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v812, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:48:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
      'at ./index.rsh:36:19:application call to "runmakeSharesAvailable0_47" (defined at: ./index.rsh:45:12:function exp)',
      'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
    ],
    msg: 'pps > 0',
    who: 'makeSharesAvailable',
  })
  const v814 = stdlib.safeAdd(v804, v790)
  const v815 = stdlib.le(
    v814,
    stdlib.checkedBigNumberify(
      './index.rsh:5:20:decimal',
      stdlib.UInt_max,
      '100',
    ),
  )
  stdlib.assert(v815, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:49:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
      'at ./index.rsh:36:19:application call to "runmakeSharesAvailable0_47" (defined at: ./index.rsh:45:12:function exp)',
      'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
    ],
    msg: 'only allowed to make 100 shares available',
    who: 'makeSharesAvailable',
  })
  const v824 = ['makeSharesAvailable0_47', v803]

  const txn1 = await ctc.sendrecv({
    args: [v781, v788, v789, v790, v791, v800, v824],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:54:11:decimal',
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

      const {
        data: [v858],
        secs: v860,
        time: v859,
        didSend: v645,
        from: v857,
      } = txn1

      switch (v858[0]) {
        case 'makeSharesAvailable0_47': {
          const v861 = v858[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'makeSharesAvailable',
          })
          const v866 =
            v861[
              stdlib.checkedBigNumberify(
                './index.rsh:45:12:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v867 =
            v861[
              stdlib.checkedBigNumberify(
                './index.rsh:45:12:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v898 = null
          const v899 = await txn1.getOutput(
            'makeSharesAvailable',
            'v898',
            ctc0,
            v898,
          )

          const v906 = stdlib.safeAdd(v790, v866)
          const v1179 = v788
          const v1180 = v867
          const v1181 = v906
          const v1182 = v791
          const v1184 = stdlib.gt(
            v906,
            stdlib.checkedBigNumberify(
              './index.rsh:40:45:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          sim_r.isHalt = false

          break
        }
        case 'purchaseShares0_47': {
          const v927 = v858[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc4, ctc7],
    waitIfNotPresent: false,
  })
  const {
    data: [v858],
    secs: v860,
    time: v859,
    didSend: v645,
    from: v857,
  } = txn1
  switch (v858[0]) {
    case 'makeSharesAvailable0_47': {
      const v861 = v858[1]
      undefined /* setApiDetails */
      const v866 =
        v861[
          stdlib.checkedBigNumberify(
            './index.rsh:45:12:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v867 =
        v861[
          stdlib.checkedBigNumberify(
            './index.rsh:45:12:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v868 = stdlib.addressEq(v857, v781)
      stdlib.assert(v868, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
        ],
        msg: 'is creator',
        who: 'makeSharesAvailable',
      })
      const v870 = stdlib.gt(
        v866,
        stdlib.checkedBigNumberify(
          './index.rsh:47:32:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v870, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:47:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
        ],
        msg: 'amtToMakeAvail > 0',
        who: 'makeSharesAvailable',
      })
      const v872 = stdlib.gt(
        v867,
        stdlib.checkedBigNumberify(
          './index.rsh:48:21:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v872, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:48:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
        ],
        msg: 'pps > 0',
        who: 'makeSharesAvailable',
      })
      const v874 = stdlib.safeAdd(v866, v790)
      const v875 = stdlib.le(
        v874,
        stdlib.checkedBigNumberify(
          './index.rsh:5:20:decimal',
          stdlib.UInt_max,
          '100',
        ),
      )
      stdlib.assert(v875, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:49:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:45:60:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:45:60:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
        ],
        msg: 'only allowed to make 100 shares available',
        who: 'makeSharesAvailable',
      })
      const v898 = null
      const v899 = await txn1.getOutput(
        'makeSharesAvailable',
        'v898',
        ctc0,
        v898,
      )
      if (v645) {
        stdlib.protect(ctc0, await interact.out(v861, v899), {
          at: './index.rsh:45:13:application',
          fs: [
            'at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)',
            'at ./index.rsh:56:19:application call to "notify" (defined at: ./index.rsh:55:18:function exp)',
            'at ./index.rsh:55:18:application call to [unknown function] (defined at: ./index.rsh:55:18:function exp)',
          ],
          msg: 'out',
          who: 'makeSharesAvailable',
        })
      } else {
      }

      const v906 = stdlib.safeAdd(v790, v866)
      const v1179 = v788
      const v1180 = v867
      const v1181 = v906
      const v1182 = v791
      const v1184 = stdlib.gt(
        v906,
        stdlib.checkedBigNumberify(
          './index.rsh:40:45:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      return

      break
    }
    case 'purchaseShares0_47': {
      const v927 = v858[1]
      return
      break
    }
  }
}
export async function _purchaseShares3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _purchaseShares3 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _purchaseShares3 expects to receive an interact object as its second argument.`,
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
  const ctc4 = stdlib.T_Bool
  const ctc5 = stdlib.T_Tuple([ctc1])
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc7 = stdlib.T_Data({
    makeSharesAvailable0_47: ctc6,
    purchaseShares0_47: ctc5,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const [v781, v788, v789, v790, v791, v800] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc3, ctc3, ctc1, ctc1, ctc1, ctc4],
  )
  const v828 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:66:47:application call to [unknown function] (defined at: ./index.rsh:66:47:function exp)',
      'at ./index.rsh:36:19:application call to "runpurchaseShares0_47" (defined at: ./index.rsh:66:12:function exp)',
      'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
    ],
    msg: 'in',
    who: 'purchaseShares',
  })
  const v829 =
    v828[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v831 = stdlib.ge(v790, v829)
  stdlib.assert(v831, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:66:47:application call to [unknown function] (defined at: ./index.rsh:66:47:function exp)',
      'at ./index.rsh:36:19:application call to "runpurchaseShares0_47" (defined at: ./index.rsh:66:12:function exp)',
      'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
    ],
    msg: 'not enough shares available to purchase',
    who: 'purchaseShares',
  })
  const v838 = ['purchaseShares0_47', v828]

  const v856 = stdlib.safeMul(v789, v829)

  const txn1 = await ctc.sendrecv({
    args: [v781, v788, v789, v790, v791, v800, v838],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v856, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)

      const {
        data: [v858],
        secs: v860,
        time: v859,
        didSend: v645,
        from: v857,
      } = txn1

      switch (v858[0]) {
        case 'makeSharesAvailable0_47': {
          const v861 = v858[1]

          break
        }
        case 'purchaseShares0_47': {
          const v927 = v858[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'purchaseShares',
          })
          const v944 =
            v927[
              stdlib.checkedBigNumberify(
                './index.rsh:66:12:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v947 = stdlib.safeMul(v789, v944)
          sim_r.txns.push({
            amt: v947,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          const v979 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v857),
            null,
          )
          const v980 = stdlib.fromSome(
            v979,
            stdlib.checkedBigNumberify(
              './index.rsh:74:51:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v981 = stdlib.safeAdd(v980, v944)
          await stdlib.simMapSet(sim_r, 0, v857, v981)
          const v982 = null
          const v983 = await txn1.getOutput(
            'purchaseShares',
            'v982',
            ctc0,
            v982,
          )

          const v989 = stdlib.safeSub(v790, v944)
          const v991 = stdlib.safeAdd(v791, v947)
          const v1200 = v788
          const v1201 = v789
          const v1202 = v989
          const v1203 = v991
          const v1205 = stdlib.gt(
            v989,
            stdlib.checkedBigNumberify(
              './index.rsh:40:45:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          sim_r.isHalt = false

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc4, ctc7],
    waitIfNotPresent: false,
  })
  const {
    data: [v858],
    secs: v860,
    time: v859,
    didSend: v645,
    from: v857,
  } = txn1
  switch (v858[0]) {
    case 'makeSharesAvailable0_47': {
      const v861 = v858[1]
      return
      break
    }
    case 'purchaseShares0_47': {
      const v927 = v858[1]
      undefined /* setApiDetails */
      const v944 =
        v927[
          stdlib.checkedBigNumberify(
            './index.rsh:66:12:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v945 = stdlib.ge(v790, v944)
      stdlib.assert(v945, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:66:47:application call to [unknown function] (defined at: ./index.rsh:66:47:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:66:47:function exp)',
          'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)',
        ],
        msg: 'not enough shares available to purchase',
        who: 'purchaseShares',
      })
      const v947 = stdlib.safeMul(v789, v944)
      const v979 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v857),
        null,
      )
      const v980 = stdlib.fromSome(
        v979,
        stdlib.checkedBigNumberify(
          './index.rsh:74:51:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v981 = stdlib.safeAdd(v980, v944)
      await stdlib.mapSet(map0, v857, v981)
      const v982 = null
      const v983 = await txn1.getOutput('purchaseShares', 'v982', ctc0, v982)
      if (v645) {
        stdlib.protect(ctc0, await interact.out(v927, v983), {
          at: './index.rsh:66:13:application',
          fs: [
            'at ./index.rsh:66:13:application call to [unknown function] (defined at: ./index.rsh:66:13:function exp)',
            'at ./index.rsh:75:19:application call to "notify" (defined at: ./index.rsh:73:18:function exp)',
            'at ./index.rsh:73:18:application call to [unknown function] (defined at: ./index.rsh:73:18:function exp)',
          ],
          msg: 'out',
          who: 'purchaseShares',
        })
      } else {
      }

      const v989 = stdlib.safeSub(v790, v944)
      const v991 = stdlib.safeAdd(v791, v947)
      const v1200 = v788
      const v1201 = v789
      const v1202 = v989
      const v1203 = v991
      const v1205 = stdlib.gt(
        v989,
        stdlib.checkedBigNumberify(
          './index.rsh:40:45:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      return

      break
    }
  }
}
export async function makeSharesAvailable(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for makeSharesAvailable expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for makeSharesAvailable expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 3) {
    return _makeSharesAvailable3(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
export async function purchaseShares(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for purchaseShares expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for purchaseShares expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 3) {
    return _purchaseShares3(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
const _ALGO = {
  ABI: {
    impure: [
      `makeSharesAvailable(uint64,uint64)byte[0]`,
      `purchaseShares(uint64)byte[0]`,
    ],
    pure: [
      `canPurchase()byte`,
      `checkOwner(address)uint64`,
      `creator()address`,
      `sharePrice()uint64`,
      `sharesAvailable()uint64`,
    ],
    sigs: [
      `canPurchase()byte`,
      `checkOwner(address)uint64`,
      `creator()address`,
      `makeSharesAvailable(uint64,uint64)byte[0]`,
      `purchaseShares(uint64)byte[0]`,
      `sharePrice()uint64`,
      `sharesAvailable()uint64`,
    ],
  },
  appApproval: `ByAMAAEDCAIJ9LnkkQi679n/Dbia9K4O1Nec8AmnhZnNAZqL28AGJgMBAAABASI1ADEYQQK2KWRJIls1ASVbNQIxGSMSQQAKMQAoIQWvZkICgzYaABdJQQDTIjUEIzUGSSEGDEAAdEkhBwxAADNJIQgMQAAWIQgSRDQBJBJEKGRJNQNXWAE1B0ICWSEHEkQ0ASQSRChkSTUDV0AINQdCAkNJIQkMQAATIQkSRDYaATX/KjT/UCWvUEIAiiEGEkQ0ASQSRCI2GgGIAj9JNf8jWzT/IlVNFjUHQgIJSSEKDEAAMUkhCwxAABQhCxJENhoBNhoCUDX/KDT/UEIASCEKEkQ0ASQSRChkSTUDVyAgNQdCAdGBu5rAvgESRDQBJBJEKGRJNQNXSAg1B0IBtzYaAhc1BDYaAzYaARdJIQQMQADyIQQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/VyAgNf6BQFs1/YFIWzX8gVBbNftJNQU1+oAEioos3DT6ULA0+iJVQABMNPpXARA1+TT5Ils1+DT5JVs19zEANP8SRDT4Ig1ENPciDUQ0+DT8CIFkDkSACAAAAAAAAAOCsCk1BzT/NP409zT8NPgINPsyBkIAiDT6VwEINfk0+Rc1+DT8NPgPRDT9NPgLNfc094gBIzEAKCoiMQCIAQpJNfYjWzT2IlVNNPgIFlBmgAgAAAAAAAAD1rApNQc0/zT+NP00/DT4CTT7NPcIMgZCAC0iEkSBoI0GiADcIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxADEAIiIiMgZCAAA1/zX+Nf01/DX7Nfo0/SINNfk0+jT7UDT8FlA0/RZQNP4WUDT5FlEHCFAoSwFXAFlnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 89,
  unsupported: [],
  version: 11,
  warnings: [
    `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`,
  ],
}
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_makeSharesAvailable0_47",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_purchaseShares0_47",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v858",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v898",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v982",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_makeSharesAvailable0_47",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_purchaseShares0_47",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v858",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "canPurchase",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1208",
        "type": "address"
      }
    ],
    "name": "checkOwner",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "creator",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "makeSharesAvailable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "purchaseShares",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sharePrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sharesAvailable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001905380380620019058339810160408190526200002691620002ed565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a1620000833415600c6200010c565b620000c8604080516060808201835260008284018181528352835160a08101855281815260208181018390529481018290529182018190526080820152909182015290565b80513390819052602080830180519290925281516000910181905281516040018190528151606001525143608090910152620001048162000136565b505062000395565b81620001325760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602081019091526000815260208083015160409081015115158352805160c0810182526000808252928101839052908101829052606081018290526080810182905260a08101919091528251516001600160a01b03908116808352602080860180515184168286019081528151830151604080880191825283518101516060808a0191825294518501516080808b019182528b51151560a0808d019182526003600055436001558551998a019a909a52955190991692870192909252915193850193909352519483019490945251918101919091529051151560c082015260e001604051602081830303815290604052600290805190602001906200024192919062000247565b50505050565b828054620002559062000358565b90600052602060002090601f016020900481019282620002795760008555620002c4565b82601f106200029457805160ff1916838001178555620002c4565b82800160010185558215620002c4579182015b82811115620002c4578251825591602001919060010190620002a7565b50620002d2929150620002d6565b5090565b5b80821115620002d25760008155600101620002d7565b6000604082840312156200030057600080fd5b604080519081016001600160401b03811182821017156200033157634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200034c57600080fd5b60208201529392505050565b600181811c908216806200036d57607f821691505b602082108114156200038f57634e487b7160e01b600052602260045260246000fd5b50919050565b61156080620003a56000396000f3fe6080604052600436106100a55760003560e01c806387269729116100615780638726972914610179578063a96796011461018e578063ab53f2c6146101a1578063df48981a146101c4578063e0e3671c146101d7578063e4571ca3146101f757005b806302d05d3f146100ae5780631e93b0f1146100e057806334a6d832146100ff5780633bc5b7bf1461012457806379e43a5c14610151578063832307571461016457005b366100ac57005b005b3480156100ba57600080fd5b506100c361020c565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100ec57600080fd5b506003545b6040519081526020016100d7565b34801561010b57600080fd5b5061011461021e565b60405190151581526020016100d7565b34801561013057600080fd5b5061014461013f3660046110de565b61022a565b6040516100d7919061112f565b6100ac61015f36600461115f565b610256565b34801561017057600080fd5b506001546100f1565b34801561018557600080fd5b506100f1610286565b61011461019c366004611177565b610292565b3480156101ad57600080fd5b506101b66102a5565b6040516100d7929190611199565b6101146101d23660046111f6565b610342565b3480156101e357600080fd5b506100f16101f23660046110de565b61034d565b34801561020357600080fd5b506100f1610370565b6000806102188161037c565b91505090565b60008061021881610445565b604080516060810182526000808252602082018190529181019190915261025082610509565b92915050565b604080518082019091526000808252602082015261028261027c368490038401846112a8565b826105db565b5050565b60008061021881610a82565b600061029e8383610b46565b9392505050565b6000606060005460028080546102ba9061136d565b80601f01602080910402602001604051908101604052809291908181526020018280546102e69061136d565b80156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b50505050509050915091509091565b600061025082610b96565b60408051602081019091526001600160a01b038216815260009061029e81610bd5565b60008061021881610cc6565b600060036000541415610434576000600280546103989061136d565b80601f01602080910402602001604051908101604052809291908181526020018280546103c49061136d565b80156104115780601f106103e657610100808354040283529160200191610411565b820191906000526020600020905b8154815290600101906020018083116103f457829003601f168201915b505050505080602001905181019061042991906113a2565b602001519392505050565b61044060006009610d86565b919050565b6000600360005414156104fd576000600280546104619061136d565b80601f016020809104026020016040519081016040528092919081815260200182805461048d9061136d565b80156104da5780601f106104af576101008083540402835291602001916104da565b820191906000526020600020905b8154815290600101906020018083116104bd57829003601f168201915b50505050508060200190518101906104f291906113a2565b60a001519392505050565b61044060006007610d86565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610555576105556110fb565b14156105cc576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610596576105966110fb565b60018111156105a7576105a76110fb565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6105eb6003600054146014610d86565b81516106069015806105ff57508251600154145b6015610d86565b6000808055600280546106189061136d565b80601f01602080910402602001604051908101604052809291908181526020018280546106449061136d565b80156106915780601f1061066657610100808354040283529160200191610691565b820191906000526020600020905b81548152906001019060200180831161067457829003601f168201915b50505050508060200190518101906106a991906113a2565b90506106e36040805160a0810182526000606082018181526080830182905282528251602080820185528282528301529181019190915290565b7fd66aab9a333b0c80bb8fa17727e0727cfa4d4b15bc8bb45ddeb6838d20cd8e5b3385604051610714929190611447565b60405180910390a16000602085015151516001811115610736576107366110fb565b1415610899576020848101515101518152815161075f906001600160a01b03163314600d610d86565b80515161076f901515600e610d86565b805160200151610782901515600f610d86565b6107a6606461079d8360000151600001518560600151610dac565b11156010610d86565b6107b234156011610d86565b604051600081527fe6cc913c6bc4a662a0d17310413d7c0de81e830bd1b4662c64bae6244b654ce79060200160405180910390a16000835261082e604080516060808201835260008284018181528352835160a08101855281815260208181018390529481018290529182018190526080820152909182015290565b825181516001600160a01b0391821690526020808501518184018051919093169052835181015191510152606083015182515161086b9190610dac565b6020820180516040019190915260808085015182516060015290514391015261089381610df9565b50610a7c565b60016020850151515160018111156108b3576108b36110fb565b1415610a7c5760208085015151604001519082018190525160608301516108dd9111156012610d86565b6108f38260400151826020015160000151610f02565b604082018190526109079034146013610d86565b336000818152600460205260409020805460ff191660019081179091556109689161093190610509565b516001811115610943576109436110fb565b1461094f57600061095d565b61095833610509565b604001515b602083015151610dac565b3360009081526004602090815260408083206001019390935591519081527ff4bad9fe4069f872fc410675b50ffb8c961f4b98f4352eafcf169aeca26d90d1910160405180910390a1600060208401526109fc604080516060808201835260008284018181528352835160a08101855281815260208181018390529481018290529182018190526080820152909182015290565b825181516001600160a01b03918216905260208085015181840180519190931690526040850151915181019190915260608401519083015151610a3f9190610f61565b81602001516040018181525050610a5e83608001518360400151610dac565b60208201805160600191909152514360809091015261089381610df9565b50505050565b600060036000541415610b3a57600060028054610a9e9061136d565b80601f0160208091040260200160405190810160405280929190818152602001828054610aca9061136d565b8015610b175780601f10610aec57610100808354040283529160200191610b17565b820191906000526020600020905b815481529060010190602001808311610afa57829003601f168201915b5050505050806020019051810190610b2f91906113a2565b604001519392505050565b6104406000600a610d86565b6000610b50610fb5565b602081810180515160009081905281515183015187905290515182015182018590526040805180820190915281815291820152610b8d82826105db565b51949350505050565b6000610ba0610fb5565b6020818101805151600190525151604090810151859052805180820190915260008082529181019190915261042982826105db565b600060036000541415610cba57600060028054610bf19061136d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1d9061136d565b8015610c6a5780601f10610c3f57610100808354040283529160200191610c6a565b820191906000526020600020905b815481529060010190602001808311610c4d57829003601f168201915b5050505050806020019051810190610c8291906113a2565b905060018351610c9190610509565b516001811115610ca357610ca36110fb565b14610caf57600061029e565b8251610b2f90610509565b61044060006008610d86565b600060036000541415610d7e57600060028054610ce29061136d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0e9061136d565b8015610d5b5780601f10610d3057610100808354040283529160200191610d5b565b820191906000526020600020905b815481529060010190602001808311610d3e57829003601f168201915b5050505050806020019051810190610d7391906113a2565b606001519392505050565b6104406000600b5b816102825760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610db983826114ba565b91508110156102505760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610da3565b60408051602081019091526000815260208083015160409081015115158352805160c0810182526000808252928101839052908101829052606081018290526080810182905260a08101919091528251516001600160a01b03908116808352602080860180515184168286019081528151830151604080880191825283518101516060808a0191825294518501516080808b019182528b51151560a0808d019182526003600055436001558551998a019a909a52955190991692870192909252915193850193909352519483019490945251918101919091529051151560c082015260e00160405160208183030381529060405260029080519060200190610a7c929190610fcf565b6000811580610f2657508282610f1881836114d2565b9250610f2490836114f1565b145b6102505760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610da3565b600082610f6e8382611513565b91508111156102505760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610da3565b905290565b604051806040016040528060008152602001610fb0611053565b828054610fdb9061136d565b90600052602060002090601f016020900481019282610ffd5760008555611043565b82601f1061101657805160ff1916838001178555611043565b82800160010185558215611043579182015b82811115611043578251825591602001919060010190611028565b5061104f929150611066565b5090565b6040518060200160405280610fb061107b565b5b8082111561104f5760008155600101611067565b604080516060810190915280600081526020016110ab604051806040016040528060008152602001600081525090565b8152602001610fb06040518060200160405280600081525090565b6001600160a01b03811681146110db57600080fd5b50565b6000602082840312156110f057600080fd5b813561029e816110c6565b634e487b7160e01b600052602160045260246000fd5b600281106110db57634e487b7160e01b600052602160045260246000fd5b8151606082019061113f81611111565b808352506020830151151560208301526040830151604083015292915050565b600060a0828403121561117157600080fd5b50919050565b6000806040838503121561118a57600080fd5b50508035926020909101359150565b82815260006020604081840152835180604085015260005b818110156111cd578581018301518582016060015282016111b1565b818111156111df576000606083870101525b50601f01601f191692909201606001949350505050565b60006020828403121561120857600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561124057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561124057634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561124057634e487b7160e01b600052604160045260246000fd5b600081830360a08112156112bb57600080fd5b6112c361120f565b833581526080601f19830112156112d957600080fd5b6112e1611246565b6112e9611277565b6020860135600281106112fb57600080fd5b81526040603f198501121561130f57600080fd5b61131761120f565b6040870135815260608701356020820152806020830152506020607f198501121561134157600080fd5b611349611246565b60809690960135865260408101959095529384526020810193909352509092915050565b600181811c9082168061138157607f821691505b6020821081141561117157634e487b7160e01b600052602260045260246000fd5b600060c082840312156113b457600080fd5b60405160c0810181811067ffffffffffffffff821117156113e557634e487b7160e01b600052604160045260246000fd5b60405282516113f3816110c6565b81526020830151611403816110c6565b8060208301525060408301516040820152606083015160608201526080830151608082015260a0830151801515811461143b57600080fd5b60a08201529392505050565b6001600160a01b0383168152815160208083019190915282015151805160c08301919061147381611111565b80604085015250602081015180516060850152602081015160808501525060408101515160a0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156114cd576114cd6114a4565b500190565b60008160001904831182151516156114ec576114ec6114a4565b500290565b60008261150e57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611525576115256114a4565b50039056fea264697066735822122011ae0b0728d1db3401056db82de20bb0f533f95f20750d60e425b946341ccfff64736f6c634300080c0033`,
  BytecodeLen: 6405,
  Which: `oD`,
  version: 8,
  views: {
    canPurchase: `canPurchase`,
    checkOwner: `checkOwner`,
    creator: `creator`,
    sharePrice: `sharePrice`,
    sharesAvailable: `sharesAvailable`,
  },
}
export const _stateSourceMap = {
  2: {
    at: './index.rsh:86:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:36:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
}
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH,
}
export const _Participants = {
  Creator: Creator,
  makeSharesAvailable: makeSharesAvailable,
  purchaseShares: purchaseShares,
}
export const _APIs = {
  makeSharesAvailable: makeSharesAvailable,
  purchaseShares: purchaseShares,
}
