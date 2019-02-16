import * as React from 'react';
import Table from '../Table';
import TableHead from '../../TableHead/TableHead';
import TableHeader from '../../TableHeader/TableHeader';
import TableRow from '../../TableRow/TableRow';
import TableBody from '../../TableBody/TableBody';
import TableData from '../../TableData/TableData';

export default (
  <Table uxpId="1">
  <TableHead uxpId="2">
    <TableRow header uxpId="3">
      <TableHeader uxpId="4">First Name</TableHeader>
      <TableHeader uxpId="5">Last Name</TableHeader>
      <TableHeader uxpId="6">House</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody uxpId="7">
    <TableRow uxpId="8">
      <TableData uxpId="9">Harry</TableData>
      <TableData uxpId="10">Potter</TableData>
      <TableData uxpId="11">Gryffindor</TableData>
    </TableRow>
  </TableBody>
</Table>
);

