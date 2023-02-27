import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { VideoPageList } from "../utils/constants";
import Breadcrums from "../components/Breadcrumbs";
import Fancybox from "../components/Fancybox";

const PER_PAGE = 9;

const VideoPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(VideoPageList.length / PER_PAGE);
  function handlePageClick(selectedPage: any) {
    setCurrentPage(selectedPage.selected);
  }
  const currentPageData = VideoPageList.slice(offset, offset + PER_PAGE).map(
    (video) => (
      <div
        className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 video_col"
        key={video.id}
      >
        <a
          href={`https://www.youtube.com/watch?v=${video.youtube}&autoplay=0`}
          data-fancybox={`video${video.id}`}
        >
          <span className="video_img">
            {video.image && (
              <img src={`/images/${video.image}`} alt={video.title} />
            )}
          </span>
          <span className="news_a">{video.title}</span>
        </a>
      </div>
    )
  );
  return (
    <>
      <Breadcrums title="Видео" />
      <div className="container">
        <Fancybox>
          <div className="row">{currentPageData}</div>
        </Fancybox>
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

export default VideoPage;
