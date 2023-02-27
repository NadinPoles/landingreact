import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  text: string;
  path: string;
  children?: { text: string; path: string }[];
  onClick?: () => void;
  openSearch?: boolean;
}

const MenuItem = ({ text, path, children, onClick, openSearch }: MenuItem) => {
  const location = useLocation();
  const [openSubMenu, setOpenedSubMenu] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault();
    setOpenedSubMenu(!openSubMenu);
  };
  return (
    <li
      className={`level1${location.pathname === path ? " active" : ""}${
        openSearch ? " hidden" : ""
      }`}
      key={path}
    >
      <Link
        className={openSubMenu ? " open_mobile" : ""}
        to={path}
        onClick={onClick}
      >
        {text}
        {text === "Каталог" && (
          <>
            <span className="open_top_menu">
              <svg
                width="9"
                height="4"
                viewBox="0 0 9 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 4L8.39711 0.25H0.602886L4.5 4Z" fill="white" />
              </svg>
            </span>
            <span className="open_catalog">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </>
        )}
      </Link>
      {children && (
        <>
          <span className="mobile_arrow" onClick={handleClick}>
            <svg
              width="9"
              height="4"
              viewBox="0 0 9 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 4L8.39711 0.25H0.602886L4.5 4Z" fill="#151515" />
            </svg>
          </span>
          <ul>
            {children.map((child: any) => (
              <li
                className={`level2${
                  location.pathname === child.path ? " active" : ""
                }`}
                key={child.path}
              >
                <Link to={child.path} onClick={onClick}>
                  {child.text}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export default MenuItem;
