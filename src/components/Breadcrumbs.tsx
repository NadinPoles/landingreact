import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import {
  GalleryList,
  SaleList,
  ServicesList,
  CatalogList,
} from "../utils/constants";

const DynamicGalleryBreadcrumb = ({ match }: { match: any }) => (
  <span>
    {GalleryList.filter((item) => item.slug === match.params.slug)[0].title}
  </span>
);
const DynamicSaleBreadcrumb = ({ match }: { match: any }) => (
  <span>
    {SaleList.filter((item) => item.slug === match.params.slug)[0].title}
  </span>
);
const DynamicServicesBreadcrumb = ({ match }: { match: any }) => (
  <span>
    {ServicesList.filter((item) => item.slug === match.params.slug)[0].title}
  </span>
);
const DynamicCatalogBreadcrumb = ({ match }: { match: any }) => (
  <span>
    {CatalogList.filter((item) => item.slug === match.params.slug)[0].title}
  </span>
);
const DynamicProductBreadcrumb = ({ match }: { match: any }) => (
  <span>
    {
      CatalogList.map(
        (i) =>
          i.section &&
          i.section.filter((item) => item.slug === match.params.slug)
      ).filter((item) => (item.length > 0 ? true : false))[0][0].title
    }
  </span>
);

const routes = [
  { path: "/", breadcrumb: "Главная" },
  { path: "/news", breadcrumb: "Новости" },
  { path: "/news/:slug", breadcrumb: "" },
  { path: "/gallery", breadcrumb: "Галерея" },
  {
    path: "/gallery/:slug",
    breadcrumb: DynamicGalleryBreadcrumb,
  },
  { path: "/contacts", breadcrumb: "Контакты" },
  { path: "/about", breadcrumb: "Компания" },
  { path: "/sale", breadcrumb: "Акции" },
  {
    path: "/sale/:slug",
    breadcrumb: DynamicSaleBreadcrumb,
  },
  { path: "/reviews", breadcrumb: "Отзывы" },
  { path: "/vacancy", breadcrumb: "Вакансии" },
  { path: "/video", breadcrumb: "Видео" },
  { path: "/certificates", breadcrumb: "Сертификаты" },
  { path: "/staff", breadcrumb: "Сотрудники" },
  { path: "/faq", breadcrumb: "Вопрос-ответ" },
  { path: "/services", breadcrumb: "Услуги" },
  {
    path: "/services/:slug",
    breadcrumb: DynamicServicesBreadcrumb,
  },
  { path: "/catalog", breadcrumb: "Каталог" },
  {
    path: "/catalog/:slug",
    breadcrumb: DynamicCatalogBreadcrumb,
  },
  {
    path: "/catalog/:slug/:slug",
    breadcrumb: DynamicProductBreadcrumb,
  },
  { path: "/cart", breadcrumb: "Корзина" },
  { path: "/*", breadcrumb: "404" },
];

const Breadcrums: React.FC<{
  title: string | undefined;
}> = ({ title }) => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <section className="breadcrumbs_wrapper">
      <div className="container text-center">
        <ul className="B_crumbBox">
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <li className="breadcrumb-item" key={match.pathname}>
              <NavLink to={match.pathname}>{breadcrumb}</NavLink>
            </li>
          ))}
        </ul>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Breadcrums;
