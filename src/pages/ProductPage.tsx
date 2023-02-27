import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Breadcrums from "../components/Breadcrumbs";
import { CatalogList } from "../utils/constants";
import Fancybox from "../components/Fancybox";
import { addToCart } from "../redux/actions";

const ProductPage = () => {
  const params = useParams();
  const topic = CatalogList.map(
    (item) => item.section && item.section.filter((i) => i.slug === params.slug)
  ).filter((item) => (item.length > 0 ? true : false))[0];
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
  };

  return (
    <>
      {topic && (
        <>
          {topic[0] && <Breadcrums title={topic[0].title} />}
          <div className="container inner_content tovar_detail">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <div className="slider-for">
                  <Fancybox>
                    <Slider {...settings}>
                      {topic[0].image && (
                        <div className="item">
                          <a
                            data-fancybox="gallery"
                            href={`images/${topic[0].image}`}
                          >
                            <img
                              src={`images/${topic[0].image}`}
                              alt={topic[0].title}
                            />
                          </a>
                        </div>
                      )}
                      {topic[0].gallery &&
                        topic[0].gallery.map(
                          (item) =>
                            item.image && (
                              <div className="item" key={item.image}>
                                <a
                                  data-fancybox="gallery"
                                  href={`images/${item.image}`}
                                >
                                  <img
                                    src={`images/${item.image}`}
                                    alt={topic[0].title}
                                  />
                                </a>
                              </div>
                            )
                        )}
                    </Slider>
                  </Fancybox>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                {topic[0].articul && (
                  <div className="articul">Артикул: {topic[0].articul}</div>
                )}
                {topic[0].instock === "yes" && (
                  <div className="in_stock">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.48869 0L3.73895 4.83805L1.30518 2.39449L0 3.69972L3.83707 7.52699L10 1.55055L8.48869 0Z"
                        fill="#3EB14E"
                      />
                    </svg>
                    В наличии
                  </div>
                )}
                <div className="tovar_detail_price">
                  <span className="shk-price">{topic[0].price}</span> руб.
                </div>
                <button
                  onClick={() => (
                    dispatch(addToCart(topic[0])),
                    setIsAdded(true),
                    setTimeout(() => {
                      setIsAdded(false);
                    }, 2000)
                  )}
                  className={`shk-but ${isAdded ? "added" : ""}`}
                >
                  {isAdded ? "В корзине" : "В корзину"}
                </button>
                <div className="tovar_text">
                  <div className="tovar_text_title">Доставка по Минску</div>

                  <ul>
                    <li>Курьерская доставка</li>
                    <li>7 пунктов самовывоза</li>
                  </ul>

                  <div className="tovar_text_title">Доставка по Беларуси</div>

                  <ul>
                    <li>Курьерская доставка</li>
                    <li>Почта EMS</li>
                  </ul>
                </div>
              </div>
            </div>
            {topic[0].techchars && (
              <>
                <div className="tovar_char_title">
                  Технические характеристики
                </div>
                <table className="char_table">
                  <tbody>
                    {topic[0].techchars.map((char) => (
                      <tr key={char.name}>
                        <td>{char.name}</td>
                        <td>{char.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {topic[0].text && (
              <>
                <div className="tovar_char_title">Описание</div>
                <p>{topic[0].text}</p>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
