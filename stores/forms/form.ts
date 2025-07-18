import { create } from "zustand";

interface FormFields {
  [key: string]: string;
}

interface FormStore {
  fields: FormFields;
  setField: (key: string, value: string) => void;
  verifyFields1: () => boolean;
  verifyFields2: () => boolean;
}

const useFormStore = create<FormStore>((set, get) => ({
  fields: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  },

  setField: (key, val) =>
    set((state) => ({
      fields: { ...state.fields, [key]: val },
    })),

  verifyFields1: () => {
    const { firstName, lastName, phone } = get().fields;

    const isFirstName = /^[^\s]+$/.test(firstName); // one word, no space
    const isLastName = /^[^\s]+$/.test(lastName);   // one word, no space
    const isPhone = /^\d{10}$/.test(phone);         // exactly 10 digits

    return isFirstName && isLastName && isPhone;
  },

  verifyFields2: () => {
    const { email, password, confirmPassword } = get().fields;

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // basic email check
    const isPassword = password.length >= 8;
    const isConfirmPassword = password === confirmPassword;

    return isEmail && isPassword && isConfirmPassword;
  },
}));

export default useFormStore;
