import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { Maincontext } from '../context/MainProvider'
function Navbar() {
    const { Basket, Wishlist } = useContext(Maincontext)
    return (
        <>
            <div>
                <header className='header'>
                    <div className='header_container'>
                        <div className='header_div1'>
                            <img className='header_div1_img' src='https://preview.colorlib.com/theme/course/images/logo.png' />
                            <div className='header_div1_div' >Course</div>
                        </div>
                        <button className='hiddenbtn'> <i class="fa-solid fa-bars"></i></button>
                        <div className='header_div2'>
                            <div className='header_div2_ul'>
                                <ul className='header_div2_list'>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link>About Us</Link></li>
                                    <li><Link to={"admin"}>Admin</Link></li>
                                    <li><Link to={"add"}>Add</Link></li>
                                    <li><Link to={"basket"}>Basket{Basket.length}</Link></li>
                                    <li><Link to={"wishlist"}>Wishlist{Wishlist.length}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='header_div3'>
                            <i class="fa-solid fa-phone-volume"></i>
                            <div>+43 4566 7788 2457</div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar