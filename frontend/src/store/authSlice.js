import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: null,
  otp: {
    emailOrPhone: null,
    hash: null
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, actions) => {
      state.isAuth = true;
      state.user = actions.payload;
      
    },

    setOtp: (state, actions) => {
      const {emailOrPhone, hash } = actions.payload;
      state.otp.hash = hash
      state.otp.emailOrPhone = emailOrPhone
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, setOtp} = authSlice.actions

export default authSlice.reducer