import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsList } from "../utils/constants";
import noimage from "../assets/images/noimage.png";
import Breadcrums from "../components/Breadcrumbs";

interface INews {
  id: number;
  title: string;
  image: string;
  slug: string;
  text: string;
}

const NewsPage = () => {
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    setNews(NewsList);
  }, []);

  return (
    <>
      <Breadcrums title="Новости" />
      <div className="container sale_container">
        <div className="row sale_row">
          {news.map((item) => (
            <div
              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={item.id}
            >
              <Link
                className="sale_image sale_image_empty"
                to={`/news/${item.slug}`}
              >
                <img src={item.image ? item.image : noimage} alt={item.title} />
              </Link>
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
      </div>
    </>
  );
};

export default NewsPage;
