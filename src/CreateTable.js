import React from 'react';
import FetchData from './FetchData';
import {
  Table,
  TableBody,
  TableHeader,
  TableColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TableOutput = () => (
  <Table>
    <TableHeader>
        <TableRow>
            <TableHeaderColumn>Time</TableHeaderColumn>
            <TableHeaderColumn>Heart Rate</TableHeaderColumn>
        </TableRow>
    </TableHeader>
    
    <TableBody>
        <TableRow>
            <TableRowColumn>Time</TableRowColumn>
            <TableRowColumn>Heart Rate</TableRowColumn>
        </TableRow>
      <TableRow>
    </TableBody>
  </Table>
);
export default TableOutput
