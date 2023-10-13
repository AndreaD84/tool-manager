import styles from './search-bar.module.scss';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/* eslint-disable-next-line */
export interface SearchBarProps { }

export function SearchBar(props: SearchBarProps) {

  const onRedisInstanceChange = (event: any) => {
    console.log('selected redis instance');
    console.log(event.target.value);
  }

  const onSeachClick = () => {
    console.log('search');
  }

  return (
    <Grid container>
      <Grid xs={6}>
        <TextField id="redis-key-text" label="Search your Redis Key" variant="outlined" fullWidth />
      </Grid>
      <Grid xs={1} textAlign={'center'}>
        <strong>
          <span>INTO</span>
        </strong>
      </Grid>
      <Grid xs={4} textAlign={'end'}>
        <FormControl fullWidth>
          <InputLabel id="redis-instance-select-label">Redis Instance</InputLabel>
          <Select
            id="redis-instance-select-label"
            value={0}
            label="Redis Instance"
            onChange={(e) => {
              onRedisInstanceChange(e);
            }}
          >
            <MenuItem value={0}>Redis Dev</MenuItem>
            <MenuItem value={1}>Redis UAT</MenuItem>
            <MenuItem value={2}>Redis Prod</MenuItem>
          </Select>
        </FormControl>

      </Grid>
      <Grid xs={1} textAlign={'center'}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onSeachClick}
        >
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
