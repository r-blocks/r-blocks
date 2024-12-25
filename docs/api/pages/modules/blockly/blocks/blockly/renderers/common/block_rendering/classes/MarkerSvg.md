# Class: MarkerSvg

## Extended by

- [`MarkerSvg`](../../../zelos/zelos/classes/MarkerSvg.md)

## Constructors

### new MarkerSvg()

> **new MarkerSvg**(`workspace`, `constants`, `marker`): [`MarkerSvg`](MarkerSvg.md)

Class for a marker.

#### Parameters

##### workspace

[`WorkspaceSvg`](../../../../classes/WorkspaceSvg.md)

The workspace the marker belongs to.

##### constants

[`ConstantProvider`](ConstantProvider.md)

The constants for
the renderer.

##### marker

[`Marker`](../../../../classes/Marker.md)

The marker to draw.

#### Returns

[`MarkerSvg`](MarkerSvg.md)

#### Alias

Blockly.blockRendering.MarkerSvg

#### Defined in

node_modules/blockly/blockly.d.ts:9008

## Properties

### colour\_

> **colour\_**: `string`

The colour of the marker.

#### Defined in

node_modules/blockly/blockly.d.ts:9043

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](ConstantProvider.md)

The constants necessary to draw the marker.

#### Defined in

node_modules/blockly/blockly.d.ts:9033

---

### currentMarkerSvg

> **currentMarkerSvg**: `Element`

The current SVG element for the marker.

#### Defined in

node_modules/blockly/blockly.d.ts:9038

---

### markerBlock\_

> **markerBlock\_**: `SVGPathElement`

#### Defined in

node_modules/blockly/blockly.d.ts:9246

---

### markerInput\_

> **markerInput\_**: `SVGPathElement`

#### Defined in

node_modules/blockly/blockly.d.ts:9245

---

### markerSvg\_

> **markerSvg\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:9242

---

### markerSvgLine\_

> **markerSvgLine\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:9243

---

### markerSvgRect\_

> **markerSvgRect\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:9244

---

### svgGroup\_

> **svgGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:9066

## Methods

### applyColour\_()

> `protected` **applyColour\_**(`_curNode`): `void`

Apply the marker's colour.

#### Parameters

##### \_curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node that we want to draw the marker
for.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9253

---

### createDom()

> **createDom**(): `SVGElement`

Create the DOM element for the marker.

#### Returns

`SVGElement`

The marker controls SVG group.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:9065

---

### createDomInternal\_()

> `protected` **createDomInternal\_**(): `Element`

Create the marker SVG.

#### Returns

`Element`

The SVG node created.

#### Defined in

node_modules/blockly/blockly.d.ts:9241

---

### dispose()

> **dispose**(): `void`

Dispose of this marker.

#### Returns

`void`

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

#### Defined in

node_modules/blockly/blockly.d.ts:9079

---

### getBlinkProperties\_()

> `protected` **getBlinkProperties\_**(): `any`

Get the properties to make a marker blink.

#### Returns

`any`

The object holding attributes to make the marker blink.

#### Defined in

node_modules/blockly/blockly.d.ts:9235

---

### getMarker()

> **getMarker**(): [`Marker`](../../../../classes/Marker.md)

Get the marker.

#### Returns

[`Marker`](../../../../classes/Marker.md)

The marker to draw for.

#### Defined in

node_modules/blockly/blockly.d.ts:9053

---

### getSvgRoot()

> **getSvgRoot**(): `SVGElement`

Return the root node of the SVG or null if none exists.

#### Returns

`SVGElement`

The root SVG node.

#### Defined in

node_modules/blockly/blockly.d.ts:9048

---

### hide()

> **hide**(): `void`

Hide the marker.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9222

---

### isCursor()

> **isCursor**(): `boolean`

True if the marker should be drawn as a cursor, false otherwise.
A cursor is drawn as a flashing line. A marker is drawn as a solid line.

#### Returns

`boolean`

True if the marker is a cursor, false otherwise.

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

#### Defined in

node_modules/blockly/blockly.d.ts:9085

---

### showCurrent\_()

> `protected` **showCurrent\_**(): `void`

Show the current marker.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9153

---

### showWithBlock\_()

> `protected` **showWithBlock\_**(`curNode`): `void`

Position and display the marker for a block.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9101

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

#### Defined in

node_modules/blockly/blockly.d.ts:9127

---

### showWithInput\_()

> `protected` **showWithInput\_**(`curNode`): `void`

Position and display the marker for an input.
This is a puzzle piece.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9134

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

#### Defined in

node_modules/blockly/blockly.d.ts:9141

---

### showWithOutput\_()

> `protected` **showWithOutput\_**(`curNode`): `void`

Position and display the marker for an output connection.

#### Parameters

##### curNode

[`ASTNode`](../../../../classes/ASTNode.md)

The node to draw the marker for.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9113

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

#### Defined in

node_modules/blockly/blockly.d.ts:9148
