import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Wrapper.stories';

const { Card, Container, Circle } = composeStories(stories);

describe('Wrapper 렌더링 테스트', () => {
  it('Card 렌더링 테스트', () => {
    render(<Card />);
    const cardWrapper = screen.getByText('hello');
    expect(cardWrapper).not.toBeNull();
  });
});
