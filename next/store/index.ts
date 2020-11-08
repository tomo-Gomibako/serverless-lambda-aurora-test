import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
  }
})

export type State = ReturnType<typeof store.getState>

export default store
