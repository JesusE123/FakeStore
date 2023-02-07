import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({handleChange}:any) {

  return (
    <div>
     <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" className='font-bold'>Buscar por titulo de producto</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
         onChange={handleChange}
         
          
        />
      </InputGroup>

      
    </div>
  )
}

export default Search
