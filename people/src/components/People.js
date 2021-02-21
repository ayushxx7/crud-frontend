import React from "react";
import { connect } from "react-redux";
import { fetchPersons } from "../redux/actions/people";

class People extends React.Component {
  componentDidMount() {
    this.props.fetchPersons();
  }

  render() {
    return <div>{console.log(this.props.persons)}</div>;
  }
}

const mapStateToProps = (state) => ({
  persons: state.people.persons,
});
export default connect(mapStateToProps, { fetchPersons })(People);
