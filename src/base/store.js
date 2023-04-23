import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../features/mail/mail';
import userSlice from '../features/users/users';


export const store = configureStore({
  reducer: {
      "mail": mailSlice.reducer,
      "user": userSlice.reducer    
  },
});
