import React, { Component } from "react";
import Header from "./component/Header";
import Headline from "./component/Headline";
import "./app.scss";

const tempArr = [
  {
    fName: "James",
    lName: "Odeyale",
    email: "jamesodeyale@gmail.com",
    age: 21,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
