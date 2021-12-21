import React, {useEffect} from 'react';
import {
    Button,
    Table,
    TableCell,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';

import {useSelector, useDispatch} from 'react-redux';
import {useStyles} from '../../styles/styles';

import { LoadIpAddressesData } from '../../redux/actions/IpAddressActions';
import {useNavigate} from "react-router-dom";

const HomeComponent = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();

    const ipAddressData = useSelector(state => state.ipAddressData.ipAddress);
    const token = localStorage.getItem('user-token');

    const renderData = (response) => {
        return (
            <TableContainer component={ Paper }>
                <Table sx={{ minWidth: 650 }} aria-label="IP Address Table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">IP Address</TableCell>
                            <TableCell align="left">Label / Comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            response.data.map((row) => (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{ row.ipAddress }</TableCell>
                                    <TableCell>{ row.label }</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    const gotToCreateIpAddress = (e, url) => {
        navigate(url)
    }

    useEffect(() => {
        dispatch(LoadIpAddressesData());
    }, []);

    return (
        <>
            <div className={ classes.homeRoot }>
                <div className={ classes.fullWidth }>
                    {
                        token !== null && token !== ""
                            ?
                                <div style={{"position": "relative", "marginBottom": "50px"}}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        style={{"position": "absolute", "right": 0}}
                                        onClick={e => gotToCreateIpAddress(e, '/create-ip-address') }
                                    >
                                        Add IP Address
                                    </Button>
                                </div>
                            : ""
                    }
                    {
                         ipAddressData.success === true ? renderData(ipAddressData) : <div>No data to display</div>
                    }
                </div>
            </div>
        </>
    );
}

export default HomeComponent;