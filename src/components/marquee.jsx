import React, { Component } from 'react';


class Marquee extends Component {
    state = {  } 
    render() { 
        return (
            <div className='bg-success p-2'>
                <div class="marquee-container overflow-hidden bg-light">
                    <marquee>
                    <div class="marquee-content d-flex align-items-center">
                        <h5 class="marquee-item mx-2">
                            <i class="fa-solid fa-star"></i>
                        Web Design</h5>

                        <h5 class="marquee-item px-4 py-2 ">
                            <i class="fa-solid fa-star"></i>
                        App Design</h5>

                        <h5 class="marquee-item px-4 py-2 ">
                            <i class="fa-solid fa-star bg-light"></i>
                        Dashboard</h5>

                        <h5 class="marquee-item px-4 py-2 ">
                            <i class="fa-solid fa-star"></i>
                        Strategy</h5>

                        <h5 class="marquee-item px-4 py-2 ">
                            <i class="fa-solid fa-star"></i>
                        Web Design</h5>

                        <h5 class="marquee-item px-4 py-2 ">
                            <i class="fa-solid fa-star"></i>
                        App Design</h5>

                        <h5 class="marquee-item px-4 py-2 ">
                            <i class="fa-solid fa-star bg-light"></i>
                        Dashboard</h5>
                    </div>
                    </marquee>
                </div>
            </div>
        );
    }
}
 
export default Marquee;