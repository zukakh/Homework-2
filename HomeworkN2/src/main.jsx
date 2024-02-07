import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Wrapper from './Wrapper.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Wrapper />
  </React.StrictMode>,
)
