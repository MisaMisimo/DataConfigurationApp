import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import DataconfigTable from "./DataConfigTable";


export default function TabContent(
    kind = null
) {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'Profile',
            content: <p className="profileContent">This is the profile information</p>,
        },
        {
            label: 'Settings',
            content: 'Here are your account settings',
        },
        {
            label: 'Messages',
            content: 'You have 3 new messages',
        },
    ]

    console.log(kind)

    // function setActiveTab(index) {
    //     console.log("setActiveTab")
    //     console.log(index);
    // }
    return (<>
        <div className="tabs-container">
            <div className="tab-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={activeTab === index ? 'active-tab' : 'tab-button'}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* Tab Content Panel */}
            <div className="tab-content">
                <p>{tabs[activeTab].content}</p>
            </div>
        </div>


    </>);
}