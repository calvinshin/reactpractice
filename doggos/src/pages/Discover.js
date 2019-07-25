import React, { Component } from "react";
import {Link} from "react-router-dom";
import DogAPI from "../utils/DogAPI";
import Card from "../components/Card"

class Discover extends Component {
    state = {
        image : ""
    }
    
    componentDidMount() {
        this.randomDog()
    }

    randomDog = () => {
        DogAPI.random().then(response => {
            this.setState({image: response.data.message});
        })
    }

    render() {return(
        <div>
            This is the Discover Page
            <div>
                {console.log("Test")}
                {4+5}
                <Card image={this.state.image} />
                {/* console.log({DogAPI.random()}) */}
            </div>
        </div>
        )
    }
}

export default Discover;