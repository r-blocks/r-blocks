# Function: register()

> **register**\<`T`\>(`type`, `name`, `registryItem`, `opt_allowOverrides`?): `void`

Registers a class based on a type and name.

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

### registryItem

`any`

The class or object to
register.

### opt_allowOverrides?

`boolean`

True to prevent an error when overriding
an already registered item.

## Returns

`void`

## Throws

if the type or name is empty, a name with the given type has
already been registered, or if the given class or object is not valid for
its type.

## Alias

Blockly.registry.register

## Defined in

node_modules/blockly/blockly.d.ts:18513
