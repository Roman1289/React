import { useState } from "react";
import { makeStyles } from "@mui/core/styles";
import { ChatList } from "./components/ChatList";
import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColums: "200px 1fr"
    }
});

export const Homework = () => {
    const classes = useStyles();
    const [MessageList, setMessageList] = useState([]);

    const sendMessage = (autor, text) => {
        const sendMessageList = [...messageList];
        const newMessage = {
            autor,
            text,
            id: Date.now(),
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };
    const onSendMessage = (value) => {
        sendMessage("user", value);
    };
    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }
        const tail = messageList[messageList.length - 1];
        if (tail, autor === "bot") {
            return;
        }
        sendMessage("bot", "hello");
    }, [messageList]);

    return (
        <div className={classes.wrapper}>
            <ChatList
                list={[
                    {
                        name: "name",
                        id: "1"
                    },
                    {
                        name: "name",
                        id: "2"
                    },
                    {
                        name: "name",
                        id: "3"
                    },
                    {
                        name: "name",
                        id: "4"
                    }
                ]}
            />
            <div>
                <MessageList messageList={messageList} />
                <MessageInput onSend={onSendMessage} />
            </div>
        </div>
    );
};