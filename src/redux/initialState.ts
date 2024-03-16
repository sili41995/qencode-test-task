import { IState } from '@/types/types';

const initialState: IState = {
  auth: {
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
};

export default initialState;
