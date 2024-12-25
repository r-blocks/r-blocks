# Function: warn()

> **warn**(`name`, `deprecationDate`, `deletionDate`, `opt_use`?): `void`

Warn developers that a function or property is deprecated.

## Parameters

### name

`string`

The name of the function or property.

### deprecationDate

`string`

The date of deprecation.
Prefer 'month yyyy' or 'quarter yyyy' format.

### deletionDate

`string`

The date of deletion, in the same format as the
deprecation date.

### opt_use?

`string`

The name of a function or property to use instead,
if any.

## Returns

`void`

## Alias

Blockly.utils.deprecation.warn

## Package

## Defined in

node_modules/blockly/blockly.d.ts:1230
