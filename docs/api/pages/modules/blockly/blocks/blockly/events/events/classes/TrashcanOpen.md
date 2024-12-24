# Class: TrashcanOpen

Class for a trashcan open event.

## Param

Whether the trashcan flyout is opening (false if
opening). Undefined for a blank event.

## Param

The workspace identifier for this event.
Undefined for a blank event.

## Alias

Blockly.Events.TrashcanOpen

## Constructors

### new TrashcanOpen()

> **new TrashcanOpen**(`opt_isOpen`, `opt_workspaceId`): [`TrashcanOpen`](TrashcanOpen.md)

#### Parameters

##### opt_isOpen

`any`

##### opt_workspaceId

`any`

#### Returns

[`TrashcanOpen`](TrashcanOpen.md)

#### Defined in

node_modules/blockly/blockly.d.ts:12026

## Properties

### isOpen

> **isOpen**: `boolean`

Whether the trashcan flyout is opening (false if closing).

#### Defined in

node_modules/blockly/blockly.d.ts:12031

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:12046

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

node_modules/blockly/blockly.d.ts:12041

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:12036
