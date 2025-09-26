import React from 'react';
import './LeftSection.css';
import searchicon from '../../assets/search-icon.svg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const stockData = [
  { name: 'RELIANCE', exchange: 'NSE', change: 4.15, percent: 0.25, price: 2875.60 },
  { name: 'ADANIENT', change: -2.60, percent: -0.55, price: 1234.10 },
  { name: 'WIPRO', exchange: 'BSE', change: -7.4, percent: -1.2, price: 421.50 },
  { name: 'ITC', change: -1.15, percent: -0.41, price: 448.90 },
  { name: 'MARUTI', exchange: 'BSE', change: 30.5, percent: 1.25, price: 10500.75 },
  { name: 'SBIN', change: -0.15, percent: -0.09, price: 610.25 },
];

// 2. STOCK TABLE COMPONENT
function StockTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 500, boxShadow: 1 }}>
      <Table size="small" aria-label="stock table">
        <TableBody>
          {stockData.map((stock, index) => {
            const isPositive = stock.change > 0;
            return (
              <TableRow key={index}>
                <TableCell>
                  <span style={{
                    color: isPositive ? 'green' : 'red',
                    fontWeight: 600
                  }}>
                    {stock.name}
                  </span>
                  {stock.exchange && (
                    <span style={{ fontSize: '10px', color: 'gray', marginLeft: 5 }}>
                      {stock.exchange}
                    </span>
                  )}
                  {stock.event && (
                    <span style={{ fontSize: '10px', color: 'blue', marginLeft: 5 }}>
                      EVENT
                    </span>
                  )}
                </TableCell>
                <TableCell align="right">{stock.change.toFixed(2)}</TableCell>
                <TableCell align="right" style={{ color: isPositive ? 'green' : 'red' }}>
                  {stock.percent.toFixed(2)}%{' '}
                  {isPositive ? (
                    <ArrowUpwardIcon style={{ fontSize: '10px', verticalAlign: 'middle' }} />
                  ) : (
                    <ArrowDownwardIcon style={{ fontSize: '10px', verticalAlign: 'middle' }} />
                  )}
                </TableCell>
                <TableCell align="right" style={{ color: isPositive ? 'green' : 'red' }}>
                  {stock.price.toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

//MAIN LEFT SECTION
function LeftSection() {
  return (
    <div className="left-section">
      <div className="top-left">
        <div className="Search-input">
          <div><img className="search-icon" src={searchicon} alt="searchicon" /></div>
          <input className="input-Type" type="text" placeholder="Search eg: infy bse, nifty fut, index fund, etc" />
          <div className="Ctrl">Ctrl + K</div>
        </div>
      </div>

      <div className="topleft-below">
        <div className="watchlist-left">
          <p>Watchlist 1</p>
          <p>(6 / 250)</p>
        </div>
        <div className="watchlist-right">
          <a href="/Zerodha.com">+New group</a>
        </div>
      </div>

      <StockTable />
    </div>
  );
}

export default LeftSection;