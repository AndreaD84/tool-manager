import RedisKeyItem from '../redis-key-item/redis-key-item';
import styles from './redis-keys-list.module.scss';
import { RedisKeyRecord } from 'dataaccess';


/* eslint-disable-next-line */
export interface RedisKeysListProps { }

export function RedisKeysList(props: RedisKeysListProps) {

  var records = [
    {
      key: '1',
      content: '{"id":1, "name":"pippo"}',
      expirationDate: "01/02/2023"
    } as RedisKeyRecord,
    {
      key: '2',
      content: '{"id":2, "name":"pluto"}',
      expirationDate: "01/10/2023"
    } as RedisKeyRecord
  ];


  return (
    <div className={styles['list-container']}>
      <ul>
        {records.map((record) => {
          return(<li>
            <RedisKeyItem redisItem={record} />
          </li>)
        })}
        
      </ul>
    </div>
  );
}

export default RedisKeysList;
