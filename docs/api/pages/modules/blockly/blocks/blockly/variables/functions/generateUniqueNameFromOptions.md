# Function: generateUniqueNameFromOptions()

> **generateUniqueNameFromOptions**(`startChar`, `usedNames`): `string`

Returns a unique name that is not present in the usedNames array. This
will try to generate single letter names in the range a -> z (skip l). It
will start with the character passed to startChar.

## Parameters

### startChar

`string`

The character to start the search at.

### usedNames

`string`[]

A list of all of the used names.

## Returns

`string`

A unique name that is not present in the usedNames array.

## Alias

Blockly.Variables.generateUniqueNameFromOptions

## Defined in

node_modules/blockly/blockly.d.ts:5138
