import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";
import { Gridline, Workspace, Grid, Cell, useDefaultGridLayout } from "react-resizable-panels";
import TabContent from "./TabContent";
import { Group, Panel, Separator } from "react-resizable-panels"
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";

export default function FlexPanels() {

    // const { defaultLayout, onLayoutChanged } = useDefaultGridLayout({
    //     id: "unique-grid-layout-id"
    // });

    return (<>
        <Group orientation="horizontal">
            <Panel
                minSize={500} collapsible defaultSize={"25%"} collapsedSize={25} collapsedThreshold={"25%"}>left</Panel>
            <Separator style={{ width: 5, }
            } />
            <Group orientation="vertical">
                <Panel
                    minSize={50} defaultSize={"25%"} collapsedSize={25} >top</Panel>
                <Separator style={{ height: 5, }
                } />
                <Panel minSize={"10%"}>middle</Panel>
                <Separator style={{ height: 5, }
                } />
                <Panel minSize={"10%"}>bottom</Panel>
            </Group>
            <Separator style={{ width: 5, }
            } />
            <Panel minSize={"10%"}>right</Panel>
        </Group>
        {/* <Group>
            <Panel
                minSize={100} maxSize={200}>left</Panel>
            <Separator style={{
                width: 5,
            }
            } />
            <Panel>right</Panel>
        </Group> */}
        {/* <Group className="min-h-30" orientation="vertical">
            <Panel>top</Panel>
            <Separator />
            <Panel>bottom</Panel>
        </Group> */}
    </>
    );
}