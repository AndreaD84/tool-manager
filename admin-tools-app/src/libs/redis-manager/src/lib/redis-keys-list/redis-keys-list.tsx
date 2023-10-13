import RedisKeyItem from '../redis-key-item/redis-key-item';
import styles from './redis-keys-list.module.scss';

/* eslint-disable-next-line */
export interface RedisKeysListProps { }

export function RedisKeysList(props: RedisKeysListProps) {
  return (
    <div className={styles['list-container']}>
      <ul>
        <li>
          <RedisKeyItem keyId='1' />
        </li>
        <li>
          <RedisKeyItem keyId='1' />
        </li>
        <li>
          <RedisKeyItem keyId='1' />
        </li>
        <li>
          <RedisKeyItem keyId='1' />
        </li>
      </ul>
    </div>
  );
}

export default RedisKeysList;
