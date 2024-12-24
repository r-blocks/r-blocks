# Class: PathObject

An object that handles creating and setting each of the SVG elements
used by the renderer.

## Param

The root SVG element.

## Param

The style object to use for
colouring.

## Param

The renderer's constants.

## Package

## Alias

Blockly.geras.PathObject

## Extends

- [`PathObject`](../../../common/block_rendering/classes/PathObject.md)

## Constructors

### new PathObject()

> **new PathObject**(`root`, `style`, `constants`): [`PathObject`](PathObject.md)

#### Parameters

##### root

`any`

##### style

`any`

##### constants

`any`

#### Returns

[`PathObject`](PathObject.md)

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`constructor`](../../../common/block_rendering/classes/PathObject.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:20289

## Properties

### colourDark

> **colourDark**: `string`

The colour of the dark path on the block in '#RRGGBB' format.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20319

---

### constants

> **constants**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`constants`](../../../common/block_rendering/classes/PathObject.md#constants-1)

#### Defined in

node_modules/blockly/blockly.d.ts:20294

---

### cursorSvg

> **cursorSvg**: `SVGElement`

Holds the cursors svg element when the cursor is attached to the block.
This is null if there is no cursor on the block.

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`cursorSvg`](../../../common/block_rendering/classes/PathObject.md#cursorsvg)

#### Defined in

node_modules/blockly/blockly.d.ts:9307

---

### markerSvg

> **markerSvg**: `SVGElement`

Holds the markers svg element when the marker is attached to the block.
This is null if there is no marker on the block.

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`markerSvg`](../../../common/block_rendering/classes/PathObject.md#markersvg)

#### Defined in

node_modules/blockly/blockly.d.ts:9314

---

### style

> **style**: [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

The style object to use when colouring block paths.

#### Package

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`style`](../../../common/block_rendering/classes/PathObject.md#style-1)

#### Defined in

node_modules/blockly/blockly.d.ts:20325

---

### svgPath

> **svgPath**: `SVGElement`

The primary path of the block.

#### Package

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`svgPath`](../../../common/block_rendering/classes/PathObject.md#svgpath)

#### Defined in

node_modules/blockly/blockly.d.ts:20307

---

### svgPathDark

> **svgPathDark**: `SVGElement`

The dark path of the block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20301

---

### svgPathLight

> **svgPathLight**: `SVGElement`

The light path of the block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20313

---

### svgRoot

> **svgRoot**: `any`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`svgRoot`](../../../common/block_rendering/classes/PathObject.md#svgroot)

#### Defined in

node_modules/blockly/blockly.d.ts:20295

## Methods

### applyColour()

> **applyColour**(`block`): `void`

#### Parameters

##### block

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`applyColour`](../../../common/block_rendering/classes/PathObject.md#applycolour)

#### Defined in

node_modules/blockly/blockly.d.ts:20343

---

### flipRTL()

> **flipRTL**(): `void`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`flipRTL`](../../../common/block_rendering/classes/PathObject.md#fliprtl)

#### Defined in

node_modules/blockly/blockly.d.ts:20339

---

### setClass\_()

> `protected` **setClass\_**(`className`, `add`): `void`

Add or remove the given CSS class on the path object's root SVG element.

#### Parameters

##### className

`string`

The name of the class to add or remove

##### add

`boolean`

True if the class should be added. False if it should
be removed.

#### Returns

`void`

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`setClass_`](../../../common/block_rendering/classes/PathObject.md#setclass_)

#### Defined in

node_modules/blockly/blockly.d.ts:9360

---

### setCursorSvg()

> **setCursorSvg**(`cursorSvg`): `void`

Add the cursor SVG to this block's SVG group.

#### Parameters

##### cursorSvg

`SVGElement`

The SVG root of the cursor to be added to the
block SVG group.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`setCursorSvg`](../../../common/block_rendering/classes/PathObject.md#setcursorsvg)

#### Defined in

node_modules/blockly/blockly.d.ts:9332

---

### setHighlightPath()

> **setHighlightPath**(`highlightPath`): `void`

Set the highlight path generated by the renderer onto the SVG element.

#### Parameters

##### highlightPath

`string`

The highlight path.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20335

---

### setMarkerSvg()

> **setMarkerSvg**(`markerSvg`): `void`

Add the marker SVG to this block's SVG group.

#### Parameters

##### markerSvg

`SVGElement`

The SVG root of the marker to be added to the
block SVG group.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`setMarkerSvg`](../../../common/block_rendering/classes/PathObject.md#setmarkersvg)

#### Defined in

node_modules/blockly/blockly.d.ts:9339

---

### setPath()

> **setPath**(`mainPath`): `void`

#### Parameters

##### mainPath

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`setPath`](../../../common/block_rendering/classes/PathObject.md#setpath)

#### Defined in

node_modules/blockly/blockly.d.ts:20329

---

### setStyle()

> **setStyle**(`blockStyle`): `void`

#### Parameters

##### blockStyle

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`setStyle`](../../../common/block_rendering/classes/PathObject.md#setstyle)

#### Defined in

node_modules/blockly/blockly.d.ts:20347

---

### updateDisabled\_()

> **updateDisabled\_**(`disabled`): `void`

#### Parameters

##### disabled

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateDisabled_`](../../../common/block_rendering/classes/PathObject.md#updatedisabled_)

#### Defined in

node_modules/blockly/blockly.d.ts:20359

---

### updateDraggingDelete()

> **updateDraggingDelete**(`enable`): `void`

Add or remove styling showing that a block is dragged over a delete area.

#### Parameters

##### enable

`boolean`

True if the block is being dragged over a delete
area, false otherwise.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateDraggingDelete`](../../../common/block_rendering/classes/PathObject.md#updatedraggingdelete)

#### Defined in

node_modules/blockly/blockly.d.ts:9392

---

### updateHighlighted()

> **updateHighlighted**(`highlighted`): `void`

#### Parameters

##### highlighted

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateHighlighted`](../../../common/block_rendering/classes/PathObject.md#updatehighlighted)

#### Defined in

node_modules/blockly/blockly.d.ts:20351

---

### updateInsertionMarker()

> **updateInsertionMarker**(`enable`): `void`

Add or remove styling showing that a block is an insertion marker.

#### Parameters

##### enable

`boolean`

True if the block is an insertion marker, false
otherwise.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateInsertionMarker`](../../../common/block_rendering/classes/PathObject.md#updateinsertionmarker)

#### Defined in

node_modules/blockly/blockly.d.ts:9399

---

### updateMovable()

> **updateMovable**(`enable`): `void`

Add or remove styling showing that a block is movable.

#### Parameters

##### enable

`boolean`

True if the block is movable, false otherwise.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateMovable`](../../../common/block_rendering/classes/PathObject.md#updatemovable)

#### Defined in

node_modules/blockly/blockly.d.ts:9405

---

### updateReplacementFade()

> **updateReplacementFade**(`enable`): `void`

Add or remove styling that shows that if the dragging block is dropped, this
block will be replaced. If a shadow block, it will disappear. Otherwise it
will bump.

#### Parameters

##### enable

`boolean`

True if styling should be added.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateReplacementFade`](../../../common/block_rendering/classes/PathObject.md#updatereplacementfade)

#### Defined in

node_modules/blockly/blockly.d.ts:9413

---

### updateSelected()

> **updateSelected**(`enable`): `void`

Add or remove styling showing that a block is selected.

#### Parameters

##### enable

`boolean`

True if selection is enabled, false otherwise.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateSelected`](../../../common/block_rendering/classes/PathObject.md#updateselected)

#### Defined in

node_modules/blockly/blockly.d.ts:9385

---

### updateShadow\_()

> **updateShadow\_**(`shadow`): `void`

#### Parameters

##### shadow

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateShadow_`](../../../common/block_rendering/classes/PathObject.md#updateshadow_)

#### Defined in

node_modules/blockly/blockly.d.ts:20355

---

### updateShapeForInputHighlight()

> **updateShapeForInputHighlight**(`_conn`, `_enable`): `void`

Add or remove styling that shows that if the dragging block is dropped, this
block will be connected to the input.

#### Parameters

##### \_conn

[`Connection`](../../../../classes/Connection.md)

The connection on the input to highlight.

##### \_enable

`boolean`

True if styling should be added.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateShapeForInputHighlight`](../../../common/block_rendering/classes/PathObject.md#updateshapeforinputhighlight)

#### Defined in

node_modules/blockly/blockly.d.ts:9421
