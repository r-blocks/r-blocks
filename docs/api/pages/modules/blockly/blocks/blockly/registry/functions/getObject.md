# Function: getObject()

> **getObject**\<`T`\>(`type`, `name`, `opt_throwIfMissing`?): `T`

Gets the object for the given name and type.

## Type Parameters

• **T**

## Parameters

### type

`any`

The type of the plugin.
(e.g. Category)

### name

`string`

The plugin's name. (Ex. logic_category)

### opt_throwIfMissing?

`boolean`

Whether or not to throw an error if we
are unable to find the object.

## Returns

`T`

The object with the given name and type or null if none exists.

## Alias

Blockly.registry.getObject

## Defined in

node_modules/blockly/blockly.d.ts:18559
