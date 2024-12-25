# Function: getBlockTypeCounts()

> **getBlockTypeCounts**(`block`, `opt_stripFollowing`?): `any`

Get a map of all the block's descendants mapping their type to the number of
children with that type.

## Parameters

### block

[`Block`](../../classes/Block.md)

The block to map.

### opt_stripFollowing?

`boolean`

Optionally ignore all following
statements (blocks that are not inside a value or statement input
of the block).

## Returns

`any`

Map of types to type counts for descendants of the bock.

## Alias

Blockly.common.getBlockTypeCounts

## Defined in

node_modules/blockly/blockly.d.ts:14193
