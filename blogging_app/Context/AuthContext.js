import React, {createContext, useState} from 'react';

export const authContext = createContext();

export const AuthProvider = props => {
  const [user, setUser] = useState();

  return (
    <authContext.Provider value={[user, setUser]}>
      {props.children}
    </authContext.Provider>
  );
};
