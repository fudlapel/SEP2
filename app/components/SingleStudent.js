import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSingleStudent } from '../reducers/studentReducer';
import StudentDetail from './StudentDetail';

class SingleStudent extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleStudent(id);
  }

  render() {
    const { student } = this.props;

    return student.firstName ? (
      <StudentDetail student={student} />
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
