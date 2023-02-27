import React from "react";
import { Link } from "react-router-dom";
import Breadcrums from "../components/Breadcrumbs";

const NotFoundPage = () => {
  return (
    <>
      <Breadcrums title="404" />
      <div className="container content inner_content">
        <p>
          Страница не найдена. Перейдите, пожалуйста, на{" "}
          <Link to="/">главную</Link>.
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
