import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import {rootReducer} from '../src/reducers/Reducers'
import toast, { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const store = configureStore({
  reducer: rootReducer,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    
<GoogleOAuthProvider clientId="665471921634-fa2ahklq346lphtd0o9p9mov9q5ubuk1.apps.googleusercontent.com">
<Provider store={store}>
        <BrowserRouter>
        <App />
        <Toaster/>
    </BrowserRouter>
    </Provider>
</GoogleOAuthProvider>
   
    


);



