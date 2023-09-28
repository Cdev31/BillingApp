import React from 'react'
import ReactDOM from 'react-dom/client'
import { BillingApp } from './App.jsx'
import { Layout } from './Layout'
import './index.css'
import { BillingProvider } from './context/BillingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BillingProvider>
    <Layout>
      <BillingApp />
    </Layout>
   </BillingProvider>
  </React.StrictMode>,
)
