import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log('props', props)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.handleRemove(props.id)} className="remove">𝘅</span>

      {/* <span onclick={props.handleRemove(props.id => props.id)} className="remove">𝘅</span> */}
{/* Whenever a set of parenthesis are done, you invoke the function
When the span is rendered, the handleremove is invokeed with the ID,
which means that handleremove is invoked, and then set state is trigger, and then handle-remove is re-recurred

Problem is passing the id in. */}
    </div>
  );
}

export default FriendCard;
