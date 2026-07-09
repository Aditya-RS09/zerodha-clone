import React from "react";

function Hero() {
  return (
    <div className="Container p-5">
      <div className="row p-5 mb-5 text-center">
        <h3 className=" text-muted fs-3">Zerodha Products</h3>
        <br />
        <p>Sleek, modern, and intuitive trading platforms</p>
        <br />
        <p>
          Check out our{" "}
          <a
            href=""
            className=""
            style={{
              textDecoration: "none",
              color: " rgb(0, 109, 181)",
              fontWeight: "110%",
               fontSize:"110%"
            }}
          >
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>

      <div className="row p-5 mt-5  border-top">
        <div className="col-6 mt-4">
          <img src="media/kite.png"></img>
        </div>
        <div className="col-6 my-5" style={{ paddingLeft: "12%"}}>
          <h4 className="text-left mx-5 pt-4">Kite</h4>
          <p className="text-left mx-5 pt-2"style={{fontSize:"110%"}}>
            Our ultra-fast flagship trading platform with  streaming
            market data, advanced charts, an  elegant UI, and more. Enjoy
            the Kite  experience seamlessly on your Android and  iOS
            devices.
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
                Try Demo{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-6 ">
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: " rgb(0, 109, 181)",
                  fontWeight: "110%",
                   fontSize:"110%"
                }}
              >
                Learn More{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
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
  );
}

export default Hero;
