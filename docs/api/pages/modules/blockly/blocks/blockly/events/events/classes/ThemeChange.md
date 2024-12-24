# Class: ThemeChange

Class for a theme change event.

## Param

The theme name. Undefined for a blank event.

## Param

The workspace identifier for this event.
event. Undefined for a blank event.

## Alias

Blockly.Events.ThemeChange

## Constructors

### new ThemeChange()

> **new ThemeChange**(`opt_themeName`, `opt_workspaceId`): [`ThemeChange`](ThemeChange.md)

#### Parameters

##### opt_themeName

`any`

##### opt_workspaceId

`any`

#### Returns

[`ThemeChange`](ThemeChange.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13083

## Properties

### themeName

> **themeName**: `string`

The theme name.

#### Defined in

node_modules/blockly/blockly.d.ts:13088

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:13103

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

node_modules/blockly/blockly.d.ts:13098

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:13093
