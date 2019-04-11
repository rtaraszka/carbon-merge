import React from "react";
import PropTypes from "prop-types";
import { Tile as TileComponent } from "carbon-components-react";

function Tile(props) {
    return (
        <TileComponent {...props} />
    );
}

Tile.propTypes = {
    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,
};

export default Tile;
