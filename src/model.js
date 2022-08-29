import { action } from "easy-peasy";

const globalState = {
    // state
    stack: [],
    octokitLoading: false,
    
    // actions
    setStack: action((state, payload) => {
        state.stack = payload;
    }),
    setOctokitLoading: action((state, payload) => {
        state.octokitLoading = payload;
    }),
};

export default globalState;