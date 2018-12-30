import React from 'react';

const RemoveButton = props => {
  const { id, remove } = props;
  return <input type="button" value="X" onClick={() => remove(id)} />;
};

export default RemoveButton;
