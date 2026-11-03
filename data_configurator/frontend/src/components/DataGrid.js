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
export default function DataGrid() {

    // const { defaultLayout, onLayoutChange } = useDefaultGridLayout({
    //     id: "unique-layout-id"
    // });
    const STORAGE_KEY = 'grid-layout'

    function loadGridLayout() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            console.log("stored");
            console.log(stored);
            return stored ? JSON.parse(stored) : undefined;

        }
        catch {
            // Do nothing
        }
    }

    function saveGridLayout(gridLayout) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gridLayout))
        console.log("GridLayout")
        console.log(gridLayout);
    }
    const initialDefaultLayout = {
        "columns": {
            0: 50,
            1: 50,
        },
        "rows": {
            0: 20,
            1: 20,
            2: 20,
            3: 20,
            4: 20,
            5: 20,
        }

    }
    //     columns: {
    //         [
    //             {
    //                 collapsible: true,
    //                 collapsedSize: 44,
    //                 minSize: 120,
    //                 // defaultSize: 160,
    //             },
    //             {
    //                 minSize: "20%",
    //             },
    //         ],
    //     },
    //     rows:
    //     {
    //         [
    //             { minSize: 10 },
    //             { minSize: 10 },
    //             { minSize: 10 },
    //             { minSize: 10 },
    //             { minSize: 100, collapsible: true },
    //         ],
    //     }
    // }
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
            defaultLayout={loadGridLayout() ? initialDefaultLayout : undefined}
            onLayoutChange={(layout) => saveGridLayout(layout)}
        >
            <Cell className="cell" row={0} column={0} columnSpan={2}><Typography variant="h1">Header</Typography></Cell>
            <Cell className="cell" row={1} column={0}><Typography variant="h2">A</Typography></Cell>
            <Cell className="cell" row={1} column={1}><Typography variant="h2">B</Typography></Cell>
            <Cell className="cell" row={2} column={0}><Typography variant="h2">C</Typography></Cell>
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