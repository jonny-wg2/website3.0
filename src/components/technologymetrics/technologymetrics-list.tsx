import React from "react";
import common from "../../css/common.module.css";
import styles from "./technologymetrics.module.css";

const technologyMetrics = [
  { name: "2,000,000", description: "SMSs",},
  { name: "20,000,000", description: "Voice calls",},
  { name: "500tb", description: "Data transfer",},
  { name: "2,000,000", description: "SMSs",},
  { name: "20,000,000", description: "Voice calls",},
  { name: "500tb", description: "Data transfer",},
  { name: "2,000,000", description: "SMSs",},
  { name: "20,000,000", description: "Voice calls",},
  { name: "500tb", description: "Data transfer",},

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
