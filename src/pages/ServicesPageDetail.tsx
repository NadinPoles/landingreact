import React from "react";
import { useParams } from "react-router-dom";
import { ServicesList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";

const ServicesPageDetail = () => {
  const params = useParams();
  const topic = ServicesList.filter((item) => item.slug === params.slug)[0];
  return (
    <>
      <Breadcrums title={topic.title} />
      <div className="container content inner_content"></div>
    </>
  );
};

export default ServicesPageDetail;
