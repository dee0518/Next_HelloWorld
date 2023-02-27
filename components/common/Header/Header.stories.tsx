import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Header from './Header';

export default {
  title: 'Common/Header',
  conponent: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const MainHeader = Template.bind({});
MainHeader.args = {
  icon: {
    width: 45,
    height: 45,
    src: '',
  },
  color: '#2B2E42',
};

MainHeader.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const constContent = await canvas.getByRole('image');
  await userEvent.click(constContent);
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  icon: {
    width: 45,
    height: 45,
    src: '',
  },
  color: '',
};
