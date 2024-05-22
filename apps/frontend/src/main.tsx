import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const parsedParams = new URLSearchParams(window.location.search)
const queryParams = parsedParams.toString()

const newPath = queryParams.includes('fileId')
  ? `?${queryParams}`
  : `?fileId=${crypto.randomUUID()}&${queryParams}`

window.history.replaceState({}, '', newPath)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
