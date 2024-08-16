import { createContext, useState, useContext} from 'react';


const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [Filter, setFilter] = useState('nasional');

  return <FilterContext.Provider value={{ Filter, setFilter }}>{children}</FilterContext.Provider>;
};


// jika error
export const useFilter = ()=> {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
