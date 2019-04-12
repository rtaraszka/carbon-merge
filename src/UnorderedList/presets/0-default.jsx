import React from "react";
import UnorderedList from "../UnorderedList";
import ListItem from "../../ListItem/ListItem";

export default (
    <UnorderedList uxpId="UnorderedList0">
        <ListItem uxpId="ListItem0">Unordered List level 1</ListItem>
        <UnorderedList nested uxpId="UnorderedList1">
            <ListItem uxpId="ListItem1">Unordered List level 2</ListItem>
            <ListItem uxpId="ListItem2">Unordered List level 2</ListItem>
        </UnorderedList>
        <ListItem uxpId="ListItem3">Unordered List level 1</ListItem>
        <ListItem uxpId="ListItem4">Unordered List level 1</ListItem>
    </UnorderedList>
);
