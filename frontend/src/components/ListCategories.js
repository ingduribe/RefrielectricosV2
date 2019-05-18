import React from "react";
import teal from "@material-ui/core/colors/purple";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const primary = teal["900"];

export default ({ categories } = this.props) => {
  return (
    <Paper>
      <Table>
        <TableHead color={primary}>
          <TableRow>
            <TableCell>Category name</TableCell>
            <TableCell>category description</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {category.name}
              </TableCell>
              <TableCell align="right">{category.description}</TableCell>
              <TableCell align="right">{category.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
