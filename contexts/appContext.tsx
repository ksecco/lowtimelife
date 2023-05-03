import { createContext, useContext, useState } from "react";
import { type Mode } from "@/types/app";

const AppContext = createContext({
  mode: "light",
  setMode: (mode: Mode) => {},
});

export default function AppContextWrapper({ children }: any) {
  const [mode, setMode] = useState("light");
  const value = { mode, setMode };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
