import { useState, useRef, use } from "@react";
import propTypes from "prop-types";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import { useEffect } from "react";
import { iconButtonClasses } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: theme.spacing(1)
    },
    input: {
        flexGrow: 1
    }
}));

export const MessageInput = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState("");

    const inputRef = useRef(null);

    const resetForm = () => {
        setValue("");
    };

    const onSubmitMessage = (event) => {
        event.preventDefault();
        props.onSend(value);
        resetForm();
    };

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <Paper
            className={classes.paper}
            component={onSubmitMessage}
        >
            <InputBase
                inputRef={inputRef}
                className={classes.input}
                onChange={onChahgeMessageInput}
                placeholder={props.placeholder}
                value={value}
                type="text"
            />
            <IconButton type="submit">
                <Send />
            </IconButton>
        </Paper>
    );
};

MessageInput.propTypes = {
    onSend: propTypes.func,
    placeholder: propTypes.string
};

MessageInput.defaultProps = {
    placeholder: "type message"
};




