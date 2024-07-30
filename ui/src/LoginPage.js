import { Button } from 'primereact/button';
import './LoginPage.css';
import authenicate from './Auth';
import { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';

const LoginPage = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ message, setMessage ] = useState(false);

  const register = async () => {
    const status = await authenicate(username, password, 'register');
    if (status !== 'success'){
      setMessage(status);
      setVisible(true);
      console.log(status)
      console.log(message)
    }
  }

  const login = (event) => {
    authenicate(username, password, 'login');
  }


  return (
    <div className="card">
      <div className="flex flex-column align-items-center justify-content-center gap-3 py-5">
        <h1>Login</h1>
        <input className="userName" maxlength="30" type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}}/> <br/>
        <input className="passWord" type="text" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/> <br/>
        <input className='rememberMe' type="checkbox"/>Remember Me <br/>
        <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto" onClick={() => login()}></Button> <br/>
        <Button label="Sign Up" icon="pi pi-user" className="w-10rem mx-auto" onClick={()=> register()} severity="success"></Button>
        <Dialog header="Error" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    {message}
                </p>
        </Dialog>
      </div>
    </div>
  )
}

export default LoginPage;