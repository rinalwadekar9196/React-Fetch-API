import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import './UserList.css';
import UserList from './UserList';
// import reportWebVitals from './reportWebVitals';

function App(){
    return (
        <div className="App">
  <div className="container">
  <UserList/>
  {/* <Details/> */}
        </div>
        </div>
    
    )}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);


