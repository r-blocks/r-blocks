# Function: findLegalName()

> **findLegalName**(`name`, `block`): `string`

Ensure two identically-named procedures don't exist.
Take the proposed procedure name, and return a legal name i.e. one that
is not empty and doesn't collide with other procedures.

## Parameters

### name

`string`

Proposed procedure name.

### block

[`Block`](../../classes/Block.md)

Block to disambiguate.

## Returns

`string`

Non-colliding name.

## Alias

Blockly.Procedures.findLegalName

## Defined in

node_modules/blockly/blockly.d.ts:5379
