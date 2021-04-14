Main goal of typography in data visualization should be describe information and facilitate users to focus in the underlying data. Typography done right helps present the information in the most efficient and direct way.

# Table of contents
- [Style](#style)
  * [Weights](#weights)
  * [Italic](#italic)
  * [Type color](#type-color)
- [Uses](#uses)
  * [Body](#body)
  * [Headings](#headings)

We use the open-source typeface [IBM Plex](https://github.com/IBM/plex) and its "sans", "serif" and "mono" families to carry out this task.

```type
{
  "headings": [
    { "label": "IBM Plex Sans", 
    "value": 54 },
  ],
  "font": "IBM Plex Sans"
}
```
```type
{
  "headings": [
    { "label": "IBM Plex Serif", 
    "value": 54 },
  ],
  "font": "IBM Plex Serif"
}
```
```type
{
  "headings": [
    { "label": "IBM Plex Mono", 
    "value": 54 },
  ],
  "font": "IBM Plex Mono"
}
```

### Sans-serif font stack

```
font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
```
### Serif font stack

```
font-family: "IBM Plex Serif", "Georgia", Times, serif;
```
### Mono font stack

```
font-family: "IBM Plex Mono", "Menlo", "DejaVu Sans Mono",
  "Bitstream Vera Sans Mono", Courier, monospace;
```

[to the top](#table-of-contents)

# Style
Typography guides users to read and understand the hierarchy of information. The right typographic treatment and the controlled usage of type styles helps manage the display of content, keeping it useful, simple, and effective.

## Weights
Font weight is an important typographic variable that can add emphasis and differentiate content hierarchy. We use IBM Plex Light, Regular, and SemiBold to display data information. The semibold weight is ideal for chart headers, but should not be used for long text.

```type
{
  "headings": [
    { "label": "IBM Plex Sans Semibold", 
    "value": 54 },
  ],
  "font": "IBM Plex Sans Semibold",
  "weight": 600
}
```
```type
{
  "headings": [
    { "label": "IBM Plex Sans", 
    "value": 54 },
  ],
  "font": "IBM Plex Sans",
  "weight": 400
}
```
```type
{
  "headings": [
    { "label": "IBM Plex Sans Light", 
    "value": 54 },
  ],
  "font": "IBM Plex Sans Light",
  "weight": 300
}

```
## Italic
Each weight has an italic style, which should only be used when you need to emphasize certain words in a sentence (titles of works, technical terms, names of devices, captions, etc.).

```type
{
  "headings": [
    { "label": "IBM Plex Sans Semibold", 
    "value": 54 },
  ],
  "font": "IBM Plex Sans Semibold",
  "weight": 600,
  "style": italic
}
```
```type
{
  "headings": [
    { "label": "IBM Plex Sans", 
    "value": 54 },
  ],
  "font": "IBM Plex Sans",
  "weight": 400,
  "style": italic
}
```
```type
{
  "headings": [
    { "label": "IBM Plex Sans Light", 
    "value": 54 },
  ],
  "font": "IBM Plex Sans Light",
  "weight": 300,
  "style": italic
}
```

## Type color
Keep type color neutral avoiding color whenever is possible. Use q-pri-color-one-1 if something needs to be hightlighted.

```type|span-3,kern,smoothen,single
{
    "headings": [
      {"label": "Color neutral", 
      "value": 54 },
    ],
    "background": "#ffffff",
    "color": "#05032d",
    "font": "IBM Plex Sans",
    "weight": 600
}
```

```type|span-3,kern,smoothen,single
{
    "headings": [
      {"label": "Color neutral background", 
      "value": 54 },
    ],
    "background": "#05032d",
    "color": "#ffffff",
    "font": "IBM Plex Sans",
    "weight": 600
}
```

```type|span-3,kern,smoothen,single
{
    "headings": [
      {"label": "Color neutral", 
      "value": 54 },
    ],
    "background": "#ffffff",
    "color": "#22577a",
    "font": "IBM Plex Sans",
    "weight": 600
}
```

```type|span-3,kern,smoothen,single
{
    "headings": [
      {"label": "Color neutral background", 
      "value": 54 },
    ],
    "background": "#22577a",
    "color": "#ffffff",
    "font": "IBM Plex Sans",
    "weight": 600
}
```

[to the top](#table-of-contents)

# Uses
## Body
```type
{
  "paragraphs": [
    {
      "label": "For short paragraphs",
      "value": 14/16 }
      ],
  "font": "IBM Plex Sans",
  "color": "#05032d",
  "label": "For short paragraphs"
}
```

```type
{
  "paragraphs": [
    {
      "label": "For long paragraphs",
      "value": 14/20 }
      ],
  "font": "IBM Plex Sans",
  "color": "#05032d",
  "label": "For short paragraphs"
}
```

```type
{
  "paragraphs": [
    {
      "label": "For long paragraphs no more than four lines",
      "value": 16/22 }
      ],
  "font": "IBM Plex Sans",
  "color": "#05032d",
  "label": "For short paragraphs"
}
```

```type
{
  "paragraphs": [
    {
      "label": "For long paragraphs with more than four lines",
      "value": 16/24 }
      ],
  "font": "IBM Plex Sans",
  "color": "#05032d",
  "label": "For short paragraphs"
}
```

[to the top](#table-of-contents)

## Headings
```type
{
  "headings": [54, 42, 32, 28, 20, 16, 14],
  "font": "IBM Plex Sans",
  "color": "#05032d"
}
```

[to the top](#table-of-contents)