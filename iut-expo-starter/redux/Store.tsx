import {configureStore} from '@reduxjs/toolkit'
import appReducer from '../redux/Reducer/appReducer';

const reducer = {
  appReducer: appReducer,
}

// @ts-ignore
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
},);

export default store;