
import React, { useState, useRef } from "react";
import '../../style/MenuBar.css';
import hamburger from '../../img/hamburger.svg';
import bisa_logo from '../../img/bisa_logo.svg';
import video from '../../video/almacen.mp4';
import SearchBar from './SearchBar';

const MenuBar = () => {

    const barsSearch = useRef(null);
    const coverSearch = useRef(null);
    const inputSearch = useRef(null);
    const boxSearch = useRef(null);

    const [ctnSearch,setCtnSearch] = useState(false);

    const toogleSearch = event => {
        setCtnSearch(current =>!current);
        ctnSearch? ocultarBuscador() : mostrarBuscador();
    };

    function mostrarBuscador(){
        barsSearch.current.style.top='80px';
        coverSearch.current.style.display='block';
        inputSearch.current.focus();
    }

    function ocultarBuscador(){
        barsSearch.current.style.top='-10px';
        coverSearch.current.style.display='none';
        boxSearch.current.style.display='none';
        inputSearch.current.value='';
    }

    function buscadorInterno(){
        var filter=inputSearch.current.value.toUpperCase();
        var li=boxSearch.current.getElementsByTagName("li");

        for (var i=0; i<li.length; i++){
            var a = li[i].getElementsByTagName("a")[0];
            var textValue = a.textContent ||  a.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = '';
                boxSearch.current.style.display = 'block';
                if(inputSearch.current.value ===""){
                    boxSearch.current.style.display = 'none';
                }
            }else{
                li[i].style.display = 'none';
            }
        } 
    }

    return(
        <>
            <div className='MenuBar'>

                {/*------------------------Nav-------------------------------*/}
                <nav className='NavBar'>

                       
                    <input type='checkbox' id='NavBar_Hamburger'></input>
                    <label for='NavBar_Hamburger' className='NavBar_Checkbtn'>
                        <img src={hamburger} alt='hamburger'></img>
                    </label>
                    

                    <label className='NavBar_Logo'>
                        <img src={bisa_logo} alt='bisa_logo'></img>
                    </label>

                    <ul>
                        <li><a href='#' className='active'>NOSOTROS</a></li>
                        <li><a href='#'>PRODUCTOS</a></li>
                        <li><a href='#'>CONTACTENOS</a></li>
                        <li><div className='NavBar_IconSearch' onClick={toogleSearch}></div></li>
                    </ul>

                </nav>
                {/*----------------------------------------------------------------------*/}


                {/*---------------------------SearchBar----------------------------*/}
                <div id='ctn-bars-search' ref={barsSearch}>
                    <input type='text' id='inputSearch' placeholder='¿Qué deseas buscar?' ref={inputSearch} onKeyUp={buscadorInterno} />
                </div>

                <ul id='box-search' ref={boxSearch}>
                    <li><a>- BISAGRA 1838 ALUM. CAP 4X3X1.5 C/T</a></li>
                    <li><a>- BISAGRA 1838 FIERRO FIJA 3X2X1.5 C/T</a></li>
                    <li><a>- BISAGRA OMEGA 3X1.5 C/T</a></li>
                    <li><a>- BISAGRA 333 DORADA CAP 2X2X1.5 C/T</a></li>
                    <li><a>- BISAGRA 555 BRONCEADA CAP 4X4X1.5 C/T</a></li>
                    <li><a>- BISAGRA 1838 ZINCADA CAP 4X4X1.5 C/T</a></li>
                </ul>

                <div id='cover-ctn-search' ref={coverSearch}></div>
                {/*-----------------------------------------------------------------*/}

                {/*------------------------Background Video----------------------------*/}
                <div className="panel-video">
                    <video src={video} autoPlay loop muted></video>
                </div>
                {/*-----------------------------------------------------------------*/}

            </div>
        </>
    );
};

export default MenuBar;