import React, { Component } from 'react';

class ImageCard extends Component {
    state = {  } 
    render() { 
        return (
            <div className=" container d-flex justify-content-center flex-wrap"> 
            <div className="col-sm-6 mb-3 mb-sm-0 ">
              <div className="card border-0">
                <div className="card-body">
                    <h2 className="card-title">Hi <span className='text-success'> im Ibrahim, </span> Am a web and Mobile developer, base in NIGERIA</h2>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#service" className="btn btn-success m-2" style={{borderRadius: 15}}>GET IN TOUCH</a>
                    <a href="#service" className="btn btn-success" style={{borderRadius: 15}}>VIEW ALL WORKS</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 ">
              <div className="card border-0">
                <div className="card-body">
                    <img className='img-thumbnail' src={process.env.PUBLIC_URL + '/ibro2.jpg'} alt="Ibro"/>
                </div>
            </div>
            </div>
          </div>
        );
    }
}
 
export default ImageCard;