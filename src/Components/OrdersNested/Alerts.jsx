import React from "react";
function Alerts() {
    return (
        <div className="orders-content">
            <h2 className="orders-title">Alerts</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Instrument</th>
                        <th>Condition</th>
                        <th>Alert Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TCS</td>
                        <td>Above</td>
                        <td>₹3,700</td>
                        <td className="order-status active">Active</td>
                    </tr>
                    <tr>
                        <td>RELIANCE</td>
                        <td>Below</td>
                        <td>₹2,400</td>
                        <td className="order-status triggered">Triggered</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Alerts;