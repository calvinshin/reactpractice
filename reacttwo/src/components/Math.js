import React from "react";

// or function Math(props) {}

const Math = (props) => {
    const {num1, operator, num2} = props;
    let value;
    switch(operator) {
        case "+":
            value = num1 + num2;
            break; 
        case "-":
            value = num1 - num2;
            break;
    }
    return <div>{value}</div>
}

export default Math;