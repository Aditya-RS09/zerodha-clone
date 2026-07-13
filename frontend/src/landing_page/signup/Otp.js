import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(18);
  const navigate = useNavigate();
  const location = useLocation();
  const mobile = location.state?.mobile || "";

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  if (!mobile) {
    navigate("/signup");
    return null;
  }

  const handleContinue = () => {
  if (otp.length !== 6) {
    alert("Please enter the 6-digit OTP");
    return;
  }

  if (otp !== "123456") {
    alert("Incorrect OTP. Please try again.");
    return;
  }

  localStorage.setItem("zerodha_user_mobile", mobile);
  window.location.href = `http://localhost:3001?mobile=${mobile}`;
};

  const handleResend = () => {
    setSecondsLeft(18);
    // later this is where you'd call a real resend-OTP API
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center min-vh-100">
        <div className="col-lg-6 text-center">
          <img
            src="media/signup.png"
            alt="OTP verification"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        <div className="col-lg-6">
          <h1>Mobile OTP</h1>

          <p className="text-muted">
            Sent to +91 {mobile}{" "}
            <button
              className="btn btn-link p-0"
              onClick={() => navigate("/signup")}
            >
              (change)
            </button>
          </p>

          <input
            type="tel"
            className="form-control mt-4"
            placeholder="Enter 6-digit OTP"
            value={otp}
            maxLength="6"
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            style={{ height: "55px", maxWidth: "430px" }}
          />

          {secondsLeft > 0 ? (
            <p className="text-muted mt-4">Resend OTP in {secondsLeft} seconds</p>
          ) : (
            <button className="btn btn-link p-0 mt-4" onClick={handleResend}>
              Resend OTP
            </button>
          )}

          <button
            className="btn btn-primary mt-3"
            onClick={handleContinue}
            disabled={otp.length !== 6}
            style={{ width: "220px", height: "50px" }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;