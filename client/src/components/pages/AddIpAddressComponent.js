import React, {useState} from 'react';
import {Button, Card, TextField} from "@material-ui/core";

import {useStyles} from "../../styles/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { AddIpAddressData } from '../../redux/actions/IpAddressActions';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function AddIpAddressComponent()
{
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();

    const [ fields, setState ] = useState({
        ipAddress: '',
        label: '',
    });

    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id]: e.target.value,
        });
    }

    const AddIpAddress = (e) => {
        e.preventDefault();

        dispatch(AddIpAddressData(fields, navigate));
    }

    return (
        <div>
            <div className={ classes.centerItem }>
                <Card>
                    <form onSubmit={ AddIpAddress }>
                        <div>
                            <TextField
                                id="ipAddress"
                                label="IP Address"
                                className={ classes.fullWidth }
                                required
                                margin="normal"
                                variant="outlined"
                                value={ fields.ipAddress }
                                onChange={ handleFieldChange }
                            />
                        </div>

                        <div>
                            <TextField
                                id="label"
                                label="Label/Comment"
                                className={ classes.fullWidth }
                                required
                                margin="normal"
                                variant="outlined"
                                value={ fields.label }
                                onChange={ handleFieldChange }
                            />
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className={classes.fullWidth}
                                variant="contained"
                                color="primary"
                            >
                                <b>Save</b>
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default AddIpAddressComponent;