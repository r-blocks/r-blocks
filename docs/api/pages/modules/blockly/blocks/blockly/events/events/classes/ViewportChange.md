# Class: ViewportChange

Class for a viewport change event.

## Param

Top-edge of the visible portion of the workspace,
relative to the workspace origin. Undefined for a blank event.

## Param

Left-edge of the visible portion of the workspace,
relative to the workspace origin. Undefined for a blank event.

## Param

The scale of the workspace. Undefined for a blank
event.

## Param

The workspace identifier for this event.
Undefined for a blank event.

## Param

The old scale of the workspace. Undefined for a
blank event.

## Alias

Blockly.Events.ViewportChange

## Constructors

### new ViewportChange()

> **new ViewportChange**(`opt_top`, `opt_left`, `opt_scale`, `opt_workspaceId`, `opt_oldScale`): [`ViewportChange`](ViewportChange.md)

#### Parameters

##### opt_top

`any`

##### opt_left

`any`

##### opt_scale

`any`

##### opt_workspaceId

`any`

##### opt_oldScale

`any`

#### Returns

[`ViewportChange`](ViewportChange.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13124

## Properties

### oldScale

> **oldScale**: `number`

The old scale of the workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:13146

---

### scale

> **scale**: `number`

The scale of the workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:13141

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:13161

---

### viewLeft

> **viewLeft**: `number`

Left-edge of the visible portion of the workspace, relative to the
workspace origin.

#### Defined in

node_modules/blockly/blockly.d.ts:13136

---

### viewTop

> **viewTop**: `number`

Top-edge of the visible portion of the workspace, relative to the workspace
origin.

#### Defined in

node_modules/blockly/blockly.d.ts:13130

## Methods

### fromJson()

> **fromJson**(`json`): `void`

Decode the JSON event.

#### Parameters

##### json

`any`

JSON representation.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13156

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:13151
