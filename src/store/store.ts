import { configureStore } from '@reduxjs/toolkit'
import { cypherApi } from './cypherApi'

export const store = configureStore({
  reducer: {
    [cypherApi.reducerPath]: cypherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cypherApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 