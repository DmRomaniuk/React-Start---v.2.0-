import React from "react";

class AddBurgerForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef();

    createBurger = (action) => {
        action.preventDefault();
        const burger = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value || '0'),
            status: this.statusRef.current.value,
            description: this.descriptionRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addBurger(burger);
        // action.currentTarget.reset() - reset() method make form inputs clear
        action.currentTarget.reset();
    }

    render() {
        return (
            <form className="burger-edit" onSubmit={this.createBurger}>
                <input ref={this.nameRef} name="name" type="text" placeholder="Name" autoComplete="off"/>
                <input ref={this.priceRef} name="price" type="text" placeholder="Price" autoComplete="off"/>
                <select ref={this.statusRef} className="status" name="status">
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea ref={this.descriptionRef} name="description" placeholder="Description"/>
                <input ref={this.imageRef} name="image" type="text" placeholder="Image" autoComplete="off"/>
                <button type="submit">
                    +Add to menu
                </button>
            </form>
        )
    }
}

export default AddBurgerForm;