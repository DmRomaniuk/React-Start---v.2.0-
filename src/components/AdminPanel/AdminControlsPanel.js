import React from "react";
import AddBurgerForm from "./BurgerForm";

class AdminControlsPanel extends React.Component {
    render() {
        return (
            <div className="menu-admin">
                <h2>
                    Menu Controls
                </h2>
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.uploadAllBurgers}>
                    Upload all burger list
                </button>
            </div>
        )
    }
}

export default AdminControlsPanel;