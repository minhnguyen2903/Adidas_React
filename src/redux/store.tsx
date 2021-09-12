import { createStore } from "redux";
import Reducers from "./reducer";

const Store = createStore(Reducers,{});

export default Store;