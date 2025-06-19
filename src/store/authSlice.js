import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  userData: null,
  userProfile: null,
  loading: false,
  error: null
}; 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData; 
      state.error = null;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      state.userProfile = null;
      state.error = null;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    updateUserProfile: (state, action) => {
      state.userProfile = { ...state.userProfile, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { 
  login, 
  logout, 
  setUserProfile, 
  updateUserProfile, 
  setLoading, 
  setError, 
  clearError 
} = authSlice.actions;

export default authSlice.reducer;

