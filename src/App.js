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

const initialState = {
  hideBtn: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.fetch = this.fetch.bind(this);
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsAValue(number) {
    //return number * 20;
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />

          {!hideBtn && <SharedButton {...configButton} />}

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
