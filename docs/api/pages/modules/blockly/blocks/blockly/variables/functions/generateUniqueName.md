# Function: generateUniqueName()

> **generateUniqueName**(`workspace`): `string`

Return a new variable name that is not yet being used. This will try to
generate single letter variable names in the range 'i' to 'z' to start with.
If no unique name is located it will try 'i' to 'z', 'a' to 'h',
then 'i2' to 'z2' etc. Skip 'l'.

## Parameters

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace to be unique in.

## Returns

`string`

New variable name.

## Alias

Blockly.Variables.generateUniqueName

## Defined in

node_modules/blockly/blockly.d.ts:5128
