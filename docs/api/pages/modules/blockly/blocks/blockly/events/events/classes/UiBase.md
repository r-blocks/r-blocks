# Class: UiBase

Base class for a UI event.
UI events are events that don't need to be sent over the wire for multi-user
editing to work (e.g. scrolling the workspace, zooming, opening toolbox
categories).
UI events do not undo or redo.

## Param

The workspace identifier for this event.
Undefined for a blank event.

## Alias

Blockly.Events.UiBase

## Constructors

### new UiBase()

> **new UiBase**(`opt_workspaceId`): [`UiBase`](UiBase.md)

#### Parameters

##### opt_workspaceId

`any`

#### Returns

[`UiBase`](UiBase.md)

#### Defined in

node_modules/blockly/blockly.d.ts:8923

## Properties

### isBlank

> **isBlank**: `boolean`

Whether or not the event is blank (to be populated by fromJson).

#### Defined in

node_modules/blockly/blockly.d.ts:8928

---

### isUiEvent

> **isUiEvent**: `boolean`

Whether or not the event is a UI event.

#### Defined in

node_modules/blockly/blockly.d.ts:8939

---

### recordUndo

> **recordUndo**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:8934

---

### workspaceId

> **workspaceId**: `string`

The workspace identifier for this event.

#### Defined in

node_modules/blockly/blockly.d.ts:8933
