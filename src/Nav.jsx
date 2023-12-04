import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className={(e) => (e.isActive ? "red" : "white")} to="/">Home</NavLink>
      <NavLink className={(e) => (e.isActive ? "red" : "white")} to="/create">Create</NavLink>
      <NavLink className={(e) => (e.isActive ? "red" : "white")} to="/show">Show</NavLink>

    </div>
  )
}

export default Nav