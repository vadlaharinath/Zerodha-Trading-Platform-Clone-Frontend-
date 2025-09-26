import React from "react";
function GTT() {
    return (
        <div className="orders-content">
            <h2 className="orders-title">GTT Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Trigger Price</th>
                        <th>Type</th>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1,300.00</td>
                        <td>BUY</td>
                        <td>INFY</td>
                        <td>10</td>
                        <td className="order-status pending">Pending</td>
                    </tr>
                    <tr>
                        <td>2,600.00</td>
                        <td>SELL</td>
                        <td>RELIANCE</td>
                        <td>5</td>
                        <td className="order-status triggered">Triggered</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default GTT;