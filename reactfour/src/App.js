import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {friends}

  handleRemove = id => {
    const newFriends = this.state.friends.filter(friend => friend.id !== id)
    this.setState({friends : newFriends})
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {friends.map(friend => 
            <FriendCard
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            key={friend.id}
            id={friend.id}
            handleRemove = {this.handleRemove}
            />
        )}
      </Wrapper>
    );
  }
}


export default App;
