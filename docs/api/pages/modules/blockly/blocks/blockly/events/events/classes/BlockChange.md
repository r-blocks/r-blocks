# Class: BlockChange

## Constructors

### new BlockChange()

> **new BlockChange**(`opt_block`?, `opt_element`?, `opt_name`?, `opt_oldValue`?, `opt_newValue`?): [`BlockChange`](BlockChange.md)

Class for a block change event.

#### Parameters

##### opt_block?

[`Block`](../../../classes/Block.md)

The changed block. Undefined for a blank
event.

##### opt_element?

`string`

One of 'field', 'comment', 'disabled', etc.

##### opt_name?

`string`

Name of input or field affected, or null.

##### opt_oldValue?

`any`

Previous value of element.

##### opt_newValue?

`any`

New value of element.

#### Returns

[`BlockChange`](BlockChange.md)

#### Alias

Blockly.Events.BlockChange

#### Defined in

node_modules/blockly/blockly.d.ts:5301

## Properties

### element

> **element**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:5302

---

### name

> **name**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:5303

---

### newValue

> **newValue**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:5305

---

### oldValue

> **oldValue**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:5304

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:5330

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

node_modules/blockly/blockly.d.ts:5315

---

### isNull()

> **isNull**(): `boolean`

Does this event record any change of state?

#### Returns

`boolean`

False if something changed.

#### Defined in

node_modules/blockly/blockly.d.ts:5320

---

### run()

> **run**(`forward`): `void`

Run a change event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:5325

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:5310

---

### getExtraBlockState\_()

> `static` **getExtraBlockState\_**(`block`): `string`

Returns the extra state of the given block (either as XML or a JSO, depending
on the block's definition).

#### Parameters

##### block

[`BlockSvg`](../../../classes/BlockSvg.md)

The block to get the extra state of.

#### Returns

`string`

A stringified version of the extra state of the given block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5288
