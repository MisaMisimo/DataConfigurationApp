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

function SectionHeader({ title }) {
    const panel = useParentPanel();

    const toggle = () => {
        if (panel?.isCollapsed()) {
            panel.expand();
        } else {
            panel?.collapse();
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
    return <Panel collapsedSize={28}>
        <Typography variant="h2">{title}</Typography>
        <SectionHeader title={title}></SectionHeader>
        {children}
    </Panel>
}
export default function Accordion() {

    // const { defaultLayout, onLayoutChanged } = useDefaultGridLayout({
    //     id: "unique-grid-layout-id"
    // });

    return (<>
        <Group orientation="vertical">
            <Section title="Open Editors">...</Section>
            <Section title="Folders">...</Section>
            <Section title="Outline">...</Section>
        </Group>
    </>
    );
}