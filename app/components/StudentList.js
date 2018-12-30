import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import AddStudentForm from './AddStudentForm';
import RemoveButton from './RemoveButton';
import { deleteStudent } from '../reducers/studentReducer';

const StudentList = props => {
  const { students, remove, loading, error } = props;
  if (loading) {
    return <p>One moment please, we are loading...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Uh-oh, we have an error...</p>
        <pre>{error.message}</pre>
      </div>
    );
  }
  return (
    <div>
      {students.length &&
        students.map(student => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h1>
                {student.firstName} {student.lastName}
              </h1>
            </Link>
            <RemoveButton id={student.id} remove={remove} />
          </div>
        ))}
      <AddStudentForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students.all,
    loading: state.students.loading,
    error: state.students.error,
  };
};

const mapDispatchToProps = { remove: deleteStudent };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StudentList)
);
