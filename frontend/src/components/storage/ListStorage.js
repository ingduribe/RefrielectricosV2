import React from "react";
import Grid from "@material-ui/core/Grid";

export class ListStorage extends React.Component {
  changeSourceStatus = (status, uuidCode) => {
    this.props.changeSourceStatus(status, uuidCode);
  };

  render() {
    const { storage } = this.props;
    return (
      <Grid container spacing={8}>
        {storage.map((source, i) => {
          return (
            <Grid item key={i}>
              <i>{source.active}</i>
              <br />
              <figure>
                <img width={300} src={source.image} alt={source.description} />
                <details>
                  <summary>Details</summary>
                  <figcaption>{source.fileName}</figcaption>
                  <b>
                    {source.active ? <i>Active</i> : <i>Inactive</i>}
                    <button
                      onClick={() => {
                        this.changeSourceStatus(source.active, source.uuidCode);
                      }}
                    >
                      Change status
                    </button>
                  </b>
                </details>
              </figure>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default ListStorage;
