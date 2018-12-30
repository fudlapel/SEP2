import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchSingleCampus } from '../reducers/campusReducer';
import CampusDetail from './CampusDetail';

class SingleCampus extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleCampus(id);
  }

  render() {
    let { campus } = this.props;

    return campus.name ? (
      <CampusDetail campus={campus} />
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
