import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { CertificatesList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";
import Fancybox from "../components/Fancybox";

const PER_PAGE = 4;

const CertificatesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(CertificatesList.length / PER_PAGE);
  function handlePageClick(selectedPage: any) {
    setCurrentPage(selectedPage.selected);
  }
  const currentPageData = CertificatesList.slice(offset, offset + PER_PAGE).map(
    (сertificate) => (
      <div className="row sertficate_row" key={сertificate.id}>
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 sertficate_img">
          {сertificate.image && (
            <a
              className="fancybox_img"
              data-fancybox={`gallery${сertificate.id}`}
              href={`/images/${сertificate.image}`}
            >
              <img
                src={`/images/${сertificate.image}`}
                alt={сertificate.title}
              />
            </a>
          )}
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
          <div className="sertficate_name">{сertificate.title}</div>
          <div className="sertficate_text">{сertificate.text}</div>
          <div className="sertficate_author">{сertificate.author}</div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <hr />
        </div>
      </div>
    )
  );
  return (
    <>
      <Breadcrums title="Сертификаты" />
      <div className="container sertificate_container">
        <Fancybox>{currentPageData}</Fancybox>
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

export default CertificatesPage;
