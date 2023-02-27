import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { VideoList, ReviewsList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";
import Fancybox from "../components/Fancybox";
import Reviews from "../components/Reviews";

const ReviewsPage = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateOptions = {
    name: { required: "Это поле необходимо заполнить" },
    title: { required: "Это поле необходимо заполнить" },
  };
  const onSubmit = () => {
    setShow(true);
    reset();
  };
  return (
    <>
      <Breadcrums title="Отзывы" />
      <div className="container reviews_wrapper text-center">
        <Reviews />
      </div>
      <div className="container video_reviews text-center">
        <Fancybox>
          <div className="row">
            {VideoList.map((video) => (
              <div
                className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 video_col"
                key={video.id}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtube}&autoplay=0`}
                  data-fancybox={`video${video.id}`}
                >
                  <span className="video_img">
                    {video.image && (
                      <img src={`images/${video.image}`} alt="Видео" />
                    )}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </Fancybox>
      </div>
      <div className="container">
        <div className="reviews_wrap">
          {ReviewsList.map((review) => (
            <div className="review_block" key={review.id}>
              <div className="review_author">{review.author}</div>
              <div className="review_date">{review.date}</div>
              <div className="review_title">{review.title}</div>
              <div className="review_text">{review.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="form_wrapper review_form_wrapper">
              <div className="form_title">Добавить отзыв о товаре</div>
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
                          <td>Введите заголовок</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Заголовок отзыва"
                              className={errors.title ? "wrong-field" : ""}
                              {...register("title", validateOptions.title)}
                            />
                            {errors.title && (
                              <p className="error">
                                <>{errors.title.message}</>
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
      </div>
    </>
  );
};

export default ReviewsPage;
