# Class: ConstantProvider

An object that provides constants for rendering blocks.

## Package

## Alias

Blockly.blockRendering.ConstantProvider

## Extended by

- [`ConstantProvider`](../../../geras/geras/classes/ConstantProvider.md)
- [`ConstantProvider`](../../../minimalist/minimalist/classes/ConstantProvider.md)
- [`ConstantProvider`](../../../zelos/zelos/classes/ConstantProvider.md)

## Constructors

### new ConstantProvider()

> **new ConstantProvider**(): [`ConstantProvider`](ConstantProvider.md)

#### Returns

[`ConstantProvider`](ConstantProvider.md)

## Properties

### ADD_START_HATS

> **ADD_START_HATS**: `boolean`

Whether to add a 'hat' on top of all blocks with no previous or output
connections. Can be overridden by 'hat' property on Theme.BlockStyle.

#### Defined in

node_modules/blockly/blockly.d.ts:5619

---

### BETWEEN_STATEMENT_PADDING_Y

> **BETWEEN_STATEMENT_PADDING_Y**: `number`

Vertical padding between consecutive statement inputs.

#### Defined in

node_modules/blockly/blockly.d.ts:5593

---

### blockStyles

> **blockStyles**: `object`

The block styles map.

#### Index Signature

\[`x`: `string`\]: [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5952

---

### BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT

> **BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT**: `number`

The bottom row's minimum height if it follows a statement input.

#### Defined in

node_modules/blockly/blockly.d.ts:5613

---

### BOTTOM_ROW_MIN_HEIGHT

> **BOTTOM_ROW_MIN_HEIGHT**: `number`

The bottom row's minimum height.

#### Defined in

node_modules/blockly/blockly.d.ts:5608

---

### CORNER_RADIUS

> **CORNER_RADIUS**: `number`

Rounded corner radius.

#### Defined in

node_modules/blockly/blockly.d.ts:5574

---

### CURSOR_BLOCK_PADDING

> **CURSOR_BLOCK_PADDING**: `number`

Padding around a block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5871

---

### CURSOR_COLOUR

> **CURSOR_COLOUR**: `string`

Cursor colour.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5841

---

### CURSOR_STACK_PADDING

> **CURSOR_STACK_PADDING**: `number`

Padding around a stack.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5865

---

### CURSOR_STROKE_WIDTH

> **CURSOR_STROKE_WIDTH**: `number`

Stroke of the cursor.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5877

---

### CURSOR_WS_WIDTH

> **CURSOR_WS_WIDTH**: `number`

Width of the horizontal cursor.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5853

---

### debugFilterId

> **debugFilterId**: `string`

The ID of the debug filter, or the empty string if no pattern is set.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5823

---

### disabledPatternId

> **disabledPatternId**: `string`

The ID of the disabled pattern, or the empty string if no pattern is set.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5811

---

### DUMMY_INPUT_MIN_HEIGHT

> **DUMMY_INPUT_MIN_HEIGHT**: `number`

The minimum height of a dummy input row.

#### Defined in

node_modules/blockly/blockly.d.ts:5564

---

### DUMMY_INPUT_SHADOW_MIN_HEIGHT

> **DUMMY_INPUT_SHADOW_MIN_HEIGHT**: `number`

The minimum height of a dummy input row in a shadow block.

#### Defined in

node_modules/blockly/blockly.d.ts:5569

---

### embossFilterId

> **embossFilterId**: `string`

The ID of the emboss filter, or the empty string if no filter is set.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5799

---

### EMPTY_BLOCK_SPACER_HEIGHT

> **EMPTY_BLOCK_SPACER_HEIGHT**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5559

---

### EMPTY_INLINE_INPUT_HEIGHT

> **EMPTY_INLINE_INPUT_HEIGHT**: `number`

The height of an empty inline input.

#### Defined in

node_modules/blockly/blockly.d.ts:5637

---

### EMPTY_INLINE_INPUT_PADDING

> **EMPTY_INLINE_INPUT_PADDING**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5632

---

### EMPTY_STATEMENT_INPUT_HEIGHT

> **EMPTY_STATEMENT_INPUT_HEIGHT**: `number`

The height of an empty statement input. Note that in the old rendering
this varies slightly depending on whether the block has external or inline
inputs. In the new rendering this is consistent. It seems unlikely that
the old behaviour was intentional.

#### Defined in

node_modules/blockly/blockly.d.ts:5646

---

### EXTERNAL_VALUE_INPUT_PADDING

> **EXTERNAL_VALUE_INPUT_PADDING**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5638

---

### FIELD_BORDER_RECT_COLOUR

> **FIELD_BORDER_RECT_COLOUR**: `string`

The backing colour of a field's border rect.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5710

---

### FIELD_BORDER_RECT_HEIGHT

> **FIELD_BORDER_RECT_HEIGHT**: `number`

A field's border rect default height.

#### Defined in

node_modules/blockly/blockly.d.ts:5694

---

### FIELD_BORDER_RECT_RADIUS

> **FIELD_BORDER_RECT_RADIUS**: `number`

A field's border rect corner radius.

#### Defined in

node_modules/blockly/blockly.d.ts:5689

---

### FIELD_BORDER_RECT_X_PADDING

> **FIELD_BORDER_RECT_X_PADDING**: `number`

A field's border rect X padding.

#### Defined in

node_modules/blockly/blockly.d.ts:5699

---

### FIELD_BORDER_RECT_Y_PADDING

> **FIELD_BORDER_RECT_Y_PADDING**: `number`

A field's border rect Y padding.

#### Defined in

node_modules/blockly/blockly.d.ts:5704

---

### FIELD_CHECKBOX_X_OFFSET

> **FIELD_CHECKBOX_X_OFFSET**: `number`

A checkbox field's X offset.

#### Defined in

node_modules/blockly/blockly.d.ts:5779

---

### FIELD_COLOUR_DEFAULT_HEIGHT

> **FIELD_COLOUR_DEFAULT_HEIGHT**: `number`

A colour field's default height.

#### Defined in

node_modules/blockly/blockly.d.ts:5774

---

### FIELD_COLOUR_DEFAULT_WIDTH

> **FIELD_COLOUR_DEFAULT_WIDTH**: `number`

A colour field's default width.

#### Defined in

node_modules/blockly/blockly.d.ts:5769

---

### FIELD_COLOUR_FULL_BLOCK

> **FIELD_COLOUR_FULL_BLOCK**: `boolean`

Whether or not the colour field should display its colour value on the
entire block.

#### Defined in

node_modules/blockly/blockly.d.ts:5764

---

### FIELD_DROPDOWN_BORDER_RECT_HEIGHT

> **FIELD_DROPDOWN_BORDER_RECT_HEIGHT**: `number`

A dropdown field's border rect height.

#### Defined in

node_modules/blockly/blockly.d.ts:5720

---

### FIELD_DROPDOWN_COLOURED_DIV

> **FIELD_DROPDOWN_COLOURED_DIV**: `boolean`

Whether or not a dropdown field's div should be coloured to match the
block colours.

#### Defined in

node_modules/blockly/blockly.d.ts:5732

---

### FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW

> **FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW**: `boolean`

Whether or not a dropdown field should add a border rect when in a shadow
block.

#### Defined in

node_modules/blockly/blockly.d.ts:5726

---

### FIELD_DROPDOWN_SVG_ARROW

> **FIELD_DROPDOWN_SVG_ARROW**: `boolean`

Whether or not a dropdown field uses a text or SVG arrow.

#### Defined in

node_modules/blockly/blockly.d.ts:5737

---

### FIELD_DROPDOWN_SVG_ARROW_DATAURI

> **FIELD_DROPDOWN_SVG_ARROW_DATAURI**: `string`

A dropdown field's SVG arrow datauri.

#### Defined in

node_modules/blockly/blockly.d.ts:5752

---

### FIELD_DROPDOWN_SVG_ARROW_PADDING

> **FIELD_DROPDOWN_SVG_ARROW_PADDING**: `number`

A dropdown field's SVG arrow padding.

#### Defined in

node_modules/blockly/blockly.d.ts:5742

---

### FIELD_DROPDOWN_SVG_ARROW_SIZE

> **FIELD_DROPDOWN_SVG_ARROW_SIZE**: `number`

A dropdown field's SVG arrow size.

#### Defined in

node_modules/blockly/blockly.d.ts:5747

---

### FIELD_TEXT_BASELINE

> **FIELD_TEXT_BASELINE**: `number`

Text baseline. This constant is dynamically set in `setFontConstants_`
to be the baseline of the text based on the font used.

#### Defined in

node_modules/blockly/blockly.d.ts:5684

---

### FIELD_TEXT_BASELINE_CENTER

> **FIELD_TEXT_BASELINE_CENTER**: `boolean`

A field's text element's dominant baseline.

#### Defined in

node_modules/blockly/blockly.d.ts:5715

---

### FIELD_TEXT_FONTFAMILY

> **FIELD_TEXT_FONTFAMILY**: `string`

Text font family.

#### Defined in

node_modules/blockly/blockly.d.ts:5672

---

### FIELD_TEXT_FONTSIZE

> **FIELD_TEXT_FONTSIZE**: `number`

Point size of text.

#### Defined in

node_modules/blockly/blockly.d.ts:5662

---

### FIELD_TEXT_FONTWEIGHT

> **FIELD_TEXT_FONTWEIGHT**: `string`

Text font weight.

#### Defined in

node_modules/blockly/blockly.d.ts:5667

---

### FIELD_TEXT_HEIGHT

> **FIELD_TEXT_HEIGHT**: `number`

Height of text. This constant is dynamically set in `setFontConstants_`
to be the height of the text based on the font used.

#### Defined in

node_modules/blockly/blockly.d.ts:5678

---

### FIELD_TEXTINPUT_BOX_SHADOW

> **FIELD_TEXTINPUT_BOX_SHADOW**: `boolean`

Whether or not to show a box shadow around the widget div. This is only a
feature of full block fields.

#### Defined in

node_modules/blockly/blockly.d.ts:5758

---

### FULL_BLOCK_FIELDS

> **FULL_BLOCK_FIELDS**: `boolean`

Whether text input and colour fields fill up the entire source block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5883

---

### INSERTION_MARKER_COLOUR

> **INSERTION_MARKER_COLOUR**: `string`

The main colour of insertion markers, in hex. The block is rendered a
transparent grey by changing the fill opacity in CSS.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5890

---

### INSERTION_MARKER_OPACITY

> **INSERTION_MARKER_OPACITY**: `number`

The insertion marker opacity.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5896

---

### INSIDE_CORNERS

> **INSIDE_CORNERS**: `any`

An object containing sizing and path information about inside corners

#### Defined in

node_modules/blockly/blockly.d.ts:5935

---

### JAGGED_TEETH

> **JAGGED_TEETH**: `any`

An object containing sizing and path information about collapsed block
indicators.

#### Defined in

node_modules/blockly/blockly.d.ts:5915

---

### JAGGED_TEETH_HEIGHT

> **JAGGED_TEETH_HEIGHT**: `number`

Height of SVG path for jagged teeth at the end of collapsed blocks.

#### Defined in

node_modules/blockly/blockly.d.ts:5652

---

### JAGGED_TEETH_WIDTH

> **JAGGED_TEETH_WIDTH**: `number`

Width of SVG path for jagged teeth at the end of collapsed blocks.

#### Defined in

node_modules/blockly/blockly.d.ts:5657

---

### LARGE_PADDING

> **LARGE_PADDING**: `number`

The size of large padding.

#### Defined in

node_modules/blockly/blockly.d.ts:5515

---

### MARKER_COLOUR

> **MARKER_COLOUR**: `string`

Immovable marker colour.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5847

---

### MEDIUM_LARGE_PADDING

> **MEDIUM_LARGE_PADDING**: `number`

The size of medium-large padding.

#### Defined in

node_modules/blockly/blockly.d.ts:5510

---

### MEDIUM_PADDING

> **MEDIUM_PADDING**: `number`

The size of medium padding.

#### Defined in

node_modules/blockly/blockly.d.ts:5505

---

### MIN_BLOCK_HEIGHT

> **MIN_BLOCK_HEIGHT**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5631

---

### MIN_BLOCK_WIDTH

> **MIN_BLOCK_WIDTH**: `number`

The minimum width of the block.

#### Defined in

node_modules/blockly/blockly.d.ts:5558

---

### NO_PADDING

> **NO_PADDING**: `number`

The size of an empty spacer.

#### Defined in

node_modules/blockly/blockly.d.ts:5495

---

### NOTCH

> **NOTCH**: `any`

An object containing sizing and path information about notches.

#### Defined in

node_modules/blockly/blockly.d.ts:5920

---

### NOTCH_HEIGHT

> **NOTCH_HEIGHT**: `number`

The height of the notch used for previous and next connections.

#### Defined in

node_modules/blockly/blockly.d.ts:5553

---

### NOTCH_OFFSET_LEFT

> **NOTCH_OFFSET_LEFT**: `number`

Offset from the left side of a block or the inside of a statement input to
the left side of the notch.

#### Defined in

node_modules/blockly/blockly.d.ts:5580

---

### NOTCH_WIDTH

> **NOTCH_WIDTH**: `number`

The width of the notch used for previous and next connections.

#### Defined in

node_modules/blockly/blockly.d.ts:5548

---

### OUTSIDE_CORNERS

> **OUTSIDE_CORNERS**: `any`

An object containing sizing and path information about outside corners.

#### Defined in

node_modules/blockly/blockly.d.ts:5940

---

### PUZZLE_TAB

> **PUZZLE_TAB**: `any`

An object containing sizing and path information about puzzle tabs.

#### Defined in

node_modules/blockly/blockly.d.ts:5930

---

### randomIdentifier

> **randomIdentifier**: `string`

A random identifier used to ensure a unique ID is used for each
filter/pattern for the case of multiple Blockly instances on a page.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5786

---

### SHAPES

> **SHAPES**: `object`

Enum for connection shapes.

#### NOTCH

> **NOTCH**: `number`

#### PUZZLE

> **PUZZLE**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5901

---

### SMALL_PADDING

> **SMALL_PADDING**: `number`

The size of small padding.

#### Defined in

node_modules/blockly/blockly.d.ts:5500

---

### SPACER_DEFAULT_HEIGHT

> **SPACER_DEFAULT_HEIGHT**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5630

---

### START_HAT

> **START_HAT**: `any`

An object containing sizing and path information about start hats

#### Defined in

node_modules/blockly/blockly.d.ts:5925

---

### START_HAT_HEIGHT

> **START_HAT_HEIGHT**: `number`

Height of the top hat.

#### Defined in

node_modules/blockly/blockly.d.ts:5624

---

### START_HAT_WIDTH

> **START_HAT_WIDTH**: `number`

Width of the top hat.

#### Defined in

node_modules/blockly/blockly.d.ts:5629

---

### START_POINT

> **START_POINT**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:5647

---

### STATEMENT_BOTTOM_SPACER

> **STATEMENT_BOTTOM_SPACER**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5587

---

### STATEMENT_INPUT_NOTCH_OFFSET

> **STATEMENT_INPUT_NOTCH_OFFSET**: `number`

Additional offset added to the statement input's width to account for the
notch.

#### Defined in

node_modules/blockly/blockly.d.ts:5586

---

### STATEMENT_INPUT_PADDING_LEFT

> **STATEMENT_INPUT_PADDING_LEFT**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:5588

---

### TAB_HEIGHT

> **TAB_HEIGHT**: `number`

The height of the puzzle tab used for input and output connections.

#### Defined in

node_modules/blockly/blockly.d.ts:5527

---

### TAB_OFFSET_FROM_TOP

> **TAB_OFFSET_FROM_TOP**: `number`

The offset from the top of the block at which a puzzle tab is positioned.

#### Defined in

node_modules/blockly/blockly.d.ts:5532

---

### TAB_VERTICAL_OVERLAP

> **TAB_VERTICAL_OVERLAP**: `number`

Vertical overlap of the puzzle tab, used to make it look more like a puzzle
piece.

#### Defined in

node_modules/blockly/blockly.d.ts:5538

---

### TAB_WIDTH

> **TAB_WIDTH**: `number`

The width of the puzzle tab used for input and output connections.

#### Defined in

node_modules/blockly/blockly.d.ts:5543

---

### TALL_INPUT_FIELD_OFFSET_Y

> **TALL_INPUT_FIELD_OFFSET_Y**: `number`

Offset from the top of the row for placing fields on inline input rows
and statement input rows.
Matches existing rendering (in 2019).

#### Defined in

node_modules/blockly/blockly.d.ts:5522

---

### TOP_ROW_MIN_HEIGHT

> **TOP_ROW_MIN_HEIGHT**: `number`

The top row's minimum height.

#### Defined in

node_modules/blockly/blockly.d.ts:5598

---

### TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT

> **TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT**: `number`

The top row's minimum height if it precedes a statement.

#### Defined in

node_modules/blockly/blockly.d.ts:5603

---

### WS_CURSOR_HEIGHT

> **WS_CURSOR_HEIGHT**: `number`

Height of the horizontal cursor.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5859

## Methods

### createBlockStyle\_()

> `protected` **createBlockStyle\_**(`colour`): [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

Create a block style object based on the given colour.

#### Parameters

##### colour

`string`

#RRGGBB colour string.

#### Returns

[`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

A populated block style based on the
given colour.

#### Defined in

node_modules/blockly/blockly.d.ts:5999

---

### createDom()

> **createDom**(`svg`, `tagName`, `selector`): `void`

Create any DOM elements that this renderer needs (filters, patterns, etc).

#### Parameters

##### svg

`SVGElement`

The root of the workspace's SVG.

##### tagName

`string`

The name to use for the CSS style tag.

##### selector

`string`

The CSS selector to use.

#### Returns

`void`

#### Suppress

Debug renderer only included in playground.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6093

---

### dispose()

> **dispose**(): `void`

Dispose of this constants provider.
Delete all DOM elements that this provider created.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6039

---

### generateSecondaryColour\_()

> `protected` **generateSecondaryColour\_**(`inputColour`): `string`

Generate a secondary colour from the passed in primary colour.

#### Parameters

##### inputColour

`string`

Primary colour.

#### Returns

`string`

The generated secondary colour.

#### Defined in

node_modules/blockly/blockly.d.ts:6026

---

### generateTertiaryColour\_()

> `protected` **generateTertiaryColour\_**(`inputColour`): `string`

Generate a tertiary colour from the passed in primary colour.

#### Parameters

##### inputColour

`string`

Primary colour.

#### Returns

`string`

The generated tertiary colour.

#### Defined in

node_modules/blockly/blockly.d.ts:6033

---

### getBlockStyle()

> **getBlockStyle**(`blockStyleName`): [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

Gets the BlockStyle for the given block style name.

#### Parameters

##### blockStyleName

`string`

The name of the block style.

#### Returns

[`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

The named block style, or a default style
if no style with the given name was found.

#### Defined in

node_modules/blockly/blockly.d.ts:5991

---

### getBlockStyleForColour()

> **getBlockStyleForColour**(`colour`): `object`

Get or create a block style based on a single colour value. Generate a name
for the style based on the colour.

#### Parameters

##### colour

`string`

#RRGGBB colour string.

#### Returns

`object`

An object
containing the style and an autogenerated name for that style.

##### name

> **name**: `string`

##### style

> **style**: [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5981

---

### getCSS\_()

> `protected` **getCSS\_**(`selector`): `string`[]

Get any renderer specific CSS to inject when the renderer is initialized.

#### Parameters

##### selector

`string`

CSS selector to use.

#### Returns

`string`[]

Array of CSS strings.

#### Defined in

node_modules/blockly/blockly.d.ts:6113

---

### init()

> **init**(): `void`

Initialize shape objects based on the constants set in the constructor.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5909

---

### injectCSS\_()

> `protected` **injectCSS\_**(`tagName`, `selector`): `void`

Inject renderer specific CSS into the page.

#### Parameters

##### tagName

`string`

The name of the style tag to use.

##### selector

`string`

The CSS selector to use.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:6106

---

### makeInsideCorners()

> **makeInsideCorners**(): `any`

#### Returns

`any`

An object containing sizing and path information about
inside corners.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6069

---

### makeJaggedTeeth()

> **makeJaggedTeeth**(): `any`

#### Returns

`any`

An object containing sizing and path information about
collapsed block indicators.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6045

---

### makeNotch()

> **makeNotch**(): `any`

#### Returns

`any`

An object containing sizing and path information about
notches.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6063

---

### makeOutsideCorners()

> **makeOutsideCorners**(): `any`

#### Returns

`any`

An object containing sizing and path information about
outside corners.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6075

---

### makePuzzleTab()

> **makePuzzleTab**(): `any`

#### Returns

`any`

An object containing sizing and path information about
puzzle tabs.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6057

---

### makeStartHat()

> **makeStartHat**(): `any`

#### Returns

`any`

An object containing sizing and path information about
start hats.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6051

---

### setComponentConstants\_()

> `protected` **setComponentConstants\_**(`theme`): `void`

Set constants from a theme's component styles.

#### Parameters

##### theme

[`Theme`](../../../../classes/Theme.md)

The current workspace theme.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:5972

---

### setDynamicProperties\_()

> `protected` **setDynamicProperties\_**(`theme`): `void`

Sets dynamic properties that depend on other values or theme properties.

#### Parameters

##### theme

[`Theme`](../../../../classes/Theme.md)

The current workspace theme.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:5960

---

### setFontConstants\_()

> `protected` **setFontConstants\_**(`theme`): `void`

Set constants related to fonts.

#### Parameters

##### theme

[`Theme`](../../../../classes/Theme.md)

The current workspace theme.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:5966

---

### setTheme()

> **setTheme**(`theme`): `void`

Refresh constants properties that depend on the theme.

#### Parameters

##### theme

[`Theme`](../../../../classes/Theme.md)

The current workspace theme.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5946

---

### shapeFor()

> **shapeFor**(`connection`): `any`

Get an object with connection shape and sizing information based on the type
of the connection.

#### Parameters

##### connection

[`RenderedConnection`](../../../../classes/RenderedConnection.md)

The connection to find a
shape object for

#### Returns

`any`

The shape object for the connection.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6084

---

### validatedBlockStyle\_()

> `protected` **validatedBlockStyle\_**(`blockStyle`): [`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

Get a full block style object based on the input style object. Populate
any missing values.

#### Parameters

##### blockStyle

A full or partial block style object.

###### colourPrimary

`string`

###### colourSecondary

`string`

###### colourTertiary

`string`

###### hat

`string`

#### Returns

[`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

A full block style object, with all
required properties populated.

#### Defined in

node_modules/blockly/blockly.d.ts:6014
