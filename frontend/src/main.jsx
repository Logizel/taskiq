import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
const baseUrl = import.meta.env.VITE_API_BASE_URL;

fetch(`${baseUrl}/api/`)
  .then(res => res.json())
  .then(data => console.log("✅ Connected to backend:", data))
  .catch(err => console.error("❌ Backend connection error:", err));
