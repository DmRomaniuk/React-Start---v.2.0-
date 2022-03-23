import React from "react";
import restaurants from "../sample-restaurants";



class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: '',
    };

    // rewrite display from state to a new display
    displayList = () => {
        // const display = this.state.display;
        const {display} = this.state;
        this.setState({display: !display});
    };

    // copping title and url from every restaurant and adding them to our state
    getTitle = (restaurant) => {
        const {title, url} = restaurant;
        this.setState({title: title, url: url, display: false});
    }

    // mapping all restaurants and return new restaurants
    theRestaurant = restaurants.map(restaurant => {
        return <li onClick={() => this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>
    });

    // function to show choose a variant of restaurants
    titleShow = () => {
        if (this.state.title) {
            return this.state.title
        } else {
            return 'Choose a restaurant'
        }
    }

    // for showing list of restaurants
    displayVisible = () => {
        if (this.state.display) {
            return  <div className="restaurant_select_bottom">
                        <ul>
                            {this.theRestaurant}
                        </ul>
                    </div>
        }else{
            return ''
        }
    }

    goToRestaurant = () => {
        const {url} = this.state;
        this.props.history.push(`/restaurant/${url}`)
    }

    // for showing button if restaurant was chosen
    showButton = () => {
        if (this.state.title && !this.state.display){
            return  <button onClick={this.goToRestaurant}>
                        Go to the restaurant
                    </button>
        }else{
            return null
        }
    }



    render() {
        return (
            <div className="restaurant_select">
                <div className="restaurant_select_top">
                    <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
                        {this.titleShow()}
                    </div>
                    <div className="arrow_picker">
                        <div className="arrow_picker-up"></div>
                        <div className="arrow_picker-down"></div>
                    </div>
                </div>
                <div>
                    {this.displayVisible()}
                </div>
                <div>
                    {this.showButton()}
                </div>
            </div>
        )
    }
}

export default Landing;