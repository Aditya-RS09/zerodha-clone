import React from "react";

function RightSection() {
  return (
    <div className="Container p-3">
      <div className="row p-4">
        <div className="col-6 p-5">
          <h3 className="text-muted">Kite Connect API</h3>
          <p className="mt-4" style={{ fontSize: "110%" }}>
            Build powerful trading platforms and
            <br /> experiences with our super simple <br />
            HTTP/JSON APIs. If you are a startup, build <br />
            your investment app and showcase it to our <br />
            clientbase.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "110%" }}>
            Kite connect{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-6" style={{ paddingTop: "7%" }}>
          <img
            src="media/kiteconnect.png"
            style={{ marginTop: "-100px" }}
          ></img>
        </div>

        <div className="row p-5 mt-5">
          <div className="col-7 mt-3 p-5 text-center">
            <img src="media/varsity-products.svg"></img>
          </div>
          <div className="col-5 p-5 mt-5" style={{ paddingLeft: "9%" }}>
            <h4 className="text-left mx-5 pt-4">Varsity mobile</h4>
            <p className="text-left mx-5 pt-2">
              An easy to grasp, collection of stock market lessons with in-depth
              coverage and illustrations. Content is broken down into bite-size
              cards to help you learn on the go.
            </p>

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
        <p className="text-center" style={{ fontSize: "125%" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a style={{ textDecoration: "none" }} href="https://zerodha.tech/">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
    </div>
  );
}

export default RightSection;
