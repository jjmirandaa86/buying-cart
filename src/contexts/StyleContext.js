import { createContext, useState } from "react";

const StyleContext = createContext();

const initialStateStyle = {
  colorFirst: "warning",
  colorSecond: "secondary",
  colorSuccess: "success",
  colorDanger: "danger",
  colorBacground: "info"
};

const StyleProvider = ({ children }) => {

  const [style, setStyle] = useState(initialStateStyle);

  const data = { style };

  return (
    <StyleContext.Provider value={data}>
      {children}
    </StyleContext.Provider >
  );
};

export { StyleProvider };

export default StyleContext;