# Function: getAllItems()

> **getAllItems**\<`T`\>(`type`, `opt_cased`, `opt_throwIfMissing`?): `object`

Returns a map of items registered with the given type.

## Type Parameters

• **T**

## Parameters

### type

`any`

The type of the plugin. (e.g. Category)

### opt_cased

`boolean`

Whether or not to return a map with cased keys
(rather than caseless keys). False by default.

### opt_throwIfMissing?

`boolean`

Whether or not to throw an error if we
are unable to find the object. False by default.

## Returns

`object`

A map of objects with
the given type, or null if none exists.

## Alias

Blockly.registry.getAllItems

## Defined in

node_modules/blockly/blockly.d.ts:18572
