import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchSingleCampus } from '../reducers/campusReducer';

class SingleCampus extends Component {
  // const SingleCampus = props => {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleCampus(id);
  }

  render() {
    let { campus } = this.props;

    return campus.name ? (
      <div>
        <h1>Name: {campus.name}</h1>
        <img src={campus.imageUrl} />
        <h2>Address: {campus.address}</h2>
        <h2>Description: {campus.description}</h2>
        <h3>LIST OF STUDENTS:</h3>
        <ul>
          {campus.students.map(student => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  {student.firstName} {student.lastName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campus: state.campuses.single,
  };
};

const mapDispatchToProps = { fetchSingleCampus };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleCampus)
);
