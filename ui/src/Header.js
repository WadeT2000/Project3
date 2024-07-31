import { Link, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';


function Header(){
  const navigate = useNavigate();
  const items = [
   {
    label: 'Login',
    command: () => {
      navigate("/login");
    }
   } ,
   {
    label: 'Home',
    command: () => {
      navigate("/home");
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

