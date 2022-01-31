import React from "react";
import common from "../../css/common.module.css";
import styles from "./security-domain.module.css";
import SecurityDomainList from "./security-domain-list";
import Image from "@theme/IdealImage";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div className={`${common.container} ${common.splitContainer} ${styles.securityDomainContainer}`}>
        <div className={common.text}>
          <div className={styles.title}>
          Security is at the forefront of how wgtwo builds its mobile core network.
          </div>
          <div className={styles.subtitle}>
            <b>wgtwo</b> provides the platform with flexible APIs,
            allowing all customer segments to migrate to our core network. To learn more about how we are changing the game
            in the telecommunication space, check out the case studies to see how we can help your company. Our goal is to drive innovation and growth for your business.
          </div>
        </div>
      </div>
      {/* <hr className={styles.hr} /> */}
      <div className={styles.SecurityDomainList}>
        <SecurityDomainList length={6} />
      </div>
      <div className={common.container}>
        <a href="/docs/security-whitepaper" className={styles.securityDomainButton}>
          Read our security whitepaper
        </a>
      </div>
    </div>
  );
}

export default Component;
