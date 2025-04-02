import React, { useRef } from 'react'
import axiosClient from '../../config/axios'

export default function controller(props) {
  const inputRef = useRef()
  const { link, setData } = props

  const handleChangeInput = (e) => {
    const value = e.target.value
    axiosClient.get(`/admin/${link}/search`, {
      params: {
        n: value,
      },
    })
      .then(res => {
        setData(res.data);
      })
  }

  return (
    <div className="search-controller">
      <input type="search" className='input-common' ref={inputRef} onChange={handleChangeInput} placeholder='Search...' />
    </div>
  )
}
