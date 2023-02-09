import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useContext} from 'react'
import { DataContext } from '@/context/dataContext';

function Search() {
  const {handleFilterData} = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm)

  const handleChange = (e:any) => {
    setSearchTerm(e.target.value)
    handleFilterData(e.target.value)
  }
  return (
    <div>
     <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" className='font-bold'>Buscar por titulo de producto</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
         onChange={handleChange}
         value={searchTerm}
         
         
          
        />
      </InputGroup>

      
    </div>
  )
}

export default Search
