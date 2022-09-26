import React, { useState, createContext } from "react";

export const DataContext = createContext();

const dataFixed = {
  nombre: 'Piero',
  edad: 4
}


export const DataProvider = ({children}) => {

  const [data, setData] = useState(dataFixed);
  
  return (
    <DataContext.Provider value={{data, setData}} >
      {children}
    </DataContext.Provider>
  )
}

