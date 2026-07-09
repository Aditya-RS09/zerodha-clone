import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-6 p-5 text-center">
          <img
            className="mx-5"
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "70%" }}
            alt="NithinKamath"
          />
          <h5 className="p-1 mb-1" style={{ fontWeight: "normal" }}>
            Nithin Kamath
          </h5>
          <p className="mt-3 pb-5 text-muted">Founder, CEO</p>
        </div>

        <div className="col-6">
          <h4 className="fs-3 mx-4" style={{ color: "	rgb(80,80,80)" }}>
            People
          </h4>
          <br />
          <p className="mt-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br />
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br />
          <p>Playing basketball is his zen.</p>
          <br />
          <p>
            Connect on
            <a
              href="https://nithinkamath.me/"
              style={{ textDecoration: "none" }}
            >
              HomePage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/u/nithin/summary"
              style={{ textDecoration: "none" }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/Nithin0dha"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
