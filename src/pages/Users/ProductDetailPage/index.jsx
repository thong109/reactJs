import { memo, useState } from 'react';
import Breadcrumb from '../Theme/Breadcrumb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import formatter from '../../../utils/formatter';
import "./ProductDetailPage.scss";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Quantity from '../../../components/Quantity';

const ProductDetailPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Breadcrumb name="Vegetable’s Package"/>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <Swiper
                  simulateTouch={false}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper2 product__details__pic__item"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='product__details__pic__item--large'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='product__details__pic__item--large'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='product__details__pic__item--large'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='product__details__pic__item--large'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" className='product__details__pic__item--large'/>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={20}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper product__details__pic__slider"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">{formatter(200000)}</div>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                  quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                <Quantity hasAddToCart={true}/>
                <ul>
                  <li><b>Availability</b> <span>In Stock</span></li>
                  <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                  <li><b>Weight</b> <span>0.5 kg</span></li>
                  <li><b>Share on</b>
                    <div className="share">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <Tabs className="product__details__tab">
                <TabList className="nav nav-tabs" role="tablist">
                  <Tab className="nav-item">
                    <p className="nav-link active">Description</p>
                  </Tab>
                  <Tab className="nav-item">
                    <p className="nav-link">Information</p>
                  </Tab>
                  <Tab className="nav-item">
                    <p className="nav-link">Reviews
                      <span>(1)</span></p>
                  </Tab>
                </TabList>
                <TabPanel className="tab-pane" id="tabs-1" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                      suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                      Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                      accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                      et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                      vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                      porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                      nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                      porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                      sed sit amet dui. Proin eget tortor risus.</p>
                  </div>
                </TabPanel>
                <TabPanel className="tab-pane" id="tabs-2" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                      Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                      eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                      sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                      diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                      Proin eget tortor risus.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                      porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                      nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                  </div>
                </TabPanel>
                <TabPanel className="tab-pane" id="tabs-3" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                      Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                      eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                      sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                      diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                      Proin eget tortor risus.</p>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(ProductDetailPage);
