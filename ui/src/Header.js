import { Menubar } from 'primereact/menubar';
import {useNavigate} from 'react-router-dom';

function Header(){
  const navigate = useNavigate();
  const items = [
   {
    label: 'Login',
    command: () => {
      navigate("/");
    }
   } ,
   {
    label: 'Home',
    command: () => {
      navigate("/home");
    }
   },
   {
    label: 'Destination',
    command: () => {
      navigate("/destination");
    }
   }
  ]
  return (
    <header>
      <nav>
        <Menubar model={items} />
      </nav>
    </header>
  )
}

export default Header;

