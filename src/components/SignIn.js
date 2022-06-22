import React from "react";
import { render } from "react-dom";
import { Form, Input, Label, Button } from "reactstrap";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      sifre: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/home",
      state: this.state,
    });
  }

  handleChange(e) {
    //console.log("Handling change for : ", e.target.name, e.target.value);
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit} >
          <Label justify-content="center" margin-top="10px">
            {" "}
            Giriş Yapınız.
          </Label>
          <Label className="m-1" for="from"></Label>
          <Input
            type="text"
            email=""
            value={this.state.from}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <Input
            type="text"
            sifre=""
            value={this.state.from}
            onChange={this.handleChange}
            placeholder="Şifre"
            required
          />
          <Button className="m-1" type="submit">
            Giriş Yap
          </Button>

          <Button>
          Kayıt Ol
        </Button>
        </Form>
      </div>
    );
  }
}
export default SignIn;