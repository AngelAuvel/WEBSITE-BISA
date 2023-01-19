
import React from "react";
import '../style/SearchBar.css';
import {useRef, useEffect,useState} from 'react';


const SearchBar = () => {

    const mysearch = useRef(null);
    
    const Clear = () => {
        mysearch.current.value = "";
    };

    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };

    return(
        <div className='body'>
            <div className='search'>
                <div className={`icon ${isActive? 'active' : '' }`} onClick={handleClick}></div>
                <div className='input'>
                    <input ref={mysearch} type='text' placeholder='Search'/>
                    <span className='clear' onClick={Clear}></span>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;