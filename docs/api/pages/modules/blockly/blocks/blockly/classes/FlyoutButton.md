# Class: FlyoutButton

## Constructors

### new FlyoutButton()

> **new FlyoutButton**(`workspace`, `targetWorkspace`, `json`, `isLabel`): [`FlyoutButton`](FlyoutButton.md)

Class for a button in the flyout.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace in which to place this
button.

##### targetWorkspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The flyout's target workspace.

##### json

[`ButtonOrLabelInfo`](../utils/utils/toolbox/type-aliases/ButtonOrLabelInfo.md)

The JSON specifying the label/button.

##### isLabel

`boolean`

Whether this button should be styled as a label.

#### Returns

[`FlyoutButton`](FlyoutButton.md)

#### Package

#### Alias

Blockly.FlyoutButton

#### Defined in

node_modules/blockly/blockly.d.ts:11148

## Properties

### height

> **height**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:11206

---

### info

> **info**: [`ButtonOrLabelInfo`](../utils/utils/toolbox/type-aliases/ButtonOrLabelInfo.md)

The JSON specifying the label / button.

#### Defined in

node_modules/blockly/blockly.d.ts:11197

---

### svgGroup\_

> **svgGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:11203

---

### svgText\_

> **svgText\_**: `SVGTextElement`

#### Defined in

node_modules/blockly/blockly.d.ts:11204

---

### width

> **width**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:11205

## Methods

### createDom()

> **createDom**(): `SVGElement`

Create the button elements.

#### Returns

`SVGElement`

The button's SVG group.

#### Defined in

node_modules/blockly/blockly.d.ts:11202

---

### dispose()

> **dispose**(): `void`

Dispose of this button.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11245

---

### getButtonText()

> **getButtonText**(): `string`

#### Returns

`string`

Text of the button.

#### Defined in

node_modules/blockly/blockly.d.ts:11235

---

### getPosition()

> **getPosition**(): [`Coordinate`](../utils/classes/Coordinate.md)

Location of the button.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

x, y coordinates.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11231

---

### getTargetWorkspace()

> **getTargetWorkspace**(): [`WorkspaceSvg`](WorkspaceSvg.md)

Get the button's target workspace.

#### Returns

[`WorkspaceSvg`](WorkspaceSvg.md)

The target workspace of the flyout where this
button resides.

#### Defined in

node_modules/blockly/blockly.d.ts:11241

---

### isLabel()

> **isLabel**(): `boolean`

#### Returns

`boolean`

Whether or not the button is a label.

#### Defined in

node_modules/blockly/blockly.d.ts:11225

---

### moveTo()

> **moveTo**(`x`, `y`): `void`

Move the button to the given x, y coordinates.

#### Parameters

##### x

`number`

The new x coordinate.

##### y

`number`

The new y coordinate.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11221

---

### show()

> **show**(): `void`

Correctly position the flyout button and make it visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11210
