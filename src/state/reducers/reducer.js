import * as scraped from '../data'

const initState = {
    internshipData : scraped
};

const rootReducer = (state = initState.internshipData.default , action) =>{
console.log("Root Reducer Triggered");
    switch (action.type) {
        case 'read_data': console.log("Read Data Triggered"); return state;
        case 'sort_data': console.log("Sort Data Triggered");
            state.sort((a,b) => {if(a.maxStipend > b.maxStipend){return 1} else  return -1});
            return state;

        default: return state;
    }
};

export default rootReducer;
