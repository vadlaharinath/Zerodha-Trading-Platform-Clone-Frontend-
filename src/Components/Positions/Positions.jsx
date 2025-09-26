import React from 'react';
import LeftSection from "../LeftSection/LeftSection";
import './Positions.css';

function Positions() {
    return (
        <div className="main-container">
            <div className="Positionsleftsection">
                <LeftSection />
            </div>
            <div className="Positionsrightsection">
                <h2 className="positions-title">Positions (6)</h2>
                <table className="positions-table">
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. price</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Buy</th>
                            <th>Sell</th>
                            <th>Net chg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RELIANCE</td>
                            <td>10</td>
                            <td>2,480.00</td>
                            <td>2,500.00</td>
                            <td className="green">+200.00</td>
                            <td>2,480.00</td>
                            <td>2,500.00</td>
                            <td className="green">+0.81%</td>
                        </tr>
                        <tr>
                            <td>TCS</td>
                            <td>5</td>
                            <td>3,550.00</td>
                            <td>3,600.00</td>
                            <td className="green">+250.00</td>
                            <td>3,550.00</td>
                            <td>3,600.00</td>
                            <td className="green">+1.41%</td>
                        </tr>
                        <tr>
                            <td>INFY</td>
                            <td>20</td>
                            <td>1,400.00</td>
                            <td>1,390.00</td>
                            <td className="red">-200.00</td>
                            <td>1,400.00</td>
                            <td>1,390.00</td>
                            <td className="red">-0.71%</td>
                        </tr>
                        <tr>
                            <td>HDFC BANK</td>
                            <td>15</td>
                            <td>1,650.00</td>
                            <td>1,670.00</td>
                            <td className="green">+300.00</td>
                            <td>1,650.00</td>
                            <td>1,670.00</td>
                            <td className="green">+1.21%</td>
                        </tr>
                        <tr>
                            <td>MARUTI</td>
                            <td>8</td>
                            <td>10,000.00</td>
                            <td>9,950.00</td>
                            <td className="red">-400.00</td>
                            <td>10,000.00</td>
                            <td>9,950.00</td>
                            <td className="red">-0.50%</td>
                        </tr>
                        <tr>
                            <td>SBIN</td>
                            <td>25</td>
                            <td>600.00</td>
                            <td>610.00</td>
                            <td className="green">+250.00</td>
                            <td>600.00</td>
                            <td>610.00</td>
                            <td className="green">+1.67%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Positions;