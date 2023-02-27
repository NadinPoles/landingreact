import React, { useState } from "react";
import { Accordion } from "react-accordion-ts";
import "react-accordion-ts/src/panel.css";
import { useForm } from "react-hook-form";
import Breadcrums from "../components/Breadcrumbs";

const VacancyPage = () => {
  const items = [
    {
      title: <div className="question">Менеджер по продажам</div>,
      content: (
        <div className="answer content">
          <h5>Требования к кандидату:</h5>
          <ul>
            <li>
              Специалиста с умением продавать и выстраивать коммуникации с
              клиентами
            </li>
            <li>Возможно без опыта в интернет-маркетинге</li>
            <li>С желанием развиваться и расти вместе с компанией</li>
            <li>Со стремлением хорошо зарабатывать</li>
          </ul>
          <h5>Должностные обязанности:</h5>
          <ul>
            <li>Активный поиск клиентов (холодные звонки)</li>
            <li>Обработка входящих заявок</li>
            <li>Переговоры с лидами</li>
            <li>
              Ведение отчетности по поступающим обращениям (работа в системе
              Битрикс-24)
            </li>
            <li>
              Подготовка коммерческих предложений и их презентация клиентам
            </li>
            <li>Проведение встреч с потенциальными клиентами</li>
            <li>
              Выявление требований клиента и оценка возможностей компании по
              выполнению задания
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: <div className="question">Специалист по контекстной рекламе</div>,
      content: (
        <div className="answer content">
          <h5>Требования к кандидату:</h5>
          <ul>
            <li>
              Опыт создания и ведения рекламных кампаний в Яндекс Директ, РСЯ и
              Google AdWords от 6 месяцев
            </li>
            <li>Опыт работы с семантическими ядрами больших объемов</li>
            <li>
              Грамотный русский язык, умение писать слоганы, заголовки, УТП
            </li>
            <li>Готовность отвечать за результат</li>
          </ul>
          <h5>Должностные обязанности:</h5>
          <ul>
            <li>
              Настройка и ведение рекламных кампаний в Яндекс, Директ и
              Google.AdWords
            </li>
            <li>
              Анализ эффективности рекламных кампаний в системах
              Google.Analytics и Яндекс.Метрика
            </li>
            <li>Ежедневная оптимизация рекламных кампаний</li>
            <li>Контроль и уменьшение стоимости клика</li>
            <li>
              Настройка и ведение ретаргетинговых/ремаркетинговых рекламных
              кампаний
            </li>
            <li>Подготовка отчетности по эффективности рекламных кампаний</li>
            <li>Расширение и анализ семантического ядра</li>
            <li>
              Постоянный поиск новых возможностей для повышения эффективности
              рекламных кампаний
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateOptions = {
    name: { required: "Это поле необходимо заполнить" },
    question: { required: "Это поле необходимо заполнить" },
  };
  const onSubmit = () => {
    setShow(true);
    reset();
  };
  return (
    <>
      <Breadcrums title="Вакансии" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div className="answer_wrap">
              <Accordion items={items} duration={300} multiple={false} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 content_form">
            <div className="form_wrapper">
              <div className="form_title">Задайте вопрос</div>
              {!show && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className={errors.name ? "wrong-field" : ""}
                      {...register("name", validateOptions.name)}
                    />
                    {errors.name && (
                      <p className="error">
                        <>{errors.name.message}</>
                      </p>
                    )}
                    <textarea
                      placeholder="Ваш вопрос"
                      className={errors.question ? "wrong-field" : ""}
                      {...register("question", validateOptions.question)}
                    ></textarea>
                    {errors.question && (
                      <p className="error">
                        <>{errors.question.message}</>
                      </p>
                    )}
                    <input type="submit" value="Отправить" />
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
      </div>
    </>
  );
};

export default VacancyPage;
