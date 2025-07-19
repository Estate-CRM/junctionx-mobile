import { create } from "zustand";

export const propertyTypes = ['Villa', 'Apartment', 'Studio', 'House', 'Penthouse'];

interface FormFields {
  [key: string]: string;
}

interface FormStore {
  fields: FormFields;
  setField: (key: string, value: string) => void;
  verifyFields: () => boolean;
}

const usePropertyFormStore = create<FormStore>((set, get) => ({
  fields: {
    latitude:"",
    longtitude:"",
    price:'',
    area:'',
    type:'',
    image:"",
    
  },

  setField: (key, val) =>
    set((state) => ({
      fields: { ...state.fields, [key]: val },
    })),

  verifyFields: () => {
    const {type} = get().fields;
    return  propertyTypes.includes(type)
  },

}));

export default usePropertyFormStore;
