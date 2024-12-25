# Class: FieldVariable

## Extends

- [`FieldDropdown`](FieldDropdown.md)

## Constructors

### new FieldVariable()

> **new FieldVariable**(`varName`, `opt_validator`?, `opt_variableTypes`?, `opt_defaultType`?, `opt_config`?): [`FieldVariable`](FieldVariable.md)

Class for a variable's dropdown field.

#### Parameters

##### varName

`string`

The default name for the variable. If null,
a unique variable name will be generated.

##### opt_validator?

`Function`

A function that is called to validate
changes to the field's value. Takes in a variable ID & returns a
validated variable ID, or null to abort the change.

##### opt_variableTypes?

`string`[]

A list of the types of variables
to include in the dropdown.

##### opt_defaultType?

`string`

The type of variable to create if this
field's value is not explicitly set. Defaults to ''.

##### opt_config?

`any`

A map of options used to configure the field.
See the [field creation documentation][https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/variable#creation](https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/variable#creation)
for a list of properties this parameter supports.

#### Returns

[`FieldVariable`](FieldVariable.md)

#### Alias

Blockly.FieldVariable

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`constructor`](FieldDropdown.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:23599

## Properties

### borderRect\_

> `protected` **borderRect\_**: `SVGRectElement`

The rendered field's SVG border element.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`borderRect_`](FieldDropdown.md#borderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17243

---

### clickTarget\_

> `protected` **clickTarget\_**: `any`

The element the click handler is bound to.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`clickTarget_`](FieldDropdown.md#clicktarget_)

#### Defined in

node_modules/blockly/blockly.d.ts:23055

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

Constants associated with the source block's renderer.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`constants_`](FieldDropdown.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:17267

---

### CURSOR

> **CURSOR**: `string`

Mouse cursor style when over the hotspot that initiates the editor.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`CURSOR`](FieldDropdown.md#cursor)

#### Defined in

node_modules/blockly/blockly.d.ts:23184

---

### DEFAULT_VALUE

> `protected` **DEFAULT_VALUE**: `any`

The default value for this field.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`DEFAULT_VALUE`](FieldDropdown.md#default_value)

#### Defined in

node_modules/blockly/blockly.d.ts:17683

---

### defaultType\_

> **defaultType\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:23744

---

### defaultVariableName

> **defaultVariableName**: `string`

The initial variable name passed to this field's constructor, or an
empty string if a name wasn't provided. Used to create the initial
variable.

#### Defined in

node_modules/blockly/blockly.d.ts:23614

---

### disposed

> **disposed**: `boolean`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`disposed`](FieldDropdown.md#disposed)

#### Defined in

node_modules/blockly/blockly.d.ts:17388

---

### EDITABLE

> **EDITABLE**: `boolean`

Editable fields usually show some sort of UI indicating they are editable.
They will also be saved by the XML renderer.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`EDITABLE`](FieldDropdown.md#editable)

#### Defined in

node_modules/blockly/blockly.d.ts:17706

---

### enabled\_

> **enabled\_**: `boolean`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`enabled_`](FieldDropdown.md#enabled_)

#### Defined in

node_modules/blockly/blockly.d.ts:17399

---

### fieldGroup\_

> `protected` **fieldGroup\_**: `SVGGElement`

The rendered field's SVG group element.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`fieldGroup_`](FieldDropdown.md#fieldgroup_)

#### Defined in

node_modules/blockly/blockly.d.ts:17237

---

### isDirty\_

> **isDirty\_**: `boolean`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`isDirty_`](FieldDropdown.md#isdirty_)

#### Defined in

node_modules/blockly/blockly.d.ts:17512

---

### maxDisplayLength

> **maxDisplayLength**: `number`

Maximum characters of text to display before adding an ellipsis.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`maxDisplayLength`](FieldDropdown.md#maxdisplaylength)

#### Defined in

node_modules/blockly/blockly.d.ts:17694

---

### menu\_

> `protected` **menu\_**: [`Menu`](Menu.md)

The dropdown menu.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`menu_`](FieldDropdown.md#menu_)

#### Defined in

node_modules/blockly/blockly.d.ts:23016

---

### menuGenerator\_

> `protected` **menuGenerator\_**: `any`[][] \| (`this`) => `any`[][]

An array of options for a dropdown list,
or a function which generates these options.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`menuGenerator_`](FieldDropdown.md#menugenerator_)

#### Defined in

node_modules/blockly/blockly.d.ts:23607

---

### name

> **name**: `string`

Name of field. Unique within each block.
Static labels are usually unnamed.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`name`](FieldDropdown.md#name)

#### Defined in

node_modules/blockly/blockly.d.ts:17689

---

### prefixField

> **prefixField**: `string`

The prefix field label, of common words set after options are trimmed.

#### Package

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`prefixField`](FieldDropdown.md#prefixfield)

#### Defined in

node_modules/blockly/blockly.d.ts:22991

---

### SERIALIZABLE

> **SERIALIZABLE**: `boolean`

Serializable fields are saved by the XML renderer, non-serializable fields
are not. Editable fields should also be serializable.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`SERIALIZABLE`](FieldDropdown.md#serializable)

#### Defined in

node_modules/blockly/blockly.d.ts:23774

---

### size\_

> `protected` **size\_**: [`Size`](../utils/classes/Size.md)

The size of the area rendered by the field.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`size_`](FieldDropdown.md#size_)

#### Defined in

node_modules/blockly/blockly.d.ts:23621

---

### sourceBlock\_

> **sourceBlock\_**: [`Block`](Block.md)

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`sourceBlock_`](FieldDropdown.md#sourceblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:17281

---

### suffixField

> **suffixField**: `string`

The suffix field label, of common words set after options are trimmed.

#### Package

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`suffixField`](FieldDropdown.md#suffixfield)

#### Defined in

node_modules/blockly/blockly.d.ts:22997

---

### textContent\_

> `protected` **textContent\_**: `Text`

The rendered field's text content element.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`textContent_`](FieldDropdown.md#textcontent_)

#### Defined in

node_modules/blockly/blockly.d.ts:17255

---

### textElement\_

> `protected` **textElement\_**: `SVGTextElement`

The rendered field's SVG text element.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`textElement_`](FieldDropdown.md#textelement_)

#### Defined in

node_modules/blockly/blockly.d.ts:17249

---

### validator\_

> `protected` **validator\_**: `Function`

Validation function called when user edits an editable field.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`validator_`](FieldDropdown.md#validator_)

#### Defined in

node_modules/blockly/blockly.d.ts:17204

---

### value\_

> `protected` **value\_**: `any`

A generic value possessed by the field.
Should generally be non-null, only null when the field is created.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`value_`](FieldDropdown.md#value_)

#### Defined in

node_modules/blockly/blockly.d.ts:17198

---

### variable\_

> **variable\_**: [`VariableModel`](VariableModel.md)

#### Defined in

node_modules/blockly/blockly.d.ts:23718

---

### variableTypes

> **variableTypes**: `string`[]

#### Defined in

node_modules/blockly/blockly.d.ts:23745

---

### visible\_

> **visible\_**: `any`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`visible_`](FieldDropdown.md#visible_)

#### Defined in

node_modules/blockly/blockly.d.ts:17437

## Methods

### applyColour()

> **applyColour**(): `void`

Updates the dropdown arrow to match the colour/style of the block.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`applyColour`](FieldDropdown.md#applycolour)

#### Defined in

node_modules/blockly/blockly.d.ts:23140

---

### bindEvents\_()

> `protected` **bindEvents\_**(): `void`

Bind events to the field. Can be overridden by subclasses if they need to do
custom input handling.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`bindEvents_`](FieldDropdown.md#bindevents_)

#### Defined in

node_modules/blockly/blockly.d.ts:17329

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

[`FieldDropdown`](FieldDropdown.md).[`configure_`](FieldDropdown.md#configure_)

#### Defined in

node_modules/blockly/blockly.d.ts:23627

---

### createBorderRect\_()

> `protected` **createBorderRect\_**(): `void`

Create a field border rect element. Not to be overridden by subclasses.
Instead modify the result of the function inside initView, or create a
separate function to call.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`createBorderRect_`](FieldDropdown.md#createborderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17316

---

### createSVGArrow\_()

> `protected` **createSVGArrow\_**(): `void`

Create an SVG based arrow.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`createSVGArrow_`](FieldDropdown.md#createsvgarrow_)

#### Defined in

node_modules/blockly/blockly.d.ts:23071

---

### createTextArrow\_()

> `protected` **createTextArrow\_**(): `void`

Create a tspan based arrow.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`createTextArrow_`](FieldDropdown.md#createtextarrow_)

#### Defined in

node_modules/blockly/blockly.d.ts:23066

---

### createTextElement\_()

> `protected` **createTextElement\_**(): `void`

Create a field text element. Not to be overridden by subclasses. Instead
modify the result of the function inside initView, or create a separate
function to call.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`createTextElement_`](FieldDropdown.md#createtextelement_)

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

[`FieldDropdown`](FieldDropdown.md).[`dispose`](FieldDropdown.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:17387

---

### doClassValidation\_()

> `protected` **doClassValidation\_**(`opt_newValue`?): `string`

Ensure that the ID belongs to a valid variable of an allowed type.

#### Parameters

##### opt_newValue?

`any`

The ID of the new variable to set.

#### Returns

`string`

The validated ID, or null if invalid.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`doClassValidation_`](FieldDropdown.md#doclassvalidation_)

#### Defined in

node_modules/blockly/blockly.d.ts:23708

---

### doValueInvalid\_()

> `protected` **doValueInvalid\_**(`_invalidValue`): `void`

Used to notify the field an invalid value was input. Can be overridden by
subclasses, see FieldTextInput.
No-op by default.

#### Parameters

##### \_invalidValue

`any`

The input value that was determined to be invalid.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`doValueInvalid_`](FieldDropdown.md#dovalueinvalid_)

#### Defined in

node_modules/blockly/blockly.d.ts:17591

---

### doValueUpdate\_()

> `protected` **doValueUpdate\_**(`newId`): `void`

Update the value of this variable field, as well as its variable and text.

The variable ID should be valid at this point, but if a variable field
validator returns a bad ID, this could break.

#### Parameters

##### newId

`any`

The value to be saved.

#### Returns

`void`

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`doValueUpdate_`](FieldDropdown.md#dovalueupdate_)

#### Defined in

node_modules/blockly/blockly.d.ts:23717

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

[`FieldDropdown`](FieldDropdown.md).[`forceRerender`](FieldDropdown.md#forcererender)

#### Defined in

node_modules/blockly/blockly.d.ts:17548

---

### fromXml()

> **fromXml**(`fieldElement`): `void`

Initialize this field based on the given XML.

#### Parameters

##### fieldElement

`Element`

The element containing information about the
variable field's state.

#### Returns

`void`

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`fromXml`](FieldDropdown.md#fromxml)

#### Defined in

node_modules/blockly/blockly.d.ts:23644

---

### getAbsoluteXY\_()

> `protected` **getAbsoluteXY\_**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the absolute coordinates of the top-left corner of this field.
The origin (0,0) is the top-left corner of the page body.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`getAbsoluteXY_`](FieldDropdown.md#getabsolutexy_)

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

[`FieldDropdown`](FieldDropdown.md).[`getClickTarget_`](FieldDropdown.md#getclicktarget_)

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

[`FieldDropdown`](FieldDropdown.md).[`getConstants`](FieldDropdown.md#getconstants)

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

[`FieldDropdown`](FieldDropdown.md).[`getDisplayText_`](FieldDropdown.md#getdisplaytext_)

#### Defined in

node_modules/blockly/blockly.d.ts:17527

---

### getFlipRtl()

> **getFlipRtl**(): `boolean`

Returns whether or not we should flip the field in RTL.

#### Returns

`boolean`

True if we should flip in RTL.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`getFlipRtl`](FieldDropdown.md#getfliprtl)

#### Defined in

node_modules/blockly/blockly.d.ts:17645

---

### getOptions()

> **getOptions**(`opt_useCache`?): `any`[][]

Return a list of the options for this dropdown.

#### Parameters

##### opt_useCache?

`boolean`

For dynamic options, whether or not to use the
cached options or to re-generate them.

#### Returns

`any`[][]

A non-empty array of option tuples:
(human-readable text or image, language-neutral name).

#### Throws

If generated options are incorrectly structured.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`getOptions`](FieldDropdown.md#getoptions)

#### Defined in

node_modules/blockly/blockly.d.ts:23121

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

[`FieldDropdown`](FieldDropdown.md).[`getParentInput`](FieldDropdown.md#getparentinput)

#### Defined in

node_modules/blockly/blockly.d.ts:17640

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

[`FieldDropdown`](FieldDropdown.md).[`getScaledBBox`](FieldDropdown.md#getscaledbbox)

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

[`FieldDropdown`](FieldDropdown.md).[`getSize`](FieldDropdown.md#getsize)

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

[`FieldDropdown`](FieldDropdown.md).[`getSourceBlock`](FieldDropdown.md#getsourceblock)

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

[`FieldDropdown`](FieldDropdown.md).[`getSvgRoot`](FieldDropdown.md#getsvgroot)

#### Defined in

node_modules/blockly/blockly.d.ts:17464

---

### getText()

> **getText**(): `string`

Get the text from this field, which is the selected variable's name.

#### Returns

`string`

The selected variable's name, or the empty string if no
variable is selected.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`getText`](FieldDropdown.md#gettext)

#### Defined in

node_modules/blockly/blockly.d.ts:23684

---

### getText\_()

> `protected` **getText\_**(): `string`

Use the `getText_` developer hook to override the field's text
representation. Get the selected option text. If the selected option is an
image we return the image alt text.

#### Returns

`string`

Selected option text.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`getText_`](FieldDropdown.md#gettext_)

#### Defined in

node_modules/blockly/blockly.d.ts:23174

---

### getTooltip()

> **getTooltip**(): `string`

Returns the tooltip text for this field.

#### Returns

`string`

The tooltip text for this field.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`getTooltip`](FieldDropdown.md#gettooltip)

#### Defined in

node_modules/blockly/blockly.d.ts:17610

---

### getValidator()

> **getValidator**(): `Function`

Gets the validation function for this field, or null if not set.
Returns null if the variable is not set, because validators should not
run on the initial setValue call, because the field won't be attached to
a block and workspace at that point.

#### Returns

`Function`

Validation function, or null.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`getValidator`](FieldDropdown.md#getvalidator)

#### Defined in

node_modules/blockly/blockly.d.ts:23701

---

### getValue()

> **getValue**(): `string`

Get the variable's ID.

#### Returns

`string`

Current variable's ID.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`getValue`](FieldDropdown.md#getvalue)

#### Defined in

node_modules/blockly/blockly.d.ts:23678

---

### getVariable()

> **getVariable**(): [`VariableModel`](VariableModel.md)

Get the variable model for the selected variable.
Not guaranteed to be in the variable map on the workspace (e.g. if accessed
after the variable has been deleted).

#### Returns

[`VariableModel`](VariableModel.md)

The selected variable, or null if none was
selected.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:23693

---

### init()

> **init**(): `void`

Initialize everything to render this field. Override
methods initModel and initView rather than this method.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`init`](FieldDropdown.md#init)

#### Defined in

node_modules/blockly/blockly.d.ts:17298

---

### initModel()

> **initModel**(): `void`

Initialize the model for this field if it has not already been initialized.
If the value has not been set to a variable by the first render, we make up a
variable rather than let the value be invalid.

#### Returns

`void`

#### Package

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`initModel`](FieldDropdown.md#initmodel)

#### Defined in

node_modules/blockly/blockly.d.ts:23634

---

### initView()

> **initView**(): `void`

Create the block UI for this dropdown.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`initView`](FieldDropdown.md#initview)

#### Defined in

node_modules/blockly/blockly.d.ts:23054

---

### isClickable()

> **isClickable**(): `boolean`

Check whether this field defines the showEditor\_ function.

#### Returns

`boolean`

Whether this field is clickable.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`isClickable`](FieldDropdown.md#isclickable)

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

[`FieldDropdown`](FieldDropdown.md).[`isCurrentlyEditable`](FieldDropdown.md#iscurrentlyeditable)

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

[`FieldDropdown`](FieldDropdown.md).[`isEnabled`](FieldDropdown.md#isenabled)

#### Defined in

node_modules/blockly/blockly.d.ts:17405

---

### isOptionListDynamic()

> **isOptionListDynamic**(): `boolean`

#### Returns

`boolean`

True if the option list is generated by a function.
Otherwise false.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`isOptionListDynamic`](FieldDropdown.md#isoptionlistdynamic)

#### Defined in

node_modules/blockly/blockly.d.ts:23112

---

### isSerializable()

> **isSerializable**(): `boolean`

Check whether this field should be serialized by the XML renderer.
Handles the logic for backwards compatibility and incongruous states.

#### Returns

`boolean`

Whether this field should be serialized or not.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`isSerializable`](FieldDropdown.md#isserializable)

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

[`FieldDropdown`](FieldDropdown.md).[`isTabNavigable`](FieldDropdown.md#istabnavigable)

#### Defined in

node_modules/blockly/blockly.d.ts:17650

---

### isVisible()

> **isVisible**(): `boolean`

Gets whether this editable field is visible or not.

#### Returns

`boolean`

True if visible.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`isVisible`](FieldDropdown.md#isvisible)

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

[`FieldDropdown`](FieldDropdown.md).[`loadLegacyState`](FieldDropdown.md#loadlegacystate)

#### Defined in

node_modules/blockly/blockly.d.ts:17382

---

### loadState()

> **loadState**(`state`): `void`

Sets the field's value based on the given state.

#### Parameters

##### state

`any`

The state of the variable to assign to this variable field.

#### Returns

`void`

#### Package

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`loadState`](FieldDropdown.md#loadstate)

#### Defined in

node_modules/blockly/blockly.d.ts:23668

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

[`FieldDropdown`](FieldDropdown.md).[`markDirty`](FieldDropdown.md#markdirty)

#### Defined in

node_modules/blockly/blockly.d.ts:17540

---

### onItemSelected\_()

> `protected` **onItemSelected\_**(`menu`, `menuItem`): `void`

Handle the selection of an item in the variable dropdown menu.
Special case the 'Rename variable...' and 'Delete variable...' options.
In the rename case, prompt the user for a new name.

#### Parameters

##### menu

[`Menu`](Menu.md)

The Menu component clicked.

##### menuItem

[`MenuItem`](MenuItem.md)

The MenuItem selected within menu.

#### Returns

`void`

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`onItemSelected_`](FieldDropdown.md#onitemselected_)

#### Defined in

node_modules/blockly/blockly.d.ts:23761

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

[`FieldDropdown`](FieldDropdown.md).[`onMouseDown_`](FieldDropdown.md#onmousedown_)

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

[`FieldDropdown`](FieldDropdown.md).[`onShortcut`](FieldDropdown.md#onshortcut)

#### Defined in

node_modules/blockly/blockly.d.ts:17658

---

### positionBorderRect\_()

> `protected` **positionBorderRect\_**(): `void`

Position a field's border rect after a size change.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`positionBorderRect_`](FieldDropdown.md#positionborderrect_)

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

[`FieldDropdown`](FieldDropdown.md).[`positionTextElement_`](FieldDropdown.md#positiontextelement_)

#### Defined in

node_modules/blockly/blockly.d.ts:17499

---

### referencesVariables()

> **referencesVariables**(): `boolean`

Overrides referencesVariables(), indicating this field refers to a variable.

#### Returns

`boolean`

True.

#### Package

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`referencesVariables`](FieldDropdown.md#referencesvariables)

#### Defined in

node_modules/blockly/blockly.d.ts:23768

---

### refreshVariableName()

> **refreshVariableName**(): `void`

Refreshes the name of the variable by grabbing the name of the model.
Used when a variable gets renamed, but the ID stays the same. Should only
be called by the block.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:23752

---

### render\_()

> `protected` **render\_**(): `void`

Draws the border with the correct width.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`render_`](FieldDropdown.md#render_)

#### Defined in

node_modules/blockly/blockly.d.ts:23145

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

[`FieldDropdown`](FieldDropdown.md).[`saveLegacyState`](FieldDropdown.md#savelegacystate)

#### Defined in

node_modules/blockly/blockly.d.ts:17373

---

### saveState()

> **saveState**(`doFullSerialization`?): `any`

Saves this field's value.

#### Parameters

##### doFullSerialization?

`boolean`

If true, the variable field will
serialize the full state of the field being referenced (ie ID, name,
and type) rather than just a reference to it (ie ID).

#### Returns

`any`

The state of the variable field.

#### Package

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`saveState`](FieldDropdown.md#savestate)

#### Defined in

node_modules/blockly/blockly.d.ts:23661

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

[`FieldDropdown`](FieldDropdown.md).[`setCursorSvg`](FieldDropdown.md#setcursorsvg)

#### Defined in

node_modules/blockly/blockly.d.ts:17665

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

[`FieldDropdown`](FieldDropdown.md).[`setEnabled`](FieldDropdown.md#setenabled)

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

[`FieldDropdown`](FieldDropdown.md).[`setMarkerSvg`](FieldDropdown.md#setmarkersvg)

#### Defined in

node_modules/blockly/blockly.d.ts:17672

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

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`setSourceBlock`](FieldDropdown.md#setsourceblock)

#### Defined in

node_modules/blockly/blockly.d.ts:23673

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

[`FieldDropdown`](FieldDropdown.md).[`setTooltip`](FieldDropdown.md#settooltip)

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

[`FieldDropdown`](FieldDropdown.md).[`setValidator`](FieldDropdown.md#setvalidator)

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

[`FieldDropdown`](FieldDropdown.md).[`setValue`](FieldDropdown.md#setvalue)

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

[`FieldDropdown`](FieldDropdown.md).[`setVisible`](FieldDropdown.md#setvisible)

#### Defined in

node_modules/blockly/blockly.d.ts:17436

---

### shouldAddBorderRect\_()

> **shouldAddBorderRect\_**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`shouldAddBorderRect_`](FieldDropdown.md#shouldaddborderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:23638

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

[`FieldDropdown`](FieldDropdown.md).[`showEditor`](FieldDropdown.md#showeditor)

#### Defined in

node_modules/blockly/blockly.d.ts:17485

---

### showEditor\_()

> `protected` **showEditor\_**(`opt_e`?): `void`

Create a dropdown menu under the text.

#### Parameters

##### opt_e?

`Event`

Optional mouse event that triggered the field to open,
or undefined if triggered programmatically.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`showEditor_`](FieldDropdown.md#showeditor_)

#### Defined in

node_modules/blockly/blockly.d.ts:23078

---

### toXml()

> **toXml**(`fieldElement`): `Element`

Serialize this field to XML.

#### Parameters

##### fieldElement

`Element`

The element to populate with info about the
field's state.

#### Returns

`Element`

The element containing info about the field's state.

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`toXml`](FieldDropdown.md#toxml)

#### Defined in

node_modules/blockly/blockly.d.ts:23651

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove the UI indicating if this field is editable or not.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`updateEditable`](FieldDropdown.md#updateeditable)

#### Defined in

node_modules/blockly/blockly.d.ts:17392

---

### updateMarkers\_()

> `protected` **updateMarkers\_**(): `void`

Redraw any attached marker or cursor svgs if needed.

#### Returns

`void`

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`updateMarkers_`](FieldDropdown.md#updatemarkers_)

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

[`FieldDropdown`](FieldDropdown.md).[`updateSize_`](FieldDropdown.md#updatesize_)

#### Defined in

node_modules/blockly/blockly.d.ts:17491

---

### applyTrim\_()

> `static` **applyTrim\_**(`options`, `prefixLength`, `suffixLength`): `any`[][]

Use the calculated prefix and suffix lengths to trim all of the options in
the given array.

#### Parameters

##### options

`any`[][]

Array of option tuples:
(human-readable text or image, language-neutral name).

##### prefixLength

`number`

The length of the common prefix.

##### suffixLength

`number`

The length of the common suffix

#### Returns

`any`[][]

A new array with all of the option text trimmed.

#### Inherited from

[`FieldDropdown`](FieldDropdown.md).[`applyTrim_`](FieldDropdown.md#applytrim_)

#### Defined in

node_modules/blockly/blockly.d.ts:22953

---

### dropdownCreate()

> `static` **dropdownCreate**(): `any`[][]

Return a sorted list of variable names for variable dropdown menus.
Include a special option at the end for creating a new variable name.

#### Returns

`any`[][]

Array of variable names/id tuples.

#### Defined in

node_modules/blockly/blockly.d.ts:23579

---

### fromJson()

> `static` **fromJson**(`options`): [`FieldVariable`](FieldVariable.md)

Construct a FieldVariable from a JSON arg object,
dereferencing any string table references.

#### Parameters

##### options

`any`

A JSON object with options (variable,
variableTypes, and defaultType).

#### Returns

[`FieldVariable`](FieldVariable.md)

The new field instance.

#### Package

#### Nocollapse

#### Overrides

[`FieldDropdown`](FieldDropdown.md).[`fromJson`](FieldDropdown.md#fromjson)

#### Defined in

node_modules/blockly/blockly.d.ts:23572
