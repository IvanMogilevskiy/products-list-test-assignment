import { Toolbar, Typography, Grid } from '@mui/material';
import styles from './header.module.scss';

type Props = {
  pageName: string;
};

const Header = ({pageName}: Props) => {
  return (
    <header className={styles.header}>
      <Toolbar>
        <Grid container justifyContent="flex-end">
          <Typography align="right" variant="h4" component="h4" color="secondary.black">{pageName}</Typography>
        </Grid>
      </Toolbar>
    </header>
  );
};

export default Header;