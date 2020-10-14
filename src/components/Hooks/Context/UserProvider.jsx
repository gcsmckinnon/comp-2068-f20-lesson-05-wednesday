import React, { createContext, useState } from 'react';

// import { UserContext } from './UserProvider'
export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;