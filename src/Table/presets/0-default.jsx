import React from 'react';
import Table from '../Table';
import TableHead from '../../TableHead/TableHead';
import TableHeader from '../../TableHeader/TableHeader';
import TableRow from '../../TableRow/TableRow';
import TableBody from '../../TableBody/TableBody';
import TableData from '../../TableData/TableData';

export default (
    <Table uxpId="Table0">
      <TableHead uxpId="TableHead0">
        <TableRow header uxpId="TableRow0">
          <TableHeader uxpId="TableHeader0">First Name</TableHeader>
          <TableHeader uxpId="TableHeader1">Last Name</TableHeader>
          <TableHeader uxpId="TableHeader2">House</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody uxpId="TableBody0">
        <TableRow uxpId="TableRow0">
          <TableData uxpId="TableData0">Harry</TableData>
          <TableData uxpId="TableData1">Potter</TableData>
          <TableData uxpId="TableData2">Gryffindor</TableData>
        </TableRow>
        <TableRow uxpId="TableRow1">
          <TableData uxpId="TableData3">Hermoine</TableData>
          <TableData uxpId="TableData4">Granger</TableData>
          <TableData uxpId="TableData5">Gryffindor</TableData>
        </TableRow>
        <TableRow uxpId="TableRow2">
          <TableData uxpId="TableData6">Blaise</TableData>
          <TableData uxpId="TableData7">Zambini</TableData>
          <TableData uxpId="TableData8">Slytherin</TableData>
        </TableRow>
        <TableRow uxpId="TableRow3">
          <TableData uxpId="TableData9">Jon</TableData>
          <TableData uxpId="TableData10">Snow</TableData>
          <TableData uxpId="TableData11">Stark</TableData>
        </TableRow>
      </TableBody>
    </Table>
);

