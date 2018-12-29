import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import AddStudentForm from './AddStudentForm';

const StudentList = props => {
  const { students } = props;
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
          </div>
        ))}
      <AddStudentForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students.all,
  };
};

export default withRouter(connect(mapStateToProps)(StudentList));
