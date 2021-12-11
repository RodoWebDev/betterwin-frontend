import React from 'react';
import Protection from '../assets/imgs/protection.png';
import AppStore from '../assets/imgs/app_store.png';
import twitter from '../assets/imgs/twitter.png';
import instagram from '../assets/imgs/instagram.png';
import facebook from '../assets/imgs/facebook.png';
import './styles.scss'

const Footer = () => {

  return (
    <div className="footer">
      <div className="store">
        <img src={Protection} className="protection_img" alt="BetterWin-img" />
        <img src={AppStore} className="appstore_img" alt="BetterWin-img" />
      </div>
      <div className="follow">
        <div className="social">
          <p className="desc">Follow us</p>
          <img src={twitter} className="twitter" alt="twitter" />
          <img src={instagram} className="instagram" alt="instagram" />
          <img src={facebook} className="facebook" alt="facebook" />
        </div>
        <div className="terms">
          <p className="desc">Terms of use</p>
          <p className="desc">Support</p>
        </div>
      </div>
      <p className="footer_octicon">© 2021, BetterWin.com, Inc. or its affiliates</p>
    </div>
  )
}

export default Footer
