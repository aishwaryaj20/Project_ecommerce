import React from 'react'
import { useState, useEffect } from 'react';
import './enterdata.css'
// const getDatafromLS=()=>{
//   const data = localStorage.getItem('shopping-cart');
//   if(data){
//     return JSON.parse(data);
//   }
//   else{
//     return []
//   }
// }
const EnterData = () => {
  //   const [value, setValue] = useState('Select');
  // const [userData, setuserData]=useState(getDatafromLS());
  const [productName, setProductName]=useState('');
  const [price, setPrice]=useState('');
  const [rating, setRating]=useState('');
  const [category, setCategory]=useState('');
  //const [productsData, setProductsData]=useState(productsInCart);
  const [productsData, setProductsData] =
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
    JSON.stringify(productsData)
  );
}, [productsData]); 

  const handleAddDataSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let user={
      productName,
      price,
      rating,
      category
     
    }
    setProductsData([...productsData,user]);
    setProductName('');
    setCategory('')
    // setDescription('')
    setRating('');
    setPrice('');
  
  }
 

const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}


const handleimg = (e) => {
const file = e.target.files[0];
getBase64(file).then(base64 => {
  localStorage["img"] = base64;
  console.debug("file stored",base64);
} );
}

 
  useEffect(()=>{
    localStorage.setItem("enterdata",JSON.stringify(productsData));
  },[productsData])



  
  return (
    <div> 
      <div className='box'>
      <form   onSubmit={handleAddDataSubmit}>
    
    <div className="form-group">
        <label>Name</label>
        <input  onChange={(e)=>setProductName(e.target.value)} value={productName} type="text" className="form-control" required/>
    </div>
    
    <div className="form-group">
        <label>Price</label>
        <input  onChange={(e)=>setPrice(e.target.value)} value={price} type="number" className="form-control" required />
    </div>
    {/* <div className="form-group">
        <label>Price</label>
        <input  onChange={(e)=>setQuantity(e.target.value)} value={quantity} type="number" className="form-control" />
    </div> */}
      
    <div className="form-group">
        <label>Rating</label>
        <input  onChange={(e)=>setRating(e.target.value)} value={rating} type="number" className="form-control" required />
    </div>
    <div className="form-group">
        <label>Category</label>
        <input  onChange={(e)=>setCategory(e.target.value)} value={category} type="text" className="form-control" required/>
    </div>

   
   <h6>Select Image</h6>
            <input type="file" onChange={handleimg}  name="file" required/>
      
    <button type="submit" className="btn btn-primary btn-block" style={{width: '100px', marginTop: '2%'}}>Submit</button>
    
</form>
</div>
<div>
{/* {userData.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
            
               
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setuserData([])}>Remove All</button>
          </>} */}
</div>

</div>
  )
}

export default EnterData