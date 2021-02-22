import React from "react";
import { connect } from "react-redux";
import { fetchPersons, deletePerson } from "../redux/actions/people";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../index.css";

class People extends React.Component {
  componentDidMount() {
    document.title = "CRUD";
    this.props.fetchPersons();
  }

  renderCard = (person) => {
    return (
      <Card
        className="displayPerson mb-2 ml-2 p-3"
        bg="light"
        text="dark"
        id={`${person._id}`}
        key={`${person._id}`}
        border="info"
      >
        <Card.Header as="h5" id={`${person._id}_${person.name}`}>
          {person.name}{" "}
          <Button
            variant="outline"
            className="deleteButton p-0"
            onClick={this.props.deletePerson.bind(this, person._id)}
          >
            🗑️
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Title id={`${person._id}_${person.about}}`}>
            {person.about}
          </Card.Title>
          <Card.Text id={`${person._id}`}></Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item
            key={`${person._id}_${person.languages}`}
            id={`${person._id}_${person.languages}`}
          >
            <b>Understands: </b>
            {person.languages.join(", ")}
          </ListGroup.Item>
          <ListGroup.Item
            key={`${person._id}_${person.dob}`}
            id={`${person._id}_${person.dob}`}
          >
            <b>Born On: </b>
            {new Date(person.dob).toDateString()}
          </ListGroup.Item>
          <ListGroup.Item
            key={`${person._id}_${person.profession}`}
            id={`${person._id}_${person.profession}`}
          >
            <b>Profession: </b>
            {person.profession}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  };
  displayPeopleCards = () => {
    return Object.values(this.props.persons).map((person, index) => {
      console.debug("INDEX:", person.name, index);
      {
        return this.renderCard(person);
      }
    });
  };

  render() {
    return (
      <div className="container">
        {<h2>Exisiting People in Database</h2>}
        <CardColumns>{this.displayPeopleCards()}</CardColumns>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.people.persons,
});
export default connect(mapStateToProps, { fetchPersons, deletePerson })(People);
