import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Add() {
  return (
    <>
      <Formik
       initialValues={{ name: '', CourseImg: '', Des: '' , TeacherImg:'',TeacherName:'',positions:'',price:''}}
       validationSchema={Yup.object({
         name: Yup.string(),
          
         CourseImg: Yup.string()
          ,
         Des: Yup.string(),
           TeacherImg: Yup.string()
           ,
           TeacherName: Yup.string()
           ,
           positions: Yup.string()
          ,
           price: Yup.number()
           
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000/course",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify( values)
})
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
  <br></br>
         <label htmlFor="CourseImg">Course Img</label>
         <Field name="CourseImg" type="text" />
         <ErrorMessage name="CourseImg" />
         <br></br>
         <label htmlFor="Des">Course Description</label>
         <Field name="Des" type="Des" />
         <ErrorMessage name="Des" />
         <br></br>
         <label htmlFor="TeacherImg">Teacher Image</label>
         <Field name="TeacherImg" type="text" />
         <ErrorMessage name="TeacherImg" />
         <br></br>
         <label htmlFor="TeacherName"> Teacher Name</label>
         <Field name="TeacherName" type="text" />
         <ErrorMessage name="TeacherName" />
         <br></br>
         <label htmlFor="positions">Teacher Positions</label>
         <Field name="positions" type="text" />
         <ErrorMessage name="positions" />
         <br></br>
         <label htmlFor="price">Course price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
         <br></br>
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </>
  )
}

export default Add