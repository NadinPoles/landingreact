import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

interface Props {
  btnClass?: string;
  modalBtnText?: string;
}

const ModalForm = ({ btnClass, modalBtnText }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
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
  };
  return (
    <>
      <span className={btnClass} onClick={handleShow}>
        {modalBtnText}
      </span>
      <Modal show={showModal} onHide={handleClose}>
        <div className="form_wrapper">
          <div className="closeBtn" onClick={handleClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.6291 12.0004L23.6651 1.96433C24.1147 1.51477 24.1147 0.785965 23.6651 0.336406C23.2156 -0.113153 22.4868 -0.113153 22.0372 0.336406L12.0012 10.3725L1.96509 0.337941C1.51554 -0.111618 0.786728 -0.111618 0.337169 0.337941C-0.11239 0.787499 -0.11239 1.51631 0.337169 1.96587L10.3732 12.0019L0.338703 22.0364C-0.110855 22.486 -0.110855 23.2148 0.338703 23.6644C0.56425 23.8884 0.857307 24.0019 1.1519 24.0019C1.44649 24.0019 1.74108 23.8899 1.96509 23.6644L12.0012 13.6283L22.0372 23.6644C22.2628 23.8884 22.5558 24.0019 22.8504 24.0019C23.145 24.0019 23.4396 23.8899 23.6636 23.6644C24.1132 23.2148 24.1132 22.486 23.6636 22.0364L13.6291 12.0004Z"
                  fill="#C1C1C1"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="form_title">Консультация</div>
          <div className="form_text">
            У вас остались сомнения или
            <br />
            возникли какие-нибудь вопросы?
          </div>
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
                <input
                  type="text"
                  placeholder="Электронная почта"
                  className={errors.email ? "wrong-field" : ""}
                  {...register("email", validateOptions.email)}
                />
                {errors.email && (
                  <p className="error">
                    <>{errors.email.message}</>
                  </p>
                )}
                <InputMask
                  mask="+375 (99) 999-99-99"
                  type="text"
                  placeholder="Ваш телефон"
                  className={errors.phone ? "wrong-field" : ""}
                  {...register("phone", validateOptions.phone)}
                />
                {errors.phone && (
                  <p className="error">
                    <>{errors.phone.message}</>
                  </p>
                )}
                <textarea
                  placeholder="Ваш вопрос"
                  {...register("message")}
                ></textarea>
                <input type="submit" value="Задать вопрос" />
              </>
            </form>
          )}
          {show && (
            <div className="mail-status">
              Ваше сообщение успешно отправлено!
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalForm;
