import React from 'react'
import {  FaSave, FaCross } from "react-icons/fa";
const EditableRow =({editFormData,handleEditFormDataChange,handleCancleClick}) => {

    return(
        <tr>
            <td>
                <input 
                type="text" 
                name="name" 
                value={editFormData.name}
                onChange={handleEditFormDataChange}
                required/>
            </td>
            <td>
               <input type="text" 
                name="price" 
                value={editFormData.price}
                onChange={handleEditFormDataChange}
                required/>
            </td>
            <td>
              <input type="text" 
               name="image"  
               value={editFormData.image}
               onChange={handleEditFormDataChange}
               required/>
            </td>
            <td>
                <button type='submit' style={{border:"none",color:"green"}}><FaSave/></button>
                <button type='button' onClick={handleCancleClick}><FaCross/></button>
            </td>
        </tr>
    )
}

export default EditableRow