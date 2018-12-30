import React from 'react';
import { Link } from 'react-router-dom';

const LinkList = props => {
  const { items } = props;
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/students/${item.id}`}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;
