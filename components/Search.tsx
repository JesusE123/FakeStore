import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({handleChange, filter}:any) {

  return (
    <div>
     <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Buscar por titulo de producto</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
         onChange={handleChange}
         onClick={filter}
          
        />
      </InputGroup>

      
    </div>
  )
}

export default Search
