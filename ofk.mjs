// -*- coding: utf-8, tab-width: 2 -*-

function setProp(k, v) { this[k] = v; }
function arg1(x) { return x; }


function initObj(pt) {
  if (pt === undefined) { return {}; }
  if (pt === 'map') { return new Map(); }
  if (pt || (pt === null)) { return Object.create(pt); }
  const descr = (String(pt) || '<empty string>');
  throw new TypeError('Unsupported prototype: ' + descr);
}


const core = function objectFromKeysListCore(opt, keysList) {
  const pt = opt.proto;
  let { setMtd } = opt;
  if (pt === 'map') { setMtd = 'set'; }
  const output = initObj(pt);
  const setImpl = (setMtd ? output[setMtd] : setProp);
  let { gen } = opt;
  if (!gen) { throw new Error('No generator function given!'); }
  if (gen === 1) { gen = arg1; }
  keysList.forEach(function add(key, ...more) {
    const val = gen(key, ...more);
    setImpl.call(output, key, val);
  });
  return output;
};


const ofk = function objectFromKeysList(opt, keysList) {
  if (!opt) { return core(true, keysList); }
  if (opt.forEach) {
    if (!keysList) { return core(true, opt); }
    throw new Error('opt.forEach must not be used together with keysList');
  }
  if (!opt.gen) { return core({ gen: opt }, keysList); }
  return core(opt, keysList);
};


export default ofk;
