import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Main from './ferrari/Main';
import Layout from './ferrari/Layout';


export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/cars' element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
