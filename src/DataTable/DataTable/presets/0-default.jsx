import React from "react";
import TableContainer from "../../TableContainer/TableContainer";
import Table from "../../Table/Table";
import TableHead from "../../TableHead/TableHead";
import TableRow from "../../TableRow/TableRow";
import TableHeader from "../../TableHeader/TableHeader";
import TableBody from "../../TableBody/TableBody";
import TableCell from "../../TableCell/TableCell";
import DataTable from "../DataTable";

export default (
    <TableContainer title="DataTable" uxpId="DataTable0">
      <Table uxpId="DataTable1">
        <TableHead uxpId="DataTable2">
          <TableRow uxpId="DataTable3">
            <TableHeader uxpId="DataTable4">Name</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody uxpId="DataTable5">
          <TableRow uxpId="DataTable6">
            <TableCell uxpId="DataTable7">Test table</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
);
