import React, { useState, useEffect, PropsWithChildren } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";
import { Gridline, Workspace, Grid, Cell, useDefaultGridLayout, useParentPanel } from "react-resizable-panels";
import TabContent from "./TabContent";
import { Group, Panel, Separator } from "react-resizable-panels"
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import DataGrid from "./DataGrid";

function SectionHeader({ title }) {
    const panel = useParentPanel();

    const toggle = () => {
        if (panel?.isCollapsed()) {
            panel.expand();
            console.log("expanding panel");
        } else {
            panel.collapse();
            console.log("collapsing panel");
        }
    }
    return (
        <>
            <Button onClick={toggle} style={{
                height: 28
            }}>
                {title}
            </Button>
        </>
    )
}

function Section({ children, title }) {
    return <Panel collapsible collapsedSize={28}>
        {/* <Typography variant="h2">{title}</Typography> */}
        <SectionHeader title={title}></SectionHeader>
        {children}
    </Panel>
}
export default function Accordion() {
    return (<>
        <Group orientation="vertical">
            <Section title="Open Editors"><DataGrid /></Section>
            <Section title="Folders">...</Section>
            <Section title="Outline">...</Section>
            <Section title="TestFlow">...</Section>
        </Group>
    </>
    );
}