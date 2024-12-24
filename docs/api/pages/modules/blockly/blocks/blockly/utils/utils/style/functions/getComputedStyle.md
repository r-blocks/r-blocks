# Function: getComputedStyle()

> **getComputedStyle**(`element`, `property`): `string`

Retrieves a computed style value of a node. It returns empty string if the
value cannot be computed (which will be the case in Internet Explorer) or
"none" if the property requested is an SVG one and it has not been
explicitly set (firefox and webkit).

Copied from Closure's goog.style.getComputedStyle

## Parameters

### element

`Element`

Element to get style of.

### property

`string`

Property to get (camel-case).

## Returns

`string`

Style value.

## Alias

Blockly.utils.style.getComputedStyle

## Defined in

node_modules/blockly/blockly.d.ts:2574
