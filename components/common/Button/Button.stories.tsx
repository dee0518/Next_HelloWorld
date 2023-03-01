import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import React from 'react';
import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  color: '#ffffff',
  background: '#464B68',
  children: 'test',
  onClick: () => {
    // alert('test');
  },
};

Base.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button', { name: 'test' }));
  global.alert = jest.fn();
  expect(global.alert).toHaveBeenCalledTimes(0);
};

export const Neon = Template.bind({});

Neon.args = {
  color: '#252525',
  background: '#C5FB6D',
  children: <div>123</div>,
};

export const Disabled = Template.bind({});

Disabled.args = {
  color: '#252525',
  background: '#D9D9D9',
  children: <input />,
};
