import React, { useState } from 'react'
const products = [
    {id:1, name: 'laptop', brand: 'Dell', qty:  1},
    {id:2, name: 'phone', brand: 'Samsung', qty:1  },
    {id:3, name: 'tablet', brand: 'Apple', qty: 1 },
    {id:4, name: 'camera', brand: 'Sony', qty:1  },
    // Add more objects as needed
];


const Keys = () => {
    const [items, setItems] = useState(products);
  
    function qtyInc(id) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    }
  
    function qtyDec(id) {
      setItems((prevItems) =>
        prevItems.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
        )
      );
    }
  
    return (
      <div>
        {items.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h2>Brand: {product.brand}</h2>
            <h4>Qty: {product.qty}</h4>
           
            <button type='button' onClick={() => qtyDec(product.id)}>
              -
            </button>

            <button type='button' onClick={() => qtyInc(product.id)}>
              +
            </button>
          </div>
        ))}
      </div>
    );
  };

export default Keys
