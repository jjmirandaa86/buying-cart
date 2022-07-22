import { createContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);

  const handleChangeLoading = () => {
    loading
      ? setLoading(false)
      : setLoading(true);
  };

  const data = { loading, handleChangeLoading };

  return (
    <LoadingContext.Provider value={data}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider };

export default LoadingContext;