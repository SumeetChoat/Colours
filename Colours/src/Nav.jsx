import { NavLink, Outlet } from "react-router-dom"

function Nav() {
  return (
    <>
  
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav
