const SignIn = () => {
  return (
    <form>
      <p id="error" />
      <label htmlFor="email">이메일</label>
      <input id="email" type="email" />
      <label htmlFor="password">비밀번호</label>
      <input id="password" type="password" />
      <button type="button">로그인</button>
    </form>
  );
};

export default SignIn;
