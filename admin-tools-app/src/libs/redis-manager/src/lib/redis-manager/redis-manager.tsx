import { Grid } from '@mui/material';
import styles from './redis-manager.module.scss';
import { SearchBar } from '../search-bar/search-bar'
import { RedisKeysList } from '../redis-keys-list/redis-keys-list';

/* eslint-disable-next-line */
export interface RedisManagerProps {}

export function RedisManager(props: RedisManagerProps) {
  return (
    <Grid container>
      <Grid xs={12}>
        <h2>Redis Manager Tool</h2>
      </Grid>
      <Grid xs={12}>
        <SearchBar />
      </Grid>
      <Grid>
        <div>
          <h3>
            Seach Result:
          </h3>
        </div>
      </Grid>
      <Grid xs={12}>
        <RedisKeysList />
      </Grid>
    </Grid>
  );
}

export default RedisManager;
