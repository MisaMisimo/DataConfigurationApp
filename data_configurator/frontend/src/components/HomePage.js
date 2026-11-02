import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";

function HomePage() {

    return (<>
        <p> We're in home page!</p>
        <DataconfigTable></DataconfigTable>
    </>);
}
export default HomePage