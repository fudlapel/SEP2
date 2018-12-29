import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import AddCampusForm from './AddCampusForm';

const CampusList = props => {
  const { campuses } = props;
  return (
    <div>
      {campuses.length &&
        campuses.map(campus => (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>CampusLink: {campus.name}</Link>
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} />
          </div>
        ))}
      <AddCampusForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses.all,
  };
};

export default withRouter(connect(mapStateToProps)(CampusList));
