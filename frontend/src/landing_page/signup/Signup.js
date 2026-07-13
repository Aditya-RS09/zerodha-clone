import React from "react";

function Signup() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mt-5">

  <div className="row text-center">

    <div className="col-12">

      <h1
        style={{
          fontSize: "42px",
          color: "#424242",
          fontWeight: "500",
        }}
      >
        Open a free demat and trading account online
      </h1>

      <p
        className="text-muted mt-3"
        style={{ fontSize: "20px" }}
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
        }}
      >
        Signup now
      </h2>

      <p
        className="text-muted mb-4"
        style={{ fontSize: "18px" }}
      >
        Or track your existing application
      </p>

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
          type="text"
          className="form-control"
          placeholder="Enter your mobile number"
        />

      </div>

      <button
        className="btn btn-primary w-100"
        style={{
          height: "55px",
          fontSize: "20px",
        }}
      >
        Get OTP
      </button>

      <p
        className="text-muted mt-4"
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

      <p style={{ fontSize: "14px" }}>
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
          fontSize: "36px",
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

<div className="container mt-5 mb-5">

  <div className="row text-center mb-5">

    <div className="col-12">

      <h2
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize: "36px",
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

        <h4
          style={{
            color: "#424242",
            marginBottom: "0",
          }}
        >
          Enter the requested details
        </h4>

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

        <h4
          style={{
            color: "#424242",
            marginBottom: "0",
          }}
        >
          Complete e-sign & verification
        </h4>

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

        <h4
          style={{
            color: "#424242",
            marginBottom: "0",
          }}
        >
          Start investing!
        </h4>

      </div>

    </div>

  </div>

</div>

      {/* Benefits Section */}

      {/* ================= Benefits Section ================= */}

<div className="container mt-5 mb-5">

  <div className="row text-center mb-5">
    <div className="col-12">

      <h2
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize: "36px",
        }}
      >
        Benefits of opening a Zerodha demat account
      </h2>

    </div>
  </div>

  <div className="row">

    {/* Benefit 1 */}

    <div className="col-lg-4 mb-5 text-center">

      <img
        src="media/benefit1.svg"
        alt=""
        className="img-fluid mb-4"
        style={{ width: "80px" }}
      />

      <h4 style={{ color: "#424242" }}>
        Unbeatable pricing
      </h4>

      <p
        className="text-muted"
        style={{ fontSize: "16px" }}
      >
        Zero charges for equity delivery and direct mutual funds.
      </p>

    </div>

    {/* Benefit 2 */}

    <div className="col-lg-4 mb-5 text-center">

      <img
        src="media/benefit2.svg"
        alt=""
        className="img-fluid mb-4"
        style={{ width: "80px" }}
      />

      <h4 style={{ color: "#424242" }}>
        Best investing experience
      </h4>

      <p
        className="text-muted"
        style={{ fontSize: "16px" }}
      >
        Invest in stocks, mutual funds, IPOs, bonds and more from one account.
      </p>

    </div>

    {/* Benefit 3 */}

    <div className="col-lg-4 mb-5 text-center">

      <img
        src="media/benefit3.svg"
        alt=""
        className="img-fluid mb-4"
        style={{ width: "80px" }}
      />

      <h4 style={{ color: "#424242" }}>
        Easy account opening
      </h4>

      <p
        className="text-muted"
        style={{ fontSize: "16px" }}
      >
        Complete the online application in just a few minutes.
      </p>

    </div>

    {/* Benefit 4 */}

    <div className="col-lg-4 mb-5 text-center">

      <img
        src="media/benefit4.svg"
        alt=""
        className="img-fluid mb-4"
        style={{ width: "80px" }}
      />

      <h4 style={{ color: "#424242" }}>
        Simple & powerful platform
      </h4>

      <p
        className="text-muted"
        style={{ fontSize: "16px" }}
      >
        Trade and invest using Zerodha's modern and easy-to-use platform.
      </p>

    </div>

    {/* Benefit 5 */}

    <div className="col-lg-4 mb-5 text-center">

      <img
        src="media/benefit5.svg"
        alt=""
        className="img-fluid mb-4"
        style={{ width: "80px" }}
      />

      <h4 style={{ color: "#424242" }}>
        Safe & secure
      </h4>

      <p
        className="text-muted"
        style={{ fontSize: "16px" }}
      >
        Your investments are protected with industry-standard security.
      </p>

    </div>

    {/* Benefit 6 */}

    <div className="col-lg-4 mb-5 text-center">

      <img
        src="media/benefit6.svg"
        alt=""
        className="img-fluid mb-4"
        style={{ width: "80px" }}
      />

      <h4 style={{ color: "#424242" }}>
        Trusted by millions
      </h4>

      <p
        className="text-muted"
        style={{ fontSize: "16px" }}
      >
        Join more than 1.6 crore investors who trust Zerodha.
      </p>

    </div>

  </div>

