import React from 'react'
import { CardBody } from 'reactstrap'
import "../blog_mode/blog_mode.css"
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const BlogMode = () => {
  return (
    <>
      <CardBody className='blog_mode pl-2 pr-2 rounded-4 d-flex justify-content-between w-100 '>

        <AiOutlineSun color='white' size={32} />
        <AiOutlineMoon color='white' size={32} />
      </CardBody>
    </>
  )
}

export default BlogMode