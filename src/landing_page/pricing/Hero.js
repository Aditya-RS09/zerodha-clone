import React from "react";

function Hero() {
  return (
    <div className="Container p-5">
      <div className="row p-5">
        <div className="col text-center">
          <h4>Charges</h4>
          <p className="mt-2" style={{ color: "gray", fontSize: "125%" }}>
            List of all charges and taxes
          </p>
        </div>

        <div className="row p-3" style={{ padding: "10%" }}>
          <div className="col-4 mt-4 px-3 text-center">
            <img src="media/pricingEquity.svg" alt="pricingEquity"></img>
            <h4 className="mb-4">Free equity delivery</h4>
            <p className="text-muted mx-auto" style={{ width: "85%" }}>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="col-4 mt-4 px-3 text-center">
            <img src="media/intradayTrades.svg" alt="intradayImage"></img>
            <h4 className="mb-4">Intraday and F&O trades</h4>
            <p className="text-muted mx-auto" style={{ width: "85%" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col-4 mt-4 px-3 text-center mb-4">
            <img src="media/pricingEquity.svg"></img>
            <h4 className="mb-4">Free direct MF</h4>
            <p className="text-muted mx-auto" style={{ width: "85%" }}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
