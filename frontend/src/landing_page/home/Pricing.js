import React from "react";

function Pricing() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-4 p-3">
          <h2 className="fs-2">Unbeatable Pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transprency
            India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 text-center">
          <div className="row">
            <div className="col-6 p-2 border">
              <h2 className="mb-5">
                <i class="fa fa-inr" aria-hidden="true"></i>0
              </h2>
              <p>free equality delivery and direct mutual funds</p>
            </div>
            <div className="col-6 p-2 border">
              <h2 className="mb-5">
                <i class="fa fa-inr" aria-hidden="true"></i>20
              </h2>
              <p>Intrady and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
