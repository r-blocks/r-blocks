# Function: getStartPositionRect()

> **getStartPositionRect**(`position`, `size`, `horizontalPadding`, `verticalPadding`, `metrics`, `workspace`): [`Rect`](../../utils/classes/Rect.md)

Returns a rectangle representing reasonable position for where to place a UI
element of the specified size given the restraints and locations of the
scrollbars. This method does not take into account any already placed UI
elements.

## Parameters

### position

[`Position`](../type-aliases/Position.md)

The starting
horizontal and vertical position.

### size

[`Size`](../../utils/classes/Size.md)

the size of the UI element to get a start
position for.

### horizontalPadding

`number`

The horizontal padding to use.

### verticalPadding

`number`

The vertical padding to use.

### metrics

[`UiMetrics`](../../namespaces/MetricsManager/type-aliases/UiMetrics.md)

The workspace UI metrics.

### workspace

[`WorkspaceSvg`](../../classes/WorkspaceSvg.md)

The workspace.

## Returns

[`Rect`](../../utils/classes/Rect.md)

The suggested start position.

## Alias

Blockly.uiPosition.getStartPositionRect

## Package

## Defined in

node_modules/blockly/blockly.d.ts:11890
