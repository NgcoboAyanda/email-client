import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../features/mail/mail';


export const store = configureStore({
  reducer: {
      mail: mailSlice.reducer    
  },
});
