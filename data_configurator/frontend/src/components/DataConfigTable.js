import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    useTable,
    tableFeatures,

    columnFilteringFeature,
    rowPaginationFeature,
    rowSortingFeature,

    // getCoreRowModel,
    flexRender,
} from '@tanstack/react-table'
import {
    Box,
    Stack,
} from '@mui/material'
import TextField from "@mui/material/TextField";
export default function DataconfigTable() {
    const DATA = [
        {
            "name": "Bob",
            "age": "21",
            "gender": "Male",
        },
        {
            "name": "John",
            "age": "24",
            "gender": "Male",
        },
        {
            "name": "Liz",
            "age": "25",
            "gender": "Female",
        },
        {
            "name": "Katy",
            "age": "22",
            "gender": "Female",
        },
    ]
    const [tableData, setTableData] = useState(DATA);
    const columns = [
        {
            accessorKey: "name",
            header: "Name",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "age",
            header: "Age",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "gender",
            header: "Gender",
            cell: (props) => <p>{props.getValue()}</p>,
        },
    ]
    const features = tableFeatures({
        columnFilteringFeature,
        rowSortingFeature,
        rowPaginationFeature,
    });
    const table = useTable({
        features,
        data: tableData,
        columns,

    });

    table.getRowModel().rows.map(row => {
        row.getAllCells().map(cell => {
            console.log(cell.column.columnDef.cell);
            console.log(cell.getContext());
        })
    })

    function handleCellBlur() {
        console.log("cell blur");
    }
    function handleCellFocus() {
        console.log("cell focus");
    }

    return (<>
        <h1> Data Config Table</h1>
        <Stack container spacing={2} gap={2}>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {
                                        flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} name="wow">
                            {row.getAllCells().map(cell =>
                            (
                                <td key={cell.id}>
                                    <TextField
                                        required={true}
                                        defaultValue={cell.renderValue()}
                                        onBlur={handleCellBlur}
                                        onFocus={handleCellFocus}
                                    >

                                    </TextField>
                                    {/* {
                                        flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )
                                    } */}
                                </td>
                            )
                            )}
                        </tr>
                    ))}

                </tbody>
            </table>
        </Stack>
    </>);
}
