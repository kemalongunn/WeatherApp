import { createContext, useState } from "react";

export const CityContext = createContext();

export function CityContextProvider({children}) {
    const [city, setCity] = useState({})
    
    return(
       <CityContext.Provider
            value={{
                city,
                setCity
            }}>

          {children}

       </CityContext.Provider>
    );

}
