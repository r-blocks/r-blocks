# Function: registerMutator()

> **registerMutator**(`name`, `mixinObj`, `opt_helperFn`?, `opt_blockList`?): `void`

Registers a new extension function that adds a mutator to the block.
At register time this performs some basic sanity checks on the mutator.
The wrapper may also add a mutator dialog to the block, if both compose and
decompose are defined on the mixin.

## Parameters

### name

`string`

The name of this mutator extension.

### mixinObj

`any`

The values to mix in.

### opt_helperFn?

() => `any`

An optional function to apply after
mixing in the object.

### opt_blockList?

`string`[]

A list of blocks to appear in the
flyout of the mutator dialog.

## Returns

`void`

## Throws

if the mutation is invalid or can't be applied to the block.

## Alias

Blockly.Extensions.registerMutator

## Defined in

node_modules/blockly/blockly.d.ts:10436
