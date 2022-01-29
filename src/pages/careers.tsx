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
  let positionsList = []
  fetch("https://wgtwo-jobs.personio.de/xml")
  .then(response => response.text())
  .then(str => new DOMParser().parseFromString(str, "text/xml"))
  .then(xml => {
      let positions = Array.from(xml.querySelectorAll("position")).map(p => ({
          name: p.querySelector("name").innerHTML,
          schedule: p.querySelector("schedule").innerHTML,
          location: p.querySelector("office").innerHTML,
          id: p.querySelector("id").innerHTML,
      }));
      console.log(positions)
      positionsList = positions
      window['_positions']= positions

      positions.forEach(position => {
        document.querySelector("#personio-ads").insertAdjacentHTML("beforeend", `
            <a class=${styles.job} href="https://wgtwo-jobs.personio.de/job/${position.id}" target="_blank">
                <div class="position-text">
                    <div class=${styles.jobName}>${position.name}</div>
                    <div class=${styles.jobLocation}>Permanent employee, ${position.schedule} - ${position.location}</div>
                </div>
                <ArrowRight />
            </a>
            
        `)
    })
  });
  console.dir(positionsList)
  return (
    <Layout title="Careers">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={styles.jobs}>
              <div className={common.title}>Careers</div>
              <div id="personio-ads">
              </div>
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