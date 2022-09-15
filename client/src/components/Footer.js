import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="footer">
            <ul>
                <CustomLink to="/About">About</CustomLink>
                <CustomLink to="/Contact">Contact</CustomLink>
                <CustomLink to="/EmailForm">EmailForm</CustomLink>
            </ul>
            <Link to="/" className="Home">
                <img
                    src="/static/images/qa-cinema-logo-thin.png"
                    alt="QA-LOGO"
                    className="footerLogo"
                ></img>
            </Link>
        </footer>
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
