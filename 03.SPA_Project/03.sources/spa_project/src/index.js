import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Layout from './ferrari/Layout';
import Main from './ferrari/Main';
import Cars from './ferrari/Cars';
import Universe from './ferrari/Universe';


export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/autos' element={<Cars />} />
        <Route path='/universe' element={<Universe />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <App />
);
