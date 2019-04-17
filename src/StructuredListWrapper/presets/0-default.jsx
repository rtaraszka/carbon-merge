import React from "react";
import StructuredListWrapper from "../StructuredListWrapper";
import StructuredListRow from "../../StructuredListRow/StructuredListRow";
import StructuredListCell from "../../StructuredListCell/StructuredListCell";
import StructuredListHead from "../../StructuredListHead/StructuredListHead";
import StructuredListBody from "../../StructuredListBody/StructuredListBody";

export default (
    <StructuredListWrapper uxpId="StructuredListWrapper0">
        <StructuredListHead uxpId="StructuredListHead0">
            <StructuredListRow head uxpId="StructuredListRow0">
                <StructuredListCell head uxpId="StructuredListCell0">ColumnA</StructuredListCell>
                <StructuredListCell head uxpId="StructuredListCell1">ColumnB</StructuredListCell>
                <StructuredListCell head uxpId="StructuredListCell2">ColumnC</StructuredListCell>
            </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody uxpId="StructuredListBody0">
            <StructuredListRow uxpId="StructuredListRow1">
                <StructuredListCell noWrap uxpId="StructuredListCell3">Row 1</StructuredListCell>
                <StructuredListCell uxpId="StructuredListCell4">Row 1</StructuredListCell>
                <StructuredListCell uxpId="StructuredListCell5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                    magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                    posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                    Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow uxpId="StructuredListRow2">
                <StructuredListCell noWrap uxpId="StructuredListCell6">Row 2</StructuredListCell>
                <StructuredListCell uxpId="StructuredListCell7">Row 2</StructuredListCell>
                <StructuredListCell uxpId="StructuredListCell8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                    magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                    posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                    Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
            </StructuredListRow>
        </StructuredListBody>
    </StructuredListWrapper>
);
