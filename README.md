
<!--#echo json="package.json" key="name" underline="=" -->
obj-from-keys-list
==================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Create an object from a list of keys and a value generator function.
<!--/#echo -->



API
---

This module exports one function:

### objectFromKeys([opt,] keysList)

Iterate¹ over `keysList` to produce entries in an output object.
(¹ see `opt.gen` below.)

Returns the output object.

If `opt` is truthy but `opt.gen` (value generator function, see below)
is not, `opt` is treated as the value for `opt.gen`.
This is to simplify passing a function when you need no other options.

`opt` is an optional options object that supports these optional keys:

* `forEach`: Reserved for detecting when you gave only a `keysList`, no `opt`.
* `proto`: Select the prototype for the output object.
  * `undefined` (default): Start with an empty object literal.
  * `null`: Start with an empty object that has no prototype.
  * `'map'`: Start with an empty native Map and use `'set'` as `opt.setMtd`.
  * any truthy value: Use this as the prototype.
* `gen`: A value generator function.
  It will be invoked with whatever arguments `keysList.forEach` will give
  (so usually, `(key, index, keysList)`)
  and its result will be assigned to the output object
  as a property named the value of `key`.
  * `.forEach` is chosen to make it work with arrays as well as
    native `Map` and `Set` objects.
  * The number `1` can be used as `opt.gen` to use the key as the value.
* `setMtd`: Name of the setter method, as a string.
  If truth-y, instead of assigning properties of the output object,
  call its `setMtd`-named method with arguments `(key, value)`.




Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
undefined
<!--/#echo -->
