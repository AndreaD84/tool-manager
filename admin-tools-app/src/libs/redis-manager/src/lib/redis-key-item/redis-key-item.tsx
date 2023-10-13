import { Card, Grid, IconButton, ListItem } from '@mui/material';
import styles from './redis-key-item.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';

/* eslint-disable-next-line */
export interface RedisKeyItemProps {
  keyId: string;
}

export function RedisKeyItem(props: RedisKeyItemProps) {

  const onDeleteRedisKey = (keyId: string) => {
    console.log('Delete Key');
  };

  const onPreviewRedisKey = () => {
    console.log('see content');
  }


  return (
    <Card variant='outlined' key={props.keyId}>
      <Grid container spacing={2}>
        <Grid item xs={6} >
          <div className={styles['text-content']}>
            <strong>
              Key Name:
            </strong>
            Name of the redis Key
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles['text-content']}>
            <strong>
              Expiration Date:
            </strong>
            29/03/2024 16:00
          </div>
        </Grid>
        <Grid item xs={2} textAlign={'end'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onPreviewRedisKey}
          >
            <PreviewIcon></PreviewIcon>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              onDeleteRedisKey(props.keyId);
            }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>

        </Grid>
      </Grid>
    </Card>
  );
}

export default RedisKeyItem;
