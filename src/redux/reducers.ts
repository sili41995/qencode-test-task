import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/redux/auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedReducer,
});

export default rootReducer;
