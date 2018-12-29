import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchSingleStudent } from '../reducers/studentReducer';

class SingleStudent extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleStudent(id);
  }

  render() {
    const { student } = this.props;

    return student.firstName ? (
      <div>
        <h4>
          name: {student.firstName} {student.lastName}
        </h4>
        <h4>email: {student.email}</h4>
        <h4>gpa: {student.gpa}</h4>
        <h4>
          campus:{' '}
          {student.campus ? (
            <Link to={`/campuses/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          ) : (
            <p>no campus assigned yet</p>
          )}
        </h4>
        <img src={student.imageUrl} />
      </div>
    ) : (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    student: state.students.single,
  };
};

const mapDispatchToProps = { fetchSingleStudent };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleStudent)
);
