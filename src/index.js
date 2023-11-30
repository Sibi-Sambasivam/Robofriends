import React from 'react';
//import ReactDOM from 'react-dom'; 
import './index.css';
import { createRoot } from "react-dom/client";
import App from './containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import { robots } from './robots';


const root = createRoot(document.getElementById('root'));
root.render(<App />);





reportWebVitals();
