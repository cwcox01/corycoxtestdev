import React from "react";

// importing smaller components
import HeaderItem from "./HeaderItem";

export default function Heading() {
  return (
    <div id="header">
      <HeaderItem
        headerH1Item="Cory Cox Test Website"
        headerH2Item="Test site for Cory Cox"
        headerH3Item="Current Projects:"
      />
    </div>
  );
}
