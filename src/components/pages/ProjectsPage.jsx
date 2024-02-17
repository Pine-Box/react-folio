import React from 'react';

const Projects = () => (
   <div>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
         </div>
         <div className="carousel-inner">
            <div className="carousel-item">
               <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
               <div className="container">
                  <div className="carousel-caption text-start">
                     <h1>Example headline.</h1>
                     <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                     <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
               <div className="container">
                  <div className="carousel-caption">
                     <h1>Another example headline.</h1>
                     <p>Some representative placeholder content for the second slide of the carousel.</p>
                     <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                  </div>
               </div>
            </div>
            <div className="carousel-item active">
               <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
               <div className="container">
                  <div className="carousel-caption text-end">
                     <h1>One more for good measure.</h1>
                     <p>Some representative placeholder content for the third slide of this carousel.</p>
                     <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                  </div>
               </div>
            </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
      </div>
      <div className='container projects mt-3'>
         <div className="row">
            <div className="col-lg-4">
               <svg className="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
               <h2 className="fw-normal mt-3">Heading</h2>
               <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
               <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4">
               <svg className="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
               <h2 className="fw-normal mt-3">Heading</h2>
               <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
               <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4">
               <svg className="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
               <h2 className="fw-normal mt-3">Heading</h2>
               <p>And lastly this, the third column of representative placeholder content.</p>
               <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
         </div>
      </div>
   </div>


);

export default Projects;



