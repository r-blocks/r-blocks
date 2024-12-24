# Function: register()

> **register**(`type`, `fieldClass`): `void`

Registers a field type.
fieldRegistry.fromJson uses this registry to
find the appropriate field type.

## Parameters

### type

`string`

The field type name as used in the JSON definition.

### fieldClass

[`IRegistrableField`](../../type-aliases/IRegistrableField.md)

The field class containing a
fromJson function that can construct an instance of the field.

## Returns

`void`

## Throws

if the type name is empty, the field is already
registered, or the fieldClass is not an object containing a fromJson
function.

## Alias

Blockly.fieldRegistry.register

## Defined in

node_modules/blockly/blockly.d.ts:6164
