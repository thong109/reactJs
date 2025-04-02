import { memo, useEffect, useState } from 'react';
import Breadcrumb from '../../Theme/Breadcrumb';
import { ROUTERS } from '../../../../utils/router';
import { generatePath, Link } from 'react-router-dom';
import image1 from '../../../../assets/Users/product-1.jpg'
import image2 from '../../../../assets/Users/product-2.jpg'
import image3 from '../../../../assets/Users/product-3.jpg'
import image4 from '../../../../assets/Users/product-4.jpg'
import { useParams } from "react-router-dom";
import axiosClient from '../../../../config/axios';

const CategoriesPage = () => {
  const [products, setProducts] = useState([])

  const sorts = [
    "Default",
    "Low to High",
    "High to Low",
    "Newest",
    "Oldest"
  ]

  const { id } = useParams()

  useEffect(() => {
    axiosClient.get(generatePath(ROUTERS.USER.CATEGORY_ID, { id: id }))
      .then(res => {
        setProducts(res.data)
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
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    {/* {categories?.map((item, index) => (
                      <li key={index}><Link to={ROUTERS.USER.PRODUCT}>{item}</Link></li>
                    ))} */}
                  </ul>
                </div>
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10" data-max="540">
                      <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                      <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  <div className="sidebar__item__color sidebar__item__color--white">
                    <label htmlFor="white">
                      White
                      <input type="radio" id="white" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--gray">
                    <label htmlFor="gray">
                      Gray
                      <input type="radio" id="gray" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--red">
                    <label htmlFor="red">
                      Red
                      <input type="radio" id="red" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--black">
                    <label htmlFor="black">
                      Black
                      <input type="radio" id="black" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--blue">
                    <label htmlFor="blue">
                      Blue
                      <input type="radio" id="blue" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--green">
                    <label htmlFor="green">
                      Green
                      <input type="radio" id="green" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__item">
                  <h4>Popular Size</h4>
                  <div className="sidebar__item__size">
                    <label htmlFor="large">
                      Large
                      <input type="radio" id="large" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="medium">
                      Medium
                      <input type="radio" id="medium" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="small">
                      Small
                      <input type="radio" id="small" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="tiny">
                      Tiny
                      <input type="radio" id="tiny" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-product__slider owl-carousel">
                      <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-1.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                      </div>
                      <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-1.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
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
                      <h6><span>16</span> Products found</h6>
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
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image1})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image2})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image3})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image4})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image1})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image2})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image3})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image4})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image1})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image2})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image3})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ "backgroundImage": `url(${image4})` }}>
                      <ul className="product__item__pic__hover">
                        <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><Link to={generatePath(ROUTERS.USER.PRODUCT_ID, { id: 1 })}>Crab Pool Security</Link></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#"><i className="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default memo(CategoriesPage);
