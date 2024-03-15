import logo from "../icons/logoImdb.png"
import {Link} from "react-router-dom";
//importing Link from react-router-dom
//Link is used to navigate between different routes in the application
//does not reload the page when navigating between routes,like normal anchor tag would do
//inplace of href we use "to" attribute to specify the route to navigate to
const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center ">
    <img className="w-[50px] h-[50px]" src={logo} alt="logo"  />
    <Link to="/" className="text-3xl font-bold text-blue-400">Home</Link>
    <Link to="/watchlist" className="text-3xl font-bold text-blue-400">Watchlist</Link>
    </div>
  )
}

export default Navbar