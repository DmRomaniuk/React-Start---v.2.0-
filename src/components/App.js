import React from "react";
import Header from "./Header";
import Order from "./Order";
import AdminControlsPanel from "./AdminPanel/AdminControlsPanel";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";


class App extends React.Component {

    state = {
        burgers: {},
        orders: {}
    };

    burgerCounter = 101323;

    addBurger = (burgerItem) => {
        // 1. Make a copy for object state
        const burgers = {...this.state.burgers}
        // 2. Add a new burger into burgers variable
        // burgers[`burger${Date.now()}`] = burgerItem;
        burgers[`burger№${this.burgerCounter++}`] = burgerItem;
        // 3. Add a new burgers object into state
        this.setState({burgers: burgers})
    };

    uploadAllBurgers = () => {
        this.setState({burgers: sampleBurgers})
    };

    addOrder = (key) => {
        // 1. Make a copy for object state
        const orders = {...this.state.orders}
        // 2. Add a key for order with property 1, or upload current property
        orders[key] = orders[key] + 1 || 1;
        // 3. Add a new current info object about order into state
        this.setState({orders:orders})
    };


    render() {
        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header title={'Hot Burger'}/>
                    <div>
                        <ul className="burgers">
                            {Object.keys(this.state.burgers).map((key) => {
                                return <Burger key={key} index={key} details={this.state.burgers[key]} addOrder={this.addOrder}/>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="main_order-content">
                    <Order/>
                </div>
                <div className="main_admin-content">
                    <AdminControlsPanel addBurger={this.addBurger} uploadAllBurgers={this.uploadAllBurgers}/>
                </div>
            </div>
        );
    };
};

export default App;

