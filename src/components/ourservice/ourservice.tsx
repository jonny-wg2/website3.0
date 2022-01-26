import React from "react";
import common from "../../css/common.module.css";
import styles from "./ourservice.module.css";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark} ${common.sectionRounded}`}>
      <div className={`${common.container} ${styles.stats}`}>
        {/* <div className={styles.stat}>
          <div className={styles.statNumber}>10</div>
          <div className={styles.statTitle}>months of integration</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>80,000</div>
          <div className={styles.statTitle}>SIMs</div>
        </div> */}
      </div>
      <div className={common.container}>
        <div className={common.centeredText}>
          <h2 className={styles.ourservice}>
          Our core does not only deliver technology to run a mobile core network but also includes 
          </h2>
          <div className={common.subtitle}>
           
          <br />✔ Upgrades / evolution
          <br />✔ Operations (incl. 24/7)
          <br />✔ Support
          <br />✔ Application layer
          <br />✔ Orchestration
          <br />✔ Operating systems
          <br />✔ Infrastructure / hardware
          <br />✔ Networking
          <br />✔ Data centre / power (normally)
          
            
            
          </div>
        </div>
      </div>
      {/* <div className={common.container}>
        <img alt="Lyft Logo" className={styles.logo} width="125px" height="100px" src="/img/ckh.svg" />
      </div> */}
    </div>
  );
}

export default Component;
