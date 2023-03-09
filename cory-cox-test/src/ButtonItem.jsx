import React from "react";

export default function ButtonItem({ btnItemUrl, btnItemText }) {
  return (
    <button type="button" className="btn btn-secondary">
      <a href={btnItemUrl} target="_blank" rel="noreferrer">
        {btnItemText}
      </a>
    </button>
  );
}
