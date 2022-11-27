
//import "./style/main.css";
import React from "react";
import Icon from '@mui/material/Icon';
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import './main.css'
const Main = (products) => {
    // const [cart, setCart] = useState([]);
    // const [cartTotal, setCartTotal] = useState(0);
    const [sum, setSum] = useState(0);
    //const [cartTotal, setCartTotal] = useState(0);
    //const [price, setPrice] = useState(0);
    const [productsInCart, setProducts] =
        useState(
            JSON.parse(
                localStorage.getItem(
                    "shopping-cart"
                )
            ) || []
        );
    useEffect(() => {
        localStorage.setItem(
            "shopping-cart",
            JSON.stringify(productsInCart)
        );
    }, [productsInCart]);



    const clearCart = () => {
        setProducts([]);
    };



    const removeFromCart = (productToRemove) => {
        setProducts(
            productsInCart.filter((product) => product !== productToRemove)
        );
    };
    // useEffect(() => {
    //     let total = 0;
    //     for(var i = 0; i < productsInCart.length ; i++) {
    //         total+= productsInCart[i].price*productsInCart[i].quantity;
    //     }
    //     setSum(total);
    //     console.log(setSum, 'len')
    // }, [productsInCart])
    //  useEffect(() => {
    //     var myTotal = 0;
    //     for (var i = 0, len = productsInCart.length; i < len; i++) {
    //         myTotal += productsInCart[i][1]; // Iterate over your first array and then grab the second element add the values up
    //       }
    //         setSum(myTotal);
    //         console.log(setSum, 'len')
    //     }, [productsInCart])


    // const handlePrice = ()=>{
    //     let ans = 0;
    //     productsInCart.map((item)=>(
    //         ans += item.quantity * item.price
    //     ))
    //     setPrice(ans);
    //     console.log(ans, 'ans')
    // }
    // useEffect(()=>{
    //     handlePrice();
    // })
    // const handlePrice = ()=>{
    //     var totalCart = 0;
    //     for(var item in productsInCart) {
    //       totalCart += productsInCart[item].price * productsInCart[item].quantity;
    //     }
    //     console.log(totalCart,'t')


    // // }

    // useEffect(() => {
    //     let total = 0;
    //     for(var i = 0; i < productsInCart.length ; i++) {
    //         total+= productsInCart[i].price*productsInCart[i].quantity;
    //     }
    //     setSum(total);
    // }, [productsInCart])

    // const total = () => {
    //     let t=0;
    //     for(let i=0;i<productsInCart.length;i++)
    //     {
    //         t+=productsInCart[i].price;
    //     }
    //     setCartTotal(t);
    // }

    // const updateItemQuantity =() => {

    // }
    // useEffect(()=>{
    //     updateItemQuantity();
    // })

    // const handleDecrement = (card) => {
    //     setProducts(productsInCart => 
    //         productsInCart.map((item) =>
    //         card === item.id ? {...item, products_qty: item.products_qty -1} : item
    //         )
    //         );
    // }

    // const handleIncrement = (card) => {
    //     setProducts(productsInCart => 
    //         productsInCart.map((item) =>
    //         card === item.id ? {...item, products_qty: item.products_qty -1} : item
    //         )
    //         );
    // }
    // const changeQuantity = (item, e) => {
    //     const productList = [...productsInCart];
    //     const index = productList.indexOf(item);
    //     if(e === '+') {
    //       productList[index].quantity++;
    //     }
    //     else {
    //       if(productList[index].quantity > 1) {
    //         productList[index].quantity--;
    //       }
    //       else {
    //         productList.splice(index, 1);
    //       }
    //     } 
    //     setCart(productList);
    //     localStorage.setItem("productsInCart", JSON.stringify(productList));
    //   }
    const handleDecrement = (p) => {
        setProducts(productsInCart =>
            productsInCart.map((item) =>
                p.id === item.id ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) } : item
            )
        );
    }


    const handleIncrement = (p) => {
        setProducts(
            productsInCart.map((item) =>
                p.id === item.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    useEffect(() => {
        // total();
    }, [productsInCart]);

    // const total = () => {
    //     let totalVal = 0;
    //     for (let i = 0; i < productsInCart.length; i++) {
    //         totalVal += productsInCart[i].price;
    //     }
    //     setCartTotal(totalVal);
    // };
    const checkout = () => {
        alert(`Checkout - Subtotal: $ ${sum.toFixed(2)}`)
    }

    useEffect(() => {
        let total = 0;
        for (var i = 0; i < productsInCart.length; i++) {
            total += productsInCart[i].price * productsInCart[i].quantity;
        }
        setSum(total);
    }, [productsInCart])

    // const onAdd = (product) => {
    //     const exist = productsInCart.find((x) => x.id === product.id);
    //     if (exist) {
    //       setProducts(
    //         productsInCart.map((x) =>
    //           x.id === product.id ? { ...exist, qty: exist.quantity + 1 } : x
    //         )
    //       );
    //     } else {
    //       setProducts([...productsInCart, { ...product, quantity: 1 }]);
    //     }
    //   };
    return (
        <div className="">
            {/* <button>
                {productsInCart.length >
                    0 && (
                        <div className="product-count">
                            {
                                productsInCart.length
                            }
                        </div>
                    )}
            </button>  */}

            {/* {/* {productsInCart.length > 0 && (

                <button type="button" onClick={clearCart}>Danger</button>
            )} */}
            {/* {productsInCart.map((product, idx) => (
                <div className="product" key={idx}>
                    <div className="card">
                        <div className="card-title">
                            {product.title}</div>
                       
                        <div className="card">
                            <img
                                className="product-image"
                                src={
                                    product.url
                                }
                                alt={
                                    product.image
                                }
                            />
                     

                            <div className="card-title">Price:
                                {product.price}</div>
                            <button onClick={() => removeFromCart(product)}>Remove</button>

                        </div>
                    </div>
                   
                    <button className="checkout-btn" onClick={() => handleIncrement(product)}>+</button>
                    {product.quantity}
                    <button className="checkout-btn" onClick={() => handleDecrement(product)}>-</button>

                </div>


            ))} */}



<div className="card-list">
          {productsInCart.length > 0 && (

                <p></p>
            )} 
          {productsInCart.map((product, idx) => (
            
                <div className="product" key={idx}>
                      <button className="clearproduct" onClick={() => removeFromCart(product)}><ClearIcon/></button>
                    <div className="card">
                        <div className="card-title">
                            {product.title}</div>
                       
                        <div className="card">
                            <img
                                className="product-image"
                                src={
                                    product.url
                                }
                                alt={
                                    product.image
                                }
                            />
                     

                            <div className="card-title">Price:
                                 {product.price}</div>
                                 <div className="card-title">Category:
                                 {product.category}</div>
                                <div className="card-title">Rating:
                                 {product.rating}</div>
                        </div> 
                    </div>
                  
                 <div className="iconsalign">
                
                 <button className="cir1" onClick={() => handleIncrement(product)}><Icon color="primary">add_circle</Icon></button>
                 <div className="proquan">Quantity : {product.quantity}</div>&nbsp;&nbsp;&nbsp;
                 <button  className="cir2" onClick={() => handleDecrement(product)}><Icon color="primary">remove_circle</Icon></button>
                 </div>
                
                    {/* <ShoppingCartIcon/> */}
                   
                    {/* <button className="checkout-btn" onClick={() => handleDecrement(product)}>-</button> */}

                </div>


            ))}
            </div>
      {productsInCart.length > 0 ? (
            <div className="subtotal-div">
            
                <button className="checkout-btn" style={{width: '150px', marginTop: '2%'}}> TOTAL $ {sum.toFixed(2)}</button>
                <button className="checkout-btn" style={{width: '150px', marginTop: '2%', marginLeft:'10px'}} onClick={checkout}>CHECKOUT</button>
                
            </div>) : (
                <h1>CART IS EMPTY</h1>
            )}


{productsInCart.length > 0 ? (
             <button className="clearicon" type="button" onClick={clearCart}>Clear All <ClearIcon/> </button>
            
             ) : (
              ''
            )}
        
            
        </div>
    )
}
export default Main;

