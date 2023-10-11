import React from 'react'

type LoginSuccessMessage = 'SUCCESS'
type LoginFailMessage = 'FAIL'

interface LoginResponse {
  message: LoginSuccessMessage | LoginFailMessage
  token: string
}

interface UserInfo {
  name: string
}

interface User {
  username: string,
  password: string,
  userInfo: UserInfo
}

const users: User[] = [
  {
    username: 'blue',
    password: '1234',
    userInfo: { name: 'blueStragglr' }
  },
  {
    username: 'white',
    password: '1234',
    userInfo: { name: 'whiteDwarf' }
  },
  {
    username: 'red',
    password: '1234',
    userInfo: { name: 'redGiant' }
  },
]

const _secret: string = '1234qwer!@#$'

const login = async (username: string, password: string): Promise<LoginResponse | null> => {
  // TODO: 올바른 username, password를 입력하면 {message: 'SUCCESS', token: (원하는 문자열)} 를 반환하세요.
  return null
}

const getUserInfo = async (): Promise<{ username: string } | null> => {
  // TODO: login 함수에서 받은 token을 이용해 사용자 정보를 받아오세요.
  return null
}

const LoginWithMockAPI = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: form 에서 username과 password를 받아 login 함수를 호출하세요.
    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) console.log(key, value);
  }

  return (<div>
    <h1>
      Login with Mock API
    </h1>
    <form onSubmit={loginSubmitHandler}>
      <p>Username:</p>
      <input
      name='username'
      type='text'
      placeholder='abcd'
      value={formData.username}
      onChange={handleInput}
      />
      <p>Password:</p>
      <input
      name='password'
      type='password'
      placeholder='******'
      value={formData.password}
      onChange={handleInput}
      />
      <button type='submit'>Submit</button>
    </form>
    <div>
      <h2>
        User info
      </h2>
      {/* TODO: 유저 정보를 보여주도록 구현하세요. 필요에 따라 state나 다른 변수를 추가하세요. */}
      {JSON.stringify({username: 'blueStragglr'})}
    </div>
  </div>)
}

export default LoginWithMockAPI
