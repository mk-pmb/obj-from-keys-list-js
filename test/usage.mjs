// -*- coding: utf-8, tab-width: 2 -*-

const fruit = [
  'apple',
  'blueberry',
  'cherry',
];

function len(s) { return s.length; }


export default [

  function identityDict(t) {
    t.plan(2);
    const { objFromKeysList } = t;
    const obj = objFromKeysList(1, fruit);
    t.same(String(obj), '[object Object]');
    t.same(obj, {
      apple: 'apple',
      blueberry: 'blueberry',
      cherry: 'cherry',
    });
  },


  function lengthsDict(t) {
    t.plan(2);
    const { objFromKeysList } = t;
    const obj = objFromKeysList(len, fruit);
    t.same(String(obj), '[object Object]');
    t.same(obj, {
      apple: 5,
      blueberry: 9,
      cherry: 6,
    });
  },


  function lengthsMap(t) {
    t.plan(4);
    const { objFromKeysList } = t;
    const map = objFromKeysList({
      proto: 'map',
      gen: len,
    }, fruit);
    t.same(String(map), '[object Map]');
    t.same(map.size, 3);
    t.same(Array.from(map.keys()), fruit);
    t.same(Array.from(map.values()), fruit.map(len));
  },


  function identityMap(t) {
    t.plan(4);
    const { objFromKeysList } = t;
    const map = objFromKeysList({
      proto: 'map',
      gen: 1,
    }, fruit);
    t.same(String(map), '[object Map]');
    t.same(map.size, 3);
    t.same(Array.from(map.keys()), fruit);
    t.same(Array.from(map.values()), fruit);
  },

];
