import { useState, useEffect } from "react";

export const LoginForm = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");

    const sendMessage = (autor, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            autor,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };
    const resetForm = () => {
        setValue("");
    };
    const onSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage("user", value);
        resetForm();
    };
    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmitMessage}>
                <input
                    onChange={onChangeMessageInput}
                    placeholder="type message"
                    value={value}
                    type="text"
                />
                <button>send</button>
            </form>

        </div>
    );
};
