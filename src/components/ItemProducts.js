import React from 'react';

const ItemProducts = ({ data, handleAdd }) => {
  const { id, name, price } = data;
  return (
    <>
      <div>{id} </div>
      <div>{name} </div>
      <div>{price} </div>
      <button onClick={handleAdd} >+</button>
    </>
  );
};

export default ItemProducts;