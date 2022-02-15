import { makeStyles } from "@material-ui/core"
import { Route, Switch } from "react-router-dom";
import { ChatList } from "../../components/ChatList";
import { Chats } from "../../mocks/chats";
import { Message } from "../../mocks/message";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const Chats = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <ChatList lisr={CHATS} />
            <div>
                <Switch>
                    <Route component={Message} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};