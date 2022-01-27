import React from "react";
import Layout from "@theme/Layout";
import common from "../css/common.module.css";
import styles from "./careers.module.css";
import InterviewProcess from "../components/interview-process/interview-process";
import { ArrowRight } from "lucide-react";

const careers = [
  { name: "Infrastructure Engineer" },
];

function Careers() {
  return (
    <Layout title="Careers">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={styles.jobs}>
              <div className={common.title}>Careers</div>
              {careers.map((career) => (
                <a
                  href={`/jobs/${career.name.toLowerCase().replaceAll(" ", "-")}`}
                  className={styles.job}
                  key={career.name}>
                  <div>
                    <div className={styles.jobName}>{career.name}</div>
                    <div className={styles.jobLocation}>Full-Time, Oslo, Trondheim, Stockholm & Remote</div>
                  </div>
                  <ArrowRight />
                </a>
              ))}
            </div>
          </div>
        </div>
        <InterviewProcess />
      </div>
    </Layout>
  );
}

export default Careers;
