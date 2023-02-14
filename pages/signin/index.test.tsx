import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import context from 'jest-plugin-context';
import React from 'react';
import { PASSWORD_REG } from '@/constants/RegularExpression';
import SignIn from '@/pages/signin/index';

/**
 * 로그인
 * 1. 이메일 입력일 때
 *   1-1. 이메일이 유효할 때.
 *    - 이메일 validation 값이 true
 *   1-2. 이메일이 유효하지  때.
 *    - 이메일 유효성 에러 메시지 표시
 * 2. 패스워드 입력알 때
 *    2-1. 패스워드가 유효할 때
 *      - 패스워드 validation 값이 true
 *    2-2. 패스워드가 유효하지 않을 때
 *      - 패스워드 validtaion 값이 false
 *      - 패스워드 유효성 에러 메시지 표시
 * 3. 로그인 버튼 클릭할 때
 *   3-1. 이메일과 패스워드 모두 유효할 때
 *    - 로그인에 성공한다.
 *   3-2. 이메일과 패스워드 유효하지 않을 때
 *    - 로그인에 실패한다. 실패 메시지를 보여준다.
 * 4. 회원가입 버튼 클릭할 때
 *  - 회원가입 페이지로 이동한다.
 */

describe('signin', () => {
  context('1. 이메일을 입력일 때', () => {
    context('1-1. 이메일이 유효할 때', () => {
      it('이메일 validation 값이 true인가', async () => {
        // const setStateMock = jest.fn();
        // const useStateMock: any = (initialState: any) => [initialState, setStateMock];
        // jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        render(<SignIn />);
        const emailInput = screen.getByLabelText('이메일');
        await userEvent.type(emailInput, 'abc@email.com');

        // const { value } = emailInput as HTMLInputElement;
        // expect(setStateMock).toHaveBeenCalledWith('abc@email.com');
      });
    });

    // context('1-2. 이메일이 유효하지 때', () => {
    //   it('이메일 validation 값이 false인가', () => {})
    //   it('이메일 유효성 에러 메시지가 표시되는가', () => {}),
    // })
  });
  context('2. 패스워드 입력일 때', () => {
    context('2-1. 패스워드가 유효할 때', () => {
      it('패스워드가 유효하다', () => {
        render(<SignIn />);
        const passwordInput = screen.getByLabelText('비밀번호');

        // await userEvent.type(passwordInput, '1q2w3e4r!Q');
        fireEvent.change(passwordInput, { target: { value: '1q2w3e4r!Q' } });
        console.log((passwordInput as HTMLInputElement).value);

        expect((passwordInput as HTMLInputElement).value).toMatch(PASSWORD_REG);
      });
    });
    context('2-2. 패스워드가 유효하지 않을 때', () => {
      it('패스워드가 유효하지 않다', () => {
        // expect() 패스워드 유효성 여부값 false, 패스워드 입력여부 값 true
        // expect() 패스워드 에러 메시지 표시
        render(<SignIn />);

        const passwordInput = screen.getByLabelText('비밀번호');
        fireEvent.change(passwordInput, { target: { value: '1q!Q' } });
        // userEvent.type(passwordInput, '1q!Q');

        expect((passwordInput as HTMLInputElement).value).not.toMatch(PASSWORD_REG);
        expect('비밀번호 형식에 맞게 입력해주세요.').toBeInTheDocument();
      });
    });
  });
  context('3. 로그인 버튼 클릭할 때', () => {
    context(' 3-1. 이메일과 패스워드 모두 유효할 때', () => {
      it('로그인에 성공한다.', () => {});
    });
    context('3-2. 이메일과 패스워드 유효하지 않을 때', () => {
      it('로그인에 실패한다. 실패 메시지를 보여준다.', async () => {
        // render(<SignIn />);
        // const submitButton = screen.getByText('제출');
        // await userEvent.click();
        // expect('');
      });
    });
  });

  context('4. 회원가입 버튼 클릭', () => {
    it('4-1. 회원가입 패이지로 이동한다', () => {
      // expect() 페이지 이동
      //  const Wrapper = render(<SignIn />);
      //  expect(Wrapper.find('#signup').toContain('signup'))
      const SignUpButton = screen.getByRole('button', { name: '' });
      userEvent.click(SignUpButton);
    });
  });
});
