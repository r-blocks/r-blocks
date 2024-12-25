# Class: FinishedLoading

Class for a finished loading event.
Used to notify the developer when the workspace has finished loading (i.e
domToWorkspace).
Finished loading events do not record undo or redo.

## Param

The workspace that has finished
loading. Undefined for a blank event.

## Alias

Blockly.Events.FinishedLoading

## Constructors

### new FinishedLoading()

> **new FinishedLoading**(`opt_workspace`): [`FinishedLoading`](FinishedLoading.md)

#### Parameters

##### opt_workspace

`any`

#### Returns

[`FinishedLoading`](FinishedLoading.md)

#### Defined in

node_modules/blockly/blockly.d.ts:19785

## Properties

### group

> **group**: `string`

The event group ID for the group this event belongs to. Groups define
events that should be treated as an single action from the user's
perspective, and should be undone together.

#### Defined in

node_modules/blockly/blockly.d.ts:19802

---

### isBlank

> **isBlank**: `boolean`

Whether or not the event is blank (to be populated by fromJson).

#### Defined in

node_modules/blockly/blockly.d.ts:19790

---

### recordUndo

> **recordUndo**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:19803

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:19818

---

### workspaceId

> **workspaceId**: `string`

The workspace identifier for this event.

#### Defined in

node_modules/blockly/blockly.d.ts:19795

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

node_modules/blockly/blockly.d.ts:19813

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:19808
