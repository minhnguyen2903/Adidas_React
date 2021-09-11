import { Icon } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helper from "../../helper/helper";
import { AddToWishList, RemoveAllWishList } from "../../redux/action/action";

export const Favorite = (props: any) => {
    const wishListProducts = useSelector(
        (state: any) => state.wishList.products
    );
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    const checkInWishList = () => {
        const check = wishListProducts.filter(
            (item: any) => item.productId === props.state.productId
        );
        if (check.length > 0) {
            return true;
        } else {
            return false;
        }
    };

    const favoriteChange = () => {
        setIsFavorite(!isFavorite);
        if (!checkInWishList()) {
            dispatch(AddToWishList(props.state));
            Helper.saveToLocalStorage("wishList", props.state);
        } else {
            Helper.removeFromLocalStorage("wishList", props.state);
            const getFromLocalStorage = JSON.parse(
                String(localStorage.getItem("wishList"))
            );
            dispatch(RemoveAllWishList());
            if (getFromLocalStorage !== null) {
                if (getFromLocalStorage.length > 0) {
                    getFromLocalStorage.forEach((element: any) => {
                        dispatch(AddToWishList(element));
                    });
                } else {
                    dispatch(AddToWishList(getFromLocalStorage));
                }
            }
        }
    };

    useEffect(() => {
        if (checkInWishList()) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [isFavorite]);

    return (
        <div
            className="favorite d-flex align-items-center justify-content-center cursor-pointer"
            onClick={() => {
                favoriteChange();
            }}
        >
            {isFavorite ? (
                <Icon style={props.style}>favorite</Icon>
            ) : (
                <Icon style={props.style}>favorite_border</Icon>
            )}
        </div>
    );
};
