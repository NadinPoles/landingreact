import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { GalleryList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";

const PER_PAGE = 9;

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(GalleryList.length / PER_PAGE);
  function handlePageClick(selectedPage: any) {
    setCurrentPage(selectedPage.selected);
  }
  const currentPageData = GalleryList.slice(offset, offset + PER_PAGE).map(
    (gallery) => (
      <div
        className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 gallery_razdel_col"
        key={gallery.id}
      >
        <Link to={`/gallery/${gallery.slug}`}>
          <span className="sale_image">
            {gallery.image && (
              <img src={`/images/${gallery.image}`} alt={gallery.title} />
            )}
          </span>
          <span className="news_a">{gallery.title}</span>
        </Link>
      </div>
    )
  );
  return (
    <>
      <Breadcrums title="Галерея" />
      <div className="container">
        <div className="row">{currentPageData}</div>
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

export default GalleryPage;
