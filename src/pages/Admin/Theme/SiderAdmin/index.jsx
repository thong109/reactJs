import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import { IoCart } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdDashboard, MdCategory } from "react-icons/md";
import { CiUser } from "react-icons/ci";
const { Sider } = Layout;

export default function SiderAdmin({ collapsed }) {
  const location = useLocation()
  const [selectedKey, setSelectedKey] = useState(localStorage.getItem('selectedKey') || '1');

  const navItems = [
    {
      key: '1',
      label: <Link to={ROUTERS.ADMIN.DASHBOARD} onClick={() => setSelectedKey('1')}>Dashboard</Link>,
      icon: <MdDashboard />,
    },
    {
      key: '2',
      label: <Link to={ROUTERS.ADMIN.ORDERS} onClick={() => setSelectedKey('2')}>Orders</Link>,
      icon: <IoCart />,
    },
    {
      key: '3',
      label: <Link to={ROUTERS.ADMIN.PRODUCTS} onClick={() => setSelectedKey('3')}>Products</Link>,
      icon: <AiOutlineProduct />,
    },
    {
      key: '4',
      label: <Link to={ROUTERS.ADMIN.CATEGORIES} onClick={() => setSelectedKey('4')}>Category</Link>,
      icon: <MdCategory />,
    },
    {
      key: '5',
      label: <Link to={ROUTERS.ADMIN.USERS} onClick={() => setSelectedKey('5')}>Users</Link>,
      icon: <CiUser />,
    },
  ];

  useEffect(() => {
    const foundItem = navItems.find(navItem => navItem.label.props.to === location.pathname);

    if (foundItem) {
      setSelectedKey(foundItem.key);
      localStorage.setItem('selectedKey', foundItem.key);
    } else if (!selectedKey) {
      setSelectedKey(navItems[0].key);
      localStorage.setItem('selectedKey', navItems[0].key);
    }
  }, [location.pathname, navItems]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" style={{
        height: '64px',
      }}>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        items={navItems}
      />
    </Sider>
  )
}
