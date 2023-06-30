import { NavLink } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <nav className="flex justify-between items-center p-2 md:pr-20 md:pl-20 bg-sky-700 text-white text-lg">
    <div className="flex gap-1 items-center">
      <NavLink to="/">
        <FaLessThan />
      </NavLink>
      <span className="font-semibold">2023</span>
    </div>
    <span className="font-light">Most Animes</span>
    <div className="flex gap-4 items-center">
      <BiSolidMicrophone />
      <FiSettings />
    </div>
  </nav>
);
export default Navbar;
