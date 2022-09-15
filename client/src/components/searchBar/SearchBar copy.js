import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
    const [searchedData, setSearchedData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const handleSearch = (event) => {
        const searchTitle = event.target.value;
        setSearchInput(searchTitle);
        const newFilter = data.filter((value) => {
            return value.title
                .toLowerCase()
                .includes(searchTitle.toLowerCase());
        });
        if (searchTitle === "") {
            setSearchedData([]);
        } else {
            setSearchedData(newFilter);
        }
    };
    const clearInput = () => {
        setSearchedData([]);
        setSearchInput("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchInput}
                    onChange={handleSearch}
                />
                <div className="searchIcon">
                    {searchedData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {searchedData.length !== 0 && (
                <div className="dataResult">
                    {searchedData.slice(0, 10).map((value, key) => {
                        return (
                            <a
                                className="dataItem"
                                href={value.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p>{value.title}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
