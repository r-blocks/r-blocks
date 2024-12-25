# Function: getClass()

> **getClass**\<`T`\>(`type`, `name`, `opt_throwIfMissing`?): (...`arg1`) => `T`

Gets the class for the given name and type.

## Type Parameters

• **T**

## Parameters

### type

`any`

The type of the plugin.
(e.g. Field, Renderer)

### name

`string`

The plugin's name. (Ex. field_angle, geras)

### opt_throwIfMissing?

`boolean`

Whether or not to throw an error if we
are unable to find the plugin.

## Returns

`Function`

The class with the given name and type or
null if none exists.

### Parameters

#### arg1

...`unknown`[]

### Returns

`T`

## Alias

Blockly.registry.getClass

## Defined in

node_modules/blockly/blockly.d.ts:18547
