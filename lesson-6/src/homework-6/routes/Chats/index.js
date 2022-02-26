import { useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDisplatch } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/ChatList";
import { Message } from "../Message";
import { getChatList } from "../../store/chats/selectors";
import { createChat, removeChat, setChats } from "../../store/chats/actions";
import { nanoid } from "nanoid";
import { CHATS } from "../../mocks/chats";
import { removeMessageByChatID } from "../../store/messages/actions";
import { grid } from "@mui/system";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1 fr"
    }
});
export const Chats = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();
    const classes = useStyles();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(),
            name: 'chatName'
        }))
    }, []);

    const onDelete = (chatId) => {
        dispatch(removeChat(chatId))
        dispatch(removeMessageByChatID(chatId))
    }

    useEffect(() => {
        dispatch(setChats(CHATS))
    }, [])

    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDelete} list={chats} />
                <Button onClick={onCreate}>Create chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Message} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};