# Class: Flyout

## Constructors

### new Flyout()

> `abstract` **new Flyout**(`workspaceOptions`): [`Flyout`](Flyout.md)

Class for a flyout.

#### Parameters

##### workspaceOptions

[`Options`](Options.md)

Dictionary of options for the
workspace.

#### Returns

[`Flyout`](Flyout.md)

#### Implements

#### Alias

Blockly.Flyout

#### Defined in

node_modules/blockly/blockly.d.ts:23843

## Properties

### autoClose

> **autoClose**: `boolean`

Does the flyout automatically close when a block is created?

#### Defined in

node_modules/blockly/blockly.d.ts:24213

---

### buttons\_

> `protected` **buttons\_**: [`FlyoutButton`](FlyoutButton.md)[]

List of visible buttons.

#### Defined in

node_modules/blockly/blockly.d.ts:23890

---

### containerVisible\_

> **containerVisible\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:23987

---

### CORNER_RADIUS

> **CORNER_RADIUS**: `number`

Corner radius of the flyout background.

#### Const

#### Defined in

node_modules/blockly/blockly.d.ts:24219

---

### dragAngleRange\_

> `protected` **dragAngleRange\_**: `number`

Range of a drag angle from a flyout considered "dragging toward workspace".
Drags that are within the bounds of this many degrees from the orthogonal
line to the flyout edge are considered to be "drags toward the workspace".
Example:
Flyout Edge Workspace
[block] / <-within this angle, drags "toward workspace" |
[block] ---- orthogonal to flyout boundary ---- |
[block] \ |
The angle is given in degrees from the orthogonal.

This is used to know when to create a new block and when to scroll the
flyout. Setting it to 360 means that all drags create a new block.

#### Defined in

node_modules/blockly/blockly.d.ts:24260

---

### filterWrapper\_

> **filterWrapper\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:23941

---

### GAP_X

> **GAP_X**: `number`

Gap between items in horizontal flyouts. Can be overridden with the "sep"
element.

#### Const

#### Defined in

node_modules/blockly/blockly.d.ts:24231

---

### GAP_Y

> **GAP_Y**: `number`

Gap between items in vertical flyouts. Can be overridden with the "sep"
element.

#### Const

#### Defined in

node_modules/blockly/blockly.d.ts:24237

---

### height\_

> **height\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:24015

---

### horizontalLayout

> **horizontalLayout**: `boolean`

Whether the flyout should be laid out horizontally or not.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:23865

---

### id

> **id**: `string`

The unique id for this component that is used to register with the
ComponentManager.

#### Defined in

node_modules/blockly/blockly.d.ts:23854

---

### isVisible\_

> **isVisible\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:23981

---

### MARGIN

> **MARGIN**: `number`

Margin around the edges of the blocks in the flyout.

#### Const

#### Defined in

node_modules/blockly/blockly.d.ts:24225

---

### reflowWrapper\_

> **reflowWrapper\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:24007

---

### RTL

> **RTL**: `boolean`

Is RTL vs LTR.

#### Defined in

node_modules/blockly/blockly.d.ts:23859

---

### SCROLLBAR_MARGIN

> **SCROLLBAR_MARGIN**: `number`

Top/bottom padding between scrollbar and edge of flyout background.

#### Const

#### Defined in

node_modules/blockly/blockly.d.ts:24243

---

### svgBackground\_

> **svgBackground\_**: `SVGPathElement`

#### Defined in

node_modules/blockly/blockly.d.ts:23934

---

### svgGroup\_

> **svgGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:23933

---

### tabWidth\_

> `protected` **tabWidth\_**: `number`

Width of output tab.

#### Const

#### Defined in

node_modules/blockly/blockly.d.ts:23909

---

### targetWorkspace

> **targetWorkspace**: [`WorkspaceSvg`](WorkspaceSvg.md)

The target workspace

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:23915

---

### toolboxPosition\_

> `protected` **toolboxPosition\_**: `number`

Position of the toolbox and flyout relative to the workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:23871

---

### width\_

> **width\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:24016

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:23848

## Methods

### addBlockListeners\_()

> `protected` **addBlockListeners\_**(`root`, `block`, `rect`): `void`

Add listeners to a block that has been added to the flyout.

#### Parameters

##### root

`SVGElement`

The root node of the SVG group the block is in.

##### block

[`BlockSvg`](BlockSvg.md)

The block to add listeners for.

##### rect

`SVGElement`

The invisible rectangle under the block that acts
as a mat for that block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24113

---

### blockIsRecyclable\_()

> `protected` **blockIsRecyclable\_**(`_block`): `boolean`

Returns whether the given block can be recycled or not.

#### Parameters

##### \_block

[`BlockSvg`](BlockSvg.md)

The block to check for recyclability.

#### Returns

`boolean`

True if the block can be recycled. False otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:24096

---

### createBlock()

> **createBlock**(`originalBlock`): [`BlockSvg`](BlockSvg.md)

Create a copy of this block on the workspace.

#### Parameters

##### originalBlock

[`BlockSvg`](BlockSvg.md)

The block to copy from the flyout.

#### Returns

[`BlockSvg`](BlockSvg.md)

The newly created block.

#### Throws

if something went wrong with deserialization.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24143

---

### createDom()

> **createDom**(`tagName`): `SVGElement`

Creates the flyout's DOM. Only needs to be called once. The flyout can
either exist as its own SVG element or be a g element nested inside a
separate SVG element.

