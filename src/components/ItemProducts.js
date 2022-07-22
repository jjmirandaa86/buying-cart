import React from 'react';

const ItemProducts = ({ product, handleAddProduct }) => {

  const { id, name, price } = product;

  console.log(id, name, price);

  return (
    <div className="box-itemProduct">
      <>{id} </>
      <>{name} </>
      <>{price} </>
      <button onClick={handleAddProduct}>+</button>
    </div>
  );
};

export default ItemProducts;