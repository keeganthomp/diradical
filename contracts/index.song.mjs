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
  const ctc1 = stdlib.T_Token
  const ctc2 = stdlib.T_Bool
  const ctc3 = stdlib.T_UInt
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc2])
  const ctc5 = stdlib.T_Array(
    ctc4,
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
  )
  const ctc6 = stdlib.T_Null
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3,
  })
  const map0_ctc = ctc7

  const _checkOwnership = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async (_v1131) => {
        const v1131 = stdlib.protect(ctc0, _v1131, null)

        const v1132 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v1131),
          null,
        )
        const v1133 = stdlib.fromSome(
          v1132,
          stdlib.checkedBigNumberify(
            './index.rsh:46:55:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v1133
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
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return v1102
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _isOpenToPublic = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return v1136
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _ownershipTokId = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return v1111
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _pricePerUnit = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return v1137
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _toksAvailable = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return v1157
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _totalPaid = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return v1139
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _totalTokenAllocation = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return stdlib.checkedBigNumberify(
          './index.rsh:5:24:decimal',
          stdlib.UInt_max,
          '10000000',
        )
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _totalValue = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1102,
        v1111,
        v1136,
        v1137,
        v1138,
        v1139,
        v1140,
        v1143,
        v1156,
        v1157,
      ] = svs
      return await (async () => {
        return v1140
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  return {
    infos: {
      checkOwnership: {
        decode: _checkOwnership,
        dom: [ctc0],
        rng: ctc3,
      },
      creator: {
        decode: _creator,
        dom: [],
        rng: ctc0,
      },
      isOpenToPublic: {
        decode: _isOpenToPublic,
        dom: [],
        rng: ctc2,
      },
      ownershipTokId: {
        decode: _ownershipTokId,
        dom: [],
        rng: ctc1,
      },
      pricePerUnit: {
        decode: _pricePerUnit,
        dom: [],
        rng: ctc3,
      },
      toksAvailable: {
        decode: _toksAvailable,
        dom: [],
        rng: ctc3,
      },
      totalPaid: {
        decode: _totalPaid,
        dom: [],
        rng: ctc3,
      },
      totalTokenAllocation: {
        decode: _totalTokenAllocation,
        dom: [],
        rng: ctc3,
      },
      totalValue: {
        decode: _totalValue,
        dom: [],
        rng: ctc3,
      },
    },
    views: {
      3: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc3, ctc3, ctc5, ctc4, ctc3],
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
  const ctc3 = stdlib.T_Token
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc5 = stdlib.T_Tuple([ctc1])
  const ctc6 = stdlib.T_Data({
    openToPublic0_71: ctc4,
    purchaseOwnership0_71: ctc5,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  })

  const v1095 = [
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    false,
  ]
  const v1096 = [v1095]
  const txn1 = await ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:31:11:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:31:11:decimal',
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
        secs: v1104,
        time: v1103,
        didSend: v24,
        from: v1102,
      } = txn1

      const v1106 = 'Diradical Music Ownership       '
      const v1107 = 'DIRAD   '
      const v1108 = '                                                                                                '
      const v1109 = '                                '
      const v1110 = stdlib.simTokenNew(
        sim_r,
        v1106,
        v1107,
        v1108,
        v1109,
        stdlib.checkedBigNumberify(
          './index.rsh:5:24:decimal',
          stdlib.UInt_max,
          '10000000',
        ),
        stdlib.checkedBigNumberify(
          './index.rsh:40:15:decimal',
          stdlib.UInt_max,
          '0',
        ),
        getSimTokCtr(),
      )
      const v1111 = await txn1.getOutput('internal', 'v1110', ctc3, v1110)
      const v1121 =
        v1096[
          stdlib.checkedBigNumberify(
            './index.rsh:36:35:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1122 = stdlib.Array_set(
        v1121,
        '0',
        stdlib.checkedBigNumberify(
          './index.rsh:5:24:decimal',
          stdlib.UInt_max,
          '10000000',
        ),
      )
      const v1123 = stdlib.Array_set(
        v1096,
        stdlib.checkedBigNumberify(
          './index.rsh:36:35:application',
          stdlib.UInt_max,
          '0',
        ),
        v1122,
      )
      const v1125 =
        v1123[
          stdlib.checkedBigNumberify(
            './index.rsh:36:35:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1126 = stdlib.Array_set(
        v1125,
        '1',
        stdlib.checkedBigNumberify(
          './index.rsh:5:24:decimal',
          stdlib.UInt_max,
          '10000000',
        ),
      )
      const v1127 = stdlib.Array_set(
        v1123,
        stdlib.checkedBigNumberify(
          './index.rsh:36:35:application',
          stdlib.UInt_max,
          '0',
        ),
        v1126,
      )
      const v1128 =
        v1127[
          stdlib.checkedBigNumberify(
            './index.rsh:36:35:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1129 = stdlib.Array_set(v1128, '2', false)
      const v1130 = stdlib.Array_set(
        v1127,
        stdlib.checkedBigNumberify(
          './index.rsh:36:35:application',
          stdlib.UInt_max,
          '0',
        ),
        v1129,
      )
      const v1134 =
        v1130[
          stdlib.checkedBigNumberify(
            './index.rsh:49:28:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1135 =
        v1134[
          stdlib.checkedBigNumberify(
            './index.rsh:49:28:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1136 = false
      const v1137 = stdlib.checkedBigNumberify(
        './index.rsh:49:59:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v1138 = v1135
      const v1139 = stdlib.checkedBigNumberify(
        './index.rsh:49:49:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v1140 = stdlib.checkedBigNumberify(
        './index.rsh:49:46:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v1141 = v1103
      const v1143 = v1130

      if (
        await (async () => {
          return true
        })()
      ) {
        const v1156 =
          v1143[
            stdlib.checkedBigNumberify(
              './index.rsh:52:36:application',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v1157 =
          v1156[
            stdlib.checkedBigNumberify(
              './index.rsh:52:36:application',
              stdlib.UInt_max,
              '0',
            )
          ]
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
    secs: v1104,
    time: v1103,
    didSend: v24,
    from: v1102,
  } = txn1
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:32:25:application',
    fs: [
      'at ./index.rsh:32:25:application call to [unknown function] (defined at: ./index.rsh:32:25:function exp)',
      'at ./index.rsh:32:25:application call to "liftedInteract" (defined at: ./index.rsh:32:25:application)',
    ],
    msg: 'ready',
    who: 'Creator',
  })

  const v1106 = 'Diradical Music Ownership       '
  const v1107 = 'DIRAD   '
  const v1108 = '                                                                                                '
  const v1109 = '                                '
  const v1110 = undefined /* TokenNew */
  const v1111 = await txn1.getOutput('internal', 'v1110', ctc3, v1110)
  const v1121 =
    v1096[
      stdlib.checkedBigNumberify(
        './index.rsh:36:35:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1122 = stdlib.Array_set(
    v1121,
    '0',
    stdlib.checkedBigNumberify(
      './index.rsh:5:24:decimal',
      stdlib.UInt_max,
      '10000000',
    ),
  )
  const v1123 = stdlib.Array_set(
    v1096,
    stdlib.checkedBigNumberify(
      './index.rsh:36:35:application',
      stdlib.UInt_max,
      '0',
    ),
    v1122,
  )
  const v1125 =
    v1123[
      stdlib.checkedBigNumberify(
        './index.rsh:36:35:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1126 = stdlib.Array_set(
    v1125,
    '1',
    stdlib.checkedBigNumberify(
      './index.rsh:5:24:decimal',
      stdlib.UInt_max,
      '10000000',
    ),
  )
  const v1127 = stdlib.Array_set(
    v1123,
    stdlib.checkedBigNumberify(
      './index.rsh:36:35:application',
      stdlib.UInt_max,
      '0',
    ),
    v1126,
  )
  const v1128 =
    v1127[
      stdlib.checkedBigNumberify(
        './index.rsh:36:35:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1129 = stdlib.Array_set(v1128, '2', false)
  const v1130 = stdlib.Array_set(
    v1127,
    stdlib.checkedBigNumberify(
      './index.rsh:36:35:application',
      stdlib.UInt_max,
      '0',
    ),
    v1129,
  )
  const v1134 =
    v1130[
      stdlib.checkedBigNumberify(
        './index.rsh:49:28:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1135 =
    v1134[
      stdlib.checkedBigNumberify(
        './index.rsh:49:28:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  let v1136 = false
  let v1137 = stdlib.checkedBigNumberify(
    './index.rsh:49:59:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v1138 = v1135
  let v1139 = stdlib.checkedBigNumberify(
    './index.rsh:49:49:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v1140 = stdlib.checkedBigNumberify(
    './index.rsh:49:46:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v1141 = v1103
  let v1143 = v1130

  let txn2 = txn1
  while (
    await (async () => {
      return true
    })()
  ) {
    const v1156 =
      v1143[
        stdlib.checkedBigNumberify(
          './index.rsh:52:36:application',
          stdlib.UInt_max,
          '0',
        )
      ]
    const v1157 =
      v1156[
        stdlib.checkedBigNumberify(
          './index.rsh:52:36:application',
          stdlib.UInt_max,
          '0',
        )
      ]
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    })
    const {
      data: [v1228],
      secs: v1230,
      time: v1229,
      didSend: v869,
      from: v1227,
    } = txn3
    switch (v1228[0]) {
      case 'openToPublic0_71': {
        const v1231 = v1228[1]
        undefined /* setApiDetails */
        const v1236 =
          v1231[
            stdlib.checkedBigNumberify(
              './index.rsh:60:12:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v1238 = stdlib.addressEq(v1227, v1102)
        stdlib.assert(v1238, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
          ],
          msg: 'is creator',
          who: 'Creator',
        })
        const v1240 = v1136 ? false : true
        stdlib.assert(v1240, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
          ],
          msg: 'already opened to public',
          who: 'Creator',
        })
        const v1244 = stdlib.ge(v1157, v1236)
        stdlib.assert(v1244, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:64:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
          ],
          msg: 'tok amt check',
          who: 'Creator',
        })
        const v1246 = stdlib.gt(
          v1236,
          stdlib.checkedBigNumberify(
            './index.rsh:65:32:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v1246, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:65:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
          ],
          msg: null,
          who: 'Creator',
        })
        const v1262 =
          v1231[
            stdlib.checkedBigNumberify(
              './index.rsh:60:12:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v1280 = stdlib.sub(v1157, v1236)
        const v1282 = stdlib.Array_set(v1156, '0', v1280)
        const v1283 = stdlib.Array_set(
          v1143,
          stdlib.checkedBigNumberify(
            './index.rsh:69:56:application',
            stdlib.UInt_max,
            '0',
          ),
          v1282,
        )
        const v1284 = null
        await txn3.getOutput('openToPublic', 'v1284', ctc0, v1284)
        const v1292 = stdlib.safeSub(v1138, v1236)
        const v1293 = stdlib.safeDiv(v1262, v1138)
        const cv1136 = true
        const cv1137 = v1293
        const cv1138 = v1292
        const cv1139 = v1139
        const cv1140 = v1262
        const cv1141 = v1229
        const cv1143 = v1283

        v1136 = cv1136
        v1137 = cv1137
        v1138 = cv1138
        v1139 = cv1139
        v1140 = cv1140
        v1141 = cv1141
        v1143 = cv1143

        txn2 = txn3
        continue
        break
      }
      case 'purchaseOwnership0_71': {
        const v1328 = v1228[1]
        undefined /* setApiDetails */
        const v1346 =
          v1328[
            stdlib.checkedBigNumberify(
              './index.rsh:81:12:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v1347 = stdlib.safeMul(v1137, v1346)
        const v1350 = stdlib.ge(v1157, v1346)
        stdlib.assert(v1350, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
          ],
          msg: 'tok amt check',
          who: 'Creator',
        })
        stdlib.assert(v1136, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
          ],
          msg: 'is open',
          who: 'Creator',
        })
        const v1353 = stdlib.ge(v1138, v1346)
        stdlib.assert(v1353, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
            'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
          ],
          msg: 'not enough shares available to purchase',
          who: 'Creator',
        })
        const v1403 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v1227),
          null,
        )
        const v1404 = stdlib.fromSome(
          v1403,
          stdlib.checkedBigNumberify(
            './index.rsh:92:51:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v1405 = stdlib.safeAdd(v1404, v1346)
        await stdlib.mapSet(map0, v1227, v1405)
        const v1411 = stdlib.sub(v1157, v1346)
        const v1413 = stdlib.Array_set(v1156, '0', v1411)
        const v1414 = stdlib.Array_set(
          v1143,
          stdlib.checkedBigNumberify(
            './index.rsh:93:55:application',
            stdlib.UInt_max,
            '0',
          ),
          v1413,
        )
        const v1415 = null
        await txn3.getOutput('purchaseOwnership', 'v1415', ctc0, v1415)
        const v1422 = stdlib.safeSub(v1138, v1346)
        const v1423 = stdlib.safeAdd(v1139, v1347)
        const cv1136 = true
        const cv1137 = v1137
        const cv1138 = v1422
        const cv1139 = v1423
        const cv1140 = v1140
        const cv1141 = v1229
        const cv1143 = v1414

        v1136 = cv1136
        v1137 = cv1137
        v1138 = cv1138
        v1139 = cv1139
        v1140 = cv1140
        v1141 = cv1141
        v1143 = cv1143

        txn2 = txn3
        continue
        break
      }
    }
  }
  return
}
export async function _openToPublic3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _openToPublic3 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _openToPublic3 expects to receive an interact object as its second argument.`,
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
  const ctc4 = stdlib.T_Token
  const ctc5 = stdlib.T_Bool
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5])
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
  )
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc9 = stdlib.T_Tuple([ctc1])
  const ctc10 = stdlib.T_Data({
    openToPublic0_71: ctc8,
    purchaseOwnership0_71: ctc9,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const [v1102, v1111, v1136, v1137, v1138, v1139, v1140, v1143, v1156, v1157] =
    await ctc.getState(
      stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      [ctc3, ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc7, ctc6, ctc1],
    )
  const v1158 = ctc.selfAddress()
  const v1160 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
      'at ./index.rsh:49:19:application call to "runopenToPublic0_71" (defined at: ./index.rsh:60:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'in',
    who: 'openToPublic',
  })
  const v1161 =
    v1160[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1165 = stdlib.addressEq(v1158, v1102)
  stdlib.assert(v1165, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
      'at ./index.rsh:49:19:application call to "runopenToPublic0_71" (defined at: ./index.rsh:60:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'is creator',
    who: 'openToPublic',
  })
  const v1167 = v1136 ? false : true
  stdlib.assert(v1167, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
      'at ./index.rsh:49:19:application call to "runopenToPublic0_71" (defined at: ./index.rsh:60:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'already opened to public',
    who: 'openToPublic',
  })
  const v1171 = stdlib.ge(v1157, v1161)
  stdlib.assert(v1171, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:64:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
      'at ./index.rsh:49:19:application call to "runopenToPublic0_71" (defined at: ./index.rsh:60:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'tok amt check',
    who: 'openToPublic',
  })
  const v1173 = stdlib.gt(
    v1161,
    stdlib.checkedBigNumberify(
      './index.rsh:65:32:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v1173, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:65:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
      'at ./index.rsh:49:19:application call to "runopenToPublic0_71" (defined at: ./index.rsh:60:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: null,
    who: 'openToPublic',
  })
  const v1182 = ['openToPublic0_71', v1160]

  const txn1 = await ctc.sendrecv({
    args: [
      v1102,
      v1111,
      v1136,
      v1137,
      v1138,
      v1139,
      v1140,
      v1143,
      v1156,
      v1157,
      v1182,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:67:11:decimal',
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
        data: [v1228],
        secs: v1230,
        time: v1229,
        didSend: v869,
        from: v1227,
      } = txn1

      switch (v1228[0]) {
        case 'openToPublic0_71': {
          const v1231 = v1228[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'openToPublic',
          })
          const v1236 =
            v1231[
              stdlib.checkedBigNumberify(
                './index.rsh:60:12:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1262 =
            v1231[
              stdlib.checkedBigNumberify(
                './index.rsh:60:12:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v1280 = stdlib.sub(v1157, v1236)
          const v1282 = stdlib.Array_set(v1156, '0', v1280)
          const v1283 = stdlib.Array_set(
            v1143,
            stdlib.checkedBigNumberify(
              './index.rsh:69:56:application',
              stdlib.UInt_max,
              '0',
            ),
            v1282,
          )
          sim_r.txns.push({
            kind: 'from',
            to: v1102,
            tok: v1111,
          })
          const v1284 = null
          const v1285 = await txn1.getOutput(
            'openToPublic',
            'v1284',
            ctc0,
            v1284,
          )

          const v1292 = stdlib.safeSub(v1138, v1236)
          const v1293 = stdlib.safeDiv(v1262, v1138)
          const v1752 = true
          const v1753 = v1293
          const v1754 = v1292
          const v1755 = v1139
          const v1756 = v1262
          const v1758 = v1283
          const v1759 =
            v1283[
              stdlib.checkedBigNumberify(
                './index.rsh:52:36:application',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1760 =
            v1759[
              stdlib.checkedBigNumberify(
                './index.rsh:52:36:application',
                stdlib.UInt_max,
                '0',
              )
            ]
          sim_r.isHalt = false

          break
        }
        case 'purchaseOwnership0_71': {
          const v1328 = v1228[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc7, ctc6, ctc1, ctc10],
    waitIfNotPresent: false,
  })
  const {
    data: [v1228],
    secs: v1230,
    time: v1229,
    didSend: v869,
    from: v1227,
  } = txn1
  switch (v1228[0]) {
    case 'openToPublic0_71': {
      const v1231 = v1228[1]
      undefined /* setApiDetails */
      const v1236 =
        v1231[
          stdlib.checkedBigNumberify(
            './index.rsh:60:12:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1238 = stdlib.addressEq(v1227, v1102)
      stdlib.assert(v1238, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
        ],
        msg: 'is creator',
        who: 'openToPublic',
      })
      const v1240 = v1136 ? false : true
      stdlib.assert(v1240, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
        ],
        msg: 'already opened to public',
        who: 'openToPublic',
      })
      const v1244 = stdlib.ge(v1157, v1236)
      stdlib.assert(v1244, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:64:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
        ],
        msg: 'tok amt check',
        who: 'openToPublic',
      })
      const v1246 = stdlib.gt(
        v1236,
        stdlib.checkedBigNumberify(
          './index.rsh:65:32:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v1246, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:65:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:60:49:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:60:49:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
        ],
        msg: null,
        who: 'openToPublic',
      })
      const v1262 =
        v1231[
          stdlib.checkedBigNumberify(
            './index.rsh:60:12:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v1280 = stdlib.sub(v1157, v1236)
      const v1282 = stdlib.Array_set(v1156, '0', v1280)
      const v1283 = stdlib.Array_set(
        v1143,
        stdlib.checkedBigNumberify(
          './index.rsh:69:56:application',
          stdlib.UInt_max,
          '0',
        ),
        v1282,
      )
      const v1284 = null
      const v1285 = await txn1.getOutput('openToPublic', 'v1284', ctc0, v1284)
      if (v869) {
        stdlib.protect(ctc0, await interact.out(v1231, v1285), {
          at: './index.rsh:60:13:application',
          fs: [
            'at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)',
            'at ./index.rsh:70:19:application call to "notify" (defined at: ./index.rsh:68:18:function exp)',
            'at ./index.rsh:68:18:application call to [unknown function] (defined at: ./index.rsh:68:18:function exp)',
          ],
          msg: 'out',
          who: 'openToPublic',
        })
      } else {
      }

      const v1292 = stdlib.safeSub(v1138, v1236)
      const v1293 = stdlib.safeDiv(v1262, v1138)
      const v1752 = true
      const v1753 = v1293
      const v1754 = v1292
      const v1755 = v1139
      const v1756 = v1262
      const v1758 = v1283
      const v1759 =
        v1283[
          stdlib.checkedBigNumberify(
            './index.rsh:52:36:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1760 =
        v1759[
          stdlib.checkedBigNumberify(
            './index.rsh:52:36:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      return

      break
    }
    case 'purchaseOwnership0_71': {
      const v1328 = v1228[1]
      return
      break
    }
  }
}
export async function _purchaseOwnership3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _purchaseOwnership3 expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _purchaseOwnership3 expects to receive an interact object as its second argument.`,
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
  const ctc4 = stdlib.T_Token
  const ctc5 = stdlib.T_Bool
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5])
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
  )
  const ctc8 = stdlib.T_Tuple([ctc1])
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1])
  const ctc10 = stdlib.T_Data({
    openToPublic0_71: ctc9,
    purchaseOwnership0_71: ctc8,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const [v1102, v1111, v1136, v1137, v1138, v1139, v1140, v1143, v1156, v1157] =
    await ctc.getState(
      stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      [ctc3, ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc7, ctc6, ctc1],
    )
  const v1186 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
      'at ./index.rsh:49:19:application call to "runpurchaseOwnership0_71" (defined at: ./index.rsh:81:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'in',
    who: 'purchaseOwnership',
  })
  const v1187 =
    v1186[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1189 = stdlib.safeMul(v1137, v1187)
  const v1192 = stdlib.ge(v1157, v1187)
  stdlib.assert(v1192, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
      'at ./index.rsh:49:19:application call to "runpurchaseOwnership0_71" (defined at: ./index.rsh:81:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'tok amt check',
    who: 'purchaseOwnership',
  })
  stdlib.assert(v1136, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
      'at ./index.rsh:49:19:application call to "runpurchaseOwnership0_71" (defined at: ./index.rsh:81:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'is open',
    who: 'purchaseOwnership',
  })
  const v1195 = stdlib.ge(v1138, v1187)
  stdlib.assert(v1195, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
      'at ./index.rsh:49:19:application call to "runpurchaseOwnership0_71" (defined at: ./index.rsh:81:12:function exp)',
      'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
    ],
    msg: 'not enough shares available to purchase',
    who: 'purchaseOwnership',
  })
  const v1202 = ['purchaseOwnership0_71', v1186]

  const txn1 = await ctc.sendrecv({
    args: [
      v1102,
      v1111,
      v1136,
      v1137,
      v1138,
      v1139,
      v1140,
      v1143,
      v1156,
      v1157,
      v1202,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v1189, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)

      const {
        data: [v1228],
        secs: v1230,
        time: v1229,
        didSend: v869,
        from: v1227,
      } = txn1

      switch (v1228[0]) {
        case 'openToPublic0_71': {
          const v1231 = v1228[1]

          break
        }
        case 'purchaseOwnership0_71': {
          const v1328 = v1228[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'purchaseOwnership',
          })
          const v1346 =
            v1328[
              stdlib.checkedBigNumberify(
                './index.rsh:81:12:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1347 = stdlib.safeMul(v1137, v1346)
          sim_r.txns.push({
            amt: v1347,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          const v1403 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v1227),
            null,
          )
          const v1404 = stdlib.fromSome(
            v1403,
            stdlib.checkedBigNumberify(
              './index.rsh:92:51:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v1405 = stdlib.safeAdd(v1404, v1346)
          await stdlib.simMapSet(sim_r, 0, v1227, v1405)
          const v1411 = stdlib.sub(v1157, v1346)
          const v1413 = stdlib.Array_set(v1156, '0', v1411)
          const v1414 = stdlib.Array_set(
            v1143,
            stdlib.checkedBigNumberify(
              './index.rsh:93:55:application',
              stdlib.UInt_max,
              '0',
            ),
            v1413,
          )
          sim_r.txns.push({
            kind: 'from',
            to: v1227,
            tok: v1111,
          })
          const v1415 = null
          const v1416 = await txn1.getOutput(
            'purchaseOwnership',
            'v1415',
            ctc0,
            v1415,
          )

          const v1422 = stdlib.safeSub(v1138, v1346)
          const v1423 = stdlib.safeAdd(v1139, v1347)
          const v1785 = true
          const v1786 = v1137
          const v1787 = v1422
          const v1788 = v1423
          const v1789 = v1140
          const v1791 = v1414
          const v1792 =
            v1414[
              stdlib.checkedBigNumberify(
                './index.rsh:52:36:application',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1793 =
            v1792[
              stdlib.checkedBigNumberify(
                './index.rsh:52:36:application',
                stdlib.UInt_max,
                '0',
              )
            ]
          sim_r.isHalt = false

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc7, ctc6, ctc1, ctc10],
    waitIfNotPresent: false,
  })
  const {
    data: [v1228],
    secs: v1230,
    time: v1229,
    didSend: v869,
    from: v1227,
  } = txn1
  switch (v1228[0]) {
    case 'openToPublic0_71': {
      const v1231 = v1228[1]
      return
      break
    }
    case 'purchaseOwnership0_71': {
      const v1328 = v1228[1]
      undefined /* setApiDetails */
      const v1346 =
        v1328[
          stdlib.checkedBigNumberify(
            './index.rsh:81:12:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1347 = stdlib.safeMul(v1137, v1346)
      const v1350 = stdlib.ge(v1157, v1346)
      stdlib.assert(v1350, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
        ],
        msg: 'tok amt check',
        who: 'purchaseOwnership',
      })
      stdlib.assert(v1136, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
        ],
        msg: 'is open',
        who: 'purchaseOwnership',
      })
      const v1353 = stdlib.ge(v1138, v1346)
      stdlib.assert(v1353, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:81:50:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:81:50:function exp)',
          'at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)',
        ],
        msg: 'not enough shares available to purchase',
        who: 'purchaseOwnership',
      })
      const v1403 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v1227),
        null,
      )
      const v1404 = stdlib.fromSome(
        v1403,
        stdlib.checkedBigNumberify(
          './index.rsh:92:51:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v1405 = stdlib.safeAdd(v1404, v1346)
      await stdlib.mapSet(map0, v1227, v1405)
      const v1411 = stdlib.sub(v1157, v1346)
      const v1413 = stdlib.Array_set(v1156, '0', v1411)
      const v1414 = stdlib.Array_set(
        v1143,
        stdlib.checkedBigNumberify(
          './index.rsh:93:55:application',
          stdlib.UInt_max,
          '0',
        ),
        v1413,
      )
      const v1415 = null
      const v1416 = await txn1.getOutput(
        'purchaseOwnership',
        'v1415',
        ctc0,
        v1415,
      )
      if (v869) {
        stdlib.protect(ctc0, await interact.out(v1328, v1416), {
          at: './index.rsh:81:13:application',
          fs: [
            'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)',
            'at ./index.rsh:94:19:application call to "notify" (defined at: ./index.rsh:91:18:function exp)',
            'at ./index.rsh:91:18:application call to [unknown function] (defined at: ./index.rsh:91:18:function exp)',
          ],
          msg: 'out',
          who: 'purchaseOwnership',
        })
      } else {
      }

      const v1422 = stdlib.safeSub(v1138, v1346)
      const v1423 = stdlib.safeAdd(v1139, v1347)
      const v1785 = true
      const v1786 = v1137
      const v1787 = v1422
      const v1788 = v1423
      const v1789 = v1140
      const v1791 = v1414
      const v1792 =
        v1414[
          stdlib.checkedBigNumberify(
            './index.rsh:52:36:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1793 =
        v1792[
          stdlib.checkedBigNumberify(
            './index.rsh:52:36:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      return

      break
    }
  }
}
export async function openToPublic(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for openToPublic expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for openToPublic expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 3) {
    return _openToPublic3(ctcTop, interact)
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step),
  )
}
export async function purchaseOwnership(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for purchaseOwnership expects to receive a contract as its first argument.`,
      ),
    )
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for purchaseOwnership expects to receive an interact object as its second argument.`,
      ),
    )
  }
  const ctc = ctcTop._initialize()
  const stdlib = ctc.stdlib
  const step = await ctc.getCurrentStep()
  if (step == 3) {
    return _purchaseOwnership3(ctcTop, interact)
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
      `openToPublic(uint64,uint64)byte[0]`,
      `purchaseOwnership(uint64)byte[0]`,
    ],
    pure: [
      `checkOwnership(address)uint64`,
      `creator()address`,
      `isOpenToPublic()byte`,
      `ownershipTokId()uint64`,
      `pricePerUnit()uint64`,
      `toksAvailable()uint64`,
      `totalPaid()uint64`,
      `totalTokenAllocation()uint64`,
      `totalValue()uint64`,
    ],
    sigs: [
      `checkOwnership(address)uint64`,
      `creator()address`,
      `isOpenToPublic()byte`,
      `openToPublic(uint64,uint64)byte[0]`,
      `ownershipTokId()uint64`,
      `pricePerUnit()uint64`,
      `purchaseOwnership(uint64)byte[0]`,
      `toksAvailable()uint64`,
      `totalPaid()uint64`,
      `totalTokenAllocation()uint64`,
      `totalValue()uint64`,
    ],
  },
  appApproval: `ByASAAEDCAIJhceatAjYo66IDJbhm8QMnd3Eig2Vpt7dCriyid4KssGWuALswd78BeKDt48Gp4WZzQEEoI0GJgQBAAAIAAAAAACYloABASI1ADEYQQRIKWRJIls1ASVbNQIxGSMSQQAKMQAoIQWvZkIEFTYaABdJQQE/IjUEIzUGSSEGDEAAm0khBwxAAFBJIQgMQAAzSSEJDEAAFiEJEkQ0ASQSRChkSTUDVykINQdCA+QhCBJENAEkEkQoZEk1A1drCDUHQgPOIQcSRDQBJBJEKGRJNQNXQQg1B0IDuEkhCgxAAClJIQsMQAAPIQsSRDQBJBJEKjUHQgObIQoSRDYaATX/KzT/UCWvUEIAwyEGEkQ2GgE2GgJQNf8oNP9QQgCvSSEMDEAAWkkhDQxAAD1JIQ4MQAAgIQ4SRDQBJBJEIjYaAYgDdUk1/yNbNP8iVU0WNQdCAz8hDRJENAEkEkQoZEk1A1cgCDUHQgMpIQwSRDQBJBJEKGRJNQNXOQg1B0IDE0khDwxAABYhDxJENAEkEkQoZEk1A1cAIDUHQgL2gbTbxjcSRDQBJBJEKGRJNQNXKAE1B0IC3TYaAhc1BDYaAzYaARdJIQQMQAFgIQQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSkpJVwAgNf+BIFs1/lcoARc1/YEpWzX8gTFbNfuBOVs1+ldJETX5V1oRNfiBa1s190k1BTX2gASKiizcNPZQsDT2IlVAAHE09lcBEDX1NPUiWzX0MQA0/xJENP0URDT3NPQPRDT0Ig1ENPUlWzXzsSKyATT0shIhELIQNP+yFDT+shGzgAgAAAAAAAAFBLApNQc0/zT+IzTzNPsKNPs09Ak0+jTzMgY0+TT4NPc09AkWXABcAEIBVzT2VwEINfU09Rc19DT8NPQLNfM09zT0D0Q0/UQ0+zT0D0Q084gCBDEAKCsiMQCIAetJNfIjWzTyIlVNNPQIFlBmsSKyATT0shIhELIQMQCyFDT+shGzgAgAAAAAAAAFh7ApNQc0/zT+IzT8NPs09Ak0+jTzCDQDgUFbMgY0+TT4NPc09AkWXABcAEIAyiISRCERiAGWIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBEa81/yERiAF1sSKyASSyEIGAreIEsiIisiOACERJUkFEAAAAsiWAIERpcmFkaWNhbCBNdXNpYyBPd25lcnNoaXAAAAAAAAAAsiaBYK+yJzIDsigyCrIps7Q8Nf6ACAAAAAAAAARWNP4WULA0/jX9NP9JVwARKlwAXABJNfxJVwARKlwIXABJNftJVwARKFwQXAA1+jEANP0iIjT6VwARIlsiIjIGNPpCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/1cAEUk19iJbNfU09zT4FlA0+RZRBwhQNPoWUDT7FlA0/BZQNP0WUDT/UDT2UDT1FlAoSwFXAHNnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 115,
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T14",
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
                    "internalType": "struct T12",
                    "name": "_openToPublic0_71",
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
                    "internalType": "struct T13",
                    "name": "_purchaseOwnership0_71",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v1228",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1110",
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
    "name": "_reach_oe_v1284",
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
    "name": "_reach_oe_v1415",
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
                    "internalType": "enum _enum_T14",
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
                    "internalType": "struct T12",
                    "name": "_openToPublic0_71",
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
                    "internalType": "struct T13",
                    "name": "_purchaseOwnership0_71",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v1228",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1796",
        "type": "address"
      }
    ],
    "name": "checkOwnership",
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
    "inputs": [],
    "name": "isOpenToPublic",
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
    "name": "openToPublic",
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
    "name": "ownershipTokId",
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
    "inputs": [],
    "name": "pricePerUnit",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "purchaseOwnership",
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
    "name": "toksAvailable",
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
    "name": "totalPaid",
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
    "name": "totalTokenAllocation",
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
    "name": "totalValue",
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
  Bytecode: `0x6080604052604051620039d9380380620039d98339810160408190526200002691620007b5565b60008055436003556200003862000516565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000af3415601062000394565b7f44697261646963616c204d75736963204f776e65727368697000000000000000604082810191825264111254905160da1b6060840152608083018051600090819052815160209081018290529151830181905260a085015291518151928301520160408051601f198184030181529082905260608301516001600160c01b03191660208301529060280160408051808303601f1901815282825260808581015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a086015160208401529101604051602081830303815290604052629896806000604051620001b090620005c0565b620001c19695949392919062000886565b604051809103906000f080158015620001de573d6000803e3d6000fd5b506001600160a01b031660c0820181905260e082018190526040519081527faafe901b3213baaf5baaad0d3dd01e8cae72ef37a2eb21934cd84c550441d8f09060200160405180910390a16200029d816020015160006040518060600160405280629896808152602001856020015160006001811062000262576200026262000820565b602002015160200151815260200185602001516000600181106200028a576200028a62000820565b60200201516040015115159052620003be565b6101008201818152604080516060810182528251515181526298968060208201529151620002d69392600092909190820190836200028a565b6101208201818152604080516060810182528251515181529151516020908101519083015260009082018190526200030f9291620003be565b6101408201526200031f620005ce565b805133905260e082015181516001600160a01b0390911660209182015280820180516000908190528151909201829052610140840180515151825160400152815160600183905281516080019290925280514360a0909101529051905160c001526200038b8162000441565b50505062000a5b565b81620003ba5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003c8620005f9565b60005b60018110156200041e57848160018110620003ea57620003ea62000820565b602002015182826001811062000404576200040462000820565b6020020152806200041581620008f1565b915050620003cb565b508181846001811062000435576200043562000820565b60200201529392505050565b6200044b62000646565b8151516001600160a01b03908116825282516020908101519091168183015280830180515115156040808501919091528151830151606080860191909152825182015160808087019190915283519091015160a08601528251015160c080860191909152825181015160e0860152825181015151610100860152915190910151515161012084015260036000554360015551620004eb9183910162000968565b6040516020818303038152906040526002908051906020019062000511929190620006ce565b505050565b604080516101c081019091526000610160820181815261018083018290526101a08301919091528152602081016200054d620005f9565b8152600060208083018290526040808401839052805160608082018352848252928101849052908101839052908301526080820181905260a0820181905260c082015260e0016200059d620005f9565b8152602001620005ac620005f9565b8152602001620005bb620005f9565b905290565b611087806200295283390190565b604080516080810182526000918101828152606082019290925290815260208101620005bb6200075d565b60405180602001604052806001905b6200062f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006085790505090565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001620006a1620005f9565b81526040805160608101825260008082526020828101829052928201529101908152602001600081525090565b828054620006dc9062000a1e565b90600052602060002090601f0160209004810192826200070057600085556200074b565b82601f106200071b57805160ff19168380011785556200074b565b828001600101855582156200074b579182015b828111156200074b5782518255916020019190600101906200072e565b50620007599291506200079e565b5090565b6040518060e001604052806000151581526020016000815260200160008152602001600081526020016000815260200160008152602001620005bb620005f9565b5b808211156200075957600081556001016200079f565b600060408284031215620007c857600080fd5b604080519081016001600160401b0381118282101715620007f957634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200081457600080fd5b60208201529392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156200085e5760208185018101518683018201520162000840565b8181111562000871576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200089b60c083018962000836565b8281036020840152620008af818962000836565b90508281036040840152620008c5818862000836565b90508281036060840152620008db818762000836565b6080840195909552505060a00152949350505050565b60006000198214156200091457634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b600181101562000962576200094b84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200091f565b50505050565b81516001600160a01b031681526101c0810160208301516200099560208401826001600160a01b03169052565b506040830151620009aa604084018215159052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151620009e760e08401826200091b565b5061010083015180516101408401526020810151610160840152604001511515610180830152610120909201516101a09091015290565b600181811c9082168062000a3357607f821691505b6020821081141562000a5557634e487b7160e01b600052602260045260246000fd5b50919050565b611ee78062000a6b6000396000f3fe6080604052600436106100eb5760003560e01c80638ac809f311610084578063c356065c11610056578063c356065c14610256578063d4c3eea01461026b578063e66825c314610280578063e7b0f6661461029557005b80638ac809f3146101f45780639a1e185d14610209578063a9e133ef1461021e578063ab53f2c61461023357005b80633bc5b7bf116100bd5780633bc5b7bf1461018c57806379e43a5c146101b957806383230757146101cc57806385e1c6af146101e157005b806302d05d3f146100f45780630c8b234e146101265780630f59acd8146101545780631e93b0f11461017757005b366100f257005b005b34801561010057600080fd5b506101096102aa565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013257600080fd5b50610146610141366004611832565b6102bc565b60405190815260200161011d565b61016761016236600461184f565b6102e6565b604051901515815260200161011d565b34801561018357600080fd5b50600354610146565b34801561019857600080fd5b506101ac6101a7366004611832565b6102fb565b60405161011d91906118a5565b6100f26101c73660046118d5565b610321565b3480156101d857600080fd5b50600154610146565b6101676101ef3660046118ed565b610351565b34801561020057600080fd5b5061014661035c565b34801561021557600080fd5b50610109610368565b34801561022a57600080fd5b50610146610374565b34801561023f57600080fd5b50610248610380565b60405161011d929190611932565b34801561026257600080fd5b5061016761041d565b34801561027757600080fd5b50610146610429565b34801561028c57600080fd5b50610146610435565b3480156102a157600080fd5b50610146610441565b6000806102b68161044d565b91505090565b60408051602081019091526001600160a01b03821681526000906102df81610513565b9392505050565b60006102f2838361060f565b90505b92915050565b60408051606081018252600080825260208201819052918101919091526102f58261065f565b604080518082019091526000808252602082015261034d61034736849003840184611a15565b82610731565b5050565b60006102f582610c3e565b6000806102b681610c88565b6000806102b681610d4d565b6000806102b681610e06565b60006060600054600280805461039590611ada565b80601f01602080910402602001604051908101604052809291908181526020018280546103c190611ada565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b50505050509050915091509091565b6000806102b681610ecb565b6000806102b681610f84565b6000806102b681611048565b6000806102b68161110c565b6000600360005414156105025760006002805461046990611ada565b80601f016020809104026020016040519081016040528092919081815260200182805461049590611ada565b80156104e25780601f106104b7576101008083540402835291602001916104e2565b820191906000526020600020905b8154815290600101906020018083116104c557829003601f168201915b50505050508060200190518101906104fa9190611bc6565b519392505050565b61050e600060086111cc565b919050565b6000600360005414156106035760006002805461052f90611ada565b80601f016020809104026020016040519081016040528092919081815260200182805461055b90611ada565b80156105a85780601f1061057d576101008083540402835291602001916105a8565b820191906000526020600020905b81548152906001019060200180831161058b57829003601f168201915b50505050508060200190518101906105c09190611bc6565b9050600183516105cf9061065f565b5160018111156105e1576105e1611871565b146105ed5760006102df565b82516105f89061065f565b604001519392505050565b61050e600060076111cc565b6000610619611597565b6020818101805151600090819052815151830151879052905151820151820185905260408051808201909152818152918201526106568282610731565b51949350505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156106ab576106ab611871565b1415610722576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156106ec576106ec611871565b60018111156106fd576106fd611871565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610741600360005414601a6111cc565b815161075c90158061075557508251600154145b601b6111cc565b60008080556002805461076e90611ada565b80601f016020809104026020016040519081016040528092919081815260200182805461079a90611ada565b80156107e75780601f106107bc576101008083540402835291602001916107e7565b820191906000526020600020905b8154815290600101906020018083116107ca57829003601f168201915b50505050508060200190518101906107ff9190611bc6565b90506108096115b6565b7fd66aab9a333b0c80bb8fa17727e0727cfa4d4b15bc8bb45ddeb6838d20cd8e5b338560405161083a929190611c70565b60405180910390a1600060208501515151600181111561085c5761085c611871565b1415610a175760208481015151015181528151610885906001600160a01b0316331460116111cc565b6108a2826040015161089857600161089b565b60005b60126111cc565b8051516101208301516108b891111560136111cc565b8051516108c890151560146111cc565b6108d4341560156111cc565b602082015182518251516108e99291906111f2565b604051600081527f29a4f646da315e0562149262bbfaad2c69c2b0ec175cdb99d24a6e6a0ec9e2a49060200160405180910390a1600083526109296115f2565b825181516001600160a01b03918216905260208085015183519216918101919091528082015160019052825101516080840151610966919061120b565b602080830151015260808301518251516109809190611252565b6020828101805160409081019390935260a086810151825160609081019190915286519093015182516080015290514391015260e085015182519182019092526101208501518451516109ff939260009290918291035b81526020018761010001516020015181526020018761010001516040015115158152506112a1565b602082015160c00152610a1181611315565b50610c38565b6001602085015151516001811115610a3157610a31611871565b1415610c3857602080850151516040015190820181905260608301519051610a5991906113df565b6040820152602081015151610120830151610a7791111560166111cc565b610a86826040015160176111cc565b610aa08160200151600001518360800151101560186111cc565b610ab18160400151341460196111cc565b336000818152600460205260409020805460ff19166001908117909155610b1291610adb9061065f565b516001811115610aed57610aed611871565b14610af9576000610b07565b610b023361065f565b604001515b60208301515161143e565b33600081815260046020908152604090912060010192909255838201519183015151610b3f9291906111f2565b604051600081527fd57d7da1da1cc93c55e33a6c84eaeec202867b4e2921d9c5ba7d9b01fc2676449060200160405180910390a160006020840152610b826115f2565b825181516001600160a01b03918216905260208085015183519216918101919091528082018051600190526060850151905182015260808401519083015151610bcb9190611252565b81602001516040018181525050610bea8360a00151836040015161143e565b6020828101805160609081019390935260c0860151815160800152514360a09091015260e085015160408051938401905261012086015191850151516109ff939192600092918291036109d7565b50505050565b6000610c48611597565b60208181018051516001905251516040908101518590528051808201909152600080825291810191909152610c7d8282610731565b602001519392505050565b600060036000541415610d4157600060028054610ca490611ada565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd090611ada565b8015610d1d5780601f10610cf257610100808354040283529160200191610d1d565b820191906000526020600020905b815481529060010190602001808311610d0057829003601f168201915b5050505050806020019051810190610d359190611bc6565b61012001519392505050565b61050e6000600c6111cc565b600060036000541415610dfa57600060028054610d6990611ada565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9590611ada565b8015610de25780601f10610db757610100808354040283529160200191610de2565b820191906000526020600020905b815481529060010190602001808311610dc557829003601f168201915b5050505050806020019051810190610c7d9190611bc6565b61050e6000600a6111cc565b600060036000541415610ebf57600060028054610e2290611ada565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4e90611ada565b8015610e9b5780601f10610e7057610100808354040283529160200191610e9b565b820191906000526020600020905b815481529060010190602001808311610e7e57829003601f168201915b5050505050806020019051810190610eb39190611bc6565b50629896809392505050565b61050e6000600e6111cc565b600060036000541415610f7857600060028054610ee790611ada565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1390611ada565b8015610f605780601f10610f3557610100808354040283529160200191610f60565b820191906000526020600020905b815481529060010190602001808311610f4357829003601f168201915b50505050508060200190518101906105f89190611bc6565b61050e600060096111cc565b60006003600054141561103c57600060028054610fa090611ada565b80601f0160208091040260200160405190810160405280929190818152602001828054610fcc90611ada565b80156110195780601f10610fee57610100808354040283529160200191611019565b820191906000526020600020905b815481529060010190602001808311610ffc57829003601f168201915b50505050508060200190518101906110319190611bc6565b60c001519392505050565b61050e6000600f6111cc565b6000600360005414156111005760006002805461106490611ada565b80601f016020809104026020016040519081016040528092919081815260200182805461109090611ada565b80156110dd5780601f106110b2576101008083540402835291602001916110dd565b820191906000526020600020905b8154815290600101906020018083116110c057829003601f168201915b50505050508060200190518101906110f59190611bc6565b606001519392505050565b61050e6000600b6111cc565b6000600360005414156111c45760006002805461112890611ada565b80601f016020809104026020016040519081016040528092919081815260200182805461115490611ada565b80156111a15780601f10611176576101008083540402835291602001916111a1565b820191906000526020600020905b81548152906001019060200180831161118457829003601f168201915b50505050508060200190518101906111b99190611bc6565b60a001519392505050565b61050e6000600d5b8161034d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6111fd83838361148b565b61120657600080fd5b505050565b6000816112485760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016111e9565b6102f28284611ce3565b60008261125f8382611d05565b91508111156102f55760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016111e9565b6112a961161b565b60005b60018110156112f5578481600181106112c7576112c7611d1c565b60200201518282600181106112de576112de611d1c565b6020020152806112ed81611d32565b9150506112ac565b508181846001811061130957611309611d1c565b60200201529392505050565b61131d611666565b8151516001600160a01b03908116825282516020908101519091168183015280830180515115156040808501919091528151830151606080860191909152825182015160808087019190915283519091015160a08601528251015160c080860191909152825181015160e08601528251810151516101008601529151909101515151610120840152600360005543600155516113bb91839101611d91565b604051602081830303815290604052600290805190602001906112069291906116e4565b6000811580611403575082826113f58183611e43565b92506114019083611ce3565b145b6102f55760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111e9565b60008261144b8382611e62565b91508110156102f55760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111e9565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916114ea91611e7a565b60006040518083038185875af1925050503d8060008114611527576040519150601f19603f3d011682016040523d82523d6000602084013e61152c565b606091505b509150915061153d8282600261155c565b50808060200190518101906115529190611e96565b9695505050505050565b6060831561156b5750816102df565b82511561157b5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016111e9565b6040518060400160405280600081526020016115b1611768565b905290565b6040805160a0810182526000606082018181526080830182905282528251602081810190945290815290918201905b8152602001600081525090565b6040805160808101825260009181018281526060820192909252908152602081016115b161177b565b60405180602001604052806001905b611650604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161162a5790505090565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016116bf61161b565b81526040805160608101825260008082526020828101829052928201529101906115e5565b8280546116f090611ada565b90600052602060002090601f0160209004810192826117125760008555611758565b82601f1061172b57805160ff1916838001178555611758565b82800160010185558215611758579182015b8281111561175857825182559160200191906001019061173d565b506117649291506117ba565b5090565b60405180602001604052806115b16117cf565b6040518060e0016040528060001515815260200160008152602001600081526020016000815260200160008152602001600081526020016115b161161b565b5b8082111561176457600081556001016117bb565b604080516060810190915280600081526020016117ff604051806040016040528060008152602001600081525090565b81526020016115b16040518060200160405280600081525090565b6001600160a01b038116811461182f57600080fd5b50565b60006020828403121561184457600080fd5b81356102df8161181a565b6000806040838503121561186257600080fd5b50508035926020909101359150565b634e487b7160e01b600052602160045260246000fd5b6002811061182f57634e487b7160e01b600052602160045260246000fd5b815160608201906118b581611887565b808352506020830151151560208301526040830151604083015292915050565b600060a082840312156118e757600080fd5b50919050565b6000602082840312156118ff57600080fd5b5035919050565b60005b83811015611921578181015183820152602001611909565b83811115610c385750506000910152565b8281526040602082015260008251806040840152611957816060850160208701611906565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156119a5576119a561196c565b60405290565b6040516020810167ffffffffffffffff811182821017156119a5576119a561196c565b6040516060810167ffffffffffffffff811182821017156119a5576119a561196c565b604051610140810167ffffffffffffffff811182821017156119a5576119a561196c565b600081830360a0811215611a2857600080fd5b611a30611982565b833581526080601f1983011215611a4657600080fd5b611a4e6119ab565b611a566119ce565b602086013560028110611a6857600080fd5b81526040603f1985011215611a7c57600080fd5b611a84611982565b6040870135815260608701356020820152806020830152506020607f1985011215611aae57600080fd5b611ab66119ab565b60809690960135865260408101959095529384526020810193909352509092915050565b600181811c90821680611aee57607f821691505b602082108114156118e757634e487b7160e01b600052602260045260246000fd5b805161050e8161181a565b8051801515811461050e57600080fd5b600060608284031215611b3c57600080fd5b611b446119ce565b90508151815260208201516020820152611b6060408301611b1a565b604082015292915050565b600082601f830112611b7c57600080fd5b611b846119ab565b80606080850186811115611b9757600080fd5b855b81811015611bba57611bab8882611b2a565b85526020909401938201611b99565b50919695505050505050565b60006101c08284031215611bd957600080fd5b611be16119f1565b611bea83611b0f565b8152611bf860208401611b0f565b6020820152611c0960408401611b1a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152611c438460e08501611b6b565b60e0820152611c56846101408501611b2a565b6101008201526101a0929092015161012083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160c083019190611c9c81611887565b80604085015250602081015180516060850152602081015160808501525060408101515160a0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082611d0057634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611d1757611d17611ccd565b500390565b634e487b7160e01b600052603260045260246000fd5b6000600019821415611d4657611d46611ccd565b5060010190565b8060005b6001811015610c3857611d7b84835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101611d51565b81516001600160a01b031681526101c081016020830151611dbd60208401826001600160a01b03169052565b506040830151611dd1604084018215159052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611e0c60e0840182611d4d565b5061010083015180516101408401526020810151610160840152604001511515610180830152610120909201516101a09091015290565b6000816000190483118215151615611e5d57611e5d611ccd565b500290565b60008219821115611e7557611e75611ccd565b500190565b60008251611e8c818460208701611906565b9190910192915050565b600060208284031215611ea857600080fd5b6102f282611b1a56fea26469706673582212207ade6efa48426620ab019926f4680e3911f7d2bac369958eb6b5fe19ed94283c64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212204bc853966dc3a181afd69ac81c91096e92a170920d6b78e7283d2e5c53f619ff64736f6c634300080c0033`,
  BytecodeLen: 14809,
  Which: `oD`,
  version: 8,
  views: {
    checkOwnership: `checkOwnership`,
    creator: `creator`,
    isOpenToPublic: `isOpenToPublic`,
    ownershipTokId: `ownershipTokId`,
    pricePerUnit: `pricePerUnit`,
    toksAvailable: `toksAvailable`,
    totalPaid: `totalPaid`,
    totalTokenAllocation: `totalTokenAllocation`,
    totalValue: `totalValue`,
  },
}
export const _stateSourceMap = {
  2: {
    at: './index.rsh:106:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:49:19:after expr stmt semicolon',
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
  openToPublic: openToPublic,
  purchaseOwnership: purchaseOwnership,
}
export const _APIs = {
  openToPublic: openToPublic,
  purchaseOwnership: purchaseOwnership,
}
