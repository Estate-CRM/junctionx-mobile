import { create } from "zustand";

interface FormFields {
  [key: string]: string;
}

interface FormLoginStore {
  fields: FormFields;
  setField: (key: string, value: string) => void;
  verifyLogin: () => boolean;
}

const useFormLoginStore = create<FormLoginStore>((set, get) => ({
  fields: {
    email: '',
    password: '',
  },
  setField: (key, val) =>
    set((state) => ({
      fields: { ...state.fields, [key]: val },
    })),
  verifyLogin: () => {
    const { email, password } = get().fields;
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPassword = password.length >= 8;
    return isEmail && isPassword;
  },
}));

export default useFormLoginStore;
