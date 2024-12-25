# Class: Mutator

Class for an icon.

## Param

The block associated with this icon.

## Alias

Blockly.Icon

## Extends

- [`Icon`](Icon.md)

## Constructors

### new Mutator()

> **new Mutator**(`quarkNames`): [`Mutator`](Mutator.md)

Class for a mutator dialog.

#### Parameters

##### quarkNames

`string`[]

List of names of sub-blocks for flyout.

#### Returns

[`Mutator`](Mutator.md)

#### Alias

Blockly.Mutator

#### Overrides

[`Icon`](Icon.md).[`constructor`](Icon.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:10300

## Properties

### block\_

> `protected` **block\_**: [`BlockSvg`](BlockSvg.md)

The block this icon is attached to.

#### Overrides

[`Icon`](Icon.md).[`block_`](Icon.md#block_)

#### Defined in

node_modules/blockly/blockly.d.ts:10308

---

### bubble\_

> `protected` **bubble\_**: [`Bubble`](Bubble.md)

Bubble UI (if visible).

#### Overrides

[`Icon`](Icon.md).[`bubble_`](Icon.md#bubble_)

#### Defined in

node_modules/blockly/blockly.d.ts:10359

---

### collapseHidden

> **collapseHidden**: `boolean`

Does this icon get hidden when the block is collapsed.

#### Inherited from

[`Icon`](Icon.md).[`collapseHidden`](Icon.md#collapsehidden)

#### Defined in

node_modules/blockly/blockly.d.ts:8004

---

### iconGroup\_

> **iconGroup\_**: `SVGGElement`

The icon SVG group.

#### Inherited from

[`Icon`](Icon.md).[`iconGroup_`](Icon.md#icongroup_)

#### Defined in

node_modules/blockly/blockly.d.ts:7949

---

### iconXY\_

> **iconXY\_**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Inherited from

[`Icon`](Icon.md).[`iconXY_`](Icon.md#iconxy_)

#### Defined in

node_modules/blockly/blockly.d.ts:7982

---

### quarkNames\_

> **quarkNames\_**: `string`[]

#### Defined in

node_modules/blockly/blockly.d.ts:10301

---

### rootBlock\_

> **rootBlock\_**: [`BlockSvg`](BlockSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:10360

---

### SIZE

> **SIZE**: `number`

Height and width of icons.

#### Const

#### Inherited from

[`Icon`](Icon.md).[`SIZE`](Icon.md#size)

#### Defined in

node_modules/blockly/blockly.d.ts:8009

---

### sourceListener\_()

> **sourceListener\_**: () => `void`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10361

---

### svgDialog\_

> **svgDialog\_**: `SVGSVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:10336

---

### workspace\_

> **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:10337

---

### workspaceHeight\_

> **workspaceHeight\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:10348

---

### workspaceWidth\_

> **workspaceWidth\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:10347

## Methods

### applyColour()

> **applyColour**(): `void`

Change the colour of the associated bubble to match its block.

#### Returns

`void`

#### Inherited from

[`Icon`](Icon.md).[`applyColour`](Icon.md#applycolour)

#### Defined in

node_modules/blockly/blockly.d.ts:7976

---

### computeIconLocation()

> **computeIconLocation**(): `void`

Notification that the icon has moved, but we don't really know where.
Recompute the icon's location from scratch.

#### Returns

`void`

#### Inherited from

[`Icon`](Icon.md).[`computeIconLocation`](Icon.md#computeiconlocation)

#### Defined in

node_modules/blockly/blockly.d.ts:7987

---

### createIcon()

> **createIcon**(): `void`

Create the icon on the block.

#### Returns

`void`

#### Inherited from

[`Icon`](Icon.md).[`createIcon`](Icon.md#createicon)

#### Defined in

node_modules/blockly/blockly.d.ts:7953

---

### dispose()

> **dispose**(): `void`

Dispose of this mutator.

#### Returns

`void`

#### Overrides

[`Icon`](Icon.md).[`dispose`](Icon.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:10377

---

### drawIcon\_()

> `protected` **drawIcon\_**(`group`): `void`

Draw the mutator icon.

#### Parameters

##### group

`Element`

The icon group.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10321

---

### getCorrectedSize()

> **getCorrectedSize**(): [`Size`](../utils/classes/Size.md)

Get the size of the icon as used for rendering.
This differs from the actual size of the icon, because it bulges slightly
out of its row rather than increasing the height of its row.

#### Returns

[`Size`](../utils/classes/Size.md)

Height and width.

#### Inherited from

[`Icon`](Icon.md).[`getCorrectedSize`](Icon.md#getcorrectedsize)

#### Defined in

node_modules/blockly/blockly.d.ts:8000

---

### getIconLocation()

> **getIconLocation**(): [`Coordinate`](../utils/classes/Coordinate.md)

Returns the center of the block's icon relative to the surface.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with x and y properties in
workspace coordinates.

#### Inherited from

[`Icon`](Icon.md).[`getIconLocation`](Icon.md#geticonlocation)

#### Defined in

node_modules/blockly/blockly.d.ts:7993

---

### getWorkspace()

> **getWorkspace**(): [`WorkspaceSvg`](WorkspaceSvg.md)

Returns the workspace inside this mutator icon's bubble.

#### Returns

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace inside this mutator icon's
bubble or null if the mutator isn't open.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10315

---

### iconClick\_()

> `protected` **iconClick\_**(`e`): `void`

Clicking on the icon toggles if the mutator bubble is visible.
Disable if block is uneditable.

#### Parameters

##### e

`Event`

Mouse click event.

#### Returns

`void`

#### Overrides

[`Icon`](Icon.md).[`iconClick_`](Icon.md#iconclick_)

#### Defined in

node_modules/blockly/blockly.d.ts:10329

---

### isVisible()

> **isVisible**(): `boolean`

Is the associated bubble visible?

#### Returns

`boolean`

True if the bubble is visible.

#### Inherited from

[`Icon`](Icon.md).[`isVisible`](Icon.md#isvisible)

#### Defined in

node_modules/blockly/blockly.d.ts:7966

---

### setBlock()

> **setBlock**(`block`): `void`

Set the block this mutator is associated with.

#### Parameters

##### block

[`BlockSvg`](BlockSvg.md)

The block associated with this mutator.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10307

---

### setIconLocation()

> **setIconLocation**(`xy`): `void`

Notification that the icon has moved. Update the arrow accordingly.

#### Parameters

##### xy

[`Coordinate`](../utils/classes/Coordinate.md)

Absolute location in workspace coordinates.

#### Returns

`void`

#### Inherited from

[`Icon`](Icon.md).[`setIconLocation`](Icon.md#seticonlocation)

#### Defined in

node_modules/blockly/blockly.d.ts:7981

---

### setVisible()

> **setVisible**(`visible`): `void`

Show or hide the mutator bubble.

#### Parameters

##### visible

`boolean`

True if the bubble should be visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10358

---

### updateBlockStyle()

> **updateBlockStyle**(): `void`

Update the styles on all blocks in the mutator.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10382

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove the UI indicating if this icon may be clicked or not.

#### Returns

`void`

#### Overrides

[`Icon`](Icon.md).[`updateEditable`](Icon.md#updateeditable)

#### Defined in

node_modules/blockly/blockly.d.ts:10341

---

### findParentWs()

> `static` **findParentWs**(`workspace`): [`Workspace`](Workspace.md)

Get the parent workspace of a workspace that is inside a mutator, taking into
account whether it is a flyout.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

The workspace that is inside a mutator.

#### Returns

[`Workspace`](Workspace.md)

The mutator's parent workspace or null.

#### Defined in

node_modules/blockly/blockly.d.ts:10292

---

### reconnect()

> `static` **reconnect**(`connectionChild`, `block`, `inputName`): `boolean`

Reconnect an block to a mutated input.

#### Parameters

##### connectionChild

[`Connection`](Connection.md)

Connection on child block.

##### block

[`Block`](Block.md)

Parent block.

##### inputName

`string`

Name of input on parent block.

#### Returns

`boolean`

True iff a reconnection was made, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:10284
