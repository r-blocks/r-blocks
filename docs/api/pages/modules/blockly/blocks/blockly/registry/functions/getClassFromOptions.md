# Function: getClassFromOptions()

> **getClassFromOptions**\<`T`\>(`type`, `options`, `opt_throwIfMissing`?): (...`arg1`) => `T`

Gets the class from Blockly options for the given type.
This is used for plugins that override a built in feature. (e.g. Toolbox)

## Type Parameters

• **T**

## Parameters

### type

`any`

The type of the plugin.

### options

[`Options`](../../classes/Options.md)

The option object to check for the given
plugin.

### opt_throwIfMissing?

`boolean`

Whether or not to throw an error if we
are unable to find the plugin.

## Returns

`Function`

The class for the plugin.

### Parameters

#### arg1

...`unknown`[]

### Returns

`T`

## Alias

Blockly.registry.getClassFromOptions

## Defined in

node_modules/blockly/blockly.d.ts:18587
