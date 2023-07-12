import React from 'react';
import { CardContent, Typography } from '@mui/material';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import IProduct from '../../models/product-model';
import { baseUrl } from '../../api/productsApi';
import {
  addProductToFavorites,
  removeProductFromFavorites,
} from '../../store/reducers/productReducer';
import { selectFavorites } from '../../store/selectors/productsSelectors';
import { isProductInList } from '../../utils/productsUtils';
import ReactImageMagnify from 'react-image-magnify';
import styles from './style.module.scss';

type Props = {
  product: IProduct;
  style?: React.CSSProperties;
  zoom?: boolean;
  cardClass?: string;
};

const ProductCard = ({product, style, zoom, cardClass}: Props) => {
  const dispatch = useAppDispatch();
  const favorites = useSelector(selectFavorites);
  const isInFavorites = isProductInList(product, favorites);

  const img = (
    <img
      className={styles.img}
      src={`${baseUrl}${product?.src}`}
      alt={product?.name}
      height={448}
      width={448}
    />
  );
  const Image = zoom ? (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: product?.name,
          isFluidWidth: true,
          src: `${baseUrl}${product?.src}`,
          width: 200,
          height: 200,
        },
        largeImage: {
          src: `${baseUrl}${product?.src}`,
          width: 600,
          height: 600,
        },
        enlargedImageContainerDimensions: {
          width: '140%',
          height: '120%',
        },
        enlargedImageContainerStyle: {
          marginTop: '-10%',
        },
        style: {
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
        },
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: false,
      }}
    />
  ) : (
    img
  );

  return (
    <div className={cx(styles.productContainer, cardClass)} style={style}>
      {Image}
      <CardContent className={styles.productInfo}>
        <Typography className={styles.productName}>
          {product?.name}
        </Typography>
        <div className={styles.description}>
          <Typography
            className={styles.productPrice}
          >
            ${product?.price}
          </Typography>
          <div className={styles.productBtn}>
            <svg
              onClick={() =>
                isInFavorites
                  ? dispatch(removeProductFromFavorites(product.id))
                  : dispatch(addProductToFavorites(product))
              }
              width="98"
              height="98"
              viewBox="0 0 98 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8.16669"
                y="8.16663"
                width="81.6667"
                height="81.6667"
                rx="7"
                fill={isInFavorites ? '#414141' : '#ffff'}
              />
              <path
                d="M18.375 6.125C15.1261 6.125 12.0103 7.41562 9.71294 9.71294C7.41562 12.0103 6.125 15.1261 6.125 18.375V79.625C6.125 82.8739 7.41562 85.9897 9.71294 88.2871C12.0103 90.5844 15.1261 91.875 18.375 91.875H79.625C82.8739 91.875 85.9897 90.5844 88.2871 88.2871C90.5844 85.9897 91.875 82.8739 91.875 79.625V18.375C91.875 15.1261 90.5844 12.0103 88.2871 9.71294C85.9897 7.41562 82.8739 6.125 79.625 6.125H18.375ZM49 35.3412C49 35.3412 53.3181 28.6956 58.9225 27.7156C72.8262 25.2963 78.5531 37.4544 76.2256 46.4888C72.0912 62.6281 49 76.7156 49 76.7156C49 76.7156 25.9088 62.6281 21.7744 46.5194C19.4775 37.485 25.2044 25.2963 39.0775 27.7463C44.6819 28.7263 49 35.3412 49 35.3412Z"
                fill="#FFCC26"
              />
            </svg>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default ProductCard;