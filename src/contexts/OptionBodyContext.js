import { createContext, useState } from "react";

const OptionBodyContext = createContext();

const intialStateOptionBody = "P";

const OptionBodyProvider = ({ children }) => {

  const [optionBody, setOptionBody] = useState(intialStateOptionBody);
  const data = { optionBody, setOptionBody };

  return (
    <OptionBodyContext.Provider value={data}>
      {children}
    </OptionBodyContext.Provider>
  );
};

export { OptionBodyProvider };
export default OptionBodyContext;