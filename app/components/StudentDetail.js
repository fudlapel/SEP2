import React from 'react';
import { Link } from 'react-router-dom';

const StudentDetail = props => {
  const { firstName, lastName, email, gpa, campus, imageUrl } = props.student;
  return (
    <div>
      <h4>
        name: {firstName} {lastName}
      </h4>
      <h4>email: {email}</h4>
      <h4>gpa: {gpa}</h4>
      <h4>
        campus:{' '}
        {campus ? (
          <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
        ) : (
          <p>no campus assigned yet</p>
        )}
      </h4>
      <img src={imageUrl} />
    </div>
  );
};

export default StudentDetail;
