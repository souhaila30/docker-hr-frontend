import React from 'react';
import FetchData from './FetchData';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TableOutput = () => (
  <Table>
    <TableHeader>
        <TableRow>
            <TableHeaderColumn>Time</TableHeaderColumn>
            <TableHeaderColumn>HeartRate</TableHeaderColumn>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableRowColumn>10</TableRowColumn>
            <TableRowColumn>60</TableRowColumn>
        </TableRow>
    </TableBody>
  </Table>
);

export default TableOutput;
