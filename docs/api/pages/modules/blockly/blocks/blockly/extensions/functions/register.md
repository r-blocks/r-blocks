# Function: register()

> **register**(`name`, `initFn`): `void`

Registers a new extension function. Extensions are functions that help
initialize blocks, usually adding dynamic behavior such as onchange
handlers and mutators. These are applied using Block.applyExtension(), or
the JSON "extensions" array attribute.

## Parameters

### name

`string`

The name of this extension.

### initFn

`Function`

The function to initialize an extended block.

## Returns

`void`

## Throws

if the extension name is empty, the extension is already
registered, or extensionFn is not a function.

## Alias

Blockly.Extensions.register

## Defined in

node_modules/blockly/blockly.d.ts:10412
