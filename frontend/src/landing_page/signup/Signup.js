import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedMobile = localStorage.getItem("zerodha_user_mobile");
    const savedName = localStorage.getItem("zerodha_user_name");
    if (savedMobile) {
      window.location.href = `https://zerodhadashboard-a.netlify.app?mobile=${savedMobile}&name=${encodeURIComponent(savedName || "")}`;
    }
  }, []);

  const handleGetOtp = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    navigate("/otp", { state: { mobile, name } });
  };
  return (
    <>
    <div className="signup-page">
      {/* Hero Section */}
      <div className="container mt-5">

  <div className="row text-center">

    <div className="col-12">

      <h2
        style={{
          
          color: "#424242",
          fontWeight: "500",
        }}
      >
        Open a free demat and trading account online
      </h2>

      <p
        className="text-muted mt-3"
        
      >
        Start investing brokerage free and join a community of
        1.6+ crore investors and traders.
      </p>

    </div>

  </div>

  <div className="row align-items-center mt-5">

    <div className="col-lg-6 text-center">

      <img
        src="media/account_open.svg"
        alt=""
        className="img-fluid"
        style={{ width: "85%" }}
      />

    </div>

    <div className="col-lg-6">

      <h2
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize:"25px",
        }}
      >
        Signup now
      </h2>

      <p
        className="text-muted mb-4"
        style={{fontSize:"14px"}}
       
      >
        Or track your existing application
      </p>

      <div className="mb-3" style={{ maxWidth: "430px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ height: "55px" }}
        />
      </div>

      <div
        className="input-group mb-4"
        style={{ height: "55px" }}
      >

        <span
          className="input-group-text bg-white"
          style={{ fontSize: "18px" }}
        >
          🇮🇳 +91
        </span>

        <input
  type="tel"
  className="form-control"
  placeholder="Enter your mobile number"
  value={mobile}
  maxLength="10"
  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
/>

      </div>

      <button
  className="btn btn-primary mx-5"
  onClick={handleGetOtp}
  style={{
    width: "320px",
    height: "48px",
    fontSize: "20px",
    fontWeight: "500",
  }}
>
  Get OTP
</button>

      <p
        className="text-muted mt-4 mx-5"
        style={{ fontSize: "14px" }}
      >
        By proceeding, you agree to the Zerodha
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          terms
        </a>{" "}
        &
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          privacy policy
        </a>
      </p>

      <p style={{ fontSize: "14px" }} className="mx-5">
        Looking to open NRI account?
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          Click here
        </a>
      </p>

    </div>

  </div>

</div>

      {/* Investment Section */}

      {/* ================= Investment Section ================= */}

<div className="container mt-5 mb-5">

  <div className="row text-center mb-5">
    <div className="col-12">

      <h2
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize: "28px",
        }}
      >
        Investment options with Zerodha demat account
      </h2>

    </div>
  </div>

  <div className="row">

    {/* Stocks */}

    <div className="col-lg-6 mb-5">

      <div className="row align-items-center">

        <div className="col-3 text-center">
          <img
            src="media/stocks.svg"
            alt=""
            className="img-fluid"
            style={{ width: "75px" }}
          />
        </div>

        <div className="col-9">

          <h4 style={{ color: "#424242" }}>
            Stocks
          </h4>

          <p
            className="text-muted"
            style={{ fontSize: "16px" }}
          >
            Invest in all exchange-listed securities
          </p>

        </div>

      </div>

    </div>

    {/* Mutual Funds */}

    <div className="col-lg-6 mb-5">

      <div className="row align-items-center">

        <div className="col-3 text-center">
          <img
            src="media/mutualfund.svg"
            alt=""
            className="img-fluid"
            style={{ width: "75px" }}
          />
        </div>

        <div className="col-9">

          <h4 style={{ color: "#424242" }}>
            Mutual Funds
          </h4>

          <p
            className="text-muted"
            style={{ fontSize: "16px" }}
          >
            Invest in commission-free direct mutual funds
          </p>

        </div>

      </div>

    </div>

    {/* IPO */}

    <div className="col-lg-6 mb-5">

      <div className="row align-items-center">

        <div className="col-3 text-center">
          <img
            src="media/ipo.svg"
            alt=""
            className="img-fluid"
            style={{ width: "75px" }}
          />
        </div>

        <div className="col-9">

          <h4 style={{ color: "#424242" }}>
            IPO
          </h4>

          <p
            className="text-muted"
            style={{ fontSize: "16px" }}
          >
            Apply to the latest IPOs instantly using UPI
          </p>

        </div>

      </div>

    </div>

    {/* Futures & Options */}

    <div className="col-lg-6 mb-5">

      <div className="row align-items-center">

        <div className="col-3 text-center">
          <img
            src="media/future.svg"
            alt=""
            className="img-fluid"
            style={{ width: "75px" }}
          />
        </div>

        <div className="col-9">

          <h4 style={{ color: "#424242" }}>
            Futures & Options
          </h4>

          <p
            className="text-muted"
            style={{ fontSize: "16px" }}
          >
            Hedge and trade with equity, currency and commodity derivatives
          </p>

        </div>

      </div>

    </div>

  </div>

  <div className="text-center mt-3">

    <button
      className="btn btn-primary px-5 py-2"
      style={{ fontSize: "18px" }}
    >
      Explore Investments
    </button>

  </div>

