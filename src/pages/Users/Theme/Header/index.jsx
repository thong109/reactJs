import { memo, useEffect, useRef, useState } from 'react';
import './Header.scss';
import { ROUTERS } from '../../../../utils/router';
import { generatePath, Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../../../../assets/Users/logo.png';
import formatter from './../../../../utils/formatter.jsx';

export const categories = [
  'Fresh Meat',
  'Vegetables',
  'Fruit & Nut Gifts',
  'Fresh Berries',
  'Ocean Foods',
  'Butter & Eggs',
  'Fastfood',
  'Fresh Onion',
  'Papayaya & Crisps',
  'Oatmeal',
  'Fresh Bananas'
]

const Header = () => {
  const location = useLocation();
  const elementRef = useRef(null);
  const [showCategory, setShowCategory] = useState(false)
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  const [isShowBanner, setIsShowBanner] = useState(isHome);

  const [menu, _] = useState([
    {
      name: 'Home',
      path: ROUTERS.USER.HOME
    },
    {
      name: 'Shop',
      path: ROUTERS.USER.SHOP
    },
    {
      name: 'Product',
      path: ROUTERS.USER.PRODUCT,
      isShowSubMenus: false,
      child: [
        {
          name: 'Meat',
          path: generatePath(ROUTERS.USER.PRODUCT_ID, {id: 1})
        },
        {
          name: 'Vegetable',
          path: generatePath(ROUTERS.USER.PRODUCT_ID, {id: 1})
        },
        {
          name: 'Fish',
          path: generatePath(ROUTERS.USER.PRODUCT_ID, {id: 1})
        }
      ]
    },
    {
      name: 'Blog',
      path: ROUTERS.USER.BLOG
    },
    {
      name: 'Contact',
      path: ROUTERS.USER.CONTACT
    },
  ])

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.transition = 'height 0.5s ease-in-out';
      elementRef.current.style.overflow = "hidden";
      if (showCategory) {
        elementRef.current.style.height = `${elementRef.current.scrollHeight}px`;
      } else {
        elementRef.current.style.height = '0px';
      }
    }
  }, [showCategory]);

  useEffect(() => {
    const isHome = location.pathname.length <= 1
    setIsHome(isHome)
    setIsShowBanner(isHome)
  }, [location])

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                    <Link to="#"><i className="fa fa-linkedin"></i></Link>
                    <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li><Link to='#'>Spanis</Link></li>
                      <li><Link to='#'>English</Link></li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <Link to={ROUTERS.USER.LOGIN} className='trans'><i className="fa fa-user"></i> Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to={ROUTERS.USER.HOME} className='trans'>
                  <img src={Logo} alt="Ogani" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <nav className="header__menu">
                <ul className='d-lg-flex justify-content-between'>
                  {menu?.map((item) => (
                    <li key={item?.name}><NavLink to={item?.path}>{item?.name}</NavLink>
                      {
                        item.child && (
                          <ul className="header__menu__dropdown">
                            {item.child.map((child) => (
                              <li key={child.name}><Link to={child.path}>{child.name}</Link></li>
                            ))}
                          </ul>
                        )
                      }
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-12 ">
              <div className="header__cart d-md-flex align-items-center justify-content-center">
                <ul>
                  <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
                  <li><Link to={ROUTERS.USER.CART}><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                </ul>
                <div className="header__cart__price">item: <span>{formatter(100000)}</span></div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      <section className={`hero ${!isHome ? 'hero-normal' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all" onClick={() => setShowCategory(!showCategory)}>
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul className={showCategory ? 'show' : ''} ref={elementRef}>
                  {categories?.map((item, index) => (
                    <li key={index}><Link to={ROUTERS.USER.PRODUCT} className='trans'>{item}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn trans">SEARCH</button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              {isShowBanner && (
                <div className="hero__item set-bg">
                  <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>Vegetable <br />100% Organic</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="#" className="primary-btn">SHOP NOW</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Header);
