import React, { useEffect } from 'react';
import BetterWinImg from '../../assets/imgs/betterwin.png';
import Back1 from '../../assets/imgs/back1.png';
import Back2 from '../../assets/imgs/back2.png';
import Step1Left from '../../assets/imgs/step1_left.png';
import Step1Right from '../../assets/imgs/step1_right.png';
import Step3Left from '../../assets/imgs/step3_left.png';
import Step3Right from '../../assets/imgs/step3_right.png';
import Step2Left from '../../assets/imgs/step2_left.png';
import Step2Right from '../../assets/imgs/step2_right.png';
import Layout from '../../layouts';
import './styles.scss'

const Download = () => {
  useEffect(() => {
    setTimeout(function() {
      window.location.href = process.env.REACT_APP_URL + '/packages/download/betterwin'
    }, 1000);
  }, [])
  
  return (
    <Layout>
      <div className="main">
        <img src={BetterWinImg} className="header-logo" alt="BetterWin-img" />
        <h1 className="header-title">Thank you for downloading Better Win App</h1>
        <p className="download-desc">
          Not working after 10 seconds?
          <a href={`${process.env.REACT_APP_URL}/packages/download/betterwin`}>Retry download</a>
        </p>
        <div className="steps-to-install">
          <p className="step-desc">Steps to Install</p>
        </div>
        <div className="steps">
          <img src={Back1} className="background-1" alt="Back1-img" />
          <img src={Back2} className="background-2" alt="Back2-img" />
          <div className="steps_container">
            <div className="step">
              <div className="left">
                <img src={Step1Left} className="step_left" alt="Step1Left-img" />
                <p className="step_desc">Turn on Unknown Sources</p>
              </div>
              <img src={Step1Right} className="step_right" alt="Step1Right-img" />
            </div>
            <div className="step">
              <div className="left">
                <img src={Step2Left} className="step_left" alt="Step3Left-img" />
                <p className="step_desc">Download Better Win App</p>
              </div>
              <img src={Step2Right} className="step_right" alt="Step1Left-img" />
            </div>
            <div className="step">
              <div className="left">
                <img src={Step3Left} className="step_left" alt="Step3Left-img" />
                <p className="step_desc">Install Better Win App</p>
              </div>
              <img src={Step3Right} className="step_right" alt="Step3Right-img" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Download
