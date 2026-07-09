import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" />
        </div>

        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients Contribute to over 15% of all retail
            order volums in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>futures and options</li>
                <li>commodity derivatives</li>
                <li>currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks % IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
          </div>
          <img
            src="media/pressLogos.png"
            className="mt-1"
            style={{ width: "95%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
