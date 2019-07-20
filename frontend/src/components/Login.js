import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../store/actions";
import { Redirect } from "react-router-dom";
import {
  Button,
  Form,
  Header,
  Container,
  Dimmer,
  Loader
} from "semantic-ui-react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameLogin: "",
      passwordLogin: "",
      isLoading: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    await this.props.login(this.state);

    this.setState({
      usernameLogin: "",
      passwordLogin: "",
      isLoading: false
    });
  };

  render() {
    const { isAuthenticated } = this.props.users;
    const { usernameLogin, passwordLogin } = this.state;

    if (isAuthenticated) return <Redirect to="/categories" />;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Header as="h4">Login System</Header>
          <Form.Input
            type="text"
            placeholder="Username"
            name="usernameLogin"
            autoFocus
            value={usernameLogin}
            onChange={this.handleChange}
            required
          />
          <br />
          <Form.Input
            type="password"
            placeholder="Password"
            name="passwordLogin"
            value={passwordLogin}
            onChange={this.handleChange}
            required
          />
          <br />
          <Button type="submit">Login</Button>
        </Form>
        <Dimmer active={this.state.isLoading}>
          <Loader />
        </Dimmer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {
    login: state => dispatch(authActions.login(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Login);
