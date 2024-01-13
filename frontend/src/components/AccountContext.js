import React, { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export function useAccount() {
  return useContext(AccountContext);
}

export function AccountProvider({ children }) {
  const [account, setAccount] = useState(null);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}
