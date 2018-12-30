import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import AddCampusForm from './AddCampusForm';
import { deleteCampus } from '../reducers/campusReducer';
import RemoveButton from './RemoveButton';

const CampusList = props => {
  const { campuses, remove } = props;
  return (
    <div>
      {campuses.length &&
        campuses.map(campus => (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>CampusLink: {campus.name}</Link>
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} />
            <RemoveButton id={campus.id} remove={remove} />
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

const mapDispatchToProps = { remove: deleteCampus };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CampusList)
);
