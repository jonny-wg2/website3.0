import React from "react";
import Layout from "@theme/Layout";
import common from "../css/common.module.css";
import styles from "./team.module.css";
import Image from "@theme/IdealImage";

const teamMembers = [
  {
    name: "Oslo - HQ",
    email: "Contact details here",
    blurb: "Some text here.",
    image: "image-coming-soon.png",
  },
  {
    name: "Trondheim",
    email: "Contact details here",
    blurb: "Some text here.",
    image: "image-coming-soon.png",
  },
  {
    name: "Stockholm",
    email: "Contact details here",
    blurb: "Some text here.",
    image: "image-coming-soon.png",
  },
  {
    name: "Berlin",
    email: "Contact details here",
    blurb: "Some text here.",
    image: "image-coming-soon.png",
  },
  {
    name: "Tokyo",
    email: "Contact details here",
    blurb: "Some text here.",
    image: "image-coming-soon.png",
  },
  {
    name: "Remote",
    email: "Contact details here",
    blurb: "Some text here.",
    image: "image-coming-soon.png",
  },
];

function Team() {
  return (
    <Layout title="Team">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Scandinavian rooted startup making a future telco core network.</div>
              <div className={common.subtitle}>
                <br />
                <b>We're based in Europe. </b>
                Prior to starting Working Group Two — we collectively spent over a decade at Telenor, Google, PWC, Ericsson and more.
              </div>
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.team}>
            {shuffle(teamMembers).map((teamMember) => (
              <div className={styles.teamMember} key={teamMember.name}>
                <div className={styles.teamMemberImage}>
                  <Image img={require(`../../static/img/team/${teamMember.image}`)} />
                </div>
                <div className={styles.teamMemberName}>{teamMember.name}</div>
                <div className={styles.teamMemberEmail}>{teamMember.email}</div>
                <div className={styles.teamMemberBlurb}>{teamMember.blurb}</div>
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
                    <img alt="Village Global" src="/img/digital-alpha-logo.png" />
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
