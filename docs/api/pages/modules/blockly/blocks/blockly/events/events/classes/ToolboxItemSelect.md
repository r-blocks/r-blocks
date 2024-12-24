# Class: ToolboxItemSelect

Class for a toolbox item select event.

## Param

The previously selected toolbox item. Undefined
for a blank event.

## Param

The newly selected toolbox item. Undefined for
a blank event.

## Param

The workspace identifier for this event.
Undefined for a blank event.

## Alias

Blockly.Events.ToolboxItemSelect

## Constructors

### new ToolboxItemSelect()

> **new ToolboxItemSelect**(`opt_oldItem`, `opt_newItem`, `opt_workspaceId`): [`ToolboxItemSelect`](ToolboxItemSelect.md)

#### Parameters

##### opt_oldItem

`any`

##### opt_newItem

`any`

##### opt_workspaceId

`any`

#### Returns

[`ToolboxItemSelect`](ToolboxItemSelect.md)

#### Defined in

node_modules/blockly/blockly.d.ts:19835

## Properties

### newItem

> **newItem**: `string`

The newly selected toolbox item.

#### Defined in

node_modules/blockly/blockly.d.ts:19845

---

### oldItem

> **oldItem**: `string`

The previously selected toolbox item.

#### Defined in

node_modules/blockly/blockly.d.ts:19840

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:19860

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

node_modules/blockly/blockly.d.ts:19855

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:19850
