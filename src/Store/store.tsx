// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from '../Slice/homeSlice'
import storageSession from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root', // You can customize this key
    storage: storageSession
  };

const reducers = combineReducers({
    home:homeReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck:false,
    ignoredAction: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    devTools: process.env.NODE_ENV !== 'production',
  })
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };