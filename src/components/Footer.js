import React from 'react'
import Footer1 from '../assets/footer1.svg'
import Telegram from '../assets/telegram.svg'
import Twitter from '../assets/twitter.svg'
import Discord from '../assets/discord.svg'

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="footer-left">
            <img src={Footer1} />
            </div>
            <div className="footer-right">
            <a className="sociallink" target="_blank" href="https://t.me/rapinastudiosusa"><img  src={Telegram} alt="Telegram" /></a>
            <a className="sociallink" target="_blank" href="https://twitter.com/AchtisticMan"><img  src={Twitter} alt="Twitter" /></a>
            <a className="sociallink" target="_blank" href="https://discord.gg/qhaQTGWB"><img  src={Discord} alt="Discord" /></a>
            </div>
        </div>
    )
}

export default Footer
