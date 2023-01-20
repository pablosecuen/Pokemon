import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../Reducer/Reducer";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composer(applyMiddleware(thunk)));

//thunk middleware nos permite hacer request asyncrinas desde las actions creators
//el composer no se que es pero hoy lo investigo

export default store;
