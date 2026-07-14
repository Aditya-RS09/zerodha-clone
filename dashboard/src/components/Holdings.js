import React, {useState, useEffect} from "react";
import  axios from 'axios';
// import { holdings } from "../data/data";     now after converting holdings to allholdings this is waste

const Holdings = () => {

  const [allHoldings, setallHoldings]= useState([]);
  useEffect(()=>{
    axios.get("https://zerodhabackend.netlify.app/allHoldings").then((res)=>{
      console.log(res.data); //just to see if the data is coming or not 
      setallHoldings(res.data);
    });
    
  },[]);
  return (
    <>
      
        <h3 className="title">Holdings ({allHoldings.length})</h3>
        <div className="order-table">
        <table>
  <thead>
    <tr>
      <th>Instrument</th>
      <th>Qty</th>
      <th>Avg Cost</th>
      <th>LTP</th>
      <th>Current Value</th>
      <th>P&L</th>
      <th>Net chg.</th>
      <th>Day chg.</th>
    </tr>
  </thead>
  <tbody>
    {allHoldings.map((stock, index) => {
      const curValue = stock.price * stock.qty;
      const isProfit = curValue - stock.avg * stock.qty >= 0.0;
      const profClass = isProfit ? "profit" : "loss";
      const dayClass = stock.isLoss ? "loss" : "profit";

      return (
        <tr key={index}>
          <td>{stock.name}</td>
          <td>{stock.qty}</td>
          <td>{stock.avg.toFixed(2)}</td>
          <td>{stock.price.toFixed(2)}</td>
          <td>{curValue.toFixed(2)}</td>
          <td className={profClass}>
            {(curValue - stock.avg * stock.qty).toFixed(2)}
          </td>
          <td className={profClass}>{stock.net}</td>
          <td className={dayClass}>{stock.day}</td>
        </tr>
      );
    })}
  </tbody>
</table>
      </div>

      <div className="row">
        <div className="col">
          <h5>29,875.<span>55</span>{" "}</h5>
          <p>Total investment</p>

        </div>
        <div className="col"> 
          <h5>31,428.<span>95</span>{" "}</h5>
          <p>Current Value</p>
        </div>
        <div className="col">
          <h5>1,553.40(+5.20%)</h5>
          <p>R&D</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;