import React, { Component } from 'react';


class ServiceContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div class="container  d-flex justify-content-center flex-wrap my-5">
                    <div class="col-sm-6 mb-3 mb-sm-0 ">
                        <div class="card border-0 my-5">
                            <div class="card-body">
                                <h1 class="container">Service I'm Providing</h1>
                                <p class="card-text">I offer professional web and mobile development services, specializing in creating responsive websites and cross-platform mobile apps. I build custom solutions tailored to your business needs, ensuring seamless user experiences, fast performance, and scalable designs. From concept to deployment, I deliver high-quality, user-friendly digital products.</p>
                                <a href="#" class="btn btn-success">Get InTouch</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <ul class="list-group list-group-flush">
                            <h2 class="list-group-item">WEB DESIGN</h2>
                            <h2 class="list-group-item my-3">APP DESIGN</h2>
                            <h2 class="list-group-item my-3">DASHBOARD DESIGN</h2>
                            <h2 class="list-group-item my-3">DESIGN STRATEGY</h2>
                        </ul>
                    </div>
            </div>
        );
    }
}
 
export default ServiceContainer;