import React from "react";

function LeftSection() {
  return (
    <div className="Container p-4">
      <div className="row p-5">
        <div className="col-5 p-5">
          <h3 className="text-muted">Console</h3>
          <p className="mt-3" style={{fontSize:"110%"}}>
            The central dashboard for your Zerodha account.
            <br /> Gain insights into your trades and investments <br /> with
            in-depth reports and visualisations.
          </p>
          <a href="" style={{ textDecoration: "none",  fontSize:"110%" }}>
            Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-7 ">
          <img src="media/console.png" style={{ marginTop: "-100px"}}></img>
        </div>

        <div className="row p-5 mt-5">
          <div className="col-6 mt-3">
            <img src="media/coin.png"></img>
          </div>
          <div className="col-6 my-5" style={{ paddingLeft: "11.5%" }}>
            <h4 className="text-left mx-5 pt-4">Coin</h4>
            <p className="text-left mx-5 pt-2" style={{fontSize:"110%"}}>
              Buy direct mutual funds online, commission-
              <br />
              free, delivered directly to your Demat account. Enjoy the
              investment experience on your Android and iOS devices.
            </p>
            <div className="row">
              <div className="col-6 text-center">
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: " rgb(0, 109, 181)",
                    fontWeight: "110%",
                     fontSize:"110%"
                  }}
                >
                  Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 text-center">
                <a href="http://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN">
                  <img src="media/googlePlayBadge.svg"></img>
                </a>
              </div>
              <div className="col-6 ">
                <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                  <img src="media/appstoreBadge.svg"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
