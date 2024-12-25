# Class: Bubble

## Constructors

### new Bubble()

> **new Bubble**(`workspace`, `content`, `shape`, `anchorXY`, `bubbleWidth`, `bubbleHeight`): [`Bubble`](Bubble.md)

Class for UI bubble.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace on which to draw the
bubble.

##### content

`Element`

SVG content for the bubble.

##### shape

`Element`

SVG element to avoid eclipsing.

##### anchorXY

[`Coordinate`](../utils/classes/Coordinate.md)

Absolute position of bubble's
anchor point.

##### bubbleWidth

`number`

Width of bubble, or null if not resizable.

##### bubbleHeight

`number`

Height of bubble, or null if not resizable.

#### Returns

[`Bubble`](Bubble.md)

#### Implements

#### Alias

Blockly.Bubble

#### Defined in

node_modules/blockly/blockly.d.ts:7684

## Properties

### anchorXY\_

> **anchorXY\_**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:7802

---

### arrow_radians\_

> **arrow_radians\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7719

---

### autoLayout\_

> **autoLayout\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:7779

---

### bubbleArrow\_

> **bubbleArrow\_**: `SVGPathElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7730

---

### bubbleBack\_

> **bubbleBack\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7731

---

### bubbleGroup\_

> **bubbleGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7729

---

### content\_

> **content\_**: `Element`

#### Defined in

node_modules/blockly/blockly.d.ts:7686

---

### disposed

> **disposed**: `boolean`

Describes whether this bubble has been disposed of (nodes and event
listeners removed from the page) or not.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7718

---

### height\_

> **height\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7873

---

### relativeLeft\_

> **relativeLeft\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:7808

---

### relativeTop\_

> **relativeTop\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:7809

---

### rendered\_

> **rendered\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:7720

---

### resizeGroup\_

> **resizeGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7732

---

### shape\_

> **shape\_**: `Element`

#### Defined in

node_modules/blockly/blockly.d.ts:7687

---

### width\_

> **width\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7872

---

### workspace\_

> **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:7685

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this bubble.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7887

---

### getBubbleSize()

> **getBubbleSize**(): [`Size`](../utils/classes/Size.md)

Get the dimensions of this bubble.

#### Returns

[`Size`](../utils/classes/Size.md)

The height and width of the bubble.

#### Defined in

node_modules/blockly/blockly.d.ts:7865

---

### getRelativeToSurfaceXY()

> **getRelativeToSurfaceXY**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the coordinates of the top-left corner of this bubble's body relative
to the drawing surface's origin (0,0), in workspace units.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties.

#### Defined in

node_modules/blockly/blockly.d.ts:7903

---

### getSvgRoot()

> **getSvgRoot**(): `SVGElement`

Return the root node of the bubble's SVG group.

#### Returns

`SVGElement`

The root SVG node of the bubble's group.

#### Defined in

node_modules/blockly/blockly.d.ts:7737

---

### isDeletable()

> **isDeletable**(): `boolean`

Get whether this bubble is deletable or not.

#### Returns

`boolean`

True if deletable.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7760

---

### moveDuringDrag()

> **moveDuringDrag**(`dragSurface`, `newLoc`): `void`

Move this bubble during a drag, taking into account whether or not there is
a drag surface.

#### Parameters

##### dragSurface

[`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

The surface that carries
rendered items during a drag, or null if no drag surface is in use.

##### newLoc

[`Coordinate`](../utils/classes/Coordinate.md)

The location to translate to, in
workspace coordinates.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7897

---

### moveTo()

> **moveTo**(`x`, `y`): `void`

Move the bubble group to the specified location in workspace coordinates.

#### Parameters

##### x

`number`

The x position to move to.

##### y

`number`

The y position to move to.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7854

---

### promote()

> **promote**(): `boolean`

Move this bubble to the top of the stack.

#### Returns

`boolean`

Whether or not the bubble has been moved.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7795

---

### registerMoveEvent()

> **registerMoveEvent**(`callback`): `void`

Register a function as a callback event for when the bubble is moved.

#### Parameters

##### callback

`Function`

The function to call on move.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7789

---

### registerResizeEvent()

> **registerResizeEvent**(`callback`): `void`

Register a function as a callback event for when the bubble is resized.

#### Parameters

##### callback

`Function`

The function to call on resize.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7784

---

### setAnchorLocation()

> **setAnchorLocation**(`xy`): `void`

Notification that the anchor has moved.
Update the arrow and bubble accordingly.

#### Parameters

##### xy

[`Coordinate`](../utils/classes/Coordinate.md)

Absolute location.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7801

---

### setAutoLayout()

> **setAutoLayout**(`enable`): `void`

Set whether auto-layout of this bubble is enabled. The first time a bubble
is shown it positions itself to not cover any blocks. Once a user has
dragged it to reposition, it renders where the user put it.

#### Parameters

##### enable

`boolean`

True if auto-layout should be enabled, false
otherwise.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7912

---

### setBubbleSize()

> **setBubbleSize**(`width`, `height`): `void`

Size this bubble.

#### Parameters

##### width

`number`

Width of the bubble.

##### height

`number`

Height of the bubble.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7871

---

### setColour()

> **setColour**(`hexColour`): `void`

Change the colour of a bubble.

#### Parameters

##### hexColour

`string`

Hex code of colour.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7883

---

### setDeleteStyle()

> **setDeleteStyle**(`_enable`): `void`

Update the style of this bubble when it is dragged over a delete area.

#### Parameters

##### \_enable

`boolean`

True if the bubble is about to be deleted, false
otherwise.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7766

---

### setDragging()

> **setDragging**(`adding`): `void`

Triggers a move callback if one exists at the end of a drag.

#### Parameters

##### adding

`boolean`

True if adding, false if removing.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7860

---

### setSvgId()

> **setSvgId**(`id`): `void`

Expose the block's ID on the bubble's top-level SVG group.

#### Parameters

##### id

`string`

ID of block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7742

---

### showContextMenu()

> **showContextMenu**(`_e`): `void`

Show the context menu for this bubble.

#### Parameters

##### \_e

`Event`

Mouse event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7754

---

### createNonEditableBubble()

> `static` **createNonEditableBubble**(`paragraphElement`, `block`, `iconXY`): [`Bubble`](Bubble.md)

Creates a bubble that can not be edited.

#### Parameters

##### paragraphElement

`SVGTextElement`

The text element for the non
editable bubble.

##### block

[`BlockSvg`](BlockSvg.md)

The block that the bubble is attached to.

##### iconXY

[`Coordinate`](../utils/classes/Coordinate.md)

The coordinate of the icon.

#### Returns

[`Bubble`](Bubble.md)

The non editable bubble.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7669

---

### textToDom()

> `static` **textToDom**(`text`): `SVGTextElement`

Create the text for a non editable bubble.

#### Parameters

##### text

`string`

The text to display.

#### Returns

`SVGTextElement`

The top-level node of the text.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7659
