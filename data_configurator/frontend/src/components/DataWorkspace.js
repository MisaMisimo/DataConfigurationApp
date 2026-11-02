import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";
import { Separator, Workspace, WorkspaceModel } from "react-resizable-panels";
import TabContent from "./TabContent";

export default function DataWorkspace() {
    function saveModel() {
        console.log("save model");
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