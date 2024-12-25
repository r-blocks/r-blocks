# Class: Comment

Class for an icon.

## Param

The block associated with this icon.

## Alias

Blockly.Icon

## Extends

- [`Icon`](Icon.md)

## Constructors

### new Comment()

> **new Comment**(`block`): [`Comment`](Comment.md)

Class for a comment.

#### Parameters

##### block

[`Block`](Block.md)

The block associated with this comment.

#### Returns

[`Comment`](Comment.md)

#### Alias

Blockly.Comment

#### Overrides

[`Icon`](Icon.md).[`constructor`](Icon.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:14788

## Properties

### block\_

> `protected` **block\_**: [`BlockSvg`](BlockSvg.md)

The block this icon is attached to.

#### Inherited from

[`Icon`](Icon.md).[`block_`](Icon.md#block_)

#### Defined in

node_modules/blockly/blockly.d.ts:7944

---

### bubble\_

> `protected` **bubble\_**: [`Bubble`](Bubble.md)

Bubble UI (if visible).

#### Overrides

[`Icon`](Icon.md).[`bubble_`](Icon.md#bubble_)

#### Defined in

node_modules/blockly/blockly.d.ts:14872

---

### collapseHidden

> **collapseHidden**: `boolean`

Does this icon get hidden when the block is collapsed.

#### Inherited from

[`Icon`](Icon.md).[`collapseHidden`](Icon.md#collapsehidden)

#### Defined in

node_modules/blockly/blockly.d.ts:8004

---

### foreignObject\_

> **foreignObject\_**: `SVGForeignObjectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:14838

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

### paragraphElement\_

> **paragraphElement\_**: `SVGTextElement`

#### Defined in

node_modules/blockly/blockly.d.ts:14879

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

### textarea\_

> **textarea\_**: `HTMLElement`

#### Defined in

node_modules/blockly/blockly.d.ts:14839

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

Dispose of this comment.

If you want to receive a comment "delete" event (newValue: null), then this
should not be called directly. Instead call block.setCommentText(null);

#### Returns

`void`

#### Overrides

[`Icon`](Icon.md).[`dispose`](Icon.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:14917

---

### drawIcon\_()

> `protected` **drawIcon\_**(`group`): `void`

Draw the comment icon.

#### Parameters

##### group

`Element`

The icon group.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14831

---

### getBubbleSize()

> **getBubbleSize**(): [`Size`](../utils/classes/Size.md)

Get the dimensions of this comment's bubble.

#### Returns

[`Size`](../utils/classes/Size.md)

Object with width and height properties.

#### Defined in

node_modules/blockly/blockly.d.ts:14899

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

### iconClick\_()

> `protected` **iconClick\_**(`e`): `void`

Clicking on the icon toggles if the bubble is visible.

#### Parameters

##### e

`Event`

Mouse click event.

#### Returns

`void`

#### Inherited from

[`Icon`](Icon.md).[`iconClick_`](Icon.md#iconclick_)

#### Defined in

node_modules/blockly/blockly.d.ts:7972

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

### setBubbleSize()

> **setBubbleSize**(`width`, `height`): `void`

Size this comment's bubble.

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

node_modules/blockly/blockly.d.ts:14905

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

Show or hide the comment bubble.

#### Parameters

##### visible

`boolean`

True if the bubble should be visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14861

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove editability of the comment.

#### Returns

`void`

#### Overrides

[`Icon`](Icon.md).[`updateEditable`](Icon.md#updateeditable)

#### Defined in

node_modules/blockly/blockly.d.ts:14844

---

### updateText()

> **updateText**(): `void`

Update the comment's view to match the model.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14910
