import React from 'react';

function Hero() {
    return ( 
        <section>
        <div className='Container-fluid' style={{backgroundColor:"rgb(54, 126, 209)" , color:"white", paddingTop: "30px", paddingBottom: "40px"}}>
            <div className='row'>
                <div className='col-6'>
                    <h5  style={{paddingLeft:"35%"}}>Support portal</h5>
                    <p className='mt-5 fs-5'style={{paddingLeft:"35%"}}>Search for an answer or browser help topics to create a ticket</p>
                    <input id='i' className='text-center' placeholder='Eg: How do i active F&O, Why is my order getting rejected...'></input>
                   <p className='mt-3' style={{marginLeft:"220px", fontSize:"90%",fontWeight:"lighter"}}> <a className='me-3' style={{color:"white"}} href=''>Track account opening</a>
                    <a className='me-3' style={{color:"white",marginLeft:""}} href=''>Track segment activation</a><br/>
                    <a className='me-3' style={{color:"white",marginLeft:""}} href=''>Industry margins</a>
                    <a className='me-3' style={{color:"white",marginLeft:""}} href=''>Kite user manual</a></p>
                </div>

                <div className='col-6'>
                    <a style={{color:"white", paddingLeft:"53%",fontWeight:"lighter"}} href=''>Track Tickets</a>
                    <h5 style={{paddingLeft:'97px', paddingTop:"51px"}}>Featured</h5>
                    <ol>
                        <p className='mb-3' style={{paddingLeft:"100px", fontWeight:"lighter"}}><a style={{color:"white"}} href=''><li>Curret Takeovers and Delisting-January 2024 </li></a></p>
                       <p className='mb-3' style={{paddingLeft:"100px", fontWeight:"lighter"}}> <a style={{color:"white"}} href=''><li>Latest Industry leverages-MIS &  CO</li></a></p>
                    </ol>
                    
                </div>
                </div>
            </div>
        
        </section>
     );
}

export default Hero;