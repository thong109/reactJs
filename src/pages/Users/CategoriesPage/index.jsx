import { memo, useEffect, useState } from 'react';
import Breadcrumb from '../Theme/Breadcrumb';
import { ROUTERS } from '../../../utils/router';
import { generatePath, Link } from 'react-router-dom';
import axiosClient from '../../../config/axios';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([])

  const sorts = [
    "Default",
    "Low to High",
    "High to Low",
    "Newest",
    "Oldest"
  ]

  useEffect(() => {
    axiosClient.get(ROUTERS.USER.GET_ALL_CATEGORY)
      .then(res => {
        setCategories(res.data.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <Breadcrumb name="Category" />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select className='filter__sort__select'>
                        {sorts?.map((sort, index) => (
                          <option key={index} value={sort}>{sort}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6><span>{categories.length}</span> Items found</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {categories.length > 0 ? categories?.map((category, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${category.image})` }}>
                      </div>
                      <div className="product__item__text">
                        <h6><Link to={generatePath(ROUTERS.USER.CATEGORY_ID, { id: category.id })}>{category.name}</Link></h6>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-12">
                    <h3 className='text-center'>No categories found</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default memo(CategoriesPage);
