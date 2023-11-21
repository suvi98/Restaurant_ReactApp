import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './AdminRegister.css'

const Register=()=> {

    const navigate  = useNavigate();

    // const [register,setRegister] = useState([null]);
    const [registerData, setRegisterData] = useState({

        email:'',
        pass:'',
        phone:'',
        address:''
      })
     
      const handleOnchangeAdminData=(e)=>{
        e.preventDefault();
        
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = {...registerData};
        newFormData[fieldName] = fieldValue;

        setRegisterData(newFormData);
      
    }
    const handleAdminRegisterSubmit=()=>{
      
        // const arr=[registerData.email,registerData.pass,registerData.phone,registerData.address]
        localStorage.setItem("adminEmail",registerData.email)
        localStorage.setItem("adminPass",registerData.pass)
        // localStorage.setItem("adminRegister",arr)
        
        navigate("/admin")
        alert("Register Successfully")
    }

    const handleAdminOnclickLogin = () =>{
      navigate("/admin")
    }

    return (
        <div className='admin'>
              <div  className='login-caontainer container mt-5' >
           
           <h2 className='heading mt-5'> SignUp</h2>
            <form  className='mt-5' >
          
             <div className='mb-3'>
                      <label className='form-label' htmlFor='email'>
                        Email
                      </label>
                      <input className='form-control' type="text"id="email" name="email" placeholder='abc@gmailcom'
                        onChange={handleOnchangeAdminData}
                      required/>
               </div>

               <div className='mb-3'>
                    <label className='form-label' htmlFor='pass'>
                      Password
                    </label>
                    <input className='form-control' type="text"id="pass" name="pass" placeholder='password'
                      onChange={handleOnchangeAdminData}  
                    required/>
             </div>
             <div className='mb-3'>
                      <label className='form-label' htmlFor='phone'>
                        phone
                      </label>
                      <input className='form-control' type="text"id="phone" name="phone" placeholder='abc@gmailcom'
                        onChange={handleOnchangeAdminData}
                      required/>
               </div>
               <div className='mb-3'>
                      <label className='form-label' htmlFor='address'>
                        address
                      </label>
                      <input className='form-control' type="text"id="address" name="address" placeholder='abc@gmailcom'
                        onChange={handleOnchangeAdminData}
                      required/>
               </div>
                     <button className='btn btn-danger mt-5' type="submit" onClick={handleAdminRegisterSubmit}>
                      Submit</button>

                      <div className='mt-3' onClick={handleAdminOnclickLogin}>Login?</div>
            </form>


        </div>
        </div>
    );
}

export default Register;