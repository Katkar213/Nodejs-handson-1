import { configureStore,combineReducers } from "@reduxjs/toolkit";
import Reducers from "./Reducers";

const rootreducers=combineReducers({count:Reducers});

const Store=configureStore({
    reducer:rootreducers,
})
export default Store