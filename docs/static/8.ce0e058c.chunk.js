webpackJsonp([8],{785:function(e,n,t){var r=t(15),a=t(45),s=t(293).PageRenderer;s.__esModule&&(s=s.default);var o=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(794)}},componentWillMount:function(){},render:function(){return r.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,e.exports=o},794:function(e,n){e.exports='Axes, labels and legends provide critical context for the information within a chart. Use simple, easy-to-understand descriptors and metrics to label your chart and axes.\r\n\r\n# Table of contents\r\n- [Axes](#axes)\r\n  * [Starting at zero](#starting-at-zero)\r\n  * [Gaps in data](#gaps-in-data)\r\n- [Legends](#legends)\r\n  * [Usage](#usage)\r\n  * [Position](#position)\r\n\r\n# Axes\r\n## Starting at zero\r\nAlways start numerical axes at zero for part-to-whole and comparisons charts. For bar and area charts, a truncated Y-axis can distort the perceived scale of a chart, making a small difference appear more significant than it is.\r\n\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "starting_at_zero_ok.png"\r\n```\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "starting_at_zero_wrong.png"\r\n```\r\n\r\nIt\u2019s acceptable to start line charts and scatter plots at a value higher than zero, but be aware that truncation obscures the discrete total value of each bar and makes comparison of the data difficult.\r\n\r\n```image\r\nplain: true\r\nspan: 4\r\nsrc: "starting_NOT_at_zero.png"\r\n```\r\n\r\n## Gaps in data\r\nAlways label both start and end points where data is not available.\r\n\r\n```image\r\nplain: true\r\nspan: 4\r\nsrc: "gap_in_data.png"\r\n```\r\n\r\n[to the top](#table-of-contents)\r\n\r\n# Legends\r\nLegends summarize the distinguishing visual properties such as colors or texture used in the visualization. A legend or key helps the user build the necessary associations to make sense of the chart.\r\n\r\n## Usage\r\n* When possible, avoid using a legend and label data representations directly. Legends rely on visual association, which can make a chart more difficult to understand. A legend separated from the line requires the readers to do extra work cross-referencing between the key and the line. Direct labeling allows the reader to identify the lines quickly and focus on comparing and constrasting the patterns.\r\n\r\n* Your chart doesn\u2019t need a legend if it only presents one data category. Only use a legend if you can\u2019t safely assume there will be enough space to apply labels directly.\r\n\r\n* The order of the legend should match the ranking of the end points since they are the most current data points.\r\n\r\n* Use clear language and avoid acronyms in legends. This also applies to titles and axis labels.\r\n\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "legend_01.png"\r\n```\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "legend_02.png"\r\n```\r\n\r\n## Position\r\nDepending on the page\u2019s layout and context, you may choose to position the legends at the bottom, at the top, under the chart title, left or right of a chart with respect to the graph frame.\r\n\r\n* __Bottom__ and __top__\r\nPosition the legend at the bottom or top of a chart in situations where space is a scarce, such as a dashboard.\r\n\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "legend_position_bottom.png"\r\n```\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "legend_position_top.png"\r\n```\r\n* __Right__ and __left__\r\nPosition the legend to the right of the chart when space is plentiful, or when you would like to provide the maximum context. Position the legend on the left of the chart when better type alignment is needed. Be sure the surrounding elements of the chart are not too closely clustered.\r\n\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "legend_position_right.png"\r\n```\r\n```image\r\nplain: true\r\nspan: 3\r\nsrc: "legend_position_left.png"\r\n```\r\n\r\n* __Overlay__\r\nIn charts like geospatial, legends can be overlayed on top of a graph frame.\r\n\r\n```image\r\nplain: true\r\nspan: 4\r\nsrc: "overlay.png"\r\n```\r\n\r\n[to the top](#table-of-contents)'}});
//# sourceMappingURL=8.ce0e058c.chunk.js.map