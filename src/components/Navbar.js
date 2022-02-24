import React from 'react'
import logo from './logo.png'
//import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

const Navbar=(props)=>{
    //static propTypes = {  }
        return (
            <div>
                <div className="container-fluid nav-box">
                <form className="d-flex">
        <input className="mx-2 search-input" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn-search" type="submit">Search</button>
      </form>
                    
                    </div>              
   <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand"to="/"><img id="logo" src={logo} alt="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={props.linkName} aria-current="page"to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className={props.linkName} to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className={props.linkName} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className={props.linkName} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className={props.linkName}to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={props.linkName} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className={props.linkName} to="/technology">Technology</Link>
        </li>
       
        
        
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }


export default Navbar

