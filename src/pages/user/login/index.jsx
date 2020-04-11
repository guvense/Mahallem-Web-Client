import { Alert, Checkbox } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, connect } from 'umi';
import LoginFrom from './components/Login';
import styles from './style.less';

const { Tab, UserName, Password, Submit } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userLogin = {}, submitting } = props;
  const { status } = userLogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [first, setIt] = useState(false);

  const handleSubmit = (values) => {
    setIt(true);
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values },
    });
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey="account" onSubmit={handleSubmit}>
        <Tab key="account">
          {status == false && first && <LoginMessage content="Yanlış hesap veya şifre" />}

          <UserName
            name="userName"
            placeholder="username"
            rules={[
              {
                required: true,
                message: 'username gerekli',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="password"
            rules={[
              {
                required: true,
                message: 'şifre gerekli',
              },
            ]}
          />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
            Otomatik Giriş
          </Checkbox>
          <a
            style={{
              float: 'right',
            }}
          >
            Şifremi unuttum
          </a>
        </div>
        <Submit loading={submitting}>Giriş Yap</Submit>
      </LoginFrom>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
