# Function: fromJson()

> **fromJson**(`options`): [`Field`](../../classes/Field.md) \| `null`

Construct a Field from a JSON arg object.
Finds the appropriate registered field by the type name as registered using
fieldRegistry.register.

## Parameters

### options

`any`

A JSON object with a type and options specific
to the field type.

## Returns

[`Field`](../../classes/Field.md) \| `null`

The new field instance or null if a field wasn't
found with the given type name

## Alias

Blockly.fieldRegistry.fromJson

## Package

## Defined in

node_modules/blockly/blockly.d.ts:6182
