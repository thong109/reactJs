import React, { memo } from 'react'
import Breadcrumb from '../Theme/Breadcrumb'
import Quantity from '../../../components/Quantity'
import { IoMdClose } from "react-icons/io";
import { formatter } from '../../../utils/formatter';

const ShoppingCard = () => {
  return (
    <>
      <Breadcrumb name="Shopping Cart" />
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shopping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shopping__cart__item">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <h5>Vegetable’s Package</h5>
                      </td>
                      <td className="shopping__cart__price">
                        {formatter(200000)}
                      </td>
                      <td className="shopping__cart__quantity">
                        <Quantity hasAddToCart={false} />
                      </td>
                      <td className="shopping__cart__total">
                        {formatter(200000)}
                      </td>
                      <td className="shopping__cart__item__close">
                        <span className="icon_close"><IoMdClose /></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="shopping__cart__item">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <h5>Fresh Garden Vegetable</h5>
                      </td>
                      <td className="shopping__cart__price">
                        {formatter(200000)}
                      </td>
                      <td className="shopping__cart__quantity">
                        <Quantity hasAddToCart={false} />
                      </td>
                      <td className="shopping__cart__total">
                        {formatter(200000)}
                      </td>
                      <td className="shopping__cart__item__close">
                        <span className="icon_close"><IoMdClose /></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="shopping__cart__item">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <h5>Organic Bananas</h5>
                      </td>
                      <td className="shopping__cart__price">
                        {formatter(200000)}
                      </td>
                      <td className="shopping__cart__quantity">
                        <Quantity hasAddToCart={false} />
                      </td>
                      <td className="shopping__cart__total">
                        {formatter(200000)}
                      </td>
                      <td className="shopping__cart__item__close">
                        <span className="icon_close"><IoMdClose /></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shopping__cart__btns">
                <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                  Upadate Cart</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shopping__continue">
                <div className="shopping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">APPLY COUPON</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shopping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>Subtotal <span>{formatter(200000)}</span></li>
                  <li>Total <span>{formatter(200000)}</span></li>
                </ul>
                <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default memo(ShoppingCard)


