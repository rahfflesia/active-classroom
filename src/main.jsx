import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById("root")).render(
 <GoogleOAuthProvider clientId="10166717911-0usp96qd4okhjqaejdcd8tppq6l1b9ue.apps.googleusercontent.com">
      <StrictMode>
        <App />
      </StrictMode>
    </GoogleOAuthProvider>
);
