import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="Container p-5">
      <div className="row text-center">
        {" "}
        {/*for bootstrap deviding a row in 12 col only */}
        <img src="media/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5">Investing in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;