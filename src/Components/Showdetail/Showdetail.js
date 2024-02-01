import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Modal from 'react-modal';

import './Showdetail.css'
function Showdetail() {
  const { showId } = useParams();
  const [showdetail, setshowdetail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
  });

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setshowdetail(data))
      .catch(error => console.error('Error fetching course details:', error));
  }, []);

  for (let i = 0; i < showdetail.length; i++) {
    const obj = showdetail[i];
    if (obj.show.id == showId) {
      setshowdetail(obj.show);
    }


  }



  return (
  
    <div className='maincontainer'>
      <div className="imgcontainer">
        <img src={showdetail.image && showdetail.image.original} alt="" />
      </div>
      <div className='moviedetail'>
        <h4>{showdetail.name}</h4>
        <p>
          {showdetail.rating && (showdetail.rating.average || 10)}/10
          <i class="fa-solid fa-star" style={{ color: '#ffca0a' }}></i>
        </p>
        <p>{showdetail.language}</p>

      </div>
      <div className="summary">
        <h4>Sumaary</h4>
        <p dangerouslySetInnerHTML={{ __html: showdetail.summary }} />
        <button onClick={handleButtonClick}>Book Ticket</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Input Form Modal"
        >
          <form onSubmit={handleFormSubmit}>
            <h1>{showdetail.name}</h1>
            <p>{showdetail.language}</p>
            <p>  {showdetail.rating && (showdetail.rating.average || 10)}/10<i class="fa-solid fa-star" style={{ color: '#ffca0a' }}></i>   </p>

            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Date:
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Time:
              <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
            </label>
            <br />
            <button type="submit">Book Ticket</button>
          </form>
        </Modal>


      </div>
    </div>
  )
}

export default Showdetail
