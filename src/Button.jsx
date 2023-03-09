import React from "react";

// importing smaller component
import ButtonItem from "./ButtonItem";

export default function Button() {
  return (
    <div id="button-group">
      <ButtonItem btnItemUrl="/js-counter/" btnItemText="Counter" />
      <ButtonItem
        btnItemUrl="/random-number-draw/"
        btnItemText="Random Number"
      />
      <ButtonItem btnItemUrl="https://corycox.com/" btnItemText="Cory Cox" />
      <ButtonItem
        btnItemUrl="https://cubsplaytoday.com/"
        btnItemText="Cubs Play"
      />
      <ButtonItem
        btnItemUrl="https://github.com/cwcox01/"
        btnItemText="GitHub"
      />
    </div>
  );
}
