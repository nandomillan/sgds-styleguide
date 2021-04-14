Axes, labels and legends provide critical context for the information within a chart. Use simple, easy-to-understand descriptors and metrics to label your chart and axes.

# Table of contents
- [Axes](#axes)
  * [Starting at zero](#starting-at-zero)
  * [Gaps in data](#gaps-in-data)
- [Legends](#legends)
  * [Usage](#usage)
  * [Position](#position)

# Axes
## Starting at zero
Always start numerical axes at zero for part-to-whole and comparisons charts. For bar and area charts, a truncated Y-axis can distort the perceived scale of a chart, making a small difference appear more significant than it is.

```image
plain: true
span: 3
src: "starting_at_zero_ok.png"
```
```image
plain: true
span: 3
src: "starting_at_zero_wrong.png"
```

It’s acceptable to start line charts and scatter plots at a value higher than zero, but be aware that truncation obscures the discrete total value of each bar and makes comparison of the data difficult.

```image
plain: true
span: 4
src: "starting_NOT_at_zero.png"
```

## Gaps in data
Always label both start and end points where data is not available.

```image
plain: true
span: 4
src: "gap_in_data.png"
```

[to the top](#table-of-contents)

# Legends
Legends summarize the distinguishing visual properties such as colors or texture used in the visualization. A legend or key helps the user build the necessary associations to make sense of the chart.

## Usage
* When possible, avoid using a legend and label data representations directly. Legends rely on visual association, which can make a chart more difficult to understand. A legend separated from the line requires the readers to do extra work cross-referencing between the key and the line. Direct labeling allows the reader to identify the lines quickly and focus on comparing and constrasting the patterns.

* Your chart doesn’t need a legend if it only presents one data category. Only use a legend if you can’t safely assume there will be enough space to apply labels directly.

* The order of the legend should match the ranking of the end points since they are the most current data points.

* Use clear language and avoid acronyms in legends. This also applies to titles and axis labels.

```image
plain: true
span: 3
src: "legend_01.png"
```
```image
plain: true
span: 3
src: "legend_02.png"
```

## Position
Depending on the page’s layout and context, you may choose to position the legends at the bottom, at the top, under the chart title, left or right of a chart with respect to the graph frame.

* __Bottom__ and __top__
Position the legend at the bottom or top of a chart in situations where space is a scarce, such as a dashboard.

```image
plain: true
span: 3
src: "legend_position_bottom.png"
```
```image
plain: true
span: 3
src: "legend_position_top.png"
```
* __Right__ and __left__
Position the legend to the right of the chart when space is plentiful, or when you would like to provide the maximum context. Position the legend on the left of the chart when better type alignment is needed. Be sure the surrounding elements of the chart are not too closely clustered.

```image
plain: true
span: 3
src: "legend_position_right.png"
```
```image
plain: true
span: 3
src: "legend_position_left.png"
```

* __Overlay__
In charts like geospatial, legends can be overlayed on top of a graph frame.

```image
plain: true
span: 4
src: "overlay.png"
```

[to the top](#table-of-contents)