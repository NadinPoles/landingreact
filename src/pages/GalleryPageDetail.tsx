import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GalleryList } from "../utils/constants";
import Fancybox from "../components/Fancybox";
import Breadcrums from "../components/Breadcrumbs";
const galleryPerRow = 9;

const GalleryPageDetail = () => {
  const params = useParams();
  const topic = GalleryList.filter((item) => item.slug === params.slug)[0];
  const [next, setNext] = useState(galleryPerRow);
  const handleMoreGallery = () => {
    setNext(next + galleryPerRow);
  };
  interface Topic {
    title: string;
    images: any;
  }

  return (
    <div className="container inner_content">
      <Breadcrums title={topic.title} />
      <Fancybox>
        <div className="row gallery_row">
          {topic.images &&
            topic.images.slice(0, next).map((image) => (
              <div
                className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 gallery_col"
                key={image.id}
              >
                <a
                  className="fancybox_img"
                  data-fancybox="gallery"
                  href={`images/${image.image}`}
                >
                  <img src={`images/${image.image}`} alt={topic.title} />
                </a>
              </div>
            ))}
        </div>
      </Fancybox>
      {topic.images !== undefined && next < topic.images.length && (
        <button
          className="btn btn-primary btn-more"
          onClick={handleMoreGallery}
        >
          Загрузить еще
        </button>
      )}
    </div>
  );
};

export default GalleryPageDetail;
