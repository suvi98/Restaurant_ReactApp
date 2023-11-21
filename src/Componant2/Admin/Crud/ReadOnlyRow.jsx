import React from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";


 const ReadOnlyRow = ({product , handleEditClick,handleDeleteClick}) =>{

    return (
        <tr>
            
            
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td> <img src={product.image} alt="" width="200" height="100"/>  </td>
             
            <td>
                <button type="button" style={{
                    border:"none"
                }} onClick={(e)=> handleEditClick(e, product)}> <FaUserEdit /></button>
                 
                 <button type="button" style={{
                    border:"none"
                }} onClick={(e)=> handleDeleteClick(e, product)}> <FaTrash /></button>
                
            </td>
        </tr>
    )
}

export default ReadOnlyRow