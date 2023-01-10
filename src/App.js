import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import Swiper from "react-id-swiper";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "./App.css";
import Logo from "./assets/images/sword-logov2.png";
import DefiwarsFinance from "./assets/images/defiwarsFinance.png";
import Tokenomics from "./assets/images/tokenomics.png";
import Swap from "./assets/images/swap.png";
import Daniel from "./assets/images/daniel.png";
import Milburn from "./assets/images/milburn.png";
import Ayobami from "./assets/images/ayobami.png";
import James from "./assets/images/james.png";
import Henry from "./assets/images/henry.png";
import Tomi from "./assets/images/tomi.png";
import Cedric from "./assets/images/cedric.png";
import David from "./assets/images/david.png";
import Seryosha from "./assets/images/seryosha.png";
import Phone from "./assets/images/phone.png";
import Twitter from "./assets/images/twitter.png";
import Medium from "./assets/images/medium.png";
import Telegram from "./assets/images/telegram.png";
import WithU from "./assets/images/withU.png";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const isBiggerThan1110 = useMediaQuery({ query: "(min-width: 1110px)" });
  const isBiggerThan800 = useMediaQuery({ query: "(min-width: 800px)" });
  const isBiggerThan610 = useMediaQuery({ query: "(min-width: 610px)" });
  const isBiggerThan500 = useMediaQuery({ query: "(min-width: 500px)" });

  SwiperCore.use([Autoplay, Pagination]);
  const params = {
    slidesPerView: isBiggerThan800 ? 3 : isBiggerThan610 ? 2 : 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    observeParents: true,
    observer: true,
    modules: [Autoplay, Pagination],
  };

  const createNotification = ({ type, message }) => {
    switch (type) {
      case "info":
        NotificationManager.info(message);
        break;
      case "success":
        NotificationManager.success(message);
        break;
      case "warning":
        NotificationManager.warning(message);
        break;
      case "error":
        NotificationManager.error(message);
        break;
      default:
        break;
    }
  };

  const send = async () => {
    if (name && email && message) {
      axios.defaults.baseURL = "https://server.defiwars.finance";
      axios
        .post("/contact", {
          name,
          email,
          subject,
          message,
        })
        .then((res) => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          if (res.data.message === "Success!")
            createNotification({ type: "success", message: "Subscription Success!" });
          else createNotification({ type: "error", message: "Subscription Failed!" });
        });
    } else {
      createNotification({ type: "warning", message: "Please input required field!" });
    }
  };

  return (
    <div className="appContainer">
      <div className="App">
        <div className="header">
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <img alt="logo" src={Logo} className="logoImg" />
            <div className="alpha">ALPHA</div>
          </div>
          <div className="launchBtnContainer">
            <div style={{ position: "relative" }}>
              <div className="launchBtnBox">
                <a className="launchBtn" href="https://app.defiwars.finance">
                  Launch Dapp
                </a>
              </div>
              <div className="launchBtnFilter"></div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="defiWarsFinance">
            <div className="financeTitle">DeFiWars Finance</div>
            <div className="contentMain">
              <div className="financeDescription">
                Welcome to DeFiWars Finance ecosystem. $DWARF is our native & governance token. Every NFT purchased
                within will be settled in $DWARF.
                <br />
                <br />
                Here, you will accrue high yields, while you enjoy playing power games consisting in Scheduled Warfares
                between one or several PoLPs, simultaneously.
                <br />
                <br />
                Everytime an Scheduled Warfare (staking period) ends, the winner side will burn chunks of its own
                utility token’s Total Supply, making it more valuable in terms of $DWARF, which is also reducing its own
                Total Supply, thanks to our proprietary Smart Burning algorithm.
              </div>
              <img alt="defiwarsFinance" src={DefiwarsFinance} className="financeImg" />
            </div>
          </div>
          <div className="tokenomics">
            <div className="tokenomicsTitle">Tokenomics</div>
            <img alt="tokenomics" src={Tokenomics} className="tokenomicsImg" />
            <div className="tokenomicsContent">
              <div className="tokenomicsItem">
                <div className="tokenomicsItems">
                  <div>NO IMPERMANENT LOSS</div>
                  <div style={{ paddingLeft: "30px" }}>SMART BURNING</div>
                  <div style={{ paddingLeft: "60px" }}>SCARCITY PROFITS</div>
                </div>
              </div>
              <div className="tokenomicsItem">
                <div className="polp">PoLPs (Polarized Liquidity Pools)</div>
                <img alt="swap" src={Swap} className="swap" />
                <div className="dwarfSwap">DWARFSwap</div>
              </div>
            </div>
          </div>
          <div className="warfare">
            <div className="warfareTitle">Scheduled Warfare</div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className="apy">APY</div>
            </div>
            <div className="stakingAPY" style={{ display: "flex", paddingLeft: "60%" }}>
              <div className="staking">360-DAY</div>
              <div className="apy">572%</div>
            </div>
            <div className="stakingAPY" style={{ display: "flex", paddingLeft: "50%" }}>
              <div className="staking">180-DAY</div>
              <div className="apy">201%</div>
            </div>
            <div className="stakingAPY" style={{ display: "flex", paddingLeft: "40%" }}>
              <div className="staking">90-DAY</div>
              <div className="apy">94%</div>
            </div>
            <div className="stakingAPY" style={{ display: "flex", paddingLeft: "30%" }}>
              <div className="staking">30-DAY</div>
              <div className="apy">55%</div>
            </div>
            <div className="stakingAPY" style={{ display: "flex", paddingLeft: "20%" }}>
              <div className="staking">7-DAY</div>
              <div className="apy">34%</div>
            </div>
            <div className="stakingAPY" style={{ display: "flex", paddingLeft: "10%" }}>
              <div className="staking">1-DAY</div>
              <div className="apy">9%</div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div className="staking">STAKING</div>
            </div>
            <div className="nftClaiming">NFT CLAIMING</div>
          </div>
          <div className="team">
            <div className="teamTitle">Team</div>
            <div className="membersContainer">
              {isBiggerThan1110 && (
                <>
                  <div className="membersRow">
                    <div className="member">
                      <img src={Daniel} alt="Daniel" className="memberImg" />
                      <div className="memberName">Daniel Anand</div>
                      <div className="memberName">Founder</div>
                    </div>
                    <div className="member">
                      <img src={Milburn} alt="Milburn" className="memberImg" />
                      <div className="memberName">Lee Milburn</div>
                      <div className="memberName">Co-Founder</div>
                    </div>
                  </div>
                  <div className="membersRow">
                    <div className="member">
                      <img src={Ayobami} alt="Ayobami" className="memberImg" />
                      <div className="memberName">Ayobami Abiola</div>
                      <div className="memberName">Head of M&G</div>
                    </div>
                    <div className="member">
                      <img src={James} alt="James" className="memberImg" />
                      <div className="memberName">James</div>
                      <div className="memberName">Full Stack Engineer</div>
                    </div>
                    <div className="member">
                      <img src={Henry} alt="Henry" className="memberImg" />
                      <div className="memberName">Henry</div>
                      <div className="memberName">Smarcts Engineer</div>
                    </div>
                    <div className="member">
                      <img src={Tomi} alt="Tomi" className="memberImg" />
                      <div className="memberName">Tommy</div>
                      <div className="memberName">Marketing Lead</div>
                    </div>
                  </div>
                  <div className="membersRow">
                    <div className="member">
                      <img src={Cedric} alt="Cedric" className="memberImg" />
                      <div className="memberName">Cedric</div>
                      <div className="memberName">SM Ambassador</div>
                    </div>
                    <div className="member">
                      <img src={David} alt="David Iyiola" className="memberImg" style={{ width: "201px" }} />
                      <div className="memberName">David Iyiola</div>
                      <div className="memberName">Design Lead</div>
                    </div>
                    <div className="member">
                      <img src={Seryosha} alt="Seryosha" className="memberImg" />
                      <div className="memberName">Seryosha</div>
                      <div className="memberName">Listing Ambassador</div>
                    </div>
                  </div>
                </>
              )}
              {!isBiggerThan1110 && (
                <Swiper {...params}>
                  <div className="member">
                    <img src={Daniel} alt="Daniel" className="memberImg" />
                    <div className="memberName">Daniel Anand</div>
                    <div className="memberName">Founder</div>
                  </div>
                  <div className="member">
                    <img src={Milburn} alt="Milburn" className="memberImg" />
                    <div className="memberName">Lee Milburn</div>
                    <div className="memberName">Co-Founder</div>
                  </div>
                  <div className="member">
                    <img src={Ayobami} alt="Ayobami" className="memberImg" />
                    <div className="memberName">Ayobami Abiola</div>
                    <div className="memberName">Head of M&G</div>
                  </div>
                  <div className="member">
                    <img src={James} alt="James" className="memberImg" />
                    <div className="memberName">James</div>
                    <div className="memberName">Full Stack Engineer</div>
                  </div>
                  <div className="member">
                    <img src={Henry} alt="Henry" className="memberImg" />
                    <div className="memberName">Henry</div>
                    <div className="memberName">Smarcts Engineer</div>
                  </div>
                  <div className="member">
                    <img src={Tomi} alt="Tomi" className="memberImg" />
                    <div className="memberName">Tommy</div>
                    <div className="memberName">Marketing Lead</div>
                  </div>
                  <div className="member">
                    <img src={Cedric} alt="Cedric" className="memberImg" />
                    <div className="memberName">Cedric</div>
                    <div className="memberName">SM Ambassador</div>
                  </div>
                  <div className="member">
                    <img src={David} alt="David Iyiola" className="memberImg" style={{ width: "201px" }} />
                    <div className="memberName">David Iyiola</div>
                    <div className="memberName">Design Lead</div>
                  </div>
                  <div className="member">
                    <img src={Seryosha} alt="Seryosha" className="memberImg" />
                    <div className="memberName">Seryosha</div>
                    <div className="memberName">Listing Ambassador</div>
                  </div>
                </Swiper>
              )}
            </div>
          </div>
          <div className="justifyCenter">
            <div className="contact">
              <div className="contactTitle">Contact</div>
              <div className="contactContainer">
                <div className="contactDescription">
                  <div>Turn your lightsaber on and wave it for us...we will reply.</div>
                  <img src={Phone} alt="phone" width={"190px"} />
                </div>
                <div className="contactInputContainer">
                  {isBiggerThan500 ? (
                    <div className="flexSpaceBetween">
                      <input
                        className="contactInput"
                        placeholder="Name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        className="contactInput"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  ) : (
                    <>
                      <input
                        className="contactInput"
                        placeholder="Name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "100%" }}
                      />
                      <input
                        className="contactInput"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%" }}
                      />
                    </>
                  )}

                  <input
                    className="contactInput"
                    placeholder="Subject"
                    style={{ width: "100%" }}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <input
                    className="contactInput"
                    placeholder="Message*"
                    style={{ width: "100%" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="sendBtn" onClick={() => send()}>
                    SEND
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="follow">
            <div className="footerContainer">
              <div className="copyright">
                <img alt="logo" src={Logo} className="logoImg" />
                <div className="copyrightText">
                  Copyright (c) 2021-2022.
                  <br />
                  DeFiWars Finance
                </div>
              </div>
              <div className="privacy">
                Privacy Policy
                <br />
                <br />
              </div>
              <div className="privacy">
                Terms & Conditions
                <br />
                <br />
              </div>
              <div className="linksContainer">
                <div className="links">
                  <a href="https://twitter.com/DeFiWars_crypto">
                    <img src={Twitter} alt="twitter" style={{ width: "60px", cursor: "pointer" }} />
                  </a>
                  <a href="https://defiwars.medium.com/">
                    <img src={Medium} alt="medium" style={{ width: "60px", cursor: "pointer" }} />
                  </a>
                  <a href="https://t.me/defiwarsfinance">
                    <img src={Telegram} alt="telegram" style={{ width: "60px", cursor: "pointer" }} />
                  </a>
                </div>
                <img src={WithU} alt="may the dwarf be with you" className="footerImg" />
                <div className="followTitle">FOLLOW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
