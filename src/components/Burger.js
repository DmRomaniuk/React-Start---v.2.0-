import React from "react";

class Burger extends React.Component{
    handleClick = () => {
        this.props.addOrder(this.props.index);
    }
    render() {
        const burgerImg = this.props.details.image;
        const burgerName = this.props.details.name;
        const burgerPrice = this.props.details.price;
        const burgerDescription = this.props.details.desc;
        const burgerStatus = this.props.details.status;
        // const {image, name, price, desc, status } = this.props.details

        const isAvailable = burgerStatus === 'available';
        const burgerInStock = () => {
            if (isAvailable === true){
               return 'MAKE ORDER'
            }else{
                return 'TEMPORARILY UNAVAILABLE'
            }
        }

        return(
            <div>
                <li className="menu-burger">
                    <div className="image-container">
                        <img src={burgerImg} alt={burgerName}/>
                    </div>
                    <div className="burger-details">
                        <h3 className="burger-name">
                            {burgerName}
                            <span className="price">
                                {burgerPrice} ₴
                            </span>
                        </h3>
                        <p>{burgerDescription}</p>
                        <button className="buttonOrder" disabled={!isAvailable} onClick={this.handleClick}>
                            {burgerInStock()}
                        </button>
                    </div>
                    <div>

                    </div>
                </li>
            </div>
        )
    }
}

export default Burger;