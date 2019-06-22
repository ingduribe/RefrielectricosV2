import React from "react";

const ListProducts = ({ products } = this.props) => {
  return (
    <section>
      {products.map((product, i) => {
        return (
          <div key={i}>
            <h4>{product.name}</h4>
            <i>
              {product.description}
              <b>{" " + product.brand}</b>
            </i>
            <br />
            {product.image ? (
              <img width={300} src={product.image} alt={product.description} />
            ) : (
              <b>Not image for product yet</b>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ListProducts;
