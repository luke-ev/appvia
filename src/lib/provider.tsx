import { createContext, useState } from "react";
import { UseContextDataReturnType } from "./types";

export const storeDefaultValues = {
  name: "",
  description: "",
  selectedFeatures: null
}

export const useStoreData = () => {
  const store = useState(storeDefaultValues)

  return store
}

export const StoreContext = createContext<UseContextDataReturnType | null>(null)
