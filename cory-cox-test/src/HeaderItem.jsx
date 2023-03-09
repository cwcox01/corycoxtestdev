import React from "react";

export default function HeaderItem({
  headerH1Item,
  headerH2Item,
  headerH3Item,
}) {
  return (
    <div id="header">
      <h1>{headerH1Item}</h1>
      <h3>{headerH2Item}</h3>
      <h3>{headerH3Item}</h3>
    </div>
  );
}
