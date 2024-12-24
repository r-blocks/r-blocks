# Class: HorizontalFlyout

## Constructors

### new HorizontalFlyout()

> **new HorizontalFlyout**(`workspaceOptions`): [`HorizontalFlyout`](HorizontalFlyout.md)

Class for a flyout.

#### Parameters

##### workspaceOptions

[`Options`](Options.md)

Dictionary of options for the
workspace.

#### Returns

[`HorizontalFlyout`](HorizontalFlyout.md)

#### Alias

Blockly.HorizontalFlyout

#### Defined in

node_modules/blockly/blockly.d.ts:24498

## Properties

### height\_

> **height\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:24575

---

### horizontalLayout

> **horizontalLayout**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:24499

---

### width\_

> **width\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:24525

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

node_modules/blockly/blockly.d.ts:24568

---

### getX()

> **getX**(): `number`

Calculates the x coordinate for the flyout position.

#### Returns

`number`

X coordinate.

#### Defined in

node_modules/blockly/blockly.d.ts:24515

---

### getY()

> **getY**(): `number`

Calculates the y coordinate for the flyout position.

#### Returns

`number`

Y coordinate.

#### Defined in

node_modules/blockly/blockly.d.ts:24520

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

node_modules/blockly/blockly.d.ts:24561

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

node_modules/blockly/blockly.d.ts:24551

---

### position()

> **position**(): `void`

Move the flyout to the edge of the workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24524

---

### reflowInternal\_()

> `protected` **reflowInternal\_**(): `void`

Compute height of flyout. toolbox.Position mat under each block.
For RTL: Lay out the blocks right-aligned.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24574

---

### scrollToStart()

> **scrollToStart**(): `void`

Scroll the flyout to the top.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24538

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

node_modules/blockly/blockly.d.ts:24507

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

node_modules/blockly/blockly.d.ts:24544
