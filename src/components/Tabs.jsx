import React, { useState } from "react";
import { MdLooksOne, MdLooksTwo } from "react-icons/md";
import SimulatorOne from "../pages/SimulatorOne";
import SimulatorTwo from "../pages/SimulatorTwo";
import "../css/Tabs.css";

export function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="divContainer">
            <ul className="tabs">
                <li className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
                    <MdLooksOne />
                </li>
                <li className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
                    <MdLooksTwo />
                </li>
                <span
                    className="indicator"
                    style={{ transform: `translateX(${activeTab * 150}px)` }}
                />
            </ul>
            <div className="tab-content">
                {activeTab === 1 && (
                    <div className="simulator-tab-one">
                        <SimulatorOne />
                    </div>
                )}
                {activeTab === 0 && <SimulatorTwo />}
            </div>
        </div>
    );
}