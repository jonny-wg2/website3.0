import React from "react";
import common from "../../css/common.module.css";
import styles from "./technologymetrics.module.css";

const technologyMetrics = [
  { name: "156.1 million", description: "SMSs",},
  { name: "321.6 million", description: "Voice calls",},
  { name: "8.3 million", description: "MMS",},
  { name: "1.8 petabyte", description: "Data Upload",},
  { name: "18.9 petabyte", description: "Data Download",},
  { name: "6.3 billion", description: "Connectivity events",},
  { name: "977 040", description: "SS7 Firewall Blocked Traffic",},
  { name: "16:10", description: "Deliver a voice call during the most popular time of the day",},
  { name: "302 583", description: "Total subscribers",},

];

function Component(props) {
  return (
    <div className={styles.technologyMetrics}>
      {technologyMetrics.slice(0, props.length).map((technologymetrics) => (
        <div className={styles.technologymetrics} key={technologymetrics.name}>
          <div className={styles.technologymetricsTitle}>{technologymetrics.name}</div>
          <div className={styles.technologymetricsDescription}>{technologymetrics.description}</div>
          <div className={common.spacer}></div>
        </div>
      ))}
    </div>
  );
}

export default Component;
