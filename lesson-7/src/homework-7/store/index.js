import { createStore, conbineReducers, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persisReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { profileReducer } from "./profile/reducer";
import { messageReducer } from "./messages/reducer";
import { chatsReducer } from "./chats/reducer";
import { animalReduser } from "./animals";

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    animals: animalReduser,
    profile: profileReducer,
    messages: messageReducer,
    chats: chatsReducer,
})

const persisReducer = persisReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persisReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)
