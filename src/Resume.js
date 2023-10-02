import React from 'react';
import ResumeAnimation from './components/ResumeAnimation';
import ResumeAnimation2 from './components/ResumeAnimation2';
import logo from './assets/JB.png';
import resume from './assets/Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

const Resume = () => {

  return (
    <main>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <div className='belowLogo'></div>
      <div className="resume">
        <h1>Resume - Download</h1>
        {/* Download link for the PDF */}
        <a href={resume} download="Resume.pdf">
          <FontAwesomeIcon icon={faFilePdf} />
        </a>
        <ResumeAnimation />
        <div className='clickme'>
          <ResumeAnimation2 />
        </div>
      </div>
    </main>
  );
};

export default Resume;
