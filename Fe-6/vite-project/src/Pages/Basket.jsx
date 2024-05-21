import React, { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'

function Basket() {
    const {Basket,RemoveBasket,IncreaseBasket,DecreaseBasket,GetTotal} = useContext(Maincontext)
  return (
 <>
<div className='Card_container'>
<div>Total :{GetTotal()}</div>
                <div className='Card_div'>
                    {Basket.map((x) => <>
                        <div className='Card' key={x._id}>
                            <img className='img1' src={x.CourseImg} />
                            <div className='name'>{x.name}</div>
                            <div className='des'>{x.Des}</div>
                            <div>Count :{x.count}</div>
                            <button onClick={()=>DecreaseBasket(x)}>Decrease</button>
                            <button onClick={()=>RemoveBasket(x)}> Remove Basket</button>
                            <button onClick={()=>IncreaseBasket(x)}>Increase</button>
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

export default Basket