</div>

      {/* Steps Section */}

      {/* ================= Steps Section ================= */}

<div className='Container-fluid' style={{backgroundColor: "rgb(247,247,247)" , color:"white", paddingTop: "30px", paddingBottom: "40px"}}>

  <div className="row text-center mb-5">

    <div className="col-12">

      <h2
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize: "28px",
          
        }}
      >
        Steps to open a demat account with Zerodha
      </h2>

    </div>

  </div>

  <div className="row align-items-center">

    {/* Left Image */}

    <div className="col-lg-6 text-center">

      <img
        src="media/steps.svg"
        alt=""
        className="img-fluid"
        style={{ width: "85%" }}
      />

    </div>

    {/* Right Steps */}

    <div className="col-lg-6">

      {/* Step 1 */}

      <div className="d-flex align-items-center border-bottom py-4">

        <div
          className="me-4"
          style={{
            width: "55px",
            height: "55px",
            border: "1px solid #ddd",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#387ed1",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          01
        </div>

        <h5
          style={{
            color: "#424242",
            marginBottom: "0",
          }}
        >
          Enter the requested details
        </h5>

      </div>

      {/* Step 2 */}

      <div className="d-flex align-items-center border-bottom py-4">

        <div
          className="me-4"
          style={{
            width: "55px",
            height: "55px",
            border: "1px solid #ddd",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#387ed1",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          02
        </div>

        <h5
          style={{
            color: "#424242",
            marginBottom: "0",
          }}
        >
          Complete e-sign & verification
        </h5>

      </div>

      {/* Step 3 */}

      <div className="d-flex align-items-center py-4">

        <div
          className="me-4"
          style={{
            width: "55px",
            height: "55px",
            border: "1px solid #ddd",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#387ed1",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          03
        </div>

        <h5
          style={{
            color: "#424242",
            marginBottom: "0",
          }}
        >
          Start investing!
        </h5>

      </div>

    </div>

  </div>

</div>

  

      {/* Account Types Section */}

      {/* ================= Account Types Section ================= */}

<div className="container mt-5 mb-5">

  <div className="row align-items-center">

    {/* Left Image */}

    <div className="col-lg-6 text-center">

      <img
        src="media/acop-benefits.svg"
        alt=""
        className="img-fluid"
        style={{ width: "85%" }}
      />

      <h2
        className="mt-5"
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize: "13px",
        }}
      >
        Benefits of opening a Zerodha demat account
      </h2>

    </div>

    {/* Right Content */}

    <div className="col-lg-6">

      <div className="mb-5">

        <h5
          style={{
            color: "#424242",
            fontWeight: "500",
          }}
        >
          Unbeatable pricing
        </h5>

        <p
          className="text-muted mt-3"
          style={{
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          Zero charges for equity & mutual fund investments.
          Flat ₹20 fees for intraday and F&O trades.
        </p>

      </div>

      <div className="mb-5">

        <h5
          style={{
            color: "#424242",
            fontWeight: "500",
          }}
        >
          Best investing experience
        </h5>

        <p
          className="text-muted mt-3"
          style={{
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          Simple and intuitive trading platform with an
          easy-to-understand user interface.
        </p>

      </div>

      <div className="mb-5">

        <h5
          style={{
            color: "#424242",
            fontWeight: "500",
          }}
        >
          No spam or gimmicks
        </h5>

        <p
          className="text-muted mt-3"
          style={{
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          Committed to transparency — no gimmicks,
          spam, gamification or intrusive notifications.
        </p>

      </div>

      <div>

        <h5
          style={{
            color: "#424242",
            fontWeight: "500",
          }}
        >
          The Zerodha universe
        </h5>

        <p
          className="text-muted mt-3"
          style={{
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          More than just an app — gain free access to the
          entire ecosystem of our partner products.
        </p>

      </div>

    </div>

  </div>

</div>

      {/* FAQ Section */}

      {/* ================= FAQ Section ================= */}

<div className="container mt-5 mb-5">

  <div className="row text-center mb-5">

    <div className="col-12">

      <h2
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize: "28px",
        }}
      >
        Frequently asked questions
      </h2>

    </div>

  </div>

  <div className="accordion" id="faqAccordion">

    {/* FAQ 1 */}

    <div className="accordion-item">

      <h2 className="accordion-header">

        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faq1"
        >
          What documents are required to open a Zerodha account?
        </button>

      </h2>

      <div
        id="faq1"
        className="accordion-collapse collapse show"
        data-bs-parent="#faqAccordion"
      >

        <div className="accordion-body text-muted" style={{fontSize: "12px"}}>

          PAN Card, Aadhaar Card, bank proof, signature and income proof (for F&O).

        </div>

      </div>

    </div>

    {/* FAQ 2 */}

    <div className="accordion-item">

      <h2 className="accordion-header">

        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faq2"
        >
          How long does account opening take?
        </button>

      </h2>

      <div
        id="faq2"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >

        <div className="accordion-body text-muted" style={{fontSize: "12px"}}>

          Online account opening usually takes just a few minutes. Verification may take a little longer.

        </div>

      </div>

    </div>

    {/* FAQ 3 */}

    <div className="accordion-item">

      <h2 className="accordion-header">

        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faq3"
        >
          Is there any account opening charge?
        </button>

      </h2>

      <div
        id="faq3"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >

        <div className="accordion-body text-muted" style={{fontSize: "12px"}}>

          Equity account opening is free. Charges may apply for commodity accounts.

        </div>

      </div>

    </div>

    {/* FAQ 4 */}

    <div className="accordion-item">

      <h2 className="accordion-header">

        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faq4"
        >
          Can I open an account completely online?
        </button>

      </h2>

      <div
        id="faq4"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >

        <div className="accordion-body text-muted" style={{fontSize: "12px"}}>

          Yes. The entire account opening process is completely online.

        </div>

      </div>

    </div>

  </div>

</div>

<div
  className="container text-center mt-5 mb-5"
  style={{ padding: "80px 0" }}
>

  <h2
    style={{
      color: "#424242",
      fontWeight: "500",
      fontSize: "34px",
    }}
  >
    Open a Zerodha account
  </h2>

  <p
    className="text-muted mt-3"
    style={{ fontSize: "15px" }}
  >
    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
  </p>

  <button
    className="btn btn-primary mt-4"
    style={{
      width: "220px",
      height: "55px",
      fontSize: "20px",
    }}
  >
    Sign up
  </button>

</div>

     
      </div>
    </>
  
  );
}

export default Signup;