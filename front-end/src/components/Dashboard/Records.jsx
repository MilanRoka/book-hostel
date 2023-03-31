import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(name, Price, Date, Package, Rate) {
  return { name, Price, Date, Package, Rate };
}
const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];
const Records = () => {
  return (
    <div style={{
      height: '100vh',
      width: '150vh'
    }}
    >
      <h4>Recent Bookings</h4>
      <TableContainer component={Paper} >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Hostel Name </StyledTableCell>
              <StyledTableCell align="right">Package</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Price}</StyledTableCell>
                <StyledTableCell align="right">{row.Date}</StyledTableCell>
                <StyledTableCell align="right">{row.Package}</StyledTableCell>
                <StyledTableCell align="right">{row.Rate}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Records;