#### Parameters

##### tagName

The type of tag to
put the flyout in. This should be <svg> or <g>.

`string` | [`Svg`](../utils/namespaces/Svg/index.md)\<`SVGSVGElement`\> | [`Svg`](../utils/namespaces/Svg/index.md)\<`SVGGElement`\>

#### Returns

`SVGElement`

The flyout's SVG group.

#### Defined in

node_modules/blockly/blockly.d.ts:23932

---

### createRect\_()

> `protected` **createRect\_**(`block`, `x`, `y`, `blockHW`, `index`): `SVGElement`

Create and place a rectangle corresponding to the given block.

#### Parameters

##### block

[`BlockSvg`](BlockSvg.md)

The block to associate the rect to.

##### x

`number`

The x position of the cursor during this layout pass.

##### y

`number`

The y position of the cursor during this layout pass.

##### blockHW

The height and width of the
block.

###### height

`number`

###### width

`number`

##### index

`number`

The index into the mats list where this rect should be
placed.

#### Returns

`SVGElement`

Newly created SVG element for the rectangle behind the
block.

#### Defined in

node_modules/blockly/blockly.d.ts:24166

---

### dispose()

> **dispose**(): `void`

Dispose of this flyout.
Unlink from all DOM elements to prevent memory leaks.

#### Returns

`void`

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:23947

---

### getFlyoutScale()

> **getFlyoutScale**(): `number`

Get the scale (zoom level) of the flyout. By default,
this matches the target workspace scale, but this can be overridden.

#### Returns

`number`

Flyout workspace scale.

#### Defined in

node_modules/blockly/blockly.d.ts:23963

---

### getHeight()

> **getHeight**(): `number`

Get the height of the flyout.

#### Returns

`number`

The width of the flyout.

#### Defined in

node_modules/blockly/blockly.d.ts:23957

---

### getWidth()

> **getWidth**(): `number`

Get the width of the flyout.

#### Returns

`number`

The width of the flyout.

#### Defined in

node_modules/blockly/blockly.d.ts:23952

---

### getWorkspace()

> **getWorkspace**(): [`WorkspaceSvg`](WorkspaceSvg.md)

Get the workspace inside the flyout.

#### Returns

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace inside the flyout.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:23969

---

### hide()

> **hide**(): `void`

Hide and empty the flyout.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24006

---

### init()

> **init**(`targetWorkspace`): `void`

Initializes the flyout.

#### Parameters

##### targetWorkspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace in which to
create new blocks.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23940

---

### initFlyoutButton\_()

> `protected` **initFlyoutButton\_**(`button`, `x`, `y`): `void`

Initialize the given button: move it to the correct location,
add listeners, etc.

#### Parameters

##### button

[`FlyoutButton`](FlyoutButton.md)

The button to initialize and place.

##### x

`number`

The x position of the cursor during this layout pass.

##### y

`number`

The y position of the cursor during this layout pass.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24152

---

### isBlockCreatable\_()

> **isBlockCreatable\_**(`block`): `boolean`

Does this flyout allow you to create a new instance of the given block?
Used for deciding if a block can be "dragged out of" the flyout.

#### Parameters

##### block

[`BlockSvg`](BlockSvg.md)

The block to copy from the flyout.

#### Returns

`boolean`

True if you can create a new instance of the block, false
otherwise.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24135

---

### isScrollable()

> **isScrollable**(): `boolean`

#### Returns

`boolean`

True if this flyout may be scrolled with a scrollbar or by
dragging.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24194

---

### isVisible()

> **isVisible**(): `boolean`

Is the flyout visible?

#### Returns

`boolean`

True if visible.

#### Defined in

node_modules/blockly/blockly.d.ts:23974

---

### moveRectToBlock\_()

> `protected` **moveRectToBlock\_**(`rect`, `block`): `void`

Move a rectangle to sit exactly behind a block, taking into account tabs,
hats, and any other protrusions we invent.

#### Parameters

##### rect

`SVGElement`

The rectangle to move directly behind the block.

##### block

[`BlockSvg`](BlockSvg.md)

The block the rectangle should be behind.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24177

---

### positionAt\_()

> `protected` **positionAt\_**(`width`, `height`, `x`, `y`): `void`

Update the view based on coordinates calculated in position().

#### Parameters

##### width

`number`

The computed width of the flyout's SVG group

##### height

`number`

The computed height of the flyout's SVG group.

##### x

`number`

The computed x origin of the flyout's SVG group.

##### y

`number`

The computed y origin of the flyout's SVG group.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24002

---

### reflow()

> **reflow**(): `void`

Reflow blocks and their mats.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24188

---

### setContainerVisible()

> **setContainerVisible**(`visible`): `void`

Set whether this flyout's container is visible.

#### Parameters

##### visible

`boolean`

Whether the container is visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23986

---

### setVisible()

> **setVisible**(`visible`): `void`

Set whether the flyout is visible. A value of true does not necessarily mean
that the flyout is shown. It could be hidden because its container is hidden.

#### Parameters

##### visible

`boolean`

True if visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23980

---

### show()

> **show**(`flyoutDef`): `void`

Show and populate the flyout.

#### Parameters

##### flyoutDef

`any`

Contents to display
in the flyout. This is either an array of Nodes, a NodeList, a
toolbox definition, or a string with the name of the dynamic category.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24014
