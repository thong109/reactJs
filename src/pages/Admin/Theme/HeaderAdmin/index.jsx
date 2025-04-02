import { memo } from 'react';
import { ROUTERS } from '../../../../utils/router';
import './HeaderAdmin.scss'
import { userStateContext } from '../../../../contexts/ContextProvider';
import axiosClient from '../../../../config/axios';
import { Button, Layout } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const HeaderAdmin = ({ collapsed, setCollapsed }) => {
  const { currentUser, setCurrentUser, setUserToken } = userStateContext();
  const handleLogout = (e) => {
    e.preventDefault();
    axiosClient.post(ROUTERS.ADMIN.LOGOUT)
      .then(res => {
        setCurrentUser({})
        setUserToken(null)
      })
  }

  return (
    <>
      {/* <div className="container header__container">
        <nav className="header__nav">
          {
            navItems?.map(({ label, path, icon }) => (
              <NavLink key={label} to={path} className={`header__nav__item ${location.pathname.includes(path) ? 'header__nav__item--active' : ''}`}>{icon} {label}</NavLink>
            ))
          }
        </nav>
        {currentUser && (
          <div className="header__user">
            <img src={currentUser.avatar} alt={currentUser.name} className="header__user__avatar" />
            <div className="header__user__info">
              <h5 className='m-0'>{currentUser.name}</h5>
              <p className='m-0'>{currentUser.email}</p>
            </div>
            <Link to={ROUTERS.ADMIN.LOGOUT} className="header__user__logout" onClick={handleLogout}>Logout</Link>
          </div>
        )}
      </div> */}
      <Header style={{ padding: 0 }}>
        <div className="d-flex justify-content-between pr-4 align-items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: 'white'
            }}
          />
          <Link to={ROUTERS.ADMIN.LOGOUT} className="header__user__logout trans btn btn-primary" onClick={handleLogout}>Logout</Link>
        </div>

      </Header>
    </>
  );
}

export default memo(HeaderAdmin);
