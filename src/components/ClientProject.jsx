import React, { Component } from 'react';

class ClientProject extends Component {
    state = { 
        project : 500,
        app : 300,
        dashboard : 150
     } 

    render() { 
        return (
            <div>
                <h2 className='text-center'>My Client Project</h2>

                <div className=' container my-4 d-flex justify-content-center flex-wrap'>
                    <div className='col-sm-4 my-2'>
                        <h3 className=' container '>Web Design</h3>
                        <p>I have successfully completed over 500 web projects for various clients, delivering tailored solutions to meet diverse business needs while ensuring high-quality results and customer satisfaction.</p>
                    </div>

                    <div className='col-sm-4'>
                    <img className='img-thumbnail' src={process.env.PUBLIC_URL + '/web-design.webp'} alt="web-design"/>
                    </div>

                    <div className='col-sm-4 my-5'>
                        <h3 className=' container'>{this.state.project}+ Projects</h3>
                    </div>

                </div>

                <div className=' container d-flex justify-content-center flex-wrap'>
                    <div className='col-sm-4 my-2'>
                        <h3 className=' container '>App Design</h3>
                        <p>I have designed and developed mobile app projects, creating intuitive and visually appealing interfaces tailored to client needs, ensuring seamless user experiences and high-performance functionality across different platforms.</p>
                    </div>

                    <div className='col-sm-4'>
                    <img className='img-thumbnail' src={process.env.PUBLIC_URL + '/app-design.webp'} alt="app-design"/>
                    </div>

                    <div className='col-sm-4 my-5'>
                        <h3 className=' container'>{this.state.app}+ Projects</h3>
                    </div>

                </div>

                <div className=' container my-4 d-flex justify-content-center flex-wrap'>
                    <div className='col-sm-4 my-3'>
                        <h3 className=' container '>DashBoard Design</h3>
                        <p>I have designed custom dashboards, focusing on user-friendly interfaces and data visualization. My designs prioritize ease of navigation, clear insights, and efficient workflows to help businesses make informed decisions through interactive and intuitive dashboard layouts.</p>
                    </div>

                    <div className='col-sm-4'>
                    <img className='img-thumbnail' src={process.env.PUBLIC_URL + '/Dashboad design.webp'} alt="Dashboad-design"/>
                    </div>

                    <div className='col-sm-4 my-5'>
                        <h3 className=' container'>{this.state.dashboard}+ Projects</h3>
                    </div>

                </div>
                
                
            </div>
        );
    }
}
 
export default ClientProject;