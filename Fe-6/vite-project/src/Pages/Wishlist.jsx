import React, { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'

function Wishlist() {
    const {Wishlist,AddWishlist} = useContext(Maincontext)
  return (
    <>
            <div className='Card_container'>
    
                <div className='Card_div'>
                    {Wishlist.map((x) => <>
                        <div className='Card' key={x._id}>
                        <div onClick={()=>AddWishlist(x)}><i class="fa-solid fa-heart"></i>   </div>
                            <img className='img1' src={x.CourseImg} />
                            <div className='name'>{x.name}</div>
                            <div className='des'>{x.Des}</div>
                            <div>Count :{x.count}</div>
                  
                            <div className='Card1'>
                                <div className='Card_div' >
                                    <img className='Card_div_img1' src={x.TeacherImg} />
                                    <div className='Name'>{x.TeacherName}</div>
                                    <div className='positions'>{x.positions}</div>
                                </div>
                                <div >
                                    <div>{x.price}</div>
                                </div>
                            </div>
                            
                        </div>
                    </>)}
                </div>
            </div>
    </>
  )
}

export default Wishlist