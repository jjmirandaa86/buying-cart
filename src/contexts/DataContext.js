import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const initialData = null;

const DataProvider = ({ children }) => {

  const [data, setData] = useState(initialData);

  const dataDestructuring = {};

  return (
    <DataProvider.Provider value={dataDestructuring}>
      {children}
    </DataProvider.Provider>
  );

};

export { DataProvider };
export default DataContext;