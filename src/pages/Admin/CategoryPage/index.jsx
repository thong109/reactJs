import React, { memo, useEffect, useState } from 'react'
import './CategoryPage.scss'
import Controller from './../../../components/Controller'
import axiosClient from '../../../config/axios';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../../utils/router';
import DropdownCase from '../../../components/DropdownCase';
import ActionMenu from '../../../components/ActionMenu';
import { formatDateLocale } from '../../../utils/formatter';
const Category = () => {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false);

  const fetchCategory = () => {
    axiosClient.get(ROUTERS.ADMIN.CATEGORIES)
      .then(res => {
        setCategory(res.data)
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    setLoading(true);
    fetchCategory()
  }, [])

  return (
    <>
      <h1 className='text-center mb-4'>Category Page</h1>

      <div className="common-controller d-flex justify-content-between align-items-start mb-4">
        <div className="controller-wrapper d-flex">
          <Link className="p-2 mx-2 btn btn-primary" to={ROUTERS.ADMIN.CATEGORIES_CREATE}>Create new</Link>
          <button className="p-2 mx-2 btn btn-secondary">A</button>
          <button className="p-2 mx-2 btn btn-dark">A</button>
          <button className="p-2 mx-2 btn btn-warning">A</button>
        </div>
        <Controller link='category' setData={setCategory} />
      </div>
      {loading && <div className="text-center text-lg">Loading...</div>}

      {!loading && (
        <table className='table'>
          <thead>
            <tr>
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Category image</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {category.length > 0 ? category.map(cate => (
              <tr key={cate.id}>
                <td>{cate.id}</td>
                <td>{cate.name}</td>
                <td>
                  <div className="image-wrapper">
                    <img className='object-common' src={cate.image} width='80' height='80' alt="" />
                  </div>
                </td>
                <td>{formatDateLocale(cate.created_at)}</td>
                <td>
                  <DropdownCase data={cate} link="category" fetchData={fetchCategory} />
                </td>
                <td>
                  <ActionMenu id={cate.id} link="categories" getData={fetchCategory} />
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan='6' className='text-center'>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      {/* <div className="pagination">
        <button className='page-link'>Previous</button>
        <button className='page-link'>1</button>
        <button className='page-link'>Next</button>
      </div> */}
    </>
  )
}

export default memo(Category)