import React from 'react'
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import Moviecard from '../../Cards/Moviecard/Moviecard';

function Showlist() {
    const [movies,setmovies]=useState([]);
   const tempurl ="https://static.tvmaze.com/uploads/images/medium_portrait/494/1235114.jpg"
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data => setmovies(data))
        .catch(error => console.error('Error fetching course details:', error));
      }, []);

      // console.log(movies)

  return (

    <div className="container my-4">
      <h1 style={{textAlign:'center'}}>Movie List</h1>
                  <div className="row">
           {movies.map((movie)=>{
         return <div className="col-md-4" key={movie.show.id }>
          <Moviecard  id={movie.show.id} url= {(movie.show.image && movie.show.image.medium) || tempurl} name={movie.show.name} average={movie.show.rating.average || 10} language={movie.show.language} runtime={movie.show.runtime} />
         
        </div>
       })
       
     }
        </div>
      <p>hello world</p>
    </div>
    
  )
}

export default Showlist


