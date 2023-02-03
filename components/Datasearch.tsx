import React, {useState} from 'react'
import Search from './Search'

const Datasearch = ({element}:any) => {
    console.log(element)
    const [search, setSearch] = useState('')
    const handleChange = (e:any) => {
        setSearch(e.target.value)
    } 
  return (
    <div>
      hola
    </div>
  )
}

export default Datasearch