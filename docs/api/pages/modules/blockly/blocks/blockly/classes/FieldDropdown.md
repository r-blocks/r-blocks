# Class: FieldDropdown

## Extends

- [`Field`](Field.md)

## Extended by

- [`FieldVariable`](FieldVariable.md)

## Constructors

### new FieldDropdown()

> **new FieldDropdown**(`menuGenerator`, `opt_validator`?, `opt_config`?): [`FieldDropdown`](FieldDropdown.md)

Class for an editable dropdown field.

#### Parameters

##### menuGenerator

A non-empty array of
options for a dropdown list, or a function which generates these options.

`Function` | `any`[][]

##### opt_validator?

`Function`

A function that is called to validate
changes to the field's value. Takes in a language-neutral dropdown
option & returns a validated language-neutral dropdown option, or null to
abort the change.

##### opt_config?

`any`

A map of options used to configure the field.
See the [field creation documentation][https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown#creation](https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown#creation)
for a list of properties this parameter supports.

#### Returns

[`FieldDropdown`](FieldDropdown.md)

#### Throws

If `menuGenerator` options are incorrectly structured.

#### Alias

Blockly.FieldDropdown

#### Overrides

[`Field`](Field.md).[`constructor`](Field.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:22971

## Properties

### borderRect\_

> `protected` **borderRect\_**: `SVGRectElement`

The rendered field's SVG border element.

#### Inherited from

[`Field`](Field.md).[`borderRect_`](Field.md#borderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17243

---

### clickTarget\_

> `protected` **clickTarget\_**: `any`

The element the click handler is bound to.

#### Overrides

[`Field`](Field.md).[`clickTarget_`](Field.md#clicktarget_)

#### Defined in

node_modules/blockly/blockly.d.ts:23055

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

Constants associated with the source block's renderer.

#### Inherited from

[`Field`](Field.md).[`constants_`](Field.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:17267

---

### CURSOR

> **CURSOR**: `string`

Mouse cursor style when over the hotspot that initiates the editor.

#### Defined in

node_modules/blockly/blockly.d.ts:23184

---

### DEFAULT_VALUE

> `protected` **DEFAULT_VALUE**: `any`

The default value for this field.

#### Inherited from

[`Field`](Field.md).[`DEFAULT_VALUE`](Field.md#default_value)

#### Defined in

node_modules/blockly/blockly.d.ts:17683

---

### disposed

> **disposed**: `boolean`

#### Inherited from

[`Field`](Field.md).[`disposed`](Field.md#disposed)

#### Defined in

node_modules/blockly/blockly.d.ts:17388

---

### EDITABLE

> **EDITABLE**: `boolean`

Editable fields usually show some sort of UI indicating they are editable.
They will also be saved by the XML renderer.

#### Inherited from

[`Field`](Field.md).[`EDITABLE`](Field.md#editable)

#### Defined in

node_modules/blockly/blockly.d.ts:17706

---

### enabled\_

> **enabled\_**: `boolean`

#### Inherited from

[`Field`](Field.md).[`enabled_`](Field.md#enabled_)

#### Defined in

node_modules/blockly/blockly.d.ts:17399

---

### fieldGroup\_

> `protected` **fieldGroup\_**: `SVGGElement`

The rendered field's SVG group element.

#### Inherited from

[`Field`](Field.md).[`fieldGroup_`](Field.md#fieldgroup_)

#### Defined in

node_modules/blockly/blockly.d.ts:17237

---

### isDirty\_

> **isDirty\_**: `boolean`

#### Inherited from

[`Field`](Field.md).[`isDirty_`](Field.md#isdirty_)

#### Defined in

node_modules/blockly/blockly.d.ts:17512

---

### maxDisplayLength

> **maxDisplayLength**: `number`

Maximum characters of text to display before adding an ellipsis.

#### Inherited from

[`Field`](Field.md).[`maxDisplayLength`](Field.md#maxdisplaylength)

#### Defined in

node_modules/blockly/blockly.d.ts:17694

---

### menu\_

> `protected` **menu\_**: [`Menu`](Menu.md)

The dropdown menu.

#### Defined in

node_modules/blockly/blockly.d.ts:23016

---

### menuGenerator\_

> `protected` **menuGenerator\_**: `any`[][] \| (`this`) => `any`[][]

An array of options for a dropdown list,
or a function which generates these options.

#### Defined in

node_modules/blockly/blockly.d.ts:22979

---

### name

> **name**: `string`

Name of field. Unique within each block.
Static labels are usually unnamed.

#### Inherited from

[`Field`](Field.md).[`name`](Field.md#name)

#### Defined in

node_modules/blockly/blockly.d.ts:17689

---

### prefixField

> **prefixField**: `string`

The prefix field label, of common words set after options are trimmed.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:22991

---

### SERIALIZABLE

> **SERIALIZABLE**: `boolean`

Serializable fields are saved by the XML renderer, non-serializable fields
are not. Editable fields should also be serializable.

#### Overrides

[`Field`](Field.md).[`SERIALIZABLE`](Field.md#serializable)

#### Defined in

node_modules/blockly/blockly.d.ts:23180

---

### size\_

> `protected` **size\_**: [`Size`](../utils/classes/Size.md)

The size of the area rendered by the field.

#### Inherited from

[`Field`](Field.md).[`size_`](Field.md#size_)

#### Defined in

node_modules/blockly/blockly.d.ts:17217

---

### sourceBlock\_

> **sourceBlock\_**: [`Block`](Block.md)

#### Inherited from

[`Field`](Field.md).[`sourceBlock_`](Field.md#sourceblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:17281

---

### suffixField

> **suffixField**: `string`

The suffix field label, of common words set after options are trimmed.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:22997

---

### textContent\_

> `protected` **textContent\_**: `Text`

The rendered field's text content element.

#### Inherited from

[`Field`](Field.md).[`textContent_`](Field.md#textcontent_)

#### Defined in

node_modules/blockly/blockly.d.ts:17255

---

### textElement\_

> `protected` **textElement\_**: `SVGTextElement`

The rendered field's SVG text element.

#### Inherited from

[`Field`](Field.md).[`textElement_`](Field.md#textelement_)

#### Defined in

node_modules/blockly/blockly.d.ts:17249

---

### validator\_

> `protected` **validator\_**: `Function`

Validation function called when user edits an editable field.

#### Inherited from

[`Field`](Field.md).[`validator_`](Field.md#validator_)

#### Defined in

node_modules/blockly/blockly.d.ts:17204

---

### value\_

> `protected` **value\_**: `any`

A generic value possessed by the field.
Should generally be non-null, only null when the field is created.

#### Inherited from

[`Field`](Field.md).[`value_`](Field.md#value_)

#### Defined in

node_modules/blockly/blockly.d.ts:17198

---

### visible\_

> **visible\_**: `any`

#### Inherited from

[`Field`](Field.md).[`visible_`](Field.md#visible_)

#### Defined in

node_modules/blockly/blockly.d.ts:17437

## Methods

### applyColour()

> **applyColour**(): `void`

Updates the dropdown arrow to match the colour/style of the block.

#### Returns

`void`

#### Package

#### Overrides

[`Field`](Field.md).[`applyColour`](Field.md#applycolour)

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

[`Field`](Field.md).[`bindEvents_`](Field.md#bindevents_)

#### Defined in

node_modules/blockly/blockly.d.ts:17329

---

### configure\_()

> `protected` **configure\_**(`config`): `void`

Process the configuration map passed to the field.

#### Parameters

##### config

`any`

A map of options used to configure the field. See
the individual field's documentation for a list of properties this
parameter supports.

#### Returns

`void`

#### Inherited from

[`Field`](Field.md).[`configure_`](Field.md#configure_)

#### Defined in

node_modules/blockly/blockly.d.ts:17275

---

### createBorderRect\_()

> `protected` **createBorderRect\_**(): `void`

Create a field border rect element. Not to be overridden by subclasses.
Instead modify the result of the function inside initView, or create a
separate function to call.

#### Returns

`void`

#### Inherited from

[`Field`](Field.md).[`createBorderRect_`](Field.md#createborderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17316

---

### createSVGArrow\_()

> `protected` **createSVGArrow\_**(): `void`

Create an SVG based arrow.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23071

---

### createTextArrow\_()

> `protected` **createTextArrow\_**(): `void`

Create a tspan based arrow.

#### Returns

`void`

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

[`Field`](Field.md).[`createTextElement_`](Field.md#createtextelement_)

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

[`Field`](Field.md).[`dispose`](Field.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:17387

---

### doClassValidation\_()

> `protected` **doClassValidation\_**(`opt_newValue`?): `string`

Ensure that the input value is a valid language-neutral option.

#### Parameters

##### opt_newValue?

`any`

The input value.

#### Returns

`string`

A valid language-neutral option, or null if invalid.

#### Overrides

[`Field`](Field.md).[`doClassValidation_`](Field.md#doclassvalidation_)

#### Defined in

node_modules/blockly/blockly.d.ts:23128

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

[`Field`](Field.md).[`doValueInvalid_`](Field.md#dovalueinvalid_)

#### Defined in

node_modules/blockly/blockly.d.ts:17591

---

### doValueUpdate\_()

> `protected` **doValueUpdate\_**(`newValue`): `void`

Update the value of this dropdown field.

#### Parameters

##### newValue

`any`

The value to be saved. The default validator guarantees
that this is one of the valid dropdown options.

#### Returns

`void`

#### Overrides

[`Field`](Field.md).[`doValueUpdate_`](Field.md#dovalueupdate_)

#### Defined in

node_modules/blockly/blockly.d.ts:23135

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

[`Field`](Field.md).[`forceRerender`](Field.md#forcererender)

#### Defined in

node_modules/blockly/blockly.d.ts:17548

---

### fromXml()

> **fromXml**(`fieldElement`): `void`

Sets the field's value based on the given XML element. Should only be
called by Blockly.Xml.

#### Parameters

##### fieldElement

`Element`

The element containing info about the
field's state.

#### Returns

`void`

#### Package

#### Overrides

[`Field`](Field.md).[`fromXml`](Field.md#fromxml)

#### Defined in

node_modules/blockly/blockly.d.ts:23042

---

### getAbsoluteXY\_()

> `protected` **getAbsoluteXY\_**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the absolute coordinates of the top-left corner of this field.
The origin (0,0) is the top-left corner of the page body.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties.

#### Inherited from

[`Field`](Field.md).[`getAbsoluteXY_`](Field.md#getabsolutexy_)

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

[`Field`](Field.md).[`getClickTarget_`](Field.md#getclicktarget_)

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

[`Field`](Field.md).[`getConstants`](Field.md#getconstants)

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

[`Field`](Field.md).[`getDisplayText_`](Field.md#getdisplaytext_)

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

[`Field`](Field.md).[`getFlipRtl`](Field.md#getfliprtl)

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

[`Field`](Field.md).[`getParentInput`](Field.md#getparentinput)

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

[`Field`](Field.md).[`getScaledBBox`](Field.md#getscaledbbox)

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

[`Field`](Field.md).[`getSize`](Field.md#getsize)

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

[`Field`](Field.md).[`getSourceBlock`](Field.md#getsourceblock)

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

[`Field`](Field.md).[`getSvgRoot`](Field.md#getsvgroot)

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

[`Field`](Field.md).[`getText`](Field.md#gettext)

#### Defined in

node_modules/blockly/blockly.d.ts:17532

---

### getText\_()

> `protected` **getText\_**(): `string`

Use the `getText_` developer hook to override the field's text
representation. Get the selected option text. If the selected option is an
image we return the image alt text.

#### Returns

`string`

Selected option text.

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

[`Field`](Field.md).[`getTooltip`](Field.md#gettooltip)

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

[`Field`](Field.md).[`getValidator`](Field.md#getvalidator)

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

[`Field`](Field.md).[`getValue`](Field.md#getvalue)

#### Defined in

node_modules/blockly/blockly.d.ts:17568

---

### init()

> **init**(): `void`

Initialize everything to render this field. Override
methods initModel and initView rather than this method.

#### Returns

`void`

#### Package

#### Inherited from

[`Field`](Field.md).[`init`](Field.md#init)

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

[`Field`](Field.md).[`initModel`](Field.md#initmodel)

#### Defined in

node_modules/blockly/blockly.d.ts:17309

---

### initView()

> **initView**(): `void`

Create the block UI for this dropdown.

#### Returns

`void`

#### Package

#### Overrides

[`Field`](Field.md).[`initView`](Field.md#initview)

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

[`Field`](Field.md).[`isClickable`](Field.md#isclickable)

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

[`Field`](Field.md).[`isCurrentlyEditable`](Field.md#iscurrentlyeditable)

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

[`Field`](Field.md).[`isEnabled`](Field.md#isenabled)

#### Defined in

node_modules/blockly/blockly.d.ts:17405

---

### isOptionListDynamic()

> **isOptionListDynamic**(): `boolean`

#### Returns

`boolean`

True if the option list is generated by a function.
Otherwise false.

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

[`Field`](Field.md).[`isSerializable`](Field.md#isserializable)

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

[`Field`](Field.md).[`isTabNavigable`](Field.md#istabnavigable)

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

[`Field`](Field.md).[`isVisible`](Field.md#isvisible)

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

[`Field`](Field.md).[`loadLegacyState`](Field.md#loadlegacystate)

#### Defined in

node_modules/blockly/blockly.d.ts:17382

---

### loadState()

> **loadState**(`state`): `void`

Sets the field's value based on the given state.

#### Parameters

##### state

`any`

The state to apply to the dropdown field.

#### Returns

`void`

#### Package

#### Overrides

[`Field`](Field.md).[`loadState`](Field.md#loadstate)

#### Defined in

node_modules/blockly/blockly.d.ts:23049

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

[`Field`](Field.md).[`markDirty`](Field.md#markdirty)

#### Defined in

node_modules/blockly/blockly.d.ts:17540

---

### onItemSelected\_()

> `protected` **onItemSelected\_**(`menu`, `menuItem`): `void`

Handle the selection of an item in the dropdown menu.

#### Parameters

##### menu

[`Menu`](Menu.md)

The Menu component clicked.

##### menuItem

[`MenuItem`](MenuItem.md)

The MenuItem selected within menu.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:23101

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

[`Field`](Field.md).[`onMouseDown_`](Field.md#onmousedown_)

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

[`Field`](Field.md).[`onShortcut`](Field.md#onshortcut)

#### Defined in

node_modules/blockly/blockly.d.ts:17658

---

### positionBorderRect\_()

> `protected` **positionBorderRect\_**(): `void`

Position a field's border rect after a size change.

#### Returns

`void`

#### Inherited from

[`Field`](Field.md).[`positionBorderRect_`](Field.md#positionborderrect_)

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

[`Field`](Field.md).[`positionTextElement_`](Field.md#positiontextelement_)

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

[`Field`](Field.md).[`referencesVariables`](Field.md#referencesvariables)

#### Defined in

node_modules/blockly/blockly.d.ts:17633

---

### render\_()

> `protected` **render\_**(): `void`

Draws the border with the correct width.

#### Returns

`void`

#### Overrides

[`Field`](Field.md).[`render_`](Field.md#render_)

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

[`Field`](Field.md).[`saveLegacyState`](Field.md#savelegacystate)

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

[`Field`](Field.md).[`saveState`](Field.md#savestate)

#### Defined in

node_modules/blockly/blockly.d.ts:17356

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

[`Field`](Field.md).[`setCursorSvg`](Field.md#setcursorsvg)

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

[`Field`](Field.md).[`setEnabled`](Field.md#setenabled)

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

[`Field`](Field.md).[`setMarkerSvg`](Field.md#setmarkersvg)

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

#### Inherited from

[`Field`](Field.md).[`setSourceBlock`](Field.md#setsourceblock)

#### Defined in

node_modules/blockly/blockly.d.ts:17280

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

[`Field`](Field.md).[`setTooltip`](Field.md#settooltip)

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

[`Field`](Field.md).[`setValidator`](Field.md#setvalidator)

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

[`Field`](Field.md).[`setValue`](Field.md#setvalue)

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

[`Field`](Field.md).[`setVisible`](Field.md#setvisible)

#### Defined in

node_modules/blockly/blockly.d.ts:17436

---

### shouldAddBorderRect\_()

> `protected` **shouldAddBorderRect\_**(): `boolean`

Whether or not the dropdown should add a border rect.

#### Returns

`boolean`

True if the dropdown field should add a border rect.

#### Defined in

node_modules/blockly/blockly.d.ts:23061

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

[`Field`](Field.md).[`showEditor`](Field.md#showeditor)

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

#### Defined in

node_modules/blockly/blockly.d.ts:23078

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

[`Field`](Field.md).[`toXml`](Field.md#toxml)

#### Defined in

node_modules/blockly/blockly.d.ts:17345

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove the UI indicating if this field is editable or not.

#### Returns

`void`

#### Inherited from

[`Field`](Field.md).[`updateEditable`](Field.md#updateeditable)

#### Defined in

node_modules/blockly/blockly.d.ts:17392

---

### updateMarkers\_()

> `protected` **updateMarkers\_**(): `void`

Redraw any attached marker or cursor svgs if needed.

#### Returns

`void`

#### Inherited from

[`Field`](Field.md).[`updateMarkers_`](Field.md#updatemarkers_)

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

[`Field`](Field.md).[`updateSize_`](Field.md#updatesize_)

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

#### Defined in

node_modules/blockly/blockly.d.ts:22953

---

### fromJson()

> `static` **fromJson**(`options`): [`FieldDropdown`](FieldDropdown.md)

Construct a FieldDropdown from a JSON arg object.

#### Parameters

##### options

`any`

A JSON object with options (options).

#### Returns

[`FieldDropdown`](FieldDropdown.md)

The new field instance.

#### Package

#### Nocollapse

#### Defined in

node_modules/blockly/blockly.d.ts:22943
