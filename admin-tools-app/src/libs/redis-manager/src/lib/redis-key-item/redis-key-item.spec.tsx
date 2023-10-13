import { render } from '@testing-library/react';

import RedisKeyItem from './redis-key-item';

describe('RedisKeyItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedisKeyItem />);
    expect(baseElement).toBeTruthy();
  });
});
