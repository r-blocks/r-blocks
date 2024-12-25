# Class: MarkerSvg

## Extends

- [`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md)

## Constructors

### new MarkerSvg()

> **new MarkerSvg**(`workspace`, `constants`, `marker`): [`MarkerSvg`](MarkerSvg.md)

Class to draw a marker.

#### Parameters

##### workspace

[`WorkspaceSvg`](../../../../classes/WorkspaceSvg.md)

The workspace the marker belongs to.

##### constants

[`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The constants for
the renderer.

##### marker

[`Marker`](../../../../classes/Marker.md)

The marker to draw.

#### Returns

[`MarkerSvg`](MarkerSvg.md)

#### Alias

Blockly.zelos.MarkerSvg

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`constructor`](../../../common/block_rendering/classes/MarkerSvg.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:21825

## Properties

### colour\_

> **colour\_**: `string`

The colour of the marker.

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`colour_`](../../../common/block_rendering/classes/MarkerSvg.md#colour_)

#### Defined in

node_modules/blockly/blockly.d.ts:9043

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The constants necessary to draw the marker.

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`constants_`](../../../common/block_rendering/classes/MarkerSvg.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:9033

---

### currentMarkerSvg

> **currentMarkerSvg**: `SVGCircleElement`

The current SVG element for the marker.

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`currentMarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md#currentmarkersvg)

#### Defined in

node_modules/blockly/blockly.d.ts:21852

---

### markerBlock\_

> **markerBlock\_**: `SVGPathElement`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`markerBlock_`](../../../common/block_rendering/classes/MarkerSvg.md#markerblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:9246

---

### markerCircle\_

> **markerCircle\_**: `SVGCircleElement`

#### Defined in

node_modules/blockly/blockly.d.ts:21861

---

### markerInput\_

> **markerInput\_**: `SVGPathElement`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`markerInput_`](../../../common/block_rendering/classes/MarkerSvg.md#markerinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:9245

---

### markerSvg\_

> **markerSvg\_**: `SVGGElement`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`markerSvg_`](../../../common/block_rendering/classes/MarkerSvg.md#markersvg_)

#### Defined in

node_modules/blockly/blockly.d.ts:9242

---

### markerSvgLine\_

> **markerSvgLine\_**: `SVGRectElement`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`markerSvgLine_`](../../../common/block_rendering/classes/MarkerSvg.md#markersvgline_)

#### Defined in

node_modules/blockly/blockly.d.ts:9243

---

### markerSvgRect\_

> **markerSvgRect\_**: `SVGRectElement`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`markerSvgRect_`](../../../common/block_rendering/classes/MarkerSvg.md#markersvgrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:9244

---

### svgGroup\_

> **svgGroup\_**: `SVGGElement`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`svgGroup_`](../../../common/block_rendering/classes/MarkerSvg.md#svggroup_)

#### Defined in

node_modules/blockly/blockly.d.ts:9066

## Methods

### applyColour\_()

> **applyColour\_**(`curNode`): `void`

#### Parameters

##### curNode

`any`

#### Returns

`void`

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`applyColour_`](../../../common/block_rendering/classes/MarkerSvg.md#applycolour_)

#### Defined in

node_modules/blockly/blockly.d.ts:21865

---

### createDom()

> **createDom**(): `SVGElement`

Create the DOM element for the marker.

#### Returns

`SVGElement`

The marker controls SVG group.

#### Package

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`createDom`](../../../common/block_rendering/classes/MarkerSvg.md#createdom)

#### Defined in

node_modules/blockly/blockly.d.ts:9065

---

### createDomInternal\_()

> **createDomInternal\_**(): `any`

#### Returns

`any`

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`createDomInternal_`](../../../common/block_rendering/classes/MarkerSvg.md#createdominternal_)

#### Defined in

node_modules/blockly/blockly.d.ts:21860

---

### dispose()

> **dispose**(): `void`

Dispose of this marker.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`dispose`](../../../common/block_rendering/classes/MarkerSvg.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:9257

---

### draw()

> **draw**(`oldNode`, `curNode`): `void`

Update the marker.

#### Parameters

##### oldNode

[`ASTNode`](../../../../classes/ASTNode.md)

The previous node the marker was on or null.

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node that we want to draw the marker for.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`draw`](../../../common/block_rendering/classes/MarkerSvg.md#draw)

#### Defined in

node_modules/blockly/blockly.d.ts:9079

---

### getBlinkProperties\_()

> `protected` **getBlinkProperties\_**(): `any`

Get the properties to make a marker blink.

#### Returns

`any`

The object holding attributes to make the marker blink.

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`getBlinkProperties_`](../../../common/block_rendering/classes/MarkerSvg.md#getblinkproperties_)

#### Defined in

node_modules/blockly/blockly.d.ts:9235

---

### getMarker()

> **getMarker**(): [`Marker`](../../../../classes/Marker.md)

Get the marker.

#### Returns

[`Marker`](../../../../classes/Marker.md)

The marker to draw for.

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`getMarker`](../../../common/block_rendering/classes/MarkerSvg.md#getmarker)

#### Defined in

node_modules/blockly/blockly.d.ts:9053

---

### getSvgRoot()

> **getSvgRoot**(): `SVGElement`

Return the root node of the SVG or null if none exists.

#### Returns

`SVGElement`

The root SVG node.

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`getSvgRoot`](../../../common/block_rendering/classes/MarkerSvg.md#getsvgroot)

#### Defined in

node_modules/blockly/blockly.d.ts:9048

---

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`hide`](../../../common/block_rendering/classes/MarkerSvg.md#hide)

#### Defined in

node_modules/blockly/blockly.d.ts:21856

---

### isCursor()

> **isCursor**(): `boolean`

True if the marker should be drawn as a cursor, false otherwise.
A cursor is drawn as a flashing line. A marker is drawn as a solid line.

#### Returns

`boolean`

True if the marker is a cursor, false otherwise.

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`isCursor`](../../../common/block_rendering/classes/MarkerSvg.md#iscursor)

#### Defined in

node_modules/blockly/blockly.d.ts:9059

---

### positionBlock\_()

> `protected` **positionBlock\_**(`width`, `markerOffset`, `markerHeight`): `void`

Position the marker for a block.
Displays an outline of the top half of a rectangle around a block.

#### Parameters

##### width

`number`

The width of the block.

##### markerOffset

`number`

The extra padding for around the block.

##### markerHeight

`number`

The height of the marker.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`positionBlock_`](../../../common/block_rendering/classes/MarkerSvg.md#positionblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:9165

---

### positionInput\_()

> `protected` **positionInput\_**(`connection`): `void`

Position the marker for an input connection.
Displays a filled in puzzle piece.

#### Parameters

##### connection

[`RenderedConnection`](../../../../classes/RenderedConnection.md)

The connection to position
marker around.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`positionInput_`](../../../common/block_rendering/classes/MarkerSvg.md#positioninput_)

#### Defined in

node_modules/blockly/blockly.d.ts:9173

---

### positionLine\_()

> `protected` **positionLine\_**(`x`, `y`, `width`): `void`

Move and show the marker at the specified coordinate in workspace units.
Displays a horizontal line.

#### Parameters

##### x

`number`

The new x, in workspace units.

##### y

`number`

The new y, in workspace units.

##### width

`number`

The new width, in workspace units.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`positionLine_`](../../../common/block_rendering/classes/MarkerSvg.md#positionline_)

#### Defined in

node_modules/blockly/blockly.d.ts:9182

---

### positionOutput\_()

> `protected` **positionOutput\_**(`width`, `height`, `connectionShape`): `void`

Position the marker for an output connection.
Displays a puzzle outline and the top and bottom path.

#### Parameters

##### width

`number`

The width of the block.

##### height

`number`

The height of the block.

##### connectionShape

`any`

The shape object for the connection.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`positionOutput_`](../../../common/block_rendering/classes/MarkerSvg.md#positionoutput_)

#### Defined in

node_modules/blockly/blockly.d.ts:9191

---

### positionPrevious\_()

> `protected` **positionPrevious\_**(`width`, `markerOffset`, `markerHeight`, `connectionShape`): `void`

Position the marker for a previous connection.
Displays a half rectangle with a notch in the top to represent the previous
connection.

#### Parameters

##### width

`number`

The width of the block.

##### markerOffset

`number`

The offset of the marker from around the block.

##### markerHeight

`number`

The height of the marker.

##### connectionShape

`any`

The shape object for the connection.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`positionPrevious_`](../../../common/block_rendering/classes/MarkerSvg.md#positionprevious_)

#### Defined in

node_modules/blockly/blockly.d.ts:9202

---

### positionRect\_()

> `protected` **positionRect\_**(`x`, `y`, `width`, `height`): `void`

Move and show the marker at the specified coordinate in workspace units.
Displays a filled in rectangle.

#### Parameters

##### x

`number`

The new x, in workspace units.

##### y

`number`

The new y, in workspace units.

##### width

`number`

The new width, in workspace units.

##### height

`number`

The new height, in workspace units.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`positionRect_`](../../../common/block_rendering/classes/MarkerSvg.md#positionrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:9212

---

### setParent\_()

> `protected` **setParent\_**(`newParent`): `void`

Attaches the SVG root of the marker to the SVG group of the parent.

#### Parameters

##### newParent

[`IASTNodeLocationSvg`](../../../../classes/IASTNodeLocationSvg.md)

The workspace, field, or
block that the marker SVG element should be attached to.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`setParent_`](../../../common/block_rendering/classes/MarkerSvg.md#setparent_)

#### Defined in

node_modules/blockly/blockly.d.ts:9073

---

### showAtLocation\_()

> `protected` **showAtLocation\_**(`curNode`): `void`

Update the marker's visible state based on the type of curNode..

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node that we want to draw the marker for.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showAtLocation_`](../../../common/block_rendering/classes/MarkerSvg.md#showatlocation_)

#### Defined in

node_modules/blockly/blockly.d.ts:9085

---

### showCurrent\_()

> `protected` **showCurrent\_**(): `void`

Show the current marker.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showCurrent_`](../../../common/block_rendering/classes/MarkerSvg.md#showcurrent_)

#### Defined in

node_modules/blockly/blockly.d.ts:9153

---

### showWithBlock\_()

> **showWithBlock\_**(`curNode`): `void`

Draw a rectangle around the block.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The current node of the marker.

#### Returns

`void`

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithBlock_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:21844

---

### showWithCoordinates\_()

> `protected` **showWithCoordinates\_**(`curNode`): `void`

Position and display the marker for a workspace coordinate.
This is a horizontal line.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithCoordinates_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithcoordinates_)

#### Defined in

node_modules/blockly/blockly.d.ts:9120

---

### showWithField\_()

> `protected` **showWithField\_**(`curNode`): `void`

Position and display the marker for a field.
This is a box around the field.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithField_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithfield_)

#### Defined in

node_modules/blockly/blockly.d.ts:9127

---

### showWithInput\_()

> **showWithInput\_**(`curNode`): `void`

#### Parameters

##### curNode

`any`

#### Returns

`void`

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithInput_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:21839

---

### showWithNext\_()

> `protected` **showWithNext\_**(`curNode`): `void`

Position and display the marker for a next connection.
This is a horizontal line.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithNext_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithnext_)

#### Defined in

node_modules/blockly/blockly.d.ts:9141

---

### showWithOutput\_()

> **showWithOutput\_**(`curNode`): `void`

#### Parameters

##### curNode

`any`

#### Returns

`void`

#### Overrides

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithOutput_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithoutput_)

#### Defined in

node_modules/blockly/blockly.d.ts:21835

---

### showWithPrevious\_()

> `protected` **showWithPrevious\_**(`curNode`): `void`

Position and display the marker for a previous connection.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithPrevious_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithprevious_)

#### Defined in

node_modules/blockly/blockly.d.ts:9107

---

### showWithStack\_()

> `protected` **showWithStack\_**(`curNode`): `void`

Position and display the marker for a stack.
This is a box with extra padding around the entire stack of blocks.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Inherited from

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md).[`showWithStack_`](../../../common/block_rendering/classes/MarkerSvg.md#showwithstack_)

#### Defined in

node_modules/blockly/blockly.d.ts:9148
