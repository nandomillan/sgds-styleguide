import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./intro.md"))
  }
];

ReactDOM.render(
  <Catalog title="SG Data Science Living Style Guide" pages={pages} />,
  document.getElementById("catalog")
);