</div>

      {/* Account Types Section */}

      {/* ================= Account Types Section ================= */}

<div className="container mt-5 mb-5">

  <div className="row text-center mb-5">

    <div className="col-12">

      <h2
        style={{
          color: "#424242",
          fontWeight: "500",
          fontSize: "36px",
        }}
      >
        Explore different account types
      </h2>

      <p
        className="text-muted mt-3"
        style={{ fontSize: "18px" }}
      >
        Choose the account that best suits your investing needs.
      </p>

    </div>

  </div>

  <div className="row">

    {/* Individual Account */}

    <div className="col-lg-3 col-md-6 mb-4">

      <div className="card border-0 shadow-sm h-100 p-4 text-center">

        <img
          src="media/account1.svg"
          alt=""
          className="img-fluid mx-auto mb-4"
          style={{ width: "80px" }}
        />

        <h4 style={{ color: "#424242" }}>
          Individual Account
        </h4>

        <p
          className="text-muted"
          style={{ fontSize: "15px" }}
        >
          Invest in stocks, mutual funds, IPOs, ETFs and more with a personal account.
        </p>

      </div>

    </div>

    {/* HUF Account */}

    <div className="col-lg-3 col-md-6 mb-4">

      <div className="card border-0 shadow-sm h-100 p-4 text-center">

        <img
          src="media/account2.svg"
          alt=""
          className="img-fluid mx-auto mb-4"
          style={{ width: "80px" }}
        />

        <h4 style={{ color: "#424242" }}>
          HUF Account
        </h4>

        <p
          className="text-muted"
          style={{ fontSize: "15px" }}
        >
          Manage investments efficiently for your Hindu Undivided Family.
        </p>

      </div>

    </div>

    {/* NRI Account */}

    <div className="col-lg-3 col-md-6 mb-4">

      <div className="card border-0 shadow-sm h-100 p-4 text-center">

        <img
          src="media/account3.svg"
          alt=""
          className="img-fluid mx-auto mb-4"
          style={{ width: "80px" }}
        />

        <h4 style={{ color: "#424242" }}>
          NRI Account
        </h4>

        <p
          className="text-muted"
          style={{ fontSize: "15px" }}
        >
          Special trading and demat account designed for Non-Resident Indians.
        </p>

      </div>

    </div>

    {/* Minor Account */}

    <div className="col-lg-3 col-md-6 mb-4">

      <div className="card border-0 shadow-sm h-100 p-4 text-center">

        <img
          src="media/account4.svg"
          alt=""
          className="img-fluid mx-auto mb-4"
          style={{ width: "80px" }}
        />

        <h4 style={{ color: "#424242" }}>
          Minor Account
        </h4>

        <p
          className="text-muted"
          style={{ fontSize: "15px" }}
        >
          Start building wealth early by opening an investment account for minors.
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
          fontSize: "36px",
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

        <div className="accordion-body">

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

        <div className="accordion-body">

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

        <div className="accordion-body">

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

        <div className="accordion-body">

          Yes. The entire account opening process is completely online.

        </div>

      </div>

    </div>

  </div>

</div>

{/* ================= Final CTA ================= */}

<div
  className="container text-center mt-5 mb-5"
  style={{ padding: "80px 0" }}
>

  <h2
    style={{
      color: "#424242",
      fontWeight: "500",
      fontSize: "38px",
    }}
  >
    Open a Zerodha account
  </h2>

  <p
    className="text-muted mt-3"
    style={{ fontSize: "18px" }}
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

      {/* Final Signup CTA */}
    </>
  );
}

export default Signup;