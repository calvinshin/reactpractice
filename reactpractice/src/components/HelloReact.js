import React from "react";

function HelloReact() {
  return (
    <div className="container">
      <h1>My name is Calvin</h1>
      <div>
        okay test things here
        I like bread.
        <ul>
          <li>Melon</li>
          <li>Anzu</li>
        </ul>
      </div>

      <div className="container">
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>I'm a jumbotron!</p>
        <p>
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HelloReact;
