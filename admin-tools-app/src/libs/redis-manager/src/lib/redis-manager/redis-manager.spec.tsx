import { render } from '@testing-library/react';

import RedisManager from './redis-manager';

describe('RedisManager', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedisManager />);
    expect(baseElement).toBeTruthy();
  });
});
