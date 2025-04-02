import React from 'react'
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import axiosClient from '../../config/axios';
import { toast } from 'react-toastify';

export default function ActionMenu({ id, link, getData }) {
  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this survey?")) {
      axiosClient.delete(`/admin/${link}/${id}`).then(() => {
        getData();
        toast.success('Survey deleted successfully!');
      });
    }
  }

  return (
    <Flex gap="small" wrap justify="center">
      <Link to={`/admin/${link}/${id}`}>
        <Button type='primary'>Edit</Button>
      </Link>
      <Button danger onClick={() => handleDeleteItem(id)}>Delete</Button>
    </Flex>
  )
}
