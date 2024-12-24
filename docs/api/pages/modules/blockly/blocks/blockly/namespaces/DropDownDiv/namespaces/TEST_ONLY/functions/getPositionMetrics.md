# Function: getPositionMetrics()

> **getPositionMetrics**(`primaryX`, `primaryY`, `secondaryX`, `secondaryY`): [`PositionMetrics`](../../../type-aliases/PositionMetrics.md)

Helper to position the drop-down and the arrow, maintaining bounds.
See explanation of origin points in DropDownDiv.show.

## Parameters

### primaryX

`number`

Desired origin point x, in absolute px.

### primaryY

`number`

Desired origin point y, in absolute px.

### secondaryX

`number`

Secondary/alternative origin point x,
in absolute px.

### secondaryY

`number`

Secondary/alternative origin point y,
in absolute px.

## Returns

[`PositionMetrics`](../../../type-aliases/PositionMetrics.md)

Various final metrics,
including rendered positions for drop-down and arrow.

## Defined in

node_modules/blockly/blockly.d.ts:11130
