import React from 'react'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";





const Index = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div >
        <img
          style={{
            height: 600,
            flex: 1,
            objectFit: 'cover',
            width: '100%',
            position : 'absolute'
            

          }}

          src='http://localhost:5173/back2.jpg'
        />
      </div>

      









      
    </>
  )
}

export default Index
