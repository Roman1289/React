import { ListItem } from "@material-ui/core"

export const Message = (props) => {
    return (
        <ListItem>
            <ListItemText>
                [{props.autor}]: {props.text}
            </ListItemText>
        </ListItem>
    );
};

Message.propTypes = {
    text: propTypes.string,
    autor: propTypes.string
};