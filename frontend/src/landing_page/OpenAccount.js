import React from 'react';
import { useNavigate } from "react-router-dom";


function OpenAccount() {
  const navigate =useNavigate();
  
  const handleSignupClick = () => {
    navigate("/signup");
  };
    return ( 
        <div className="Container p-5">
      <div className="row text-center">
        {" "}
        {/*for bootstrap deviding a row in 12 col only */}
        
        <h1 className="mt-5">Open a Zerodha Account</h1>
        <p className='text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button
          className="p-2 btn btn-primary  fs-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Sign up for free
        </button>
      </div>
    </div>
     );
}

export default OpenAccount;