import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { IAuthState } from '@/types/types';
import {
  accessToken,
  login,
  refreshToken,
  resetPassword,
  setPassword,
} from './operations';

const authState: IAuthState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(accessToken.fulfilled, (_, { payload }) => ({
        ...initialState.auth,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
        isLoggedIn: true,
        isLoading: false,
      }))
      .addCase(refreshToken.fulfilled, (_, { payload }) => ({
        ...initialState.auth,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
        isLoggedIn: true,
        isLoading: false,
      }))
      .addCase(login.fulfilled, (_, { payload }) => ({
        ...initialState.auth,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
        isLoggedIn: true,
        isLoading: false,
      }))
      .addCase(resetPassword.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(setPassword.fulfilled, (state) => ({
        ...state,
      }))
      .addMatcher(
        isAnyOf(
          accessToken.pending,
          refreshToken.pending,
          login.pending,
          resetPassword.pending,
          setPassword.pending
        ),
        (state) => ({
          ...state,
          isLoading: true,
          error: null,
        })
      )
      .addMatcher(
        isAnyOf(
          accessToken.rejected,
          refreshToken.rejected,
          login.rejected,
          resetPassword.rejected,
          setPassword.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default authSlice.reducer;
