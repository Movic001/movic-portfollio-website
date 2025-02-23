import React, { Component } from 'react';

class YearExperience extends Component {
    state = {  } 
    render() { 
        return (
            <div className=' container-fluid bg-dark p-2'>
                <div className='container d-flex justify-content-around flex-wrap'>
                    <div className='col-sm-3'>
                        <h5 className='text-success'>Project Done</h5>
                        <h1 className='text-light'>10+</h1>
                    </div>
                    <div className='col-sm-3'>
                        <h5 className='text-success'>Experience</h5>
                        <h1 className='text-light'>2+ Years</h1>
                    </div>
                    <div className='col-sm-3'>
                        <h5 className='text-success'>Client Satisfaction</h5>
                        <h1 className='text-light'>100%</h1>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default YearExperience;