import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, amount, currency) {
    return { name, amount, currency };
}

let rows = [];
function store(name, amount, currency) {
    rows.push({ name, amount, currency })
    localStorage.setItem("cryptoInput", rows)
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    select: {
        minHeight: 40,
        minWidth: 400,
        borderRadius: 4,
        margin: 6,
        fontFamily: "roboto",
        fontSize: 16,

        color: "grey"
    },
    root: {
        backgroundColor: "rgb(24,24,24)", display: "flex",
        alignContent: "center",
        alignItems: "center",
    },
    inp: {
        minHeight: 34, borderRadius: 4, margin: 5,
        padding: 2, boxShadow: "none", fontFamily: "roboto",
        fontSize: 16,
    },
    button: {
        minHeight: 40

    }
});



const CustomizedTables = () => {


    const classes = useStyles();
    const [selectCrypto, setSelectCrypto] = useState("");
    const handleChangeCrypto = (event) => {
        setSelectCrypto(event.target.value);
    };
    const [selectCurrency, setSelectCurrency] = useState("");
    const handleChangeCurrency = (event) => {
        setSelectCurrency(event.target.value);
    };
    const [amountCrypto, setamountCrypto] = useState();
    const handleChangeUnits = (event) => {
        setamountCrypto(event.target.value);
        event.preventDefault()
    };
    const tab = useStyles()

    const addRow = () => {
        const row = { name: selectCrypto, currency: selectCurrency, amount: amountCrypto, price: 2 }
        rows.push(row)
        return (rows)
    }


    const changeVal = (currencySymbole) => {

        const dolVal = 1;
        const euroVal = 1.2;
        const chfVal = 1.1;

        switch (currencySymbole) {
            case "$":
                return dolVal
                break;
            case "eur":
                return euroVal
                break;
            case "chf":
                return chfVal
                break;

            default:
                break;
        }
    }




    return (

        <div>
            <div className={classes.root}  >
                <select className={classes.select} onChange={handleChangeCrypto} >
                    <option value="" style={{ fontStyle: "italic" }} >Select a crypto</option>
                    <option value="XRP">XRP</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="ADA">ADA</option>
                </select>
                <select className={classes.select} onChange={handleChangeCurrency} >
                    <option value="" style={{ fontStyle: "italic" }}>Select a currency</option>
                    <option value={"$"}>$</option>
                    <option value={"€"}>€</option>
                    <option value={"chf"}>chf</option>

                </select>
                <input className={classes.inp} placeholder="Amount" onChange={handleChangeUnits}></input>
                <Button variant="contained" color="secondary" className={tab.button} onClick={addRow}>Add</Button>

            </div>


            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Crypto</StyledTableCell>
                            <StyledTableCell align="right">currency</StyledTableCell>
                            <StyledTableCell align="right">Amount</StyledTableCell>

                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">worth</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (

                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.currency}</StyledTableCell>
                                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                <StyledTableCell align="right">{row.price * row.amount * changeVal(row.currency)}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></div>
    );
}
export default CustomizedTables