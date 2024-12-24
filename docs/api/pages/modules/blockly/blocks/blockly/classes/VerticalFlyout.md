# Class: VerticalFlyout

## Constructors

### new VerticalFlyout()

> **new VerticalFlyout**(`workspaceOptions`): [`VerticalFlyout`](VerticalFlyout.md)

Class for a flyout.

#### Parameters

##### workspaceOptions

[`Options`](Options.md)

Dictionary of options for the
workspace.

#### Returns

[`VerticalFlyout`](VerticalFlyout.md)

#### Alias

Blockly.VerticalFlyout

#### Defined in

node_modules/blockly/blockly.d.ts:25097

## Properties

### height\_

> **height\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:25123

---

### width\_

> **width\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:25173

## Methods

### getClientRect()

> **getClientRect**(): [`Rect`](../utils/classes/Rect.md)

Returns the bounding rectangle of the drag target area in pixel units
relative to viewport.

#### Returns

[`Rect`](../utils/classes/Rect.md)

The component's bounding box. Null if drag
target area should be ignored.

#### Defined in

node_modules/blockly/blockly.d.ts:25166

---

### getX()

> **getX**(): `number`

Calculates the x coordinate for the flyout position.

#### Returns

`number`

X coordinate.

#### Defined in

node_modules/blockly/blockly.d.ts:25113

---

### getY()

> **getY**(): `number`

Calculates the y coordinate for the flyout position.

#### Returns

`number`

Y coordinate.

#### Defined in

node_modules/blockly/blockly.d.ts:25118

---

### isDragTowardWorkspace()

> **isDragTowardWorkspace**(`currentDragDeltaXY`): `boolean`

Determine if a drag delta is toward the workspace, based on the position
and orientation of the flyout. This is used in determineDragIntention\_ to
determine if a new block should be created or if the flyout should scroll.

#### Parameters

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the position at mouse down, in pixel units.

#### Returns

`boolean`

True if the drag is toward the workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:25159

---

### layout\_()

> `protected` **layout\_**(`contents`, `gaps`): `void`

Lay out the blocks in the flyout.

#### Parameters

##### contents

`any`[]

The blocks and buttons to lay out.

##### gaps

`number`[]

The visible gaps between blocks.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25149

---

### position()

> **position**(): `void`

Move the flyout to the edge of the workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25122

---

### reflowInternal\_()

> `protected` **reflowInternal\_**(): `void`

Compute width of flyout. toolbox.Position mat under each block.
For RTL: Lay out the blocks and buttons to be right-aligned.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25172

---

### scrollToStart()

> **scrollToStart**(): `void`

Scroll the flyout to the top.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25136

---

### setMetrics\_()

> `protected` **setMetrics\_**(`xyRatio`): `void`

Sets the translation of the flyout to match the scrollbars.

#### Parameters

##### xyRatio

Contains a y property which is a float
between 0 and 1 specifying the degree of scrolling and a
similar x property.

###### x

`number`

###### y

`number`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25105

---

### wheel\_()

> `protected` **wheel\_**(`e`): `void`

Scroll the flyout.

#### Parameters

##### e

`Event`

Mouse wheel scroll event.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25142
