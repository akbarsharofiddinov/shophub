import { useContext } from "react";
import { myAppContext } from "@/context/myAppContext";

export const useMyAppContext = (): IContext | undefined => {
  const contextValues = useContext(myAppContext);

  return contextValues;
};
