import { memo, useState } from 'react';
import './Footer.scss';
import { ROUTERS } from '../../../../utils/router';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../../assets/Users/logo.png';

const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <Link to={ROUTERS.USER.HOME}><img src={Logo} alt="Ogani"/></Link>
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Useful Links</h6>
              <ul>
                <li><Link to="#" className='trans'>About Us</Link></li>
                <li><Link to="#" className='trans'>About Our Shop</Link></li>
                <li><Link to="#" className='trans'>Secure Shopping</Link></li>
                <li><Link to="#" className='trans'>Delivery infomation</Link></li>
                <li><Link to="#" className='trans'>Privacy Policy</Link></li>
                <li><Link to="#" className='trans'>Our Sitemap</Link></li>
              </ul>
              <ul>
                <li><Link to="#" className='trans'>Who We Are</Link></li>
                <li><Link to="#" className='trans'>Our Services</Link></li>
                <li><Link to="#" className='trans'>Projects</Link></li>
                <li><Link to="#" className='trans'>Contact</Link></li>
                <li><Link to="#" className='trans'>Innovation</Link></li>
                <li><Link to="#" className='trans'>Testimonials</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Join Our Newsletter Now</h6>
              <p>Get E-mail updates about our latest shop and special offers.</p>
              <form action="#">
                <input type="text" placeholder="Enter your mail"/>
                <button type="submit" className="site-btn">Subscribe</button>
              </form>
              <div className="footer__widget__social">
                <Link to="#" className='trans'><i className="fa fa-facebook"></i></Link>
                <Link to="#" className='trans'><i className="fa fa-instagram"></i></Link>
                <Link to="#" className='trans'><i className="fa fa-twitter"></i></Link>
                <Link to="#" className='trans'><i className="fa fa-pinterest"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>abc</p>
              </div>
              <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
