import React, { useEffect, useState } from "react";

const AuthGuard = ({ children }) => {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mobileFromUrl = params.get("mobile");

    if (mobileFromUrl) {
      // coming fresh from frontend login/signup — save it here
      localStorage.setItem("zerodha_user_mobile", mobileFromUrl);
      // clean the URL so ?mobile=... doesn't stay visible
      window.history.replaceState({}, document.title, "/");
    }

    const savedMobile = localStorage.getItem("zerodha_user_mobile");

    if (!savedMobile) {
      // not logged in at all — send back to frontend to sign up/login
      window.location.href = "https://zerodhafrontend-a.netlify.app/signup";
      return;
    }

    setChecking(false);
  }, []);

  if (checking) {
    return <div style={{ padding: "40px" }}>Checking login...</div>;
  }

  return children;
};

export default AuthGuard;