import React from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";


 const ReadOnlyRow = ({product , handleEditClick,handleDeleteClick}) =>{

    return (
        <tr>
            
            
                    <td>{product.email}</td>
                    <td>{product.pass}</td>
                    <td>{product.phone} </td>
                    <td>{product.address} </td>
             
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