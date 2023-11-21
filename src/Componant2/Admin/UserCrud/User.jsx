import React,{useState,Fragment} from 'react';
import Nav from '../Nav/Nav'
import './User.css'
import data from './Data.json'
import EditableRow from './UserEditableRow'
import ReadOnlyRow from './UserReadOnlyRow'
// import nanoid from 'nanoid';

const Uesr=() => {

    console.log(data);

     const [product, setContact] = useState(data)  
     
          
     const [addFormData, setFormData] =  useState({

      email:'',
      pass:'',
      phone:'',
      address:''
      
    }) 
    
    const [editProductId, setEditProductId] = useState(null);

    const [editFormData, setEditFormData] = useState({

      email:'',
      pass:'',
      phone:'',
      address:''
    })
    
    

        const handleAddFormChanges = (e) => {

          e.preventDefault();
        
          const fieldName = e.target.getAttribute('name');
          const fieldValue = e.target.value;

          const newFormData = {...addFormData};
          newFormData[fieldName] = fieldValue;

          setFormData(newFormData);
      } 


    const handleAddFormSubmit = (e) =>{
        
      alert(addFormData.email)
        e.preventDefault();
      const newContact = {
            id:    addFormData.id,
            email: addFormData.email,
            pass: addFormData.pass,
            phone: addFormData.phone,
            address: addFormData.address
      };
      const newContacts = [...product,newContact];
      setContact(newContacts);
    }

    const handleEditClick = (e,product) => {

      e.preventDefault();
      setEditProductId(product.id);
  
      const formValues = {
        id:    product.id,
        email:  product.email,
        pass: product.pass,
        phone: product.phone,
        address:product.address
      }
  
      setEditFormData(formValues)
     }

     const handleEditFormDataChange = (e) => {
      
      e.preventDefault();
      const fieldName = e.target.getAttribute('name');
      const fieldValue = e.target.value;
  
    //  alert(e.target.value)
      const newFormData = {...editFormData};
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData)
   }
  
      const handleEditFormSubmit = (e) =>{
  
        e.preventDefault();
        const editedProduct= {
          id: editProductId,
          email: editFormData.email,
          pass: editFormData.pass,
          phone: editFormData.phone,
          address:editFormData.address
        }
  
        const newContacts = [...product];
        
        const index = product.findIndex( (product) => product.id === editProductId);
       
        newContacts[index] = editedProduct;
  
        setContact(newContacts);
        setEditProductId(null)
      }


      const handleCancleClick  = () =>{
        setEditProductId(null);
      }


      const handleDeleteClick = (productId) =>{
  
        const newContacts = [...product];
        
        const index = product.findIndex( (product) => product.id === productId);
        alert(index)
        newContacts.splice(index,1);
        setContact(newContacts);
  
      }
  
    return (
        <div>
            
         <Nav/>
          <div style={{width:"80%",display:"inline-flex"}}>
         <div  className='container mt-5' >
            {/* <h2 className='mb-3'>React Contact Form Component Example</h2> */}

            <form onSubmit={handleAddFormSubmit}>
             <div className='mb-3'>
                  <label className='form-label' htmlFor='email'>
                  Email
                  </label>
                  <input className='form-control' 
                         type="text"
                         id="email" 
                         name="email"  
                         onChange={handleAddFormChanges}
                        required/>

             </div>
             <div className='mb-3'>
                      <label className='form-label' htmlFor='pass'>
                        Password
                      </label>
                      <input className='form-control' 
                      type="text"
                      id="pass" 
                      name="pass"  
                      onChange={handleAddFormChanges}
                      required/>
               </div>
               <div className='mb-3'>
                    <label className='form-label' htmlFor='phone'>
                      phone
                    </label>
                    <input className='form-control' 
                    type="text"
                    id="phone" 
                    name="phone" 
                    onChange={handleAddFormChanges} 
                    required/>

             </div>
             <div className='mb-3'>
                    <label className='form-label' htmlFor='address'>
                      Address
                    </label>
                    <input className='form-control' 
                    type="text"
                    id="address" 
                    name="address" 
                    onChange={handleAddFormChanges} 
                    required/>

             </div>
                     <button className='btn btn-danger' type="submit">Submit</button>
            </form>


         </div>
          <div className='container mt-5'>
          <form onSubmit={handleEditFormSubmit}>
              <table>
                <thead>
                        <tr> 
                            {/* <th>Id</th> */}
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                </thead>
                <tbody>
                    {product.map((product) =>(

                      <Fragment>

                        {editProductId === product.id ?   (
                            <EditableRow 
                            editFormData={editFormData}
                            handleEditFormDataChange={handleEditFormDataChange}
                            handleCancleClick={handleCancleClick}
                            /> 
                        ):( 
                          <ReadOnlyRow 
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                          product={product}
                          />)}
                      
                         
                      </Fragment>
                      ))}
                     {/* {data.map( (contact)=>  
               ( 
                <tr>
                    <td>{contact.email}</td>
                    <td>{contact.pass}</td>
                    <td>{contact.phone}</td>
               </tr>
                ))} */}
                </tbody>
              </table>
        </form>
        
          </div>
          </div>
        </div>
    );
}

export default Uesr;