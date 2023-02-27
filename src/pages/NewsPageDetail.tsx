import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { NewsList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";

const NewsPageDetail = () => {
  const params = useParams();
  const topic = NewsList.filter((item) => item.slug === params.slug)[0];
  return (
    <>
      <Breadcrums title={topic.title} />
      <div className="container content inner_content">{topic.text}</div>
    </>
  );
};

export default NewsPageDetail;
