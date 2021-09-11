import { createStore } from "redux";
import Reducers from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = createStore(Reducers,{},composeWithDevTools());

export default Store;