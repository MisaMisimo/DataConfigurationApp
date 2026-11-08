import React, { useId, useState } from "react";

import SshConfig from "./SSHConfig";
export default function TabContent({ kind }) {
    const notesId = useId();
    const [count, setCount] = useState(0);
    const [notes, setNotes] = useState("");

    switch (kind) {
        case "sshconfig":
            return (
                <section className="workspace-content">
                    <SshConfig />
                </section>

            )
        case "about":
            return (
                <section className="workspace-content">
                    <p className="workspace-eyebrow">DATA CONFIGURATION</p>
                    <h1>About this workspace</h1>
                    <p>
                        Organize your configuration work across resizable panels.
                        Select a tab to switch between tools, or drag the dividers
                        to arrange your workspace.
                    </p>
                </section>
            );
        case "counter":
            return (
                <section className="workspace-content">
                    <p className="workspace-eyebrow">DEMO TOOL</p>
                    <h1>Counter</h1>
                    <p className="counter-value" aria-live="polite">{count}</p>
                    <div className="workspace-actions">
                        <button type="button" onClick={() => setCount((value) => value - 1)}>
                            Decrease
                        </button>
                        <button type="button" onClick={() => setCount((value) => value + 1)}>
                            Increase
                        </button>
                        <button type="button" onClick={() => setCount(0)}>
                            Reset
                        </button>
                    </div>
                </section>
            );
        case "notes":
            return (
                <section className="workspace-content workspace-notes">
                    <p className="workspace-eyebrow">SCRATCHPAD</p>
                    <h1>Notes</h1>
                    <label className="visually-hidden" htmlFor={notesId}>
                        Scratchpad notes
                    </label>
                    <textarea
                        id={notesId}
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        placeholder="Write a note..."
                    />
                </section>
            );
        case "nested":
            return (
                <section className="workspace-content">
                    <p className="workspace-eyebrow">LAYOUT DEMO</p>
                    <h1>Nested panels</h1>
                    <div className="nested-panels">
                        <article>
                            <h2>Overview</h2>
                            <p>This panel sits beside the details panel.</p>
                        </article>
                        <article>
                            <h2>Details</h2>
                            <p>Use nested layouts to group related workspace content.</p>
                        </article>
                    </div>
                </section>
            );
        default:
            return (
                <section className="workspace-content">
                    <h1>Unsupported tab</h1>
                    <p>This tab does not have a supported content type.</p>
                </section>
            );
    }
}
