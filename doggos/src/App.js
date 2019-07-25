import React from "react";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";


import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
    return(
        <Router>
            <div>
                <Navbar />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/about" component={About} />
                <Route path="/search" component={Search} />
                <div> Hello this should be the footer area </div>
            </div>
        </Router>
    )
}

export default App;