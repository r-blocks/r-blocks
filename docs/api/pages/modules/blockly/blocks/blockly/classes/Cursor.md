# Class: Cursor

Class for a marker.
This is used in keyboard navigation to save a location in the Blockly AST.

## Alias

Blockly.Marker

## Extends

- [`Marker`](Marker.md)

## Extended by

- [`BasicCursor`](BasicCursor.md)

## Constructors

### new Cursor()

> **new Cursor**(): [`Cursor`](Cursor.md)

#### Returns

[`Cursor`](Cursor.md)

#### Inherited from

[`Marker`](Marker.md).[`constructor`](Marker.md#constructors)

## Properties

### colour

> **colour**: `string`

The colour of the marker.

#### Inherited from

[`Marker`](Marker.md).[`colour`](Marker.md#colour)

#### Defined in

node_modules/blockly/blockly.d.ts:8848

---

### type

> **type**: `string`

#### Overrides

[`Marker`](Marker.md).[`type`](Marker.md#type)

#### Defined in

node_modules/blockly/blockly.d.ts:18407

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this marker.

#### Returns

`void`

#### Inherited from

[`Marker`](Marker.md).[`dispose`](Marker.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:8904

---

### draw()

> **draw**(): `void`

Redraw the current marker.

#### Returns

`void`

#### Package

#### Inherited from

[`Marker`](Marker.md).[`draw`](Marker.md#draw)

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

#### Inherited from

[`Marker`](Marker.md).[`getCurNode`](Marker.md#getcurnode)

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

#### Inherited from

[`Marker`](Marker.md).[`getDrawer`](Marker.md#getdrawer)

#### Defined in

node_modules/blockly/blockly.d.ts:8878

---

### hide()

> **hide**(): `void`

Hide the marker SVG.

#### Returns

`void`

#### Inherited from

[`Marker`](Marker.md).[`hide`](Marker.md#hide)

#### Defined in

node_modules/blockly/blockly.d.ts:8900

---

### in()

> **in**(): [`ASTNode`](ASTNode.md)

Find the in connection or field.

#### Returns

[`ASTNode`](ASTNode.md)

The in element, or null if the current node is
not set or there is no in value.

#### Defined in

node_modules/blockly/blockly.d.ts:18421

---

### next()

> **next**(): [`ASTNode`](ASTNode.md)

Find the next connection, field, or block.

#### Returns

[`ASTNode`](ASTNode.md)

The next element, or null if the current node is
not set or there is no next value.

#### Defined in

node_modules/blockly/blockly.d.ts:18414

---

### out()

> **out**(): [`ASTNode`](ASTNode.md)

Find the out connection, field, or block.

#### Returns

[`ASTNode`](ASTNode.md)

The out element, or null if the current node is
not set or there is no out value.

#### Defined in

node_modules/blockly/blockly.d.ts:18435

---

### prev()

> **prev**(): [`ASTNode`](ASTNode.md)

Find the previous connection, field, or block.

#### Returns

[`ASTNode`](ASTNode.md)

The previous element, or null if the current node
is not set or there is no previous value.

#### Defined in

node_modules/blockly/blockly.d.ts:18428

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

#### Inherited from

[`Marker`](Marker.md).[`setCurNode`](Marker.md#setcurnode)

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

#### Inherited from

[`Marker`](Marker.md).[`setDrawer`](Marker.md#setdrawer)

#### Defined in

node_modules/blockly/blockly.d.ts:8872
