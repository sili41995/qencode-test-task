import { IState } from '@/types/types';

export const selectAccessToken = (state: IState) => state.auth.accessToken;

export const selectRefreshToken = (state: IState) => state.auth.refreshToken;

export const selectIsLoggedIn = (state: IState) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: IState) => state.auth.isRefreshing;

export const selectIsLoading = (state: IState) => state.auth.isLoading;
