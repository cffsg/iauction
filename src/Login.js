import React, { Component } from "react";
import { Button, Col, Image } from "react-bootstrap";

class Login extends Component {
  componentWillMount() {
    document.title = `iAuction | Login`;
  }

  render() {
    return (
      <div>
        <Image
          src="http://blog.hostbaby.com/wp-content/uploads/2014/03/SeeingSpots_1400x900.jpg"
          alt="Realm WiFi"
          className="loginPageLogo"
        />
        <Button>Login</Button>
      </div>
    );
  }
}

export default Login;
