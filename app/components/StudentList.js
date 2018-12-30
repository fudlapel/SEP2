import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import AddStudentForm from './AddStudentForm';
import RemoveButton from './RemoveButton';
import { deleteStudent } from '../reducers/studentReducer';

const StudentList = props => {
  const { students, remove } = props;
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
  };
};

const mapDispatchToProps = { remove: deleteStudent };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StudentList)
);
