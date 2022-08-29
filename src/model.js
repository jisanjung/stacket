import { action } from "easy-peasy";

const globalState = {
    // state
    stack: [],
    stackStats: null,
    octokitLoading: false,
    
    // actions
    setStack: action((state, payload) => {
        state.stack = payload;
    }),
    setStackStats: action((state, payload) => {
        state.stackStats = payload;
    }),
    setOctokitLoading: action((state, payload) => {
        state.octokitLoading = payload;
    }),
};

export default globalState;