import React from "react";

const Orders = () => {
  return (
    <div className="orders" style={{textAlign:"center"}}>
      <p>You haven't placed any orders today.</p>

      <div>
        <button className="Button btn btn-primary " style={{borderRadius:"5px",borderColor:"white"}}>Get Started</button>
      </div>
    </div>

    
  );
};

export default Orders;