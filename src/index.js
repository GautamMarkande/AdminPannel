import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './appsettings/store';
=======
import Product from '../src/components/Product/Product'
import Attributes from '../src/components/Attributes/Attributes'
import {
    createBrowserRouter,
    RouterProvider,
   } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "Attributes",
    element: <Attributes />,
  },
  
]);
>>>>>>> a41e2ed2dbbe67e8986d5d99cc8529eb88df1d99
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<<<<<<< HEAD
   <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
   </BrowserRouter>
   
=======
   <RouterProvider router={router} />
>>>>>>> a41e2ed2dbbe67e8986d5d99cc8529eb88df1d99
  </React.StrictMode>
);


reportWebVitals();

// import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import MainPage from './pages/mainPage';
// import reportWebVitals from './reportWebVitals';
// import AboutPage from './pages/aboutPage';
// import RegistrationPage from './pages/register';
// import ActivityPage from './pages/activityPage';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import ProgramPage from './pages/programPage';
// import { RecoilRoot } from 'recoil';


// const root = ReactDOM.createRoot(document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

