import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-6">
          <img src="media/education.svg" style={{ width: "85%" }}></img>
        </div>
        <div className="col-6">
          <h3 className="pb-2">Free Open market education</h3>
          <p>
            Varisty, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <a href="">
            Veristy <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="pt-5">
            TradingQ&A, the most active trading and investment community in
            india for all your market related quries.
          </p>
          <a href="">
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
