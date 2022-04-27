import React, { useEffect } from 'react'
import {useState} from 'react';
import Header from './Header';
import './Homepage.css'

function Homepage() {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000",{
            'method':'GET',
            headers :{
                'Content-Type':'application/json',
               
            }
        })
        .then(response =>response.json())
           
        .then(response =>setBooks(response))
        .catch(error => console.log(error))
    },[])
   


  return (
      <div>
        <Header/>
        <div className=''>
        <div className="container">
         <div className='mainbody'>
            {
                books.map(book =>{
                    return <div>
                         <h2 className='bookName' >{book.name}</h2>
                         <h4 className='authorName'>Author : {book.author}</h4>
                         <p className='theme'> Theme : <br /> {book.description}</p>
                        
                    </div>
                  
                    
                })
                  
            }
        </div>

          </div>
        </div>            
    </div>
  )
}

export default Homepage