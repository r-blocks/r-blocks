# Class: FieldNumber

## Extends

- [`FieldTextInput`](FieldTextInput.md)

## Constructors

### new FieldNumber()

> **new FieldNumber**(`opt_value`?, `opt_min`?, `opt_max`?, `opt_precision`?, `opt_validator`?, `opt_config`?): [`FieldNumber`](FieldNumber.md)

Class for an editable number field.

#### Parameters

##### opt_value?

The initial value of the field. Should cast
to a number. Defaults to 0.

`string` | `number`

##### opt_min?

Minimum value.

`string` | `number`

##### opt_max?

Maximum value.

`string` | `number`

##### opt_precision?

Precision for value.

`string` | `number`

##### opt_validator?

`Function`

A function that is called to validate
changes to the field's value. Takes in a number & returns a validated
number, or null to abort the change.

##### opt_config?

`any`

A map of options used to configure the field.
See the [field creation documentation][https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/number#creation](https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/number#creation)
for a list of properties this parameter supports.

#### Returns

[`FieldNumber`](FieldNumber.md)

#### Alias

Blockly.FieldNumber

#### Overrides

[`FieldTextInput`](FieldTextInput.md).[`constructor`](FieldTextInput.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:23426

## Properties

### borderRect\_

> `protected` **borderRect\_**: `SVGRectElement`

The rendered field's SVG border element.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`borderRect_`](FieldTextInput.md#borderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17243

---

### clickTarget\_

> `protected` **clickTarget\_**: `any`

The element the click handler is bound to.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`clickTarget_`](FieldTextInput.md#clicktarget_)

#### Defined in

node_modules/blockly/blockly.d.ts:21635

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

Constants associated with the source block's renderer.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`constants_`](FieldTextInput.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:17267

---

### CURSOR

> **CURSOR**: `string`

Mouse cursor style when over the hotspot that initiates the editor.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`CURSOR`](FieldTextInput.md#cursor)

#### Defined in

node_modules/blockly/blockly.d.ts:21805

---

### DEFAULT_VALUE

> `protected` **DEFAULT_VALUE**: `any`

The default value for this field.

#### Overrides

[`FieldTextInput`](FieldTextInput.md).[`DEFAULT_VALUE`](FieldTextInput.md#default_value)

#### Defined in

node_modules/blockly/blockly.d.ts:23550

---

### disposed

> **disposed**: `boolean`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`disposed`](FieldTextInput.md#disposed)

#### Defined in

node_modules/blockly/blockly.d.ts:17388

---

### EDITABLE

> **EDITABLE**: `boolean`

Editable fields usually show some sort of UI indicating they are editable.
They will also be saved by the XML renderer.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`EDITABLE`](FieldTextInput.md#editable)

#### Defined in

node_modules/blockly/blockly.d.ts:17706

---

### enabled\_

> **enabled\_**: `boolean`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`enabled_`](FieldTextInput.md#enabled_)

#### Defined in

node_modules/blockly/blockly.d.ts:17399

---

### fieldGroup\_

> `protected` **fieldGroup\_**: `SVGGElement`

The rendered field's SVG group element.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`fieldGroup_`](FieldTextInput.md#fieldgroup_)

#### Defined in

node_modules/blockly/blockly.d.ts:17237

---

### fullBlockClickTarget\_

> **fullBlockClickTarget\_**: `boolean`

Whether the field should consider the whole parent block to be its click
target.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`fullBlockClickTarget_`](FieldTextInput.md#fullblockclicktarget_)

#### Defined in

node_modules/blockly/blockly.d.ts:21620

---

### htmlInput\_

> **htmlInput\_**: `HTMLElement`

The HTML input element.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`htmlInput_`](FieldTextInput.md#htmlinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:21602

---

### isBeingEdited\_

> **isBeingEdited\_**: `boolean`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isBeingEdited_`](FieldTextInput.md#isbeingedited_)

#### Defined in

node_modules/blockly/blockly.d.ts:21703

---

### isDirty\_

> **isDirty\_**: `boolean`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isDirty_`](FieldTextInput.md#isdirty_)

#### Defined in

node_modules/blockly/blockly.d.ts:21664

---

### isTextValid\_

> **isTextValid\_**: `boolean`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isTextValid_`](FieldTextInput.md#istextvalid_)

#### Defined in

node_modules/blockly/blockly.d.ts:21653

---

### max\_

> `protected` **max\_**: `number`

The maximum value this number field can contain.

#### Defined in

node_modules/blockly/blockly.d.ts:23438

---

### maxDisplayLength

> **maxDisplayLength**: `number`

Maximum characters of text to display before adding an ellipsis.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`maxDisplayLength`](FieldTextInput.md#maxdisplaylength)

#### Defined in

node_modules/blockly/blockly.d.ts:17694

---

### min\_

> `protected` **min\_**: `number`

The minimum value this number field can contain.

#### Defined in

node_modules/blockly/blockly.d.ts:23432

---

### name

> **name**: `string`

Name of field. Unique within each block.
Static labels are usually unnamed.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`name`](FieldTextInput.md#name)

#### Defined in

node_modules/blockly/blockly.d.ts:17689

---

### precision\_

> `protected` **precision\_**: `number`

The multiple to which this fields value is rounded.

#### Defined in

node_modules/blockly/blockly.d.ts:23444

---

### SERIALIZABLE

> **SERIALIZABLE**: `boolean`

Serializable fields are saved by the XML renderer, non-serializable fields
are not. Editable fields should also be serializable.

#### Overrides

[`FieldTextInput`](FieldTextInput.md).[`SERIALIZABLE`](FieldTextInput.md#serializable)

#### Defined in

node_modules/blockly/blockly.d.ts:23556

---

### size\_

> `protected` **size\_**: [`Size`](../utils/classes/Size.md)

The size of the area rendered by the field.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`size_`](FieldTextInput.md#size_)

#### Defined in

node_modules/blockly/blockly.d.ts:17217

---

### sourceBlock\_

> **sourceBlock\_**: [`Block`](Block.md)

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`sourceBlock_`](FieldTextInput.md#sourceblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:17281

---

### spellcheck\_

> `protected` **spellcheck\_**: `boolean`

Allow browser to spellcheck this field.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`spellcheck_`](FieldTextInput.md#spellcheck_)

#### Defined in

node_modules/blockly/blockly.d.ts:21597

---

### textContent\_

> `protected` **textContent\_**: `Text`

The rendered field's text content element.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`textContent_`](FieldTextInput.md#textcontent_)

#### Defined in

node_modules/blockly/blockly.d.ts:17255

---

### textElement\_

> `protected` **textElement\_**: `SVGTextElement`

The rendered field's SVG text element.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`textElement_`](FieldTextInput.md#textelement_)

#### Defined in

node_modules/blockly/blockly.d.ts:17249

---

### validator\_

> `protected` **validator\_**: `Function`

Validation function called when user edits an editable field.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`validator_`](FieldTextInput.md#validator_)

#### Defined in

node_modules/blockly/blockly.d.ts:17204

---

### value\_

> `protected` **value\_**: `any`

A generic value possessed by the field.
Should generally be non-null, only null when the field is created.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`value_`](FieldTextInput.md#value_)

#### Defined in

node_modules/blockly/blockly.d.ts:21654

---

### visible\_

> **visible\_**: `any`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`visible_`](FieldTextInput.md#visible_)

#### Defined in

node_modules/blockly/blockly.d.ts:17437

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace that this field belongs to.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`workspace_`](FieldTextInput.md#workspace_)

#### Defined in

node_modules/blockly/blockly.d.ts:21626

## Methods

### applyColour()

> **applyColour**(): `void`

Updates text field to match the colour/style of the block.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`applyColour`](FieldTextInput.md#applycolour)

#### Defined in

node_modules/blockly/blockly.d.ts:21669

---

### bindEvents\_()

> `protected` **bindEvents\_**(): `void`

Bind events to the field. Can be overridden by subclasses if they need to do
custom input handling.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`bindEvents_`](FieldTextInput.md#bindevents_)

#### Defined in

node_modules/blockly/blockly.d.ts:17329

---

### bindInputEvents\_()

> `protected` **bindInputEvents\_**(`htmlInput`): `void`

Bind handlers for user input on the text input field's editor.

#### Parameters

##### htmlInput

`HTMLElement`

The htmlInput to which event
handlers will be bound.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`bindInputEvents_`](FieldTextInput.md#bindinputevents_)

#### Defined in

node_modules/blockly/blockly.d.ts:21722

---

### configure\_()

> `protected` **configure\_**(`config`): `void`

Configure the field based on the given map of options.

#### Parameters

##### config

`any`

A map of options to configure the field based on.

#### Returns

`void`

#### Overrides

[`FieldTextInput`](FieldTextInput.md).[`configure_`](FieldTextInput.md#configure_)

#### Defined in

node_modules/blockly/blockly.d.ts:23458

---

### createBorderRect\_()

> `protected` **createBorderRect\_**(): `void`

Create a field border rect element. Not to be overridden by subclasses.
Instead modify the result of the function inside initView, or create a
separate function to call.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`createBorderRect_`](FieldTextInput.md#createborderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17316

---

### createTextElement\_()

> `protected` **createTextElement\_**(): `void`

Create a field text element. Not to be overridden by subclasses. Instead
modify the result of the function inside initView, or create a separate
function to call.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`createTextElement_`](FieldTextInput.md#createtextelement_)

#### Defined in

node_modules/blockly/blockly.d.ts:17323

---

### dispose()

> **dispose**(): `void`

Dispose of all DOM objects and events belonging to this editable field.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`dispose`](FieldTextInput.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:17387

---

### doClassValidation\_()

> `protected` **doClassValidation\_**(`opt_newValue`?): `number`

Ensure that the input value is a valid number (must fulfill the
constraints placed on the field).

#### Parameters

##### opt_newValue?

`any`

The input value.

#### Returns

`number`

A valid number, or null if invalid.

#### Overrides

[`FieldTextInput`](FieldTextInput.md).[`doClassValidation_`](FieldTextInput.md#doclassvalidation_)

#### Defined in

node_modules/blockly/blockly.d.ts:23537

---

### doValueInvalid\_()

> `protected` **doValueInvalid\_**(`_invalidValue`): `void`

Called by setValue if the text input is not valid. If the field is
currently being edited it reverts value of the field to the previous
value while allowing the display text to be handled by the htmlInput\_.

#### Parameters

##### \_invalidValue

`any`

The input value that was determined to be invalid.
This is not used by the text input because its display value is stored on
the htmlInput\_.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`doValueInvalid_`](FieldTextInput.md#dovalueinvalid_)

#### Defined in

node_modules/blockly/blockly.d.ts:21652

---

### doValueUpdate\_()

> `protected` **doValueUpdate\_**(`newValue`): `void`

Called by setValue if the text input is valid. Updates the value of the
field, and updates the text of the field if it is not currently being
edited (i.e. handled by the htmlInput\_).

#### Parameters

##### newValue

`any`

The value to be saved. The default validator guarantees
that this is a string.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`doValueUpdate_`](FieldTextInput.md#dovalueupdate_)

#### Defined in

node_modules/blockly/blockly.d.ts:21663

---

### forceRerender()

> **forceRerender**(): `void`

Force a rerender of the block that this field is installed on, which will
rerender this field and adjust for any sizing changes.
Other fields on the same block will not rerender, because their sizes have
already been recorded.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`forceRerender`](FieldTextInput.md#forcererender)

#### Defined in

node_modules/blockly/blockly.d.ts:17548

---

### fromXml()

> **fromXml**(`fieldElement`): `void`

Sets the field's value based on the given XML element. Should only be called
by Blockly.Xml.

#### Parameters

##### fieldElement

`Element`

The element containing info about the
field's state.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`fromXml`](FieldTextInput.md#fromxml)

#### Defined in

node_modules/blockly/blockly.d.ts:17337

---

### getAbsoluteXY\_()

> `protected` **getAbsoluteXY\_**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the absolute coordinates of the top-left corner of this field.
The origin (0,0) is the top-left corner of the page body.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getAbsoluteXY_`](FieldTextInput.md#getabsolutexy_)

#### Defined in

node_modules/blockly/blockly.d.ts:17625

---

### getClickTarget\_()

> `protected` **getClickTarget\_**(): `Element`

The element to bind the click handler to. If not set explicitly, defaults
to the SVG root of the field. When this element is
clicked on an editable field, the editor will open.

#### Returns

`Element`

Element to bind click handler to.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getClickTarget_`](FieldTextInput.md#getclicktarget_)

#### Defined in

node_modules/blockly/blockly.d.ts:17618

---

### getConstants()

> **getConstants**(): [`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

Get the renderer constant provider.

#### Returns

[`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

The renderer constant
provider.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getConstants`](FieldTextInput.md#getconstants)

#### Defined in

node_modules/blockly/blockly.d.ts:17287

---

### getDisplayText\_()

> `protected` **getDisplayText\_**(): `string`

Get the text from this field to display on the block. May differ from
`getText` due to ellipsis, and other formatting.

#### Returns

`string`

Text to display.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getDisplayText_`](FieldTextInput.md#getdisplaytext_)

#### Defined in

node_modules/blockly/blockly.d.ts:17527

---

### getEditorText\_()

> `protected` **getEditorText\_**(`value`): `string`

Transform the provided value into a text to show in the HTML input.
Override this method if the field's HTML input representation is different
than the field's value. This should be coupled with an override of
`getValueFromEditorText_`.

#### Parameters

##### value

`any`

The value stored in this field.

#### Returns

`string`

The text to show on the HTML input.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getEditorText_`](FieldTextInput.md#geteditortext_)

#### Defined in

node_modules/blockly/blockly.d.ts:21778

---

### getFlipRtl()

> **getFlipRtl**(): `boolean`

Returns whether or not we should flip the field in RTL.

#### Returns

`boolean`

True if we should flip in RTL.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getFlipRtl`](FieldTextInput.md#getfliprtl)

#### Defined in

node_modules/blockly/blockly.d.ts:17645

---

### getMax()

> **getMax**(): `number`

Returns the current maximum value this field can contain. Default is
Infinity.

#### Returns

`number`

The current maximum value this field can contain.

#### Defined in

node_modules/blockly/blockly.d.ts:23506

---

### getMin()

> **getMin**(): `number`

Returns the current minimum value this field can contain. Default is
-Infinity.

#### Returns

`number`

The current minimum value this field can contain.

#### Defined in

node_modules/blockly/blockly.d.ts:23488

---

### getParentInput()

> **getParentInput**(): [`Input`](Input.md)

Search through the list of inputs and their fields in order to find the
parent input of a field.

#### Returns

[`Input`](Input.md)

The input that the field belongs to.

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getParentInput`](FieldTextInput.md#getparentinput)

#### Defined in

node_modules/blockly/blockly.d.ts:17640

---

### getPrecision()

> **getPrecision**(): `number`

Returns the current precision of this field. The precision being the
number to which the field's value is rounded. A precision of 0 means that
the value is not rounded.

#### Returns

`number`

The number to which this field's value is rounded.

#### Defined in

node_modules/blockly/blockly.d.ts:23528

---

### getScaledBBox()

> **getScaledBBox**(): [`Rect`](../utils/classes/Rect.md)

Returns the bounding box of the rendered field, accounting for workspace
scaling.

#### Returns

[`Rect`](../utils/classes/Rect.md)

An object with top, bottom, left, and right in
pixels relative to the top left corner of the page (window coordinates).

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getScaledBBox`](FieldTextInput.md#getscaledbbox)

#### Defined in

node_modules/blockly/blockly.d.ts:17520

---

### getSize()

> **getSize**(): [`Size`](../utils/classes/Size.md)

Returns the height and width of the field.

This should _in general_ be the only place render\_ gets called from.

#### Returns

[`Size`](../utils/classes/Size.md)

Height and width.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getSize`](FieldTextInput.md#getsize)

#### Defined in

node_modules/blockly/blockly.d.ts:17511

---

### getSourceBlock()

> **getSourceBlock**(): [`Block`](Block.md)

Get the block this field is attached to.

#### Returns

[`Block`](Block.md)

The block containing this field.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getSourceBlock`](FieldTextInput.md#getsourceblock)

#### Defined in

node_modules/blockly/blockly.d.ts:17292

---

### getSvgRoot()

> **getSvgRoot**(): `SVGGElement`

Gets the group element for this editable field.
Used for measuring the size and for positioning.

#### Returns

`SVGGElement`

The group element.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getSvgRoot`](FieldTextInput.md#getsvgroot)

#### Defined in

node_modules/blockly/blockly.d.ts:17464

---

### getText()

> **getText**(): `string`

Get the text from this field.

#### Returns

`string`

Current text.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getText`](FieldTextInput.md#gettext)

#### Defined in

node_modules/blockly/blockly.d.ts:17532

---

### getText\_()

> `protected` **getText\_**(): `string`

Use the `getText_` developer hook to override the field's text
representation. When we're currently editing, return the current HTML value
instead. Otherwise, return null which tells the field to use the default
behaviour (which is a string cast of the field's value).

#### Returns

`string`

The HTML value if we're editing, otherwise null.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getText_`](FieldTextInput.md#gettext_)

#### Defined in

node_modules/blockly/blockly.d.ts:21768

---

### getTooltip()

> **getTooltip**(): `string`

Returns the tooltip text for this field.

#### Returns

`string`

The tooltip text for this field.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getTooltip`](FieldTextInput.md#gettooltip)

#### Defined in

node_modules/blockly/blockly.d.ts:17610

---

### getValidator()

> **getValidator**(): `Function`

Gets the validation function for editable fields, or null if not set.

#### Returns

`Function`

Validation function, or null.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getValidator`](FieldTextInput.md#getvalidator)

#### Defined in

node_modules/blockly/blockly.d.ts:17458

---

### getValue()

> **getValue**(): `any`

Get the current value of the field.

#### Returns

`any`

Current value.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getValue`](FieldTextInput.md#getvalue)

#### Defined in

node_modules/blockly/blockly.d.ts:17568

---

### getValueFromEditorText\_()

> `protected` **getValueFromEditorText\_**(`text`): `any`

Transform the text received from the HTML input into a value to store
in this field.
Override this method if the field's HTML input representation is different
than the field's value. This should be coupled with an override of
`getEditorText_`.

#### Parameters

##### text

`string`

Text received from the HTML input.

#### Returns

`any`

The value to store.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`getValueFromEditorText_`](FieldTextInput.md#getvaluefromeditortext_)

#### Defined in

node_modules/blockly/blockly.d.ts:21789

---

### init()

> **init**(): `void`

Initialize everything to render this field. Override
methods initModel and initView rather than this method.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`init`](FieldTextInput.md#init)

#### Defined in

node_modules/blockly/blockly.d.ts:17298

---

### initModel()

> **initModel**(): `void`

Initializes the model of the field after it has been installed on a block.
No-op by default.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`initModel`](FieldTextInput.md#initmodel)

#### Defined in

node_modules/blockly/blockly.d.ts:17309

---

### initView()

> **initView**(): `void`

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`initView`](FieldTextInput.md#initview)

#### Defined in

node_modules/blockly/blockly.d.ts:21634

---

### isClickable()

> **isClickable**(): `boolean`

Check whether this field defines the showEditor\_ function.

#### Returns

`boolean`

Whether this field is clickable.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isClickable`](FieldTextInput.md#isclickable)

#### Defined in

node_modules/blockly/blockly.d.ts:17410

---

### isCurrentlyEditable()

> **isCurrentlyEditable**(): `boolean`

Check whether this field is currently editable. Some fields are never
EDITABLE (e.g. text labels). Other fields may be EDITABLE but may exist on
non-editable blocks or be currently disabled.

#### Returns

`boolean`

Whether this field is currently enabled, editable and on
an editable block.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isCurrentlyEditable`](FieldTextInput.md#iscurrentlyeditable)

#### Defined in

node_modules/blockly/blockly.d.ts:17418

---

### isEnabled()

> **isEnabled**(): `boolean`

Check whether this field's value can be changed using the editor when the
source block is editable.

#### Returns

`boolean`

Whether this field is enabled.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isEnabled`](FieldTextInput.md#isenabled)

#### Defined in

node_modules/blockly/blockly.d.ts:17405

---

### isSerializable()

> **isSerializable**(): `boolean`

Check whether this field should be serialized by the XML renderer.
Handles the logic for backwards compatibility and incongruous states.

#### Returns

`boolean`

Whether this field should be serialized or not.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isSerializable`](FieldTextInput.md#isserializable)

#### Defined in

node_modules/blockly/blockly.d.ts:17424

---

### isTabNavigable()

> **isTabNavigable**(): `boolean`

Returns whether or not the field is tab navigable.

#### Returns

`boolean`

True if the field is tab navigable.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isTabNavigable`](FieldTextInput.md#istabnavigable)

#### Defined in

node_modules/blockly/blockly.d.ts:21758

---

### isVisible()

> **isVisible**(): `boolean`

Gets whether this editable field is visible or not.

#### Returns

`boolean`

True if visible.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`isVisible`](FieldTextInput.md#isvisible)

#### Defined in

node_modules/blockly/blockly.d.ts:17429

---

### loadLegacyState()

> **loadLegacyState**(`callingClass`, `state`): `boolean`

Loads the given state using either the old XML hoooks, if they should be
used. Returns true to indicate loading has been handled, false otherwise.

#### Parameters

##### callingClass

`any`

The class calling this method.
Used to see if `this` has overridden any relevant hooks.

##### state

`any`

The state to apply to the field.

#### Returns

`boolean`

Whether the state was applied or not.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`loadLegacyState`](FieldTextInput.md#loadlegacystate)

#### Defined in

node_modules/blockly/blockly.d.ts:17382

---

### loadState()

> **loadState**(`state`): `void`

Sets the field's state based on the given state value. Should only be called
by the serialization system.

#### Parameters

##### state

`any`

The state we want to apply to the field.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`loadState`](FieldTextInput.md#loadstate)

#### Defined in

node_modules/blockly/blockly.d.ts:17363

---

### markDirty()

> **markDirty**(): `void`

Force a rerender of the block that this field is installed on, which will
rerender this field and adjust for any sizing changes.
Other fields on the same block will not rerender, because their sizes have
already been recorded.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`markDirty`](FieldTextInput.md#markdirty)

#### Defined in

node_modules/blockly/blockly.d.ts:17540

---

### onHtmlInputKeyDown\_()

> `protected` **onHtmlInputKeyDown\_**(`e`): `void`

Handle key down to the editor.

#### Parameters

##### e

`Event`

Keyboard event.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`onHtmlInputKeyDown_`](FieldTextInput.md#onhtmlinputkeydown_)

#### Defined in

node_modules/blockly/blockly.d.ts:21733

---

### onMouseDown\_()

> `protected` **onMouseDown\_**(`e`): `void`

Handle a mouse down event on a field.

#### Parameters

##### e

`Event`

Mouse down event.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`onMouseDown_`](FieldTextInput.md#onmousedown_)

#### Defined in

node_modules/blockly/blockly.d.ts:17597

---

### onShortcut()

> **onShortcut**(`_shortcut`): `boolean`

Handles the given keyboard shortcut.

#### Parameters

##### \_shortcut

[`KeyboardShortcut`](../namespaces/ShortcutRegistry/type-aliases/KeyboardShortcut.md)

The shortcut to be
handled.

#### Returns

`boolean`

True if the shortcut has been handled, false otherwise.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`onShortcut`](FieldTextInput.md#onshortcut)

#### Defined in

node_modules/blockly/blockly.d.ts:17658

---

### positionBorderRect\_()

> `protected` **positionBorderRect\_**(): `void`

Position a field's border rect after a size change.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`positionBorderRect_`](FieldTextInput.md#positionborderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17504

---

### positionTextElement\_()

> `protected` **positionTextElement\_**(`xOffset`, `contentWidth`): `void`

Position a field's text element after a size change. This handles both LTR
and RTL positioning.

#### Parameters

##### xOffset

`number`

x offset to use when positioning the text element.

##### contentWidth

`number`

The content width.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`positionTextElement_`](FieldTextInput.md#positiontextelement_)

#### Defined in

node_modules/blockly/blockly.d.ts:17499

---

### referencesVariables()

> **referencesVariables**(): `boolean`

Whether this field references any Blockly variables. If true it may need to
be handled differently during serialization and deserialization. Subclasses
may override this.

#### Returns

`boolean`

True if this field has any variable references.

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`referencesVariables`](FieldTextInput.md#referencesvariables)

#### Defined in

node_modules/blockly/blockly.d.ts:17633

---

### render\_()

> `protected` **render\_**(): `void`

Updates the colour of the htmlInput given the current validity of the
field's value.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`render_`](FieldTextInput.md#render_)

#### Defined in

node_modules/blockly/blockly.d.ts:21675

---

### resizeEditor\_()

> `protected` **resizeEditor\_**(): `void`

Resize the editor to fit the text.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`resizeEditor_`](FieldTextInput.md#resizeeditor_)

#### Defined in

node_modules/blockly/blockly.d.ts:21752

---

### saveLegacyState()

> `protected` **saveLegacyState**(`callingClass`): `string`

Returns a stringified version of the XML state, if it should be used.
Otherwise this returns null, to signal the field should use its own
serialization.

#### Parameters

##### callingClass

`any`

The class calling this method.
Used to see if `this` has overridden any relevant hooks.

#### Returns

`string`

The stringified version of the XML state, or null.

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`saveLegacyState`](FieldTextInput.md#savelegacystate)

#### Defined in

node_modules/blockly/blockly.d.ts:17373

---

### saveState()

> **saveState**(`_doFullSerialization`?): `any`

Saves this fields value as something which can be serialized to JSON. Should
only be called by the serialization system.

#### Parameters

##### \_doFullSerialization?

`boolean`

If true, this signals to the field
that if it normally just saves a reference to some state (eg variable
fields) it should instead serialize the full state of the thing being
referenced.

#### Returns

`any`

JSON serializable state.

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`saveState`](FieldTextInput.md#savestate)

#### Defined in

node_modules/blockly/blockly.d.ts:17356

---

### setConstraints()

> **setConstraints**(`min`, `max`, `precision`): `void`

Set the maximum, minimum and precision constraints on this field.
Any of these properties may be undefined or NaN to be disabled.
Setting precision (usually a power of 10) enforces a minimum step between
values. That is, the user's value will rounded to the closest multiple of
precision. The least significant digit place is inferred from the precision.
Integers values can be enforces by choosing an integer precision.

#### Parameters

##### min

Minimum value.

`string` | `number`

##### max

Maximum value.

`string` | `number`

##### precision

Precision for value.

`string` | `number`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23470

---

### setCursorSvg()

> **setCursorSvg**(`cursorSvg`): `void`

Add the cursor SVG to this fields SVG group.

#### Parameters

##### cursorSvg

`SVGElement`

The SVG root of the cursor to be added to the
field group.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setCursorSvg`](FieldTextInput.md#setcursorsvg)

#### Defined in

node_modules/blockly/blockly.d.ts:17665

---

### setEditorValue\_()

> `protected` **setEditorValue\_**(`newValue`): `void`

Set the HTML input value and the field's internal value. The difference
between this and `setValue` is that this also updates the HTML input
value whilst editing.

#### Parameters

##### newValue

`any`

New value.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setEditorValue_`](FieldTextInput.md#seteditorvalue_)

#### Defined in

node_modules/blockly/blockly.d.ts:21747

---

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set whether this field's value can be changed using the editor when the
source block is editable.

#### Parameters

##### enabled

`boolean`

True if enabled.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setEnabled`](FieldTextInput.md#setenabled)

#### Defined in

node_modules/blockly/blockly.d.ts:17398

---

### setMarkerSvg()

> **setMarkerSvg**(`markerSvg`): `void`

Add the marker SVG to this fields SVG group.

#### Parameters

##### markerSvg

`SVGElement`

The SVG root of the marker to be added to the
field group.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setMarkerSvg`](FieldTextInput.md#setmarkersvg)

#### Defined in

node_modules/blockly/blockly.d.ts:17672

---

### setMax()

> **setMax**(`max`): `void`

Sets the maximum value this field can contain. Updates the value to reflect.

#### Parameters

##### max

Maximum value.

`string` | `number`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23493

---

### setMin()

> **setMin**(`min`): `void`

Sets the minimum value this field can contain. Updates the value to reflect.

#### Parameters

##### min

Minimum value.

`string` | `number`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23475

---

### setPrecision()

> **setPrecision**(`precision`): `void`

Sets the precision of this field's value, i.e. the number to which the
value is rounded. Updates the field to reflect.

#### Parameters

##### precision

The number to which the
field's value is rounded.

`string` | `number`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23513

---

### setSourceBlock()

> **setSourceBlock**(`block`): `void`

Attach this field to a block.

#### Parameters

##### block

[`Block`](Block.md)

The block containing this field.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setSourceBlock`](FieldTextInput.md#setsourceblock)

#### Defined in

node_modules/blockly/blockly.d.ts:17280

---

### setSpellcheck()

> **setSpellcheck**(`check`): `void`

Set whether this field is spellchecked by the browser.

#### Parameters

##### check

`boolean`

True if checked.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setSpellcheck`](FieldTextInput.md#setspellcheck)

#### Defined in

node_modules/blockly/blockly.d.ts:21680

---

### setTooltip()

> **setTooltip**(`newTip`): `void`

Sets the tooltip for this field.

#### Parameters

##### newTip

[`TipInfo`](../tooltip/type-aliases/TipInfo.md)

The
text for the tooltip, a function that returns the text for the tooltip, a
parent object whose tooltip will be used, or null to display the tooltip
of the parent block. To not display a tooltip pass the empty string.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setTooltip`](FieldTextInput.md#settooltip)

#### Defined in

node_modules/blockly/blockly.d.ts:17605

---

### setValidator()

> **setValidator**(`handler`): `void`

Sets a new validation function for editable fields, or clears a previously
set validator.

The validator function takes in the new field value, and returns
validated value. The validated value could be the input value, a modified
version of the input value, or null to abort the change.

If the function does not return anything (or returns undefined) the new
value is accepted as valid. This is to allow for fields using the
validated function as a field-level change event notification.

#### Parameters

##### handler

`Function`

The validator function
or null to clear a previous validator.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setValidator`](FieldTextInput.md#setvalidator)

#### Defined in

node_modules/blockly/blockly.d.ts:17453

---

### setValue()

> **setValue**(`newValue`): `void`

Used to change the value of the field. Handles validation and events.
Subclasses should override doClassValidation* and doValueUpdate* rather
than this method.

#### Parameters

##### newValue

`any`

New value.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setValue`](FieldTextInput.md#setvalue)

#### Defined in

node_modules/blockly/blockly.d.ts:17555

---

### setVisible()

> **setVisible**(`visible`): `void`

Sets whether this editable field is visible or not. Should only be called
by input.setVisible.

#### Parameters

##### visible

`boolean`

True if visible.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`setVisible`](FieldTextInput.md#setvisible)

#### Defined in

node_modules/blockly/blockly.d.ts:17436

---

### showEditor()

> **showEditor**(`opt_e`?): `void`

Show an editor when the field is clicked only if the field is clickable.

#### Parameters

##### opt_e?

`Event`

Optional mouse event that triggered the field to open,
or undefined if triggered programmatically.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`showEditor`](FieldTextInput.md#showeditor)

#### Defined in

node_modules/blockly/blockly.d.ts:17485

---

### showEditor\_()

> `protected` **showEditor\_**(`_opt_e`?, `opt_quietInput`?): `void`

Show the inline free-text editor on top of the text.

#### Parameters

##### \_opt_e?

`Event`

Optional mouse event that triggered the field to open,
or undefined if triggered programmatically.

##### opt_quietInput?

`boolean`

True if editor should be created without
focus. Defaults to false.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`showEditor_`](FieldTextInput.md#showeditor_)

#### Defined in

node_modules/blockly/blockly.d.ts:21689

---

### toXml()

> **toXml**(`fieldElement`): `Element`

Serializes this field's value to XML. Should only be called by Blockly.Xml.

#### Parameters

##### fieldElement

`Element`

The element to populate with info about the
field's state.

#### Returns

`Element`

The element containing info about the field's state.

#### Package

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`toXml`](FieldTextInput.md#toxml)

#### Defined in

node_modules/blockly/blockly.d.ts:17345

---

### unbindInputEvents\_()

> `protected` **unbindInputEvents\_**(): `void`

Unbind handlers for user input and workspace size changes.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`unbindInputEvents_`](FieldTextInput.md#unbindinputevents_)

#### Defined in

node_modules/blockly/blockly.d.ts:21727

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove the UI indicating if this field is editable or not.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`updateEditable`](FieldTextInput.md#updateeditable)

#### Defined in

node_modules/blockly/blockly.d.ts:17392

---

### updateMarkers\_()

> `protected` **updateMarkers\_**(): `void`

Redraw any attached marker or cursor svgs if needed.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`updateMarkers_`](FieldTextInput.md#updatemarkers_)

#### Defined in

node_modules/blockly/blockly.d.ts:17677

---

### updateSize\_()

> `protected` **updateSize\_**(`opt_margin`?): `void`

Updates the size of the field based on the text.

#### Parameters

##### opt_margin?

`number`

margin to use when positioning the text element.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`updateSize_`](FieldTextInput.md#updatesize_)

#### Defined in

node_modules/blockly/blockly.d.ts:17491

---

### widgetCreate\_()

> `protected` **widgetCreate\_**(): `HTMLElement`

Create the number input editor widget.

#### Returns

`HTMLElement`

The newly created number input editor.

#### Overrides

[`FieldTextInput`](FieldTextInput.md).[`widgetCreate_`](FieldTextInput.md#widgetcreate_)

#### Defined in

node_modules/blockly/blockly.d.ts:23544

---

### widgetDispose\_()

> `protected` **widgetDispose\_**(): `void`

Closes the editor, saves the results, and disposes of any events or
DOM-references belonging to the editor.

#### Returns

`void`

#### Inherited from

[`FieldTextInput`](FieldTextInput.md).[`widgetDispose_`](FieldTextInput.md#widgetdispose_)

#### Defined in

node_modules/blockly/blockly.d.ts:21715

---

### fromJson()

> `static` **fromJson**(`options`): [`FieldNumber`](FieldNumber.md)

Construct a FieldNumber from a JSON arg object.

#### Parameters

##### options

`any`

A JSON object with options (value, min, max, and
precision).

#### Returns

[`FieldNumber`](FieldNumber.md)

The new field instance.

#### Package

#### Nocollapse

#### Overrides

[`FieldTextInput`](FieldTextInput.md).[`fromJson`](FieldTextInput.md#fromjson)

#### Defined in

node_modules/blockly/blockly.d.ts:23407
