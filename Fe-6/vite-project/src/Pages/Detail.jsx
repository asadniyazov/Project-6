import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import "./Home.scss"
function Detail() {
    let { id } = useParams();
    const [Category, setCategory] = useState([])
    useEffect(() => {
        GetProduct()
    }, [])
    async function GetProduct() {
        const res = await fetch("http://localhost:3000/course/"+id)
        const data = await res.json()
        setCategory(data)
    }
  return (
    <>
        <div className='Card' >
                            <img className='img1' src={Category.CourseImg} />
                            <div className='name'>{Category.name}</div>
                            <div className='des'>{Category.Des}</div>
                            <div className='Card1'>
                                <div className='Card_div' >
                                    <img className='Card_div_img1' src={Category.TeacherImg} />
                                    <div className='Name'>{Category.TeacherName}</div>
                                    <div className='positions'>{Category.positions}</div>
                                </div>
                                <div >
                                    <div>{Category.price}</div>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default Detail