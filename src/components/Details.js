import React from 'react'

const Details = () => {
  return (
   <>
    <div className="container">
      <div className="heading">
      <h3>Quick Delivery</h3>
      <h1>ORDER A PIZZA NOW</h1>
      <p>Investigationes demonstraverunt lectores legere me lius
        quod ii legunt saepius. Claritas est etiam processus.</p>
      </div>
      <div className="deliveryAddress">
          <div className="container-input input-3">
          <input className='input-1' type="text" placeholder='First Name' />
          <input className='input-2' type="text"placeholder='Last Name' />
          </div>
           <div className="Street" >
           <input className='input-100 ' type="text"placeholder='Enter Street Address' />
           </div>

           <div className="container-input container-input-2 input-3">
          <input className='input-1' type="text" placeholder='Apartment/Room' />
          <input className='input-2' type="text"placeholder='Phone Number' />
          </div>
          <div className="container-input">
          <select className='input-100'>
         <option value="pizza">Pizza Type</option>
         <option value="pizza">Pizza Margeritta</option>
         <option value="pizza">Quick Tomato Pizza</option>
         <option value="pizza">Cheesy Vegetable Pizza</option>
         <option value="pizza">Chocolate Pizza</option>
         <option value="pizza">Four Cheese Pizza</option>
         <option value="pizza">Tandoori Paneer Pizza</option>
         </select>
         </div>
        
         <div className="container-input container-input-2">
          <input className='input-1' type="number" placeholder='Quantity' />
          
          <select className='size input-2'>
         <option value="pizza">Size</option>
         <option value="pizza">4 inch Circle</option>
         <option value="pizza">5 inch Circle</option>
         <option value="pizza">6 inch Circle</option>
         <option value="pizza">7 inch Circle</option>
         </select>
          </div>
          <div className="Street" >
           <input className='input-100 ' type="number"placeholder='Pin Code' />
           </div>
         <div className="submit">
         <button className='btn1 container-input-2'>Order Now</button> 
         </div>
      </div>
    </div>
   </>
  )
}

export default Details