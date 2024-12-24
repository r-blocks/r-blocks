# Class: Click

Class for a click event.

## Param

The affected block. Null for click events
that do not have an associated block (i.e. workspace click). Undefined
for a blank event.

## Param

The workspace identifier for this event.
Not used if block is passed. Undefined for a blank event.

## Param

The type of element targeted by this click
event. Undefined for a blank event.

## Alias

Blockly.Events.Click

## Constructors

### new Click()

> **new Click**(`opt_block`, `opt_workspaceId`, `opt_targetType`): [`Click`](Click.md)

#### Parameters

##### opt_block

`any`

##### opt_workspaceId

`any`

##### opt_targetType

`any`

#### Returns

[`Click`](Click.md)

#### Defined in

node_modules/blockly/blockly.d.ts:12822

## Properties

### blockId

> **blockId**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:12823

---

### targetType

> **targetType**: `string`

The type of element targeted by this click event.

#### Defined in

node_modules/blockly/blockly.d.ts:12828

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:12843

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

node_modules/blockly/blockly.d.ts:12838

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:12833
