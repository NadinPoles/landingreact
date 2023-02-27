import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrums from "../components/Breadcrumbs";
import { CatalogList } from "../utils/constants";
import ProductCard from "../components/ProductCard";
import { setWidthFilter, getSectionProducts } from "../redux/actions";
import { RootState } from "../redux/store";
import { Product } from "../redux/types";

const CatalogSectionPage = () => {
  const [openFilter, setOpenedFilter] = useState(false);
  const params = useParams();
  const topic = CatalogList.filter((item) => item.slug === params.slug)[0];
  const dispatch = useDispatch();
  const filterProducts = useSelector(
    (state: RootState) => state.filters.filterProducts
  );
  useEffect(() => {
    try {
      dispatch(getSectionProducts(topic.section));
    } catch (error) {
      console.log(error);
    }
  }, [topic.section]);

  return (
    <>
      <Breadcrums title={topic.title} />
      <div className="container inner_content">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <ul className="leftmenu">
              {CatalogList.map((item) => (
                <li
                  className={item.slug === params.slug ? "active" : ""}
                  key={item.slug}
                >
                  <Link
                    onClick={() => dispatch(getSectionProducts(item.section))}
                    to={`/catalog/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="filter_btn"
              onClick={() => setOpenedFilter(!openFilter)}
            >
              Фильтр
            </div>
            <div id="filters" className={openFilter ? "opened" : ""}>
              <div className="filter_block">
                <div className="filter_head">
                  <h3>Ширина, см</h3>
                </div>
                {topic.section &&
                  Array.from(
                    new Set(topic.section.map((item: any) => item.width))
                  ).map((val) => (
                    <div className="filter_row" key={val}>
                      <input
                        type="radio"
                        id={val}
                        name="width"
                        value={val}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          dispatch(getSectionProducts(topic.section)) &&
                          dispatch(setWidthFilter(e))
                        }
                      />
                      <label htmlFor={val}>{val}</label>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
            <div className="row">
              {filterProducts &&
                filterProducts !== undefined &&
                filterProducts.map((item: Product) => (
                  <ProductCard item={item} topic={topic} key={item.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogSectionPage;
