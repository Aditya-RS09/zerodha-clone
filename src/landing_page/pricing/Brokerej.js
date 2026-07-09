import React from "react";

function Brokerej() {
  return (
    <div className="Container p-3">
      <div className="row p-5 border-top">
        <div className="col-7 p-3">
          <a
            className="text-center"
            style={{ textDecoration: "none", color: "rgb(56,126,209)" }}
            href=""
          >
            <h4 className="mb-5">Brokerage calculator</h4>
          </a>
          <ul className="text-muted" style={{ fontSize: "80%" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <br />
            <li>Digital contract notes will be sent via e-mail.</li>
            <br />
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <br />
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <br />
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <br />
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
            <br />
          </ul>
        </div>

        <div className="col-5 p-3">
          <a
            className="text-center"
            style={{ textDecoration: "none", color: "rgb(56,126,209)" }}
            href=""
          >
            <h4 className="mb-5">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerej;
