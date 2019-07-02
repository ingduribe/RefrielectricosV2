import React from "react";
import Grid from "@material-ui/core/Grid";

const ListProducts = ({ products } = this.props) => {
  return (
    <Grid container spacing={8}>
      {products.map((product, i) => {
        return (
          <Grid item key={i}>
            <div>
              <h4>{product.name}</h4>
              <i>{product.brand}</i>
              <br />
              {product.image ? (
                <img
                  width={300}
                  src={product.image}
                  alt={product.description}
                />
              ) : (
                <b>Not image for product yet</b>
              )}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListProducts;
