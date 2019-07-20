import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";

import friends from "./friends.json";
import FriendCard from "./components/FriendCard";


function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(each => 
        <FriendCard name={each.name} image={each.image} occupation={each.occupation} location={each.location}/>
      )}

{/* You can also alternatively return the value from inside the friendcard itself */}

{/* Alternative */}
      <FriendCard name={friends[0].name} image={friends[0].image} occupation={friends[0].occupation} location={friends[0].location} />
      
{/* Original */}
      <SquidwardCard />
    </Wrapper>
  );
}

export default App;
