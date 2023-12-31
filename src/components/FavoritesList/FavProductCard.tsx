import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import IProduct from '../../models/product-model';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../api/productsApi';
import {
  removeProductFromFavorites,
} from '../../store/reducers/productReducer';
import styles from './favorites.module.scss';

type Props = {
  product: IProduct;
  style?: React.CSSProperties;
};

const FavProductCard = ({product, style}: Props) => {
  const dispatch = useAppDispatch();

  const image = (
    <img
      className={styles.favoriteImg}
      src={`${baseUrl}${product?.src}`}
      alt={product?.name}
    />
  );

  return (
    <div className={styles.favoritesItem} style={style}>
      <Link
        to={`/product-details/${product?.id}`}
        className={styles.productImage}
      >
        {image}
      </Link>
      <CardContent className={styles.favoritesDescription}>
        <Link
          to={`/product-details/${product?.id}`}
          style={{textDecoration: 'none', color: '#414141'}}
        >
          <Typography className={styles.favoritesName}>
            {product?.name}
          </Typography>
        </Link>
        <div className={styles.details}>
          <Typography
            color="text.secondary"
            className={styles.favoritesPrice}
            gutterBottom
          >
            ${product?.price}
          </Typography>
          <svg
            onClick={() =>
              dispatch(removeProductFromFavorites(product.id))
            }
            className={styles.favoritesButton}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2.5"
              y="2.5"
              width="25"
              height="25"
              rx="7"
              fill="#414141"
            />
            <path
              d="M5.625 1.875C4.63044 1.875 3.67661 2.27009 2.97335 2.97335C2.27009 3.67661 1.875 4.63044 1.875 5.625V24.375C1.875 25.3696 2.27009 26.3234 2.97335 27.0266C3.67661 27.7299 4.63044 28.125 5.625 28.125H24.375C25.3696 28.125 26.3234 27.7299 27.0266 27.0266C27.7299 26.3234 28.125 25.3696 28.125 24.375V5.625C28.125 4.63044 27.7299 3.67661 27.0266 2.97335C26.3234 2.27009 25.3696 1.875 24.375 1.875H5.625ZM15 10.8188C15 10.8188 16.3219 8.78438 18.0375 8.48438C22.2937 7.74375 24.0469 11.4656 23.3344 14.2313C22.0687 19.1719 15 23.4844 15 23.4844C15 23.4844 7.93125 19.1719 6.66563 14.2406C5.9625 11.475 7.71562 7.74375 11.9625 8.49375C13.6781 8.79375 15 10.8188 15 10.8188Z"
              fill="#FFCC26"
            />
          </svg>
        </div>
      </CardContent>
    </div>
  );
};

export default FavProductCard;