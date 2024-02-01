import React from 'react'
import './Moviecard.css'
import { Link } from 'react-router-dom'
function Moviecard({name,average,language,url,id,runtime}) {
  return (
  

            <div class="card ">   
               <div class="card-header">
                  <img class="card-img" src={url} alt="Loading"/>
               </div>  
               <div class="card-body">
                  <h1 class="card-title">{name}</h1>
                  <div class="container">
                     <div class="row">
                     
                        <div className='maindetail'>
                        <div class="col-4 metadata">
                           <i class="fa fa-star" aria-hidden="true"></i> 
                           <p>{average}/10</p>
                        </div>
                            <p>{runtime} min</p>
                            <p>{language}</p>
                            
                            </div>
                        <Link to={`/content/${id}`}>
                        <button>See Detail</button>

                        </Link>
                     </div>
                  </div>      
               
               </div>
            </div>
     
    
  )
}

export default Moviecard
