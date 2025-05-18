import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PublicClientApplication } from "@azure/msal-browser"; 
import { MsalProvider } from "@azure/msal-react";


import App from "./App";

const msalConfig = {
  auth: {
    clientId: "e25b0066-6716-4cd3-ac08-2f73bec8ae64",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:5173" 
  },
  cache: {
    cacheLocation: "sessionStorage", 
    storeAuthStateInCookie: false
  }
};

const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")).render(
  <MsalProvider instance={msalInstance}>
    <GoogleOAuthProvider clientId="10166717911-0usp96qd4okhjqaejdcd8tppq6l1b9ue.apps.googleusercontent.com">
      <StrictMode>
        <App />
      </StrictMode>
    </GoogleOAuthProvider>
  </MsalProvider>
);
