# Class: Input

## Constructors

### new Input()

> **new Input**(`type`, `name`, `block`, `connection`): [`Input`](Input.md)

Class for an input with an optional field.

#### Parameters

##### type

`number`

The type of the input.

##### name

`string`

Language-neutral identifier which may used to find this
input again.

##### block

[`Block`](Block.md)

The block containing this input.

##### connection

[`Connection`](Connection.md)

Optional connection for this input.

#### Returns

[`Input`](Input.md)

#### Alias

Blockly.Input

#### Defined in

node_modules/blockly/blockly.d.ts:6265

## Properties

### align

> **align**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6345

---

### connection

> **connection**: [`Connection`](Connection.md)

#### Defined in

node_modules/blockly/blockly.d.ts:6276

---

### fieldRow

> **fieldRow**: [`Field`](Field.md)[]

#### Defined in

node_modules/blockly/blockly.d.ts:6278

---

### name

> **name**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:6269

---

### type

> **type**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6267

---

### visible\_

> **visible\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:6325

## Methods

### appendField()

> **appendField**(`field`, `opt_name`?): [`Input`](Input.md)

Add a field (or label from string), and all prefix and suffix fields, to the
end of the input's field row.

#### Parameters

##### field

Something to add as a field.

`string` | [`Field`](Field.md)

##### opt_name?

`string`

Language-neutral identifier which may used to find
this field again. Should be unique to the host block.

#### Returns

[`Input`](Input.md)

The input being append to (to allow chaining).

#### Defined in

node_modules/blockly/blockly.d.ts:6292

---

### dispose()

> **dispose**(): `void`

Sever all links to this input.

#### Returns

`void`

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:6365

---

### getShadowDom()

> **getShadowDom**(): `Element`

Returns the XML representation of the connection's shadow block.

#### Returns

`Element`

Shadow DOM representation of a block or null.

#### Defined in

node_modules/blockly/blockly.d.ts:6356

---

### getSourceBlock()

> **getSourceBlock**(): [`Block`](Block.md)

Get the source block for this input.

#### Returns

[`Block`](Block.md)

The source block, or null if there is none.

#### Defined in

node_modules/blockly/blockly.d.ts:6283

---

### init()

> **init**(): `void`

Initialize the fields on this input.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:6360

---

### insertFieldAt()

> **insertFieldAt**(`index`, `field`, `opt_name`?): `number`

Inserts a field (or label from string), and all prefix and suffix fields, at
the location of the input's field row.

#### Parameters

##### index

`number`

The index at which to insert field.

##### field

Something to add as a field.

`string` | [`Field`](Field.md)

##### opt_name?

`string`

Language-neutral identifier which may used to find
this field again. Should be unique to the host block.

#### Returns

`number`

The index following the last inserted field.

#### Defined in

node_modules/blockly/blockly.d.ts:6302

---

### isVisible()

> **isVisible**(): `boolean`

Gets whether this input is visible or not.

#### Returns

`boolean`

True if visible.

#### Defined in

node_modules/blockly/blockly.d.ts:6316

---

### markDirty()

> **markDirty**(): `void`

Mark all fields on this input as dirty.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6330

---

### removeField()

> **removeField**(`name`, `opt_quiet`?): `boolean`

Remove a field from this input.

#### Parameters

##### name

`string`

The name of the field.

##### opt_quiet?

`boolean`

True to prevent an error if field is not present.

#### Returns

`boolean`

True if operation succeeds, false if field is not present
and opt_quiet is true.

#### Throws

if the field is not present and opt_quiet is false.

#### Defined in

node_modules/blockly/blockly.d.ts:6311

---

### setAlign()

> **setAlign**(`align`): [`Input`](Input.md)

Change the alignment of the connection's field(s).

#### Parameters

##### align

`number`

One of the values of constants.ALIGN.
In RTL mode directions are reversed, and ALIGN.RIGHT aligns to the left.

#### Returns

[`Input`](Input.md)

The input being modified (to allow chaining).

#### Defined in

node_modules/blockly/blockly.d.ts:6344

---

### setCheck()

> **setCheck**(`check`): [`Input`](Input.md)

Change a connection's compatibility.

#### Parameters

##### check

Compatible value type or
list of value types. Null if all types are compatible.

`string` | `string`[]

#### Returns

[`Input`](Input.md)

The input being modified (to allow chaining).

#### Defined in

node_modules/blockly/blockly.d.ts:6337

---

### setShadowDom()

> **setShadowDom**(`shadow`): [`Input`](Input.md)

Changes the connection's shadow block.

#### Parameters

##### shadow

`Element`

DOM representation of a block or null.

#### Returns

[`Input`](Input.md)

The input being modified (to allow chaining).

#### Defined in

node_modules/blockly/blockly.d.ts:6351

---

### setVisible()

> **setVisible**(`visible`): [`BlockSvg`](BlockSvg.md)[]

Sets whether this input is visible or not.
Should only be used to collapse/uncollapse a block.

#### Parameters

##### visible

`boolean`

True if visible.

#### Returns

[`BlockSvg`](BlockSvg.md)[]

List of blocks to render.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6324
