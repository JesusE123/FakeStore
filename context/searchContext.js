import { createContext , useReducer} from "react";
import {actions} from './actions'
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
const [data, dispatch] = useReducer(actions, {});

    return (
        <SearchContext.Provider value={{data, dispatch}} >
            {children}
        </SearchContext.Provider>
    )
}


