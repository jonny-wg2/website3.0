import React from "react";
import styles from "./hero.module.css";
import common from "../../css/common.module.css";
import Image from "@theme/IdealImage";

function Component() {
  return (
    <div className={common.section}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <h1 className={styles.titleHeader}>
            Programmable. <br /> Scalable. <br /> Innovative. <br /> Mobile core network.
          </h1>
          <div className={common.subtitle}>
            No more boxes, no more end of life, no large upfront investments. With the <b>wgtwo</b> cloud native mobile core we offer continuous innovation, continuous development, scalability and flexibility. And to make it really simple for operators – delivered as a managed SaaS telecommunication network.
            
          </div>
          <div className={styles.buttons}>
            <a href="/technology" className={`${common.button} ${common.buttonPrimary}`}>
              Our Technology
            </a>
            <a href="/request-demo" className={common.button}>
              Request a Demo
            </a>
          </div>
        </div>
        {/* <div className={styles.image}>
          <Image alt="wgtwo hero image" img={require("../../../static/img/globe.png")} />
          <p style={{fontSize: "12px"}}><a target="_blank" href="https://en.wikipedia.org/wiki/Torleiv_Maseng">Torleiv Maseng</a> - <i> 1980s Norwegian researcher, developing a radio sub-system for GSM. </i></p>
        </div> */}
      </div>
    </div>
  );
}

export default Component;
