"use client";
import React, {useState} from 'react'
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '../../Icons';
const Features = () => {
  const [items, setItems] = useState([]);

  const addItem = (dataPoint1, dataPoint2, imageFile) => { 
    const newData = [dataPoint1, dataPoint2, imageFile];
    setItems([...items, { id: items.length, value: newData }]);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const dataPoint1 = event.target.elements.dataPoint1.value;
    const dataPoint2 = event.target.elements.dataPoint2.value;
    const imageFile = event.target.elements.imageInput.files[0];
    addItem(dataPoint1, dataPoint2, imageFile);
    event.target.reset();
  }

  return (
    <div className={`w-[70%] mx-auto bg-slate-800`}>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="dataPoint1" placeholder="Data Point 1" />
        <input type="text" name="dataPoint2" placeholder="Data Point 2" />
        <input type="file" name="imageInput" accept="image/*" />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}> ID: {item.id}, Value: {item.value.slice(0, 2).join(', ')}
            {item.value[2] && ( 
                <img src={URL.createObjectURL(  
                  item.value[2])} 
                  alt={`Item ${item.id}`} 
                  style={{ maxWidth: '100px', maxHeight: '100px' }} 
                />
            )}
          </li>
        ))}
      </ul>


    </div>
  );
}

export default Features