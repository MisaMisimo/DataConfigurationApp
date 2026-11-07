import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";
import DataWorkspace from "./DataWorkspace";
import DataGrid from "./DataGrid";
import FlexPanels from "./FlexPanels";
import Accordion from "./Accordion";

function HomePage() {

    return (
        // <DataWorkspace />
        // <DataGrid />
        <FlexPanels />
    );
}
export default HomePage