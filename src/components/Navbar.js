import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Details', text: 'Details' },
];
const Navbar = () => (
  <nav>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
