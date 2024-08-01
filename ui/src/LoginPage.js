import { Button } from 'primereact/button';
import './LoginPage.css';
import authenticate from './Auth';
import { useState, useContext } from 'react';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from './App';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const register = async () => {
    const status = await authenticate(username, password, 'create');
    handleResponse(status);
  };

  const login = async () => {
    const status = await authenticate(username, password, 'login');
    handleResponse(status);
  };

  const handleResponse = (res) => {
    if (res.token) {
      Cookies.set('auth_token', res.token);
      setAuth(true);
      navigate('/home');
    } else {
      setMessage(res.message);
      setVisible(true);
    }
  };

  return (
    <div className="card">
      <div className="flex-container flex-column align-items-center justify-content-center gap-3 py-5">
        <h1>Login</h1>
        <input className="userName" maxLength="30" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        <input className="passWord" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <input className='rememberMe' type="checkbox" />Remember Me <br />
        <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto" onClick={login}></Button> <br />
        <Button label="Sign Up" icon="pi pi-user" className="w-10rem mx-auto" onClick={register} severity="success"></Button>
        <Dialog header="Error" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
          <p className="m-0">
            {message}
          </p>
        </Dialog>
      </div>
    </div>
  );
};

export default LoginPage;