import { Button } from 'primereact/button';
import './LoginPage.css';
import authenticate from './Auth';
import { useState, useContext, useEffect } from 'react';
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
  const [checked, setChecked] = useState(false);
  
  const alert = (msg) => {
    setMessage(msg);
    setVisible(true);
  }

  const register = async (e) => {
    e.preventDefault();
    let userValidation = formValidation(username, `Username`);
    let passValidation = formValidation(password, `Password`)
    if (!userValidation && !passValidation){
      const status = await authenticate(username, password, 'create');
      handleResponse(status);
    } else {
      let msg = '';
      if (userValidation){
        msg = msg.concat(userValidation);
      }
      if (passValidation){
        msg = msg.concat(passValidation);
      }
      alert(msg)
    }
  };

  const login = async (e) => {
    e.preventDefault();
    let userValidation = formValidation(username, `Username`);
    let passValidation = formValidation(password, `Password`)
    if (!userValidation && !passValidation){
      const status = await authenticate(username, password, 'login');
      if (checked) {
        Cookies.set('username', username);
        Cookies.set('rememberMe', 'true');
      } else {
        Cookies.remove('username');
        Cookies.set('rememberMe', 'false');
      }
      handleResponse(status);
    } else {
      let msg = '';
      if (userValidation){
        msg = msg.concat(userValidation);
      }
      if (passValidation){
        msg = msg.concat(passValidation);
      }
      alert(msg)
    }
  };

  const handleResponse = (res) => {
    if (res.token) {
      Cookies.set('auth_token', res.token);
      setAuth(true);
      navigate('/home');
    } else {
      alert(res.message)
    }
  };

  const handleRememberMe = () => {
    setChecked(!checked);
  };

  const formValidation = (input, inputType) => {
    let strRegex = new RegExp(/^[a-z0-9]+$/i);
    let validChars = strRegex.test(input); 
    let validLength =(input.length >=5) && (input.length <=30);
    let message = '';
    if (!validChars){
      message = message.concat(`Invalid Characters in ${inputType}, only alphanumeric characters are acceptable.\n`)
    }
    if (!validLength){
      message = message.concat(`Invalid Length in ${inputType}, input must be 5-30 characters.\n`)
    }
    if (validChars && validLength){
      return false;
    } else {
      return message
    }
  }

  useEffect(() => {
    const rememberMe = Cookies.get('rememberMe') === 'true';
    setChecked(rememberMe);
    if (rememberMe) {
      const savedUsername = Cookies.get('username');
      if (savedUsername) {
        setUsername(savedUsername);
      }
    }
  }, []);

  return (
    <div className="card">
      <form className="flex-container flex-column align-items-center justify-content-center gap-3 py-5">
        <h1>Login</h1>
        <input className="userName" minLength="5" maxLength="30" type="text" placeholder={checked&&username!=='' ? username : "username"} value={username} onChange={(e) => setUsername(e.target.value)} required/> <br />
        <input className="passWord" minLength="5" maxLength="30" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/> <br />
        <input className='rememberMe' type="checkbox" checked={checked} onChange={handleRememberMe}/>Remember Me <br />
        <Button label="Login" type="submit" icon="pi pi-user" className="w-10rem mx-auto" onClick={(e)=>login(e)}></Button> <br />
        <Button label="Sign Up" type="submit" icon="pi pi-user" className="w-10rem mx-auto" onClick={(e)=>register(e)} severity="success"></Button>
        <Dialog header="Alert" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
          <p className="m-0">
            {message}
          </p>
        </Dialog>
      </form>
    </div>
  );
};

export default LoginPage;