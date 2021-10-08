import { AddToSearchResult, RemoveSearchResult } from "../redux/action/action";
import * as Request from "../axiosRequest/request";

const Helper = {
    CountNumber: (arrNumber: any) => {
        const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue;
        let result = String(arrNumber.reduce(reducer)).split("").reverse();
        if(result.length > 3) {
            result.splice(3, 0, ",");
        }
        if(result.length > 7) {
            result.splice(7, 0, ",");
        }
        result.reverse();
        return result;
    },
    UpdateSearchResult: async(dispatch: any, key: any, callback?: any) => {
        await Request.GetData(`${process.env.REACT_APP_SERVER_URL}/api/search${key}`)
        .then((result: any) => {
            dispatch(RemoveSearchResult());
            result.forEach((element: any) => {
                dispatch(AddToSearchResult(element))
            })
            localStorage.setItem("searchResult", JSON.stringify(result));
        }).then(callback)
        .catch((err: any) =>{console.log(err)});
    },
    saveToLocalStorage: (key:string, element: any) => {
        const getWishListInLocal = JSON.parse(String(localStorage.getItem(key)));
        if (getWishListInLocal !== null) {
            if (getWishListInLocal.length > 0) {
                localStorage.setItem(key, JSON.stringify([...getWishListInLocal, element]));
            } else {
                localStorage.setItem(key, JSON.stringify([getWishListInLocal, element]));
            }
        } else {
            localStorage.setItem(key, JSON.stringify(element));
        }
    },
    removeFromLocalStorage: (key: string, element: any) => {
        const getWishListInLocal = JSON.parse(String(localStorage.getItem(key)));
        if (getWishListInLocal !== null) {
            if (getWishListInLocal.length > 1) {
                const filterWishList = getWishListInLocal.filter((item: any) => item.productId !== element.productId && item.modelId !== element.modelId);
                localStorage.setItem(key, JSON.stringify(filterWishList));
                console.log("removed...");
            } else {
                localStorage.removeItem(key);
                console.log("deleted...");
            }
        }
    },
    searchToObject: () => {
        var pairs = window.location.search.substring(1).split("&"),
            obj: any = {},
            pair,
            i;
        for (i in pairs) {
            if (pairs[i] === "") continue;

            pair = pairs[i].split("=");
            obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return obj;
    }
}

export default Helper