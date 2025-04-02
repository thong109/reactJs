import { memo } from "react"
import { CiHeart } from "react-icons/ci";

const Quantity = ({hasAddToCart = true}) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="product__details__quantity">
          <div className="quantity">
            <div className="pro-qty">
              <span className="dec qtybtn">-</span>
              <input type="text" defaultValue="1"/>
              <span className="inc qtybtn">+</span>
            </div>
          </div>
        </div>
        {
          hasAddToCart && (
            <>
              <a href="#" className="primary-btn">ADD TO CARD</a>
              <a href="#" className="heart-icon"><span className="icon_heart_alt"><CiHeart /></span></a>
            </>
          )
        }
      </div>
    </>
  )
}

export default memo(Quantity)
