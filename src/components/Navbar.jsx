import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

export function Navbar() {
  const auth = useAuth();

  return (
    <nav className='primary-nav'>
      <NavLink to='/'>Home</NavLink>
      {/* <NavLink to='/about'>About</NavLink> */}
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/profile'>Profile Page</NavLink>

      {!auth.user && <NavLink to='/login'>Login</NavLink>}
    </nav>
  );
}
