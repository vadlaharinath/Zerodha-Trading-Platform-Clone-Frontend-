import React from "react";
function OrdersHome() {
    return (
        <div className="orders-content">
            <h2 className="orders-title">Executed orders (2)</h2>
            <div className="orders-actions">
                <input className="orders-search" type="text" placeholder="Search" />
                <span className="orders-links">
                    <a href="#">Contract note</a>
                    <a href="#">View history</a>
                    <a href="#">Download</a>
                </span>
            </div>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Instrument</th>
                        <th>Product</th>
                        <th>Qty.</th>
                        <th>Avg. price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:24:27</td>
                        <td><span className="order-type buy">BUY</span></td>
                        <td>MAXHEALTH <span className="order-exchange">NSE</span></td>
                        <td>CNC</td>
                        <td>0 / 1</td>
                        <td>1,275.10</td>
                        <td><span className="order-status cancelled">CANCELLED AMO</span></td>
                    </tr>
                    <tr>
                        <td>10:15:03</td>
                        <td><span className="order-type sell">SELL</span></td>
                        <td>RELIANCE <span className="order-exchange">NSE</span></td>
                        <td>CNC</td>
                        <td>5 / 5</td>
                        <td>2,500.00</td>
                        <td><span className="order-status executed">EXECUTED</span></td>
                    </tr>
                </tbody>
            </table>
            <div className="orders-trades">
                <span>Trades ▼</span>
            </div>
        </div>
    );
}
export default OrdersHome;