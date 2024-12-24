# Class: BubbleOpen

Class for a bubble open event.

## Param

The associated block. Undefined for a
blank event.

## Param

Whether the bubble is opening (false if
closing). Undefined for a blank event.

## Param

The type of bubble. One of 'mutator',
'comment'
or 'warning'. Undefined for a blank event.

## Alias

Blockly.Events.BubbleOpen

## Constructors

### new BubbleOpen()

> **new BubbleOpen**(`opt_block`, `opt_isOpen`, `opt_bubbleType`): [`BubbleOpen`](BubbleOpen.md)

#### Parameters

##### opt_block

`any`

##### opt_isOpen

`any`

##### opt_bubbleType

`any`

#### Returns

[`BubbleOpen`](BubbleOpen.md)

#### Defined in

node_modules/blockly/blockly.d.ts:10246

## Properties

### blockId

> **blockId**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:10247

---

### bubbleType

> **bubbleType**: `string`

The type of bubble. One of 'mutator', 'comment', or 'warning'.

#### Defined in

node_modules/blockly/blockly.d.ts:10257

---

### isOpen

> **isOpen**: `boolean`

Whether the bubble is opening (false if closing).

#### Defined in

node_modules/blockly/blockly.d.ts:10252

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:10272

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

node_modules/blockly/blockly.d.ts:10267

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:10262
