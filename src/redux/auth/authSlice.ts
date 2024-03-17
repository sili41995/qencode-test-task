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
        isRefreshing: false,
      }))
      .addCase(refreshToken.fulfilled, (_, { payload }) => ({
        ...initialState.auth,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
        isLoggedIn: true,
        isLoading: false,
        isRefreshing: false,
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
        isLoading: false,
      }))
      .addCase(setPassword.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addMatcher(
        isAnyOf(accessToken.pending, refreshToken.pending),
        (state) => ({
          ...state,
          isLoading: true,
          error: null,
          isRefreshing: true,
        })
      )
      .addMatcher(
        isAnyOf(login.pending, resetPassword.pending, setPassword.pending),
        (state) => ({
          ...state,
          isLoading: true,
          error: null,
        })
      )
      .addMatcher(
        isAnyOf(accessToken.rejected, refreshToken.rejected),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          isRefreshing: false,
          error: payload as string,
        })
      )
      .addMatcher(
        isAnyOf(login.rejected, resetPassword.rejected, setPassword.rejected),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default authSlice.reducer;
