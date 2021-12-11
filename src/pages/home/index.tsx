import React from 'react';
import BetterWinImg from '../../assets/imgs/betterwin.png';
import TitleImg from '../../assets/imgs/title.png';
import Download from '../../assets/imgs/download.png';
import QRCode from '../../assets/imgs/qr-code.png';
import App1 from '../../assets/imgs/app1.png';
import App2 from '../../assets/imgs/app2.png';
import App3 from '../../assets/imgs/app3.png';
import App4 from '../../assets/imgs/app4.png';
import App5 from '../../assets/imgs/app5.png';
import App6 from '../../assets/imgs/app6.png';
import Layout from '../../layouts';
import './styles.scss'

const Home = () => {
  
  return (
    <Layout>
      <div className="main-container">
        <div className="top-bar">
          <p className="top-desc">Currently we only support Android Mobile Devices.</p>
        </div>
        <img src={TitleImg} className="title-img" alt="title-img" />
        <img src={BetterWinImg} className="header-logo" alt="BetterWin-img" />
        <a className="download_btn" href="/download">
          <img src={Download} className="download-img" alt="download-img" />
          Get Better Win App
        </a>
        <div className="apps_row">
          <div className="app_container">
            <img src={App1} className="app-img" alt="app1-img" />
            <div className="description">
              <p className="app-no">01</p>
              <div className="desc-container">
                <p className="title">Better game</p>
                <p className="desc">From racing to city-building - BetterGame allows players from all ages to explore the best that mobile gaming has to offer. On top of that, users are able to earn items which they can sell on the BetterWin-Marketplace to make their free time hobbies into a profitable activity. </p>
              </div>
            </div>
          </div>
          <div className="app_container">
            <img src={App2} className="app-img" alt="app2-img" />
            <div className="description">
              <p className="app-no">02</p>
              <div className="desc-container">
                <p className="title">Open-Source AppStore</p>
                <p className="desc">The BetterWin Appstore allows users to not only choose from the best that mobile gaming has to offer but also gives game developers the marketplace to show and sell their creations. Once approved for a „Creator“, game developers will be able to upload their games to the platform. Other players can earn access to test and vote for the best open-source games. </p>
              </div>
            </div>
          </div>
          <div className="app_container">
            <img src={App3} className="app-img" alt="app3-img" />
            <div className="description">
              <p className="app-no">03</p>
              <div className="desc-container">
                <p className="title">The “Ebay” for games</p>
                <p className="desc">The so called Marketplace enables users to trade, exchange and purchase consumables, items and cosmetics which are earned through gaming. By this, users are not solely able to play but also generate profits through gaming and skills. A transaction fee for every trade is applied by the platform. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="apps_row">
          <div className="app_container">
            <img src={App4} className="app-img" alt="app4-img" />
            <div className="description">
              <p className="app-no">04</p>
              <div className="desc-container">
                <p className="title">Better Share</p>
                <p className="desc">BetterShare connects, for the very first time, users around the world through the major social players like TikTok, Instagram, Facebook, Snapchat etc. With the „Ultimate Share“-Button users have the one and only link to display and synchronize their success, achievements and earnings to the whole social world.</p>
              </div>
            </div>
          </div>
          <div className="app_container">
            <img src={App5} className="app-img" alt="app5-img" />
            <div className="description">
              <p className="app-no">05</p>
              <div className="desc-container">
                <p className="title">Better bet & iSAP Solutions</p>
                <p className="desc">In addition to all traditional sport bets, BetterWin will be the first ever and one and only betting provider that is licensed to offer traditional Arab sports. iSAP Solutions will provide the platform with a unique tool to revolutionize online betting. An AI will scan the entire market and calculate, based on stochastic, the best possible bets.</p>
              </div>
            </div>
          </div>
          <div className="app_container">
            <img src={App6} className="app-img" alt="app6-img" />
            <div className="description">
              <p className="app-no">06</p>
              <div className="desc-container">
                <p className="title">Better play</p>
                <p className="desc">With BetterPlay, users can test their skills in different games like Poker, Black Jack and Baccarat. Users can watch championships and bet on the worlds best player as well as participate in tournaments themselves and win huge rewards which are provided by reserves from the BetterUtility Token</p>
              </div>
            </div>
          </div>
        </div>
        <div className="qrcode-container">
          <img src={QRCode} className="qrcode-img" alt="download-img" />
          <a className="download_btn bottom" href="/download">
            <img src={Download} className="download-img" alt="download-img" />
            Get Better Win App
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Home
