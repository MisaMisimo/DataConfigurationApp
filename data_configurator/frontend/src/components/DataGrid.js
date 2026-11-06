import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";
import { Gridline, Separator, Workspace, Grid, Cell, useDefaultGridLayout } from "react-resizable-panels";
import TabContent from "./TabContent";
import { } from "react-resizable-panels"
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
export default function DataGrid() {

    const { defaultLayout, onLayoutChanged } = useDefaultGridLayout({
        id: "unique-grid-layout-id"
    });

    return (
        <Grid
            columns={
                [
                    {
                        collapsible: true,
                        collapsedSize: 44,
                        minSize: 120,
                        // defaultSize: 160,
                    },
                    {
                        minSize: "20%",
                    }
                ]
            }
            rows={
                [
                    { minSize: 10 },
                    { minSize: 10 },
                    { minSize: 10 },
                    { minSize: 10 },
                    { minSize: 100, collapsible: true },
                ]
            }
            defaultLayout={defaultLayout}
            onLayoutChanged={onLayoutChanged}
        >
            <Cell className="cell" row={0} column={0} columnSpan={2}><Typography variant="h1">Header</Typography></Cell>
            <Cell className="cell" row={1} column={0}><Typography variant="h2">A</Typography></Cell>
            <Cell className="cell" row={1} column={1}><Typography variant="h2">B</Typography></Cell>
            <Cell className="cell" row={2} column={0}><TextField fullWidth multiline sx={{
                height: "100%",
                "& .MuiInputBase-root": { height: "100%" },
                "&  textarea": { overflowY: 'auto !important' }
            }} required={false} type="text" label="Search Field" >0</TextField></Cell>
            <Cell className="cell" row={2} column={1} rowSpan={2}><Typography variant="h2">D</Typography></Cell>
            <Cell className="cell" row={3} column={0}><Typography variant="h2">E</Typography></Cell>
            <Cell className="cell" row={4} column={0}><Typography variant="h2">G</Typography></Cell>
            <Cell className="cell" row={4} column={1}><Typography variant="h2">H</Typography></Cell>

            <Gridline className="gridline" type="column" column={1} row={1}></Gridline>
            <Gridline className="gridline" type="row" row={1}></Gridline>
            <Gridline className="gridline" type="row" row={2}></Gridline>
            <Gridline className="gridline" type="row" row={3} columnSpan={1}></Gridline>
            <Gridline className="gridline" type="row" row={4}></Gridline>
        </Grid>

    );
}