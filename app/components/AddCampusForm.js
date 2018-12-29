import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNewCampus } from '../reducers/campusReducer';

class AddCampusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.props.addNewCampus(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Add Campus Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{' '}
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address:{' '}
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Description:{' '}
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addNewCampus };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddCampusForm)
);
