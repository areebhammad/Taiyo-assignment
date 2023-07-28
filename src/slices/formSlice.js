// slices/formSlice.js

import { createSlice } from "@reduxjs/toolkit";

// export const formSlice = createSlice({
//     name: 'form',
//     initialState: {
//         firstName: '',
//         lastName: '',
//         status: ''
//     },
//     reducers: {
//         setFormData: (state, action) => {
//             state.firstName = action.payload.firstName;
//             state.lastName = action.payload.lastName;
//             state.status = action.payload.status;
//         }
//     }
// });

// export const { setFormData } = formSlice.actions;
// export default formSlice.reducer;

// slices/formSlice.js

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: [],
  },
  reducers: {
    addFormData: (state, action) => {
      state.data.push({ id: action.payload.id, ...action.payload });
    },
    deleteFormData: (state, action) => {
      // filter out deleted item
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateFormData: (state, action) => {
      const { id, updatedData } = action.payload;

      const itemIndex = state.data.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.data[itemIndex] = {
          ...state.data[itemIndex],
          ...updatedData,
        };
      }
    },
  },
});

export const deleteFormData = (id) => {
  return {
    type: "form/deleteFormData",
    payload: id,
  };
};

export const updateFormData = (id, updatedData) => {
  return {
    type: "form/updateFormData",
    payload: {
      id,
      updatedData,
    },
  };
};

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
