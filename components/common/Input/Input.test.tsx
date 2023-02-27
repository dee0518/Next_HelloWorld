import { composeStories } from '@storybook/testing-react';
import { screen, render } from '@testing-library/react';
import * as stories from './Input.stories';

describe('input', () => {
  const { Default } = composeStories(stories);

  it('input test', async () => {
    render(<Default />);
    const textElement = await screen.findByPlaceholderText('Input Text');
    expect(textElement).toBeInTheDocument();
  });
});
