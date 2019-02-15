import * as React from "react";
import TileGroup from "../TileGroup";
import RadioTile from "../../RadioTile/RadioTile";

export default (
<TileGroup defaultSelected="react.js" name="JavaScript" key="1">
  <RadioTile labelText="React.js" value="react.js" key="2">React.js</RadioTile>
  <RadioTile labelText="Angular" value="angular" key="3">Angular</RadioTile>
  <RadioTile labelText="Vue.js" value="vue" key="4">Vue.js</RadioTile>
</TileGroup>
);
