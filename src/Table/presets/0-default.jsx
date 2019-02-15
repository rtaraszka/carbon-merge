import * as React from 'react';
import Table from '../Table';
import TableHead from '../../TableHead/TableHead';
import TableHeader from '../../TableHeader/TableHeader';
import TableRow from '../../TableRow/TableRow';
import TableBody from '../../TableBody/TableBody';
import TableData from '../../TableData/TableData';

export default (
  <Table key="1">
  <TableHead key="2">
    <TableRow header key="3">
      <TableHeader key="4">First Name</TableHeader>
      <TableHeader key="5">Last Name</TableHeader>
      <TableHeader key="6">House</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody key="7">
    <TableRow key="8">
      <TableData key="9">Harry</TableData>
      <TableData key="10">Potter</TableData>
      <TableData key="11">Gryffindor</TableData>
    </TableRow>
  </TableBody>
</Table>
);

