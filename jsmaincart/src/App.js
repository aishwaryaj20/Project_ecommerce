import React from "react";
import "./style/main.css";

import About from "./components/About";

import { Routes, Route, Link } from "react-router-dom"

import Data from '../src/components/Data';
import Main from "./components/Main";
import EnterData from "./components/EnterData";
import FormData from "./components/FormData";



function App() {
	const [click, setClick] = React.useState(false);
  //const [selectedSizes, setSelectedSizes] = useState([]);
	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);
    // const ErrorSchema = Yup.object().shape({
		// username: Yup.string()
		//   .required("Name is required")
		//   .min(2, "too Short")
		//   .max(12, "Too Long"),
		// age: Yup.number()
		//   .typeError("Age must be a number")
		//   .integer("must be an integer")
		//   .required("Required")
		//   .min(18, "You must be at least 18 years")
		//   .max(60, "You must be at less than 60 years"),
		// email: Yup.string().email("Invalid email").required("Required"),
		// phone: Yup.string()
		//   .matches(
		// 	/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
		// 	"Not a Phone number"
		//   )
		//   .required("Required"),
		// message: Yup.string()
		//   .min(5, "Too Short!")
		//   .max(100, "Too Long!")
		//   .required("Required"),
	  // });
	return (
		<>
		
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
         
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/Data"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Created products
              </Link>
            </li>
			{/* <li className="nav-item">
              <Link
                exact
                to="/formdata"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Form
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                exact
                to="/main"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/enterData"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Create Product
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
	  <div>
	  {/* <Formik
            initialValues={{
              productName: "",
              age: "",
              email: "",
              phone: "",
              message: "",
            }}
            onSubmit={(value, { resetForm }) => {
              console.log(value);
              resetForm();
            }}
            validationSchema={ErrorSchema}
            component={EnterData}
          /> */}
	  </div>
    </ div>
   
		 <Routes>
        
		  <Route path="/Data" element={<Data />}></Route>
		  <Route path="Main" element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="enterData" element={<EnterData />}></Route>
		  <Route path="form" element={<FormData />}></Route>
        </Routes>
			
		</>
	);
}

export default App;
