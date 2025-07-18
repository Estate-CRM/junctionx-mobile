import { create } from "zustand";

interface FormFields {
  [key: string]: string;
}

interface FormLoginStore {
  fields: FormFields;
  setField: (key: string, value: string) => void;
}

const useSearchBarStore = create<FormLoginStore>((set) => ({
  fields: {
    search: "",
  },
  setField: (key, val) =>
    set((state) => ({
      fields: { ...state.fields, [key]: val },
    })),
}));

export default useSearchBarStore;
