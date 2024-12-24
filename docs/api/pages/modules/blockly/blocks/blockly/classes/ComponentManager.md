# Class: ComponentManager

## Constructors

### new ComponentManager()

> **new ComponentManager**(): [`ComponentManager`](ComponentManager.md)

#### Returns

[`ComponentManager`](ComponentManager.md)

## Methods

### addCapability()

> **addCapability**\<`T`\>(`id`, `capability`): `void`

Adds a capability to a existing registered component.

#### Type Parameters

• **T**

#### Parameters

##### id

`string`

The ID of the component to add the capability to.

##### capability

`any`

The
capability to add.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8467

---

### addComponent()

> **addComponent**(`componentInfo`, `opt_allowOverrides`?): `void`

Adds a component.

#### Parameters

##### componentInfo

[`ComponentDatum`](../namespaces/ComponentManager/type-aliases/ComponentDatum.md)

The data for
the component to register.

##### opt_allowOverrides?

`boolean`

True to prevent an error when overriding
an already registered item.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8454

---

### getComponent()

> **getComponent**(`id`): [`IComponent`](IComponent.md)

Gets the component with the given ID.

#### Parameters

##### id

`string`

The ID of the component to get.

#### Returns

[`IComponent`](IComponent.md)

The component with the given name
or undefined if not found.

#### Defined in

node_modules/blockly/blockly.d.ts:8491

---

### getComponents()

> **getComponents**\<`T_6`\>(`capability`, `sorted`): `T_6`[]

Gets all the components with the specified capability.

#### Type Parameters

• **T_6**

#### Parameters

##### capability

`any`

The capability of the component.

##### sorted

`boolean`

Whether to return list ordered by weights.

#### Returns

`T_6`[]

The components that match the specified capability.

#### Defined in

node_modules/blockly/blockly.d.ts:8500

---

### hasCapability()

> **hasCapability**\<`T_4`\>(`id`, `capability`): `boolean`

Returns whether the component with this id has the specified capability.

#### Type Parameters

• **T_4**

#### Parameters

##### id

`string`

The ID of the component to check.

##### capability

`any`

The
capability to check for.

#### Returns

`boolean`

Whether the component has the capability.

#### Defined in

node_modules/blockly/blockly.d.ts:8484

---

### removeCapability()

> **removeCapability**\<`T_2`\>(`id`, `capability`): `void`

Removes a capability from an existing registered component.

#### Type Parameters

• **T_2**

#### Parameters

##### id

`string`

The ID of the component to remove the capability from.

##### capability

`any`

The
capability to remove.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8475

---

### removeComponent()

> **removeComponent**(`id`): `void`

Removes a component.

#### Parameters

##### id

`string`

The ID of the component to remove.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8459
