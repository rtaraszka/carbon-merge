import * as React from "react";
import TileGroup from "../TileGroup";
import RadioTile from "../../RadioTile/RadioTile";

export default (
<TileGroup defaultSelected="react.js" name="JavaScript" uxpId="1">
  <RadioTile labelText="React.js" value="react.js" uxpId="2">React.js</RadioTile>
  <RadioTile labelText="Angular" value="angular" uxpId="3">Angular</RadioTile>
  <RadioTile labelText="Vue.js" value="vue" uxpId="4">Vue.js</RadioTile>
</TileGroup>
);
