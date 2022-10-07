import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(  //em ultimos casos o ! faz o typescript ignorar o erro
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
