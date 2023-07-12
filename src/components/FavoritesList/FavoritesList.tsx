import { useSelector } from 'react-redux';
import { selectFavorites } from '../../store/selectors/productsSelectors';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import styles from './favorites.module.scss';
import FavProductCard from './FavProductCard';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={styles.favoritesContainer}>
      <p className={styles.favoritesTitle}>Favorites</p>
      <AutoSizer>
        {({height, width}: any) => (
          <FixedSizeList
            className={styles.favoritesList}
            height={height}
            width={width}
            itemSize={130}
            itemCount={favorites.length}
          >
            {({index, style}) => (
              <FavProductCard
                style={style}
                product={favorites[index]}
              />
            )}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};

export default FavoritesList;