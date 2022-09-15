import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SearchBar from "../components/searchBar/SearchBar";
import BookData from "../Data.json";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="Home">
                <img
                    src="/static/images/qa-cinema-logo-thin.png"
                    alt="QA-LOGO"
                    className="Logo"
                ></img>
            </Link>
            <ul>
                <CustomLink to="/Admin">Admin</CustomLink>
                <CustomLink to="/Profile">Profile</CustomLink>
                <CustomLink to="/Login">Login</CustomLink>
                <CustomLink to="/Register">Register</CustomLink>
            </ul>
            <SearchBar placeholder="Enter a Movie title" data={BookData} />
        </header>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
