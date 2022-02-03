import propTypes from "prop-types";
import { List } from "@material-ui/core";

import { Message } from "./Message";

export const MessageList = (props) => {
    return (
        <List>
            {props.MessageList.map((item) => (
                <Message key={item.id} {...item} />
            ))}
        </List>
    );
};

MessageList.propTypes = {
    messageList: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            text: propTypes.string,
            autor: propTypes.string

        })
    )
};

MessageListdefaultProps = {
    messageList: []
};
