import { Link, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
// import "primereact/resources/themes/lara-light-cyan/theme.css";

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

