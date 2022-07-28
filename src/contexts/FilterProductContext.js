import { createContext, useState } from "react";

const FilterProductContext = createContext();

const initialStateFilterProduct = { fielt: null, value: null };

const FilterProductProvider = ({ children }) => {

  const [filter, setFilter] = useState(initialStateFilterProduct);

  const configFilterProduct = (fielt = null, value = null) => {
    setFilter({ fielt, value });
  };

  const data = { filter, configFilterProduct };

  return (
    <FilterProductContext.Provider value={data}>
      {children}
    </FilterProductContext.Provider>
  );
};

export { FilterProductProvider };

export default FilterProductContext;

