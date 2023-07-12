import { useEffect } from 'react';
import { FixedSizeGrid } from 'react-window';
import { useSelector } from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useAppDispatch } from '../../store/store';
import { getAllProductsThunk } from '../../store/reducers/productReducer';
import { selectProducts } from '../../store/selectors/productsSelectors';
import { COLUMN_COUNT, COLUMN_WIDTH, ROW_HEIGHT } from './constants';

import styles from './styles.module.scss';
import ProductInList from './ProductInList';

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);

  const rowCount = products.length / COLUMN_COUNT;

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  return (
    <div style={{width: '100%', height: '95vh'}}>
      <AutoSizer>
        {({height, width}: any) => (
          <FixedSizeGrid
            height={height}
            width={width}
            rowCount={rowCount}
            columnCount={COLUMN_COUNT}
            rowHeight={ROW_HEIGHT}
            columnWidth={COLUMN_WIDTH}
          >
            {({ columnIndex, rowIndex, style}) => (
              <div className={styles.productsInner} style={style}>
                <ProductInList
                  product={
                    products[
                      rowIndex
                        ? rowIndex * COLUMN_COUNT + columnIndex
                        : columnIndex
                      ]
                  }
                />
              </div>
            )}
          </FixedSizeGrid>
        )}
      </AutoSizer>
    </div>
  );
};

export default ProductsList;