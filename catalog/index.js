import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./intro.md"))
  },
  {
    title: "Style",
    pages: [
      {
        path: "/principles",
        title: "Principles",
        content: pageLoader(() => import("./principles.md"))
      },
      {
        path: "/colors",
        title: "Colors",
        content: pageLoader(() => import("./colors.md"))
      },
      {
        path: "/typo",
        title: "Typography",
        content: pageLoader(() => import("./typo.md"))
      },
    ]
  },
  {
    title: "Charts",
    pages: [
      {
        path: "/chart_guidelines",
        title: "Guidelines",
        content: pageLoader(() => import("./charts_guidelines.md"))
      },
      {
        path: "/basic_charts",
        title: "Charts types",
        content: pageLoader(() => import("./charts_types.md"))
      },
      {
        path: "/chart_anatomy",
        title: "Chart anatomy",
        content: pageLoader(() => import("./chart_anatomy.md"))
      },
      {
        path: "/axes_labels_legends",
        title: "Axes, labels and legends",
        content: pageLoader(() => import("./axes_labels_legends.md"))
      },
    ]
  },
  {
    path: "/resources",
    title: "Resources",
    content: pageLoader(() => import("./resources.md"))
  },
];

ReactDOM.render(
  <Catalog title="SG Data Science Living Style Guide" pages={pages} />,
  document.getElementById("catalog")
);
