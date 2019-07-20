import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

export class ListStorage extends React.Component {
  changeSourceStatus = (status, uuidCode) => {
    this.props.changeSourceStatus(status, uuidCode);
  };

  render() {
    const { storage } = this.props;
    return (
      <Grid columns={3}>
        <Grid.Row>
          {storage.map((source, i) => {
            return (
              <Grid.Column key={i}>
                <Image src={source.image} as="a" size="medium" />
                <details>
                  <summary>
                    <Icon className="ellipsis horizontal" />
                  </summary>
                  <figcaption>{source.fileName}</figcaption>
                  {source.active ? <i>Active </i> : <i>Inactive </i>}
                  <Icon
                    className="sync alternate"
                    onClick={() => {
                      this.changeSourceStatus(source.active, source.uuidCode);
                    }}
                  />
                </details>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }
}

export default ListStorage;
