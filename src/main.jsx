import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import { ClerkProvider } from '@clerk/clerk-react'
import Dashboard  from './components/Dashboard';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <SignedOut>
       <Dashboard/>
      </SignedOut>
      <SignedIn>
        <App/>
      </SignedIn>
    </ClerkProvider>
  </React.StrictMode>,
)
