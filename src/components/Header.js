import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
<div className="header-wrapper">
    <div className="main-info">
        <h1>Kelly's Development Promotions</h1>
        <Typed
        className="typed-text"
        strings= {["Web Design","Web Development","Facebook Ads" ,"Google Ads", "App Development", "SEO Optimization"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />

        <a href="https://www.linkedin.com/in/kelly-meyer-7938b1128" >
        <button className="btn-main-offer"><strong>contact me for more info</strong></button>
        </a>

    </div>
</div>     
    )
}

export default Header
