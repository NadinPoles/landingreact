import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import sprite from "../assets/images/sprite.png";
import ModalForm from "./ModalForm";

const Header = () => {
  return (
    <Wrapper className="header">
      <div className="container">
        <div className="row logorow">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-4 logo">
            <Link to="/">
              <img src={logo} alt="лого" />
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="address">
              г. Минск,
              <br />
              ул. Монтажников 12 - 37
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="velcom">
              <a href="tel:+375447345678">8-044-734-56-78</a>
            </div>
            <div className="phone_text">Бесплатно по Беларуси</div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <div className="mts">
              <a href="tel:+375297654321">8-029-765-43-21</a>
            </div>
            <div className="call">
              <ModalForm
                btnClass="fancybox"
                modalBtnText="Заказ обратного звонка"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .address {
    font-size: 14px;
    line-height: 1.43;
    position: relative;
    padding: 4px 0 0 0;
  }
  .address:before {
    display: block;
    content: "";
    width: 20px;
    height: 24px;
    position: absolute;
    top: 0;
    left: -26px;
    background: url("${sprite}") no-repeat 0 -238px;
  }
  .phone_text,
  .call {
    font-size: 13px;
  }
  .call a, .call span {
    color: #2068EB;
    cursor: pointer;
    border-bottom: 1px dotted #2068eb;
  }
  .call a:hover, .call span:hover{
    border-bottom-color: transparent;
  }
  .mts,
  .velcom {
    margin-left: -30px;
  }
  .logorow {
    padding-top: 24px;
    padding-bottom: 16px;
  }
  .logo img {
    max-width: 120px;
  }
  .logo_mobile {
    line-height: 1;
    max-height: 30px;
  }
  @media (max-width: 767px) {
    .address {
      margin-left: 26px;
    }
    .mts,
    .velcom {
      margin-left: 0;
    }
    .address,
    .mts,
    .velcom {
      margin-top: 8px;
    }
  }
`;

export default Header;
