import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "./actions";

import Header from "./component/Header";
import Headline from "./component/Headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
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
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
