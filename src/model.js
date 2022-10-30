import { action } from "easy-peasy";

const globalState = {
    // state
    stack: [],
    filterStack: [],
    stackStats: null,
    githubDataLoaded: false,
    
    // actions
    setStack: action((state, payload) => {
        state.stack = payload;
    }),
    setFilterStack: action((state, payload) => {
        state.filterStack = payload;
    }),
    setStackStats: action((state, payload) => {
        state.stackStats = payload;
    }),
    setGithubDataLoaded: action((state, payload) => {
        state.githubDataLoaded = payload;
    }),
};

export default globalState;