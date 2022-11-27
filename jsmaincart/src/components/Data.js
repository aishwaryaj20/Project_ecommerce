import React, {
	useState,
	useEffect,
} from "react";
//import "./style/main.css";
//import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Contact from "./components/Contact";
import './data.css'
const products = [
	{
		id: "1",
        title: "HERE&NOW",
       url: "https://i.ibb.co/55cwBpP/2.png",
       size: "M",
       price: 10.90,
	   rating: 5.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "2",
        title: "Calvin Klein Jeans",
       url: "https://i.ibb.co/NNd5wmc/1.png",
       size: "XL",
       price: 10.00,
	   rating: 3.8,
        quantity: 1,
		category: 'Mens'
    },

	

	
    {
        id: "3",
        title: "Moda Rapido",
       url: "https://i.ibb.co/wQzRVJM/3.png",
       size: "S",
       price: 9.80,
	   rating: 4.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "4",
        title: "Roadster",
       url: "https://i.ibb.co/Fh2Bv0D/4.png",
       size: "L",
       price: 10.99,
	   rating: 1.8,
        quantity: 1,
		category: 'Women'
    },
    {
        id: "5",
        title: "Difference of Opinion",
       url: "https://i.ibb.co/Vq5KDbx/5.png",
       size: "M",
       price: 11.90,
	   rating: 2.8,
        quantity: 1,
		category: 'Women'
    },
	

	
    {
        id: "6",
        title: "Dillenger",
       url: "https://i.ibb.co/X867M8m/6.png",
       size: "S",
       price: 8.50,
	   rating: 3.3,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "7",
        title: "Roadster",
       url: "https://i.ibb.co/YcdG2pK/7.png",
       size: "XXL",
       price: 12.99,
	   rating: 8.9,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "8",
        title: "FIFO DIDO",
       url: "https://i.ibb.co/FbC6z7C/8.png",
       size: "M",
       price: 10.00,
	   rating: 2.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "9",
        title: "Roadster",
       url: "https://i.ibb.co/xg6vqVd/9.png",
       size: "ML",
       price: 14.80,
	   rating: 9.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "10",
        title: "HERE&NOW",
       url: "https://i.ibb.co/wzzghxL/10.png",
       size: "ML",
       price: 7.99,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "11",
        title: "jack & jones",
       url: "https://i.ibb.co/jZ11DSd/11.png",
       size: "ML L",
       price: 9.99,
	   rating: 2.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "12",
        title: "Roadster",
       url: "https://i.ibb.co/SK6pX6B/12.png",
       size: "L",
       price: 15.90,
	   rating: 4.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "13",
        title: "Roadster",
       url: "https://i.ibb.co/gDKrGxY/13.png",
       size: "XXL",
       price: 16.00,
	   rating: 2.8,
	   quantity: 1,
	   category: 'Mens'
    },
    {
        id: "14",
        title: "Calvin Klein Jeans",
       url: 'https://i.ibb.co/w6QGNv9/14.png',
       size: "L",
       price: 14.60,
	   rating: 2.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "15",
        title: "Maniac",
       url: "https://i.ibb.co/5BtcNN8/15.png",
       size: "XL",
       price: 10.50,
	   rating: 3.8,
        quantity: 1,
		category: 'Mens'
    },
    {
        id: "16",
        title: "HERE&NOW",
       url: "https://i.ibb.co/xDcvk2V/16.png",
       size: "XXL",
       price: 12.00,
	   rating: 5.8,
        quantity: 1,
		category: 'Mens'
    },
	{
        id: "17",
        title: "Casio",
       url: "https://uploads.codesandbox.io/uploads/user/57716f3b-73a3-4deb-9f7d-ab596da2ed66/AQeU-product1.jpg",
       size: "S",
       price: 9.80,
	   rating: 4.8,
        quantity: 1,
		category: 'watch'
    },
	{
        id: "18",
        title: "Timex",
       url: "https://uploads.codesandbox.io/uploads/user/57716f3b-73a3-4deb-9f7d-ab596da2ed66/Ssvs-product2.jpg",
       size: "M",
       price: 11.90,
	   rating: 2.8,
        quantity: 1,
		category: 'watch'
    },

	{
        id: "19",
        title: "Richard Mille",
       url: "https://uploads.codesandbox.io/uploads/user/57716f3b-73a3-4deb-9f7d-ab596da2ed66/SZDj-product8.jpg",
       size: "M",
       price: 11.90,
	   rating: 2.8,
        quantity: 1,
		category: 'watch'
    },
	
	{
        id: "20",
        title: "Beans",
       url: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
       size: "M",
       price: 11.90,
	   rating: 2.8,
        quantity: 1,
		category: 'Groceries'
    },
	{
        id: "21",
        title: "Tomato",
       url: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
       size: "M",
       price: 11.90,
	   rating: 2.8,
        quantity: 1,
		category: 'Groceries'
    },
	{
        id: "22",
        title: "Mushroom",
       url: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
       size: "M",
       price: 11.90,
	   rating: 2.8,
        quantity: 1,
		category: 'Groceries'
    },
];

