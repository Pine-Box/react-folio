import React from 'react';
import fileDownload from 'js-file-download';
import Hero from '../Hero';



const resumeUrl = './public'
const filename = 'cv.pdf'

function Home() {

  const handleDownload = (event) => {
    fileDownload(resumeUrl, filename)
      .catch((err) => console.log(err));
  };




  return (
    <div>
      <Hero backgroundImage="./src/assets/img/bootstrap-themes.png">
        <div className="container col-xxl-8 px-4 py-5 homepage">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="./src/assets/img/avatar.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to my Portfolio page.</h1>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, hic animi expedita, laudantium iure commodi nisi tempora molestias assumenda asperiores sed iusto nihil culpa, minima quaerat omnis quo. Repellendus, suscipit.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={handleDownload} >Download CV</button>
                <a type="button" className="btn btn-outline-secondary btn-lg px-4" href="https://pine-box.github.io/Horiseon/starter" target="_blank">Latest project</a>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  )

};

export default Home;