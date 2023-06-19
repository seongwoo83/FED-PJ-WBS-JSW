import '../css/info.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitch, faTwitter, faYoutube, faLinkedin, faTiktok} from "@fortawesome/free-brands-svg-icons"
/* eslint-disable */
function Info(){
    return(
        <footer>
            <div className="subscribe_wrap">
                <button className="subscribe">
                    <span>Subscribe Ferrari Newletter</span>
                    <div className='svg_container'>
                        <svg viewBox="0 0 24 24" className='circle'>
                            <circle cx={12} cy={12} r={11} stroke="1"></circle>
                        </svg>
                        <svg viewBox="0 0 8 16" className="icon" width="8" height="16" xmlns="http://www.w3.org/2000/svg" style={{height: "16px", width: "8px"}}>
                            <path d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"></path>
                        </svg>
                    </div>
                </button>
            </div>
            <div className="sns_container">
                <ul>
                    <li><a href="https://www.facebook.com/Ferrari"><FontAwesomeIcon className="logo_ico" icon={faFacebookSquare} />FACEBOOK</a></li>
                    <li><a href="https://www.instagram.com/ferrari/"><FontAwesomeIcon className="logo_ico" icon={faInstagram} />INSTARGRAM</a></li>
                    <li><a href="https://www.linkedin.com/company/ferrari/"><FontAwesomeIcon className="logo_ico" icon={faLinkedin} />LINKEDIN</a></li>
                    <li><a href="https://www.tiktok.com/@ferrari"><FontAwesomeIcon className="logo_ico" icon={faTiktok} />TIKTOK</a></li>
                    <li><a href="https://www.twitch.tv/ferrariesports"><FontAwesomeIcon className="logo_ico" icon={faTwitch} />TWITCH</a></li>
                    <li><a href="https://twitter.com/Ferrari"><FontAwesomeIcon className="logo_ico" icon={faTwitter} />TWITTER</a></li>
                    <li><a href="https://www.youtube.com/user/ferrariworld"><FontAwesomeIcon className="logo_ico" icon={faYoutube} />YOUTUBE</a></li>
                </ul>
            </div>
            <div className="reserve_wrap">
                <div>Ferrari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, the Netherlands and its corporate address at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), Italy, registered with the Dutch trade register under number 64060977</div>
                <div>Ferrari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, Modena, Italy, Companies’ Register of Modena, VAT and Tax number 00159560366 and share capital of Euro 20,260,000</div>
                <div>Copyright 2023 - All rights reserved</div>
            </div>
            <div className="link_container">
                <ul>
                    <li><a href="#">법무</a></li>
                    <li><a href="#">개인정보 보호정책</a></li>
                    <li><a href="#">쿠키 정책</a></li>
                    <li><a href="#">문의</a></li>
                    <li><a href="#">미디어 센터</a></li>
                    <li><a href="#">채용</a></li>
                    <li><a href="#">Corporate ENG</a></li>
                    <li><a href="#">Corporate ITA</a></li>
                    <li><a href="#">Responsible Disclosure</a></li>
                </ul>
            </div>
            <div className="logo_wrap">
                <img src="./img/index/shell.png" alt="shell logo" />
            </div>
        </footer>
    );
}
export default Info;