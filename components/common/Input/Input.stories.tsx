import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within, fireEvent } from '@storybook/testing-library';
import Input from './Input';

export default {
  title: 'Common/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
    uiType: {
      options: ['default', 'whiteLine', 'chat', 'search'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = arg => <Input {...arg} />;

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  uiType: 'default',
  placeholder: 'plaecholder',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // await userEvent.type(canvas.getByRole('textbox'), 'michael@chromatic.com');
  // await expect(canvas.findByDisplayValue('michael@chromatic.com')).toBeInTheDocument();

  fireEvent.change(canvas.getByRole('textbox'), { target: { value: 'michael@chromatic.com' } });
  expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('michael@chromatic.com');
};

export const WhiteLine = Template.bind({});

WhiteLine.args = {
  type: 'text',
  value: '',
  uiType: 'whiteLine',
  placeholder: '이메일',
};

export const Chat = Template.bind({});

Chat.args = {
  type: 'text',
  value: '',
  uiType: 'chat',
};

export const Search = Template.bind({});

Search.args = {
  type: 'text',
  value: '',
  uiType: 'search',
  placeholder: '장소를 검색하세요.',
};
