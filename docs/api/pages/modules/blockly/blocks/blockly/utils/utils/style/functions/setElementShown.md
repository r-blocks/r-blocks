# Function: setElementShown()

> **setElementShown**(`el`, `isShown`): `void`

Shows or hides an element from the page. Hiding the element is done by
setting the display property to "none", removing the element from the
rendering hierarchy so it takes up no space. To show the element, the default
inherited display property is restored (defined either in stylesheets or by
the browser's default style rules).
Copied from Closure's goog.style.getViewportPageOffset

## Parameters

### el

`Element`

Element to show or hide.

### isShown

`any`

True to render the element in its default style,
false to disable rendering the element.

## Returns

`void`

## Alias

Blockly.utils.style.setElementShown

## Defined in

node_modules/blockly/blockly.d.ts:2615
