import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import "./Admin.scss"
import { Link } from 'react-router-dom'
import { Maincontext } from '../context/MainProvider'
function Home() {
    const { AddBasket, isExsisted, AddWishlist } = useContext(Maincontext)
    const [Category, setCategory] = useState([])
    useEffect(() => {
        GetProduct()
    }, [])
    async function GetProduct() {
        const res = await fetch("http://localhost:3000/course")
        const data = await res.json()
        setCategory(data)
    }

    return (
        <>
            <main>
                <section className='HeroSection'>
                    <div className='Herosection_container'>
                        <div className='Herosection_div'> Get Your  <span className='Herosection_span'>Education</span> today!</div>
                    </div>
                </section>
                <section className='Middlesection'>
                    <div className='Middlesection_container'>
                        <div className='Middlesection_line'> </div>
                        <div className='Middlesection_text'> Papular Courses</div>
                        <div className='Card_container'>
                            <div className='Card_div'>
                                {Category.map((x) => <>
                                    <div className='Card' key={x._id}>
                                        <div className='icon' onClick={() => AddWishlist(x)}>{isExsisted(x) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</div>
                                        <img className='img1' src={x.CourseImg} />
                                        <div className='Card_text1'>
                                            <div className='name'>{x.name}</div>
                                            <div className='des'>{x.Des}</div>
                                        </div>
                                        <Link to={"/detail/" + x._id}>Go detail</Link>
                                        <button className='addbtn' onClick={() => AddBasket(x)}>Add Basket</button>
                                        <div className='Card1'>
                                            <div className='Card_div' >
                                                <img className='Card_div_img1' src={x.TeacherImg} />

                                                <div className='Name'>{x.TeacherName} <span className='positions'> ,{x.positions}</span></div>

                                            </div>
                                            <div className='price_div' >
                                                <div>{x.price}$</div>
                                            </div>
                                        </div>

                                    </div>
                                </>)}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='Thirdsection'>
                <div className='Thirdsection_container'>
                        <div className='Thirdsection_div1'>
                            <div className='Thirdsection_div1_1'>
                            Register now and get a discount 50% discount until 1 January
                            </div>
                            <div className='Thirdsection_div1_2'>
                            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.
                            </div>
                            <button className='Thirdsection_div1_btn'>Register</button>
                        </div>
                        <div className='Thirdsection_div2'></div>
                </div>
                </section>
            </main>
        </>
    )
}

export default Home