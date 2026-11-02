import React, { Component } from "react";
import { createRoot } from "react-dom/client"
// import HomePage from "./HomePage";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <p>Main Page Placeholder</p>
                {/* <HomePage /> */}
            </div>

        );
    }
}

const appDiv = document.getElementById('app');
const root = createRoot(appDiv);
root.render(<App />);