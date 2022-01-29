import React from "react";
import styles from "./security-header.module.css";
import common from "../../css/common.module.css";
import { PhoneCall, MessageSquare, BarChart, DownloadCloud, Slack, Laptop2, ShieldCheck, Lock, Search } from "lucide-react";
import Image from "@theme/IdealImage";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <section><div className={common.pillTitle}>wgtwo Security</div></section>

          <h2 className={common.title}>
            Secure platform.<br />
            Secure data.
          </h2>
          <div className={common.subtitle}>
            Your trusted telco core network.
          </div>
        </div>
      </div>
      <div className={common.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Search />
            </div>
            <div className={styles.featureTitle}>Data Privacy</div>
            <div className={styles.featureDescription}>
              <b>wgtwo</b> is committed to privacy and provides a high standard of privacy protection for our customer's subscribers. 
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <ShieldCheck />
            </div>
            <div className={styles.featureTitle}>GDPR</div>
            <div className={styles.featureDescription}>
            <b>wgtwo</b> is GDPR compliant and provides Data Processing Agreements (DPAs) with our all of our customers to outline how and where your data is processed. 
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Lock />
            </div>
            <div className={styles.featureTitle}>ISO 27001</div>
            <div className={styles.featureDescription}>
              <b>wgtwo</b> has been aligning security to ISO 27001 standards and now began the process of obtaining the certification. 
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Component;
