import { ActionType } from "../containt/actionType"

export const GetAllProduct = (products:any) => {
    return {
        type: ActionType.GET_ALL_PRODUCT,
        payload: products,
    }
}

export const AddToWishList = (product:any) => {
    if(product) {
        return {
            type: ActionType.ADD_TO_WISH_LIST,
            payload: product,
        }
    }
}

export const RemoveFromWishList = (product:any) => {
    return {
        type: ActionType.REMOVE_FROM_WISH_LIST,
        payload: product
    }
}

export const RemoveAllWishList = () => {
    return {
        type: ActionType.REMOVE_ALL_WISHLIST
    }
}

export const AddProductDetail = (product:any) => {
    return {
        type: ActionType.PRODUCT_DETAIL,
        payload: product
    }
}

export const AddToCart = (product: any) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: product
    }
}

export const RemoveFromCart = (product:any) => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload: product
    }
}

export const RemoveAllCart = () => {
    return {
        type: ActionType.REMOVE_ALL_CART
    }
}

export const AddToSearchResult = (product:any) => {
    return {
        type: ActionType.SEARCH_RESULT,
        payload: product
    }
}

export const RemoveSearchResult = () => {
    return {
        type: ActionType.REMOVE_SEARCH_RESULT
    }
}

export const PrevPath = (path:any) => {
    return {
        type: ActionType.PREV_PATH,
        payload: path
    }
}

export const SignIn = (isSign:any) => {
    return {
        type: ActionType.SIGN_IN,
        payload: isSign
    }
}