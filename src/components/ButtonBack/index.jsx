import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

export default function ButtonBack() {
  const navigate = useNavigate()
  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </>
  )
}
