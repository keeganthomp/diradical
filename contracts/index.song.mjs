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
  const ctc2 = stdlib.T_UInt
  const ctc3 = stdlib.T_Bool
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3])
  const ctc5 = stdlib.T_Array(
    ctc4,
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
  )
  const ctc6 = stdlib.T_Null
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2,
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async (_v1132) => {
        const v1132 = stdlib.protect(ctc0, _v1132, null)

        const v1133 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v1132),
          null,
        )
        const v1134 = stdlib.fromSome(
          v1133,
          stdlib.checkedBigNumberify(
            './index.rsh:47:55:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )

        return v1134
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1103
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  const _creatorTokenAllocation = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
      )
    ) {
      const [
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1137
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1138
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1112
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1139
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1159
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1141
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
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
        v1103,
        v1112,
        v1137,
        v1138,
        v1139,
        v1140,
        v1141,
        v1142,
        v1145,
        v1158,
        v1159,
      ] = svs
      return await (async () => {
        return v1142
      })(...args)
    }

    stdlib.assert(false, 'illegal view')
  }
  return {
    infos: {
      checkOwnership: {
        decode: _checkOwnership,
        dom: [ctc0],
        rng: ctc2,
      },
      creator: {
        decode: _creator,
        dom: [],
        rng: ctc0,
      },
      creatorTokenAllocation: {
        decode: _creatorTokenAllocation,
        dom: [],
        rng: ctc2,
      },
      isOpenToPublic: {
        decode: _isOpenToPublic,
        dom: [],
        rng: ctc3,
      },
      ownershipTokId: {
        decode: _ownershipTokId,
        dom: [],
        rng: ctc1,
      },
      pricePerUnit: {
        decode: _pricePerUnit,
        dom: [],
        rng: ctc2,
      },
      toksAvailable: {
        decode: _toksAvailable,
        dom: [],
        rng: ctc2,
      },
      totalPaid: {
        decode: _totalPaid,
        dom: [],
        rng: ctc2,
      },
      totalTokenAllocation: {
        decode: _totalTokenAllocation,
        dom: [],
        rng: ctc2,
      },
      totalValue: {
        decode: _totalValue,
        dom: [],
        rng: ctc2,
      },
    },
    views: {
      3: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2],
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
    openToPublic0_72: ctc4,
    purchaseOwnership0_72: ctc5,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  })

  const v1096 = [
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    false,
  ]
  const v1097 = [v1096]
  const txn1 = await ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      './index.rsh:32:11:dot',
      stdlib.UInt_max,
      '0',
    ),
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:32:11:decimal',
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
        secs: v1105,
        time: v1104,
        didSend: v24,
        from: v1103,
      } = txn1

      const v1107 = 'Diradical Music Ownership       '
      const v1108 = 'DIRAD   '
      const v1109 = '                                                                                                '
      const v1110 = '                                '
      const v1111 = stdlib.simTokenNew(
        sim_r,
        v1107,
        v1108,
        v1109,
        v1110,
        stdlib.checkedBigNumberify(
          './index.rsh:5:24:decimal',
          stdlib.UInt_max,
          '10000000',
        ),
        stdlib.checkedBigNumberify(
          './index.rsh:41:15:decimal',
          stdlib.UInt_max,
          '0',
        ),
        getSimTokCtr(),
      )
      const v1112 = await txn1.getOutput('internal', 'v1111', ctc3, v1111)
      const v1122 =
        v1097[
          stdlib.checkedBigNumberify(
            './index.rsh:37:35:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1123 = stdlib.Array_set(
        v1122,
        '0',
        stdlib.checkedBigNumberify(
          './index.rsh:5:24:decimal',
          stdlib.UInt_max,
          '10000000',
        ),
      )
      const v1124 = stdlib.Array_set(
        v1097,
        stdlib.checkedBigNumberify(
          './index.rsh:37:35:application',
          stdlib.UInt_max,
          '0',
        ),
        v1123,
      )
      const v1126 =
        v1124[
          stdlib.checkedBigNumberify(
            './index.rsh:37:35:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1127 = stdlib.Array_set(
        v1126,
        '1',
        stdlib.checkedBigNumberify(
          './index.rsh:5:24:decimal',
          stdlib.UInt_max,
          '10000000',
        ),
      )
      const v1128 = stdlib.Array_set(
        v1124,
        stdlib.checkedBigNumberify(
          './index.rsh:37:35:application',
          stdlib.UInt_max,
          '0',
        ),
        v1127,
      )
      const v1129 =
        v1128[
          stdlib.checkedBigNumberify(
            './index.rsh:37:35:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1130 = stdlib.Array_set(v1129, '2', false)
      const v1131 = stdlib.Array_set(
        v1128,
        stdlib.checkedBigNumberify(
          './index.rsh:37:35:application',
          stdlib.UInt_max,
          '0',
        ),
        v1130,
      )
      const v1135 =
        v1131[
          stdlib.checkedBigNumberify(
            './index.rsh:56:30:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1136 =
        v1135[
          stdlib.checkedBigNumberify(
            './index.rsh:56:30:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1137 = stdlib.checkedBigNumberify(
        './index.rsh:56:64:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v1138 = false
      const v1139 = stdlib.checkedBigNumberify(
        './index.rsh:56:61:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v1140 = v1136
      const v1141 = stdlib.checkedBigNumberify(
        './index.rsh:56:51:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v1142 = stdlib.checkedBigNumberify(
        './index.rsh:56:48:decimal',
        stdlib.UInt_max,
        '0',
      )
      const v1143 = v1104
      const v1145 = v1131

      if (
        await (async () => {
          return true
        })()
      ) {
        const v1158 =
          v1145[
            stdlib.checkedBigNumberify(
              './index.rsh:59:34:application',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v1159 =
          v1158[
            stdlib.checkedBigNumberify(
              './index.rsh:59:34:application',
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
    secs: v1105,
    time: v1104,
    didSend: v24,
    from: v1103,
  } = txn1
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:33:25:application',
    fs: [
      'at ./index.rsh:33:25:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)',
      'at ./index.rsh:33:25:application call to "liftedInteract" (defined at: ./index.rsh:33:25:application)',
    ],
    msg: 'ready',
    who: 'Creator',
  })

  const v1107 = 'Diradical Music Ownership       '
  const v1108 = 'DIRAD   '
  const v1109 = '                                                                                                '
  const v1110 = '                                '
  const v1111 = undefined /* TokenNew */
  const v1112 = await txn1.getOutput('internal', 'v1111', ctc3, v1111)
  const v1122 =
    v1097[
      stdlib.checkedBigNumberify(
        './index.rsh:37:35:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1123 = stdlib.Array_set(
    v1122,
    '0',
    stdlib.checkedBigNumberify(
      './index.rsh:5:24:decimal',
      stdlib.UInt_max,
      '10000000',
    ),
  )
  const v1124 = stdlib.Array_set(
    v1097,
    stdlib.checkedBigNumberify(
      './index.rsh:37:35:application',
      stdlib.UInt_max,
      '0',
    ),
    v1123,
  )
  const v1126 =
    v1124[
      stdlib.checkedBigNumberify(
        './index.rsh:37:35:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1127 = stdlib.Array_set(
    v1126,
    '1',
    stdlib.checkedBigNumberify(
      './index.rsh:5:24:decimal',
      stdlib.UInt_max,
      '10000000',
    ),
  )
  const v1128 = stdlib.Array_set(
    v1124,
    stdlib.checkedBigNumberify(
      './index.rsh:37:35:application',
      stdlib.UInt_max,
      '0',
    ),
    v1127,
  )
  const v1129 =
    v1128[
      stdlib.checkedBigNumberify(
        './index.rsh:37:35:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1130 = stdlib.Array_set(v1129, '2', false)
  const v1131 = stdlib.Array_set(
    v1128,
    stdlib.checkedBigNumberify(
      './index.rsh:37:35:application',
      stdlib.UInt_max,
      '0',
    ),
    v1130,
  )
  const v1135 =
    v1131[
      stdlib.checkedBigNumberify(
        './index.rsh:56:30:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1136 =
    v1135[
      stdlib.checkedBigNumberify(
        './index.rsh:56:30:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  let v1137 = stdlib.checkedBigNumberify(
    './index.rsh:56:64:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v1138 = false
  let v1139 = stdlib.checkedBigNumberify(
    './index.rsh:56:61:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v1140 = v1136
  let v1141 = stdlib.checkedBigNumberify(
    './index.rsh:56:51:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v1142 = stdlib.checkedBigNumberify(
    './index.rsh:56:48:decimal',
    stdlib.UInt_max,
    '0',
  )
  let v1143 = v1104
  let v1145 = v1131

  let txn2 = txn1
  while (
    await (async () => {
      return true
    })()
  ) {
    const v1158 =
      v1145[
        stdlib.checkedBigNumberify(
          './index.rsh:59:34:application',
          stdlib.UInt_max,
          '0',
        )
      ]
    const v1159 =
      v1158[
        stdlib.checkedBigNumberify(
          './index.rsh:59:34:application',
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
      data: [v1230],
      secs: v1232,
      time: v1231,
      didSend: v870,
      from: v1229,
    } = txn3
    switch (v1230[0]) {
      case 'openToPublic0_72': {
        const v1233 = v1230[1]
        undefined /* setApiDetails */
        const v1238 =
          v1233[
            stdlib.checkedBigNumberify(
              './index.rsh:68:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v1240 = stdlib.addressEq(v1229, v1103)
        stdlib.assert(v1240, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
          ],
          msg: 'is creator',
          who: 'Creator',
        })
        const v1242 = v1138 ? false : true
        stdlib.assert(v1242, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
          ],
          msg: 'already opened to public',
          who: 'Creator',
        })
        const v1246 = stdlib.ge(v1159, v1238)
        stdlib.assert(v1246, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:72:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
          ],
          msg: 'tok amt check',
          who: 'Creator',
        })
        const v1248 = stdlib.gt(
          v1238,
          stdlib.checkedBigNumberify(
            './index.rsh:73:30:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        stdlib.assert(v1248, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
          ],
          msg: null,
          who: 'Creator',
        })
        const v1264 =
          v1233[
            stdlib.checkedBigNumberify(
              './index.rsh:68:10:spread',
              stdlib.UInt_max,
              '1',
            )
          ]
        const v1282 = stdlib.sub(v1159, v1238)
        const v1284 = stdlib.Array_set(v1158, '0', v1282)
        const v1285 = stdlib.Array_set(
          v1145,
          stdlib.checkedBigNumberify(
            './index.rsh:77:54:application',
            stdlib.UInt_max,
            '0',
          ),
          v1284,
        )
        const v1286 = null
        await txn3.getOutput('openToPublic', 'v1286', ctc0, v1286)
        const v1294 = stdlib.safeSub(v1140, v1238)
        const v1295 = stdlib.safeDiv(v1264, v1140)
        const cv1137 = v1238
        const cv1138 = true
        const cv1139 = v1295
        const cv1140 = v1294
        const cv1141 = v1141
        const cv1142 = v1264
        const cv1143 = v1231
        const cv1145 = v1285

        v1137 = cv1137
        v1138 = cv1138
        v1139 = cv1139
        v1140 = cv1140
        v1141 = cv1141
        v1142 = cv1142
        v1143 = cv1143
        v1145 = cv1145

        txn2 = txn3
        continue
        break
      }
      case 'purchaseOwnership0_72': {
        const v1330 = v1230[1]
        undefined /* setApiDetails */
        const v1348 =
          v1330[
            stdlib.checkedBigNumberify(
              './index.rsh:90:10:spread',
              stdlib.UInt_max,
              '0',
            )
          ]
        const v1349 = stdlib.safeMul(v1139, v1348)
        const v1352 = stdlib.ge(v1159, v1348)
        stdlib.assert(v1352, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
          ],
          msg: 'tok amt check',
          who: 'Creator',
        })
        stdlib.assert(v1138, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:93:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
          ],
          msg: 'is open',
          who: 'Creator',
        })
        const v1355 = stdlib.ge(v1140, v1348)
        stdlib.assert(v1355, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:94:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
            'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
          ],
          msg: 'not enough shares available to purchase',
          who: 'Creator',
        })
        const v1405 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, v1229),
          null,
        )
        const v1406 = stdlib.fromSome(
          v1405,
          stdlib.checkedBigNumberify(
            './index.rsh:101:49:decimal',
            stdlib.UInt_max,
            '0',
          ),
        )
        const v1407 = stdlib.safeAdd(v1406, v1348)
        await stdlib.mapSet(map0, v1229, v1407)
        const v1413 = stdlib.sub(v1159, v1348)
        const v1415 = stdlib.Array_set(v1158, '0', v1413)
        const v1416 = stdlib.Array_set(
          v1145,
          stdlib.checkedBigNumberify(
            './index.rsh:102:53:application',
            stdlib.UInt_max,
            '0',
          ),
          v1415,
        )
        const v1417 = null
        await txn3.getOutput('purchaseOwnership', 'v1417', ctc0, v1417)
        const v1424 = stdlib.safeSub(v1140, v1348)
        const v1425 = stdlib.safeAdd(v1141, v1349)
        const cv1137 = v1137
        const cv1138 = true
        const cv1139 = v1139
        const cv1140 = v1424
        const cv1141 = v1425
        const cv1142 = v1142
        const cv1143 = v1231
        const cv1145 = v1416

        v1137 = cv1137
        v1138 = cv1138
        v1139 = cv1139
        v1140 = cv1140
        v1141 = cv1141
        v1142 = cv1142
        v1143 = cv1143
        v1145 = cv1145

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
    openToPublic0_72: ctc8,
    purchaseOwnership0_72: ctc9,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const [
    v1103,
    v1112,
    v1137,
    v1138,
    v1139,
    v1140,
    v1141,
    v1142,
    v1145,
    v1158,
    v1159,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc7, ctc6, ctc1],
  )
  const v1160 = ctc.selfAddress()
  const v1162 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
      'at ./index.rsh:56:21:application call to "runopenToPublic0_72" (defined at: ./index.rsh:68:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'in',
    who: 'openToPublic',
  })
  const v1163 =
    v1162[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1167 = stdlib.addressEq(v1160, v1103)
  stdlib.assert(v1167, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
      'at ./index.rsh:56:21:application call to "runopenToPublic0_72" (defined at: ./index.rsh:68:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'is creator',
    who: 'openToPublic',
  })
  const v1169 = v1138 ? false : true
  stdlib.assert(v1169, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
      'at ./index.rsh:56:21:application call to "runopenToPublic0_72" (defined at: ./index.rsh:68:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'already opened to public',
    who: 'openToPublic',
  })
  const v1173 = stdlib.ge(v1159, v1163)
  stdlib.assert(v1173, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:72:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
      'at ./index.rsh:56:21:application call to "runopenToPublic0_72" (defined at: ./index.rsh:68:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'tok amt check',
    who: 'openToPublic',
  })
  const v1175 = stdlib.gt(
    v1163,
    stdlib.checkedBigNumberify(
      './index.rsh:73:30:decimal',
      stdlib.UInt_max,
      '0',
    ),
  )
  stdlib.assert(v1175, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
      'at ./index.rsh:56:21:application call to "runopenToPublic0_72" (defined at: ./index.rsh:68:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: null,
    who: 'openToPublic',
  })
  const v1184 = ['openToPublic0_72', v1162]

  const txn1 = await ctc.sendrecv({
    args: [
      v1103,
      v1112,
      v1137,
      v1138,
      v1139,
      v1140,
      v1141,
      v1142,
      v1145,
      v1158,
      v1159,
      v1184,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [
      stdlib.checkedBigNumberify(
        './index.rsh:75:9:decimal',
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
        data: [v1230],
        secs: v1232,
        time: v1231,
        didSend: v870,
        from: v1229,
      } = txn1

      switch (v1230[0]) {
        case 'openToPublic0_72': {
          const v1233 = v1230[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'openToPublic',
          })
          const v1238 =
            v1233[
              stdlib.checkedBigNumberify(
                './index.rsh:68:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1264 =
            v1233[
              stdlib.checkedBigNumberify(
                './index.rsh:68:10:spread',
                stdlib.UInt_max,
                '1',
              )
            ]
          const v1282 = stdlib.sub(v1159, v1238)
          const v1284 = stdlib.Array_set(v1158, '0', v1282)
          const v1285 = stdlib.Array_set(
            v1145,
            stdlib.checkedBigNumberify(
              './index.rsh:77:54:application',
              stdlib.UInt_max,
              '0',
            ),
            v1284,
          )
          sim_r.txns.push({
            kind: 'from',
            to: v1103,
            tok: v1112,
          })
          const v1286 = null
          const v1287 = await txn1.getOutput(
            'openToPublic',
            'v1286',
            ctc0,
            v1286,
          )

          const v1294 = stdlib.safeSub(v1140, v1238)
          const v1295 = stdlib.safeDiv(v1264, v1140)
          const v1782 = v1238
          const v1783 = true
          const v1784 = v1295
          const v1785 = v1294
          const v1786 = v1141
          const v1787 = v1264
          const v1789 = v1285
          const v1790 =
            v1285[
              stdlib.checkedBigNumberify(
                './index.rsh:59:34:application',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1791 =
            v1790[
              stdlib.checkedBigNumberify(
                './index.rsh:59:34:application',
                stdlib.UInt_max,
                '0',
              )
            ]
          sim_r.isHalt = false

          break
        }
        case 'purchaseOwnership0_72': {
          const v1330 = v1230[1]

          break
        }
      }
      return sim_r
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [
      ctc3,
      ctc4,
      ctc1,
      ctc5,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc7,
      ctc6,
      ctc1,
      ctc10,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v1230],
    secs: v1232,
    time: v1231,
    didSend: v870,
    from: v1229,
  } = txn1
  switch (v1230[0]) {
    case 'openToPublic0_72': {
      const v1233 = v1230[1]
      undefined /* setApiDetails */
      const v1238 =
        v1233[
          stdlib.checkedBigNumberify(
            './index.rsh:68:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1240 = stdlib.addressEq(v1229, v1103)
      stdlib.assert(v1240, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
        ],
        msg: 'is creator',
        who: 'openToPublic',
      })
      const v1242 = v1138 ? false : true
      stdlib.assert(v1242, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
        ],
        msg: 'already opened to public',
        who: 'openToPublic',
      })
      const v1246 = stdlib.ge(v1159, v1238)
      stdlib.assert(v1246, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:72:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
        ],
        msg: 'tok amt check',
        who: 'openToPublic',
      })
      const v1248 = stdlib.gt(
        v1238,
        stdlib.checkedBigNumberify(
          './index.rsh:73:30:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      stdlib.assert(v1248, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:68:47:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:68:47:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
        ],
        msg: null,
        who: 'openToPublic',
      })
      const v1264 =
        v1233[
          stdlib.checkedBigNumberify(
            './index.rsh:68:10:spread',
            stdlib.UInt_max,
            '1',
          )
        ]
      const v1282 = stdlib.sub(v1159, v1238)
      const v1284 = stdlib.Array_set(v1158, '0', v1282)
      const v1285 = stdlib.Array_set(
        v1145,
        stdlib.checkedBigNumberify(
          './index.rsh:77:54:application',
          stdlib.UInt_max,
          '0',
        ),
        v1284,
      )
      const v1286 = null
      const v1287 = await txn1.getOutput('openToPublic', 'v1286', ctc0, v1286)
      if (v870) {
        stdlib.protect(ctc0, await interact.out(v1233, v1287), {
          at: './index.rsh:68:11:application',
          fs: [
            'at ./index.rsh:68:11:application call to [unknown function] (defined at: ./index.rsh:68:11:function exp)',
            'at ./index.rsh:78:17:application call to "notify" (defined at: ./index.rsh:76:16:function exp)',
            'at ./index.rsh:76:16:application call to [unknown function] (defined at: ./index.rsh:76:16:function exp)',
          ],
          msg: 'out',
          who: 'openToPublic',
        })
      } else {
      }

      const v1294 = stdlib.safeSub(v1140, v1238)
      const v1295 = stdlib.safeDiv(v1264, v1140)
      const v1782 = v1238
      const v1783 = true
      const v1784 = v1295
      const v1785 = v1294
      const v1786 = v1141
      const v1787 = v1264
      const v1789 = v1285
      const v1790 =
        v1285[
          stdlib.checkedBigNumberify(
            './index.rsh:59:34:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1791 =
        v1790[
          stdlib.checkedBigNumberify(
            './index.rsh:59:34:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      return

      break
    }
    case 'purchaseOwnership0_72': {
      const v1330 = v1230[1]
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
    openToPublic0_72: ctc9,
    purchaseOwnership0_72: ctc8,
  })

  const map0_ctc = ctc2
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  })

  const [
    v1103,
    v1112,
    v1137,
    v1138,
    v1139,
    v1140,
    v1141,
    v1142,
    v1145,
    v1158,
    v1159,
  ] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc7, ctc6, ctc1],
  )
  const v1188 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
      'at ./index.rsh:56:21:application call to "runpurchaseOwnership0_72" (defined at: ./index.rsh:90:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'in',
    who: 'purchaseOwnership',
  })
  const v1189 =
    v1188[
      stdlib.checkedBigNumberify(
        './index.rsh:1:23:application',
        stdlib.UInt_max,
        '0',
      )
    ]
  const v1191 = stdlib.safeMul(v1139, v1189)
  const v1194 = stdlib.ge(v1159, v1189)
  stdlib.assert(v1194, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
      'at ./index.rsh:56:21:application call to "runpurchaseOwnership0_72" (defined at: ./index.rsh:90:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'tok amt check',
    who: 'purchaseOwnership',
  })
  stdlib.assert(v1138, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:93:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
      'at ./index.rsh:56:21:application call to "runpurchaseOwnership0_72" (defined at: ./index.rsh:90:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'is open',
    who: 'purchaseOwnership',
  })
  const v1197 = stdlib.ge(v1140, v1189)
  stdlib.assert(v1197, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:94:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
      'at ./index.rsh:56:21:application call to "runpurchaseOwnership0_72" (defined at: ./index.rsh:90:10:function exp)',
      'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
    ],
    msg: 'not enough shares available to purchase',
    who: 'purchaseOwnership',
  })
  const v1204 = ['purchaseOwnership0_72', v1188]

  const txn1 = await ctc.sendrecv({
    args: [
      v1103,
      v1112,
      v1137,
      v1138,
      v1139,
      v1140,
      v1141,
      v1142,
      v1145,
      v1158,
      v1159,
      v1204,
    ],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v1191, []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] }
      let sim_txn_ctr = stdlib.UInt_max
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1)
        return sim_txn_ctr
      }

      stdlib.simMapDupe(sim_r, 0, map0)

      const {
        data: [v1230],
        secs: v1232,
        time: v1231,
        didSend: v870,
        from: v1229,
      } = txn1

      switch (v1230[0]) {
        case 'openToPublic0_72': {
          const v1233 = v1230[1]

          break
        }
        case 'purchaseOwnership0_72': {
          const v1330 = v1230[1]
          sim_r.txns.push({
            kind: 'api',
            who: 'purchaseOwnership',
          })
          const v1348 =
            v1330[
              stdlib.checkedBigNumberify(
                './index.rsh:90:10:spread',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1349 = stdlib.safeMul(v1139, v1348)
          sim_r.txns.push({
            amt: v1349,
            kind: 'to',
            tok: undefined /* Nothing */,
          })
          const v1405 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, v1229),
            null,
          )
          const v1406 = stdlib.fromSome(
            v1405,
            stdlib.checkedBigNumberify(
              './index.rsh:101:49:decimal',
              stdlib.UInt_max,
              '0',
            ),
          )
          const v1407 = stdlib.safeAdd(v1406, v1348)
          await stdlib.simMapSet(sim_r, 0, v1229, v1407)
          const v1413 = stdlib.sub(v1159, v1348)
          const v1415 = stdlib.Array_set(v1158, '0', v1413)
          const v1416 = stdlib.Array_set(
            v1145,
            stdlib.checkedBigNumberify(
              './index.rsh:102:53:application',
              stdlib.UInt_max,
              '0',
            ),
            v1415,
          )
          sim_r.txns.push({
            kind: 'from',
            to: v1229,
            tok: v1112,
          })
          const v1417 = null
          const v1418 = await txn1.getOutput(
            'purchaseOwnership',
            'v1417',
            ctc0,
            v1417,
          )

          const v1424 = stdlib.safeSub(v1140, v1348)
          const v1425 = stdlib.safeAdd(v1141, v1349)
          const v1818 = v1137
          const v1819 = true
          const v1820 = v1139
          const v1821 = v1424
          const v1822 = v1425
          const v1823 = v1142
          const v1825 = v1416
          const v1826 =
            v1416[
              stdlib.checkedBigNumberify(
                './index.rsh:59:34:application',
                stdlib.UInt_max,
                '0',
              )
            ]
          const v1827 =
            v1826[
              stdlib.checkedBigNumberify(
                './index.rsh:59:34:application',
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
    tys: [
      ctc3,
      ctc4,
      ctc1,
      ctc5,
      ctc1,
      ctc1,
      ctc1,
      ctc1,
      ctc7,
      ctc6,
      ctc1,
      ctc10,
    ],
    waitIfNotPresent: false,
  })
  const {
    data: [v1230],
    secs: v1232,
    time: v1231,
    didSend: v870,
    from: v1229,
  } = txn1
  switch (v1230[0]) {
    case 'openToPublic0_72': {
      const v1233 = v1230[1]
      return
      break
    }
    case 'purchaseOwnership0_72': {
      const v1330 = v1230[1]
      undefined /* setApiDetails */
      const v1348 =
        v1330[
          stdlib.checkedBigNumberify(
            './index.rsh:90:10:spread',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1349 = stdlib.safeMul(v1139, v1348)
      const v1352 = stdlib.ge(v1159, v1348)
      stdlib.assert(v1352, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
        ],
        msg: 'tok amt check',
        who: 'purchaseOwnership',
      })
      stdlib.assert(v1138, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:93:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
        ],
        msg: 'is open',
        who: 'purchaseOwnership',
      })
      const v1355 = stdlib.ge(v1140, v1348)
      stdlib.assert(v1355, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:94:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:90:48:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:90:48:function exp)',
          'at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)',
        ],
        msg: 'not enough shares available to purchase',
        who: 'purchaseOwnership',
      })
      const v1405 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, v1229),
        null,
      )
      const v1406 = stdlib.fromSome(
        v1405,
        stdlib.checkedBigNumberify(
          './index.rsh:101:49:decimal',
          stdlib.UInt_max,
          '0',
        ),
      )
      const v1407 = stdlib.safeAdd(v1406, v1348)
      await stdlib.mapSet(map0, v1229, v1407)
      const v1413 = stdlib.sub(v1159, v1348)
      const v1415 = stdlib.Array_set(v1158, '0', v1413)
      const v1416 = stdlib.Array_set(
        v1145,
        stdlib.checkedBigNumberify(
          './index.rsh:102:53:application',
          stdlib.UInt_max,
          '0',
        ),
        v1415,
      )
      const v1417 = null
      const v1418 = await txn1.getOutput(
        'purchaseOwnership',
        'v1417',
        ctc0,
        v1417,
      )
      if (v870) {
        stdlib.protect(ctc0, await interact.out(v1330, v1418), {
          at: './index.rsh:90:11:application',
          fs: [
            'at ./index.rsh:90:11:application call to [unknown function] (defined at: ./index.rsh:90:11:function exp)',
            'at ./index.rsh:103:17:application call to "notify" (defined at: ./index.rsh:100:16:function exp)',
            'at ./index.rsh:100:16:application call to [unknown function] (defined at: ./index.rsh:100:16:function exp)',
          ],
          msg: 'out',
          who: 'purchaseOwnership',
        })
      } else {
      }

      const v1424 = stdlib.safeSub(v1140, v1348)
      const v1425 = stdlib.safeAdd(v1141, v1349)
      const v1818 = v1137
      const v1819 = true
      const v1820 = v1139
      const v1821 = v1424
      const v1822 = v1425
      const v1823 = v1142
      const v1825 = v1416
      const v1826 =
        v1416[
          stdlib.checkedBigNumberify(
            './index.rsh:59:34:application',
            stdlib.UInt_max,
            '0',
          )
        ]
      const v1827 =
        v1826[
          stdlib.checkedBigNumberify(
            './index.rsh:59:34:application',
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
      `creatorTokenAllocation()uint64`,
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
      `creatorTokenAllocation()uint64`,
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
  appApproval: `ByATAAMBCAIJhceatAjYo66IDJbhm8QMnd3Eig2Vpt7dCriyid4K9aey3QTswd78BeKDt48Gp4WZzQGywZa4AgSgjQYmBAEAAAgAAAAAAJiWgAEBIjUAMRhBBHMpZEkiWzUBJVs1AjEZJBJBAAoxACghBa9mQgRANhoAF0lBAVwiNQQkNQZJIQYMQACbSSEHDEAAUEkhCAxAADNJIQkMQAAWIQkSRDQBIxJEKGRJNQNXMQg1B0IEDyEIEkQ0ASMSRChkSTUDV3MINQdCA/khBxJENAEjEkQoZEk1A1dJCDUHQgPjSSEKDEAAKUkhCwxAAA8hCxJENAEjEkQqNQdCA8YhChJENhoBNf8rNP9QJa9QQgDgIQYSRDYaATYaAlA1/yg0/1BCAMxJIQwMQABaSSENDEAAPUkhDgxAACAhDhJENAEjEkQiNhoBiAOgSTX/JFs0/yJVTRY1B0IDaiENEkQ0ASMSRChkSTUDVyAINQdCA1QhDBJENAEjEkQoZEk1A1coCDUHQgM+SSEPDEAAM0khEAxAABYhEBJENAEjEkQoZEk1A1dBCDUHQgMaIQ8SRDQBIxJEKGRJNQNXACA1B0IDBIG028Y3EkQ0ASMSRChkSTUDVzABNQdCAus2GgIXNQQ2GgM2GgEXSSEEDEABZyEEEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/gSBbNf5XMAEXNf2BMVs1/IE5WzX7gUFbNfpXURE1+VdiETX4gXNbNfdJNQU19oAEioos3DT2ULA09iJVQABzNPZXARA19TT1Ils19DEANP8SRDT9FEQ09zT0D0Q09CINRDT1JVs187EisgE09LISIRGyEDT/shQ0/rIRs4AIAAAAAAAABQawKTUHNP80/jT0JDTzNPsKNPs09Ak0+jTzMgY0+TT4NPc09AkWXABcAEIBXTT2VwEINfU09Rc19DT8NPQLNfM09zT0D0Q0/UQ0+zT0D0Q084gCEDEAKCsiMQCIAfdJNfIkWzTyIlVNNPQIFlBmsSKyATT0shIhEbIQMQCyFDT+shGzgAgAAAAAAAAFibApNQc0/zT+NAOBKFskNPw0+zT0CTT6NPMINAOBSVsyBjT5NPg09zT0CRZcAFwAQgDLIhJEIRKIAZ0iNAESRDQESSISTDQCEhFEgARfDav6sIERrzX/IRKIAXyxIrIBI7IQgYCt4gSyIiKyI4AIRElSQUQAAACyJYAgRGlyYWRpY2FsIE11c2ljIE93bmVyc2hpcAAAAAAAAACyJoFgr7InMgOyKDIKsimztDw1/oAIAAAAAAAABFc0/hZQsDT+Nf00/0lXABEqXABcAEk1/ElXABEqXAhcAEk1+0lXABEoXBBcADX6MQA0/SIiIjT6VwARIlsiIjIGNPpCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jT/VwARSTX1Ils19DT2NPcWUDT4FlA0+RZRBwhQNPoWUDT7FlA0/BZQNP0WUDT/UDT1UDT0FlAoSwFXAHtnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIIJLIQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkkCDIEEkQxFhJEJEMxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQkMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQWviShiiTQASUokCDUAOAcyChJEOBAkEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 123,
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
                    "name": "_openToPublic0_72",
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
                    "name": "_purchaseOwnership0_72",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v1230",
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
    "name": "_reach_oe_v1111",
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
    "name": "_reach_oe_v1286",
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
    "name": "_reach_oe_v1417",
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
                    "name": "_openToPublic0_72",
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
                    "name": "_purchaseOwnership0_72",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v1230",
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
        "name": "v1830",
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
    "name": "creatorTokenAllocation",
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
  Bytecode: `0x608060405260405162003b4838038062003b488339810160408190526200002691620007de565b60008055436003556200003862000530565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000af341560116200039e565b7f44697261646963616c204d75736963204f776e65727368697000000000000000604082810191825264111254905160da1b6060840152608083018051600090819052815160209081018290529151830181905260a085015291518151928301520160408051601f198184030181529082905260608301516001600160c01b03191660208301529060280160408051808303601f1901815282825260808581015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a086015160208401529101604051602081830303815290604052629896806000604051620001b090620005da565b620001c196959493929190620008af565b604051809103906000f080158015620001de573d6000803e3d6000fd5b506001600160a01b031660c0820181905260e082018190526040519081527fa2aee829ab4d8409791fd5d567c247d140f68330c5d8658773a672e8243decad9060200160405180910390a16200029d816020015160006040518060600160405280629896808152602001856020015160006001811062000262576200026262000849565b602002015160200151815260200185602001516000600181106200028a576200028a62000849565b60200201516040015115159052620003c8565b6101008201818152604080516060810182528251515181526298968060208201529151620002d69392600092909190820190836200028a565b6101208201818152604080516060810182528251515181529151516020908101519083015260009082018190526200030f9291620003c8565b6101408201526200031f620005e8565b805133905260e08281015182516001600160a01b039091166020918201528083018051600090819052815190920182905280516040018290526101408501805151518251606001528151608001839052815160a0019290925280514360c09190910152905190519091015262000395816200044b565b50505062000a90565b81620003c45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003d262000613565b60005b60018110156200042857848160018110620003f457620003f462000849565b60200201518282600181106200040e576200040e62000849565b6020020152806200041f816200091a565b915050620003d5565b50818184600181106200043f576200043f62000849565b60200201529392505050565b6200045562000660565b8151516001600160a01b03908116825282516020908101519091168183015280830180515160408085019190915281518301511515606080860191909152825182015160808087019190915283519091015160a08087019190915283519091015160c08601528251015160e0808601919091528251810151610100860152825181015151610120860152915190910151515161014084015260036000554360015551620005059183910162000991565b604051602081830303815290604052600290805190602001906200052b929190620006ef565b505050565b604080516101c081019091526000610160820181815261018083018290526101a08301919091528152602081016200056762000613565b8152600060208083018290526040808401839052805160608082018352848252928101849052908101839052908301526080820181905260a0820181905260c082015260e001620005b762000613565b8152602001620005c662000613565b8152602001620005d562000613565b905290565b6110878062002ac183390190565b604080516080810182526000918101828152606082019290925290815260208101620005d56200077e565b60405180602001604052806001905b62000649604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006225790505090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001620006c262000613565b81526040805160608101825260008082526020828101829052928201529101908152602001600081525090565b828054620006fd9062000a53565b90600052602060002090601f0160209004810192826200072157600085556200076c565b82601f106200073c57805160ff19168380011785556200076c565b828001600101855582156200076c579182015b828111156200076c5782518255916020019190600101906200074f565b506200077a929150620007c7565b5090565b604051806101000160405280600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001620005d562000613565b5b808211156200077a5760008155600101620007c8565b600060408284031215620007f157600080fd5b604080519081016001600160401b03811182821017156200082257634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200083d57600080fd5b60208201529392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620008875760208185018101518683018201520162000869565b818111156200089a576000602083870101525b50601f01601f19169290920160200192915050565b60c081526000620008c460c08301896200085f565b8281036020840152620008d881896200085f565b90508281036040840152620008ee81886200085f565b905082810360608401526200090481876200085f565b6080840195909552505060a00152949350505050565b60006000198214156200093d57634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b60018110156200098b576200097484835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162000948565b50505050565b81516001600160a01b031681526101e081016020830151620009be60208401826001600160a01b03169052565b50604083015160408301526060830151620009dd606084018215159052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015162000a1b8285018262000944565b5050610120830151805161016084015260208101516101808401526040015115156101a0830152610140909201516101c09091015290565b600181811c9082168062000a6857607f821691505b6020821081141562000a8a57634e487b7160e01b600052602260045260246000fd5b50919050565b6120218062000aa06000396000f3fe6080604052600436106100f65760003560e01c806385e1c6af1161008f578063ab53f2c611610061578063ab53f2c614610253578063c356065c14610276578063d4c3eea01461028b578063e66825c3146102a0578063e7b0f666146102b557005b806385e1c6af146102015780638ac809f3146102145780639a1e185d14610229578063a9e133ef1461023e57005b806333fa0794116100c857806333fa0794146101975780633bc5b7bf146101ac57806379e43a5c146101d957806383230757146101ec57005b806302d05d3f146100ff5780630c8b234e146101315780630f59acd81461015f5780631e93b0f11461018257005b366100fd57005b005b34801561010b57600080fd5b506101146102ca565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013d57600080fd5b5061015161014c366004611955565b6102dc565b604051908152602001610128565b61017261016d366004611972565b610306565b6040519015158152602001610128565b34801561018e57600080fd5b50600354610151565b3480156101a357600080fd5b5061015161031b565b3480156101b857600080fd5b506101cc6101c7366004611955565b610327565b60405161012891906119c8565b6100fd6101e73660046119f8565b61034d565b3480156101f857600080fd5b50600154610151565b61017261020f366004611a10565b61037d565b34801561022057600080fd5b50610151610388565b34801561023557600080fd5b50610114610394565b34801561024a57600080fd5b506101516103a0565b34801561025f57600080fd5b506102686103ac565b604051610128929190611a55565b34801561028257600080fd5b50610172610449565b34801561029757600080fd5b50610151610455565b3480156102ac57600080fd5b50610151610461565b3480156102c157600080fd5b5061015161046d565b6000806102d681610479565b91505090565b60408051602081019091526001600160a01b03821681526000906102ff8161053f565b9392505050565b6000610312838361063b565b90505b92915050565b6000806102d68161068b565b604080516060810182526000808252602082018190529181019190915261031582610744565b604080518082019091526000808252602082015261037961037336849003840184611b38565b82610816565b5050565b600061031582610d37565b6000806102d681610d81565b6000806102d681610e46565b6000806102d681610eff565b6000606060005460028080546103c190611bfd565b80601f01602080910402602001604051908101604052809291908181526020018280546103ed90611bfd565b801561043a5780601f1061040f5761010080835404028352916020019161043a565b820191906000526020600020905b81548152906001019060200180831161041d57829003601f168201915b50505050509050915091509091565b6000806102d681610fc4565b6000806102d681611088565b6000806102d68161114c565b6000806102d681611210565b60006003600054141561052e5760006002805461049590611bfd565b80601f01602080910402602001604051908101604052809291908181526020018280546104c190611bfd565b801561050e5780601f106104e35761010080835404028352916020019161050e565b820191906000526020600020905b8154815290600101906020018083116104f157829003601f168201915b50505050508060200190518101906105269190611ce9565b519392505050565b61053a600060086112d0565b919050565b60006003600054141561062f5760006002805461055b90611bfd565b80601f016020809104026020016040519081016040528092919081815260200182805461058790611bfd565b80156105d45780601f106105a9576101008083540402835291602001916105d4565b820191906000526020600020905b8154815290600101906020018083116105b757829003601f168201915b50505050508060200190518101906105ec9190611ce9565b9050600183516105fb90610744565b51600181111561060d5761060d611994565b146106195760006102ff565b825161062490610744565b604001519392505050565b61053a600060076112d0565b60006106456116ab565b6020818101805151600090819052815151830151879052905151820151820185905260408051808201909152818152918201526106828282610816565b51949350505050565b600060036000541415610738576000600280546106a790611bfd565b80601f01602080910402602001604051908101604052809291908181526020018280546106d390611bfd565b80156107205780601f106106f557610100808354040283529160200191610720565b820191906000526020600020905b81548152906001019060200180831161070357829003601f168201915b50505050508060200190518101906106249190611ce9565b61053a600060096112d0565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561079057610790611994565b1415610807576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156107d1576107d1611994565b60018111156107e2576107e2611994565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610826600360005414601b6112d0565b815161084190158061083a57508251600154145b601c6112d0565b60008080556002805461085390611bfd565b80601f016020809104026020016040519081016040528092919081815260200182805461087f90611bfd565b80156108cc5780601f106108a1576101008083540402835291602001916108cc565b820191906000526020600020905b8154815290600101906020018083116108af57829003601f168201915b50505050508060200190518101906108e49190611ce9565b90506108ee6116ca565b7fd66aab9a333b0c80bb8fa17727e0727cfa4d4b15bc8bb45ddeb6838d20cd8e5b338560405161091f929190611d9e565b60405180910390a1600060208501515151600181111561094157610941611994565b1415610b03576020848101515101518152815161096a906001600160a01b0316331460126112d0565b610987826060015161097d576001610980565b60005b60136112d0565b80515161014083015161099d91111560146112d0565b8051516109ad90151560156112d0565b6109b9341560166112d0565b602082015182518251516109ce9291906112f6565b604051600081527f1101be0931fc2b18e5644aef665f7206387be726329b24058dddd6ebae8458239060200160405180910390a160008352610a0e611706565b825181516001600160a01b0391821690526020808501518351921691810191909152825151818301805191909152516001908201528251015160a0840151610a56919061130f565b60208201516040015260a0830151825151610a719190611356565b6020828101805160609081019390935260c086810151825160800152855190920151815160a001525143910152610100840151604080519283019052610140850151845151610aeb9360009290918291035b81526020018761012001516020015181526020018761012001516040015115158152506113a5565b602082015160e00152610afd81611419565b50610d31565b6001602085015151516001811115610b1d57610b1d611994565b1415610d3157602080850151516040015190820181905260808301519051610b4591906114f3565b6040820152602081015151610140830151610b6391111560176112d0565b610b72826060015160186112d0565b610b8c8160200151600001518360a00151101560196112d0565b610b9d81604001513414601a6112d0565b336000818152600460205260409020805460ff19166001908117909155610bfe91610bc790610744565b516001811115610bd957610bd9611994565b14610be5576000610bf3565b610bee33610744565b604001515b602083015151611552565b33600081815260046020908152604090912060010192909255838201519183015151610c2b9291906112f6565b604051600081527f2748bdec236480d703ce23899498d57c2d91488c6b54b789b31095f42716af929060200160405180910390a160006020840152610c6e611706565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518284018051919091528051600190840152608086015190519091015260a08401519083015151610cc69190611356565b60208201516060015260c08301516040830151610ce39190611552565b602082810180516080019290925260e0850151825160a0015290514360c09091015261010084015160408051606081019091526101408601519285015151610aeb9360009291829103610ac3565b50505050565b6000610d416116ab565b60208181018051516001905251516040908101518590528051808201909152600080825291810191909152610d768282610816565b602001519392505050565b600060036000541415610e3a57600060028054610d9d90611bfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc990611bfd565b8015610e165780601f10610deb57610100808354040283529160200191610e16565b820191906000526020600020905b815481529060010190602001808311610df957829003601f168201915b5050505050806020019051810190610e2e9190611ce9565b61014001519392505050565b61053a6000600d6112d0565b600060036000541415610ef357600060028054610e6290611bfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8e90611bfd565b8015610edb5780601f10610eb057610100808354040283529160200191610edb565b820191906000526020600020905b815481529060010190602001808311610ebe57829003601f168201915b5050505050806020019051810190610d769190611ce9565b61053a6000600b6112d0565b600060036000541415610fb857600060028054610f1b90611bfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4790611bfd565b8015610f945780601f10610f6957610100808354040283529160200191610f94565b820191906000526020600020905b815481529060010190602001808311610f7757829003601f168201915b5050505050806020019051810190610fac9190611ce9565b50629896809392505050565b61053a6000600f6112d0565b60006003600054141561107c57600060028054610fe090611bfd565b80601f016020809104026020016040519081016040528092919081815260200182805461100c90611bfd565b80156110595780601f1061102e57610100808354040283529160200191611059565b820191906000526020600020905b81548152906001019060200180831161103c57829003601f168201915b50505050508060200190518101906110719190611ce9565b606001519392505050565b61053a6000600a6112d0565b600060036000541415611140576000600280546110a490611bfd565b80601f01602080910402602001604051908101604052809291908181526020018280546110d090611bfd565b801561111d5780601f106110f25761010080835404028352916020019161111d565b820191906000526020600020905b81548152906001019060200180831161110057829003601f168201915b50505050508060200190518101906111359190611ce9565b60e001519392505050565b61053a600060106112d0565b6000600360005414156112045760006002805461116890611bfd565b80601f016020809104026020016040519081016040528092919081815260200182805461119490611bfd565b80156111e15780601f106111b6576101008083540402835291602001916111e1565b820191906000526020600020905b8154815290600101906020018083116111c457829003601f168201915b50505050508060200190518101906111f99190611ce9565b608001519392505050565b61053a6000600c6112d0565b6000600360005414156112c85760006002805461122c90611bfd565b80601f016020809104026020016040519081016040528092919081815260200182805461125890611bfd565b80156112a55780601f1061127a576101008083540402835291602001916112a5565b820191906000526020600020905b81548152906001019060200180831161128857829003601f168201915b50505050508060200190518101906112bd9190611ce9565b60c001519392505050565b61053a6000600e5b816103795760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b61130183838361159f565b61130a57600080fd5b505050565b60008161134c5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016112ed565b6103128284611e11565b6000826113638382611e33565b91508111156103155760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016112ed565b6113ad61172f565b60005b60018110156113f9578481600181106113cb576113cb611e4a565b60200201518282600181106113e2576113e2611e4a565b6020020152806113f181611e60565b9150506113b0565b508181846001811061140d5761140d611e4a565b60200201529392505050565b61142161177a565b8151516001600160a01b03908116825282516020908101519091168183015280830180515160408085019190915281518301511515606080860191909152825182015160808087019190915283519091015160a08087019190915283519091015160c08601528251015160e08086019190915282518101516101008601528251810151516101208601529151909101515151610140840152600360005543600155516114cf91839101611ebf565b6040516020818303038152906040526002908051906020019061130a9291906117ff565b6000811580611517575082826115098183611f7d565b92506115159083611e11565b145b6103155760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016112ed565b60008261155f8382611f9c565b91508110156103155760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016112ed565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916115fe91611fb4565b60006040518083038185875af1925050503d806000811461163b576040519150601f19603f3d011682016040523d82523d6000602084013e611640565b606091505b509150915061165182826002611670565b50808060200190518101906116669190611fd0565b9695505050505050565b6060831561167f5750816102ff565b82511561168f5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016112ed565b6040518060400160405280600081526020016116c5611883565b905290565b6040805160a0810182526000606082018181526080830182905282528251602081810190945290815290918201905b8152602001600081525090565b6040805160808101825260009181018281526060820192909252908152602081016116c5611896565b60405180602001604052806001905b611764604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161173e5790505090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016117da61172f565b81526040805160608101825260008082526020828101829052928201529101906116f9565b82805461180b90611bfd565b90600052602060002090601f01602090048101928261182d5760008555611873565b82601f1061184657805160ff1916838001178555611873565b82800160010185558215611873579182015b82811115611873578251825591602001919060010190611858565b5061187f9291506118dd565b5090565b60405180602001604052806116c56118f2565b6040518061010001604052806000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016116c561172f565b5b8082111561187f57600081556001016118de565b60408051606081019091528060008152602001611922604051806040016040528060008152602001600081525090565b81526020016116c56040518060200160405280600081525090565b6001600160a01b038116811461195257600080fd5b50565b60006020828403121561196757600080fd5b81356102ff8161193d565b6000806040838503121561198557600080fd5b50508035926020909101359150565b634e487b7160e01b600052602160045260246000fd5b6002811061195257634e487b7160e01b600052602160045260246000fd5b815160608201906119d8816119aa565b808352506020830151151560208301526040830151604083015292915050565b600060a08284031215611a0a57600080fd5b50919050565b600060208284031215611a2257600080fd5b5035919050565b60005b83811015611a44578181015183820152602001611a2c565b83811115610d315750506000910152565b8281526040602082015260008251806040840152611a7a816060850160208701611a29565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611ac857611ac8611a8f565b60405290565b6040516020810167ffffffffffffffff81118282101715611ac857611ac8611a8f565b6040516060810167ffffffffffffffff81118282101715611ac857611ac8611a8f565b604051610160810167ffffffffffffffff81118282101715611ac857611ac8611a8f565b600081830360a0811215611b4b57600080fd5b611b53611aa5565b833581526080601f1983011215611b6957600080fd5b611b71611ace565b611b79611af1565b602086013560028110611b8b57600080fd5b81526040603f1985011215611b9f57600080fd5b611ba7611aa5565b6040870135815260608701356020820152806020830152506020607f1985011215611bd157600080fd5b611bd9611ace565b60809690960135865260408101959095529384526020810193909352509092915050565b600181811c90821680611c1157607f821691505b60208210811415611a0a57634e487b7160e01b600052602260045260246000fd5b805161053a8161193d565b8051801515811461053a57600080fd5b600060608284031215611c5f57600080fd5b611c67611af1565b90508151815260208201516020820152611c8360408301611c3d565b604082015292915050565b600082601f830112611c9f57600080fd5b611ca7611ace565b80606080850186811115611cba57600080fd5b855b81811015611cdd57611cce8882611c4d565b85526020909401938201611cbc565b50919695505050505050565b60006101e08284031215611cfc57600080fd5b611d04611b14565b611d0d83611c32565b8152611d1b60208401611c32565b602082015260408301516040820152611d3660608401611c3d565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100611d7285828601611c8e565b90820152611d84846101608501611c4d565b6101208201526101c0929092015161014083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160c083019190611dca816119aa565b80604085015250602081015180516060850152602081015160808501525060408101515160a0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082611e2e57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611e4557611e45611dfb565b500390565b634e487b7160e01b600052603260045260246000fd5b6000600019821415611e7457611e74611dfb565b5060010190565b8060005b6001811015610d3157611ea984835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101611e7f565b81516001600160a01b031681526101e081016020830151611eeb60208401826001600160a01b03169052565b50604083015160408301526060830151611f09606084018215159052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151611f4582850182611e7b565b5050610120830151805161016084015260208101516101808401526040015115156101a0830152610140909201516101c09091015290565b6000816000190483118215151615611f9757611f97611dfb565b500290565b60008219821115611faf57611faf611dfb565b500190565b60008251611fc6818460208701611a29565b9190910192915050565b600060208284031215611fe257600080fd5b61031282611c3d56fea2646970667358221220de73e72ebabde14fb713601ccb5d77cfde7e91e864633c3f8fc1ac10ac00991964736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212200abeb5cb4015fe8eb0a529c40580b4ee78e73a637196dedbd918f3c37298b75c64736f6c634300080c0033`,
  BytecodeLen: 15176,
  Which: `oD`,
  version: 8,
  views: {
    checkOwnership: `checkOwnership`,
    creator: `creator`,
    creatorTokenAllocation: `creatorTokenAllocation`,
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
    at: './index.rsh:116:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:56:21:after expr stmt semicolon',
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
