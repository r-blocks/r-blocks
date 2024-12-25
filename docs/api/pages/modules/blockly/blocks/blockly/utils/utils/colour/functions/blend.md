# Function: blend()

> **blend**(`colour1`, `colour2`, `factor`): `string` \| `null`

Blend two colours together, using the specified factor to indicate the
weight given to the first colour.

## Parameters

### colour1

`string`

First colour.

### colour2

`string`

Second colour.

### factor

`number`

The weight to be given to colour1 over colour2.
Values should be in the range [0, 1].

## Returns

`string` \| `null`

Combined colour represented in hex.

## Alias

Blockly.utils.colour.blend

## Defined in

node_modules/blockly/blockly.d.ts:1372
