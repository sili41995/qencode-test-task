import authServiceApi from '@/service/authServiceApi';
import {
  IAccessToken,
  IAuthRes,
  ICredentials,
  IRefreshToken,
  IResetPasswordProps,
  ISetPasswordProps,
} from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const accessToken = createAsyncThunk<
  IAuthRes,
  IAccessToken,
  { rejectValue: string }
>(
  'auth/accessToken',
  async (
    data: IAccessToken,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await authServiceApi.accessToken(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshToken = createAsyncThunk<
  IAuthRes,
  IRefreshToken,
  { rejectValue: string }
>(
  'auth/refreshToken',
  async (
    data: IRefreshToken,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await authServiceApi.refreshToken(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const login = createAsyncThunk<
  IAuthRes,
  ICredentials,
  { rejectValue: string }
>(
  'auth/login',
  async (
    data: ICredentials,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await authServiceApi.login({ data, signal });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const resetPassword = createAsyncThunk<
  undefined,
  IResetPasswordProps,
  { rejectValue: string }
>(
  'auth/resetPassword',
  async (
    data: IResetPasswordProps,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await authServiceApi.resetPassword(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const setPassword = createAsyncThunk<
  undefined,
  ISetPasswordProps,
  { rejectValue: string }
>(
  'auth/setPassword',
  async (
    data: ISetPasswordProps,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await authServiceApi.setPassword(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
