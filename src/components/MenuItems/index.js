import React from "react";
import { Link } from "gatsby";

import { MenuWrapper } from "./style";
import { resources } from "../../resources";

const MenuItems = ({ type }) => {
  return (
    <MenuWrapper className="menu-wrapper" type={type}>
      <ul className="menu-list">
        {resources.headerMenu.map((menuItem, index) => {
          const { menuName, menuLink } = menuItem;

          return (
            <li key={index} className="menu-item">
              {menuItem?.external ? (
                <a className="menu-link" href={menuLink} target="_blank" rel="noreferrer">
                  {menuName}
                </a>
              ) : (
                <Link className="menu-link" to={menuLink}>
                  {menuName}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </MenuWrapper>
  );
};

export default MenuItems;
