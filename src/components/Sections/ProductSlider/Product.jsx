import React, { useEffect } from "react";
// import { getDiscount } from '../../../utils/functions';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { addToWishlist, removeFromWishlist } from '../../../actions/wishlistAction';
import { useSnackbar } from 'notistack';

const Product = (props) => {

    // const { _id, name, images, ratings, numOfReviews, price, cuttedPrice } = props;

    // const dispatch = useDispatch();
    // const { enqueueSnackbar } = useSnackbar();

    // const { wishlistItems } = useSelector((state) => state.wishlist);
    
    // const itemInWishlist = wishlistItems.some((i) => i.product === _id);

    // const addToWishlistHandler = () => {
    //     if(itemInWishlist) {
    //         dispatch(removeFromWishlist(_id));
    //         enqueueSnackbar("Remove From Wishlist", { variant: "success" });
    //     } else {
    //         dispatch(addToWishlist(_id));
    //         enqueueSnackbar("Added To Wishlist", { variant: "success" });
    //     }
    // }

    return (
        <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
            

        </div>
    );
};

export default Product;
