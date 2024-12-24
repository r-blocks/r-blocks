# Function: positionWithAnchor()

> **positionWithAnchor**(`viewportBBox`, `anchorBBox`, `widgetSize`, `rtl`): `void`

Position the widget div based on an anchor rectangle.
The widget should be placed adjacent to but not overlapping the anchor
rectangle. The preferred position is directly below and aligned to the left
(LTR) or right (RTL) side of the anchor.

## Parameters

### viewportBBox

[`Rect`](../../utils/classes/Rect.md)

The bounding rectangle of the
current viewport, in window coordinates.

### anchorBBox

[`Rect`](../../utils/classes/Rect.md)

The bounding rectangle of the anchor,
in window coordinates.

### widgetSize

[`Size`](../../utils/classes/Size.md)

The size of the widget that is inside
the widget div, in window coordinates.

### rtl

`boolean`

Whether the workspace is in RTL mode. This determines
horizontal alignment.

## Returns

`void`

## Alias

Blockly.WidgetDiv.positionWithAnchor

## Package

## Defined in

node_modules/blockly/blockly.d.ts:14268
