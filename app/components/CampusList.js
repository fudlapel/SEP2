import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import AddCampusForm from './AddCampusForm';
import { deleteCampus } from '../reducers/campusReducer';
import RemoveButton from './RemoveButton';

const CampusList = props => {
  const { campuses, remove, loading, error } = props;
  if (loading) {
    return <p>loading, please wait--thank you!</p>;
  }

  if (error) {
    return (
      <div>
        <p>ERROR, sorry!</p>
        <pre>{error.message}</pre>{' '}
      </div>
    );
  }
  return (
    <div>
      {campuses.length &&
        campuses.map(campus => (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
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
    loading: state.campuses.loading,
    error: state.campuses.error,
  };
};

const mapDispatchToProps = { remove: deleteCampus };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CampusList)
);
