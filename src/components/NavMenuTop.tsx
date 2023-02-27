import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Links } from "../utils/constants";
import { CartItem } from "../redux/types";
import MenuItem from "./MenuItem";
import { RootState } from "../redux/store";
import { CatalogList } from "../utils/constants";
import { Product } from "../redux/types";

const NavMenuTop = () => {
  const [open, setOpened] = useState(false);
  const [openSearch, setOpenedSearch] = useState(false);
  const [data, setSearhData] = useState<Product[] | undefined>(undefined);
  const [inputSearch, setInputSearch] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const searchData = (e: any) => {
    let filterSearch = e.toLowerCase();
    let searchRes: Product[] = [];
    CatalogList.map(
      (catalog) =>
        catalog.section &&
        catalog.section.map((item) => {
          let finalRes = item.title.toLowerCase();
          if (filterSearch !== "") {
            if (finalRes.indexOf(filterSearch) !== -1) {
              searchRes.push(item);
            }
          }
        })
    );
    setSearhData(searchRes);
  };

  return (
    <nav className="topnav">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-10">
            <div className={`flexmenu${open ? " active" : ""}`}>
              <a
                onClick={() => setOpened(!open)}
                className="hamburger"
                title="Развернуть меню"
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
              <Link className="logo_mobile" to="/">
                <img src="/images/logo.png" width="75" alt="лого" />
              </Link>
              <span className="phone_mobile">
                <a href="tel:+375447345678">8-044-734-56-78</a>
              </span>
              <ul id="horizontal">
                {Links.map((link) => (
                  <MenuItem
                    key={link.text}
                    text={link.text}
                    path={link.path}
                    children={link.children}
                    onClick={() => setOpened(false)}
                    openSearch={openSearch}
                  />
                ))}
              </ul>
            </div>
            <div
              className={`menu-search-container${openSearch ? " active" : ""}`}
            >
              <div className="menu-search-input">
                <form className="sisea-search-form">
                  <button type="submit"></button>
                  <input
                    autoFocus
                    className="menu-search-input"
                    type="text"
                    name="search"
                    id="search"
                    value={inputSearch}
                    onChange={(e) => (
                      setInputSearch(e.target.value), searchData(e.target.value)
                    )}
                  />
                  <a
                    className="menu-search-close"
                    onClick={() => setOpenedSearch(false)}
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <g clipPath="url(#as)">
                        <path
                          fill="#fff"
                          d="M11.178 10.001l8.578-8.577A.832.832 0 1 0 18.577.246L10 8.823 1.423.246A.832.832 0 1 0 .244 1.424L8.822 10 .244 18.58a.832.832 0 1 0 1.179 1.178L10 11.179l8.577 8.578a.831.831 0 0 0 1.179 0 .832.832 0 0 0 0-1.178L11.178 10z"
                        />
                      </g>
                      <defs>
                        <clipPath id="as">
                          <path fill="#fff" d="M0 0h20v20H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </form>
                {data && (
                  <div className="topnav_search">
                    {data.map((item) => (
                      <div className="topnav_searchblock" key={item.id}>
                        <Link
                          onClick={() => setOpenedSearch(false)}
                          to={`/catalog/${item.parent}/${item.slug}`}
                        >
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 topnav_cart">
            <span
              className={`open_search${openSearch ? " hidden" : ""}`}
              onClick={() => (
                setOpenedSearch(true), setInputSearch(""), setSearhData([])
              )}
            ></span>
            <span className="shop-cart top_cart_wrap">
              <span className="top_cart">
                {cartItems.length > 0 ? (
                  <Link to="/cart" className="top_cart_full" id="shk_butOrder">
                    <span className="cart_text">
                      {cartItems.reduce(
                        (sum: number, item: CartItem) => sum + item.quantity,
                        0
                      )}{" "}
                      шт. /{" "}
                      {cartItems.reduce(
                        (sum: number, item: CartItem) =>
                          sum + item.price * item.quantity,
                        0
                      )}{" "}
                      byn
                    </span>
                  </Link>
                ) : (
                  <span className="cart_text">0 шт. / 0 byn</span>
                )}
              </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenuTop;
