Color is the third dimension that is used to show the relationship among three variables in a flat display. Any measure that shows a continuos range of values can be mapped with a color gradient.

# Table of contents
- [Guidelines](#guidelines)
- [Qualitative Color Scales](#qualitative-color-scales)
  * [Qualitative Color Scale: Primary](#qualitative-color-scale-primary)
  * [Qualitative Color Scale: Optional](#qualitative-color-scale-optional)
- [Gray Scale](#gray-scale)
- [Gender Colors](#gender-colors)
- [Sequential and Diverging Scales](#sequential-and-diverging-scales)
  * [Sequential Scales](#sequential-scales)
    + [Sequential Scale 1](#sequential-scale-1)
    + [Sequential Scale 2](#sequential-scale-2)
    + [Sequential Scale 3](#sequential-scale-3)
    + [Sequential Male](#sequential-male)
    + [Sequential Female](#sequential-female)
  * [Diverging Scales](#diverging-scales)
    + [Diverging Scale 1](#diverging-scale-1)
    + [Diverging Scale 2](#diverging-scale-2)
    + [Diverging Scale 3](#diverging-scale-3)
    + [Diverging Gender](#diverging-gender)
- [References](#references)

# Guidelines
Our color palette is based on a qualitative scale, three sequential scales and three diverging scales and it was built with the help of [Colorgorical](http://vrl.cs.brown.edu/color), an online palette generator, [Viz Palette](https://projects.susielu.com/viz-palette) and [Chroma.js](https://gka.github.io/palettes/#/9|s|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|1|1), two other palette helpers.

To assemble all color scales, we´ve paid attention to three main criteria:

1. __Perceptual distance__: To make more easily discriminable to the human eye and maximize harmony among a selected range of colors. This means that all of the selected colors are similar in brightness and saturation, but different in hue.
2. __Accessibility__: We´ve optimized the defined color scheme for the most common cases of color vision deficiencies. Using tools like [Color Oracle](http://colororacle.org/) that adapt the screen colors to imitate a decreased ability to perceive color differences, we refined the actual color schemes and optimized colors in hue, saturation and brightness to guarantee best possible outputs for all kinds of users.
3. __Contrast__: Whenever was possible, we´ve tried to adjust the contrast in values, not colors, of our palette selection to make it print friendly. In order to do that, we´ve converted our palette to gray scale and we´ve checked if the colors applied to a chart holds up in black and white.

With all of this in mind, we´ve created a color palette where all scales are derived out of the original twelve qualitative color. This is one way that we can secure a consistent visual appearance in all graphics.

# Qualitative Color Scales
"Qualitative schemes use differences in hue to represent nominal differences, or differences in kind. The lightness of the hues used for qualitative categories should be similar but not equal. Assign the lightest, darkest, and most saturated hues in the scheme to categories that warrant emphasis in the representation." [\[1\]](#references) Data about product categories or city districts, for example, are well represented by a qualitative color scheme. Convert the chart to gray scale is an easy way to test whether the contrast in values, not colors, is sufficient.

For the qualitative color scale we made a wide exploration. It helped a lot to have many directions at first, before getting more specific. The possibilities to create qualitative color scales are endless, but we let years of experienced in the graphic design field combined with a more scientific approach to lead the whole process. To create our three discriminable color palettes, was used the model and tool [Colorgorical](http://vrl.cs.brown.edu/color). This online tool produce without too much customization arbitrarily sized, preferable, and discriminable color palettes for diverging information visualization. It is designed specifically for data visualization and "it uses empirically derived color preference data to inform diverging palette generation." [\[2\]](#references)

"A color palette for charts should include the basic colors and three to five shades of each hue." [\[3\]](#references) Thus, we define six different colors for both qualitative scales, primary and choice, to get a large enough selection. To get them as distinguishable as possible we picked the six base colors on a linear distribution across the whole visual spectrum. This means that all of the selected colors are similar in brightness and saturation, but different in hue. Furthermore, the linear distance between those six colors had to be as equal as possible. With this approach we received a solid foundation that we were able to refine in hue and vary in brightness and saturation. To extend our series of six colors up to twenty four, we took the base color in hue and increased the brightness. The same recipe was applied on every color of our scale of six.

[to the top](#table-of-contents)

## Qualitative Color Scale: Primary
We use this scale as the main source for our basic daily business as well as base for our sequential and diverging color palettes.

```color-palette|span-1
colors:
  - {name: "q-pri-color-one-1", value: "#22577a"}
  - {name: "q-pri-color-two-1", value: "#f2ac18"}
  - {name: "q-pri-color-three-1", value: "#b4ddd4"}
  - {name: "q-pri-color-four-1", value: "#df3340"}
  - {name: "q-pri-color-five-1", value: "#90b673"}
  - {name: "q-pri-color-six-1", value: "#b38677"} 
```

```color-palette|span-1
colors:
  - {name: "q-pri-color-one-2", value: "#4c718f"}
  - {name: "q-pri-color-two-2", value: "#fabc52"}
  - {name: "q-pri-color-three-2", value: "#cde8e2"}
  - {name: "q-pri-color-four-2", value: "#ec6462"}
  - {name: "q-pri-color-five-2", value: "#a5c48c"}
  - {name: "q-pri-color-six-2", value: "#be9689"}  
```

```color-palette|span-1
colors:
  - {name: "q-pri-color-one-3", value: "#6e8aa4"}
  - {name: "q-pri-color-two-3", value: "#ffca7a"}
  - {name: "q-pri-color-three-3", value: "#e2f2ee"}
  - {name: "q-pri-color-four-3", value: "#f8918a"}
  - {name: "q-pri-color-five-3", value: "#c5d8b4"}
  - {name: "q-pri-color-six-3", value: "#d1b2a8"}  
```

```color-palette|span-1
colors:
  - {name: "q-pri-color-one-4", value: "#94a7bb"}
  - {name: "q-pri-color-two-4", value: "#ffdfae"}
  - {name: "q-pri-color-three-4", value: "#f5faf9"}
  - {name: "q-pri-color-four-4", value: "#ffbab4"}
  - {name: "q-pri-color-five-4", value: "#e0ebd7"}
  - {name: "q-pri-color-six-4", value: "#e3d0ca"}  
```

[to the top](#table-of-contents)

## Qualitative Color Scale: Optional
This one is used for a large projects that may need a more specific visual approach.

```color-palette|span-1
colors:
  - {name: "q-cho-color-one-1", value: "#4081ec"}
  - {name: "q-cho-color-two-1", value: "#d40b3d"}
  - {name: "q-cho-color-three-1", value: "#fadcd9"}
  - {name: "q-cho-color-four-1", value: "#1c5b5a"}
  - {name: "q-cho-color-five-1", value: "#c87e5d"}
  - {name: "q-cho-color-six-1", value: "#91c59c"} 
```

```color-palette|span-1
colors:
  - {name: "q-cho-color-one-2", value: "#628fef"}
  - {name: "q-cho-color-two-2", value: "#db364c"}
  - {name: "q-cho-color-three-2", value: "#fce5e3"}
  - {name: "q-cho-color-four-2", value: "#3e706f"}
  - {name: "q-cho-color-five-2", value: "#d7997e"}
  - {name: "q-cho-color-six-2", value: "#a9d2b1"} 
```

```color-palette|span-1
colors:
  - {name: "q-cho-color-one-3", value: "#8da6f3"}
  - {name: "q-cho-color-two-3", value: "#e75e66"}
  - {name: "q-cho-color-three-3", value: "#fdeeec"}
  - {name: "q-cho-color-four-3", value: "#5b8483"}
  - {name: "q-cho-color-five-3", value: "#e5b6a2"}
  - {name: "q-cho-color-six-3", value: "#c0dec5"} 
```

```color-palette|span-1
colors:
  - {name: "q-cho-color-one-4", value: "#b1bff7"}
  - {name: "q-cho-color-two-4", value: "#6c43c0"}
  - {name: "q-cho-color-three-4", value: "#fef6f5"}
  - {name: "q-cho-color-four-4", value: "#7f9f9e"}
  - {name: "q-cho-color-five-4", value: "#f3dad0"}
  - {name: "q-cho-color-six-4", value: "#dfeee2"} 
```

[to the top](#table-of-contents)

# Gray Scale 
Our gray scale palette is used for all text and annotations in graphics as well as axis labels and lines. 

```color-palette|horizontal
colors:
   - {value: "#05032d"}
   - {value: "#393855"}
   - {value: "#6e6e7e"}
   - {value: "#92929e"}
   - {value: "#b6b6be"}
   - {value: "#c3c2ca"}
   - {value: "#d4d6dd"}
   - {value: "#e3e4e9"}
   - {value: "#f0f0f2"}
```

# Gender Colors
The gender colors comes also from the NZZ style guide. We think that the choice of both neutral hues in terms of avoiding any connotations but still being appealing is unbeatable.

```color-palette|span-2
colors:
  - {name: "male - primary", value: "#24B39C"}
  - {name: "female – primary", value: "#6C43C0"}
```

```color-palette|span-2
colors:
  - {name: "male - light", value: "#7dd1c3"}
  - {name: "female – light", value: "#aa90de"}
```

[to the top](#table-of-contents)

# Sequential and Diverging Scales
As we can see before when we were defining our qualitative scales, including several shades of each basic color hue gives us the option of using fewer colors within a chart to avoid distraction and make chart reading easier for our audience. But, while a (linear) variation in lightness is the most important quality of a sequential color scale, varying the hue can bring further significant improvements. Hue variation provides a better color contrast and thus makes the colors easier to differentiate.

Though the NZZ makes use of seven buckets to create their color schema, we have expanded our sequential and diverging scales to nine buckets as in the [ColorBrewer](https://bl.ocks.org/emeeks/8cdec64ed6daf955830fa723252a4ab3).

## Sequential Scales
Our five sequential scales were created adding one or two colors from our qualitative scales (primary or choice) with a neutral grey. For diverging ones, were added together three colors from the very same scales.

* __Sequential-one__ is based on our first primary color.
* __Sequential-two__ is the scale used in cases our primary qualitative color is encoded with a specific category already and should not be confused with the category this scale is representing.
* __Sequential-three__ is the scale used in cases we are displaying data that’s negatively associated.
* __Sequential-male__ is the scale used for displaying the amount of male representation. It’s based on the male color.
* __Sequential-female__ is the scale used for displaying the amount of female representation. It’s based on the female color.

### Sequential Scale 1
This scale is structured based on the first primary qualitative color.

```color-palette|horizontal
colors:
   - {name: "sequential-one-2-1", value: "#22577a"}
   - {name: "sequential-one-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-one-3-1", value: "#22577a"}
   - {name: "sequential-one-3-2", value: "#3f6787"}
   - {name: "sequential-one-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-one-4-1", value: "#22577a"}
   - {name: "sequential-one-4-2", value: "#3f6787"}
   - {name: "sequential-one-4-3", value: "#577895"}
   - {name: "sequential-one-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-one-5-1", value: "#22577a"}
   - {name: "sequential-one-5-2", value: "#3f6787"}
   - {name: "sequential-one-5-3", value: "#577895"}
   - {name: "sequential-one-5-4", value: "#6f89a2"}
   - {name: "sequential-one-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-one-6-1", value: "#22577a"}
   - {name: "sequential-one-6-2", value: "#3f6787"}
   - {name: "sequential-one-6-3", value: "#577895"}
   - {name: "sequential-one-6-4", value: "#6f89a2"}
   - {name: "sequential-one-6-5", value: "#869ab0"}
   - {name: "sequential-one-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-one-7-1", value: "#22577a"}
   - {name: "sequential-one-7-2", value: "#3f6787"}
   - {name: "sequential-one-7-3", value: "#577895"}
   - {name: "sequential-one-7-4", value: "#6f89a2"}
   - {name: "sequential-one-7-5", value: "#869ab0"}
   - {name: "sequential-one-7-6", value: "#9dacbe"}
   - {name: "sequential-one-7-7", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-one-8-1", value: "#22577a"}
   - {name: "sequential-one-8-2", value: "#3f6787"}
   - {name: "sequential-one-8-3", value: "#577895"}
   - {name: "sequential-one-8-4", value: "#6f89a2"}
   - {name: "sequential-one-8-5", value: "#869ab0"}
   - {name: "sequential-one-8-6", value: "#9dacbe"}
   - {name: "sequential-one-8-7", value: "#b4bfcc"}
   - {name: "sequential-one-8-8", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-one-9-1", value: "#22577a"}
   - {name: "sequential-one-9-2", value: "#3f6787"}
   - {name: "sequential-one-9-3", value: "#577895"}
   - {name: "sequential-one-9-4", value: "#6f89a2"}
   - {name: "sequential-one-9-5", value: "#869ab0"}
   - {name: "sequential-one-9-6", value: "#9dacbe"}
   - {name: "sequential-one-9-7", value: "#b4bfcc"}
   - {name: "sequential-one-9-8", value: "#cbd1db"}
   - {name: "sequential-one-9-9", value: "#e3e4e9"}
```

```table
span: 4
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: 22577a, e3e4e9
  - Steps: 3
    HEX: 22577a, 3f6787, e3e4e9
  - Steps: 4
    HEX: 22577a, 3f6787, 577895, e3e4e9
  - Steps: 5
    HEX: 22577a, 3f6787, 577895, 6f89a2, e3e4e9
  - Steps: 6
    HEX: 22577a, 3f6787, 577895, 6f89a2, 869ab0, e3e4e9
  - Steps: 7
    HEX: 22577a, 3f6787, 577895, 6f89a2, 869ab0, 9dacbe, e3e4e9
  - Steps: 8
    HEX: 22577a, 3f6787, 577895, 6f89a2, 869ab0, 9dacbe, b4bfcc, e3e4e9
  - Steps: 9
    HEX: 22577a, 3f6787, 577895, 6f89a2, 869ab0, 9dacbe, b4bfcc, cbd1db, e3e4e9
```

[to the top](#table-of-contents)

### Sequential Scale 2
This is an alternative sequential scale that is available in the case that the primary qualitative color is encoded with a specific category and should not be confused with the category this scale is representing.

```color-palette|horizontal
colors:
   - {name: "sequential-two-2-1", value: "#91c59c"}
   - {name: "sequential-two-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-two-3-1", value: "#91c59c"}
   - {name: "sequential-two-3-2", value: "#9cc9a5"}
   - {name: "sequential-two-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-two-4-1", value: "#91c59c"}
   - {name: "sequential-two-4-2", value: "#9cc9a5"}
   - {name: "sequential-two-4-3", value: "#a6cdaf"}
   - {name: "sequential-two-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-two-5-1", value: "#91c59c"}
   - {name: "sequential-two-5-2", value: "#9cc9a5"}
   - {name: "sequential-two-5-3", value: "#a6cdaf"}
   - {name: "sequential-two-5-4", value: "#b0d1b8"}
   - {name: "sequential-two-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-two-6-1", value: "#91c59c"}
   - {name: "sequential-two-6-2", value: "#9cc9a5"}
   - {name: "sequential-two-6-3", value: "#a6cdaf"}
   - {name: "sequential-two-6-4", value: "#b0d1b8"}
   - {name: "sequential-two-6-5", value: "#bad5c2"}
   - {name: "sequential-two-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-two-7-1", value: "#91c59c"}
   - {name: "sequential-two-7-2", value: "#9cc9a5"}
   - {name: "sequential-two-7-3", value: "#a6cdaf"}
   - {name: "sequential-two-7-4", value: "#b0d1b8"}
   - {name: "sequential-two-7-5", value: "#bad5c2"}
   - {name: "sequential-two-7-6", value: "#c5d9cc"}
   - {name: "sequential-two-7-7", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-two-8-1", value: "#91c59c"}
   - {name: "sequential-two-8-2", value: "#9cc9a5"}
   - {name: "sequential-two-8-3", value: "#a6cdaf"}
   - {name: "sequential-two-8-4", value: "#b0d1b8"}
   - {name: "sequential-two-8-5", value: "#bad5c2"}
   - {name: "sequential-two-8-6", value: "#c5d9cc"}
   - {name: "sequential-two-8-7", value: "#cfdcd5"}
   - {name: "sequential-two-8-8", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-two-9-1", value: "#91c59c"}
   - {name: "sequential-two-9-2", value: "#9cc9a5"}
   - {name: "sequential-two-9-3", value: "#a6cdaf"}
   - {name: "sequential-two-9-4", value: "#b0d1b8"}
   - {name: "sequential-two-9-5", value: "#bad5c2"}
   - {name: "sequential-two-9-6", value: "#c5d9cc"}
   - {name: "sequential-two-9-7", value: "#cfdcd5"}
   - {name: "sequential-two-9-8", value: "#d9e0df"}
   - {name: "sequential-two-9-9", value: "#e3e4e9"}
```

```table
span: 4
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: 91c59c, e3e4e9
  - Steps: 3
    HEX: 91c59c, 9cc9a5, e3e4e9
  - Steps: 4
    HEX: 91c59c, 9cc9a5, a6cdaf, e3e4e9
  - Steps: 5
    HEX: 91c59c, 9cc9a5, a6cdaf, b0d1b8, e3e4e9
  - Steps: 6
    HEX: 91c59c, 9cc9a5, a6cdaf, b0d1b8, bad5c2, e3e4e9
  - Steps: 7
    HEX: 91c59c, 9cc9a5, a6cdaf, b0d1b8, bad5c2, c5d9cc, e3e4e9
  - Steps: 8
    HEX: 91c59c, 9cc9a5, a6cdaf, b0d1b8, bad5c2, c5d9cc, cfdcd5, e3e4e9
  - Steps: 9
    HEX: 91c59c, 9cc9a5, a6cdaf, b0d1b8, bad5c2, c5d9cc, cfdcd5, d9e0df, e3e4e9
```

[to the top](#table-of-contents)

### Sequential Scale 3
This scale is used in the case where we are displaying data that could be negatively associated.

```color-palette|horizontal
colors:
   - {name: "sequential-three-2-1", value: "#f18283"}
   - {name: "sequential-three-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-three-3-1", value: "#f18283"}
   - {name: "sequential-three-3-2", value: "#f18f8f"}
   - {name: "sequential-three-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-three-4-1", value: "#f18283"}
   - {name: "sequential-three-4-2", value: "#f18f8f"}
   - {name: "sequential-three-4-3", value: "#f19c9b"}
   - {name: "sequential-three-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-three-5-1", value: "#f18283"}
   - {name: "sequential-three-5-2", value: "#f18f8f"}
   - {name: "sequential-three-5-3", value: "#f19c9b"}
   - {name: "sequential-three-5-4", value: "#f1a8a8"}
   - {name: "sequential-three-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-three-6-1", value: "#f18283"}
   - {name: "sequential-three-6-2", value: "#f18f8f"}
   - {name: "sequential-three-6-3", value: "#f19c9b"}
   - {name: "sequential-three-6-4", value: "#f1a8a8"}
   - {name: "sequential-three-6-5", value: "#efb4b5"}
   - {name: "sequential-three-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-three-7-1", value: "#f18283"}
   - {name: "sequential-three-7-2", value: "#f18f8f"}
   - {name: "sequential-three-7-3", value: "#f19c9b"}
   - {name: "sequential-three-7-4", value: "#f1a8a8"}
   - {name: "sequential-three-7-5", value: "#efb4b5"}
   - {name: "sequential-three-7-6", value: "#edc0c2"}
   - {name: "sequential-three-7-7", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-three-8-1", value: "#f18283"}
   - {name: "sequential-three-8-2", value: "#f18f8f"}
   - {name: "sequential-three-8-3", value: "#f19c9b"}
   - {name: "sequential-three-8-4", value: "#f1a8a8"}
   - {name: "sequential-three-8-5", value: "#efb4b5"}
   - {name: "sequential-three-8-6", value: "#edc0c2"}
   - {name: "sequential-three-8-7", value: "#ebcccf"}
   - {name: "sequential-three-8-8", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-three-9-1", value: "#f18283"}
   - {name: "sequential-three-9-2", value: "#f18f8f"}
   - {name: "sequential-three-9-3", value: "#f19c9b"}
   - {name: "sequential-three-9-4", value: "#f1a8a8"}
   - {name: "sequential-three-9-5", value: "#efb4b5"}
   - {name: "sequential-three-9-6", value: "#edc0c2"}
   - {name: "sequential-three-9-7", value: "#ebcccf"}
   - {name: "sequential-three-9-8", value: "#e7d8dc"}
   - {name: "sequential-three-9-9", value: "#e3e4e9"}
```

```table
span: 4
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: f18283, e3e4e9
  - Steps: 3
    HEX: f18283, f18f8f, e3e4e9
  - Steps: 4
    HEX: f18283, f18f8f, f19c9b, e3e4e9
  - Steps: 5
    HEX: f18283, f18f8f, f19c9b, f1a8a8, e3e4e9
  - Steps: 6
    HEX: f18283, f18f8f, f19c9b, f1a8a8, efb4b5, e3e4e9
  - Steps: 7
    HEX: f18283, f18f8f, f19c9b, f1a8a8, efb4b5, edc0c2, e3e4e9
  - Steps: 8
    HEX: f18283, f18f8f, f19c9b, f1a8a8, efb4b5, edc0c2, ebcccf, e3e4e9
  - Steps: 9
    HEX: f18283, f18f8f, f19c9b, f1a8a8, efb4b5, edc0c2, ebcccf, e7d8dc, e3e4e9
```

[to the top](#table-of-contents)

### Sequential Male
This scale is based on the male color.

```color-palette|horizontal
colors:
   - {name: "sequential-male-2-1", value: "#24b39c"}
   - {name: "sequential-male-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-male-3-1", value: "#24b39c"}
   - {name: "sequential-male-3-2", value: "#4bbaa5"}
   - {name: "sequential-male-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-male-4-1", value: "#24b39c"}
   - {name: "sequential-male-4-2", value: "#4bbaa5"}
   - {name: "sequential-male-4-3", value: "#67c0af"}
   - {name: "sequential-male-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-male-5-1", value: "#24b39c"}
   - {name: "sequential-male-5-2", value: "#4bbaa5"}
   - {name: "sequential-male-5-3", value: "#67c0af"}
   - {name: "sequential-male-5-4", value: "#7ec6b8"}
   - {name: "sequential-male-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-male-6-1", value: "#24b39c"}
   - {name: "sequential-male-6-2", value: "#4bbaa5"}
   - {name: "sequential-male-6-3", value: "#67c0af"}
   - {name: "sequential-male-6-4", value: "#7ec6b8"}
   - {name: "sequential-male-6-5", value: "#94ccc2"}
   - {name: "sequential-male-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-male-7-1", value: "#24b39c"}
   - {name: "sequential-male-7-2", value: "#4bbaa5"}
   - {name: "sequential-male-7-3", value: "#67c0af"}
   - {name: "sequential-male-7-4", value: "#7ec6b8"}
   - {name: "sequential-male-7-5", value: "#94ccc2"}
   - {name: "sequential-male-7-6", value: "#a8d3cb"}
   - {name: "sequential-male-7-7", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-male-8-1", value: "#24b39c"}
   - {name: "sequential-male-8-2", value: "#4bbaa5"}
   - {name: "sequential-male-8-3", value: "#67c0af"}
   - {name: "sequential-male-8-4", value: "#7ec6b8"}
   - {name: "sequential-male-8-5", value: "#94ccc2"}
   - {name: "sequential-male-8-6", value: "#a8d3cb"}
   - {name: "sequential-male-8-7", value: "#bcd8d5"}
   - {name: "sequential-male-8-8", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-male-9-1", value: "#24b39c"}
   - {name: "sequential-male-9-2", value: "#4bbaa5"}
   - {name: "sequential-male-9-3", value: "#67c0af"}
   - {name: "sequential-male-9-4", value: "#7ec6b8"}
   - {name: "sequential-male-9-5", value: "#94ccc2"}
   - {name: "sequential-male-9-6", value: "#a8d3cb"}
   - {name: "sequential-male-9-7", value: "#bcd8d5"}
   - {name: "sequential-male-9-8", value: "#d0dedf"}
   - {name: "sequential-male-9-9", value: "#e3e4e9"}
```

```table
span: 4
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: 24b39c, e3e4e9
  - Steps: 3
    HEX: 24b39c, 4bbaa5, e3e4e9
  - Steps: 4
    HEX: 24b39c, 4bbaa5, 67c0af, e3e4e9
  - Steps: 5
    HEX: 24b39c, 4bbaa5, 67c0af, 7ec6b8, e3e4e9
  - Steps: 6
    HEX: 24b39c, 4bbaa5, 67c0af, 7ec6b8, 94ccc2, e3e4e9
  - Steps: 7
    HEX: 24b39c, 4bbaa5, 67c0af, 7ec6b8, 94ccc2, a8d3cb, e3e4e9
  - Steps: 8
    HEX: 24b39c, 4bbaa5, 67c0af, 7ec6b8, 94ccc2, a8d3cb, bcd8d5, e3e4e9
  - Steps: 9
    HEX: 24b39c, 4bbaa5, 67c0af, 7ec6b8, 94ccc2, a8d3cb, bcd8d5, d0dedf, e3e4e9
```

[to the top](#table-of-contents)

### Sequential Female
This scale is based on the female color.

```color-palette|horizontal
colors:
   - {name: "sequential-female-2-1", value: "#6c43c0"}
   - {name: "sequential-female-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-female-3-1", value: "#6c43c0"}
   - {name: "sequential-female-3-2", value: "#7e57c6"}
   - {name: "sequential-female-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-female-4-1", value: "#6c43c0"}
   - {name: "sequential-female-4-2", value: "#7e57c6"}
   - {name: "sequential-female-4-3", value: "#8e6acb"}
   - {name: "sequential-female-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-female-5-1", value: "#6c43c0"}
   - {name: "sequential-female-5-2", value: "#7e57c6"}
   - {name: "sequential-female-5-3", value: "#8e6acb"}
   - {name: "sequential-female-5-4", value: "#9d7ed0"}
   - {name: "sequential-female-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-female-6-1", value: "#6c43c0"}
   - {name: "sequential-female-6-2", value: "#7e57c6"}
   - {name: "sequential-female-6-3", value: "#8e6acb"}
   - {name: "sequential-female-6-4", value: "#9d7ed0"}
   - {name: "sequential-female-6-5", value: "#ac92d6"}
   - {name: "sequential-female-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-female-7-1", value: "#6c43c0"}
   - {name: "sequential-female-7-2", value: "#7e57c6"}
   - {name: "sequential-female-7-3", value: "#8e6acb"}
   - {name: "sequential-female-7-4", value: "#9d7ed0"}
   - {name: "sequential-female-7-5", value: "#ac92d6"}
   - {name: "sequential-female-7-6", value: "#baa6db"}
   - {name: "sequential-female-7-7", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-female-8-1", value: "#6c43c0"}
   - {name: "sequential-female-8-2", value: "#7e57c6"}
   - {name: "sequential-female-8-3", value: "#8e6acb"}
   - {name: "sequential-female-8-4", value: "#9d7ed0"}
   - {name: "sequential-female-8-5", value: "#ac92d6"}
   - {name: "sequential-female-8-6", value: "#baa6db"}
   - {name: "sequential-female-8-7", value: "#c8bbe0"}
   - {name: "sequential-female-8-8", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
   - {name: "sequential-female-9-1", value: "#6c43c0"}
   - {name: "sequential-female-9-2", value: "#7e57c6"}
   - {name: "sequential-female-9-3", value: "#8e6acb"}
   - {name: "sequential-female-9-4", value: "#9d7ed0"}
   - {name: "sequential-female-9-5", value: "#ac92d6"}
   - {name: "sequential-female-9-6", value: "#baa6db"}
   - {name: "sequential-female-9-7", value: "#c8bbe0"}
   - {name: "sequential-female-9-8", value: "#d6cfe4"}
   - {name: "sequential-female-9-9", value: "#e3e4e9"}
```

```table
span: 4
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: 6c43c0, e3e4e9
  - Steps: 3
    HEX: 6c43c0, 7e57c6, e3e4e9
  - Steps: 4
    HEX: 6c43c0, 7e57c6, 8e6acb, e3e4e9
  - Steps: 5
    HEX: 6c43c0, 7e57c6, 8e6acb, 9d7ed0, e3e4e9
  - Steps: 6
    HEX: 6c43c0, 7e57c6, 8e6acb, 9d7ed0, ac92d6, e3e4e9
  - Steps: 7
    HEX: 6c43c0, 7e57c6, 8e6acb, 9d7ed0, ac92d6, baa6db, e3e4e9
  - Steps: 8
    HEX: 6c43c0, 7e57c6, 8e6acb, 9d7ed0, ac92d6, baa6db, c8bbe0, e3e4e9
  - Steps: 9
    HEX: 6c43c0, 7e57c6, 8e6acb, 9d7ed0, ac92d6, baa6db, c8bbe0, d6cfe4, e3e4e9
```

[to the top](#table-of-contents)

## Diverging Scales
Diverging (or qualitative) palettes are best when you want to distinguish discrete categories of data that do not have an inherent correlation.The colors of this palette should be applied in sequence strictly as described below. The sequence is carefully curated to maximize contrast between neighboring colors to help with visual differentiation.

* __Diverging-one__ is used in cases we are comparing opposites that can be associated with positive and negative attitudes.
* __Diverging-two__ is used in cases we are comparing opposites, but we would like to avoid negative or positive associations.
* __Diverging-three__ is used in cases we are comparing opposites with negative and/or positive connotation. This scale is comprised of two choice colors, so as not to overlap with any of the primary colors which might already be encoded in the story.
* __Diverging-gender__ is used to display female and male representations. It’s based on our gender colors.

### Diverging Scale 1
This scale should be used in any case we are comparing opposites that can be associated with positive and negative attitudes.

```color-palette|horizontal
colors:
   - {name: "diverging-one-2-1", value: "#c87e5d"}
   - {name: "diverging-one-2-2", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-3-1", value: "#c87e5d"}
   - {name: "diverging-one-3-2", value: "#e3e4e9"}
   - {name: "diverging-one-3-3", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-4-1", value: "#c87e5d"}
   - {name: "diverging-one-4-2", value: "#cd896c"}
   - {name: "diverging-one-4-3", value: "#154768"}
   - {name: "diverging-one-4-4", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-5-1", value: "#c87e5d"}
   - {name: "diverging-one-5-2", value: "#cd896c"}
   - {name: "diverging-one-5-3", value: "#e3e4e9"}
   - {name: "diverging-one-5-4", value: "#154768"}
   - {name: "diverging-one-5-5", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-6-1", value: "#c87e5d"}
   - {name: "diverging-one-6-2", value: "#cd896c"}
   - {name: "diverging-one-6-3", value: "#d1947b"}
   - {name: "diverging-one-6-4", value: "#2a5b7e"}
   - {name: "diverging-one-6-5", value: "#154768"}
   - {name: "diverging-one-6-6", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-7-1", value: "#c87e5d"}
   - {name: "diverging-one-7-2", value: "#cd896c"}
   - {name: "diverging-one-7-3", value: "#d1947b"}
   - {name: "diverging-one-7-4", value: "#e3e4e9"}
   - {name: "diverging-one-7-5", value: "#2a5b7e"}
   - {name: "diverging-one-7-6", value: "#154768"}
   - {name: "diverging-one-7-7", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-8-1", value: "#c87e5d"}
   - {name: "diverging-one-8-2", value: "#cd896c"}
   - {name: "diverging-one-8-3", value: "#d1947b"}
   - {name: "diverging-one-8-4", value: "#d59f8a"}
   - {name: "diverging-one-8-5", value: "#407094"}
   - {name: "diverging-one-8-6", value: "#2a5b7e"}
   - {name: "diverging-one-8-7", value: "#154768"}
   - {name: "diverging-one-8-8", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-9-1", value: "#c87e5d"}
   - {name: "diverging-one-9-2", value: "#cd896c"}
   - {name: "diverging-one-9-3", value: "#d1947b"}
   - {name: "diverging-one-9-4", value: "#d59f8a"}
   - {name: "diverging-one-9-5", value: "#e3e4e9"}
   - {name: "diverging-one-9-6", value: "#407094"}
   - {name: "diverging-one-9-7", value: "#2a5b7e"}
   - {name: "diverging-one-9-8", value: "#154768"}
   - {name: "diverging-one-9-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-10-1", value: "#c87e5d"}
   - {name: "diverging-one-10-2", value: "#cd896c"}
   - {name: "diverging-one-10-3", value: "#d1947b"}
   - {name: "diverging-one-10-4", value: "#d59f8a"}
   - {name: "diverging-one-10-5", value: "#d9ab99"}
   - {name: "diverging-one-10-6", value: "#5786ab"}
   - {name: "diverging-one-10-7", value: "#407094"}
   - {name: "diverging-one-10-8", value: "#2a5b7e"}
   - {name: "diverging-one-10-9", value: "#154768"}
   - {name: "diverging-one-10-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-11-1", value: "#c87e5d"}
   - {name: "diverging-one-11-2", value: "#cd896c"}
   - {name: "diverging-one-11-3", value: "#d1947b"}
   - {name: "diverging-one-11-4", value: "#d59f8a"}
   - {name: "diverging-one-11-5", value: "#d9ab99"}
   - {name: "diverging-one-11-9", value: "#e3e4e9"}
   - {name: "diverging-one-11-6", value: "#5786ab"}
   - {name: "diverging-one-11-7", value: "#407094"}
   - {name: "diverging-one-11-8", value: "#2a5b7e"}
   - {name: "diverging-one-11-9", value: "#154768"}
   - {name: "diverging-one-11-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-12-1", value: "#c87e5d"}
   - {name: "diverging-one-12-2", value: "#cd896c"}
   - {name: "diverging-one-12-3", value: "#d1947b"}
   - {name: "diverging-one-12-4", value: "#d59f8a"}
   - {name: "diverging-one-12-5", value: "#d9ab99"}
   - {name: "diverging-one-12-9", value: "#dcb6a9"}
   - {name: "diverging-one-12-9", value: "#6d9cc3"}
   - {name: "diverging-one-12-6", value: "#5786ab"}
   - {name: "diverging-one-12-7", value: "#407094"}
   - {name: "diverging-one-12-8", value: "#2a5b7e"}
   - {name: "diverging-one-12-9", value: "#154768"}
   - {name: "diverging-one-12-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-13-1", value: "#c87e5d"}
   - {name: "diverging-one-13-2", value: "#cd896c"}
   - {name: "diverging-one-13-3", value: "#d1947b"}
   - {name: "diverging-one-13-4", value: "#d59f8a"}
   - {name: "diverging-one-13-5", value: "#d9ab99"}
   - {name: "diverging-one-13-9", value: "#dcb6a9"}
   - {name: "diverging-one-13-9", value: "#e3e4e9"}
   - {name: "diverging-one-13-9", value: "#6d9cc3"}
   - {name: "diverging-one-13-6", value: "#5786ab"}
   - {name: "diverging-one-13-7", value: "#407094"}
   - {name: "diverging-one-13-8", value: "#2a5b7e"}
   - {name: "diverging-one-13-9", value: "#154768"}
   - {name: "diverging-one-13-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-14-1", value: "#c87e5d"}
   - {name: "diverging-one-14-2", value: "#cd896c"}
   - {name: "diverging-one-14-3", value: "#d1947b"}
   - {name: "diverging-one-14-4", value: "#d59f8a"}
   - {name: "diverging-one-14-5", value: "#d9ab99"}
   - {name: "diverging-one-14-9", value: "#dcb6a9"}
   - {name: "diverging-one-14-9", value: "#dec1b8"}
   - {name: "diverging-one-14-9", value: "#85b3da"}
   - {name: "diverging-one-14-9", value: "#6d9cc3"}
   - {name: "diverging-one-14-6", value: "#5786ab"}
   - {name: "diverging-one-14-7", value: "#407094"}
   - {name: "diverging-one-14-8", value: "#2a5b7e"}
   - {name: "diverging-one-14-9", value: "#154768"}
   - {name: "diverging-one-14-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-15-1", value: "#c87e5d"}
   - {name: "diverging-one-15-2", value: "#cd896c"}
   - {name: "diverging-one-15-3", value: "#d1947b"}
   - {name: "diverging-one-15-4", value: "#d59f8a"}
   - {name: "diverging-one-15-5", value: "#d9ab99"}
   - {name: "diverging-one-15-9", value: "#dcb6a9"}
   - {name: "diverging-one-15-9", value: "#dec1b8"}
   - {name: "diverging-one-15-9", value: "#e3e4e9"}
   - {name: "diverging-one-15-9", value: "#85b3da"}
   - {name: "diverging-one-15-9", value: "#6d9cc3"}
   - {name: "diverging-one-15-6", value: "#5786ab"}
   - {name: "diverging-one-15-7", value: "#407094"}
   - {name: "diverging-one-15-8", value: "#2a5b7e"}
   - {name: "diverging-one-15-9", value: "#154768"}
   - {name: "diverging-one-15-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-16-1", value: "#c87e5d"}
   - {name: "diverging-one-16-2", value: "#cd896c"}
   - {name: "diverging-one-16-3", value: "#d1947b"}
   - {name: "diverging-one-16-4", value: "#d59f8a"}
   - {name: "diverging-one-16-5", value: "#d9ab99"}
   - {name: "diverging-one-16-9", value: "#dcb6a9"}
   - {name: "diverging-one-16-9", value: "#dec1b8"}
   - {name: "diverging-one-16-9", value: "#e0cdc8"}
   - {name: "diverging-one-16-9", value: "#9ccaf3"}
   - {name: "diverging-one-16-9", value: "#85b3da"}
   - {name: "diverging-one-16-9", value: "#6d9cc3"}
   - {name: "diverging-one-16-6", value: "#5786ab"}
   - {name: "diverging-one-16-7", value: "#407094"}
   - {name: "diverging-one-16-8", value: "#2a5b7e"}
   - {name: "diverging-one-16-9", value: "#154768"}
   - {name: "diverging-one-16-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-17-1", value: "#c87e5d"}
   - {name: "diverging-one-17-2", value: "#cd896c"}
   - {name: "diverging-one-17-3", value: "#d1947b"}
   - {name: "diverging-one-17-4", value: "#d59f8a"}
   - {name: "diverging-one-17-5", value: "#d9ab99"}
   - {name: "diverging-one-17-9", value: "#dcb6a9"}
   - {name: "diverging-one-17-9", value: "#dec1b8"}
   - {name: "diverging-one-17-9", value: "#e0cdc8"}
   - {name: "diverging-one-17-9", value: "#e3e4e9"}
   - {name: "diverging-one-17-9", value: "#9ccaf3"}
   - {name: "diverging-one-17-9", value: "#85b3da"}
   - {name: "diverging-one-17-9", value: "#6d9cc3"}
   - {name: "diverging-one-17-6", value: "#5786ab"}
   - {name: "diverging-one-17-7", value: "#407094"}
   - {name: "diverging-one-17-8", value: "#2a5b7e"}
   - {name: "diverging-one-17-9", value: "#154768"}
   - {name: "diverging-one-17-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-18-1", value: "#c87e5d"}
   - {name: "diverging-one-18-2", value: "#cd896c"}
   - {name: "diverging-one-18-3", value: "#d1947b"}
   - {name: "diverging-one-18-4", value: "#d59f8a"}
   - {name: "diverging-one-18-5", value: "#d9ab99"}
   - {name: "diverging-one-18-9", value: "#dcb6a9"}
   - {name: "diverging-one-18-9", value: "#dec1b8"}
   - {name: "diverging-one-18-9", value: "#e0cdc8"}
   - {name: "diverging-one-18-9", value: "#e2d8d9"}
   - {name: "diverging-one-18-9", value: "#c8e0f6"}
   - {name: "diverging-one-18-9", value: "#9ccaf3"}
   - {name: "diverging-one-18-9", value: "#85b3da"}
   - {name: "diverging-one-18-9", value: "#6d9cc3"}
   - {name: "diverging-one-18-6", value: "#5786ab"}
   - {name: "diverging-one-18-7", value: "#407094"}
   - {name: "diverging-one-18-8", value: "#2a5b7e"}
   - {name: "diverging-one-18-9", value: "#154768"}
   - {name: "diverging-one-18-9", value: "#003353"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-one-19-1", value: "#c87e5d"}
   - {name: "diverging-one-19-2", value: "#cd896c"}
   - {name: "diverging-one-19-3", value: "#d1947b"}
   - {name: "diverging-one-19-4", value: "#d59f8a"}
   - {name: "diverging-one-19-5", value: "#d9ab99"}
   - {name: "diverging-one-19-9", value: "#dcb6a9"}
   - {name: "diverging-one-19-9", value: "#dec1b8"}
   - {name: "diverging-one-19-9", value: "#e0cdc8"}
   - {name: "diverging-one-19-9", value: "#e2d8d9"}
   - {name: "diverging-one-19-9", value: "#e3e4e9"}
   - {name: "diverging-one-19-9", value: "#c8e0f6"}
   - {name: "diverging-one-19-9", value: "#9ccaf3"}
   - {name: "diverging-one-19-9", value: "#85b3da"}
   - {name: "diverging-one-19-9", value: "#6d9cc3"}
   - {name: "diverging-one-19-6", value: "#5786ab"}
   - {name: "diverging-one-19-7", value: "#407094"}
   - {name: "diverging-one-19-8", value: "#2a5b7e"}
   - {name: "diverging-one-19-9", value: "#154768"}
   - {name: "diverging-one-19-9", value: "#003353"}
```

```table
span: 7
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: c87e5d, 003353
  - Steps: 3
    HEX: c87e5d, e3e4e9, 003353
  - Steps: 4
    HEX: c87e5d, cd896c, 154768, 003353
  - Steps: 5
    HEX: c87e5d, cd896c, e3e4e9, 154768, 003353
  - Steps: 6
    HEX: c87e5d, cd896c, d59f8a, 2a5b7e, 154768, 003353
  - Steps: 7
    HEX: c87e5d, cd896c, d59f8a, e3e4e9, 2a5b7e, 154768, 003353
  - Steps: 8
    HEX: c87e5d, cd896c, d59f8a, d59f8a, 407094, 2a5b7e, 154768, 003353
  - Steps: 9
    HEX: c87e5d, cd896c, d59f8a, d59f8a, e3e4e9, 407094, 2a5b7e, 154768, 003353
  - Steps: 10
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 11
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, e3e4e9, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 12
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 13
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, e3e4e9, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 14
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, dec1b8, 85b3da, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 15
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, dec1b8, e3e4e9, 85b3da, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 16
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, dec1b8, e0cdc8, 9ccaf3, 85b3da, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 17
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, dec1b8, e0cdc8, e3e4e9, 9ccaf3, 85b3da, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 18
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, dec1b8, e0cdc8, e2d8d9, c8e0f6, 9ccaf3, 85b3da, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
  - Steps: 19
    HEX: c87e5d, cd896c, d59f8a, d59f8a, d9ab99, dcb6a9, dec1b8, e0cdc8, e2d8d9, e3e4e9, c8e0f6, 9ccaf3, 85b3da, 6d9cc3, 5786ab, 407094, 2a5b7e, 154768, 003353
```

[to the top](#table-of-contents)

### Diverging Scale 2
This scale is used in cases we are comparing opposites, but we would like to avoid negative or positive associations.

```color-palette|horizontal
colors:
   - {name: "diverging-two-2-1", value: "#1c5b5a"}
   - {name: "diverging-two-2-2", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-3-1", value: "#1c5b5a"}
   - {name: "diverging-two-3-2", value: "#e3e4e9"}
   - {name: "diverging-two-3-3", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-4-1", value: "#1c5b5a"}
   - {name: "diverging-two-4-2", value: "#356969"}
   - {name: "diverging-two-4-3", value: "#693700"}
   - {name: "diverging-two-4-4", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-5-1", value: "#1c5b5a"}
   - {name: "diverging-two-5-2", value: "#356969"}
   - {name: "diverging-two-5-3", value: "#e3e4e9"}
   - {name: "diverging-two-5-4", value: "#693700"}
   - {name: "diverging-two-5-5", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-6-1", value: "#1c5b5a"}
   - {name: "diverging-two-6-2", value: "#356969"}
   - {name: "diverging-two-6-3", value: "#4c7878"}
   - {name: "diverging-two-6-4", value: "#804b00"}
   - {name: "diverging-two-6-5", value: "#693700"}
   - {name: "diverging-two-6-6", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-7-1", value: "#1c5b5a"}
   - {name: "diverging-two-7-2", value: "#356969"}
   - {name: "diverging-two-7-3", value: "#4c7878"}
   - {name: "diverging-two-7-4", value: "#e3e4e9"}
   - {name: "diverging-two-7-5", value: "#804b00"}
   - {name: "diverging-two-7-6", value: "#693700"}
   - {name: "diverging-two-7-7", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-8-1", value: "#1c5b5a"}
   - {name: "diverging-two-8-2", value: "#356969"}
   - {name: "diverging-two-8-3", value: "#4c7878"}
   - {name: "diverging-two-8-4", value: "#618787"}
   - {name: "diverging-two-8-5", value: "#986000"}
   - {name: "diverging-two-8-6", value: "#804b00"}
   - {name: "diverging-two-8-7", value: "#693700"}
   - {name: "diverging-two-8-8", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-9-1", value: "#1c5b5a"}
   - {name: "diverging-two-9-2", value: "#356969"}
   - {name: "diverging-two-9-3", value: "#4c7878"}
   - {name: "diverging-two-9-4", value: "#618787"}
   - {name: "diverging-two-9-5", value: "#e3e4e9"}
   - {name: "diverging-two-9-6", value: "#986000"}
   - {name: "diverging-two-9-7", value: "#804b00"}
   - {name: "diverging-two-9-8", value: "#693700"}
   - {name: "diverging-two-9-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-10-1", value: "#1c5b5a"}
   - {name: "diverging-two-10-2", value: "#356969"}
   - {name: "diverging-two-10-3", value: "#4c7878"}
   - {name: "diverging-two-10-4", value: "#618787"}
   - {name: "diverging-two-10-5", value: "#769697"}
   - {name: "diverging-two-10-6", value: "#b07506"}
   - {name: "diverging-two-10-7", value: "#986000"}
   - {name: "diverging-two-10-8", value: "#804b00"}
   - {name: "diverging-two-10-9", value: "#693700"}
   - {name: "diverging-two-10-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-11-1", value: "#1c5b5a"}
   - {name: "diverging-two-11-2", value: "#356969"}
   - {name: "diverging-two-11-3", value: "#4c7878"}
   - {name: "diverging-two-11-4", value: "#618787"}
   - {name: "diverging-two-11-5", value: "#769697"}
   - {name: "diverging-two-11-9", value: "#e3e4e9"}
   - {name: "diverging-two-11-6", value: "#b07506"}
   - {name: "diverging-two-11-7", value: "#986000"}
   - {name: "diverging-two-11-8", value: "#804b00"}
   - {name: "diverging-two-11-9", value: "#693700"}
   - {name: "diverging-two-11-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-12-1", value: "#1c5b5a"}
   - {name: "diverging-two-12-2", value: "#356969"}
   - {name: "diverging-two-12-3", value: "#4c7878"}
   - {name: "diverging-two-12-4", value: "#618787"}
   - {name: "diverging-two-12-5", value: "#769697"}
   - {name: "diverging-two-12-9", value: "#8ba5a6"}
   - {name: "diverging-two-12-9", value: "#c98c12"}
   - {name: "diverging-two-12-6", value: "#b07506"}
   - {name: "diverging-two-12-7", value: "#986000"}
   - {name: "diverging-two-12-8", value: "#804b00"}
   - {name: "diverging-two-12-9", value: "#693700"}
   - {name: "diverging-two-12-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-13-1", value: "#1c5b5a"}
   - {name: "diverging-two-13-2", value: "#356969"}
   - {name: "diverging-two-13-3", value: "#4c7878"}
   - {name: "diverging-two-13-4", value: "#618787"}
   - {name: "diverging-two-13-5", value: "#769697"}
   - {name: "diverging-two-13-9", value: "#8ba5a6"}
   - {name: "diverging-two-13-9", value: "#e3e4e9"}
   - {name: "diverging-two-13-9", value: "#c98c12"}
   - {name: "diverging-two-13-6", value: "#b07506"}
   - {name: "diverging-two-13-7", value: "#986000"}
   - {name: "diverging-two-13-8", value: "#804b00"}
   - {name: "diverging-two-13-9", value: "#693700"}
   - {name: "diverging-two-13-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-14-1", value: "#1c5b5a"}
   - {name: "diverging-two-14-2", value: "#356969"}
   - {name: "diverging-two-14-3", value: "#4c7878"}
   - {name: "diverging-two-14-4", value: "#618787"}
   - {name: "diverging-two-14-5", value: "#769697"}
   - {name: "diverging-two-14-9", value: "#8ba5a6"}
   - {name: "diverging-two-14-9", value: "#a1b4b7"}
   - {name: "diverging-two-14-9", value: "#e3a21f"}
   - {name: "diverging-two-14-9", value: "#c98c12"}
   - {name: "diverging-two-14-6", value: "#b07506"}
   - {name: "diverging-two-14-7", value: "#986000"}
   - {name: "diverging-two-14-8", value: "#804b00"}
   - {name: "diverging-two-14-9", value: "#693700"}
   - {name: "diverging-two-14-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-15-1", value: "#1c5b5a"}
   - {name: "diverging-two-15-2", value: "#356969"}
   - {name: "diverging-two-15-3", value: "#4c7878"}
   - {name: "diverging-two-15-4", value: "#618787"}
   - {name: "diverging-two-15-5", value: "#769697"}
   - {name: "diverging-two-15-9", value: "#8ba5a6"}
   - {name: "diverging-two-15-9", value: "#a1b4b7"}
   - {name: "diverging-two-15-9", value: "#e3e4e9"}
   - {name: "diverging-two-15-9", value: "#e3a21f"}
   - {name: "diverging-two-15-9", value: "#c98c12"}
   - {name: "diverging-two-15-6", value: "#b07506"}
   - {name: "diverging-two-15-7", value: "#986000"}
   - {name: "diverging-two-15-8", value: "#804b00"}
   - {name: "diverging-two-15-9", value: "#693700"}
   - {name: "diverging-two-15-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-16-1", value: "#1c5b5a"}
   - {name: "diverging-two-16-2", value: "#356969"}
   - {name: "diverging-two-16-3", value: "#4c7878"}
   - {name: "diverging-two-16-4", value: "#618787"}
   - {name: "diverging-two-16-5", value: "#769697"}
   - {name: "diverging-two-16-9", value: "#8ba5a6"}
   - {name: "diverging-two-16-9", value: "#a1b4b7"}
   - {name: "diverging-two-16-9", value: "#b7c4c7"}
   - {name: "diverging-two-16-9", value: "#fdb92d"}
   - {name: "diverging-two-16-9", value: "#e3a21f"}
   - {name: "diverging-two-16-9", value: "#c98c12"}
   - {name: "diverging-two-16-6", value: "#b07506"}
   - {name: "diverging-two-16-7", value: "#986000"}
   - {name: "diverging-two-16-8", value: "#804b00"}
   - {name: "diverging-two-16-9", value: "#693700"}
   - {name: "diverging-two-16-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-17-1", value: "#1c5b5a"}
   - {name: "diverging-two-17-2", value: "#356969"}
   - {name: "diverging-two-17-3", value: "#4c7878"}
   - {name: "diverging-two-17-4", value: "#618787"}
   - {name: "diverging-two-17-5", value: "#769697"}
   - {name: "diverging-two-17-9", value: "#8ba5a6"}
   - {name: "diverging-two-17-9", value: "#a1b4b7"}
   - {name: "diverging-two-17-9", value: "#b7c4c7"}
   - {name: "diverging-two-17-9", value: "#e3e4e9"}
   - {name: "diverging-two-17-9", value: "#fdb92d"}
   - {name: "diverging-two-17-9", value: "#e3a21f"}
   - {name: "diverging-two-17-9", value: "#c98c12"}
   - {name: "diverging-two-17-6", value: "#b07506"}
   - {name: "diverging-two-17-7", value: "#986000"}
   - {name: "diverging-two-17-8", value: "#804b00"}
   - {name: "diverging-two-17-9", value: "#693700"}
   - {name: "diverging-two-17-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-18-1", value: "#1c5b5a"}
   - {name: "diverging-two-18-2", value: "#356969"}
   - {name: "diverging-two-18-3", value: "#4c7878"}
   - {name: "diverging-two-18-4", value: "#618787"}
   - {name: "diverging-two-18-5", value: "#769697"}
   - {name: "diverging-two-18-9", value: "#8ba5a6"}
   - {name: "diverging-two-18-9", value: "#a1b4b7"}
   - {name: "diverging-two-18-9", value: "#b7c4c7"}
   - {name: "diverging-two-18-9", value: "#cdd4d8"}
   - {name: "diverging-two-18-9", value: "#fad995"}
   - {name: "diverging-two-18-9", value: "#fdb92d"}
   - {name: "diverging-two-18-9", value: "#e3a21f"}
   - {name: "diverging-two-18-9", value: "#c98c12"}
   - {name: "diverging-two-18-6", value: "#b07506"}
   - {name: "diverging-two-18-7", value: "#986000"}
   - {name: "diverging-two-18-8", value: "#804b00"}
   - {name: "diverging-two-18-9", value: "#693700"}
   - {name: "diverging-two-18-9", value: "#532300"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-two-19-1", value: "#1c5b5a"}
   - {name: "diverging-two-19-2", value: "#356969"}
   - {name: "diverging-two-19-3", value: "#4c7878"}
   - {name: "diverging-two-19-4", value: "#618787"}
   - {name: "diverging-two-19-5", value: "#769697"}
   - {name: "diverging-two-19-9", value: "#8ba5a6"}
   - {name: "diverging-two-19-9", value: "#a1b4b7"}
   - {name: "diverging-two-19-9", value: "#b7c4c7"}
   - {name: "diverging-two-19-9", value: "#cdd4d8"}
   - {name: "diverging-two-19-9", value: "#e3e4e9"}
   - {name: "diverging-two-19-9", value: "#fad995"}
   - {name: "diverging-two-19-9", value: "#fdb92d"}
   - {name: "diverging-two-19-9", value: "#e3a21f"}
   - {name: "diverging-two-19-9", value: "#c98c12"}
   - {name: "diverging-two-19-6", value: "#b07506"}
   - {name: "diverging-two-19-7", value: "#986000"}
   - {name: "diverging-two-19-8", value: "#804b00"}
   - {name: "diverging-two-19-9", value: "#693700"}
   - {name: "diverging-two-19-9", value: "#532300"}
```

```table
span: 7
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: 1c5b5a, 532300
  - Steps: 3
    HEX: 1c5b5a, b7c4c7, 532300
  - Steps: 4
    HEX: 1c5b5a, 356969, 693700, 532300
  - Steps: 5
    HEX: 1c5b5a, 356969, b7c4c7, 693700, 532300
  - Steps: 6
    HEX: 1c5b5a, 356969, 618787, 804b00, 693700, 532300
  - Steps: 7
    HEX: 1c5b5a, 356969, 618787, b7c4c7, 804b00, 693700, 532300
  - Steps: 8
    HEX: 1c5b5a, 356969, 618787, 618787, 986000, 804b00, 693700, 532300
  - Steps: 9
    HEX: 1c5b5a, 356969, 618787, 618787, b7c4c7, 986000, 804b00, 693700, 532300
  - Steps: 10
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, b07506, 986000, 804b00, 693700, 532300
  - Steps: 11
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, b7c4c7, b07506, 986000, 804b00, 693700, 532300
  - Steps: 12
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, c98c12, b07506, 986000, 804b00, 693700, 532300
  - Steps: 13
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, b7c4c7, c98c12, b07506, 986000, 804b00, 693700, 532300
  - Steps: 14
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, a1b4b7, e3a21f, c98c12, b07506, 986000, 804b00, 693700, 532300
  - Steps: 15
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, a1b4b7, b7c4c7, e3a21f, c98c12, b07506, 986000, 804b00, 693700, 532300
  - Steps: 16
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, a1b4b7, b7c4c7, fdb92d, e3a21f, c98c12, b07506, 986000, 804b00, 693700, 532300
  - Steps: 17
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, a1b4b7, b7c4c7, b7c4c7, fdb92d, e3a21f, c98c12, b07506, 986000, 804b00, 693700, 532300
  - Steps: 18
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, a1b4b7, b7c4c7, cdd4d8, fad995, fdb92d, e3a21f, c98c12, b07506, 986000, 804b00, 693700, 532300
  - Steps: 19
    HEX: 1c5b5a, 356969, 618787, 618787, 769697, 8ba5a6, a1b4b7, b7c4c7, cdd4d8, b7c4c7, fad995, fdb92d, e3a21f, c98c12, b07506, 986000, 804b00, 693700, 532300
```

[to the top](#table-of-contents)

### Diverging Scale 3
This scale is used in cases we are comparing opposites with negative and/or positive connotation.

```color-palette|horizontal
colors:
   - {name: "diverging-three-2-1", value: "#d40b3d"}
   - {name: "diverging-three-2-2", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-3-1", value: "#d40b3d"}
   - {name: "diverging-three-3-2", value: "#e3e4e9"}
   - {name: "diverging-three-3-3", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-4-1", value: "#d40b3d"}
   - {name: "diverging-three-4-2", value: "#da3a4e"}
   - {name: "diverging-three-4-3", value: "#0c43a2"}
   - {name: "diverging-three-4-4", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-5-1", value: "#d40b3d"}
   - {name: "diverging-three-5-2", value: "#da3a4e"}
   - {name: "diverging-three-5-3", value: "#e3e4e9"}
   - {name: "diverging-three-5-4", value: "#0c43a2"}
   - {name: "diverging-three-5-5", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-6-1", value: "#d40b3d"}
   - {name: "diverging-three-6-2", value: "#da3a4e"}
   - {name: "diverging-three-6-3", value: "#df5560"}
   - {name: "diverging-three-6-4", value: "#1958bb"}
   - {name: "diverging-three-6-5", value: "#0c43a2"}
   - {name: "diverging-three-6-6", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-7-1", value: "#d40b3d"}
   - {name: "diverging-three-7-2", value: "#da3a4e"}
   - {name: "diverging-three-7-3", value: "#df5560"}
   - {name: "diverging-three-7-4", value: "#e3e4e9"}
   - {name: "diverging-three-7-5", value: "#1958bb"}
   - {name: "diverging-three-7-6", value: "#0c43a2"}
   - {name: "diverging-three-7-7", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-8-1", value: "#d40b3d"}
   - {name: "diverging-three-8-2", value: "#da3a4e"}
   - {name: "diverging-three-8-3", value: "#df5560"}
   - {name: "diverging-three-8-4", value: "#e46c72"}
   - {name: "diverging-three-8-5", value: "#266ed6"}
   - {name: "diverging-three-8-6", value: "#1958bb"}
   - {name: "diverging-three-8-7", value: "#0c43a2"}
   - {name: "diverging-three-8-8", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-9-1", value: "#d40b3d"}
   - {name: "diverging-three-9-2", value: "#da3a4e"}
   - {name: "diverging-three-9-3", value: "#df5560"}
   - {name: "diverging-three-9-4", value: "#e46c72"}
   - {name: "diverging-three-9-5", value: "#e3e4e9"}
   - {name: "diverging-three-9-6", value: "#266ed6"}
   - {name: "diverging-three-9-7", value: "#1958bb"}
   - {name: "diverging-three-9-8", value: "#0c43a2"}
   - {name: "diverging-three-9-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-10-1", value: "#d40b3d"}
   - {name: "diverging-three-10-2", value: "#da3a4e"}
   - {name: "diverging-three-10-3", value: "#df5560"}
   - {name: "diverging-three-10-4", value: "#e46c72"}
   - {name: "diverging-three-10-5", value: "#e78184"}
   - {name: "diverging-three-10-6", value: "#4085e5"}
   - {name: "diverging-three-10-7", value: "#266ed6"}
   - {name: "diverging-three-10-8", value: "#1958bb"}
   - {name: "diverging-three-10-9", value: "#0c43a2"}
   - {name: "diverging-three-10-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-11-1", value: "#d40b3d"}
   - {name: "diverging-three-11-2", value: "#da3a4e"}
   - {name: "diverging-three-11-3", value: "#df5560"}
   - {name: "diverging-three-11-4", value: "#e46c72"}
   - {name: "diverging-three-11-5", value: "#e78184"}
   - {name: "diverging-three-11-9", value: "#e3e4e9"}
   - {name: "diverging-three-11-6", value: "#4085e5"}
   - {name: "diverging-three-11-7", value: "#266ed6"}
   - {name: "diverging-three-11-8", value: "#1958bb"}
   - {name: "diverging-three-11-9", value: "#0c43a2"}
   - {name: "diverging-three-11-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-12-1", value: "#d40b3d"}
   - {name: "diverging-three-12-2", value: "#da3a4e"}
   - {name: "diverging-three-12-3", value: "#df5560"}
   - {name: "diverging-three-12-4", value: "#e46c72"}
   - {name: "diverging-three-12-5", value: "#e78184"}
   - {name: "diverging-three-12-9", value: "#e99698"}
   - {name: "diverging-three-12-9", value: "#609dee"}
   - {name: "diverging-three-12-6", value: "#4085e5"}
   - {name: "diverging-three-12-7", value: "#266ed6"}
   - {name: "diverging-three-12-8", value: "#1958bb"}
   - {name: "diverging-three-12-9", value: "#0c43a2"}
   - {name: "diverging-three-12-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-13-1", value: "#d40b3d"}
   - {name: "diverging-three-13-2", value: "#da3a4e"}
   - {name: "diverging-three-13-3", value: "#df5560"}
   - {name: "diverging-three-13-4", value: "#e46c72"}
   - {name: "diverging-three-13-5", value: "#e78184"}
   - {name: "diverging-three-13-9", value: "#e99698"}
   - {name: "diverging-three-13-9", value: "#e3e4e9"}
   - {name: "diverging-three-13-9", value: "#609dee"}
   - {name: "diverging-three-13-6", value: "#4085e5"}
   - {name: "diverging-three-13-7", value: "#266ed6"}
   - {name: "diverging-three-13-8", value: "#1958bb"}
   - {name: "diverging-three-13-9", value: "#0c43a2"}
   - {name: "diverging-three-13-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-14-1", value: "#d40b3d"}
   - {name: "diverging-three-14-2", value: "#da3a4e"}
   - {name: "diverging-three-14-3", value: "#df5560"}
   - {name: "diverging-three-14-4", value: "#e46c72"}
   - {name: "diverging-three-14-5", value: "#e78184"}
   - {name: "diverging-three-14-9", value: "#e99698"}
   - {name: "diverging-three-14-9", value: "#eaaaab"}
   - {name: "diverging-three-14-9", value: "#7eb4f8"}
   - {name: "diverging-three-14-9", value: "#609dee"}
   - {name: "diverging-three-14-6", value: "#4085e5"}
   - {name: "diverging-three-14-7", value: "#266ed6"}
   - {name: "diverging-three-14-8", value: "#1958bb"}
   - {name: "diverging-three-14-9", value: "#0c43a2"}
   - {name: "diverging-three-14-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-15-1", value: "#d40b3d"}
   - {name: "diverging-three-15-2", value: "#da3a4e"}
   - {name: "diverging-three-15-3", value: "#df5560"}
   - {name: "diverging-three-15-4", value: "#e46c72"}
   - {name: "diverging-three-15-5", value: "#e78184"}
   - {name: "diverging-three-15-9", value: "#e99698"}
   - {name: "diverging-three-15-9", value: "#eaaaab"}
   - {name: "diverging-three-15-9", value: "#e3e4e9"}
   - {name: "diverging-three-15-9", value: "#7eb4f8"}
   - {name: "diverging-three-15-9", value: "#609dee"}
   - {name: "diverging-three-15-6", value: "#4085e5"}
   - {name: "diverging-three-15-7", value: "#266ed6"}
   - {name: "diverging-three-15-8", value: "#1958bb"}
   - {name: "diverging-three-15-9", value: "#0c43a2"}
   - {name: "diverging-three-15-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-16-1", value: "#d40b3d"}
   - {name: "diverging-three-16-2", value: "#da3a4e"}
   - {name: "diverging-three-16-3", value: "#df5560"}
   - {name: "diverging-three-16-4", value: "#e46c72"}
   - {name: "diverging-three-16-5", value: "#e78184"}
   - {name: "diverging-three-16-9", value: "#e99698"}
   - {name: "diverging-three-16-9", value: "#eaaaab"}
   - {name: "diverging-three-16-9", value: "#e9bdc0"}
   - {name: "diverging-three-16-9", value: "#a0cafe"}
   - {name: "diverging-three-16-9", value: "#7eb4f8"}
   - {name: "diverging-three-16-9", value: "#609dee"}
   - {name: "diverging-three-16-6", value: "#4085e5"}
   - {name: "diverging-three-16-7", value: "#266ed6"}
   - {name: "diverging-three-16-8", value: "#1958bb"}
   - {name: "diverging-three-16-9", value: "#0c43a2"}
   - {name: "diverging-three-16-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-17-1", value: "#d40b3d"}
   - {name: "diverging-three-17-2", value: "#da3a4e"}
   - {name: "diverging-three-17-3", value: "#df5560"}
   - {name: "diverging-three-17-4", value: "#e46c72"}
   - {name: "diverging-three-17-5", value: "#e78184"}
   - {name: "diverging-three-17-9", value: "#e99698"}
   - {name: "diverging-three-17-9", value: "#eaaaab"}
   - {name: "diverging-three-17-9", value: "#e9bdc0"}
   - {name: "diverging-three-17-9", value: "#e3e4e9"}
   - {name: "diverging-three-17-9", value: "#a0cafe"}
   - {name: "diverging-three-17-9", value: "#7eb4f8"}
   - {name: "diverging-three-17-9", value: "#609dee"}
   - {name: "diverging-three-17-6", value: "#4085e5"}
   - {name: "diverging-three-17-7", value: "#266ed6"}
   - {name: "diverging-three-17-8", value: "#1958bb"}
   - {name: "diverging-three-17-9", value: "#0c43a2"}
   - {name: "diverging-three-17-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-18-1", value: "#d40b3d"}
   - {name: "diverging-three-18-2", value: "#da3a4e"}
   - {name: "diverging-three-18-3", value: "#df5560"}
   - {name: "diverging-three-18-4", value: "#e46c72"}
   - {name: "diverging-three-18-5", value: "#e78184"}
   - {name: "diverging-three-18-9", value: "#e99698"}
   - {name: "diverging-three-18-9", value: "#eaaaab"}
   - {name: "diverging-three-18-9", value: "#e9bdc0"}
   - {name: "diverging-three-18-9", value: "#e7d1d4"}
   - {name: "diverging-three-18-9", value: "#cbe0f9"}
   - {name: "diverging-three-18-9", value: "#a0cafe"}
   - {name: "diverging-three-18-9", value: "#7eb4f8"}
   - {name: "diverging-three-18-9", value: "#609dee"}
   - {name: "diverging-three-18-6", value: "#4085e5"}
   - {name: "diverging-three-18-7", value: "#266ed6"}
   - {name: "diverging-three-18-8", value: "#1958bb"}
   - {name: "diverging-three-18-9", value: "#0c43a2"}
   - {name: "diverging-three-18-9", value: "#002f89"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-three-19-1", value: "#d40b3d"}
   - {name: "diverging-three-19-2", value: "#da3a4e"}
   - {name: "diverging-three-19-3", value: "#df5560"}
   - {name: "diverging-three-19-4", value: "#e46c72"}
   - {name: "diverging-three-19-5", value: "#e78184"}
   - {name: "diverging-three-19-9", value: "#e99698"}
   - {name: "diverging-three-19-9", value: "#eaaaab"}
   - {name: "diverging-three-19-9", value: "#e9bdc0"}
   - {name: "diverging-three-19-9", value: "#e7d1d4"}
   - {name: "diverging-three-19-9", value: "#e3e4e9"}
   - {name: "diverging-three-19-9", value: "#cbe0f9"}
   - {name: "diverging-three-19-9", value: "#a0cafe"}
   - {name: "diverging-three-19-9", value: "#7eb4f8"}
   - {name: "diverging-three-19-9", value: "#609dee"}
   - {name: "diverging-three-19-6", value: "#4085e5"}
   - {name: "diverging-three-19-7", value: "#266ed6"}
   - {name: "diverging-three-19-8", value: "#1958bb"}
   - {name: "diverging-three-19-9", value: "#0c43a2"}
   - {name: "diverging-three-19-9", value: "#002f89"}
```

```table
span: 7
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: d40b3d, 002f89
  - Steps: 3
    HEX: d40b3d, e3e4e9, 002f89
  - Steps: 4
    HEX: d40b3d, da3a4e, 0c43a2, 002f89
  - Steps: 5
    HEX: d40b3d, da3a4e, e3e4e9, 0c43a2, 002f89
  - Steps: 6
    HEX: d40b3d, da3a4e, e46c72, 1958bb, 0c43a2, 002f89
  - Steps: 7
    HEX: d40b3d, da3a4e, e46c72, e3e4e9, 1958bb, 0c43a2, 002f89
  - Steps: 8
    HEX: d40b3d, da3a4e, e46c72, e46c72, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 9
    HEX: d40b3d, da3a4e, e46c72, e46c72, e3e4e9, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 10
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 11
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e3e4e9, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 12
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 13
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, e3e4e9, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 14
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, eaaaab, 7eb4f8, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 15
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, eaaaab, e3e4e9, 7eb4f8, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 16
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, eaaaab, e9bdc0, a0cafe, 7eb4f8, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 17
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, eaaaab, e9bdc0, e3e4e9, a0cafe, 7eb4f8, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 18
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, eaaaab, e9bdc0, e7d1d4, cbe0f9, a0cafe, 7eb4f8, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
  - Steps: 19
    HEX: d40b3d, da3a4e, e46c72, e46c72, e78184, e99698, eaaaab, e9bdc0, e7d1d4, e3e4e9, cbe0f9, a0cafe, 7eb4f8, 609dee, 4085e5, 266ed6, 1958bb, 0c43a2, 002f89
```

[to the top](#table-of-contents)

### Diverging Gender
This scale is used to display female and male representations. It’s based on our gender colors.

```color-palette|horizontal
colors:
   - {name: "diverging-gender-2-1", value: "#24b39c"}
   - {name: "diverging-gender-2-2", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-3-1", value: "#24b39c"}
   - {name: "diverging-gender-3-2", value: "#e3e4e9"}
   - {name: "diverging-gender-3-3", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-4-1", value: "#24b39c"}
   - {name: "diverging-gender-4-2", value: "#48b9a4"}
   - {name: "diverging-gender-4-3", value: "#4926a0"}
   - {name: "diverging-gender-4-4", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-5-1", value: "#24b39c"}
   - {name: "diverging-gender-5-2", value: "#48b9a4"}
   - {name: "diverging-gender-5-3", value: "#e3e4e9"}
   - {name: "diverging-gender-5-4", value: "#4926a0"}
   - {name: "diverging-gender-5-5", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-6-1", value: "#24b39c"}
   - {name: "diverging-gender-6-2", value: "#48b9a4"}
   - {name: "diverging-gender-6-3", value: "#61bfad"}
   - {name: "diverging-gender-6-4", value: "#623bb8"}
   - {name: "diverging-gender-6-5", value: "#4926a0"}
   - {name: "diverging-gender-6-6", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-7-1", value: "#24b39c"}
   - {name: "diverging-gender-7-2", value: "#48b9a4"}
   - {name: "diverging-gender-7-3", value: "#61bfad"}
   - {name: "diverging-gender-7-4", value: "#e3e4e9"}
   - {name: "diverging-gender-7-5", value: "#623bb8"}
   - {name: "diverging-gender-7-6", value: "#4926a0"}
   - {name: "diverging-gender-7-7", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-8-1", value: "#24b39c"}
   - {name: "diverging-gender-8-2", value: "#48b9a4"}
   - {name: "diverging-gender-8-3", value: "#61bfad"}
   - {name: "diverging-gender-8-4", value: "#77c4b5"}
   - {name: "diverging-gender-8-5", value: "#7b50d0"}
   - {name: "diverging-gender-8-6", value: "#623bb8"}
   - {name: "diverging-gender-8-7", value: "#4926a0"}
   - {name: "diverging-gender-8-8", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-9-1", value: "#24b39c"}
   - {name: "diverging-gender-9-2", value: "#48b9a4"}
   - {name: "diverging-gender-9-3", value: "#61bfad"}
   - {name: "diverging-gender-9-4", value: "#77c4b5"}
   - {name: "diverging-gender-9-5", value: "#e3e4e9"}
   - {name: "diverging-gender-9-6", value: "#7b50d0"}
   - {name: "diverging-gender-9-7", value: "#623bb8"}
   - {name: "diverging-gender-9-8", value: "#4926a0"}
   - {name: "diverging-gender-9-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-10-1", value: "#24b39c"}
   - {name: "diverging-gender-10-2", value: "#48b9a4"}
   - {name: "diverging-gender-10-3", value: "#61bfad"}
   - {name: "diverging-gender-10-4", value: "#77c4b5"}
   - {name: "diverging-gender-10-5", value: "#8acabd"}
   - {name: "diverging-gender-10-6", value: "#9567e2"}
   - {name: "diverging-gender-10-7", value: "#7b50d0"}
   - {name: "diverging-gender-10-8", value: "#623bb8"}
   - {name: "diverging-gender-10-9", value: "#4926a0"}
   - {name: "diverging-gender-10-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-11-1", value: "#24b39c"}
   - {name: "diverging-gender-11-2", value: "#48b9a4"}
   - {name: "diverging-gender-11-3", value: "#61bfad"}
   - {name: "diverging-gender-11-4", value: "#77c4b5"}
   - {name: "diverging-gender-11-5", value: "#8acabd"}
   - {name: "diverging-gender-11-9", value: "#e3e4e9"}
   - {name: "diverging-gender-11-6", value: "#9567e2"}
   - {name: "diverging-gender-11-7", value: "#7b50d0"}
   - {name: "diverging-gender-11-8", value: "#623bb8"}
   - {name: "diverging-gender-11-9", value: "#4926a0"}
   - {name: "diverging-gender-11-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-12-1", value: "#24b39c"}
   - {name: "diverging-gender-12-2", value: "#48b9a4"}
   - {name: "diverging-gender-12-3", value: "#61bfad"}
   - {name: "diverging-gender-12-4", value: "#77c4b5"}
   - {name: "diverging-gender-12-5", value: "#8acabd"}
   - {name: "diverging-gender-12-9", value: "#9dcfc6"}
   - {name: "diverging-gender-12-9", value: "#b080ec"}
   - {name: "diverging-gender-12-6", value: "#9567e2"}
   - {name: "diverging-gender-12-7", value: "#7b50d0"}
   - {name: "diverging-gender-12-8", value: "#623bb8"}
   - {name: "diverging-gender-12-9", value: "#4926a0"}
   - {name: "diverging-gender-12-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-13-1", value: "#24b39c"}
   - {name: "diverging-gender-13-2", value: "#48b9a4"}
   - {name: "diverging-gender-13-3", value: "#61bfad"}
   - {name: "diverging-gender-13-4", value: "#77c4b5"}
   - {name: "diverging-gender-13-5", value: "#8acabd"}
   - {name: "diverging-gender-13-9", value: "#9dcfc6"}
   - {name: "diverging-gender-13-9", value: "#e3e4e9"}
   - {name: "diverging-gender-13-9", value: "#b080ec"}
   - {name: "diverging-gender-13-6", value: "#9567e2"}
   - {name: "diverging-gender-13-7", value: "#7b50d0"}
   - {name: "diverging-gender-13-8", value: "#623bb8"}
   - {name: "diverging-gender-13-9", value: "#4926a0"}
   - {name: "diverging-gender-13-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-14-1", value: "#24b39c"}
   - {name: "diverging-gender-14-2", value: "#48b9a4"}
   - {name: "diverging-gender-14-3", value: "#61bfad"}
   - {name: "diverging-gender-14-4", value: "#77c4b5"}
   - {name: "diverging-gender-14-5", value: "#8acabd"}
   - {name: "diverging-gender-14-9", value: "#9dcfc6"}
   - {name: "diverging-gender-14-9", value: "#afd4cf"}
   - {name: "diverging-gender-14-9", value: "#cb98f6"}
   - {name: "diverging-gender-14-9", value: "#b080ec"}
   - {name: "diverging-gender-14-6", value: "#9567e2"}
   - {name: "diverging-gender-14-7", value: "#7b50d0"}
   - {name: "diverging-gender-14-8", value: "#623bb8"}
   - {name: "diverging-gender-14-9", value: "#4926a0"}
   - {name: "diverging-gender-14-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-15-1", value: "#24b39c"}
   - {name: "diverging-gender-15-2", value: "#48b9a4"}
   - {name: "diverging-gender-15-3", value: "#61bfad"}
   - {name: "diverging-gender-15-4", value: "#77c4b5"}
   - {name: "diverging-gender-15-5", value: "#8acabd"}
   - {name: "diverging-gender-15-9", value: "#9dcfc6"}
   - {name: "diverging-gender-15-9", value: "#afd4cf"}
   - {name: "diverging-gender-15-9", value: "#e3e4e9"}
   - {name: "diverging-gender-15-9", value: "#cb98f6"}
   - {name: "diverging-gender-15-9", value: "#b080ec"}
   - {name: "diverging-gender-15-6", value: "#9567e2"}
   - {name: "diverging-gender-15-7", value: "#7b50d0"}
   - {name: "diverging-gender-15-8", value: "#623bb8"}
   - {name: "diverging-gender-15-9", value: "#4926a0"}
   - {name: "diverging-gender-15-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-16-1", value: "#24b39c"}
   - {name: "diverging-gender-16-2", value: "#48b9a4"}
   - {name: "diverging-gender-16-3", value: "#61bfad"}
   - {name: "diverging-gender-16-4", value: "#77c4b5"}
   - {name: "diverging-gender-16-5", value: "#8acabd"}
   - {name: "diverging-gender-16-9", value: "#9dcfc6"}
   - {name: "diverging-gender-16-9", value: "#afd4cf"}
   - {name: "diverging-gender-16-9", value: "#c1dad7"}
   - {name: "diverging-gender-16-9", value: "#e4b2fe"}
   - {name: "diverging-gender-16-9", value: "#cb98f6"}
   - {name: "diverging-gender-16-9", value: "#b080ec"}
   - {name: "diverging-gender-16-6", value: "#9567e2"}
   - {name: "diverging-gender-16-7", value: "#7b50d0"}
   - {name: "diverging-gender-16-8", value: "#623bb8"}
   - {name: "diverging-gender-16-9", value: "#4926a0"}
   - {name: "diverging-gender-16-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-17-1", value: "#24b39c"}
   - {name: "diverging-gender-17-2", value: "#48b9a4"}
   - {name: "diverging-gender-17-3", value: "#61bfad"}
   - {name: "diverging-gender-17-4", value: "#77c4b5"}
   - {name: "diverging-gender-17-5", value: "#8acabd"}
   - {name: "diverging-gender-17-9", value: "#9dcfc6"}
   - {name: "diverging-gender-17-9", value: "#afd4cf"}
   - {name: "diverging-gender-17-9", value: "#c1dad7"}
   - {name: "diverging-gender-17-9", value: "#e3e4e9"}
   - {name: "diverging-gender-17-9", value: "#e4b2fe"}
   - {name: "diverging-gender-17-9", value: "#cb98f6"}
   - {name: "diverging-gender-17-9", value: "#b080ec"}
   - {name: "diverging-gender-17-6", value: "#9567e2"}
   - {name: "diverging-gender-17-7", value: "#7b50d0"}
   - {name: "diverging-gender-17-8", value: "#623bb8"}
   - {name: "diverging-gender-17-9", value: "#4926a0"}
   - {name: "diverging-gender-17-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-18-1", value: "#24b39c"}
   - {name: "diverging-gender-18-2", value: "#48b9a4"}
   - {name: "diverging-gender-18-3", value: "#61bfad"}
   - {name: "diverging-gender-18-4", value: "#77c4b5"}
   - {name: "diverging-gender-18-5", value: "#8acabd"}
   - {name: "diverging-gender-18-9", value: "#9dcfc6"}
   - {name: "diverging-gender-18-9", value: "#afd4cf"}
   - {name: "diverging-gender-18-9", value: "#c1dad7"}
   - {name: "diverging-gender-18-9", value: "#d2dfe0"}
   - {name: "diverging-gender-18-9", value: "#edd4fa"}
   - {name: "diverging-gender-18-9", value: "#e4b2fe"}
   - {name: "diverging-gender-18-9", value: "#cb98f6"}
   - {name: "diverging-gender-18-9", value: "#b080ec"}
   - {name: "diverging-gender-18-6", value: "#9567e2"}
   - {name: "diverging-gender-18-7", value: "#7b50d0"}
   - {name: "diverging-gender-18-8", value: "#623bb8"}
   - {name: "diverging-gender-18-9", value: "#4926a0"}
   - {name: "diverging-gender-18-9", value: "#301088"}
```

```color-palette|horizontal
colors:
   - {name: "diverging-gender-19-1", value: "#24b39c"}
   - {name: "diverging-gender-19-2", value: "#48b9a4"}
   - {name: "diverging-gender-19-3", value: "#61bfad"}
   - {name: "diverging-gender-19-4", value: "#77c4b5"}
   - {name: "diverging-gender-19-5", value: "#8acabd"}
   - {name: "diverging-gender-19-9", value: "#9dcfc6"}
   - {name: "diverging-gender-19-9", value: "#afd4cf"}
   - {name: "diverging-gender-19-9", value: "#c1dad7"}
   - {name: "diverging-gender-19-9", value: "#d2dfe0"}
   - {name: "diverging-gender-19-9", value: "#e3e4e9"}
   - {name: "diverging-gender-19-9", value: "#edd4fa"}
   - {name: "diverging-gender-19-9", value: "#e4b2fe"}
   - {name: "diverging-gender-19-9", value: "#cb98f6"}
   - {name: "diverging-gender-19-9", value: "#b080ec"}
   - {name: "diverging-gender-19-6", value: "#9567e2"}
   - {name: "diverging-gender-19-7", value: "#7b50d0"}
   - {name: "diverging-gender-19-8", value: "#623bb8"}
   - {name: "diverging-gender-19-9", value: "#4926a0"}
   - {name: "diverging-gender-19-9", value: "#301088"}
```

```table
span: 7
columns:
  - Steps
  - HEX
rows:
  - Steps: 2
    HEX: 24b39c, 301088
  - Steps: 3
    HEX: 24b39c, e3e4e9, 301088
  - Steps: 4
    HEX: 24b39c, 48b9a4, 4926a0, 301088
  - Steps: 5
    HEX: 24b39c, 48b9a4, e3e4e9, 4926a0, 301088
  - Steps: 6
    HEX: 24b39c, 48b9a4, 77c4b5, 623bb8, 4926a0, 301088
  - Steps: 7
    HEX: 24b39c, 48b9a4, 77c4b5, e3e4e9, 623bb8, 4926a0, 301088
  - Steps: 8
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 9
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, e3e4e9, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 10
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 11
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, e3e4e9, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 12
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 13
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, e3e4e9, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 14
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, afd4cf, cb98f6, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 15
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, afd4cf, e3e4e9, cb98f6, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 16
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, afd4cf, c1dad7, e4b2fe, cb98f6, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 17
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, afd4cf, c1dad7, e3e4e9, e4b2fe, cb98f6, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 18
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, afd4cf, c1dad7, d2dfe0, edd4fa, e4b2fe, cb98f6, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
  - Steps: 19
    HEX: 24b39c, 48b9a4, 77c4b5, 77c4b5, 8acabd, 9dcfc6, afd4cf, c1dad7, d2dfe0, e3e4e9, edd4fa, e4b2fe, cb98f6, b080ec, 9567e2, 7b50d0, 623bb8, 4926a0, 301088
```

[to the top](#table-of-contents)

# References
[1]: ‘Qualitative Color Schemes’. http://www.personal.psu.edu/cab38/ColorSch/SchHTMLs/CBColorQual.html (accessed May 04, 2020).

[2]: C. C. Gramazio, D. H. Laidlaw, and K. B. Schloss, ‘Colorgorical: Creating discriminable and preferable color palettes for information visualization’, IEEE Trans. Vis. Comput. Graph., vol. 23, no. 1, pp. 521–530, Jan. 2017, doi: 10.1109/TVCG.2016.2598918.

[3]: D. M. Wong, The Wall Street journal guide to information graphics: the dos and don’ts of presenting data, facts, and figures. New York: Norton, 2013.

[to the top](#table-of-contents)





