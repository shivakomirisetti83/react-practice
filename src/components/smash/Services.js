import React from 'react';


function Services(){
    return(
        <div className="row3">
            <div className="container">
                <h2 className="service">Our Services</h2>
                <p className="headpara">Stop wasting time and money designing and managing a website<br/> that doesn’t get results. Happiness guaranteed!</p>      
                <div className="graphics">
                    <h2 className="head"><a href="">Graphics<br/>Design</a></h2>
                    <img src="images/graphic.png" alt="img"/>
                    <p>Short description for the ones who look for<br/> something new. Short description for the<br/> ones who look for something new.</p>
                    <a href="">LEARN MORE</a>
                </div>
                <div className="clear"></div>
                <div className="website">
                    <h2 className="ss"><a href="">Website<br/>Design</a></h2>
                    <img src="images/website.png" alt="img"/>
                    <p>Short description for the ones who look for<br/> something new. Short description for the<br/> ones who look for something new.</p>
                    <a href="">LEARN MORE</a>
                </div>
                
                <div className="digital">
                    <h2 className="ss"><a href="">Digital<br/>Marketing</a></h2>
                    <img src="images/digital.png" alt="img"/>
                    <p>Short description for the ones who look for<br/> something new. Short description for the<br/> ones who look for something new.</p>
                    <a href="">LEARN MORE</a>
                </div>
                <div className="clear"></div>

             </div>
        </div>

    );
}

export default Services;