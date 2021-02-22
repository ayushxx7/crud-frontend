import React from "react";
import { connect } from "react-redux";
import { addPerson } from "../redux/actions/people";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class AddPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      address: "New Delhi, India",
      profession: "Software Engineer",
      maritalStatus: false,
      languages: "English, Hindi, Python",
      about: "About me",
    };
  }

  onChange = (e) => {
    console.debug(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
    console.debug("this.state", this.state, this.state.name);
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.debug("Submit");
    console.debug(this.state);

    let data = this.state;

    if (data["maritalStatus"] == "Single") {
      console.log("Single => Set False");
      data["married"] = false;
    } else {
      console.log("Married => Set True");
      data["married"] = true;
    }

    this.props.addPerson(data);
  };

  addPersonForm = () => {
    const {
      name,
      dob,
      address,
      profession,
      maritalStatus,
      languages,
      about,
    } = this.state;
    return (
      <Card>
        <Card.Body>
          <Container>
            <Form onSubmit={this.onSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name"
                    required
                    onChange={this.onChange}
                    value={name}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Date of Birth"
                    required
                    value={dob}
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="profession">
                  <Form.Label>Profession</Form.Label>
                  <Form.Control onChange={this.onChange} value={profession} />
                </Form.Group>

                <Form.Group as={Col} controlId="maritalStatus">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.onChange}
                    value={maritalStatus}
                  >
                    <option>Single</option>
                    <option>Married</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  value={address}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="languages">
                <Form.Label>Languages</Form.Label>
                <Form.Control onChange={this.onChange} value={languages} />
              </Form.Group>

              <Form.Group controlId="about">
                <Form.Label>About</Form.Label>
                <Form.Control
                  placeholder="Write something about yourself..."
                  onChange={this.onChange}
                  value={about}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card.Body>
      </Card>
    );
  };

  render() {
    return (
      <div className="container">
        {<h2>Add New Person to Database</h2>}
        {this.addPersonForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // persons: state.people.persons
});
export default connect(mapStateToProps, { addPerson })(AddPerson);
