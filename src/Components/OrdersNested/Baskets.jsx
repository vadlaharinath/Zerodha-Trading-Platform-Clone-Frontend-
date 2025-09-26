import React from "react";
function Baskets() {
    return (
        <div className="orders-content">
            <h2 className="orders-title">Basket Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Basket Name</th>
                        <th>Stocks</th>
                        <th>Total Qty.</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Long Term</td>
                        <td>RELIANCE, TCS, HDFC</td>
                        <td>30</td>
                        <td className="order-status executed">Executed</td>
                    </tr>
                    <tr>
                        <td>Growth</td>
                        <td>INFY, SBIN</td>
                        <td>15</td>
                        <td className="order-status pending">Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Baskets;