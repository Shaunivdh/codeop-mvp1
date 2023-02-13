import logo from '../Images/Logo.png'
import { NavLink } from 'react-router-dom'
import RecipesPage from '../Pages/RecipesPage';



function Navbar (){
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-pink normal-case text-xl">MIXED</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search for Recipes" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={logo} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

   
        <li>
          <a className="justify-between">
              <NavLink to="/HomePage">
                    Home
                  </NavLink>
          </a>
          <a className="justify-between">
          
              <NavLink to="/RecipesPage">
                    Recipes
                  </NavLink>
          </a>
        </li>

      </ul>
    </div>
  </div>
</div>
    )
}

export default Navbar;

