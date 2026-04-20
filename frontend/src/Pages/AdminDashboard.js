import React, { useState } from "react";
import TilichoLogo from "../images/tilichologo.webp";
const AdminDashboard = () => {
    const [preferences, setPreferences] = useState({
        veg: true,
        nonVeg: true,
        custom: false,
    });

    const handleChange = (type) => {
        setPreferences((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    const handleSave = () => {
        console.log("Saved Preferences:", preferences);
        alert("Preferences saved!");
    };

    return (
        <div className="admin-dashboard">

            {/* Navbar */}
            <header className="navbar">
                <img src={TilichoLogo} alt="Tilicho Labs" className="header-logo" />
                <nav className="nav-links">
                    <span className="active">Home</span>
                    <span>Users</span>
                    <span>Settings</span>
                </nav>

                <div className="user">Hello, Employee</div>
            </header>


            {/* Content */}
            <main className="admin-content">

                <h1>Admin Dashboard</h1>
                <p className="subtitle">Manage employee meal preferences</p>

                {/* Preferences */}
                <div className="preferences-card">
                    <h3>Set Meal Preferences</h3>
                    <p>Select meal options for employees</p>

                    <div className="checkbox-group">
                        <label>
                            Vegetarian Meal
                            <input
                                type="checkbox"
                                checked={preferences.veg}
                                onChange={() => handleChange("veg")}
                            />
                        </label>

                        <label>
                            Non-Vegetarian Meal
                            <input
                                type="checkbox"
                                checked={preferences.nonVeg}
                                onChange={() => handleChange("nonVeg")}
                            />
                        </label>

                        <label>
                            Custom Meal
                            <input
                                type="checkbox"
                                checked={preferences.custom}
                                onChange={() => handleChange("custom")}
                            />
                        </label>
                    </div>

                    <button className="primary-btn" onClick={handleSave}>
                        Save Preferences
                    </button>
                </div>

                {/* Graph Section */}
                <div className="stats-grid">

                    {/* Bar Graph */}
                    <div className="card">
                        <h3>Daily Meal Selections</h3>

                        <div className="bar-chart">
                            {[40, 55, 30, 60, 45, 70, 50].map((val, i) => (
                                <div key={i} className="bar-container">
                                    <div
                                        className="bar"
                                        style={{ height: `${val * 2}px` }}
                                    ></div>
                                    <span>Day {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Donut Graph (fake UI) */}
                    <div className="card">
                        <h3>Opt-In Status</h3>

                        <div className="donut">
                            <div className="donut-inner">
                                <h2>64%</h2>
                                <p>Opted</p>
                            </div>
                        </div>

                        <div className="legend">
                            <span className="opted">Opted</span>
                            <span className="pending">Pending</span>
                        </div>
                    </div>

                </div>

                {/* Table */}
                <div className="card table-card">
                    <h3>Recent Activity</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Email</th>
                                <th>Meal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Priya</td>
                                <td>priya@tilicho.in</td>
                                <td>Vegetarian</td>
                            </tr>
                            <tr>
                                <td>Rohit</td>
                                <td>rohit@tilicho.in</td>
                                <td>Non-Vegetarian</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    );
};

export default AdminDashboard;