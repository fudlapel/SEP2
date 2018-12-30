import React from 'react';
import LinkList from './LinkList';

const CampusDetail = props => {
  const { name, imageUrl, address, description, students } = props.campus;

  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={imageUrl} />
      <h2>Address: {address}</h2>
      <h2>Description: {description}</h2>
      <h3>LIST OF STUDENTS:</h3>
      <LinkList items={students} />
    </div>
  );
};

export default CampusDetail;
