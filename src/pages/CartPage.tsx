import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Breadcrums from "../components/Breadcrumbs";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  clearCartOrder,
} from "../redux/actions";
import { RootState } from "../redux/store";
import { CartItem } from "../redux/types";

const CartPage = () => {
  let dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cost = cart.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateOptions = {
    name: { required: "Это поле необходимо заполнить" },
    address: { required: "Это поле необходимо заполнить" },
    phone: {
      required: "Это поле необходимо заполнить",
      minLength: {
        value: 9,
        message: "В номере должно быть не менее 9 цифр",
      },
    },
    email: {
      required: "Это поле необходимо заполнить",
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Неверный адрес электронной почты",
      },
    },
  };
  const onSubmit = () => {
    setShow(true);
    reset();
    dispatch(clearCartOrder());
  };

  return (
    <>
      <Breadcrums title="Корзина" />
      {cart.length > 0 ? (
        <div className="container content inner_content">
          <div>
            <div className="shop-cart">
              <div className="full">
                <table>
                  <thead>
                    <tr>
                      <td colSpan={2}>
                        <div className="shop-cart-head">
                          <b>Товары</b>
                        </div>
                      </td>
                      <td colSpan={2}>
                        <div style={{ textAlign: "right" }}>
                          <a onClick={() => dispatch(clearCart())}>
                            Очистить корзину
                          </a>
                        </div>
                      </td>
                    </tr>
                  </thead>
                </table>
                <div className="cart_indicator">
                  <span>Таблица</span>
                  <svg
                    width="53px"
                    height="29px"
                    viewBox="0 0 53 29"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Page-3"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Mobile_02_desc"
                        transform="translate(-249.000000, -2092.000000)"
                        fillRule="nonzero"
                        fill="#151515"
                      >
                        <g
                          id="Content2"
                          transform="translate(0.000000, 1491.000000)"
                        >
                          <g
                            id="click-icon"
                            transform="translate(249.000000, 601.000000)"
                          >
                            <path
                              d="M52.4620106,18.771043 L49.1935745,12.3269824 C48.7501426,11.451998 47.8998149,10.8407324 46.9196574,10.6920508 L40.4060511,9.70378516 L40.4054766,9.70378516 C39.0578894,9.5014082 37.7024894,10.1616113 37.0502383,11.3387168 L35.0477,7.38944922 C35.5467404,6.61398242 35.8234043,5.742 35.8234043,4.83331445 C35.8234043,2.16825977 33.624283,0 30.9212957,0 C28.2183085,0 26.0191298,2.16825977 26.0191298,4.83331445 C26.0191298,7.36367773 28.008283,9.42284766 30.5222702,9.62692383 L36.2266809,20.8756387 C36.3648979,21.147627 36.2541979,21.3771348 36.1997383,21.4632852 C36.1458532,21.5494355 35.9873,21.7500566 35.6785234,21.7500566 L30.5699511,21.7500566 C29.4121106,21.75 28.4702128,22.6786797 28.4702128,23.8203281 C28.4702128,24.139498 28.5467894,24.4599141 28.6916128,24.7466289 L29.1476255,25.6452324 C29.2224213,25.7921582 29.3540894,25.9024941 29.5132745,25.9514316 L38.1686128,28.6182422 C38.9896426,28.8713691 39.8423255,29 40.7028787,29 C42.0151936,29 43.3292894,28.6943672 44.5021234,28.1155566 L50.2629468,25.2758789 C51.9397043,24.4498887 52.9809277,22.7878262 52.9809277,20.9393027 C52.9808702,20.1911934 52.8013489,19.4413281 52.4620106,18.771043 Z M27.2447,4.83331445 C27.2447,2.83435352 28.893883,1.20831445 30.9212957,1.20831445 C32.9487085,1.20831445 34.5978915,2.83435352 34.5978915,4.83331445 C34.5978915,5.25273828 34.5162596,5.66213672 34.3698277,6.05284375 L33.2185936,3.78251758 C32.7913043,2.93998828 31.9320149,2.41662891 30.9763872,2.41662891 C29.5946191,2.41668555 28.4702128,3.5253125 28.4702128,4.9967793 C28.4702128,5.37910352 28.561783,5.76142773 28.7346979,6.10183789 L29.8390553,8.27961328 C28.3419915,7.82082422 27.2447,6.45844727 27.2447,4.83331445 Z M49.7147319,24.1950059 L43.9539085,27.0346836 C42.2921447,27.8547832 40.3090234,28.0134902 38.5341468,27.4653789 L30.1271511,24.8746367 L29.7878702,24.2067305 C29.7274362,24.0869355 29.6957255,23.9536035 29.6957255,23.8202715 C29.6957255,23.3447168 30.0876851,22.9582578 30.5700085,22.9582578 L35.6785809,22.9582578 C36.3206638,22.9582578 36.9053,22.636709 37.2428,22.098623 C37.5797255,21.5605371 37.6102298,20.9009004 37.3229957,20.3351172 L29.8303809,5.56080664 C29.7424298,5.38731641 29.6957255,5.19207617 29.6957255,4.88763281 C29.6957255,4.19140625 30.2701936,3.625 30.9763298,3.625 C31.4646277,3.625 31.903866,3.89228711 32.1222787,4.32298242 L36.500817,12.9577324 C36.7090617,13.3671875 37.3900362,13.3671875 37.5970745,12.9577324 L38.0907723,11.983627 C38.4851447,11.2083301 39.3582213,10.7682324 40.2192915,10.8979961 L46.7328979,11.8862617 C47.3211532,11.9753574 47.8309936,12.342332 48.0972596,12.8674473 L51.3657532,19.3115078 C51.6207021,19.8141934 51.7553,20.3770879 51.7553,20.9393594 C51.7553,22.3270547 50.9732191,23.5749043 49.7147319,24.1950059 Z"
                              id="Shape"
                            ></path>
                            <g
                              id="exchange-arrows"
                              transform="translate(0.000000, 7.000000)"
                            >
                              <path
                                d="M0.356835937,5.37646753 L15.7030078,5.37646753 L15.7030078,7.51223377 C15.7030078,7.60866234 15.7381641,7.69196104 15.80875,7.76251948 C15.8794922,7.83303896 15.9631641,7.86822078 16.0598047,7.86822078 C16.1639453,7.86822078 16.2494922,7.83490909 16.3161719,7.76812987 L19.8851172,4.20857143 C19.9517969,4.14183117 19.9852344,4.05650649 19.9852344,3.95279221 C19.9852344,3.84888312 19.9517969,3.76351948 19.8848437,3.69693506 L16.3274219,0.148441558 C16.238125,0.0741818182 16.1488281,0.0371688312 16.0595312,0.0371688312 C15.9555469,0.0371688312 15.8699609,0.0705194805 15.8031641,0.137220779 C15.7363281,0.204038961 15.7029297,0.289207792 15.7029297,0.393077922 L15.7029297,2.52884416 L0.356835937,2.52884416 C0.260195312,2.52884416 0.1765625,2.56402597 0.1059375,2.63450649 C0.0353125,2.70498701 0,2.78836364 0,2.88475325 L0,5.02051948 C0,5.11690909 0.0352734375,5.20032468 0.1059375,5.27076623 C0.176601562,5.34120779 0.260195312,5.37646753 0.356835937,5.37646753 Z"
                                id="Shape"
                              ></path>
                              <path
                                d="M19.6285156,9.64819481 L4.2825,9.64819481 L4.2825,7.51235065 C4.2825,7.41596104 4.24714844,7.33254545 4.1765625,7.2621039 C4.10589844,7.19162338 4.02222656,7.15644156 3.925625,7.15644156 C3.82144531,7.15644156 3.73601562,7.18979221 3.66910156,7.25649351 L0.1003125,10.8158571 C0.0335546875,10.8827922 0,10.9678831 0,11.0719091 C0,11.1681818 0.0333984375,11.2498831 0.1003125,11.3163896 L3.65800781,14.8760649 C3.74726562,14.9501688 3.83648437,14.9871429 3.92574219,14.9871429 C4.02234375,14.9871429 4.10601562,14.951961 4.17664062,14.8816753 C4.24722656,14.811039 4.28257812,14.7278182 4.28257812,14.6312727 L4.28257812,12.4955844 L19.6285156,12.4955844 C19.7253125,12.4955844 19.8087109,12.4605584 19.8795703,12.39 C19.9501562,12.3194416 19.9853125,12.2361429 19.9853125,12.1395974 L19.9853125,10.0039091 C19.9853125,9.90748052 19.9500391,9.82418182 19.8795703,9.75377922 C19.8087109,9.68337662 19.7252734,9.64819481 19.6285156,9.64819481 Z"
                                id="Shape"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="table_wrap">
                  <table width="100%">
                    <colgroup>
                      <col width="40%" />
                      <col width="25%" />
                      <col width="25%" />
                      <col width="10%" />
                    </colgroup>
                    <tbody>
                      {cart.map((product: CartItem) => (
                        <tr className="cart-order" key={product.id}>
                          <td align="left">
                            <b>{product.title}</b>
                          </td>
                          <td>{product.price} руб.</td>
                          <td className="shop_cart_count">
                            <button
                              className="shk_count_button"
                              onClick={() =>
                                dispatch(decrementQuantity(product))
                              }
                            >
                              -
                            </button>
                            <span className="shk-count">
                              {product.quantity}
                            </span>
                            <button
                              className="shk_count_button"
                              onClick={() =>
                                dispatch(incrementQuantity(product))
                              }
                            >
                              +
                            </button>
                          </td>
                          <td align="right">
                            <button
                              onClick={() => dispatch(removeFromCart(product))}
                              className="shk-del"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(.clip0)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.6291 12.0004L23.6651 1.96433C24.1147 1.51477 24.1147 0.785965 23.6651 0.336406C23.2156 -0.113153 22.4868 -0.113153 22.0372 0.336406L12.0012 10.3725L1.96509 0.337941C1.51554 -0.111618 0.786728 -0.111618 0.337169 0.337941C-0.11239 0.787499 -0.11239 1.51631 0.337169 1.96587L10.3732 12.0019L0.338703 22.0364C-0.110855 22.486 -0.110855 23.2148 0.338703 23.6644C0.56425 23.8884 0.857307 24.0019 1.1519 24.0019C1.44649 24.0019 1.74108 23.8899 1.96509 23.6644L12.0012 13.6283L22.0372 23.6644C22.2628 23.8884 22.5558 24.0019 22.8504 24.0019C23.145 24.0019 23.4396 23.8899 23.6636 23.6644C24.1132 23.2148 24.1132 22.486 23.6636 22.0364L13.6291 12.0004Z"
                                    fill="#2068EB"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath className="clip0">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="#2068EB"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ textAlign: "right", marginBottom: "20px" }}>
                  <br />
                  Общая сумма: <b>{cost}</b> руб.
                </div>
                {!show && (
                  <div className="form_wrapper review_form_wrapper">
                    <form id="shopOrderForm" onSubmit={handleSubmit(onSubmit)}>
                      <>
                        <table cellPadding="3">
                          <tbody>
                            <tr>
                              <td>Ф.И.О.*:</td>
                              <td>
                                <input
                                  type="text"
                                  className={errors.name ? "wrong-field" : ""}
                                  {...register("name", validateOptions.name)}
                                />
                                {errors.name && (
                                  <p className="error">
                                    <>{errors.name.message}</>
                                  </p>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>Адрес*:</td>
                              <td>
                                <input
                                  type="text"
                                  className={
                                    errors.address ? "wrong-field" : ""
                                  }
                                  {...register(
                                    "address",
                                    validateOptions.address
                                  )}
                                />
                                {errors.address && (
                                  <p className="error">
                                    <>{errors.address.message}</>
                                  </p>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>E-mail*:</td>
                              <td>
                                <input
                                  type="text"
                                  className={errors.email ? "wrong-field" : ""}
                                  {...register("email", validateOptions.email)}
                                />
                                {errors.email && (
                                  <p className="error">
                                    <>{errors.email.message}</>
                                  </p>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>Телефон*:</td>
                              <td>
                                <InputMask
                                  mask="+375 (99) 999-99-99"
                                  type="text"
                                  className={errors.phone ? "wrong-field" : ""}
                                  {...register("phone", validateOptions.phone)}
                                />
                                {errors.phone && (
                                  <p className="error">
                                    <>{errors.phone.message}</>
                                  </p>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>Способ доставки:</td>
                              <td>
                                <select {...register("delivery")}>
                                  <option value=""></option>
                                  <option value="Доставка на дом (по городу)">
                                    Доставка на дом (по городу)
                                  </option>
                                  <option value="Доставка по почте">
                                    Доставка по почте
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td>Способ оплаты:</td>
                              <td>
                                <select {...register("payment")}>
                                  <option value=""></option>
                                  <option value="При получении">
                                    При получении
                                  </option>
                                  <option value="WebMoney">WebMoney</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td>Комментарий:</td>
                              <td>
                                <textarea {...register("message")}></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>
                                <input
                                  type="submit"
                                  className="button"
                                  value="Отправить"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : show ? (
        <div className="container content inner_content text-center">
          Ваш заказ успешно отправлен!
        </div>
      ) : (
        <div className="empty inner_content">
          <div className="shop-cart-empty text-center">
            Пусто
            <div>
              <Link className="cart_btn" to="/catalog">
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
