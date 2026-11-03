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

function HomePage() {

    return (
        // <DataWorkspace />
        <DataGrid />
    );
}
export default HomePage