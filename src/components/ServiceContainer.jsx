import React, { Component } from 'react';


class ServiceContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container  d-flex justify-content-center flex-wrap my-3">
                    <div className="col-sm-6 mb-3 mb-sm-0 ">
                        <div className="card border-0 my-5">
                            <div className="card-body">
                                <h1 className="container">Service I'm Providing</h1>
                                <p className="card-text">I offer professional web and mobile development services, specializing in creating responsive websites and cross-platform mobile apps. I build custom solutions tailored to your business needs, ensuring seamless user experiences, fast performance, and scalable designs. From concept to deployment, I deliver high-quality, user-friendly digital products.</p>
                                <a href="#" className="btn btn-success">Get InTouch</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <ul className="list-group list-group-flush">
                            <h3 className="list-group-item">WEB DESIGN</h3>
                            <h3 className="list-group-item my-3">APP DESIGN</h3>
                            <h3 className="list-group-item my-3">DASHBOARD DESIGN</h3>
                            <h3 className="list-group-item my-3">DESIGN STRATEGY</h3>
                        </ul>
                    </div>
            </div>
        );
    }
}
 
export default ServiceContainer;