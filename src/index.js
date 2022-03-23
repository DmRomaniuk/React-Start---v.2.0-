import React from "react";
import {render} from "react-dom";

class Landing extends React.Component{
    render() {
        return(
            <p>Hello!</p>
        )
    }
}

render(<Landing />, document.querySelector("#root"))