import React from "react";
import { useParams } from "react-router-dom";
import { SaleList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";

const SalePageDetail = () => {
  const params = useParams();
  const topic = SaleList.filter((item) => item.slug === params.slug)[0];
  return (
    <>
      <Breadcrums title={topic.title} />
      <div className="container content inner_content">{topic.text}</div>
    </>
  );
};

export default SalePageDetail;
