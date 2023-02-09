
import { createContext, useState, useReducer, useEffect } from "react";
import useSWR from "swr"


const initialState = {
  data: [],
  filteredData: []
}

const filterReducer = (state, action) => {
switch(action.type){
  case 'FETCH_SUCCESS':
    return {
      ...state,
      data: action.payload,
      filteredData:action.payload,
    };
    case 'FILTER':
      return {
        ...state,
        filteredData: state.data.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())),
      };
      default:
        return state;
}
}
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState)
 useEffect(()=> {
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch({type: 'FETCH_SUCCESS', payload:data})
    } catch (error) {
      console.log(error)
    }
  }
  fetchData();
 },[])


  return (
  <DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>
  )
};
