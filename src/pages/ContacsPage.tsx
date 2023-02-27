import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Breadcrums from "../components/Breadcrumbs";

const ContactsPage = () => {
  const mapState = {
    center: [53.909181, 27.59675],
    zoom: 17,
    controls: ["zoomControl", "fullscreenControl"],
    behaviors: ["disable('scrollZoom')"],
  };
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateOptions = {
    name: { required: "Это поле необходимо заполнить" },
    phone: {
      required: "Это поле необходимо заполнить",
      minLength: {
        value: 9,
        message: "В номере должно быть не менее 9 цифр",
      },
    },
  };
  const onSubmit = () => {
    setShow(true);
    reset();
  };

  return (
    <>
      <Breadcrums title="Контакты" />
      <Wrapper className="container">
        <div id="map">
          <YMaps>
            <Map
              width="100%"
              height="50vh"
              defaultState={mapState}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              <Placemark
                geometry={[53.909181, 27.59675]}
                options={{
                  iconColor: "#7AC517",
                }}
                properties={{
                  hintContent: "г. Минск, ул. Платонова, 20Б/3, оф.60",
                  balloonContent: "г. Минск, ул. Платонова, 20Б/3, оф.60",
                }}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              />
            </Map>
          </YMaps>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 contact_info">
            <div className="contacts_title">Адрес</div>
            <p>
              г. Минск, <br />
              ул. Платонова, 20Б/3, оф.60
            </p>
            <div className="contacts_title">Телефон</div>
            <p>
              <a href="tel:+375297654321">8-029-765-43-21</a>
              <br />
              <a href="tel:+375447345678">8-044-734-56-78</a>
            </p>
            <div className="contacts_title">E-mail</div>
            <p>
              <a href="mailto:info@site.by?Subject=Контактная информация">
                info@site.by
              </a>
            </p>
            <div className="contacts_title">Юридические реквизиты</div>
            <p>Минск, пр-т Дзержинского, д.15, оф.813 (цокольный этаж)</p>
            <p>
              УНП 123456789 <br />
              р/с BY13ММBN30120649300109330000 ОАО «Банк Москва-Минск» <br />
              БИК ММВNBY22
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
            <div className="how_go">
              <p className="contact_heading">Как добраться на авто?</p>
              <p>
                Заезд на парковку со стороны м. « Грушевка» , перед домом № 11
                по пр. Дзержинского, направо.
              </p>
              <p>&nbsp;</p>
              <p className="contact_heading">Как добраться от метро?</p>
              <p>
                Ближайшая станция метро: « <strong>Грушевка</strong>»
              </p>
              <p>
                Выйти на ст.м. «Грушевка» и выйти на проспект Дзержинского
                (выход в сторону ул. Папанина, Грушевского сквера).
              </p>
              <p>
                Идти прямо вдоль проспекта в обратную сторону от транспортной
                развязки. Через 350 м справа Вы увидите высотный 20 –ти этажный
                дом №15.
              </p>
            </div>
            <div className="form_wrapper review_form_wrapper">
              <div className="form_title">
                Оставьте заявку на просчет стоимости услуг
              </div>
              {!show && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <>
                    <table>
                      <tbody>
                        <tr>
                          <td>Ваше имя</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Имя"
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
                          <td>Ваш телефон</td>
                          <td>
                            <InputMask
                              mask="+375 (99) 999-99-99"
                              type="text"
                              placeholder="Номер телефона"
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
                          <td>Сообщение</td>
                          <td>
                            <textarea
                              placeholder="Сообщение"
                              {...register("message")}
                            ></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <input type="submit" value="Отправить" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                </form>
              )}
              {show && (
                <div className="mail-status">
                  Ваше сообщение успешно отправлено!
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  #map {
    margin-bottom: 60px;
  }
  .contacts_title {
    font-size: 18px;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .contact_info p {
    margin-bottom: 25px;
  }
  .how_go {
    padding-left: 20px;
    border-left: 3px solid #2068eb;
    margin-bottom: 55px;
  }
  .how_go p {
    margin-bottom: 5px;
  }
`;

export default ContactsPage;
