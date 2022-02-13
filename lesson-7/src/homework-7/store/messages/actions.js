import { BOT_AUTOR } from "../../constants/authors";
import { createMessage } from "../../helpers";

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGES_BY_CHAT_ID = 'REMOVE_MESSAGES_BY_CHAT_TO'

export const addMessage = (message, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message,
        chatId,
    },
})

export const removeMessagesByChatID = (chatId) => ({
    type: REMOVE_MESSAGES_BY_CHAT_ID,
    payload: chatId
})
export const sendMessageWithThunk = (autor, text, chatId) => (displatch) => {
    const userMessage = createMessage(autor, text)
    displatch(addMessage(userMessage, chatId));

    if (autor === BOT_AUTOR) {
        return;
    }
    const botMessage = createMessage(BOT_AUTOR, 'hello')

    displatch(addMessage(botMessage, chatId));
}