import React from 'react'

export const View = ({books}) => {
    
    return books.map(book=>(
        
        <tr key={book.id}>         
            <td>{book.fname}</td>
            <td>{book.lname}</td>
                
        </tr>            
    
))
}
