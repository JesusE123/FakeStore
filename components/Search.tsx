import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useContext} from 'react'
import { DataContext } from '@/context/dataContext';

function Search() {
  const {state,dispatch} = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
      const handleFilter = (e:any) => {
        const type = e.target.value;
        dispatch({type: 'FILTER', payload: type})
      }
  

  return (
    <div>
     <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" className='font-bold'>Buscar por titulo de producto</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
         onChange={handleFilter}
        
         
         
          
        />
      </InputGroup>

      
    </div>
  )
}

export default Search
