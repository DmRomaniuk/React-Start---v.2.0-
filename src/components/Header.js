import React from "react";

const Header = (props) => {
    return (
        <header className="top">
            <div className="wrap">
                <div className="header-content">
                    <div className="header-rating">
                        <div className="header-rating_tag">
                            Rating:
                        </div>
                        <div className="header-rating_icon">
                            ★★★★★
                        </div>
                    </div>
                    <div className="header-divider">

                    </div>
                    <div className="header_title">
                        <h1 className="font-effect-fire-animation">
                            {props.title}
                        </h1>
                        <h3>
                               <span>
                                   Fast delivery of warm
                                   <span className="sub-header">
                                       #burgers
                                   </span>
                               </span>
                        </h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;