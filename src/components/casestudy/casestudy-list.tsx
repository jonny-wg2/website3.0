import React from "react";
import common from "../../css/common.module.css";
import styles from "./casestudy.module.css";

const caseStudies = [
  {
    name: "Adjacent Cores for Operators",
    description: "Helping your operator grow into new areas through a simple and innovative core - SaaS.",
  },
  {
    name: "Hybrid Networks",
    description: "Create simple networks with national roaming and your own network coverage.",
  },
  { name: "Private Network Core", description: "A simple and powerful core giving your carrier-grade functionality and operations scaled down to private networks." },
  {
    name: "IoT",
    description: "Cost scalable approach for IoT ........ .",
  },
  { name: "MVNO", description: "Integrating and scaling an MVNO." },
  { name: "MVNE", description: "Integrating and scaling an MVNE." },
  { name: "MNO", description: "Integrating and scaling an MNO." },
  { name: "Fighting Telco Spam", description: "A modern approach for combatting spam across SMS, MMS, and Voicecalls." },
  { name: "Greenfield Operators", description: "A radical new approach for standing up new MNOs. Simple, scalable, affordable." },

];

function Component(props) {
  return (
    <div className={styles.caseStudies}>
      {caseStudies.slice(0, props.length).map((caseStudy) => (
        <div className={styles.caseStudy} key={caseStudy.name}>
          <div className={styles.caseStudyTitle}>{caseStudy.name}</div>
          <div className={styles.caseStudyDescription}>{caseStudy.description}</div>
          <a href={`/docs/${caseStudy.name.replaceAll(" ", "-")}`} className={styles.link}>
            Learn more
          </a>
          <div className={common.spacer}></div>
        </div>
      ))}
    </div>
  );
}

export default Component;
