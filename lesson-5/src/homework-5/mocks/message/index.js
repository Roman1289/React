import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { MessageInput } from "../../components/MessageInput";
import { messageList } from "../../components/MessageList"
import { CHATS } from "../chats/chats";

export const Message = () => {
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState([]);

    const sendMessage = (autor, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            autor,
            text
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
        if (tail.autor === "bot") {
            return;
        }
        sendMessage("bot", "hello");

    }, [messageList]);

    if (!CHATS.find(({ id }) => id === chatId)) {
        return <Redirect to="/chats" />;
    }
    return (
        <>
            <messageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
        </>


    );
};