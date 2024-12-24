# Class: FieldLabelSerializable

Class for a non-editable, serializable text field.

## Param

The initial value of the field. Should cast to a
string. Defaults to an empty string if null or undefined.

## Param

Optional CSS class for the field's text.

## Param

A map of options used to configure the field.
See the [field creation documentation][https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/label-serializable#creation](https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/label-serializable#creation)
for a list of properties this parameter supports.

## Alias

Blockly.FieldLabelSerializable

## Extends

- [`FieldLabel`](FieldLabel.md)

## Constructors

### new FieldLabelSerializable()

> **new FieldLabelSerializable**(`opt_value`, `opt_class`, `opt_config`): [`FieldLabelSerializable`](FieldLabelSerializable.md)

#### Parameters

##### opt_value

`any`

##### opt_class

`any`

##### opt_config

`any`

#### Returns

[`FieldLabelSerializable`](FieldLabelSerializable.md)

#### Overrides

[`FieldLabel`](FieldLabel.md).[`constructor`](FieldLabel.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:23229

## Properties

### borderRect\_

> `protected` **borderRect\_**: `SVGRectElement`

The rendered field's SVG border element.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`borderRect_`](FieldLabel.md#borderrect_)

#### Defined in

node_modules/blockly/blockly.d.ts:17243

---

### clickTarget\_

> `protected` **clickTarget\_**: `Element`

The element the click handler is bound to.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`clickTarget_`](FieldLabel.md#clicktarget_)

#### Defined in

node_modules/blockly/blockly.d.ts:17700

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

Constants associated with the source block's renderer.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`constants_`](FieldLabel.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:17267

---

### DEFAULT_VALUE

> `protected` **DEFAULT_VALUE**: `any`

The default value for this field.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`DEFAULT_VALUE`](FieldLabel.md#default_value)

#### Defined in

node_modules/blockly/blockly.d.ts:6243

---

### disposed

> **disposed**: `boolean`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`disposed`](FieldLabel.md#disposed)

#### Defined in

node_modules/blockly/blockly.d.ts:17388

---

### EDITABLE

> **EDITABLE**: `boolean`

Editable fields usually show some sort of UI indicating they are
editable. This field should not.

#### Overrides

[`FieldLabel`](FieldLabel.md).[`EDITABLE`](FieldLabel.md#editable)

#### Defined in

node_modules/blockly/blockly.d.ts:23235

---

### enabled\_

> **enabled\_**: `boolean`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`enabled_`](FieldLabel.md#enabled_)

#### Defined in

node_modules/blockly/blockly.d.ts:17399

---

### fieldGroup\_

> `protected` **fieldGroup\_**: `SVGGElement`

The rendered field's SVG group element.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`fieldGroup_`](FieldLabel.md#fieldgroup_)

#### Defined in

node_modules/blockly/blockly.d.ts:17237

---

### isDirty\_

> **isDirty\_**: `boolean`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`isDirty_`](FieldLabel.md#isdirty_)

#### Defined in

node_modules/blockly/blockly.d.ts:17512

---

### maxDisplayLength

> **maxDisplayLength**: `number`

Maximum characters of text to display before adding an ellipsis.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`maxDisplayLength`](FieldLabel.md#maxdisplaylength)

#### Defined in

node_modules/blockly/blockly.d.ts:17694

---

### name

> **name**: `string`

Name of field. Unique within each block.
Static labels are usually unnamed.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`name`](FieldLabel.md#name)

#### Defined in

node_modules/blockly/blockly.d.ts:17689

---

### SERIALIZABLE

> **SERIALIZABLE**: `boolean`

Serializable fields are saved by the XML renderer, non-serializable fields
are not. This field should be serialized, but only edited programmatically.

#### Overrides

[`FieldLabel`](FieldLabel.md).[`SERIALIZABLE`](FieldLabel.md#serializable)

#### Defined in

node_modules/blockly/blockly.d.ts:23241

---

### size\_

> `protected` **size\_**: [`Size`](../utils/classes/Size.md)

The size of the area rendered by the field.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`size_`](FieldLabel.md#size_)

#### Defined in

node_modules/blockly/blockly.d.ts:17217

---

### sourceBlock\_

> **sourceBlock\_**: [`Block`](Block.md)

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`sourceBlock_`](FieldLabel.md#sourceblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:17281

---

### textContent\_

> `protected` **textContent\_**: `Text`

The rendered field's text content element.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`textContent_`](FieldLabel.md#textcontent_)

#### Defined in

node_modules/blockly/blockly.d.ts:17255

---

### textElement\_

> `protected` **textElement\_**: `SVGTextElement`

The rendered field's SVG text element.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`textElement_`](FieldLabel.md#textelement_)

#### Defined in

node_modules/blockly/blockly.d.ts:17249

---

### validator\_

> `protected` **validator\_**: `Function`

Validation function called when user edits an editable field.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`validator_`](FieldLabel.md#validator_)

#### Defined in

node_modules/blockly/blockly.d.ts:17204

---

### value\_

> `protected` **value\_**: `any`

A generic value possessed by the field.
Should generally be non-null, only null when the field is created.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`value_`](FieldLabel.md#value_)

#### Defined in

node_modules/blockly/blockly.d.ts:17198

---

### visible\_

> **visible\_**: `any`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`visible_`](FieldLabel.md#visible_)

#### Defined in

node_modules/blockly/blockly.d.ts:17437

## Methods

### applyColour()

> **applyColour**(): `void`

Updates the field to match the colour/style of the block. Should only be
called by BlockSvg.applyColour().

#### Returns

`void`

#### Package

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`applyColour`](FieldLabel.md#applycolour)

#### Defined in

node_modules/blockly/blockly.d.ts:17470

---

### bindEvents\_()

> `protected` **bindEvents\_**(): `void`

Bind events to the field. Can be overridden by subclasses if they need to do
custom input handling.

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`bindEvents_`](FieldLabel.md#bindevents_)

#### Defined in

node_modules/blockly/blockly.d.ts:17329

---

### configure\_()

> **configure\_**(`config`): `void`

#### Parameters

##### config

`any`

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`configure_`](FieldLabel.md#configure_)

#### Defined in

node_modules/blockly/blockly.d.ts:6220

---

### createBorderRect\_()

> `protected` **createBorderRect\_**(): `void`

Create a field border rect element. Not to be overridden by subclasses.
Instead modify the result of the function inside initView, or create a
separate function to call.

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`createBorderRect_`](FieldLabel.md#createborderrect_)

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

[`FieldLabel`](FieldLabel.md).[`createTextElement_`](FieldLabel.md#createtextelement_)

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

[`FieldLabel`](FieldLabel.md).[`dispose`](FieldLabel.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:17387

---

### doClassValidation\_()

> `protected` **doClassValidation\_**(`opt_newValue`?): `string`

Ensure that the input value casts to a valid string.

#### Parameters

##### opt_newValue?

`any`

The input value.

#### Returns

`string`

A valid string, or null if invalid.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`doClassValidation_`](FieldLabel.md#doclassvalidation_)

#### Defined in

node_modules/blockly/blockly.d.ts:6232

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

[`FieldLabel`](FieldLabel.md).[`doValueInvalid_`](FieldLabel.md#dovalueinvalid_)

#### Defined in

node_modules/blockly/blockly.d.ts:17591

---

### doValueUpdate\_()

> `protected` **doValueUpdate\_**(`newValue`): `void`

Used to update the value of a field. Can be overridden by subclasses to do
custom storage of values/updating of external things.

#### Parameters

##### newValue

`any`

The value to be saved.

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`doValueUpdate_`](FieldLabel.md#dovalueupdate_)

#### Defined in

node_modules/blockly/blockly.d.ts:17583

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

[`FieldLabel`](FieldLabel.md).[`forceRerender`](FieldLabel.md#forcererender)

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

[`FieldLabel`](FieldLabel.md).[`fromXml`](FieldLabel.md#fromxml)

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

[`FieldLabel`](FieldLabel.md).[`getAbsoluteXY_`](FieldLabel.md#getabsolutexy_)

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

[`FieldLabel`](FieldLabel.md).[`getClickTarget_`](FieldLabel.md#getclicktarget_)

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

[`FieldLabel`](FieldLabel.md).[`getConstants`](FieldLabel.md#getconstants)

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

[`FieldLabel`](FieldLabel.md).[`getDisplayText_`](FieldLabel.md#getdisplaytext_)

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

[`FieldLabel`](FieldLabel.md).[`getFlipRtl`](FieldLabel.md#getfliprtl)

#### Defined in

node_modules/blockly/blockly.d.ts:17645

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

[`FieldLabel`](FieldLabel.md).[`getParentInput`](FieldLabel.md#getparentinput)

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

[`FieldLabel`](FieldLabel.md).[`getScaledBBox`](FieldLabel.md#getscaledbbox)

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

[`FieldLabel`](FieldLabel.md).[`getSize`](FieldLabel.md#getsize)

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

[`FieldLabel`](FieldLabel.md).[`getSourceBlock`](FieldLabel.md#getsourceblock)

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

[`FieldLabel`](FieldLabel.md).[`getSvgRoot`](FieldLabel.md#getsvgroot)

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

[`FieldLabel`](FieldLabel.md).[`getText`](FieldLabel.md#gettext)

#### Defined in

node_modules/blockly/blockly.d.ts:17532

---

### getTooltip()

> **getTooltip**(): `string`

Returns the tooltip text for this field.

#### Returns

`string`

The tooltip text for this field.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`getTooltip`](FieldLabel.md#gettooltip)

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

[`FieldLabel`](FieldLabel.md).[`getValidator`](FieldLabel.md#getvalidator)

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

[`FieldLabel`](FieldLabel.md).[`getValue`](FieldLabel.md#getvalue)

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

[`FieldLabel`](FieldLabel.md).[`init`](FieldLabel.md#init)

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

[`FieldLabel`](FieldLabel.md).[`initModel`](FieldLabel.md#initmodel)

#### Defined in

node_modules/blockly/blockly.d.ts:17309

---

### initView()

> **initView**(): `void`

Create block UI for this label.

#### Returns

`void`

#### Package

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`initView`](FieldLabel.md#initview)

#### Defined in

node_modules/blockly/blockly.d.ts:6225

---

### isClickable()

> **isClickable**(): `boolean`

Check whether this field defines the showEditor\_ function.

#### Returns

`boolean`

Whether this field is clickable.

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`isClickable`](FieldLabel.md#isclickable)

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

[`FieldLabel`](FieldLabel.md).[`isCurrentlyEditable`](FieldLabel.md#iscurrentlyeditable)

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

[`FieldLabel`](FieldLabel.md).[`isEnabled`](FieldLabel.md#isenabled)

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

[`FieldLabel`](FieldLabel.md).[`isSerializable`](FieldLabel.md#isserializable)

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

[`FieldLabel`](FieldLabel.md).[`isTabNavigable`](FieldLabel.md#istabnavigable)

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

[`FieldLabel`](FieldLabel.md).[`isVisible`](FieldLabel.md#isvisible)

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

[`FieldLabel`](FieldLabel.md).[`loadLegacyState`](FieldLabel.md#loadlegacystate)

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

[`FieldLabel`](FieldLabel.md).[`loadState`](FieldLabel.md#loadstate)

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

[`FieldLabel`](FieldLabel.md).[`markDirty`](FieldLabel.md#markdirty)

#### Defined in

node_modules/blockly/blockly.d.ts:17540

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

[`FieldLabel`](FieldLabel.md).[`onMouseDown_`](FieldLabel.md#onmousedown_)

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

[`FieldLabel`](FieldLabel.md).[`onShortcut`](FieldLabel.md#onshortcut)

#### Defined in

node_modules/blockly/blockly.d.ts:17658

---

### positionBorderRect\_()

> `protected` **positionBorderRect\_**(): `void`

Position a field's border rect after a size change.

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`positionBorderRect_`](FieldLabel.md#positionborderrect_)

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

[`FieldLabel`](FieldLabel.md).[`positionTextElement_`](FieldLabel.md#positiontextelement_)

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

[`FieldLabel`](FieldLabel.md).[`referencesVariables`](FieldLabel.md#referencesvariables)

#### Defined in

node_modules/blockly/blockly.d.ts:17633

---

### render\_()

> `protected` **render\_**(): `void`

Used by getSize() to move/resize any DOM elements, and get the new size.

All rendering that has an effect on the size/shape of the block should be
done here, and should be triggered by getSize().

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`render_`](FieldLabel.md#render_)

#### Defined in

node_modules/blockly/blockly.d.ts:17478

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

[`FieldLabel`](FieldLabel.md).[`saveLegacyState`](FieldLabel.md#savelegacystate)

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

[`FieldLabel`](FieldLabel.md).[`saveState`](FieldLabel.md#savestate)

#### Defined in

node_modules/blockly/blockly.d.ts:17356

---

### setClass()

> **setClass**(`cssClass`): `void`

Set the CSS class applied to the field's textElement\_.

#### Parameters

##### cssClass

`string`

The new CSS class name, or null to remove.

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`setClass`](FieldLabel.md#setclass)

#### Defined in

node_modules/blockly/blockly.d.ts:6237

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

[`FieldLabel`](FieldLabel.md).[`setCursorSvg`](FieldLabel.md#setcursorsvg)

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

[`FieldLabel`](FieldLabel.md).[`setEnabled`](FieldLabel.md#setenabled)

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

[`FieldLabel`](FieldLabel.md).[`setMarkerSvg`](FieldLabel.md#setmarkersvg)

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

[`FieldLabel`](FieldLabel.md).[`setSourceBlock`](FieldLabel.md#setsourceblock)

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

[`FieldLabel`](FieldLabel.md).[`setTooltip`](FieldLabel.md#settooltip)

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

[`FieldLabel`](FieldLabel.md).[`setValidator`](FieldLabel.md#setvalidator)

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

[`FieldLabel`](FieldLabel.md).[`setValue`](FieldLabel.md#setvalue)

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

[`FieldLabel`](FieldLabel.md).[`setVisible`](FieldLabel.md#setvisible)

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

[`FieldLabel`](FieldLabel.md).[`showEditor`](FieldLabel.md#showeditor)

#### Defined in

node_modules/blockly/blockly.d.ts:17485

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

[`FieldLabel`](FieldLabel.md).[`toXml`](FieldLabel.md#toxml)

#### Defined in

node_modules/blockly/blockly.d.ts:17345

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove the UI indicating if this field is editable or not.

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`updateEditable`](FieldLabel.md#updateeditable)

#### Defined in

node_modules/blockly/blockly.d.ts:17392

---

### updateMarkers\_()

> `protected` **updateMarkers\_**(): `void`

Redraw any attached marker or cursor svgs if needed.

#### Returns

`void`

#### Inherited from

[`FieldLabel`](FieldLabel.md).[`updateMarkers_`](FieldLabel.md#updatemarkers_)

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

[`FieldLabel`](FieldLabel.md).[`updateSize_`](FieldLabel.md#updatesize_)

#### Defined in

node_modules/blockly/blockly.d.ts:17491

---

### fromJson()

> `static` **fromJson**(`options`): [`FieldLabelSerializable`](FieldLabelSerializable.md)

Construct a FieldLabelSerializable from a JSON arg object,
dereferencing any string table references.

#### Parameters

##### options

`any`

A JSON object with options (text, and class).

#### Returns

[`FieldLabelSerializable`](FieldLabelSerializable.md)

The new field instance.

#### Package

#### Nocollapse

#### Overrides

[`FieldLabel`](FieldLabel.md).[`fromJson`](FieldLabel.md#fromjson)

#### Defined in

node_modules/blockly/blockly.d.ts:23228
