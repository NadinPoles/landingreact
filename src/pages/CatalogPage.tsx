import React from "react";
import { Link } from "react-router-dom";
import Breadcrums from "../components/Breadcrumbs";
import { CatalogList } from "../utils/constants";

const CatalogPage = () => {
  return (
    <>
      <Breadcrums title="Каталог" />
      <div className="container">
        <div className="row catalog text-center">
          {CatalogList.map((item) => (
            <div
              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={item.slug}
            >
              <Link to={`/catalog/${item.slug}`}>
                <span className="razdel_cataloga_img">
                  {item.image && (
                    <img src={`/images/${item.image}`} alt={item.title} />
                  )}
                </span>
                <span className="razdel_cataloga_title">{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
