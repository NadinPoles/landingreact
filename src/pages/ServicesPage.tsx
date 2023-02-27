import React from "react";
import { Link } from "react-router-dom";
import Breadcrums from "../components/Breadcrumbs";
import { ServicesList } from "../utils/constants";

const ServicesPage = () => {
  return (
    <>
      <Breadcrums title="Услуги" />
      <div className="container sale_container">
        <div className="row sale_row">
          {ServicesList.map((service) => (
            <div
              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={service.slug}
            >
              <Link className="sale_image" to={`/services/${service.slug}`}>
                {service.image && (
                  <img src={`/images/${service.image}`} alt={service.title} />
                )}
              </Link>
              <div className="news_a">
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </div>
              <div className="news_detail">
                <Link to={`/services/${service.slug}`}>Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
