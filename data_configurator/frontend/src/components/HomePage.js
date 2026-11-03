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
import { WorkspaceModel } from "react-resizable-panels";
import {
    Panel,
    PanelGroup,
    PanelResizeHandle
} from 'react-resizable-panels'

function HomePage() {

    return (
        // <DataWorkspace />
        <DataGrid />
    );
}
export default HomePage