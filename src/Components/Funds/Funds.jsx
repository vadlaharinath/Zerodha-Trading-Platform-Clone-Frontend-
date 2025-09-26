import React from "react";
import './Funds.css';
import LeftSection from "../LeftSection/LeftSection";

function Funds() {
    return (
        <div className="main-container">
            <div className="left-bar">
                <LeftSection />
            </div>
            <div className="right-bar">
                <div className="funds-header">
                    <button className="funds-btn add">Add funds</button>
                    <button className="funds-btn withdraw">Withdraw</button>
                </div>
                <div className="funds-panels">
                    <div className="funds-panel">
                        <div className="funds-panel-header">
                            <span>Equity</span>
                            <span className="funds-links">
                                <a href="#">View statement</a>
                                <a href="#">Help</a>
                            </span>
                        </div>
                        <div className="funds-panel-body">
                            <div className="funds-row">
                                <span>Available margin</span>
                                <span className="funds-value highlight">450.40</span>
                            </div>
                            <div className="funds-row">
                                <span>Used margin</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Available cash</span>
                                <span className="funds-value">450.40</span>
                            </div>
                            <div className="funds-row">
                                <span>Opening balance</span>
                                <span className="funds-value">450.40</span>
                            </div>
                            <div className="funds-row">
                                <span>Payin</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Payout</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>SPAN</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Delivery margin</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Exposure</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Options premium</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Collateral (Liquid funds)</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Collateral (Equity)</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Total collateral</span>
                                <span className="funds-value">0.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="funds-panel">
                        <div className="funds-panel-header">
                            <span>Commodity</span>
                            <span className="funds-links">
                                <a href="#">View statement</a>
                                <a href="#">Help</a>
                            </span>
                        </div>
                        <div className="funds-panel-body">
                            <div className="funds-row">
                                <span>Available margin</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Used margin</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Available cash</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Opening balance</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Payin</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Payout</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>SPAN</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Delivery margin</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Exposure</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Options premium</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Collateral (Liquid funds)</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Collateral (Equity)</span>
                                <span className="funds-value">0.00</span>
                            </div>
                            <div className="funds-row">
                                <span>Total collateral</span>
                                <span className="funds-value">0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Funds;