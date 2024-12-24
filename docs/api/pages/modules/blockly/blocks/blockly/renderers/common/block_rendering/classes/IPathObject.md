# Class: IPathObject

**`Interface`**

An interface for a block's path object.

## Param

The root SVG element.

## Param

The renderer's
constants.

## Alias

Blockly.blockRendering.IPathObject

## Constructors

### new IPathObject()

> **new IPathObject**(): [`IPathObject`](IPathObject.md)

#### Returns

[`IPathObject`](IPathObject.md)

## Properties

### constants

> **constants**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Defined in

node_modules/blockly/blockly.d.ts:8340

---

### cursorSvg

> **cursorSvg**: `SVGElement`

Holds the cursors SVG element when the cursor is attached to the block.
This is null if there is no cursor on the block.

#### Defined in

node_modules/blockly/blockly.d.ts:8351

---

### markerSvg

> **markerSvg**: `SVGElement`

Holds the markers SVG element when the marker is attached to the block.
This is null if there is no marker on the block.

#### Defined in

node_modules/blockly/blockly.d.ts:8357

---

### style

> **style**: [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

The primary path of the block.

#### Defined in

node_modules/blockly/blockly.d.ts:8345

---

### svgPath

> **svgPath**: `SVGElement`

The primary path of the block.

#### Defined in

node_modules/blockly/blockly.d.ts:8335
