import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser,faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import AutoComplete from '../autocomplete';
import './style.css';
function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
        goTo
    } = props;
    var camilo= "Selecion";
    return (
        
<nav className="navbar navbar-expand-lg navbar-light py-0"  id="navbar">
  <a className="navbar-brand" href="#" id='filtro' onClick={() => goTo('/inicio')}>ArteRD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" id={camilo} >
      <li className="nav-item active">
        <a className="nav-link"  href="/" id='filtro'>NOTICIA<span className="sr-only"  >(current)</span></a>
      </li>
      <li className="nav-item">
  <a className="nav-link" href="#" id='filtro' onClick={() => goTo('/descubrir')}>DESCUBRE</a>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <AutoComplete 
                 text={text}
                 suggestions={suggestions}
                 onChangeText={onChangeText}
                 onChangeSelection={onChangeSelection} />
                
      
      <div id='iconNav1'><FontAwesomeIcon icon={faCartArrowDown}/></div>
      <div id='iconNav'><FontAwesomeIcon icon={faUser}/></div>
    </form>
  </div>
</nav>

        /*
          <nav id='naVbar' className="navbar navbar-expand-lg py-0 navbar-secondary">
        <a className="navbar-brand" href="#">ArteRD <FontAwesomeIcon icon={faBell}/></a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span > <FontAwesomeIcon icon={faBars}/></span>
        </button>
      
        <div className="collapse navbar-collapse "  id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto  ">
            <li className="nav-item active">
              <a className="nav-link pt-3 pb-3 ml-20px" id="black" href="#">NOTICIA<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pt-3 pb-3" id="black2" href="#">ArteDom</a>
            </li>
         
           
          </ul>
          <form className="form-inline  my-lg-0 ">
            <input className="form-control mr-sm-4" id="buscador" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" id="buttomNavBar" type="submit">Search</button>
            <ul className="navbar-nav form-inline  my-lg-s0 "  id='iconNavR'>
            <li className="nav-item">
              <a className="nav-link " id='iconNav2' href="#"><FontAwesomeIcon icon={faCartArrowDown}/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " id='iconNav' href="#"><FontAwesomeIcon icon={faUser}/></a>
            </li>
          </ul>
          </form>
      
        </div>
         
      </nav>


        /navarprincipal
        
        
        <AppBar position="static">
        <Toolbar className="appbar">
     
                 
                <h1 className="text-primary">ArteDominicano</h1>
                <button>NOTICIA DEL ARTE</button>     
                <button>ARTE</button>     
                <AutoComplete 
                 text={text}
                 suggestions={suggestions}
                 onChangeText={onChangeText}
                 onChangeSelection={onChangeSelection} />
                <AccountCircle/> 
            </Toolbar>
        </AppBar>
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Usuario 
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
   */ );
    
}

export default Page;
