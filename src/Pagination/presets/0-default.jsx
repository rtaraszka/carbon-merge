import React from "react";
import Pagination from "../Pagination";

export default (
    <Pagination
        page={1}
        totalItems={103}
        backwardText="Previous page"
        forwardText="Next page"
        pageSize={10}
        pageSizes={[10, 20, 30, 40, 50]}
        itemsPerPageText="Items per page:"
        uxpId="Pagination0"
    />
);
