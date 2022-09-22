import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SearchBar from "../components/searchBar/SearchBar";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Header() {
    const [listOfMovies, setListOfMovies] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5000/api/movies/").then((res) => {
            setListOfMovies(res.data.movies);
        });
    }, []);

    let isLoggedIn = (window.sessionStorage.getItem('id')) ? true : false;


    console.log("User logged in: ",window.sessionStorage.getItem('id'));
    console.log("isLoggedIn =", isLoggedIn);
    // const Logout = () =>{
    //     window.sessionStorage.clear();
    // };

    return (
        <header className="header">
            <Link to="/" className="Home">
                <img
                    src="/static/images/qa-cinema-logo-thin.png"
                    alt="QA-LOGO"
                    className="Logo"
                ></img>
            </Link>

            {(isLoggedIn) && 
                <ul>
                    <CustomLink to="/Profile">Profile</CustomLink>
                    <CustomLink to="/">Logout</CustomLink>
                </ul>
            }
            {(!isLoggedIn) && 
                <ul>
                    <CustomLink to="/Login">Login</CustomLink>
                    <CustomLink to="/Register">Register</CustomLink>
                </ul>
            }
            
            <SearchBar placeholder="Enter a Movie title" data={listOfMovies} />
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