function Data() {
   
  // the value of the search field 
 // const [name, setName] = useState('');
//   const [search, setSearch] = useState("");
  //const [filteredList, setFilteredList] = new useState(products);
  // the search result
  const [foundUsers, setFoundUsers] = useState(products);
	//const [cartsVisibilty, setCartVisible] =
		//useState(false);

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

	
    // const filter = (e) => {
    //   const keyword = e.target.value;
  
    //   if (keyword !== '') {
    //     const results = products.filter((user) => {
    //       return user.name.toLowerCase().startsWith(keyword.toLowerCase());
    //       // Use the toLowerCase() method to make it case-insensitive
    //     });
    //     setFoundUsers(results);
    //   } else {
    //     setFoundUsers(products);
    //     // If the text field is empty, show all users
    //   }
  
    //   setName(keyword);
    // };
   
    const [value, setValue] = useState('Select');
	
	
    const setList = (e) => {
        setValue(e.target.value);
        sortProducts(e.target.value);
    }

	const filterBySearch = (event) => {
	
		const query = event.target.value;
		
		var updatedList = [...products];
		
		updatedList = updatedList.filter((item) => {
		
		  return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
		});
		

		setFoundUsers(updatedList);
		
	
	  };
   

	const addProductToCart = (product) => {
		let newCart = [...productsInCart];
		let itemInCart = newCart.find(
		  (item) => product.title === item.title
		);
		if (itemInCart) {
		  itemInCart.quantity++;
		} else {
		  itemInCart = {
			...product,
			quantity: 1,
		  };
		  newCart.push(itemInCart);
		}
		setProducts(newCart);
	  };

	const setCategoryList = (e) => {
		  setFoundUsers(e.target.value);
		CategoryData(e.target.value);
	
	}
	const CategoryData = (c,method) => {
		const result = products.filter((curr) => {
			return curr.category === c;
					});
		setFoundUsers(result)
		
	}

	    const sortProducts = (method) => {
        const array = products;
    
        if(method === "Lowest to Highest") {
            array.sort(function(a, b){
              return a.price-b.price
          })
        }
        else if(method === "Highest to Lowest") {
            array.sort(function(a, b){
              return b.price-a.price
          })
        }

		if(method === "Lowest to Highest rating") {
            array.sort(function(a, b){
              return a.rating-b.rating
          })
        }
        else if(method === "Highest to Lowest rating") {
            array.sort(function(a, b){
              return b.rating-a.rating
          })
        }
        setProducts(array);
      }

	   
        return (
		<>
				
				<div className="App">
				<span>Sort by&nbsp;: &nbsp;Price</span>
					<select class="selectpicker" data-live-search="true" value={value} onChange={setList}>
					<option value="Highest to Lowest">Price: Highest to Lowest</option>
							<option value="Lowest to Highest">Price: Lowest to Highest</option>
							<option value="Highest to Lowest rating">Rating: Highest to Lowest</option>
							<option value="Lowest to Highest rating">Rating: Lowest to Highest</option>
					</select>

					<span>Filter by categories</span>
					<select class="selectpicker" data-live-search="true" value={value} onChange={setCategoryList}>
						<option value="Mens" onClick={() => CategoryData('Mens')} >Mens</option>
						<option value="Women" onClick={() => CategoryData('Women')} >Women</option>
						<option value="watch" onClick={() => CategoryData('watch')} >Watch</option>
						<option value="Groceries" onClick={() => CategoryData('Groceries')} >Groceries</option>
					</select>
					
					
					<div className="container">



					</div>
                {/* {console.log(productsInCart)}
				<ShoppingCart
					visibilty={cartsVisibilty}
					products={productsInCart}
					onClose={() =>
						setCartVisible(false)
					}
					onQuantityChange={
						onQuantityChange
					}
					onProductRemove={onProductRemove}
				/> */}
                
				<div className="">
				
					{/* <button
						className="btn shopping-cart-btn"
						onClick={() =>
							setCartVisible(true)
						}>

						{productsInCart.length >
							0 && (
								<span className="product-count">
									{
										productsInCart.length
									}
								</span>
							)}
					</button> */}
				</div>
				<main>
					<h2 className="title">
						Products
					</h2>
                    {/* <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      /> */}

<div class="input-group rounded w-50 my-3">
  <input type="search" name='q' onChange={filterBySearch} class="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
   
  </span>
 
</div>

      <div className="products">
    
      </div>
      <div className="card-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((product) => (
            <li key={product.id} className="product">
              <span className="user-id"></span>
			  <div  className="card">
									<img
										className="imgg"
										src={
											product.url
										}
										alt={
											product.image
										}
									/>
									<div className="card-item">
             	<div className="card-title">	
									{product.title}</div>
									<span className="card">
										Price: {product.price}$
									</span>
								
									<div className="card">
										Rating: {product.rating}
									
									</div>
									<div className="card">
																				Category: {product.category}
									</div>
              <button
										className="btn"
										onClick={() =>
											addProductToCart(
												product
											)
										}>
										Add to cart
									</button>
									</div>
									</div>
            </li>
         
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
					{/* <div className="products">
						{products.map((product) => (
							<div
								className="product"
								key={product.id}>
								<img
									className="product-image"
									src={
										product.image
									}
									alt={
										product.image
									}
								/>
								<h4 className="product-name">
									{product.name}
								</h4>

								<p>
									{
										product.description
									}
								</p>
								<span className="product-price">
									Price: {product.price}$
								</span>
								<div className="">

									
								</div>
							</div>
						))}
					</div> */}
				</main>
			</div>
		</>
	);
}

export default Data;
