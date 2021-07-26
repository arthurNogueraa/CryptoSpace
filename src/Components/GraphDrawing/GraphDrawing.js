import {  Grid } from '@material-ui/core';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import React, { useState } from 'react';
import { AdvancedRealTimeChart, TechnicalAnalysis, TickerTape, MarketData, CryptoCurrencyMarket,Timeline } from "react-ts-tradingview-widgets";


const GraphDrawing = () => {
    const [cryptoVal, setCryptoVal] = useState("xrpusd")
    const Selects = () => {

        const handleChange = (event) => {
            setCryptoVal(event.target.value);
        };
        

        return (

            <FormControl color="secondary" className="select">
                <InputLabel id="demo-simple-select-filled-label">Choose your crypto</InputLabel>
                <Select variant="outlined" color="primary" onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>Choose your crypto</em>
                    </MenuItem>
                    <MenuItem value={"xrpusd"}>Xrp</MenuItem>
                    <MenuItem value={"btcusd"}>BTC</MenuItem>
                    <MenuItem value={"ethusd"}>Eth</MenuItem>
                    <MenuItem value={"adausd"}>Cardano</MenuItem>
                </Select>
            </FormControl>

        );
    }

    return (
        <div className="graphs">
            <TickerTape></TickerTape>
            <Selects></Selects>
            <Grid spacing={0} container direction="row-reverse" className="graphs">
           
                <AdvancedRealTimeChart theme="dark" symbol={cryptoVal} height={830} ></AdvancedRealTimeChart> <TechnicalAnalysis colorTheme="dark" symbol={cryptoVal} >
                </TechnicalAnalysis><Timeline></Timeline>
       
                <CryptoCurrencyMarket colorTheme="dark" height={850} width={980} ></CryptoCurrencyMarket ><MarketData colorTheme="dark" width={910} height={850}></MarketData>

                </Grid>


        
        </div>
    );
}

export default GraphDrawing;
