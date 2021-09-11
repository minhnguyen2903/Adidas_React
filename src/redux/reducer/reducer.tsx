import { ActionType } from "../containt/actionType";

const InitialState = {
    products: []
}

export const ProductReducer = (state:any = InitialState, action:any) => {
    switch(action.type) {
        case ActionType.GET_ALL_PRODUCT:
            return {...state, products: action.payload};
        default:
            return state;
    }
}

export const WishListReducer = (state:any = InitialState, action:any) => {
    switch(action.type) {
        case ActionType.ADD_TO_WISH_LIST:
            return {...state, products: [...state.products, action.payload]};
        case ActionType.REMOVE_FROM_WISH_LIST:
            return {...state, products: state.products.filter((item:any) => item !== action.payload)};
        case ActionType.REMOVE_ALL_WISHLIST:
            return {...state, products: []}
        default:
            return state;
    }
}

export const ProductDetailReducer = (state:any = InitialState, action:any) => {
    switch(action.type) {
        case ActionType.PRODUCT_DETAIL:
            return {...state, products: action.payload};
        default:
            return state;
    }
}

export const CartReducer = (state:any = InitialState, action:any) => {
    switch(action.type) {
        case ActionType.ADD_TO_CART:
            return {...state, products: [...state.products, action.payload]};
        case ActionType.REMOVE_FROM_CART:
            return {...state, products: state.products.filter((item:any) => item !== action.payload)};
        case ActionType.REMOVE_ALL_CART:
            return {...state, products: []}
        default:
            return state;
    }
}

export const SearchResultReducer = (state:any = InitialState, action:any) => {
    switch(action.type) {
        case ActionType.SEARCH_RESULT:
            return {...state, products: [...state.products, action.payload]};
        case ActionType.REMOVE_SEARCH_RESULT:
            return {...state, products: []}
        default:
            return state;
    }
}

export const PrevPathReducer = (state:any = "", action: any) => {
    switch(action.type) {
        case ActionType.PREV_PATH:
            return {...state, path: action.payload};
        default:
            return state;
    }
}

export const SignInReducer = (state:any = false, action: any) => {
    switch(action.type) {
        case ActionType.SIGN_IN:
            return {...state, signIn: action.payload};
        default:
            return state
    }
}