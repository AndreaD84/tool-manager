import { render } from '@testing-library/react';

import RedisKeyContentModal from './redis-key-content-modal';

describe('RedisKeyContentModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedisKeyContentModal />);
    expect(baseElement).toBeTruthy();
  });
});
