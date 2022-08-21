import { action } from "easy-peasy";

const globalState = {
    // state
    username: "",
    stack: [],

    // actions
    setUsername: action((state, payload) => {
        state.username = payload;
    }),
    setStack: action((state, payload) => {
        state.stack = payload;
    }),
};

export default globalState;