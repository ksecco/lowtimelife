import { createContext, useContext, useState } from "react";
import { type Mode } from "@/types/app";

const AppContext = createContext({
  mode: "light",
  setMode: (mode: Mode) => {},
  didDefine: false,
  setDidDefine: (didDefine: boolean) => {},
  showDefinition: false,
  setShowDefinition: (showDefinition: boolean) => {},
});

export default function AppContextWrapper({ children }: any) {
  const [mode, setMode] = useState("light");
  const [didDefine, setDidDefine] = useState(false);
  const [showDefinition, setShowDefinition] = useState(false);
  const value = {
    mode,
    setMode,
    didDefine,
    setDidDefine,
    showDefinition,
    setShowDefinition,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
