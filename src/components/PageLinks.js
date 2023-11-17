import React from "react";
import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li href={link.href} className={itemClass} key={link.id}>
            {link.text}
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
