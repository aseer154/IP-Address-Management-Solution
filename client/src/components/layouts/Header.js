import React, { useEffect } from "react";
import { AppBar, CssBaseline, Toolbar, Typography, Button } from '@material-ui/core';

import { useStyles } from '../../styles/styles';
import { LogoutAction } from '../../redux/actions/AuthActions';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {AlarmOffOutlined} from "@material-ui/icons";

export default function Header(props) {
    let navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();

    const authResponse = useSelector(state => state.userAuth.authResponse);

    const logout = () => {
        dispatch(LogoutAction());
        navigate("/home");
    }

    const login = () => {
        navigate('/auth/login');
    }

    const token = localStorage.getItem('user-token');

    useEffect(() => {
        if (authResponse !== "" && authResponse.success === true)
        {
            alert(authResponse.data);
            localStorage.removeItem('user-token');
        }

        return () => {};
    }, [authResponse]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.header}>
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        <Link to="/home" className={classes.link}>IP Address Management</Link>
                    </Typography>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Welcome
                    </Typography>

                    {
                        token !== null && token !== ""
                        ? <Button color="inherit" onClick={logout}>Logout</Button>
                        : <Button color="inherit" onClick={login}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}