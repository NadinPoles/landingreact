import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  HomePageSlider,
  AdvantagesList,
  ServicesList,
  NewsList,
  SaleList,
  ClientsList,
  CatalogList,
} from "../utils/constants";
import Reviews from "../components/Reviews";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const clients_settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="main_slider">
        <Slider {...settings}>
          {HomePageSlider.map((slide) => (
            <div key={slide.id}>
              <div
                className="item"
                style={{
                  background: `url(/images/${slide.image}) no-repeat 0 0`,
                  backgroundSize: "cover",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <h2>{slide.title}</h2>
                      <div className="slider_text">{slide.text}</div>
                      {slide.link && (
                        <div className="slider_btn">
                          <Link to={slide.link}>Читать далее</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="main_text">
        <div className="container">
          <div className="row">
            {AdvantagesList.map((advantage) => (
              <div
                key={advantage.id}
                className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 main_text_col"
              >
                <div className="main_text_number">{advantage.number}</div>
                <div>{advantage.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container services_container">
        <div className="text-center services_text">
          <h2>Наши услуги</h2>
          <p>
            Каждый проект полностью курируется дизайнером, грамотно руководящим
            происходящими там процессами и всегда готовым ответить на любой
            интересующий Вас вопрос.
          </p>
        </div>
        <div className="row">
          {ServicesList.map((service) => (
            <div
              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={service.slug}
            >
              <Link
                className="services_a"
                to={`/services/${service.slug}`}
                style={{
                  background: `url(/images/${service.image}) no-repeat top center`,
                  backgroundSize: "cover",
                }}
              >
                <span className="services_a_text">
                  {service.popular && (
                    <span className="popular">Популярное</span>
                  )}
                  <span className="services_a_title">{service.title}</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
        <hr className="catalog_hr" />
      </div>
      <section className="tovar_section">
        <div className="container">
          <div className="text-center">
            <h2>Наша продукция</h2>
          </div>
          {CatalogList.slice(0, 1).map((item) => (
            <div className="row" key={item.title}>
              {item.section &&
                item.section
                  .slice(0, 3)
                  .map((product) => (
                    <ProductCard item={product} topic={item} key={product.id} />
                  ))}
            </div>
          ))}
          <Link className="btn btn-default btn-more" to="/catalog">
            Показать больше
          </Link>
        </div>
      </section>
      <div className="container">
        <div className="text-center">
          <h2>Наш каталог</h2>
        </div>
        <div className="row catalog_row">
          {CatalogList.map((item) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
              key={item.slug}
            >
              <div className="catalog_razdel">
                <table>
                  <tbody>
                    <tr>
                      <td className="catalog_razdel_image">
                        {item.image && (
                          <Link to={`/catalog/${item.slug}`}>
                            <img
                              src={`/images/${item.image}`}
                              alt={item.title}
                            />
                          </Link>
                        )}
                      </td>
                      <td>
                        <Link
                          className="catalog_razdel_a"
                          to={`/catalog/${item.slug}`}
                        >
                          {item.title}
                        </Link>
                        <div className="catalog_razdel_link">
                          <Link to={`/catalog/${item.slug}`}>
                            Весь перечень
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center catalog_btn">
          <Link to="/catalog">Перейти в каталог</Link>
        </div>
        <hr className="catalog_hr" />
      </div>
      <div className="container news_container">
        <div className="text-center news_text">
          <h2>Последние новости</h2>
          <span className="d-none d-md-block">
            <Link to="/news">Все новости</Link>
          </span>
        </div>
        <div className="row news_row">
          {NewsList.map((item) => (
            <div
              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={item.id}
            >
              <div className="news_a">
                <Link to={`/news/${item.slug}`}>{item.title}</Link>
              </div>
              <div className="news_introtext">{item.text}</div>
              <div className="news_detail">
                <Link to={`/news/${item.slug}`}>Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="d-block d-md-none text-center news_text">
          <Link to="/news">Читать далее</Link>
        </div>
      </div>
      <section className="reviews">
        <div className="container">
          <div className="text-center">
            <h2>Что говорят клиенты</h2>
          </div>
          <Reviews />
        </div>
      </section>
      <div className="container main_content">
        <div className="row">
          <div className="order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <h2>Работать с нашей компанией стало намного проще</h2>
            <p>
              За многие годы мы зарекомендовали себя как квалифицированная и
              надежная команда специалистов. Наша основная миссия – помочь
              клиентам создать максимально комфортный, уютный и современный
              интерьер:
            </p>
            <ul>
              <li>
                В нашем магазине уже продано <strong>более 7000</strong>
                различных комплектов мебели и товаров для дома;
              </li>
              <li>
                Постоянные скидки на многие категории товаров, а также
                предоставление подарочных сертификатов;
              </li>
            </ul>
            <p>
              Lorem Ipsum не только успешно пережил без заметных изменений пять
              веков.
            </p>
            <p>
              <Link to="/about">Читать далее</Link>
            </p>
          </div>
          <div className="order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2 col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <img src="/images/content.png" alt="Компания" />
          </div>
        </div>
        <hr />
      </div>
      <div className="container sale_container">
        <div className="text-center news_text">
          <h2>Акционные предложения</h2>
          <span className="d-none d-md-block">
            <Link to="/sale">Все акции</Link>
          </span>
        </div>
        <div className="row news_row">
          {SaleList.slice(0, 3).map((sale) => (
            <div
              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={sale.id}
            >
              <Link className="sale_image" to={`/sale/${sale.slug}`}>
                {sale.image && (
                  <img src={`/images/${sale.image}`} alt={sale.title} />
                )}
              </Link>
              <div className="news_a">
                <Link to={`/sale/${sale.slug}`}>{sale.title}</Link>
              </div>
              <div className="news_introtext">{sale.text}</div>
              <div className="news_detail">
                <Link to={`/sale/${sale.slug}`}>Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="d-block d-md-none text-center news_text">
          <Link to="/sale">Все акции</Link>
        </div>
        <hr />
      </div>
      <div className="container text-center clients_container">
        <div className="text-center">
          <h2>Наши клиенты</h2>
        </div>
        <div id="clients">
          <Slider {...clients_settings}>
            {ClientsList.map(
              (client) =>
                client.image && (
                  <div className="item" key={client.id}>
                    <div className="clients_img">
                      <img src={`/images/${client.image}`} alt="Клиент" />
                    </div>
                  </div>
                )
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomePage;
