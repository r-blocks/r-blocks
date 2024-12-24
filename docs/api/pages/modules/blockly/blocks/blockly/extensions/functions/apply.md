# Function: apply()

> **apply**(`name`, `block`, `isMutator`): `void`

Applies an extension method to a block. This should only be called during
block construction.

## Parameters

### name

`string`

The name of the extension.

### block

[`Block`](../../classes/Block.md)

The block to apply the named extension to.

### isMutator

`boolean`

True if this extension defines a mutator.

## Returns

`void`

## Throws

if the extension is not found.

## Alias

Blockly.Extensions.apply

## Defined in

node_modules/blockly/blockly.d.ts:10460
