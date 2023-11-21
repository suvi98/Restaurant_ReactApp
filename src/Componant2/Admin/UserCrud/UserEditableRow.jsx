import React from 'react'
import {  FaSave, FaCross } from "react-icons/fa";
const EditableRow =({editFormData,handleEditFormDataChange,handleCancleClick}) => {

    return(
        <tr>
            <td>
                <input 
                type="text" 
                name="email" 
                value={editFormData.email}
                onChange={handleEditFormDataChange}
                required/>
            </td>
            <td>
               <input type="text" 
                name="pass" 
                value={editFormData.pass}
                onChange={handleEditFormDataChange}
                required/>
            </td>
            <td>
              <input type="text" 
               name="phone"  
               value={editFormData.phone}
               onChange={handleEditFormDataChange}
               required/>
            </td>
            <td>
              <input type="text" 
               name="address"  
               value={editFormData.address}
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