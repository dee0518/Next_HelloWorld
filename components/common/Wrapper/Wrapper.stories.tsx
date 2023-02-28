import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import theme from '../../../styles/theme';
import Wrapper from './Wrapper';

export default {
  title: 'Common/Wrapper',
  component: Wrapper,
  argTypes: {},
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = args => <Wrapper {...args} />;

export const Card = Template.bind({});
Card.args = {
  uiType: 'card',
  width: '200px',
  height: '80px',
  background: theme.black,
  hasBoxShadow: true,
  children: <div>Hello</div>,
};

export const Container = Template.bind({});
Container.args = {
  uiType: 'container',
  width: '200px',
  height: '80px',
  hasBoxShadow: true,
  children: 'hello',
};
export const Circle = Template.bind({});
Circle.args = {
  uiType: 'circle',
  width: '80px',
  height: '80px',
  hasBoxShadow: true,
  children: 'hello',
};
