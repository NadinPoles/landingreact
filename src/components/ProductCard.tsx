import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import noimage from "../assets/images/noimage.png";
import { addToCart } from "../redux/actions";
import { Product } from "../redux/types";

const ProductCard = ({ item, topic }: { item: Product; topic: any }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={item.id}>
      <div className="tovar text-center shk-item">
        <div className="marks">
          {item.new === "yes" && <span className="new">Новинки</span>}
          {item.recommend === "yes" && (
            <span className="recommend">Рекомендуемое</span>
          )}
          {item.popular === "yes" && (
            <span className="popular">Популярное</span>
          )}
        </div>
        <Link
          className="razdel_cataloga_img"
          to={`/catalog/${topic.slug}/${item.slug}`}
        >
          <img
            className="shk-image"
            src={item.image ? `/images/${item.image}` : noimage}
            alt={item.title}
          />
        </Link>
        <div className="tovar_name">
          <Link to={`/catalog/${topic.slug}/${item.slug}`}>{item.title}</Link>
        </div>

        <div className="tovar_price">
          <span className="shk-price">{item.price}</span> byn
        </div>
        <button
          onClick={() => (
            dispatch(addToCart(item)),
            setIsAdded(true),
            setTimeout(() => {
              setIsAdded(false);
            }, 2000)
          )}
          className={`shk-but to_cart ${isAdded ? "added" : ""}`}
        >
          <span className="to_cart_span">
            {isAdded ? "В корзине" : "В корзину"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
