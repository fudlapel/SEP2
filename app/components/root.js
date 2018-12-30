import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCampuses } from '../reducers/campusReducer';
import { getAllStudents } from '../reducers/studentReducer';
import Navbar from './Navbar';
import CampusList from './CampusList';
import StudentList from './StudentList';
import HomePage from './HomePage';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

class Root extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <Navbar />
        <nav>Welcome!</nav>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/campuses/:id" component={SingleCampus} />
            <Route exact path="/students/:id" component={SingleStudent} />
            <Redirect to="/home" />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchStateToProps = dispatch => {
  return {
    fetchAllCampuses: () => {
      dispatch(getAllCampuses());
    },
    fetchAllStudents: () => {
      dispatch(getAllStudents());
    },
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchStateToProps
  )(Root)
);
