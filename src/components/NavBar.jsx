import React, { Component } from 'react';


class NavBar extends Component {
    state = {  } 
    
    render() { 
        return (
            <nav className="navbar navbar-expand-lg my-1 m-0.5" style={{backgroundColor: '#1a1d20', borderRadius: 10}}>
            <div className="container-fluid">
              <a className="navbar-brand text-success" href="#">Portfollio</a>

              <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"> go</span>
              </button>

              <div className="collapse navbar-collapse " style={{justifyContent:'center'}} id="navbarSupportedContent" >
                <ul className="navbar-nav d-flex">

                  <li className="nav-item">
                    <a className="nav-link text-success active" href="#">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Service</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Project</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Testimony</a>
                  </li>
                  
                </ul>
                <div className="d-flex float-end">
                  <a className='btn btn-outline-success' href='tel:07049608938' style={{borderRadius: 20}}> Lets Talk </a>
                </div>
              </div>
            </div>
          </nav>
      
        );
    }
}
 
export default NavBar;