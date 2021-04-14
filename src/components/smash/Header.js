import React from 'react';

function Header(){
    return(
        <div className="row1">
            <div className="container">
                    <img src="images/logo1.png" alt="logo"/>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">PORTFOLIO</a></li>
                        <li><a href="">PRICING</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">TEAM</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                    <button>DOWNLOAD</button>
            </div>
            <div className="clear"></div>
        </div>
    );
}

export default Header;