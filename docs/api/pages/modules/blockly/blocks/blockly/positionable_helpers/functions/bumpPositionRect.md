# Function: bumpPositionRect()

> **bumpPositionRect**(`startRect`, `margin`, `bumpDir`, `savedPositions`): [`Rect`](../../utils/classes/Rect.md)

Returns a position Rect based on a starting position that is bumped
so that it doesn't intersect with any of the provided savedPositions. This
method does not check that the bumped position is still within bounds.

## Parameters

### startRect

[`Rect`](../../utils/classes/Rect.md)

The starting position to use.

### margin

`number`

The margin to use between elements when bumping.

### bumpDir

`number`

The direction to bump if there is a collision
with an existing UI element.

### savedPositions

[`Rect`](../../utils/classes/Rect.md)[]

List of rectangles that
represent the positions of UI elements already placed.

## Returns

[`Rect`](../../utils/classes/Rect.md)

The suggested position rectangle.

## Alias

Blockly.uiPosition.bumpPositionRect

## Package

## Defined in

node_modules/blockly/blockly.d.ts:11917
