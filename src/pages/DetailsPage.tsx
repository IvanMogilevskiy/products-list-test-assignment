import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { FavoritesList, Header, ProductCard } from '../components';
import IProduct from '../models/product-model';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/productsApi';

const DetailsPage = () => {
  const [product, setProduct] = useState<null | IProduct>(null);
  const {id} = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProduct(id as string);
      setProduct(data.data);
    })();
  }, [id]);

  return (
    <>
      <Header pageName="Product page" />
      <main>
        <div>
          <Grid minHeight="100vh" container spacing={10}>
            <Grid item xs={4}>
              <FavoritesList />
            </Grid>
            <Grid item xs={8}>
              {product && (
                <div>
                  <ProductCard zoom product={product} />
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
};

export default DetailsPage;