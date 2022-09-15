import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer style={{"text-align": "center", "padding-bottom": "15px"}}>
        <h5>All musics are royalty free. More on:</h5>
        <p>
          <small>
            <a href="https://www.bensound.com/royalty-free-music?type=free" target="_blank" rel="noopener noreferrer" style={{"color": "#888"}}>Bensound.com</a>
          </small>
        </p>
        <p>
          <small>
            <a href="https://www.youtube.com/channel/UCsMOMkT26OLSuOuHhqLVeMg" target="_blank" rel="noopener noreferrer" style={{"color": "#888"}}>Leonell Cassio on Youtube.com</a>
          </small>
        </p>
      </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
