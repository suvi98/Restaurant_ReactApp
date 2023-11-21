import React,{useState} from 'react';
import Navigation from '../../Navbar/Navigation'
import {useNavigate} from 'react-router-dom'
import './Admin.css'
const Admin =() => {


       const navigate  = useNavigate();
   


    const [emailData, setEmailData] = useState({

        email:''
      })
     
      const handleemail=(e)=>{
  
        const email=e.target.value
        setEmailData(email)
    }
      
        const [passData, setPassData] = useState({
  
              pass:''
          })
  
        
          const handlepass=(e)=>{
  
              const pass=e.target.value
              setPassData(pass)
          }
  
    const handlesubmit=()=>{
      
         console.log(localStorage.getItem("adminEmail"),"this is login");
          if(emailData === localStorage.getItem("adminEmail") && passData ===localStorage.getItem("adminPass")){
            navigate("/menuCrud")
            
          }else
          {
            alert("invalid")
          }
  }
  const handleRegister=()=>{
    navigate("/adminRegister")
  }
    return (
        <div>
            
         <Navigation/>
         <div  className='login-caontainer container mt-5' >
           
           <h2 className='heading mt-5'> SignUp</h2>
            <form  className='mt-5'>

             <div className='mb-3'>
                      <label className='form-label' htmlFor='email'>
                        Email
                      </label>
                      <input className='form-control' type="text"id="email" name="email" placeholder='abc@gmailcom'
                        onChange={handleemail}
                      required/>
               </div>

               <div className='mb-3'>
                    <label className='form-label' htmlFor='pass'>
                      Password
                    </label>
                    <input className='form-control' type="text"id="pass" name="pass" placeholder='password'
                      onChange={handlepass}  
                    required/>

             </div>
           
                     <button className='btn btn-danger mt-5' type="submit" 
                     onClick={handlesubmit}>
                      Submit</button>

                      <h6 onClick={handleRegister}> Not member? Register here</h6>
            </form>


        </div> 
        </div>
    );
}

export default Admin;