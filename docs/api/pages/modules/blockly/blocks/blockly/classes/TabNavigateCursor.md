# Class: TabNavigateCursor

A cursor for navigating between tab navigable fields.

## Alias

Blockly.TabNavigateCursor

## Extends

- [`BasicCursor`](BasicCursor.md)

## Constructors

### new TabNavigateCursor()

> **new TabNavigateCursor**(): [`TabNavigateCursor`](TabNavigateCursor.md)

#### Returns

[`TabNavigateCursor`](TabNavigateCursor.md)

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`constructor`](BasicCursor.md#constructors)

## Properties

### colour

> **colour**: `string`

The colour of the marker.

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`colour`](BasicCursor.md#colour)

#### Defined in

node_modules/blockly/blockly.d.ts:8848

---

### type

> **type**: `string`

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`type`](BasicCursor.md#type)

#### Defined in

node_modules/blockly/blockly.d.ts:18407

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this marker.

#### Returns

`void`

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`dispose`](BasicCursor.md#dispose)

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

[`BasicCursor`](BasicCursor.md).[`draw`](BasicCursor.md#draw)

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

[`BasicCursor`](BasicCursor.md).[`getCurNode`](BasicCursor.md#getcurnode)

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

[`BasicCursor`](BasicCursor.md).[`getDrawer`](BasicCursor.md#getdrawer)

#### Defined in

node_modules/blockly/blockly.d.ts:8878

---

### getNextNode\_()

> `protected` **getNextNode\_**(`node`, `isValid`): [`ASTNode`](ASTNode.md)

Uses pre order traversal to navigate the Blockly AST. This will allow
a user to easily navigate the entire Blockly AST without having to go in
and out levels on the tree.

#### Parameters

##### node

[`ASTNode`](ASTNode.md)

The current position in the AST.

##### isValid

(`arg0`) => `boolean`

A function true/false
depending on whether the given node should be traversed.

#### Returns

[`ASTNode`](ASTNode.md)

The next node in the traversal.

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`getNextNode_`](BasicCursor.md#getnextnode_)

#### Defined in

node_modules/blockly/blockly.d.ts:14968

---

### getPreviousNode\_()

> `protected` **getPreviousNode\_**(`node`, `isValid`): [`ASTNode`](ASTNode.md)

Reverses the pre order traversal in order to find the previous node. This
will allow a user to easily navigate the entire Blockly AST without having to
go in and out levels on the tree.

#### Parameters

##### node

[`ASTNode`](ASTNode.md)

The current position in the AST.

##### isValid

(`arg0`) => `boolean`

A function true/false
depending on whether the given node should be traversed.

#### Returns

[`ASTNode`](ASTNode.md)

The previous node in the traversal or null if no
previous node exists.

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`getPreviousNode_`](BasicCursor.md#getpreviousnode_)

#### Defined in

node_modules/blockly/blockly.d.ts:14980

---

### hide()

> **hide**(): `void`

Hide the marker SVG.

#### Returns

`void`

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`hide`](BasicCursor.md#hide)

#### Defined in

node_modules/blockly/blockly.d.ts:8900

---

### in()

> **in**(): [`ASTNode`](ASTNode.md)

For a basic cursor we only have the ability to go next and previous, so
in will also allow the user to get to the next node in the pre order
traversal.

#### Returns

[`ASTNode`](ASTNode.md)

The next node, or null if the current node is
not set or there is no next value.

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`in`](BasicCursor.md#in)

#### Defined in

node_modules/blockly/blockly.d.ts:14941

---

### next()

> **next**(): [`ASTNode`](ASTNode.md)

Find the next node in the pre order traversal.

#### Returns

[`ASTNode`](ASTNode.md)

The next node, or null if the current node is
not set or there is no next value.

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`next`](BasicCursor.md#next)

#### Defined in

node_modules/blockly/blockly.d.ts:14932

---

### out()

> **out**(): [`ASTNode`](ASTNode.md)

For a basic cursor we only have the ability to go next and previous, so
out will allow the user to get to the previous node in the pre order
traversal.

#### Returns

[`ASTNode`](ASTNode.md)

The previous node, or null if the current node is
not set or there is no previous value.

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`out`](BasicCursor.md#out)

#### Defined in

node_modules/blockly/blockly.d.ts:14957

---

### prev()

> **prev**(): [`ASTNode`](ASTNode.md)

Find the previous node in the pre order traversal.

#### Returns

[`ASTNode`](ASTNode.md)

The previous node, or null if the current node
is not set or there is no previous value.

#### Inherited from

[`BasicCursor`](BasicCursor.md).[`prev`](BasicCursor.md#prev)

#### Defined in

node_modules/blockly/blockly.d.ts:14948

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

[`BasicCursor`](BasicCursor.md).[`setCurNode`](BasicCursor.md#setcurnode)

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

[`BasicCursor`](BasicCursor.md).[`setDrawer`](BasicCursor.md#setdrawer)

#### Defined in

node_modules/blockly/blockly.d.ts:8872

---

### validNode\_()

> **validNode\_**(`node`): `boolean`

Skip all nodes except for tab navigable fields.

#### Parameters

##### node

[`ASTNode`](ASTNode.md)

The AST node to check whether it is valid.

#### Returns

`boolean`

True if the node should be visited, false otherwise.

#### Overrides

[`BasicCursor`](BasicCursor.md).[`validNode_`](BasicCursor.md#validnode_)

#### Defined in

node_modules/blockly/blockly.d.ts:15026
