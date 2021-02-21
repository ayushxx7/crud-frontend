import React from "react";
import { connect } from "react-redux";
import { fetchPersons, addPerson } from "../redux/actions/people";

class People extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddPerson = () => {
    this.props.addPerson(this.state.input);
  };

  render() {
    return (
      <div>
        {console.log(this.props.persons)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.people.persons
});
export default connect(mapStateToProps, { fetchPersons })(People);

