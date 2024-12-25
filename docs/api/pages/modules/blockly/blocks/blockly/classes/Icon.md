# Class: `abstract` Icon

Class for an icon.

## Param

The block associated with this icon.

## Alias

Blockly.Icon

## Extended by

- [`Comment`](Comment.md)
- [`Mutator`](Mutator.md)

## Constructors

### new Icon()

> **new Icon**(`block`): [`Icon`](Icon.md)

#### Parameters

##### block

`any`

#### Returns

[`Icon`](Icon.md)

#### Defined in

node_modules/blockly/blockly.d.ts:7938

## Properties

### block\_

> `protected` **block\_**: [`BlockSvg`](BlockSvg.md)

The block this icon is attached to.

#### Defined in

node_modules/blockly/blockly.d.ts:7944

---

### bubble\_

> `protected` **bubble\_**: [`Bubble`](Bubble.md)

Bubble UI (if visible).

#### Defined in

node_modules/blockly/blockly.d.ts:8015

---

### collapseHidden

> **collapseHidden**: `boolean`

Does this icon get hidden when the block is collapsed.

#### Defined in

node_modules/blockly/blockly.d.ts:8004

---

### iconGroup\_

> **iconGroup\_**: `SVGGElement`

The icon SVG group.

#### Defined in

node_modules/blockly/blockly.d.ts:7949

---

### iconXY\_

> **iconXY\_**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:7982

---

### SIZE

> **SIZE**: `number`

Height and width of icons.

#### Const

#### Defined in

node_modules/blockly/blockly.d.ts:8009

## Methods

### applyColour()

> **applyColour**(): `void`

Change the colour of the associated bubble to match its block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7976

---

### computeIconLocation()

> **computeIconLocation**(): `void`

Notification that the icon has moved, but we don't really know where.
Recompute the icon's location from scratch.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7987

---

### createIcon()

> **createIcon**(): `void`

Create the icon on the block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7953

---

### dispose()

> **dispose**(): `void`

Dispose of this icon.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7957

---

### getCorrectedSize()

> **getCorrectedSize**(): [`Size`](../utils/classes/Size.md)

Get the size of the icon as used for rendering.
This differs from the actual size of the icon, because it bulges slightly
out of its row rather than increasing the height of its row.

#### Returns

[`Size`](../utils/classes/Size.md)

Height and width.

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

#### Defined in

node_modules/blockly/blockly.d.ts:7972

---

### isVisible()

> **isVisible**(): `boolean`

Is the associated bubble visible?

#### Returns

`boolean`

True if the bubble is visible.

#### Defined in

node_modules/blockly/blockly.d.ts:7966

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

#### Defined in

node_modules/blockly/blockly.d.ts:7981

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove the UI indicating if this icon may be clicked or not.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7961
