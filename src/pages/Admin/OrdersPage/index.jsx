import React, { memo, useEffect, useState } from 'react'
import './OrdersPage.scss'
import { IoIosArrowUp } from "react-icons/io";
const OrdersPage = () => {
  const orders = [
    { id: 1, customerName: 'John Doe', totalAmount: 100, orderDate: new Date, status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', totalAmount: 200, orderDate: new Date, status: 'Shipped' },
  ];

  const [ activeDropdown, setActiveDropdown ] = useState(null);

  const status = {
    ORDERED: {
      key: 'ORDERED',
      label: 'Ordered',
      className: 'orders__dropdown-item',
    },
    PENDING: {
      key: 'PENDING',
      label: 'Pending',
      className: 'orders__dropdown-item',
    },
    SHIPPED: {
      key: 'SHIPPED',
      label: 'Shipped',
      className: 'orders__dropdown-item',
    },
    DELIVERED: {
      key: 'DELIVERED',
      label: 'Delivered',
      className: 'orders__dropdown-item',
    },
    CANCELLED: {
      key: 'CANCELLED',
      label: 'Cancelled',
      className: 'orders__dropdown-item orders__dropdown-item--danger',
    },
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isDropdown = e.target.closest('.orders__dropdown');
      if (!isDropdown) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  return (
    <>
      <h1 className='text-center mb-4'>Orders Page</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Amount</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.totalAmount}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>
                  <div className="orders__dropdown">
                    <button className='orders__dropdown-button' onClick={() => setActiveDropdown(order.id)}>
                      {order.status} <span className="orders__dropdown-arrow"><IoIosArrowUp /></span>
                    </button>
                    {
                      activeDropdown === order.id && (
                        <div className="orders__dropdown__menu">
                          {Object.values(status).map((item) => (
                            <button className={item.className} key={item.key}>{item.label}</button>
                          ))}
                        </div>
                      )
                    }
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="pagination">
        <button className='page-link'>Previous</button>
        <button className='page-link'>1</button>
        <button className='page-link'>Next</button>
      </div>
    </>
  )
}

export default memo(OrdersPage);
