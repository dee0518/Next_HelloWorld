import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SignIn from './index';

export default {
  title: 'Page/SignIn',
  component: SignIn,
  argTypes: {},
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = () => <SignIn />;

export const SignInBox = Template.bind({});

SignInBox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByLabelText('이메일'), 'abcemail.com', { delay: 100 });
  await userEvent.type(canvas.getByLabelText('비밀번호'), '12ㅣㅑ더ㅣㅑㅁ너이ㅑㅁㄴ', { delay: 100 });

  expect(canvas.getByText('아이디 형식에 맞게 입력해주세요.')).toBeInTheDocument();

  await userEvent.clear(canvas.getByLabelText('이메일'));
  await userEvent.type(canvas.getByLabelText('이메일'), 'abc@email.com', { delay: 100 });

  expect(canvas.queryByText('아이디 형식에 맞게 입력해주세요.')).toBeNull();
};
