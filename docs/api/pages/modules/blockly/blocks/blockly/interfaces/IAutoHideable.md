# Interface: IAutoHideable

**`Interface`**

The interface for a workspace component that can be registered with the
ComponentManager.

## Alias

Blockly.IComponent

## Extends

- [`IComponent`](../classes/IComponent.md)

## Methods

### autoHide()

> **autoHide**(`onlyClosePopups`): `void`

Hides the component. Called in Blockly.hideChaff.

#### Parameters

##### onlyClosePopups

`boolean`

Whether only popups should be closed.
Flyouts should not be closed if this is true.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8397
