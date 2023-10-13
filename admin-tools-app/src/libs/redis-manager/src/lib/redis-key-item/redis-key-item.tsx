import React from 'react';
import { Card, Grid, IconButton, ListItem } from '@mui/material';
import styles from './redis-key-item.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import RedisKeyContentModel from '../redis-key-content-modal/redis-key-content-modal';
import { RedisKeyRecord } from 'dataaccess';


/* eslint-disable-next-line */
export interface RedisKeyItemProps {
  redisItem: RedisKeyRecord;
}

export function RedisKeyItem(props: RedisKeyItemProps) {

  const [openModal, setOpenModal] = React.useState(false);

  const onDeleteRedisKey = (keyId: string) => {
    console.log('Delete Key');
  };

  const onPreviewRedisKey = () => {
    setOpenModal(true);
  }

  const onCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Card variant='outlined' key={props.redisItem.key}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <div className={styles['text-content']}>
              <strong>
                Key Name:
              </strong>
              {props.redisItem.key}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={styles['text-content']}>
              <strong>
                Expiration Date:
              </strong>
              {props.redisItem.expirationDate}
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
                onDeleteRedisKey(props.redisItem.key);
              }}
            >
              <DeleteIcon></DeleteIcon>
            </IconButton>

          </Grid>
        </Grid>
      </Card>
      <RedisKeyContentModel
        onCloseModalCallback={onCloseModal}
        redisKeyData={props.redisItem}
        openModal={openModal}
      />
    </>
  );
}

export default RedisKeyItem;
