import { memo } from 'react';
import { ROUTERS } from '../../../../utils/router';
import { IoCart } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import './HeaderAdmin.scss'
import { userStateContext } from '../../../../contexts/ContextProvider';
import axiosClient from '../../../../config/axios';

const HeaderAdmin = () => {
  const navItems = [
    {
      label: 'Dashboard',
      path: ROUTERS.ADMIN.DASHBOARD,
      icon: <MdDashboard />,
    },
    {
      label: 'Orders',
      path: ROUTERS.ADMIN.ORDERS,
      icon: <IoCart />,
    },
    {
      label: 'Products',
      path: ROUTERS.ADMIN.PRODUCTS,
      icon: <AiOutlineProduct />,
    },
  ]

  const { currentUser, setCurrentUser, setUserToken } = userStateContext();
  const handleLogout = (e) => {
    e.preventDefault();
    axiosClient.post('/logout')
    .then(res => {
      setCurrentUser({})
      setUserToken(null)
    })
  }

  return (
    <>
      <div className="container header__container">
        <nav className="header__nav">
          {
            navItems?.map(({ label, path, icon }) => (
              <NavLink key={label} to={path} className={`header__nav__item ${location.pathname.includes(path) ? 'header__nav__item--active': ''}`}>{icon} {label}</NavLink>
            ))
          }
        </nav>
        { currentUser && (
          <div className="header__user">
            <img src={currentUser.avatar} alt={currentUser.name} className="header__user__avatar" />
            <div className="header__user__info">
              <h5 className='m-0'>{currentUser.name}</h5>
              <p className='m-0'>{currentUser.email}</p>
            </div>
            <Link to={ROUTERS.ADMIN.LOGOUT} className="header__user__logout" onClick={handleLogout}>Logout</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default memo(HeaderAdmin);
