import { action } from "easy-peasy";

const globalState = {
    // state
    username: "",

    // actions
    setUsername: action((state, payload) => {
        state.username = payload;
    })
};

export default globalState;