import React from "react";
import {
  Grid,
  Image,
  Icon,
  Modal,
  Button,
  Item,
  Card
} from "semantic-ui-react";

export class ListProducts extends React.Component {
  changeProductStatus = (status, id) => {
    this.props.changeProductStatus(status, id);
  };

  asignImageToProduct = (productId, sourceUuidCode, image) => {
    this.props.asignImageToProduct(productId, sourceUuidCode, image);
  };

  render() {
    const { products, storage } = this.props;

    return (
      <Grid columns={3} stackable centered>
        <Grid.Row>
          {products.map((product, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  {product.image ? (
                    <Image src={product.image} as="a" size="medium" />
                  ) : (
                    <Modal trigger={<Button>Choose image</Button>}>
                      <Modal.Header>Choose product image</Modal.Header>
                      <Modal.Content image scrolling>
                        <Modal.Description>
                          <Item.Group>
                            {storage.map((source, i) => {
                              return (
                                <Item key={i}>
                                  <Item.Image size="tiny" src={source.image} />

                                  <Item.Content>
                                    <Item.Header as="h4">
                                      {source.fileName}
                                    </Item.Header>
                                    <Item.Description>
                                      {source.active ? (
                                        <i>Active </i>
                                      ) : (
                                        <i>Inactive </i>
                                      )}
                                      <Button
                                        animated="vertical"
                                        onClick={() => {
                                          this.asignImageToProduct(
                                            product.id,
                                            source.uuidCode,
                                            source.image
                                          );
                                        }}
                                      >
                                        <Button.Content
                                          onClick={() => {
                                            source;
                                          }}
                                          hidden
                                        >
                                          Choose
                                        </Button.Content>
                                        <Button.Content visible>
                                          <Icon name="hand point left" />
                                        </Button.Content>
                                      </Button>
                                    </Item.Description>
                                    <Item.Extra>
                                      {source.description}
                                    </Item.Extra>
                                  </Item.Content>
                                </Item>
                              );
                            })}
                            ;
                          </Item.Group>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  )}
                  <Card.Content>
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Meta>
                      <span>{product.brand}</span>
                    </Card.Meta>
                    <Card.Content extra>
                      <b>
                        <Icon
                          className="sync alternate"
                          onClick={() => {
                            this.changeProductStatus(
                              product.active,
                              product.id
                            );
                          }}
                        />
                        {product.active ? <i>Active </i> : <i>Inactive </i>}
                      </b>
                    </Card.Content>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }
}

export default ListProducts;
