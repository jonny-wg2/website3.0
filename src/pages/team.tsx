import React from "react";
import Layout from "@theme/Layout";
import common from "../css/common.module.css";
import styles from "./team.module.css";
import Image from "@theme/IdealImage";

const teamMembers = [
  {
    name: "Oslo",
    slogan: "Let's go skiing ⛷",
    letter: "O",
  },
  {
    name: "Trondheim",
    slogan: "Nice stash 🥸",
    letter: "T",
  },
  {
    name: "Stockholm",
    slogan: "Time for a fika ☕️",
    letter: "S",
  },
  {
    name: "Berlin",
    slogan: "Dickes B für Bier 🍻",
    letter: "B",
  },
  {
    name: "Tokyo",
    slogan: "寿司を食べましょう 🍱",
    letter: "T",
  },
  {
    name: "Remote",
    slogan: "Working from the couch 🛋",
    letter: "R",
  },
];

function Team() {
  return (
    <Layout title="Team">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Scandinavian rooted startup building a future telco core network.</div>
              <div className={common.subtitle}>
                <br />
                <b>60+</b> engineers, <b>19+</b> different nationalities make up the <b>wgtwo</b> team. We collectively have spent decades at Telenor, Telia, Ice, Google, PWC, Ericsson, and more.
              </div>
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.team}>
            {shuffle(teamMembers).map((teamMember) => (
              <div className={styles.teamMember} key={teamMember.name}>
                <h1>{teamMember.letter}</h1>
                <div className={styles.teamMemberName}>{teamMember.name}</div>
                <div className={styles.teamMemberslogan}>{teamMember.slogan}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${common.section} ${common.sectionGray}`}>
          <div className={common.container}>
            <div className={`${styles.text}`}>
              <h2 className={styles.title}>Our investors</h2>
              <div className={styles.investors}>
                <div>
                  <a href="https://telenor.no" target="_blank">
                    <img alt="Telenor" src="/img/telenor.svg" />
                  </a>
                </div>
                <div>
                  <a href="https://www.cisco.com" target="_blank">
                    <img alt="Cisco" src="/img/cisco.svg" />
                  </a>
                </div>
                <div>
                  <a href="https://www.digitalalpha.net/" target="_blank">
                    <img alt="Village Global" src="/img/digital-alpha-logo.png"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={common.section}>
          <div className={common.container}>
            <div className={`${common.centeredText}`}>
              <h2 className={common.title}>Interested in joining our growing team?</h2>
              <a href="/careers" className={`${common.button} ${common.buttonPrimary} ${styles.button}`}>
                View open positions
              </a>
            </div>
            <Image className={styles.groupImage} img={require("../../static/img/group-image.jpeg")} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default Team;
