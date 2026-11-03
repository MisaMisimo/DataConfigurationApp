import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";
import { Separator, Workspace } from "react-resizable-panels";
import TabContent from "./TabContent";
import { Grid } from "react-resizable-panels"

export default function DataWorkspace() {
    const STORAGE_KEY = 'data-configuration:workspace'
    function loadModel() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : undefined;
        }
        catch {
            // Do nothing
        }
    }
    function saveModel(model) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(model));
    }
    const initialModel = {
        version: 1,
        root: {
            type: "split",
            id: "root",
            orientation: "horizontal",
            children: [
                {
                    type: "tabset",
                    id: "sidebar",
                    size: 25,
                    tabs: [{ id: "about", title: "About", data: { kind: "about" } }]
                },
                {
                    type: "split",
                    id: "main",
                    orientation: "vertical",
                    size: 75,
                    children: [
                        {
                            type: "tabset",
                            id: "editors",
                            size: 65,
                            tabs: [
                                { id: "counter", title: "Counter", data: { kind: "counter" } },
                                { id: "notes", title: "Notes", data: { kind: "notes" } },
                                { id: "nested", title: "Nested panels", data: { kind: "nested" } }
                            ]
                        },
                        {
                            type: "tabset",
                            id: "bottom",
                            size: 35,
                            tabs: [
                                { id: "scratchpad", title: "Scratchpad", data: { kind: "notes" } }
                            ]
                        }
                    ]
                }
            ]
        }
    };
    return (

        <Workspace
            className="DataWorkspace"
            // defaultModel={loadModel() ?? initialModel}
            defaultModel={initialModel}
            onModelChanged={(model) => saveModel(model)}
            renderTabContent={(tab) => <TabContent kind={tab.data.kind} />}
            renderSeparator={(orientation) => (
                <Separator
                    className={`separator separator-${orientation}`}
                />
            )}
            tabsetMinHeight="60px"
            tabsetMinWidth="120px"
        />
    );
}