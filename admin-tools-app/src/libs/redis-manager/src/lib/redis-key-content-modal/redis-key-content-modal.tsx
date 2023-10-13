import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import styles from './redis-key-content-modal.module.scss';
import { RedisKeyRecord } from 'dataaccess';

/* eslint-disable-next-line */
export interface RedisKeyContentModelProps { 
  openModal: boolean
  redisKeyData: RedisKeyRecord
  onCloseModalCallback: () => void;

}

export function RedisKeyContentModel(props: RedisKeyContentModelProps) {

  const formatJson = (jsonData: string) => {
    const parseJSON = JSON.parse(jsonData);
    return JSON.stringify(parseJSON, undefined, 4);
  }

  return (
    <Dialog open={props.openModal}>
      <DialogTitle>
        Key: {props.redisKeyData.key}
      </DialogTitle>
      <DialogContent>
        <textarea cols={60} rows={24}>{formatJson(props.redisKeyData.content)}</textarea>
      </DialogContent>
      <DialogActions>
          <Button autoFocus onClick={props.onCloseModalCallback}>
            Close
          </Button>
        </DialogActions>
    </Dialog>
  );
}

export default RedisKeyContentModel;
