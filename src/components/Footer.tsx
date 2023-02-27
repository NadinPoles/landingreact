import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { BottomMenu, ServicesList } from "../utils/constants";
import logobottom from "../assets/images/logobottom.png";
import sprite from "../assets/images/sprite.png";

const Footer = () => {
  const location = useLocation();
  return (
    <Wrapper className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 footer_logo_wrap">
            <div className="footer_logo">
              <Link className="logo_bottom" to="/">
                <img src={logobottom} alt="лого" />
              </Link>
              <div className="mts">
                <a href="tel:+375297654321">8-029-765-43-21</a>
              </div>
              <div className="velcom">
                <a href="tel:+375447345678">8-044-734-56-78</a>
              </div>
              <div className="address">
                г. Минск, <br />
                ул. Монтажников 12 - 37
              </div>
              <div className="lang">
                Copyright &copy; {new Date().getFullYear()}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="footer_heading">О компании</div>
            <ul className="footer_menu">
              {BottomMenu.map((item) => (
                <li
                  className={location.pathname === item.path ? "active" : ""}
                  key={item.path}
                >
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="footer_heading">Наши услуги</div>
            <ul className="footer_menu">
              {ServicesList.map((item) => (
                <li
                  className={
                    location.pathname === `/services/${item.slug}`
                      ? "active"
                      : ""
                  }
                  key={item.slug}
                >
                  <Link to={`/services/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="footer_heading">Социальные сети</div>
            <div className="social">
              <p>
                <a className="vk" href="https://vk.com/" target="_blank">
                  <span>ВКонтакте</span>
                </a>
              </p>
              <p>
                <a className="ok" href="https://ok.ru/" target="_blank">
                  <span>Одноклассники</span>
                </a>
              </p>
              <p>
                <a
                  className="fb"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <span>Facebook</span>
                </a>
              </p>
              <p>
                <a
                  className="twitter"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <span>Twitter</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  color: #fff;
  background: #2068eb;
  margin-top: 85px;
  padding-top: 60px;
  padding-bottom: 60px;
  a,
  a:focus {
    color: #fff;
  }
  a:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  .lang {
    text-align: left;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding-top: 15px;
    margin: 10px 0 15px;
  }
  .social a {
    position: relative;
    padding-left: 27px;
    margin-bottom: 11px;
  }
  .social a:before {
    display: block;
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("${sprite}") no-repeat 0 -136px;
  }
  .social a.ok:before {
    background-position: -18px -133px;
  }
  .social a.fb:before {
    background-position: 3px -150px;
  }
  .social a.twitter:before {
    background-position: -19px -151px;
  }
  .logo_bottom {
    max-width: 108px;
    margin-bottom: 20px;
  }
  .address {
    margin-top: 10px;
  }
  .footer_logo {
    position: relative;
    padding-right: 20px;
  }
  .footer_logo_wrap:after {
    display: block;
    content: "";
    width: 1px;
    height: 105%;
    background: rgba(255, 255, 255, 0.25);
    position: absolute;
    top: -10px;
    right: 35px;
  }
  .footer_heading {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .footer_menu,
  .social {
    font-size: 14px;
  }
  .footer_menu li {
    margin-bottom: 11px;
  }
  .footer_menu a,
  .social a span,
  .development a {
    border-bottom: 1px solid transparent;
  }
  .footer_menu a:hover,
  .footer_menu .active a,
  .social a:hover span,
  .development a:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 1199px) {
    .footer_logo_wrap:after {
      right: 10px;
    }
  }
  @media (max-width: 767px) {
    .footer_heading {
      margin: 15px 0 10px;
    }
    .footer_logo:after,
    .footer_logo_wrap:after {
      display: none;
    }
  }
`;

export default Footer;
