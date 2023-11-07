import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/main.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Carousel from './components/Carousel';
import Introduce from './components/Introduce';
import Competencies from './components/Competencies';
import Professional from './components/Professional';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Carousel/>
    <Introduce/>
    <Competencies/>
    <Professional/>
    <Education/>
    <Projects/>
    <Certificates/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
