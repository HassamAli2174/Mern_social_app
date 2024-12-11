import React from 'react'
import { Col, Container, Row,  } from 'reactstrap'
import Sidebar from '../components/Left_sideBar_Component/left_sidebar'
import "../designing/my_blogs.css"

const blogData = [
  {
    id: 1,
    title: "Blog Title 1",
    topic: "Tech",
    content: "This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here.This is the content for blog 1. Add your blog details here. ",
    imageAlt: "Blog Image 1",
    imgSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: "Blog Title 2",
    topic: "Health",
    content: "This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. This is the content for blog 2. Add your blog details here. ",
    imageAlt: "Blog Image 2",
    imgSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  {
    id: 3,
    title: "Blog Title 3",
    topic: "Lifestyle",
    content: "This is the content for blog 3. Add your blog details here.",
    imageAlt: "Blog Image 3",
    imgSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
];

const MyBlogs = () => {
  return (

    // <Container className='vh-100 my-blogs-page p-0'>
    //   <Row className=' gap-2 d-flex row justify-content-end '>
    //     <Sidebar />
    //     <Col md="10" className="p-4 mt-4 mb-4 mr-3 d-flex flex-column rounded-3 my_blogs">
    //       <h2 className='text-white fs-1'>My Blogs</h2>

    //       <div className='m-4  d-flex flex-column gap-2  align-items-start h-100 '>
    //         <div className='d-flex gap-4 justify-content-between w-50'>
    //           <Button>Edit Blog</Button>
    //           <Button>Delete Blog</Button>
    //         </div>
    //         <div className='image-of-blog bg-success w-50 rounded-4'>
    //           <img  alt='blog-image'/> {/* Image of blog */}
    //         </div>
    //         <div className='d-flex gap-4 justify-content-between w-50'>
    //           <h2>Title</h2>
    //           <h2>Topic</h2>
    //         </div>
    //         <div className='w-50'>
    //           <p>
    //             Why are you gay? Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //           </p>
    //         </div>
    //       </div>
    //       <div className='m-4  d-flex flex-column gap-2  align-items-start h-100 '>
    //         <div className='d-flex gap-4 justify-content-between w-50'>
    //           <Button>Edit Blog</Button>
    //           <Button>Delete Blog</Button>
    //         </div>
    //         <div className='image-of-blog bg-success w-50 rounded-4'>
    //           <img  alt='blog-image'/> {/* Image of blog */}
    //         </div>
    //         <div className='d-flex gap-4 justify-content-between w-50'>
    //           <h2>Title</h2>
    //           <h2>Topic</h2>
    //         </div>
    //         <div className='w-50'>
    //           <p>
    //             Why are you gay? Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //           </p>
    //         </div>
    //       </div>
    //       <div className='m-4  d-flex flex-column gap-2  align-items-start h-100 '>
    //         <div className='d-flex gap-4 justify-content-between w-50'>
    //           <Button>Edit Blog</Button>
    //           <Button>Delete Blog</Button>
    //         </div>
    //         <div className='image-of-blog bg-success w-50 rounded-4'>
    //           <img  alt='blog-image'/> {/* Image of blog */}
    //         </div>
    //         <div className='d-flex gap-4 justify-content-between w-50'>
    //           <h2>Title</h2>
    //           <h2>Topic</h2>
    //         </div>
    //         <div className='w-50'>
    //           <p>
    //             Why are you gay? Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //             Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
    <Container className="vh-100 my-blogs-page text-white p-0">
      <Row className="gap-2 d-flex row justify-content-end">
        <Sidebar />
        <Col md="10" className="p-4 mt-4 ml-4 mb-4 d-flex flex-column rounded-3 my_blogs">
          <h2 className="text-white fs-1">My Blogs</h2>
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="m-4 d-flex flex-column gap-4 align-items-start h-100"
            >
              {/* <div className="d-flex gap-4 justify-content-between w-50">
                <Button>Edit Blog</Button>
                <Button>Delete Blog</Button>
              </div> */}
              <div className="image-of-blog bg-success w-50 rounded-4">
                <img src={blog.imgSrc} alt={blog.imageAlt} className="w-100 h-auto rounded-4" />
              </div>
              <div className="d-flex gap-4 justify-content-between w-50">
                <h2>{blog.title}</h2>
                <h2>{blog.topic}</h2>
              </div>
              <div className="w-50">
                <p>{blog.content}</p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>

  )
}

export default MyBlogs