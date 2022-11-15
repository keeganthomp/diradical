// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Object({
    owner: ctc0,
    sessionPlays: ctc2,
    totalPlays: ctc2
    });
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc10;
  
  const map2_ctc = ctc11;
  
  
  const _checkPayout = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2184, v2192, v2211] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227] = svs;
      return (await ((async (_v2230 ) => {
          const v2230 = stdlib.protect(ctc6, _v2230, null);
        
        const v2231 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2230), null);
        const v2232 = {
          owner: v2184,
          sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2233 = stdlib.fromSome(v2231, v2232);
        const v2234 = v2233.sessionPlays;
        const v2235 = stdlib.safeDiv(v2234, v2218);
        const v2236 = stdlib.safeMul(v2235, v2219);
        
        return v2236;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalBal = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2184, v2192, v2211] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227] = svs;
      return (await ((async () => {
        
        
        return v2219;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalPlays = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2184, v2192, v2211] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227] = svs;
      return (await ((async () => {
        
        
        return v2218;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      checkPayout: {
        decode: _checkPayout,
        dom: [ctc6],
        rng: ctc2
        },
      totalBal: {
        decode: _totalBal,
        dom: [],
        rng: ctc2
        },
      totalPlays: {
        decode: _totalPlays,
        dom: [],
        rng: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5],
      4: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    owner: ctc1,
    sessionPlays: ctc2,
    totalPlays: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc5, ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    owner: ctc1,
    sessionPlays: ctc2,
    totalPlays: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    addSong0_93: ctc9,
    buyMembership0_93: ctc10,
    incrementPlayCount0_93: ctc9,
    payout0_93: ctc9
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v2179 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2180 = [v2179];
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2186, time: v2185, didSend: v22, from: v2184 } = txn1;
      
      ;
      const v2187 = 'Diradical Access                ';
      const v2188 = 'DIRAD   ';
      const v2189 = '                                                                                                ';
      const v2190 = '                                ';
      const v2191 = stdlib.simTokenNew(sim_r, v2187, v2188, v2189, v2190, stdlib.checkedBigNumberify('./index.rsh:4:24:decimal', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('./index.rsh:32:15:decimal', stdlib.UInt_max, '0'), getSimTokCtr());
      const v2192 = await txn1.getOutput('internal', 'v2191', ctc7, v2191);
      const v2202 = v2180[stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0')];
      const v2203 = stdlib.Array_set(v2202, '0', stdlib.checkedBigNumberify('./index.rsh:4:24:decimal', stdlib.UInt_max, '10000000'));
      const v2204 = stdlib.Array_set(v2180, stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0'), v2203);
      const v2206 = v2204[stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0')];
      const v2207 = stdlib.Array_set(v2206, '1', stdlib.checkedBigNumberify('./index.rsh:4:24:decimal', stdlib.UInt_max, '10000000'));
      const v2208 = stdlib.Array_set(v2204, stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0'), v2207);
      const v2209 = v2208[stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0')];
      const v2210 = stdlib.Array_set(v2209, '2', false);
      const v2211 = stdlib.Array_set(v2208, stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0'), v2210);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2186, time: v2185, didSend: v22, from: v2184 } = txn1;
  ;
  const v2187 = 'Diradical Access                ';
  const v2188 = 'DIRAD   ';
  const v2189 = '                                                                                                ';
  const v2190 = '                                ';
  const v2191 = undefined /* TokenNew */;
  const v2192 = await txn1.getOutput('internal', 'v2191', ctc7, v2191);
  const v2202 = v2180[stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0')];
  const v2203 = stdlib.Array_set(v2202, '0', stdlib.checkedBigNumberify('./index.rsh:4:24:decimal', stdlib.UInt_max, '10000000'));
  const v2204 = stdlib.Array_set(v2180, stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0'), v2203);
  const v2206 = v2204[stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0')];
  const v2207 = stdlib.Array_set(v2206, '1', stdlib.checkedBigNumberify('./index.rsh:4:24:decimal', stdlib.UInt_max, '10000000'));
  const v2208 = stdlib.Array_set(v2204, stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0'), v2207);
  const v2209 = v2208[stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0')];
  const v2210 = stdlib.Array_set(v2209, '2', false);
  const v2211 = stdlib.Array_set(v2208, stdlib.checkedBigNumberify('./index.rsh:28:32:application', stdlib.UInt_max, '0'), v2210);
  const txn2 = await (ctc.sendrecv({
    args: [v2184, v2192, v2211],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2185,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2214, time: v2213, didSend: v46, from: v2212 } = txn2;
      
      ;
      
      const v2217 = stdlib.checkedBigNumberify('./index.rsh:55:69:decimal', stdlib.UInt_max, '0');
      const v2218 = stdlib.checkedBigNumberify('./index.rsh:55:66:decimal', stdlib.UInt_max, '0');
      const v2219 = stdlib.checkedBigNumberify('./index.rsh:55:72:decimal', stdlib.UInt_max, '0');
      const v2220 = v2213;
      const v2226 = v2211;
      const v2227 = stdlib.checkedBigNumberify('./index.rsh:24:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2214, time: v2213, didSend: v46, from: v2212 } = txn2;
  ;
  const v2215 = stdlib.addressEq(v2184, v2212);
  stdlib.assert(v2215, {
    at: './index.rsh:52:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:54:26:application',
    fs: ['at ./index.rsh:54:26:application call to [unknown function] (defined at: ./index.rsh:54:26:function exp)', 'at ./index.rsh:54:26:application call to "liftedInteract" (defined at: ./index.rsh:54:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  let v2217 = stdlib.checkedBigNumberify('./index.rsh:55:69:decimal', stdlib.UInt_max, '0');
  let v2218 = stdlib.checkedBigNumberify('./index.rsh:55:66:decimal', stdlib.UInt_max, '0');
  let v2219 = stdlib.checkedBigNumberify('./index.rsh:55:72:decimal', stdlib.UInt_max, '0');
  let v2220 = v2213;
  let v2226 = v2211;
  let v2227 = stdlib.checkedBigNumberify('./index.rsh:24:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn4;
    switch (v2425[0]) {
      case 'addSong0_93': {
        const v2428 = v2425[1];
        undefined /* setApiDetails */;
        const v2433 = v2428[stdlib.checkedBigNumberify('./index.rsh:81:10:spread', stdlib.UInt_max, '0')];
        const v2434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2433), null);
        const v2435 = {
          None: 0,
          Some: 1
          }[v2434[0]];
        const v2436 = stdlib.eq(v2435, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2436, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:83:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:36:application call to [unknown function] (defined at: ./index.rsh:81:36:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:81:36:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        ;
        const v2522 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
        const v2523 = v2522[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
        const v2524 = stdlib.add(v2523, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
        const v2526 = stdlib.Array_set(v2522, '0', v2524);
        const v2527 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v2526);
        ;
        const v2535 = {
          owner: v2424,
          sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await stdlib.mapSet(map0, v2433, v2535);
        const v2536 = v2527[stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0')];
        const v2537 = v2536[stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0')];
        const v2541 = stdlib.sub(v2537, stdlib.checkedBigNumberify('./index.rsh:91:20:decimal', stdlib.UInt_max, '1'));
        const v2543 = stdlib.Array_set(v2536, '0', v2541);
        const v2544 = stdlib.Array_set(v2527, stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0'), v2543);
        ;
        const v2545 = null;
        await txn4.getOutput('addSong', 'v2545', ctc0, v2545);
        const cv2217 = v2217;
        const cv2218 = v2218;
        const cv2219 = v2219;
        const cv2220 = v2426;
        const cv2226 = v2544;
        const cv2227 = v2227;
        
        v2217 = cv2217;
        v2218 = cv2218;
        v2219 = cv2219;
        v2220 = cv2220;
        v2226 = cv2226;
        v2227 = cv2227;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyMembership0_93': {
        const v2669 = v2425[1];
        undefined /* setApiDetails */;
        const v2686 = v2226[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
        const v2687 = v2686[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
        const v2688 = stdlib.gt(v2687, stdlib.checkedBigNumberify('./index.rsh:69:36:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2688, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:33:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'access token balance sufficent',
          who: 'Deployer'
          });
        const v2690 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2424), null);
        const v2691 = {
          None: 0,
          Some: 1
          }[v2690[0]];
        const v2692 = stdlib.eq(v2691, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2693 = v2692 ? false : true;
        stdlib.assert(v2693, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:33:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'is member',
          who: 'Deployer'
          });
        const v2762 = stdlib.add(v2227, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
        ;
        ;
        const v2809 = stdlib.sub(v2687, stdlib.checkedBigNumberify('./index.rsh:74:20:decimal', stdlib.UInt_max, '1'));
        const v2811 = stdlib.Array_set(v2686, '0', v2809);
        const v2812 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:74:38:application', stdlib.UInt_max, '0'), v2811);
        ;
        await stdlib.mapSet(map2, v2424, null);
        const v2814 = null;
        await txn4.getOutput('buyMembership', 'v2814', ctc0, v2814);
        const v2820 = stdlib.safeAdd(v2217, stdlib.checkedBigNumberify('./index.rsh:77:46:decimal', stdlib.UInt_max, '1'));
        const v2821 = stdlib.safeAdd(v2219, stdlib.checkedBigNumberify('./index.rsh:5:25:decimal', stdlib.UInt_max, '1'));
        const cv2217 = v2820;
        const cv2218 = v2218;
        const cv2219 = v2821;
        const cv2220 = v2426;
        const cv2226 = v2812;
        const cv2227 = v2762;
        
        v2217 = cv2217;
        v2218 = cv2218;
        v2219 = cv2219;
        v2220 = cv2220;
        v2226 = cv2226;
        v2227 = cv2227;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'incrementPlayCount0_93': {
        const v2910 = v2425[1];
        undefined /* setApiDetails */;
        const v2943 = v2910[stdlib.checkedBigNumberify('./index.rsh:97:10:spread', stdlib.UInt_max, '0')];
        const v2944 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2943), null);
        const v2945 = {
          None: 0,
          Some: 1
          }[v2944[0]];
        const v2946 = stdlib.eq(v2945, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2946, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:47:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'song contract listed',
          who: 'Deployer'
          });
        const v2949 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2424), null);
        const v2950 = stdlib.fromSome(v2949, stdlib.checkedBigNumberify('./index.rsh:100:54:decimal', stdlib.UInt_max, '0'));
        const v2951 = stdlib.safeSub(v2220, v2950);
        const v2952 = stdlib.ge(v2951, stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v2952, {
          at: './index.rsh:102:14:application',
          fs: ['at ./index.rsh:97:47:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'can incriment play',
          who: 'Deployer'
          });
        ;
        const v3004 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
        const v3005 = v3004[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
        const v3006 = stdlib.add(v3005, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
        const v3008 = stdlib.Array_set(v3004, '0', v3006);
        const v3009 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v3008);
        ;
        const v3073 = stdlib.safeSub(v2426, v2950);
        const v3074 = stdlib.ge(v3073, stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v3074, {
          at: './index.rsh:102:14:application',
          fs: ['at ./index.rsh:107:16:application call to [unknown function] (defined at: ./index.rsh:107:16:function exp)'],
          msg: 'can incriment play',
          who: 'Deployer'
          });
        const v3076 = {
          owner: v2184,
          sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3077 = stdlib.fromSome(v2944, v3076);
        const v3079 = v3009[stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0')];
        const v3080 = v3079[stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0')];
        const v3084 = stdlib.sub(v3080, stdlib.checkedBigNumberify('./index.rsh:108:20:decimal', stdlib.UInt_max, '1'));
        const v3086 = stdlib.Array_set(v3079, '0', v3084);
        const v3087 = stdlib.Array_set(v3009, stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0'), v3086);
        ;
        const v3088 = v3077.owner;
        const v3089 = v3077.sessionPlays;
        const v3090 = v3077.totalPlays;
        const v3092 = stdlib.safeAdd(v3089, stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, '1'));
        const v3094 = stdlib.safeAdd(v3090, stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, '1'));
        const v3095 = {
          owner: v3088,
          sessionPlays: v3092,
          totalPlays: v3094
          };
        await stdlib.mapSet(map0, v2943, v3095);
        await stdlib.mapSet(map1, v2424, v2426);
        await txn4.getOutput('incrementPlayCount', 'v3094', ctc2, v3094);
        const v3104 = stdlib.safeAdd(v2218, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '1'));
        const cv2217 = v2217;
        const cv2218 = v3104;
        const cv2219 = v2219;
        const cv2220 = v2426;
        const cv2226 = v3087;
        const cv2227 = v2227;
        
        v2217 = cv2217;
        v2218 = cv2218;
        v2219 = cv2219;
        v2220 = cv2220;
        v2226 = cv2226;
        v2227 = cv2227;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'payout0_93': {
        const v3151 = v2425[1];
        undefined /* setApiDetails */;
        const v3204 = v3151[stdlib.checkedBigNumberify('./index.rsh:121:10:spread', stdlib.UInt_max, '0')];
        const v3205 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3204), null);
        const v3206 = {
          None: 0,
          Some: 1
          }[v3205[0]];
        const v3207 = stdlib.eq(v3206, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3207, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'song exists',
          who: 'Deployer'
          });
        const v3210 = {
          owner: v2184,
          sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3211 = stdlib.fromSome(v3205, v3210);
        const v3212 = v3211.owner;
        const v3213 = stdlib.addressEq(v3212, v2424);
        stdlib.assert(v3213, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'is song owner',
          who: 'Deployer'
          });
        const v3215 = stdlib.gt(v2219, stdlib.checkedBigNumberify('./index.rsh:125:26:decimal', stdlib.UInt_max, '0'));
        const v3216 = v3211.sessionPlays;
        const v3217 = stdlib.gt(v3216, stdlib.checkedBigNumberify('./index.rsh:125:59:decimal', stdlib.UInt_max, '0'));
        const v3218 = v3215 ? v3217 : false;
        stdlib.assert(v3218, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'has payout',
          who: 'Deployer'
          });
        const v3221 = stdlib.safeDiv(v3216, v2218);
        const v3223 = stdlib.safeMul(v3221, v2227);
        const v3225 = stdlib.ge(v2227, v3223);
        stdlib.assert(v3225, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
          msg: 'balance check',
          who: 'Deployer'
          });
        ;
        const v3245 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
        const v3246 = v3245[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
        const v3247 = stdlib.add(v3246, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
        const v3249 = stdlib.Array_set(v3245, '0', v3247);
        const v3250 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v3249);
        ;
        const v3377 = v3211.totalPlays;
        const v3378 = {
          owner: v3212,
          sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          totalPlays: v3377
          };
        await stdlib.mapSet(map0, v3204, v3378);
        const v3382 = stdlib.sub(v2227, v3223);
        ;
        const v3383 = null;
        await txn4.getOutput('payout', 'v3383', ctc0, v3383);
        const v3390 = stdlib.safeSub(v2219, v3223);
        const cv2217 = v2217;
        const cv2218 = v2218;
        const cv2219 = v3390;
        const cv2220 = v2426;
        const cv2226 = v3250;
        const cv2227 = v3382;
        
        v2217 = cv2217;
        v2218 = cv2218;
        v2219 = cv2219;
        v2220 = cv2220;
        v2226 = cv2226;
        v2227 = cv2227;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _addSong4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addSong4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addSong4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    owner: ctc1,
    sessionPlays: ctc2,
    totalPlays: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Contract;
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    addSong0_93: ctc12,
    buyMembership0_93: ctc13,
    incrementPlayCount0_93: ctc12,
    payout0_93: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2]);
  const v2256 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:81:36:application call to [unknown function] (defined at: ./index.rsh:81:36:function exp)', 'at ./index.rsh:55:64:application call to "runaddSong0_93" (defined at: ./index.rsh:81:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'in',
    who: 'addSong'
    });
  const v2257 = v2256[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2259 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2257), null);
  const v2260 = {
    None: 0,
    Some: 1
    }[v2259[0]];
  const v2261 = stdlib.eq(v2260, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2261, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:83:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:36:application call to [unknown function] (defined at: ./index.rsh:81:36:function exp)', 'at ./index.rsh:55:64:application call to "runaddSong0_93" (defined at: ./index.rsh:81:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: null,
    who: 'addSong'
    });
  const v2268 = ['addSong0_93', v2256];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227, v2268],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:85:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:85:14:decimal', stdlib.UInt_max, '1'), v2192]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
      
      switch (v2425[0]) {
        case 'addSong0_93': {
          const v2428 = v2425[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addSong"
            });
          const v2433 = v2428[stdlib.checkedBigNumberify('./index.rsh:81:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2433), null);
          ;
          const v2522 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
          const v2523 = v2522[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
          const v2524 = stdlib.add(v2523, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v2526 = stdlib.Array_set(v2522, '0', v2524);
          const v2527 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v2526);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v2192
            });
          const v2535 = {
            owner: v2424,
            sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await stdlib.simMapSet(sim_r, 0, v2433, v2535);
          const v2536 = v2527[stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0')];
          const v2537 = v2536[stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0')];
          const v2541 = stdlib.sub(v2537, stdlib.checkedBigNumberify('./index.rsh:91:20:decimal', stdlib.UInt_max, '1'));
          const v2543 = stdlib.Array_set(v2536, '0', v2541);
          const v2544 = stdlib.Array_set(v2527, stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0'), v2543);
          sim_r.txns.push({
            kind: 'from',
            to: v2424,
            tok: v2192
            });
          const v2545 = null;
          const v2546 = await txn1.getOutput('addSong', 'v2545', ctc0, v2545);
          
          const v4012 = v2217;
          const v4013 = v2218;
          const v4014 = v2219;
          const v4015 = v2426;
          const v4016 = v2544;
          const v4017 = v2227;
          sim_r.isHalt = false;
          
          break;
          }
        case 'buyMembership0_93': {
          const v2669 = v2425[1];
          
          break;
          }
        case 'incrementPlayCount0_93': {
          const v2910 = v2425[1];
          
          break;
          }
        case 'payout0_93': {
          const v3151 = v2425[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
  switch (v2425[0]) {
    case 'addSong0_93': {
      const v2428 = v2425[1];
      undefined /* setApiDetails */;
      const v2433 = v2428[stdlib.checkedBigNumberify('./index.rsh:81:10:spread', stdlib.UInt_max, '0')];
      const v2434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2433), null);
      const v2435 = {
        None: 0,
        Some: 1
        }[v2434[0]];
      const v2436 = stdlib.eq(v2435, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2436, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:83:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:36:application call to [unknown function] (defined at: ./index.rsh:81:36:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:81:36:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: null,
        who: 'addSong'
        });
      ;
      const v2522 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
      const v2523 = v2522[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
      const v2524 = stdlib.add(v2523, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v2526 = stdlib.Array_set(v2522, '0', v2524);
      const v2527 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v2526);
      ;
      const v2535 = {
        owner: v2424,
        sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.mapSet(map0, v2433, v2535);
      const v2536 = v2527[stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0')];
      const v2537 = v2536[stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0')];
      const v2541 = stdlib.sub(v2537, stdlib.checkedBigNumberify('./index.rsh:91:20:decimal', stdlib.UInt_max, '1'));
      const v2543 = stdlib.Array_set(v2536, '0', v2541);
      const v2544 = stdlib.Array_set(v2527, stdlib.checkedBigNumberify('./index.rsh:91:38:application', stdlib.UInt_max, '0'), v2543);
      ;
      const v2545 = null;
      const v2546 = await txn1.getOutput('addSong', 'v2545', ctc0, v2545);
      if (v1801) {
        stdlib.protect(ctc0, await interact.out(v2428, v2546), {
          at: './index.rsh:81:11:application',
          fs: ['at ./index.rsh:81:11:application call to [unknown function] (defined at: ./index.rsh:81:11:function exp)', 'at ./index.rsh:92:17:application call to "notify" (defined at: ./index.rsh:86:16:function exp)', 'at ./index.rsh:86:16:application call to [unknown function] (defined at: ./index.rsh:86:16:function exp)'],
          msg: 'out',
          who: 'addSong'
          });
        }
      else {
        }
      
      const v4012 = v2217;
      const v4013 = v2218;
      const v4014 = v2219;
      const v4015 = v2426;
      const v4016 = v2544;
      const v4017 = v2227;
      return;
      
      break;
      }
    case 'buyMembership0_93': {
      const v2669 = v2425[1];
      return;
      break;
      }
    case 'incrementPlayCount0_93': {
      const v2910 = v2425[1];
      return;
      break;
      }
    case 'payout0_93': {
      const v3151 = v2425[1];
      return;
      break;
      }
    }
  
  
  };
export async function _buyMembership4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyMembership4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyMembership4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    owner: ctc1,
    sessionPlays: ctc2,
    totalPlays: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Contract;
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    addSong0_93: ctc13,
    buyMembership0_93: ctc11,
    incrementPlayCount0_93: ctc13,
    payout0_93: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2]);
  const v2237 = ctc.selfAddress();
  const v2239 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:68:33:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to "runbuyMembership0_93" (defined at: ./index.rsh:68:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'in',
    who: 'buyMembership'
    });
  const v2240 = v2226[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
  const v2241 = v2240[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
  const v2242 = stdlib.gt(v2241, stdlib.checkedBigNumberify('./index.rsh:69:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2242, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:33:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to "runbuyMembership0_93" (defined at: ./index.rsh:68:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'access token balance sufficent',
    who: 'buyMembership'
    });
  const v2244 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2237), null);
  const v2245 = {
    None: 0,
    Some: 1
    }[v2244[0]];
  const v2246 = stdlib.eq(v2245, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2247 = v2246 ? false : true;
  stdlib.assert(v2247, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:33:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to "runbuyMembership0_93" (defined at: ./index.rsh:68:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'is member',
    who: 'buyMembership'
    });
  const v2252 = ['buyMembership0_93', v2239];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227, v2252],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:5:25:decimal', stdlib.UInt_max, '1'), [[stdlib.checkedBigNumberify('./index.rsh:72:28:decimal', stdlib.UInt_max, '0'), v2192]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
      
      switch (v2425[0]) {
        case 'addSong0_93': {
          const v2428 = v2425[1];
          
          break;
          }
        case 'buyMembership0_93': {
          const v2669 = v2425[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyMembership"
            });
          const v2686 = v2226[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
          const v2687 = v2686[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2424), null);
          const v2762 = stdlib.add(v2227, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          const v2809 = stdlib.sub(v2687, stdlib.checkedBigNumberify('./index.rsh:74:20:decimal', stdlib.UInt_max, '1'));
          const v2811 = stdlib.Array_set(v2686, '0', v2809);
          const v2812 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:74:38:application', stdlib.UInt_max, '0'), v2811);
          sim_r.txns.push({
            kind: 'from',
            to: v2424,
            tok: v2192
            });
          await stdlib.simMapSet(sim_r, 2, v2424, null);
          const v2814 = null;
          const v2815 = await txn1.getOutput('buyMembership', 'v2814', ctc0, v2814);
          
          const v2820 = stdlib.safeAdd(v2217, stdlib.checkedBigNumberify('./index.rsh:77:46:decimal', stdlib.UInt_max, '1'));
          const v2821 = stdlib.safeAdd(v2219, stdlib.checkedBigNumberify('./index.rsh:5:25:decimal', stdlib.UInt_max, '1'));
          const v4042 = v2820;
          const v4043 = v2218;
          const v4044 = v2821;
          const v4045 = v2426;
          const v4046 = v2812;
          const v4047 = v2762;
          sim_r.isHalt = false;
          
          break;
          }
        case 'incrementPlayCount0_93': {
          const v2910 = v2425[1];
          
          break;
          }
        case 'payout0_93': {
          const v3151 = v2425[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
  switch (v2425[0]) {
    case 'addSong0_93': {
      const v2428 = v2425[1];
      return;
      break;
      }
    case 'buyMembership0_93': {
      const v2669 = v2425[1];
      undefined /* setApiDetails */;
      const v2686 = v2226[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
      const v2687 = v2686[stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, '0')];
      const v2688 = stdlib.gt(v2687, stdlib.checkedBigNumberify('./index.rsh:69:36:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2688, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:69:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:33:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'access token balance sufficent',
        who: 'buyMembership'
        });
      const v2690 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2424), null);
      const v2691 = {
        None: 0,
        Some: 1
        }[v2690[0]];
      const v2692 = stdlib.eq(v2691, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2693 = v2692 ? false : true;
      stdlib.assert(v2693, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:70:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:33:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:68:33:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'is member',
        who: 'buyMembership'
        });
      const v2762 = stdlib.add(v2227, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      ;
      ;
      const v2809 = stdlib.sub(v2687, stdlib.checkedBigNumberify('./index.rsh:74:20:decimal', stdlib.UInt_max, '1'));
      const v2811 = stdlib.Array_set(v2686, '0', v2809);
      const v2812 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:74:38:application', stdlib.UInt_max, '0'), v2811);
      ;
      await stdlib.mapSet(map2, v2424, null);
      const v2814 = null;
      const v2815 = await txn1.getOutput('buyMembership', 'v2814', ctc0, v2814);
      if (v1801) {
        stdlib.protect(ctc0, await interact.out(v2669, v2815), {
          at: './index.rsh:68:11:application',
          fs: ['at ./index.rsh:68:11:application call to [unknown function] (defined at: ./index.rsh:68:11:function exp)', 'at ./index.rsh:76:17:application call to "notify" (defined at: ./index.rsh:73:16:function exp)', 'at ./index.rsh:73:16:application call to [unknown function] (defined at: ./index.rsh:73:16:function exp)'],
          msg: 'out',
          who: 'buyMembership'
          });
        }
      else {
        }
      
      const v2820 = stdlib.safeAdd(v2217, stdlib.checkedBigNumberify('./index.rsh:77:46:decimal', stdlib.UInt_max, '1'));
      const v2821 = stdlib.safeAdd(v2219, stdlib.checkedBigNumberify('./index.rsh:5:25:decimal', stdlib.UInt_max, '1'));
      const v4042 = v2820;
      const v4043 = v2218;
      const v4044 = v2821;
      const v4045 = v2426;
      const v4046 = v2812;
      const v4047 = v2762;
      return;
      
      break;
      }
    case 'incrementPlayCount0_93': {
      const v2910 = v2425[1];
      return;
      break;
      }
    case 'payout0_93': {
      const v3151 = v2425[1];
      return;
      break;
      }
    }
  
  
  };
export async function _incrementPlayCount4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _incrementPlayCount4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _incrementPlayCount4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    owner: ctc1,
    sessionPlays: ctc2,
    totalPlays: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Contract;
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    addSong0_93: ctc12,
    buyMembership0_93: ctc13,
    incrementPlayCount0_93: ctc12,
    payout0_93: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2]);
  const v2270 = ctc.selfAddress();
  const v2272 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:97:47:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to "runincrementPlayCount0_93" (defined at: ./index.rsh:97:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'in',
    who: 'incrementPlayCount'
    });
  const v2273 = v2272[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2275 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2273), null);
  const v2276 = {
    None: 0,
    Some: 1
    }[v2275[0]];
  const v2277 = stdlib.eq(v2276, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2277, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:47:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to "runincrementPlayCount0_93" (defined at: ./index.rsh:97:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'song contract listed',
    who: 'incrementPlayCount'
    });
  const v2280 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2270), null);
  const v2281 = stdlib.fromSome(v2280, stdlib.checkedBigNumberify('./index.rsh:100:54:decimal', stdlib.UInt_max, '0'));
  const v2282 = stdlib.safeSub(v2220, v2281);
  const v2283 = stdlib.ge(v2282, stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v2283, {
    at: './index.rsh:102:14:application',
    fs: ['at ./index.rsh:97:47:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to "runincrementPlayCount0_93" (defined at: ./index.rsh:97:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'can incriment play',
    who: 'incrementPlayCount'
    });
  const v2292 = ['incrementPlayCount0_93', v2272];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227, v2292],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:106:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '1'), v2192]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
      
      switch (v2425[0]) {
        case 'addSong0_93': {
          const v2428 = v2425[1];
          
          break;
          }
        case 'buyMembership0_93': {
          const v2669 = v2425[1];
          
          break;
          }
        case 'incrementPlayCount0_93': {
          const v2910 = v2425[1];
          sim_r.txns.push({
            kind: 'api',
            who: "incrementPlayCount"
            });
          const v2943 = v2910[stdlib.checkedBigNumberify('./index.rsh:97:10:spread', stdlib.UInt_max, '0')];
          const v2944 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2943), null);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2424), null);
          ;
          const v3004 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
          const v3005 = v3004[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
          const v3006 = stdlib.add(v3005, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v3008 = stdlib.Array_set(v3004, '0', v3006);
          const v3009 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v3008);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v2192
            });
          const v3076 = {
            owner: v2184,
            sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v3077 = stdlib.fromSome(v2944, v3076);
          const v3079 = v3009[stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0')];
          const v3080 = v3079[stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0')];
          const v3084 = stdlib.sub(v3080, stdlib.checkedBigNumberify('./index.rsh:108:20:decimal', stdlib.UInt_max, '1'));
          const v3086 = stdlib.Array_set(v3079, '0', v3084);
          const v3087 = stdlib.Array_set(v3009, stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0'), v3086);
          sim_r.txns.push({
            kind: 'from',
            to: v2424,
            tok: v2192
            });
          const v3088 = v3077.owner;
          const v3089 = v3077.sessionPlays;
          const v3090 = v3077.totalPlays;
          const v3092 = stdlib.safeAdd(v3089, stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, '1'));
          const v3094 = stdlib.safeAdd(v3090, stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, '1'));
          const v3095 = {
            owner: v3088,
            sessionPlays: v3092,
            totalPlays: v3094
            };
          await stdlib.simMapSet(sim_r, 0, v2943, v3095);
          await stdlib.simMapSet(sim_r, 1, v2424, v2426);
          const v3098 = await txn1.getOutput('incrementPlayCount', 'v3094', ctc2, v3094);
          
          const v3104 = stdlib.safeAdd(v2218, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '1'));
          const v4072 = v2217;
          const v4073 = v3104;
          const v4074 = v2219;
          const v4075 = v2426;
          const v4076 = v3087;
          const v4077 = v2227;
          sim_r.isHalt = false;
          
          break;
          }
        case 'payout0_93': {
          const v3151 = v2425[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
  switch (v2425[0]) {
    case 'addSong0_93': {
      const v2428 = v2425[1];
      return;
      break;
      }
    case 'buyMembership0_93': {
      const v2669 = v2425[1];
      return;
      break;
      }
    case 'incrementPlayCount0_93': {
      const v2910 = v2425[1];
      undefined /* setApiDetails */;
      const v2943 = v2910[stdlib.checkedBigNumberify('./index.rsh:97:10:spread', stdlib.UInt_max, '0')];
      const v2944 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2943), null);
      const v2945 = {
        None: 0,
        Some: 1
        }[v2944[0]];
      const v2946 = stdlib.eq(v2945, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2946, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:47:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'song contract listed',
        who: 'incrementPlayCount'
        });
      const v2949 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2424), null);
      const v2950 = stdlib.fromSome(v2949, stdlib.checkedBigNumberify('./index.rsh:100:54:decimal', stdlib.UInt_max, '0'));
      const v2951 = stdlib.safeSub(v2220, v2950);
      const v2952 = stdlib.ge(v2951, stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v2952, {
        at: './index.rsh:102:14:application',
        fs: ['at ./index.rsh:97:47:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:97:47:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'can incriment play',
        who: 'incrementPlayCount'
        });
      ;
      const v3004 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
      const v3005 = v3004[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
      const v3006 = stdlib.add(v3005, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v3008 = stdlib.Array_set(v3004, '0', v3006);
      const v3009 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v3008);
      ;
      const v3073 = stdlib.safeSub(v2426, v2950);
      const v3074 = stdlib.ge(v3073, stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v3074, {
        at: './index.rsh:102:14:application',
        fs: ['at ./index.rsh:107:16:application call to [unknown function] (defined at: ./index.rsh:107:16:function exp)'],
        msg: 'can incriment play',
        who: 'incrementPlayCount'
        });
      const v3076 = {
        owner: v2184,
        sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3077 = stdlib.fromSome(v2944, v3076);
      const v3079 = v3009[stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0')];
      const v3080 = v3079[stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0')];
      const v3084 = stdlib.sub(v3080, stdlib.checkedBigNumberify('./index.rsh:108:20:decimal', stdlib.UInt_max, '1'));
      const v3086 = stdlib.Array_set(v3079, '0', v3084);
      const v3087 = stdlib.Array_set(v3009, stdlib.checkedBigNumberify('./index.rsh:108:38:application', stdlib.UInt_max, '0'), v3086);
      ;
      const v3088 = v3077.owner;
      const v3089 = v3077.sessionPlays;
      const v3090 = v3077.totalPlays;
      const v3092 = stdlib.safeAdd(v3089, stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, '1'));
      const v3094 = stdlib.safeAdd(v3090, stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, '1'));
      const v3095 = {
        owner: v3088,
        sessionPlays: v3092,
        totalPlays: v3094
        };
      await stdlib.mapSet(map0, v2943, v3095);
      await stdlib.mapSet(map1, v2424, v2426);
      const v3098 = await txn1.getOutput('incrementPlayCount', 'v3094', ctc2, v3094);
      if (v1801) {
        stdlib.protect(ctc0, await interact.out(v2910, v3098), {
          at: './index.rsh:97:11:application',
          fs: ['at ./index.rsh:97:11:application call to [unknown function] (defined at: ./index.rsh:97:11:function exp)', 'at ./index.rsh:116:17:application call to "notify" (defined at: ./index.rsh:107:16:function exp)', 'at ./index.rsh:107:16:application call to [unknown function] (defined at: ./index.rsh:107:16:function exp)'],
          msg: 'out',
          who: 'incrementPlayCount'
          });
        }
      else {
        }
      
      const v3104 = stdlib.safeAdd(v2218, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '1'));
      const v4072 = v2217;
      const v4073 = v3104;
      const v4074 = v2219;
      const v4075 = v2426;
      const v4076 = v3087;
      const v4077 = v2227;
      return;
      
      break;
      }
    case 'payout0_93': {
      const v3151 = v2425[1];
      return;
      break;
      }
    }
  
  
  };
export async function _payout4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _payout4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _payout4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    owner: ctc1,
    sessionPlays: ctc2,
    totalPlays: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Contract;
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    addSong0_93: ctc12,
    buyMembership0_93: ctc13,
    incrementPlayCount0_93: ctc12,
    payout0_93: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2]);
  const v2294 = ctc.selfAddress();
  const v2296 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to "runpayout0_93" (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'in',
    who: 'payout'
    });
  const v2297 = v2296[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2299 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2297), null);
  const v2300 = {
    None: 0,
    Some: 1
    }[v2299[0]];
  const v2301 = stdlib.eq(v2300, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2301, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to "runpayout0_93" (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'song exists',
    who: 'payout'
    });
  const v2304 = {
    owner: v2184,
    sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v2305 = stdlib.fromSome(v2299, v2304);
  const v2306 = v2305.owner;
  const v2307 = stdlib.addressEq(v2306, v2294);
  stdlib.assert(v2307, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to "runpayout0_93" (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'is song owner',
    who: 'payout'
    });
  const v2309 = stdlib.gt(v2219, stdlib.checkedBigNumberify('./index.rsh:125:26:decimal', stdlib.UInt_max, '0'));
  const v2310 = v2305.sessionPlays;
  const v2311 = stdlib.gt(v2310, stdlib.checkedBigNumberify('./index.rsh:125:59:decimal', stdlib.UInt_max, '0'));
  const v2312 = v2309 ? v2311 : false;
  stdlib.assert(v2312, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to "runpayout0_93" (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'has payout',
    who: 'payout'
    });
  const v2315 = stdlib.safeDiv(v2310, v2218);
  const v2317 = stdlib.safeMul(v2315, v2227);
  const v2319 = stdlib.ge(v2227, v2317);
  stdlib.assert(v2319, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to "runpayout0_93" (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)'],
    msg: 'balance check',
    who: 'payout'
    });
  const v2329 = ['payout0_93', v2296];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2184, v2192, v2217, v2218, v2219, v2220, v2226, v2227, v2329],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:130:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:130:14:decimal', stdlib.UInt_max, '1'), v2192]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
      
      switch (v2425[0]) {
        case 'addSong0_93': {
          const v2428 = v2425[1];
          
          break;
          }
        case 'buyMembership0_93': {
          const v2669 = v2425[1];
          
          break;
          }
        case 'incrementPlayCount0_93': {
          const v2910 = v2425[1];
          
          break;
          }
        case 'payout0_93': {
          const v3151 = v2425[1];
          sim_r.txns.push({
            kind: 'api',
            who: "payout"
            });
          const v3204 = v3151[stdlib.checkedBigNumberify('./index.rsh:121:10:spread', stdlib.UInt_max, '0')];
          const v3205 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3204), null);
          const v3210 = {
            owner: v2184,
            sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v3211 = stdlib.fromSome(v3205, v3210);
          const v3212 = v3211.owner;
          const v3216 = v3211.sessionPlays;
          const v3221 = stdlib.safeDiv(v3216, v2218);
          const v3223 = stdlib.safeMul(v3221, v2227);
          ;
          const v3245 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
          const v3246 = v3245[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
          const v3247 = stdlib.add(v3246, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v3249 = stdlib.Array_set(v3245, '0', v3247);
          const v3250 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v3249);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v2192
            });
          const v3377 = v3211.totalPlays;
          const v3378 = {
            owner: v3212,
            sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            totalPlays: v3377
            };
          await stdlib.simMapSet(sim_r, 0, v3204, v3378);
          const v3382 = stdlib.sub(v2227, v3223);
          sim_r.txns.push({
            kind: 'from',
            to: v2424,
            tok: undefined /* Nothing */
            });
          const v3383 = null;
          const v3384 = await txn1.getOutput('payout', 'v3383', ctc0, v3383);
          
          const v3390 = stdlib.safeSub(v2219, v3223);
          const v4102 = v2217;
          const v4103 = v2218;
          const v4104 = v3390;
          const v4105 = v2426;
          const v4106 = v3250;
          const v4107 = v3382;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2425], secs: v2427, time: v2426, didSend: v1801, from: v2424 } = txn1;
  switch (v2425[0]) {
    case 'addSong0_93': {
      const v2428 = v2425[1];
      return;
      break;
      }
    case 'buyMembership0_93': {
      const v2669 = v2425[1];
      return;
      break;
      }
    case 'incrementPlayCount0_93': {
      const v2910 = v2425[1];
      return;
      break;
      }
    case 'payout0_93': {
      const v3151 = v2425[1];
      undefined /* setApiDetails */;
      const v3204 = v3151[stdlib.checkedBigNumberify('./index.rsh:121:10:spread', stdlib.UInt_max, '0')];
      const v3205 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3204), null);
      const v3206 = {
        None: 0,
        Some: 1
        }[v3205[0]];
      const v3207 = stdlib.eq(v3206, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3207, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'song exists',
        who: 'payout'
        });
      const v3210 = {
        owner: v2184,
        sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3211 = stdlib.fromSome(v3205, v3210);
      const v3212 = v3211.owner;
      const v3213 = stdlib.addressEq(v3212, v2424);
      stdlib.assert(v3213, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'is song owner',
        who: 'payout'
        });
      const v3215 = stdlib.gt(v2219, stdlib.checkedBigNumberify('./index.rsh:125:26:decimal', stdlib.UInt_max, '0'));
      const v3216 = v3211.sessionPlays;
      const v3217 = stdlib.gt(v3216, stdlib.checkedBigNumberify('./index.rsh:125:59:decimal', stdlib.UInt_max, '0'));
      const v3218 = v3215 ? v3217 : false;
      stdlib.assert(v3218, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'has payout',
        who: 'payout'
        });
      const v3221 = stdlib.safeDiv(v3216, v2218);
      const v3223 = stdlib.safeMul(v3221, v2227);
      const v3225 = stdlib.ge(v2227, v3223);
      stdlib.assert(v3225, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)', 'at ./index.rsh:55:64:application call to [unknown function] (defined at: ./index.rsh:55:64:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)'],
        msg: 'balance check',
        who: 'payout'
        });
      ;
      const v3245 = v2226[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
      const v3246 = v3245[stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0')];
      const v3247 = stdlib.add(v3246, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v3249 = stdlib.Array_set(v3245, '0', v3247);
      const v3250 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:55:64:dot', stdlib.UInt_max, '0'), v3249);
      ;
      const v3377 = v3211.totalPlays;
      const v3378 = {
        owner: v3212,
        sessionPlays: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalPlays: v3377
        };
      await stdlib.mapSet(map0, v3204, v3378);
      const v3382 = stdlib.sub(v2227, v3223);
      ;
      const v3383 = null;
      const v3384 = await txn1.getOutput('payout', 'v3383', ctc0, v3383);
      if (v1801) {
        stdlib.protect(ctc0, await interact.out(v3151, v3384), {
          at: './index.rsh:121:11:application',
          fs: ['at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:138:17:application call to "notify" (defined at: ./index.rsh:131:16:function exp)', 'at ./index.rsh:131:16:application call to [unknown function] (defined at: ./index.rsh:131:16:function exp)'],
          msg: 'out',
          who: 'payout'
          });
        }
      else {
        }
      
      const v3390 = stdlib.safeSub(v2219, v3223);
      const v4102 = v2217;
      const v4103 = v2218;
      const v4104 = v3390;
      const v4105 = v2426;
      const v4106 = v3250;
      const v4107 = v3382;
      return;
      
      break;
      }
    }
  
  
  };
export async function addSong(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addSong expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addSong expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _addSong4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function buyMembership(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyMembership expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyMembership expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _buyMembership4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function incrementPlayCount(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for incrementPlayCount expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for incrementPlayCount expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _incrementPlayCount4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function payout(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for payout expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for payout expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _payout4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`addSong(uint64)byte[0]`, `buyMembership()byte[0]`, `incrementPlayCount(uint64)uint64`, `payout(uint64)byte[0]`],
    pure: [`checkPayout(uint64)uint64`, `totalBal()uint64`, `totalPlays()uint64`],
    sigs: [`addSong(uint64)byte[0]`, `buyMembership()byte[0]`, `checkPayout(uint64)uint64`, `incrementPlayCount(uint64)uint64`, `payout(uint64)byte[0]`, `totalBal()uint64`, `totalPlays()uint64`]
    },
  appApproval: `ByATAAEIBCADO/+G2+MH7/b6qg3QxYfiD4mPhM0IMDiH5rLNA7zr/+MEKAJkoI0GJgQBAAABAQgAAAAAAJiWgCI1ADEYQQX5KWRJIls1ASRbNQIxGSMSQQAKMQAoIQavZkIFxjYaABdJQQDmIjUEIzUGSSEHDEAAlEkhCAxAAC9JIQkMQAAWIQkSRDQBJRJEKGRJNQNXMAg1B0IFnCEIEkQ2GgE1/4ABAzT/UEIAwUkhCgxAABYhChJENAElEkQoZEk1A1c4CDUHQgVtIQcSRDQBJRJEKGRJNQNXACAkr1Akr1A2GgEXiAV1VwAxSTX/VwEwNP8iVU0hBFs0AyELWwo0AyEMWwsWNQdCBSxJIQ0MQAApSSEODEAAECEOEkQ2GgE1/yg0/1BCAEUhDRJENhoBNf+AAQI0/1BCADOB3+7O5gESRCk1/yo0/1Akr1BCAB42GgIXNQQ2GgM2GgEXSSMMQAOASSEFDEADOiEFEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBFs1/iEPWzX9IQtbNfwhDFs1+1dIETX6gVlbNflJNQU1+IAEkfGnmjT4ULA0+CJVSSEQDEAB1EkhBQxAAMshBRJENPhXAQg19zT3FzX2NPaIBH1XADFJNfUiVSMSRDT/JK9QJK9QNPVJNfNXATA08yJVTUk19FcAIEk18zEAEkQ09CEEWzXyNPsiDTTyIg0QRDTyNPwKNPkLNfE0+TTxD0Q0+lcAETXwIzT+iARJNPYoNPaIBBoqNPMkr1A09FcoCFBQXABmsSKyATTxsggjshAxALIHs4AIAAAAAAAADTewKTUHNP80/jT9NPw0+zTxCTIGNPo08EkiWyMIFlwAXAA0+TTxCUIDG0g0+FcBCDX3NPcXNfY09ogDtVcAMUk19SJVIxJEIjEAiAOkVzEJSTXzI1s08yJVTTX0NAOBQFs09AkhEQ9ENPpXABE18zT6NPNJIlsjCBZcAFwANfIjNP6IA5MyBjT0CSERD0Q0/ySvUCSvUDT1STXwVwEwNPAiVU018TTyVwARNfCxIrIBI7ISJbIQMQCyFDT+shGzNPEhD1sjCDXvNPYoNPaIAyEqNPFXACA08SEEWyMIFlA07xZQUFwAZjEAKDEAiAMCKjIGFlBcMWaACAAAAAAAAAwWNO8WULA07xY1BzT/NP40/TT8Iwg0+zIGNPI08EkiWyMJFlwAXAA0+UICGUkjDEAAc0g0+lcAEUk19yJbSTX2Ig1EMQCIAqlXOgEiVSMTRCOIAqyxIrIBI7ISJbIQMQCyFDT+shGzMQAoMQCIAoIqXDpmgAgAAAAAAAAK/rApNQc0/zT+NP0jCDT8NPsjCDIGNPo09zT2IwkWXABcADT5IwhCAaBINPhXAQg19zT3FzX2NPaIAjpXADEiVSISRDT6VwARNfU0+jT1SSJbIwgWXABcADX0IzT+iAI8NPYoNPaIAg0qMQAkr1Akr1BQXABmNPRXABE187EisgEjshIlshAxALIUNP6yEbOACAAAAAAAAAnxsCk1BzT/NP40/TT8NPsyBjT0NPNJIlsjCRZcAFwANPlCAQ0jEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQRbIiIiMgY0A1coESJCAM5IIRKIAYMiNAESRDQESSISTDQCEhFEgARfDav6sIERrzX/IRKIAWKxIrIBIQWyEIGAreIEsiIisiOACERJUkFEAAAAsiWAIERpcmFkaWNhbCBBY2Nlc3MAAAAAAAAAAAAAAAAAAAAAsiaBYK+yJzIDsigyCrIps7Q8Nf6ACAAAAAAAAAiPNP4WULA0/jX9NP9JVwARK1wAXABJNfxJVwARK1wIXABJNftJVwARKFwQXAA1+jEANP0WUDT6UChLAVcAOWdIIzUBMgY1AkIAWjX/Nf41/TX8Nfs1+jX5STX4NPkWUDT6FlA0+xZQNPwWUDT9FlA0/lA0/xZQKEsBVwBhZ0glNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEQMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEGr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 59,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [`Cannot use 'Contract' as Map key. Only 'Address' keys are allowed.`],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
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
        "internalType": "struct T12",
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
        "internalType": "struct T12",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_addSong0_93",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_buyMembership0_93",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_incrementPlayCount0_93",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_payout0_93",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T16",
                "name": "v2425",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
    "name": "_reach_oe_v2191",
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
    "name": "_reach_oe_v2545",
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
    "name": "_reach_oe_v2814",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v3094",
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
    "name": "_reach_oe_v3383",
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
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "_owner",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_sessionPlays",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_totalPlays",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
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
        "internalType": "struct T2",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
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
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_addSong0_93",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_buyMembership0_93",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_incrementPlayCount0_93",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_payout0_93",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T16",
                "name": "v2425",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "addSong",
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
    "name": "buyMembership",
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
        "internalType": "address payable",
        "name": "v4108",
        "type": "address"
      }
    ],
    "name": "checkPayout",
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
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "incrementPlayCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "payout",
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
    "name": "totalBal",
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
    "name": "totalPlays",
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
  Bytecode: `0x60806040526040516200436f3803806200436f8339810160408190526200002691620005fd565b60008055436003556200003862000431565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000af3415600a62000384565b6f44697261646963616c2041636365737360801b604082810191825264111254905160da1b6060840152608083018051600090819052815160209081018290529151830181905260a085015291518151928301520160408051601f198184030181529082905260608301516001600160c01b03191660208301529060280160408051808303601f1901815282825260808581015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a086015160208401529101604051602081830303815290604052629896806000604051620001a390620004db565b620001b496959493929190620006ce565b604051809103906000f080158015620001d1573d6000803e3d6000fd5b506001600160a01b031660c0820181905260e082018190526040519081527f78a30e6557ec19cdf66b2fda36adcc64f838fa641e65424193281bc871ee20b39060200160405180910390a162000290816020015160006040518060600160405280629896808152602001856020015160006001811062000255576200025562000668565b602002015160200151815260200185602001516000600181106200027d576200027d62000668565b60200201516040015115159052620003ae565b6101008201818152604080516060810182528251515181526298968060208201529151620002c99392600092909190820190836200027d565b610120820181815260408051606081018252825151518152915151602090810151908301526000908201819052620003029291620003ae565b61014082015262000312620004e9565b33815260e08201516001600160a01b03166020808301919091526101408301516040808401919091526001600081905543905551620003549183910162000739565b604051602081830303815290604052600290805190602001906200037a9291906200050a565b505050506200080d565b81620003aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003b862000599565b60005b60018110156200040e57848160018110620003da57620003da62000668565b6020020151828260018110620003f457620003f462000668565b6020020152806200040581620007a6565b915050620003bb565b508181846001811062000425576200042562000668565b60200201529392505050565b604080516101c081019091526000610160820181815261018083018290526101a08301919091528152602081016200046862000599565b8152600060208083018290526040808401839052805160608082018352848252928101849052908101839052908301526080820181905260a0820181905260c082015260e001620004b862000599565b8152602001620004c762000599565b8152602001620004d662000599565b905290565b61108780620032e883390190565b6040805160608101825260008082526020820152908101620004d662000599565b8280546200051890620007d0565b90600052602060002090601f0160209004810192826200053c576000855562000587565b82601f106200055757805160ff191683800117855562000587565b8280016001018555821562000587579182015b82811115620005875782518255916020019190600101906200056a565b5062000595929150620005e6565b5090565b60405180602001604052806001905b620005cf604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620005a85790505090565b5b80821115620005955760008155600101620005e7565b6000604082840312156200061057600080fd5b604080519081016001600160401b03811182821017156200064157634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200065c57600080fd5b60208201529392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620006a65760208185018101518683018201520162000688565b81811115620006b9576000602083870101525b50601f01601f19169290920160200192915050565b60c081526000620006e360c08301896200067e565b8281036020840152620006f781896200067e565b905082810360408401526200070d81886200067e565b905082810360608401526200072381876200067e565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929082850160005b60018110156200079b5782518051835284810151858401528501511515858301529183019160609091019060010162000767565b505050505092915050565b6000600019821415620007c957634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620007e557607f821691505b602082108114156200080757634e487b7160e01b600052602260045260246000fd5b50919050565b612acb806200081d6000396000f3fe6080604052600436106100e05760003560e01c80637c0c8df711610084578063ab53f2c611610056578063ab53f2c614610215578063cadc2e7a14610238578063e845c12514610265578063ec5ae1571461027857005b80637c0c8df7146101ab578063817d57f3146101c057806383230757146101ed5780638f90bf7d1461020257005b80633bc5b7bf116100bd5780633bc5b7bf1461014357806355d7c617146101705780635c581119146101835780637653a3441461018b57005b80630b7e9c44146100e95780631e93b0f1146101115780632c10a1591461013057005b366100e757005b005b6100fc6100f7366004612347565b61028d565b60405190151581526020015b60405180910390f35b34801561011d57600080fd5b506003545b604051908152602001610108565b6100e761013e366004612364565b61029e565b34801561014f57600080fd5b5061016361015e366004612347565b6102de565b60405161010891906123a2565b6100e761017e3660046123eb565b6102ef565b6100fc61032b565b34801561019757600080fd5b506101226101a6366004612347565b61033a565b3480156101b757600080fd5b5061012261036d565b3480156101cc57600080fd5b506101e06101db366004612347565b61037f565b60405161010891906123fd565b3480156101f957600080fd5b50600154610122565b6100fc610210366004612347565b6103a5565b34801561022157600080fd5b5061022a6103b0565b60405161010892919061245b565b34801561024457600080fd5b50610258610253366004612347565b61044d565b6040516101089190612495565b610122610273366004612347565b610473565b34801561028457600080fd5b5061012261047e565b60006102988261048a565b92915050565b6040805160808101825260008082526020820181905291810182905260608101919091526102da6102d43684900384018461257b565b826104ea565b5050565b6102e6611fb6565b61029882610694565b6040805160808101825260008082526020820181905291810182905260608101919091526102da6103253684900384018461261f565b8261077d565b6000610335611399565b905090565b600061035160408051602081019091526000815290565b6001600160a01b0383168152610366816113e5565b9392505050565b600080610379816115e7565b91505090565b604080516060810182526000808252602082018190529181019190915261029882611766565b60006102988261182f565b6000606060005460028080546103c5906126d0565b80601f01602080910402602001604051908101604052809291908181526020018280546103f1906126d0565b801561043e5780601f106104135761010080835404028352916020019161043e565b820191906000526020600020905b81548152906001019060200180831161042157829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915261029882611888565b60006102988261194b565b600080610379816119ac565b6000610494611fda565b60208181018051516003905251516080908101516001600160a01b03861690526040805191820181526000808352928201839052810182905260608101919091526104df828261077d565b606001519392505050565b6104fa600160005414600d611b1c565b815161051590158061050e57508251600154145b600e611b1c565b600080805560028054610527906126d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610553906126d0565b80156105a05780601f10610575576101008083540402835291602001916105a0565b820191906000526020600020905b81548152906001019060200180831161058357829003601f168201915b50505050508060200190518101906105b89190612799565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161060f3415600b611b1c565b8051610627906001600160a01b03163314600c611b1c565b61062f611ff4565b815181516001600160a01b039182169052602080840151835192169181019190915280820180516000908190528151909201829052805160409081018390528151436060909101528401518151608001525160a0015261068e81611b42565b50505050565b61069c611fb6565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156106cb576106cb61237c565b141561076d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561070c5761070c61237c565b600181111561071d5761071d61237c565b81528154610100900460ff1615156020808301919091526040805160608101825260018501546001600160a01b031681526002850154928101929092526003909301548184015291015292915050565b600080825260208201525b919050565b61078d6004600054146021611b1c565b81516107a89015806107a157508251600154145b6022611b1c565b6000808055600280546107ba906126d0565b80601f01602080910402602001604051908101604052809291908181526020018280546107e6906126d0565b80156108335780601f1061080857610100808354040283529160200191610833565b820191906000526020600020905b81548152906001019060200180831161081657829003601f168201915b505050505080602001905181019061084b91906127ec565b905061085561201d565b7f54bb99a1bdb41f43651d537454b9d0d23b487a3243a44c80dec919ce86e4a3ca338560405161088692919061288f565b60405180910390a160006020850151515160038111156108a8576108a861237c565b1415610b3057602080850151510151808252516108e5906000906108cb90610694565b5160018111156108dd576108dd61237c565b14600f611b1c565b6108f134156010611b1c565b61097f8260c001516000604051806060016040528061092c8760c0015160006001811061092057610920612907565b60200201515160010190565b81526020018660c0015160006001811061094857610948612907565b60200201516020015181526020018660c0015160006001811061096d5761096d612907565b60200201516040015115159052611bf8565b81602001819052506109a161099a3384602001516001611c6c565b6011611b1c565b604081810180513390819052815160006020918201819052835185018190528551516001600160a01b039081168252600483528582208054600160ff19909116811790915594518751518216835291869020825181870180546001600160a01b031916919093161790915581830151600282015594015160039094019390935591840151610a30929091611c7a565b604051600081527ff5932c4d31adbfbdea253fb4d4fb2cb1f8b3a36d1edebb71840225c2fe409f589060200160405180910390a160008352610a70611ff4565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151828401805191909152606080870151825185015260808701518251840152905143908201529184018051825193840190925251610b09926000918190610ae790845b6020020151516000190190565b815260208781018051518201519183019190915251604090910190600061096d565b6020820180516080019190915260e0840151905160a00152610b2a81611b42565b5061068e565b6001602085015151516003811115610b4a57610b4a61237c565b1415610d205760c08201515151610b649015156012611b1c565b610b9a6001610b7233611766565b516001811115610b8457610b8461237c565b14610b90576001610b93565b60005b6013611b1c565b610ba8600134146014611b1c565b610bc2610bbb3384602001516000611c6c565b6015611b1c565b610bd28260200151336001611c7a565b336000908152600660209081526040808320805462ff00ff19166001179055519182527f4266b1602357e7b8ff6395454bd5125d38fcd215969b7c916ff3ad08c9002241910160405180910390a160006020840152610c2f611ff4565b825181516001600160a01b039182169052602080850151835192169101526040830151610c5d906001611c8e565b60208083018051929092526060850151915101526080830151610c81906001611c8e565b602082018051604090810192909252514360609182015260c085018051835192830190935251610cfc92916000918190610cbb9084610ada565b81526020018760c00151600060018110610cd757610cd7612907565b60200201516020015181526020018760c0015160006001811061096d5761096d612907565b60208201516080015260e08301516001015b602082015160a00152610b2a81611b42565b6002602085015151516003811115610d3a57610d3a61237c565b141561107e5760208401515160609081015190820181905251610d5c90610694565b6080820181905251610d839060019081811115610d7b57610d7b61237c565b146016611b1c565b6001610d8e33611888565b516001811115610da057610da061237c565b14610dac576000610dba565b610db533611888565b604001515b60a0808301829052830151610dde91606491610dd591611cdb565b10156017611b1c565b610dea34156018611b1c565b610e198260c001516000604051806060016040528061092c8760c0015160006001811061092057610920612907565b8160c00181905250610e3b610e343384602001516001611c6c565b6019611b1c565b610e576064610e4e438460a00151611cdb565b1015601a611b1c565b815160e0820180516001600160a01b0390921690915280516000602090910181905290516040015260016080820151516001811115610e9857610e9861237c565b14610ea7578060e00151610eb1565b8060800151604001515b6101008201526020820151610ec890336001611c7a565b610edc816101000151604001516001611c8e565b61012082015261010081018051516101408301516001600160a01b0390911690525160200151610f0d906001611c8e565b61014082018051602090810192909252610120830180518251604090810191909152606085018051516001600160a01b03908116600090815260048752838120805460ff19908116600190811790925596519351518316825284822084518183018054919095166001600160a01b0319909116179093558388015160028401559284015160039092019190915533815260058652829020805490941681178455439301929092555190519081527f3a65ad7a456e642f20e9baafaa018b1ba0b17cc84ff19cf78e87d0172f6fd2a7910160405180910390a16101208101516040840152610ff8611ff4565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015190820151526060830151611034906001611c8e565b60208083018051909101919091526080840151815160409081019190915290514360609182015260c084018051835192830190935251610b099291600091819061092c9084610ada565b60036020850151515160038111156110985761109861237c565b141561068e57602084015151608001516101608201819052516110ba90610694565b6101808201819052516110e290600190818111156110da576110da61237c565b14601b611b1c565b81516101a0820180516001600160a01b0390921690915280516000602090910181905290516040015260016101808201515160018111156111255761112561237c565b1461113557806101a00151611140565b806101800151604001515b6101c082018190525161115f906001600160a01b03163314601c611b1c565b61118a6000836080015111611175576000611183565b6000826101c0015160200151115b601d611b1c565b6111ae6111a4826101c00151602001518460600151611d2a565b8360e00151611d71565b6101e0820181905260e08301516111c8911115601e611b1c565b6111d43415601f611b1c565b6111ee6111e73384602001516001611c6c565b6020611b1c565b6101c08101805151610200830180516001600160a01b03928316905280516000602091820181905293516040908101518351820152610160860180515185168652600483528186208054600160ff199091168117909155935190515185168652818620815194810180546001600160a01b0319169590961694909417909455908301516002830155918201516003909101556101e0830151905133926108fc831502929190818181858888f193505050501580156112b0573d6000803e3d6000fd5b50604051600081527f79784f868aedf550ad6e783b4ee4e552a508bb1b26c01b34b33132d1f913f53d9060200160405180910390a1600060608401526112f4611ff4565b825181516001600160a01b03918216905260208085015183519216918101919091526040840151818301805191909152606085015190519091015260808301516101e08301516113449190611cdb565b602082018051604090810192909252514360609182015260c08501805183519283019093525161137e92916000918190610cbb9084610920565b60208201516080015260e08301516101e08301519003610d0e565b60006113a3611fda565b602081810151516001905260408051608081018252600080825292810183905290810182905260608101919091526113db828261077d565b6020015192915050565b6000600160005414156114a257600060028054611401906126d0565b80601f016020809104026020016040519081016040528092919081815260200182805461142d906126d0565b801561147a5780601f1061144f5761010080835404028352916020019161147a565b820191906000526020600020905b81548152906001019060200180831161145d57829003601f168201915b50505050508060200190518101906114929190612799565b90506114a060006007611b1c565b505b600460005414156115db576000600280546114bc906126d0565b80601f01602080910402602001604051908101604052809291908181526020018280546114e8906126d0565b80156115355780601f1061150a57610100808354040283529160200191611535565b820191906000526020600020905b81548152906001019060200180831161151857829003601f168201915b505050505080602001905181019061154d91906127ec565b905061155761210c565b815181516001600160a01b0390911690528051600060209091018190528151604001526115d36115c96001865161158d90610694565b51600181111561159f5761159f61237c565b146115ab5782516115bb565b85516115b690610694565b604001515b602001518460600151611d2a565b8360800151611d71565b949350505050565b61077860006007611b1c565b6000600160005414156116a457600060028054611603906126d0565b80601f016020809104026020016040519081016040528092919081815260200182805461162f906126d0565b801561167c5780601f106116515761010080835404028352916020019161167c565b820191906000526020600020905b81548152906001019060200180831161165f57829003601f168201915b50505050508060200190518101906116949190612799565b90506116a260006008611b1c565b505b6004600054141561175a576000600280546116be906126d0565b80601f01602080910402602001604051908101604052809291908181526020018280546116ea906126d0565b80156117375780601f1061170c57610100808354040283529160200191611737565b820191906000526020600020905b81548152906001019060200180831161171a57829003601f168201915b505050505080602001905181019061174f91906127ec565b608001519392505050565b61077860006008611b1c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156117b2576117b261237c565b141561076d576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156117f3576117f361237c565b60018111156118045761180461237c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b6000611839611fda565b60208181018051516000908190529051518201516001600160a01b03861690526040805160808101825282815292830182905282018190526060820152611880828261077d565b519392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156118d4576118d461237c565b141561076d576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156119155761191561237c565b60018111156119265761192661237c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b6000611955611fda565b60208181018051516002905251516060908101516001600160a01b0386169052604080516080810182526000808252938101849052908101839052908101919091526119a1828261077d565b604001519392505050565b600060016000541415611a69576000600280546119c8906126d0565b80601f01602080910402602001604051908101604052809291908181526020018280546119f4906126d0565b8015611a415780601f10611a1657610100808354040283529160200191611a41565b820191906000526020600020905b815481529060010190602001808311611a2457829003601f168201915b5050505050806020019051810190611a599190612799565b9050611a6760006009611b1c565b505b60046000541415611b1457600060028054611a83906126d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611aaf906126d0565b8015611afc5780601f10611ad157610100808354040283529160200191611afc565b820191906000526020600020905b815481529060010190602001808311611adf57829003601f168201915b50505050508060200190518101906104df91906127ec565b610778600060095b816102da5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611b4a61211f565b8151516001600160a01b0390811682528251602090810151909116818301528083018051516040808501919091528151830151606080860191909152825182015160808087019190915283519091015160a08087019190915283519091015160c086015291519091015160e084015260046000554360015551611bcf9183910161291d565b60405160208183030381529060405260029080519060200190611bf392919061217c565b505050565b611c00612200565b60005b6001811015611c4c57848160018110611c1e57611c1e612907565b6020020151828260018110611c3557611c35612907565b602002015280611c44816129d1565b915050611c03565b5081818460018110611c6057611c60612907565b60200201529392505050565b60006115d383853085611dd0565b611c85838383611eaa565b611bf357600080fd5b600082611c9b83826129ec565b91508110156102985760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611b39565b600082611ce88382612a04565b91508111156102985760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401611b39565b600081611d675760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401611b39565b6103668284612a1b565b6000811580611d9557508282611d878183612a3d565b9250611d939083612a1b565b145b6102985760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611b39565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611e3791612a5c565b60006040518083038185875af1925050503d8060008114611e74576040519150601f19603f3d011682016040523d82523d6000602084013e611e79565b606091505b5091509150611e8a82826001611f7b565b5080806020019051810190611e9f9190612a78565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611f0991612a5c565b60006040518083038185875af1925050503d8060008114611f46576040519150601f19603f3d011682016040523d82523d6000602084013e611f4b565b606091505b5091509150611f5c82826002611f7b565b5080806020019051810190611f719190612a78565b9695505050505050565b60608315611f8a575081610366565b825115611f9a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611b39565b6040805160608101825260008082526020820152908101611fd561224b565b905290565b604051806040016040528060008152602001611fd5612275565b604080516080810182526000918101828152606082019290925290815260208101611fd5612288565b60408051610240810190915260006102208201908152815260208101612041612200565b815260200161204e61224b565b815260200161206860408051602081019091526000815290565b8152602001612075611fb6565b815260200160008152602001612089612200565b815260200161209661224b565b81526020016120a361224b565b8152602001600081526020016120b761224b565b81526020016120d160408051602081019091526000815290565b81526020016120de611fb6565b81526020016120eb61224b565b81526020016120f861224b565b815260200160008152602001611fd561224b565b6040518060200160405280611fd561224b565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200161216f612200565b8152602001600081525090565b828054612188906126d0565b90600052602060002090601f0160209004810192826121aa57600085556121f0565b82601f106121c357805160ff19168380011785556121f0565b828001600101855582156121f0579182015b828111156121f05782518255916020019190600101906121d5565b506121fc9291506122b7565b5090565b60405180602001604052806001905b612235604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161220f5790505090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b6040518060200160405280611fd56122cc565b6040518060c001604052806000815260200160008152602001600081526020016000815260200161216f612200565b5b808211156121fc57600081556001016122b8565b6040805160a0810190915280600081526020016122f460408051602081019091526000815290565b81526000602082015260400161231560408051602081019091526000815290565b8152602001611fd560408051602081019091526000815290565b6001600160a01b038116811461234457600080fd5b50565b60006020828403121561235957600080fd5b81356103668161232f565b60006040828403121561237657600080fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b600281106123445761234461237c565b815160a08201906123b281612392565b825260208381015115158184015260409384015180516001600160a01b0316858501529081015160608401529092015160809091015290565b600060c0828403121561237657600080fd5b8151606082019061240d81612392565b8083525060208301511515602083015260408301511515604083015292915050565b60005b8381101561244a578181015183820152602001612432565b8381111561068e5750506000910152565b828152604060208201526000825180604084015261248081606085016020870161242f565b601f01601f1916919091016060019392505050565b815160608201906124a581612392565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156124fe576124fe6124c5565b60405290565b6040516020810167ffffffffffffffff811182821017156124fe576124fe6124c5565b60405160a0810167ffffffffffffffff811182821017156124fe576124fe6124c5565b6040516060810167ffffffffffffffff811182821017156124fe576124fe6124c5565b801515811461234457600080fd5b60006040828403121561258d57600080fd5b6040516040810181811067ffffffffffffffff821117156125b0576125b06124c5565b6040528235815260208301356125c58161256d565b60208201529392505050565b6000602082840312156125e357600080fd5b6040516020810181811067ffffffffffffffff82111715612606576126066124c5565b60405290508082356126178161232f565b905292915050565b600081830360c081121561263257600080fd5b61263a6124db565b8335815260a0601f198301121561265057600080fd5b612658612504565b9150612662612527565b60208501356004811061267457600080fd5b815261268386604087016125d1565b602082015260608501356126968161256d565b60408201526126a886608087016125d1565b60608201526126ba8660a087016125d1565b6080820152825260208101919091529392505050565b600181811c908216806126e457607f821691505b6020821081141561237657634e487b7160e01b600052602260045260246000fd5b80516107788161232f565b600082601f83011261272157600080fd5b612729612504565b8060608085018681111561273c57600080fd5b855b8181101561278d578281890312156127565760008081fd5b61275e61254a565b815181526020808301518183015260408084015161277b8161256d565b9083015290865290940193820161273e565b50919695505050505050565b600060a082840312156127ab57600080fd5b6127b361254a565b82516127be8161232f565b815260208301516127ce8161232f565b60208201526127e08460408501612710565b60408201529392505050565b600061014082840312156127ff57600080fd5b604051610100810181811067ffffffffffffffff82111715612823576128236124c5565b60405261282f83612705565b815261283d60208401612705565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526128778460c08501612710565b60c0820152610120929092015160e083015250919050565b6001600160a01b038381168252825160208084019190915283015151805160e08401929190600481106128c4576128c461237c565b8060408601525081602082015151166060850152604081015115156080850152816060820151511660a0850152816080820151511660c085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101519085015260c0808601516101408601949291860160005b60018110156129a45782518051835285810151868401528601511515868301529184019190830190600101612974565b50505050505060e083015161012083015292915050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156129e5576129e56129bb565b5060010190565b600082198211156129ff576129ff6129bb565b500190565b600082821015612a1657612a166129bb565b500390565b600082612a3857634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615612a5757612a576129bb565b500290565b60008251612a6e81846020870161242f565b9190910192915050565b600060208284031215612a8a57600080fd5b81516103668161256d56fea26469706673582212209177196a662ed52093213040def3cae117d060289c497a8515255ea59ac2c41964736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220562c80d1d73900eb6bf36c5facec84b61176dfb2225c98de397b7e2e9a6e920b64736f6c634300080c0033`,
  BytecodeLen: 17263,
  Which: `oD`,
  version: 8,
  views: {
    checkPayout: `checkPayout`,
    totalBal: `totalBal`,
    totalPlays: `totalPlays`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:144:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:55:64:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "addSong": addSong,
  "buyMembership": buyMembership,
  "incrementPlayCount": incrementPlayCount,
  "payout": payout
  };
export const _APIs = {
  addSong: addSong,
  buyMembership: buyMembership,
  incrementPlayCount: incrementPlayCount,
  payout: payout
  };
