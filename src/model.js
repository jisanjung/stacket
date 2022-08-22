import { action } from "easy-peasy";

const globalState = {
    // state
    stack: [],

    setStack: action((state, payload) => {
        state.stack = payload;
    }),
};

export default globalState;