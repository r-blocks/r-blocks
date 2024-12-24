# Class: PathObject

## Extends

- [`PathObject`](../../../common/block_rendering/classes/PathObject.md)

## Constructors

### new PathObject()

> **new PathObject**(`root`, `style`, `constants`): [`PathObject`](PathObject.md)

An object that handles creating and setting each of the SVG elements
used by the renderer.

#### Parameters

##### root

`SVGElement`

The root SVG element.

##### style

[`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

The style object to use for
colouring.

##### constants

[`ConstantProvider`](ConstantProvider.md)

The renderer's constants.

#### Returns

[`PathObject`](PathObject.md)

#### Package

#### Alias

Blockly.zelos.PathObject

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`constructor`](../../../common/block_rendering/classes/PathObject.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:21313

## Properties

### constants

> **constants**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`constants`](../../../common/block_rendering/classes/PathObject.md#constants-1)

#### Defined in

node_modules/blockly/blockly.d.ts:21318

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

### outputShapeType

> **outputShapeType**: `any`

The type of block's output connection shape. This is set when a block with
an output connection is drawn.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:21345

---

### style

> **style**: [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

The style object to use when colouring block paths.

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`style`](../../../common/block_rendering/classes/PathObject.md#style-1)

#### Defined in

node_modules/blockly/blockly.d.ts:9300

---

### svgPath

> **svgPath**: `SVGElement`

The primary path of the block.

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`svgPath`](../../../common/block_rendering/classes/PathObject.md#svgpath)

#### Defined in

node_modules/blockly/blockly.d.ts:9294

---

### svgRoot

> **svgRoot**: `SVGElement`

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`svgRoot`](../../../common/block_rendering/classes/PathObject.md#svgroot)

#### Defined in

node_modules/blockly/blockly.d.ts:9288

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

node_modules/blockly/blockly.d.ts:21353

---

### beginDrawing()

> **beginDrawing**(): `void`

Method that's called when the drawer is about to draw the block.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:21374

---

### endDrawing()

> **endDrawing**(): `void`

Method that's called when the drawer is done drawing.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:21379

---

### flipRTL()

> **flipRTL**(): `void`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`flipRTL`](../../../common/block_rendering/classes/PathObject.md#fliprtl)

#### Defined in

node_modules/blockly/blockly.d.ts:21357

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

### setOutlinePath()

> **setOutlinePath**(`name`, `pathString`): `void`

Set the path generated by the renderer for an outline path on the respective
outline path SVG element.

#### Parameters

##### name

`string`

The input name.

##### pathString

`string`

The path.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:21387

---

### setPath()

> **setPath**(`pathString`): `void`

#### Parameters

##### pathString

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`setPath`](../../../common/block_rendering/classes/PathObject.md#setpath)

#### Defined in

node_modules/blockly/blockly.d.ts:21349

---

### setStyle()

> **setStyle**(`blockStyle`): `void`

Set the style.

#### Parameters

##### blockStyle

[`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

The block style to use.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`setStyle`](../../../common/block_rendering/classes/PathObject.md#setstyle)

#### Defined in

node_modules/blockly/blockly.d.ts:9352

---

### updateDisabled\_()

> `protected` **updateDisabled\_**(`disabled`): `void`

Updates the look of the block to reflect a disabled state.

#### Parameters

##### disabled

`boolean`

True if disabled.

#### Returns

`void`

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateDisabled_`](../../../common/block_rendering/classes/PathObject.md#updatedisabled_)

#### Defined in

node_modules/blockly/blockly.d.ts:9379

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

> **updateHighlighted**(`enable`): `void`

Set whether the block shows a highlight or not. Block highlighting is
often used to visually mark blocks currently being executed.

#### Parameters

##### enable

`boolean`

True if highlighted.

#### Returns

`void`

#### Package

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateHighlighted`](../../../common/block_rendering/classes/PathObject.md#updatehighlighted)

#### Defined in

node_modules/blockly/blockly.d.ts:9367

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

#### Parameters

##### enable

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateReplacementFade`](../../../common/block_rendering/classes/PathObject.md#updatereplacementfade)

#### Defined in

node_modules/blockly/blockly.d.ts:21365

---

### updateSelected()

> **updateSelected**(`enable`): `void`

#### Parameters

##### enable

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateSelected`](../../../common/block_rendering/classes/PathObject.md#updateselected)

#### Defined in

node_modules/blockly/blockly.d.ts:21361

---

### updateShadow\_()

> `protected` **updateShadow\_**(`shadow`): `void`

Updates the look of the block to reflect a shadow state.

#### Parameters

##### shadow

`boolean`

True if the block is a shadow block.

#### Returns

`void`

#### Inherited from

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateShadow_`](../../../common/block_rendering/classes/PathObject.md#updateshadow_)

#### Defined in

node_modules/blockly/blockly.d.ts:9373

---

### updateShapeForInputHighlight()

> **updateShapeForInputHighlight**(`conn`, `enable`): `void`

#### Parameters

##### conn

`any`

##### enable

`any`

#### Returns

`void`

#### Overrides

[`PathObject`](../../../common/block_rendering/classes/PathObject.md).[`updateShapeForInputHighlight`](../../../common/block_rendering/classes/PathObject.md#updateshapeforinputhighlight)

#### Defined in

node_modules/blockly/blockly.d.ts:21369
