import React from "react";
function SIP() {
    return (
        <div className="orders-content">
            <h2 className="orders-title">SIP Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Instrument</th>
                        <th>Amount</th>
                        <th>Frequency</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>NIPPON INDIA</td>
                        <td>₹2,000</td>
                        <td>Monthly</td>
                        <td className="order-status active">Active</td>
                    </tr>
                    <tr>
                        <td>HDFC AMC</td>
                        <td>₹1,500</td>
                        <td>Monthly</td>
                        <td className="order-status paused">Paused</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default SIP;