import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="nav">
            <div></div>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/Pay">Bookings</CustomLink>
                <CustomLink to="/Classifications">Classifications</CustomLink>
                <CustomLink to="/OpeningTimes">Opening Times</CustomLink>
                <CustomLink to="/Screens">Screens</CustomLink>
                <CustomLink to="/Location">Location</CustomLink>
                <CustomLink to="/Nearby">Nearby</CustomLink>
                <CustomLink to="/DiscussionBoard">Discussion</CustomLink>
            </ul>
            <div></div>
        </nav>
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
