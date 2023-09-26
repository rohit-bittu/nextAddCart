"use client";
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/CartSlice';

const Homepage = () => {

  const [products, setproducts] = useState([])
  const dispatch = useDispatch()

  const getproducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    setproducts(data)
  }

  useEffect(() => {
    getproducts()
  }, [])

  const handleadd=(item)=> {
   dispatch(add(item ))
  }


  return (
    <div className='productsWrapper'>
      {
        products.map((item) => {
          return (
            <>
                <div key={item.id} className='card'>
                <img src={item.image} alt="img" />
                <h4>{item.title}</h4>
                <h5>{item.price}</h5>
                <button className='btn' onClick={()=>handleadd(item)}>Add To Cart</button>

                </div>
            </>
          )
        })
      }

    </div>
  )
}

export default Homepage
