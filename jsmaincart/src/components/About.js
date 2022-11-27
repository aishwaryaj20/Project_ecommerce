import React from 'react'

import { useEffect, useState } from 'react';
import './about.css'
const About = ({products}) => {
  //const [foundUsers, setFoundUsers] = useState(products);

	
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"enterdata"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"enterdata",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);


  const removeFromCart = (productToRemove) => {
    setProducts(
        productsInCart.filter((product) => product !== productToRemove)
    );
};




  return (
    <div>
<div>
<div className="card-list">
        
          {productsInCart.map((product, idx) => (
                <div className="product" key={idx}>
                    <div className="card">
                        <div className="card-title">
                            {product.productName}</div>
                       
                        <div className="card">
                            {/* <img
                                className="product-image"
                                src={
                                    product.url
                                }
                                alt={
                                    product.image
                                }
                            /> */}
                     
                     <img
                  src={
                    localStorage.getItem("img")
                      ? localStorage.getItem("img")
                      : 'profilePIcDefault'
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
                            <div className="card-title">Price:
                                {product.price}</div>

                                <div className="card-title">Rating:
                                {product.rating}</div>

                                <div className="card-title">Category:
                                {product.category}</div>
                                
                            <button className='btnsize' onClick={() => removeFromCart(product)}>Remove</button>

                        </div> 
                    </div>
                   
                 <div className="iconsalign">
                
                
                 </div>
                

                </div>


            ))}
            </div>
            </div>
         
          
</div>
             

  
  )
}

export default About