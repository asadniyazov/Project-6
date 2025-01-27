import React, { createContext, useState } from 'react'
import uselocalstorage from '../Hooks/uselocalstorage'
 export const Maincontext=createContext()
function MainProvider({children}) {
    const [Basket, setBasket] = uselocalstorage("basket",[])
    const [Wishlist, setWishlist] = useState([])
    function AddBasket(item) {
         const index= Basket.findIndex((x)=>x._id===item._id)
         if (index===-1) {
            return setBasket([...Basket,{...item,count:1}])
         }
    }

    function  RemoveBasket(item) {
        return setBasket([...Basket.filter((x)=>x._id!==item._id)])
   }

   function IncreaseBasket(item) {
    const index= Basket.findIndex((x)=>x._id===item._id)
    const element=Basket[index]
    if (index!==-1) {
        element.count++
       return setBasket([...Basket])
    }
}

function DecreaseBasket(item) {
    const index= Basket.findIndex((x)=>x._id===item._id)
    const element=Basket[index]
    if (element.count>1) {
        element.count--
       return setBasket([...Basket])
    }
}
function GetTotal() {
    return Basket.reduce((prev,initial)=>prev+(initial.count*initial.price),0)
}





function AddWishlist(item) {
    const index= Wishlist.findIndex((x)=>x._id===item._id)
    if (index!==-1) {
       return setWishlist([...Wishlist.filter((x)=>x._id!==item._id)])
    }
    else{
        return setWishlist([...Wishlist,{...item}])
    }
}
function isExsisted(item) {
    return Wishlist.find((x)=>x._id===item._id)
}
  return (
<>
    <Maincontext.Provider value={{Basket,AddWishlist,AddBasket,RemoveBasket,IncreaseBasket,DecreaseBasket,GetTotal,isExsisted,Wishlist}}> {children}</Maincontext.Provider>
</>
  )
}

export default MainProvider