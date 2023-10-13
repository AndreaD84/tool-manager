import { render } from '@testing-library/react';

import RedisKeysList from './redis-keys-list';

describe('RedisKeysList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedisKeysList />);
    expect(baseElement).toBeTruthy();
  });
});
