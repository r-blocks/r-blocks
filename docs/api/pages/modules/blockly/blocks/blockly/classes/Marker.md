# Class: Marker

Class for a marker.
This is used in keyboard navigation to save a location in the Blockly AST.

## Alias

Blockly.Marker

## Extended by

- [`Cursor`](Cursor.md)

## Constructors

### new Marker()

> **new Marker**(): [`Marker`](Marker.md)

#### Returns

[`Marker`](Marker.md)

## Properties

### colour

> **colour**: `string`

The colour of the marker.

#### Defined in

node_modules/blockly/blockly.d.ts:8848

---

### type

> **type**: `string`

The type of the marker.

#### Defined in

node_modules/blockly/blockly.d.ts:8866

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this marker.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8904

---

### draw()

> **draw**(): `void`

Redraw the current marker.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8896

---

### getCurNode()

> **getCurNode**(): [`ASTNode`](ASTNode.md)

Gets the current location of the marker.

#### Returns

[`ASTNode`](ASTNode.md)

The current field, connection, or block the marker
is on.

#### Defined in

node_modules/blockly/blockly.d.ts:8884

---

### getDrawer()

> **getDrawer**(): [`MarkerSvg`](../renderers/common/block_rendering/classes/MarkerSvg.md)

Get the current drawer for the marker.

#### Returns

[`MarkerSvg`](../renderers/common/block_rendering/classes/MarkerSvg.md)

The object in charge of drawing
the marker.

#### Defined in

node_modules/blockly/blockly.d.ts:8878

---

### hide()

> **hide**(): `void`

Hide the marker SVG.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8900

---

### setCurNode()

> **setCurNode**(`newNode`): `void`

Set the location of the marker and call the update method.
Setting isStack to true will only work if the newLocation is the top most
output or previous connection on a stack.

#### Parameters

##### newNode

[`ASTNode`](ASTNode.md)

The new location of the marker.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8891

---

### setDrawer()

> **setDrawer**(`drawer`): `void`

Sets the object in charge of drawing the marker.

#### Parameters

##### drawer

[`MarkerSvg`](../renderers/common/block_rendering/classes/MarkerSvg.md)

The object in charge of
drawing the marker.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8872
