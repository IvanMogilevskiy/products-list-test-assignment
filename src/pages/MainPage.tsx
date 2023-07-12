import { Header, FavoritesList, ProductsList } from '../components';
import { Grid } from '@mui/material';

const MainPage = () => {
  return (
    <>
      <Header pageName="Product list page" />
      <main>
        <div className="container">
          <Grid height="100vh" container>
            <Grid item xs={4}>
              <FavoritesList />
            </Grid>
            <Grid item xs={8}>
              <ProductsList />
            </Grid>
          </Grid>
          {/*<FavoritesList />*/}
          {/*<ProductsList />*/}
        </div>
      </main>
    </>
  );
};

export default MainPage;