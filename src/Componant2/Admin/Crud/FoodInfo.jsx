import React,{useState,Fragment} from 'react';
import Nav from '../Nav/Nav'
import './FoodInfo.css'
import data from './Data.json'
import EditableRow from './EditableRow'
import ReadOnlyRow from './ReadOnlyRow'
// import nanoid from 'nanoid';

const FoodInfo=() => {

    console.log(data);

     const [product, setContact] = useState(data)  
     
          
     const [addFormData, setFormData] =  useState({

      name:'',
      price:'',
      image:''
  
    }) 
    
    const [editProductId, setEditProductId] = useState(null);

    const [editFormData, setEditFormData] = useState({

      name:'',
      price:'',
      image:''
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
        
        e.preventDefault();
      const newContact = {
            id:    addFormData.id,
          name: addFormData.name,
          price: addFormData.price,
          image: addFormData.image
      
      };
      const newContacts = [...product,newContact];
      setContact(newContacts);
      alert("added Successfully")
    }

    const handleEditClick = (e,product) => {

      e.preventDefault();
      setEditProductId(product.id);
  
      const formValues = {
        id:    product.id,
        name:  product.name,
        price: product.price,
        image: product.image
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
          name: editFormData.name,
          price: editFormData.price,
          image: editFormData.image
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
                  <label className='form-label' htmlFor='name'>
                  Name
                  </label>
                  <input className='form-control' 
                         type="text"
                         id="name" 
                         name="name"  
                         onChange={handleAddFormChanges}
                        required/>

             </div>
             <div className='mb-3'>
                      <label className='form-label' htmlFor='price'>
                        Price
                      </label>
                      <input className='form-control' 
                      type="text"
                      id="price" 
                      name="price"  
                      onChange={handleAddFormChanges}
                      required/>
               </div>
               <div className='mb-3'>
                    <label className='form-label' htmlFor='image'>
                      Image
                    </label>
                    <input className='form-control' 
                    type="file"
                    id="image" 
                    name="image" 
                    // multiple accept='image/png , image/jpg, image/webp'
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
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
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
                      
                </tbody>
              </table>
        </form>
        
          </div>
          </div>
        </div>
    );
}

export default FoodInfo;