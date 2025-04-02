import React, { useEffect, useState } from 'react'
import { MdOutlineInsertPhoto } from "react-icons/md";
import axiosClient from "../../../../config/axios";
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import { STATUS } from '../../../../utils/functions';
import generateSlug from '../../../../utils/slug';
import ButtonBack from '../../../../components/ButtonBack';
import ButtonSave from '../../../../components/ButtonSave';
import { Flex } from 'antd'

export default function CategoryCreate() {
  const navigate = useNavigate()
  const { id } = useParams();

  const [form, setForm] = useState({
    name: '',
    slug: '',
    image: null,
    image_url: null,
    status: 'Inactive',
  })
  const [error, setError] = useState({ __html: '' })
  const [loading, setLoading] = useState(false);

  const onImageChoose = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      setForm({ ...form, image: file, image_url: e.target.result })
      event.target.value = ''
    }
    reader.readAsDataURL(file)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const payload = { ...form }
    if (payload.image) {
      payload.image = payload.image_url
    }

    delete payload.image_url

    let url = null

    if (id) {
      url = axiosClient.put(generatePath(ROUTERS.ADMIN.CATEGORY_ID, { id: id }), payload)
    } else {
      url = axiosClient.post(ROUTERS.ADMIN.CATEGORIES, payload)
    }

    url.then(res => {
      if (res.data) {
        navigate(ROUTERS.ADMIN.CATEGORIES)
      }
    })
      .catch(err => {
        if (err.response && !id) {
          const finalErrors = Object.values(err.response.data.errors).reduce((accum, next) => [...next, ...accum], [])
          setError({ __html: finalErrors.join('<br>') });
        }
      })
  }

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient.get(generatePath(ROUTERS.ADMIN.CATEGORY_ID, { id: id })).then(({ data }) => {
        setForm(data);
        setLoading(false);
      });
    }
  }, []);

  return (
    <>
      <h1 className='text-center mb-4'>Category Create</h1>
      {loading && <div className="text-center text-lg">Loading...</div>}
      {
        error.__html && <div className="alert alert-danger" role="alert" dangerouslySetInnerHTML={error}></div>
      }
      {!loading && (<form onSubmit={handleSubmitForm}>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter category name'
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value, slug: generateSlug(e.target.value) })
            }}
          />
        </div>
        <div className='form-group'>
          <label>Image</label>
          <div className="d-flex align-items-center">
            {form.image_url && (
              <img
                src={form.image_url}
                className='img-thumbnail mr-3'
                width='150'
                height='150'
                style={{ objectFit: 'cover' }}
              />
            )}

            {form.image && !form.image_url && (
              <img
                src={form.image}
                className='img-thumbnail mr-3'
                width='150'
                height='150'
                style={{ objectFit: 'cover' }}
              />
            )}

            {!form.image_url && (
              <span className='w-12 d-flex justify-content-center align-items-center icon-photo mr-3'>
                <MdOutlineInsertPhoto />
              </span>
            )}
            <label htmlFor="imageInput" className="button-image btn btn-primary m-0">
              Choose image...
              <input
                id="imageInput"
                type='file'
                className='form-control-file'
                onChange={onImageChoose}
              />
            </label>
          </div>
        </div>
        <div className='form-group form-check d-flex align-items-center'>
          <input
            type='checkbox'
            className='form-check-input'
            id='status'
            checked={form.status === STATUS.ACTIVE}
            onChange={(e) => setForm({ ...form, status: e.target.checked ? STATUS.ACTIVE : STATUS.INACTIVE })}
          />
          <label className='form-check-label' htmlFor='status'>
            Active
          </label>
        </div>
        <div className='form-group'>
          <Flex gap="small" wrap>
            <ButtonBack />
            <ButtonSave />
          </Flex>
        </div>
      </form>)}
    </>
  )
}
