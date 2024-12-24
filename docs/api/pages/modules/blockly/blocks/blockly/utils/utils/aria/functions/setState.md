# Function: setState()

> **setState**(`element`, `stateName`, `value`): `void`

Sets the state or property of an element.
Copied from Closure's goog.a11y.aria

## Parameters

### element

`Element`

DOM node where we set state.

### stateName

`string`

State attribute being set.
Automatically adds prefix 'aria-' to the state name if the attribute is
not an extra attribute.

### value

Value
for the state attribute.

`string` | `number` | `boolean` | `string`[]

## Returns

`void`

## Alias

Blockly.utils.aria.setState

## Defined in

node_modules/blockly/blockly.d.ts:1320
