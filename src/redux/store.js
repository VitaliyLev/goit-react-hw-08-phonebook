import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer
  },
})