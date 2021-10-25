import React, {createContext, useState} from 'react';

export const themeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState('dark');

  return (
    <themeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </themeContext.Provider>
  );
};
