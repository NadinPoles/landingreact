import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { SaleList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";

const PER_PAGE = 9;

const SalePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(SaleList.length / PER_PAGE);
  function handlePageClick(selectedPage: any) {
    setCurrentPage(selectedPage.selected);
  }
  const currentPageData = SaleList.slice(offset, offset + PER_PAGE).map(
    (sale) => (
      <div
        className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
        key={sale.id}
      >
        <Link className="sale_image" to={`/sale/${sale.slug}`}>
          {sale.image && <img src={`/images/${sale.image}`} alt={sale.title} />}
        </Link>
        <div className="news_a">
          <Link to={`/sale/${sale.slug}`}>{sale.title}</Link>
        </div>
        <div className="news_introtext">{sale.text}</div>
        <div className="news_detail">
          <Link to={`/sale/${sale.slug}`}>Подробнее</Link>
        </div>
      </div>
    )
  );
  return (
    <>
      <Breadcrums title="Акции" />
      <div className="container sale_container">
        <div className="row sale_row">{currentPageData}</div>
        <ReactPaginate
          previousLabel={"Назад"}
          nextLabel={"Вперед"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default SalePage;
