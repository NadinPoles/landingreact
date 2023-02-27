import React, { useState } from "react";
import { Accordion } from "react-accordion-ts";
import "react-accordion-ts/src/panel.css";
import { useForm } from "react-hook-form";
import Breadcrums from "../components/Breadcrumbs";
import { FaqList } from "../utils/constants";

const FaqPage = () => {
  const items = FaqList.map((faq) => ({
    title: <div className="question">{faq.title}</div>,
    content: <div className="answer content">{faq.text}</div>,
    open: false,
  }));
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
      <Breadcrums title="Вопросы и ответы" />
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

export default FaqPage;
