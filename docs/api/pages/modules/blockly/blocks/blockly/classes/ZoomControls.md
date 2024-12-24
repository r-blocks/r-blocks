# Class: ZoomControls

## Constructors

### new ZoomControls()

> **new ZoomControls**(`workspace`): [`ZoomControls`](ZoomControls.md)

Class for a zoom controls.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace to sit in.

#### Returns

[`ZoomControls`](ZoomControls.md)

#### Implements

#### Alias

Blockly.ZoomControls

#### Defined in

node_modules/blockly/blockly.d.ts:12855

## Properties

### id

> **id**: `string`

The unique id for this component that is used to register with the
ComponentManager.

#### Defined in

node_modules/blockly/blockly.d.ts:12866

---

### initialized\_

> **initialized\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:12916

---

### left\_

> **left\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12939

---

### svgGroup\_

> **svgGroup\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12911

---

### top\_

> **top\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12938

## Methods

### createDom()

> **createDom**(): `SVGElement`

Create the zoom controls.

#### Returns

`SVGElement`

The zoom controls SVG group.

#### Defined in

node_modules/blockly/blockly.d.ts:12910

---

### dispose()

> **dispose**(): `void`

Disposes of this zoom controls.
Unlink from all DOM elements to prevent memory leaks.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12921

---

### getBoundingRectangle()

> **getBoundingRectangle**(): [`Rect`](../utils/classes/Rect.md)

Returns the bounding rectangle of the UI element in pixel units relative to
the Blockly injection div.

#### Returns

[`Rect`](../utils/classes/Rect.md)

The UI elements’s bounding box. Null if
bounding box should be ignored by other UI elements.

#### Defined in

node_modules/blockly/blockly.d.ts:12928

---

### init()

> **init**(): `void`

Initializes the zoom controls.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12915

---

### position()

> **position**(`metrics`, `savedPositions`): `void`

Positions the zoom controls.
It is positioned in the opposite corner to the corner the
categories/toolbox starts at.

#### Parameters

##### metrics

[`UiMetrics`](../namespaces/MetricsManager/type-aliases/UiMetrics.md)

The workspace metrics.

##### savedPositions

[`Rect`](../utils/classes/Rect.md)[]

List of rectangles that
are already on the workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12937
