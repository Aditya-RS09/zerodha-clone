import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();

    const handleSignupClick=()=>{
        navigate('/s    ignup');
    };
    return ( 
        <div className='Container p-5'>
            <div className='row p-1'>
                <div className='col'>
                        <h4 className='text-muted text-center fs-4'>The Zerodha Universe</h4>
                        <p className='text-center pt-2 pb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className='row p-5'>
                    <div className='col-4 text-center'>
                        <img src='media/zerodhaFundhouse.png' style={{width:"50%"}} className='pb-2'></img><br/>
                        <a href='https://www.zerodhafundhouse.com/'style={{color:"gray",fontSize:"80%", textDecoration:"none"}}>Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </a>
                    </div>
                    <div className='col-4 text-center pt-2'>
                        <img src='media/sensibullLogo.svg' style={{width:"60%"}} className='pb-4'></img><br/>
                        <a href='https://sensibull.com/'style={{color:"gray",fontSize:"80%", textDecoration:"none"}}>Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </a>
                    </div>
                    <div className='col-4 text-center'>
                        <img src='media/tijori.svg' style={{width:"45%"}} className='pb-2'></img><br/>
                        <a href='https://www.tijorifinance.com/dashboard/'style={{color:"gray",fontSize:"80%", textDecoration:"none"}}>Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </a>
                    </div>

                </div>

                <div className='row p-5'>
                    <div className='col-4 text-center'>
                        <img src='media/streakLogo.png' style={{width:"50%"}} className='pb-2'></img><br/>
                        <a href='https://www.streak.tech/'style={{color:"gray",fontSize:"80%", textDecoration:"none"}}>Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </a>
                    </div>
                    <div className='col-4 text-center'>
                        <img src='media/smallcaseLogo.png' style={{width:"58%"}} className='pb-4'></img><br/>
                        <a href='https://smallcase.zerodha.com/'style={{color:"gray",fontSize:"80%", textDecoration:"none"}}>Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </a>
                    </div>
                    <div className='col-4 text-center'>
                        <img src='media/dittoLogo.png' style={{width:"45%"}} className='pb-2'></img><br/>
                        <a href='https://joinditto.in/'style={{color:"gray",fontSize:"80%", textDecoration:"none"}}>Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </a>
                    </div>

                </div>
                <button
          className="p-2 btn btn-primary  fs-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Sign up for free
        </button>
            </div>

        </div>
     );
}

export default Universe;