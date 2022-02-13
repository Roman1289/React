import { createStore } from "@reduxjs/toolkit";
import { profileReducer } from './profile/reducer';

export const store = createStore(profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);