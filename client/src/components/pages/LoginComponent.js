import React, { useState } from 'react';
import { Button, TextField, Card } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LoginAction } from '../../redux/actions/AuthActions';
import {useStyles} from "../../styles/styles";

function LoginComponent()
{
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();

    const [ fields, setState ] = useState({
        email: "",
        password: "",
    });

    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id]: e.target.value,
        });
    }

    const UserLogin = (e) => {
        e.preventDefault();
        console.log(fields);

        dispatch(LoginAction(fields, navigate));
    }

    return (
        <div>
            <div className={ classes.centerItem }>
                <Card>
                    <h2><b>Login Page</b></h2>

                    <form onSubmit={ UserLogin }>
                        <div>
                            <TextField
                                type="email"
                                className={ classes.fullWidth }
                                required
                                margin="normal"
                                variant="outlined"
                                label="email"
                                id="email"
                                value={ fields.email }
                                onChange={ handleFieldChange }
                            />
                        </div>
                        <div>
                            <TextField
                                className={ classes.fullWidth }
                                label="Password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                required
                                id="password"
                                value={ fields.password }
                                onChange={ handleFieldChange }
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className={classes.fullWidth}
                                variant="contained"
                                color="primary"
                                endIcon={<AccountCircleIcon />}
                            >
                                <b>Login</b>
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default LoginComponent;