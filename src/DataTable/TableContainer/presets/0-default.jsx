import React from "react";
import TableContainer from "../../TableContainer/TableContainer";
import Table from "../../Table/Table";
import TableHead from "../../TableHead/TableHead";
import TableRow from "../../TableRow/TableRow";
import TableHeader from "../../TableHeader/TableHeader";
import TableBody from "../../TableBody/TableBody";
import TableCell from "../../TableCell/TableCell";


export default (
    <TableContainer title="DataTable" description="With default options" style={{"width": "100%"}} uxpId="DataTable0">
      <Table uxpId="DataTable1">
        <TableHead uxpId="DataTable2">
          <TableHeader isSortable uxpId="TableHeeader0">Name</TableHeader>
          <TableHeader isSortable uxpId="TableHeeader1">Protocol</TableHeader> 
          <TableHeader isSortable uxpId="TableHeeader2">Port</TableHeader> 
          <TableHeader isSortable uxpId="TableHeeader3">Rule</TableHeader> 
          <TableHeader isSortable uxpId="TableHeeader4">Attached Groups</TableHeader>   
          <TableHeader isSortable uxpId="TableHeeader5">Status</TableHeader> 
        </TableHead>
        <TableBody uxpId="DataTable5">
          <TableRow uxpId="TableRow0">
            <TableCell uxpId="TableCell0A">Load Balancer 3</TableCell>
            <TableCell uxpId="TableCell0B">HTTP</TableCell>
            <TableCell uxpId="TableCell0C">3000</TableCell>
            <TableCell uxpId="TableCell0D">Round robin</TableCell>
            <TableCell uxpId="TableCell0E">Kevins VM Groups</TableCell>
            <TableCell uxpId="TableCell0F">Disabled</TableCell>
          </TableRow>
          <TableRow uxpId="TableRow1">
            <TableCell uxpId="TableCell1A">Load Balancer 1</TableCell>
            <TableCell uxpId="TableCell1B">HTTP</TableCell>
            <TableCell uxpId="TableCell1C">443</TableCell>
            <TableCell uxpId="TableCell1D">Round robin</TableCell>
            <TableCell uxpId="TableCell1E">Maureens VM Groups</TableCell>
            <TableCell uxpId="TableCell1F">Starting</TableCell>
          </TableRow>
          <TableRow uxpId="TableRow2">
            <TableCell uxpId="TableCell2A">Load Balancer 2</TableCell>
            <TableCell uxpId="TableCell2B">HTTP</TableCell>
            <TableCell uxpId="TableCell2C">80</TableCell>
            <TableCell uxpId="TableCell2D">DNS delegation</TableCell>
            <TableCell uxpId="TableCell2E">Andrews VM Groups</TableCell>
            <TableCell uxpId="TableCell2F">Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
);