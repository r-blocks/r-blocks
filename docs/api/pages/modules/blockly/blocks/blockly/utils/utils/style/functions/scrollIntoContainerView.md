# Function: scrollIntoContainerView()

> **scrollIntoContainerView**(`element`, `container`, `opt_center`?): `void`

Changes the scroll position of `container` with the minimum amount so
that the content and the borders of the given `element` become visible.
If the element is bigger than the container, its top left corner will be
aligned as close to the container's top left corner as possible.
Copied from Closure's goog.style.scrollIntoContainerView

## Parameters

### element

`Element`

The element to make visible.

### container

`Element`

The container to scroll. If not set, then the
document scroll element will be used.

### opt_center?

`boolean`

Whether to center the element in the container.
Defaults to false.

## Returns

`void`

## Alias

Blockly.utils.style.scrollIntoContainerView

## Defined in

node_modules/blockly/blockly.d.ts:2647
