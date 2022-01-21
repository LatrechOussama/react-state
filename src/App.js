import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    person: {
      fullName: "Oussama Latrech",
      bio: "My name is Oussama , am 28 Years Old , am from Djerba ",
      img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/218421343_10221486066953733_1828257135009291587_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wuga0Magh9AAX_K3NPL&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9EZfIYgi88bawXZci8NANTvtsxt8DJAPdhGXk7UklDEQ&oe=61ED4348",
      profession: "Developper",
    },
    stat: true,
    counter: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  showhide = () => {
    this.setState({ stat: !this.state.stat });
  };

  render() {
    return (
      <div className="app">
        <div className="bu">
          {" "}
          <button className="button-71" onClick={this.showhide}>
            {this.state.stat ? "Hide Profile" : "show Profile"}
          </button>
        </div>
        {this.state.stat ? (
          <div className="dii">
            <div class="card text-center">
              <div class="card-header">
                <h1>My Profile</h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <h1>* {this.state.person.fullName} *</h1>
                </h5>
                <img src={this.state.person.img} alt="aa"></img>
                <h1>{this.state.person.bio}</h1>
                <h1>{this.state.person.profession}</h1>
              </div>
              <div class="card-footer-text-muted">
                <h4 className="counter">
                  {this.state.counter} : seconds since the last component was
                  mounted{" "}
                </h4>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
