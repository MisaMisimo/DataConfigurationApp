import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";
import { Gridline, Workspace, Grid, Cell, useDefaultLayout } from "react-resizable-panels";
import TabContent from "./TabContent";
import { Group, Panel, Separator } from "react-resizable-panels"
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Accordion from "./Accordion";

export default function FlexPanels() {

    const { defaultLayout, onLayoutChanged } = useDefaultLayout({
        id: "unique-layout-id",
        storage: localStorage
    });

    return (<>
        <Group orientation="horizontal"
            defaultLayout={defaultLayout}
            onLayoutChanged={onLayoutChanged}>
            <Panel minSize={190} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Typography variant="h1" >left</Typography></Panel>
            <Separator style={{ width: 5, }
            } />
            <Panel defaultSize={"50%"} minSize={300}>
                <Group orientation="vertical">
                    <Panel>
                        <Typography variant="h1" >Top</Typography>
                    </Panel>
                    <Separator />
                    <Panel>
                        <Accordion />
                    </Panel>
                </Group>
            </Panel>
            <Separator disabled style={{ width: 5, }} />
            <div style={{ width: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Typography variant="h1">A</Typography></div>
            <Separator style={{ width: 5, }} />
            <Panel minSize={190} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Typography variant="h1" >right</Typography>
            </Panel>
        </Group >
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