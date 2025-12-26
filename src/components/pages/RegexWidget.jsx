import React from "react";
import RegexBuilder from "../../widgets/regex-builder";
import { Helmet } from "react-helmet-async";

function RegexWidget() {
  return (
    <div>
      <Helmet>
        <title>Regex Builder</title>
        <meta name="description" content="Build, visualize, and test regular expressions interactively using modular segments with live preview and validation." />
      </Helmet>
      <RegexBuilder />
    </div>
  );
}

export default RegexWidget;
