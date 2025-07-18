import { Property } from "@/models/property";
import { create } from "zustand";

interface PropertyStore {
  property: Property | null;
  setProperty: (p: Property) => void;
  clearProperty: () => void;
}

const usePropertyStore = create<PropertyStore>((set) => ({
  property: null,
  setProperty: (p) => set({ property: p }),
  clearProperty: () => set({ property: null }),
}));

export default usePropertyStore;