# Function: createSvgElement()

> **createSvgElement**\<`T`\>(`name`, `attrs`, `opt_parent`?): `T`

Helper method for creating SVG elements.

## Type Parameters

• **T**

## Parameters

### name

Element's tag name.

`string` | [`Svg`](../../../namespaces/Svg/index.md)\<`T`\>

### attrs

`any`

Dictionary of attribute names and values.

### opt_parent?

`Element`

Optional parent on which to append the element.

## Returns

`T`

Newly created SVG element. The return type is {!SVGElement} if
name is a string or a more specific type if it a member of Svg.

## Alias

Blockly.utils.dom.createSvgElement

## Defined in

node_modules/blockly/blockly.d.ts:244
