// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { GifExpertApp } from './GifExpertApp';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <GifExpertApp />
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';
import './index.css';

const divRoot = document.querySelector("#root")

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    <GifExpertApp />,
    divRoot
);




