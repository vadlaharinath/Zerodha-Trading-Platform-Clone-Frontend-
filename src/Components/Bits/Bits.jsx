import React from 'react';
import './Bits.css';
import LeftSection from "../LeftSection/LeftSection";

function Bits() {
    return (
        <div className="main-container">
            <div className="left-bar">
                <LeftSection />
            </div>
            <div className="right-bar">
                <h1 className="bids-title">IPOs (7)</h1>
                <table className="bids-table">
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Date</th>
                            <th>Price (₹)</th>
                            <th>Min. amount (₹)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IGCL <span className="sme">SME</span></td>
                            <td>26<sup>th</sup> — 30<sup>th</sup> Jun</td>
                            <td>105 - 111</td>
                            <td>
                                14985<br /><span className="qty">135 Qty.</span>
                            </td>
                            <td><button className="apply-btn">Apply</button></td>
                        </tr>
                        <tr>
                            <td>PROFX <span className="sme">SME</span></td>
                            <td>26<sup>th</sup> — 30<sup>th</sup> Jun</td>
                            <td>82 - 87</td>
                            <td>
                                139200<br /><span className="qty">1600 Qty.</span>
                            </td>
                            <td><button className="apply-btn">Apply</button></td>
                        </tr>
                        <tr>
                            <td>ACEALPHA <span className="sme">SME</span></td>
                            <td>26<sup>th</sup> — 30<sup>th</sup> Jun</td>
                            <td>65 - 69</td>
                            <td>
                                138000<br /><span className="qty">2000 Qty.</span>
                            </td>
                            <td><button className="apply-btn">Apply</button></td>
                        </tr>
                        <tr>
                            <td>VALINDIA <span className="sme">SME</span></td>
                            <td>26<sup>th</sup> — 30<sup>th</sup> Jun</td>
                            <td>95 - 110</td>
                            <td>
                                132000<br /><span className="qty">1200 Qty.</span>
                            </td>
                            <td><button className="apply-btn">Apply</button></td>
                        </tr>
                        <tr>
                            <td>MMEL <span className="sme">SME</span></td>
                            <td>26<sup>th</sup> — 30<sup>th</sup> Jun</td>
                            <td>66 - 70</td>
                            <td>
                                140000<br /><span className="qty">2000 Qty.</span>
                            </td>
                            <td><button className="apply-btn">Apply</button></td>
                        </tr>
                        <tr>
                            <td>ADCOUNTY <span className="sme">SME</span></td>
                            <td>27<sup>th</sup> Jun — 1<sup>st</sup> Jul</td>
                            <td>80 - 85</td>
                            <td>
                                136000<br /><span className="qty">1600 Qty.</span>
                            </td>
                            <td><button className="apply-btn">Apply</button></td>
                        </tr>
                        <tr>
                            <td>NEETUYOSHI <span className="sme">SME</span></td>
                            <td>27<sup>th</sup> Jun — 1<sup>st</sup> Jul</td>
                            <td>71 - 75</td>
                            <td>
                                120000<br /><span className="qty">1600 Qty.</span>
                            </td>
                            <td><button className="apply-btn">Apply</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Bits;