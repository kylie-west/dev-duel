import { useState, createContext } from "react";

export const AppContext = createContext({});

export default function AppProvider({ children }) {
  const initialState = {
    devs: { dev1: null, dev2: null },
    errors: { duel: "", inspect: "" },
    winner: {
      dev: null,
      winningProperty: null,
      tie: false,
    },
  };

  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}
