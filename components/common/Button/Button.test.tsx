import { composeStories } from '@storybook/testing-react';
import { screen, render } from '@testing-library/react';
import * as stories from './Button.stories';

describe('Button', () => {
  it('test', () => {
    const { Base } = composeStories(stories);

    render(<Base />);

    const Button = screen.getByRole('button');

    expect(Button).toHaveTextContent('test');
  });
});
