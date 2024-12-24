# Class: Warning

## Constructors

### new Warning()

> **new Warning**(`block`): [`Warning`](Warning.md)

Class for a warning.

#### Parameters

##### block

[`Block`](Block.md)

The block associated with this warning.

#### Returns

[`Warning`](Warning.md)

#### Alias

Blockly.Warning

#### Defined in

node_modules/blockly/blockly.d.ts:14729

## Properties

### bubble\_

> **bubble\_**: [`Bubble`](Bubble.md)

#### Defined in

node_modules/blockly/blockly.d.ts:14748

---

### collapseHidden

> **collapseHidden**: `boolean`

Does this icon get hidden when the block is collapsed.

#### Defined in

node_modules/blockly/blockly.d.ts:14774

---

### paragraphElement\_

> **paragraphElement\_**: `SVGTextElement`

#### Defined in

node_modules/blockly/blockly.d.ts:14747

---

### text\_

> **text\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:14730

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this warning.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14770

---

### drawIcon\_()

> `protected` **drawIcon\_**(`group`): `void`

Draw the warning icon.

#### Parameters

##### group

`Element`

The icon group.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14736

---

### getText()

> **getText**(): `string`

Get this warning's texts.

#### Returns

`string`

All texts concatenated into one string.

#### Defined in

node_modules/blockly/blockly.d.ts:14766

---

### setText()

> **setText**(`text`, `id`): `void`

Set this warning's text.

#### Parameters

##### text

`string`

Warning text (or '' to delete). This supports
linebreaks.

##### id

`string`

An ID for this text entry to be able to maintain
multiple warnings.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14761

---

### setVisible()

> **setVisible**(`visible`): `void`

Show or hide the warning bubble.

#### Parameters

##### visible

`boolean`

True if the bubble should be visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14741
