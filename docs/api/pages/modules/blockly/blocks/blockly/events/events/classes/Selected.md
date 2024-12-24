# Class: Selected

Class for a selected event.

## Param

The ID of the previously selected
element. Null if no element last selected. Undefined for a blank event.

## Param

The ID of the selected element. Null if no
element currently selected (deselect). Undefined for a blank event.

## Param

The workspace identifier for this event.
Null if no element previously selected. Undefined for a blank event.

## Alias

Blockly.Events.Selected

## Constructors

### new Selected()

> **new Selected**(`opt_oldElementId`, `opt_newElementId`, `opt_workspaceId`): [`Selected`](Selected.md)

#### Parameters

##### opt_oldElementId

`any`

##### opt_newElementId

`any`

##### opt_workspaceId

`any`

#### Returns

[`Selected`](Selected.md)

#### Defined in

node_modules/blockly/blockly.d.ts:12333

## Properties

### newElementId

> **newElementId**: `string`

The id of the selected element.

#### Defined in

node_modules/blockly/blockly.d.ts:12343

---

### oldElementId

> **oldElementId**: `string`

The id of the last selected element.

#### Defined in

node_modules/blockly/blockly.d.ts:12338

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:12358

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

node_modules/blockly/blockly.d.ts:12353

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:12348
