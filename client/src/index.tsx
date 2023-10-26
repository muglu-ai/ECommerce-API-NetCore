import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layout/style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { registerLicense } from '@syncfusion/ej2-base';
import { router } from './app/router/Routes.tsx';
import { RouterProvider } from 'react-router-dom';

registerLicense('License Key');



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
