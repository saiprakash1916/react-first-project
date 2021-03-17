import React, { Component, Fragment } from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
class App extends Component {
  // constructor() {
  //   super();
  state = {
    //     username: "",
    //     password: "",
  };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   let { username, password } = this.state;
  //   console.log({ username, password });
  // };
  render() {
    return (
      <Fragment>
        {/* <section className="col-md-4 mx-auto bg-white my-2 card">
          <article>
            <h1 className="text-center">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <lable htmlfor="username">Username</lable>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <lable htmlfor="username">Password</lable>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-success btn-block my-2">
                  Login
                </button>
              </div>
            </form>
          </article>
        </section> */}
        {/*-------------- wrap router Component----- */}
        <Router>
          <Header />
          <Fragment>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
