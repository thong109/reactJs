import React, { memo, useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import { StatusCase } from '../../utils/functions';
import axiosClient from '../../config/axios';
import { toast } from 'react-toastify';

const DropdownCase = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { data, link, fetchData } = props;

  const handleChangeStatus = (status, id) => {
    axiosClient.put(`/admin/${link}/change-status/${id}`, {
      status: status,
      id: id
    })
      .then(res => {
        setActiveDropdown(null)
        fetchData()
        toast.success('Status updated successfully')
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isDropdown = e.target.closest('.category__dropdown');
      if (!isDropdown) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  return (
    <div className="category__dropdown">
      <button className='category__dropdown-button' onClick={() => setActiveDropdown(data.id)}>
        {data.status} <span className="category__dropdown-arrow"><IoIosArrowUp /></span>
      </button>
      {
        activeDropdown === data.id && (
          <div className="category__dropdown__menu">
            {Object.values(StatusCase).map((item) => (
              <button className={item.className} key={item.key} onClick={() => handleChangeStatus(item.label, data.id)}>{item.label}</button>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default memo(DropdownCase)