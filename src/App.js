
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Componant2/Home';
import About from './Componant2/About';
import Products from './Componant2/Products/Products'; 
import Order from './Pages/Order';
import Cart from './Componant2/Cart/Cart'
import React,{useState}  from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Admin from './Componant2/Admin/Login/Admin'
import FoodInfo from './Componant2/Admin/Crud/FoodInfo'
import Bill from './Componant2/Admin/TodayBill/Bill'
import User from './Componant2/Admin/UserCrud/User'
import AdminRegister from './Componant2/Admin/Login/AdminRegister'

function App() {

  
  const [cartItems, setCartItems]  = useState([]);

  const handleAddProduct=(product)=>{
      const ProductExist = cartItems.find((item) => item.id === product.id);

      if(ProductExist){

          setCartItems(cartItems.map((item) => item.id === product.id ?
          {...ProductExist,quantity: ProductExist.quantity + 1}:item));
       
      }
      else{
             setCartItems([...cartItems, {...product, quantity:1}]) 
      }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item) => item.id === product.id 
        ? {...ProductExist,quantity: ProductExist.quantity - 1}:item)
      )
    }
  }

  const handleCartClearance = () =>{
    setCartItems([]);
  }

  return (
    <Router>

      
      <hr/>
      <Routes>

      <Route exact path='/' element={<Login/>}></Route>
      
      <Route exact path='/home' element={<Home/>}></Route>
      
      <Route exact path='/register' element={<Register/>}></Route>
      
        <Route exact path='/order' element={<Order/>}></Route>

        <Route exact path='/about' element={<About
       cartItems={cartItems} 
       handleAddProduct={handleAddProduct}
       handleRemoveProduct={handleRemoveProduct}
       handleCartClearance={handleCartClearance}/>}>
       </Route>

        <Route exact path='/admin' element={<Admin/>}></Route>
        
        <Route exact path='/adminRegister' element={<AdminRegister/>}></Route>
        
        <Route exact path='/menuCrud' element={<FoodInfo/>}></Route>
        
        <Route exact path='/userCrud' element={<User/>}></Route>

        <Route exact path='/bill' element={<Bill
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}/>}>
        </Route>
        <Route exact path='/cart' element={<Cart
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}/>}>
        </Route>
        
        <Route exact path='/products' element={<Products 
             handleAddProduct={handleAddProduct}/>}>
        </Route>
      </Routes>

    </Router>
   
  );
}

export default App;


{/* <nav>
        <ul>
          <li><Link to={'/home'} element={<Home/>}>Home</Link></li>
          <li><Link to={'/about'} element={<About/>}>About</Link></li> 
        </ul>
        </nav> */}