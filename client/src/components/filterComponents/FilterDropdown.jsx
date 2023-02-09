import React from "react";
import { useState, useEffect, useRef } from "react";
import DropdownIcon from "../../images/DropdownIcon";

const Dropdown = ({ placeHolder, options, isSearchable, selection }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState(placeHolder)
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef();

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }
        return options.filter((option) => option.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    useEffect(() => {
        const handler = () => setShowMenu(false)
        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler)
        }
    });

    const handleInputClick = (e) => {
        e.stopPropagation()
        setShowMenu(!showMenu);
    }

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue
        }
        return selectedValue;
    }

    const onItemClick = (option) => {
        setSelectedValue(option)
        selection(option);
    }

    return <div className="dropdown-container">
        <div className="dropdown-input" onClick={handleInputClick}>
            {showMenu && (
                <div className="dropdown-menu">
                    {isSearchable && (
                        <div className="search-box">
                            <input onChange={onSearch} value={searchValue} ref={searchRef} />
                        </div>
                    )}
                    {getOptions().map((option) => (
                        <div
                            key={option}
                            onClick={() => { onItemClick(option) }}
                            className={'dropdown-item ${isSelected(option) && "selected"}'}>
                            {option}
                        </div>
                    ))}
                </div>)}
            {getDisplay()}
            <DropdownIcon />
        </div>
    </div>
}

export default Dropdown