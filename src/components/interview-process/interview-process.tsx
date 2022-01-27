import React from "react";
import common from "../../css/common.module.css";
import styles from "./interview-process.module.css";
import { Cloud, LayoutTemplate, Globe2 } from "lucide-react";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <div className={common.pillTitle}>our culture</div>
          <h2 className={common.title}>
            Interview Process
          </h2>
          <div className={common.subtitle}>
          At <b>wgtwo</b> we believe in transparency and enabling our teams to work in the way that best suits them. We see this as a strength in our company and want to apply the same principles to our recruitment process.
          <br /><br />
          During each step we will be clear about what we would like to know about you. We leave the how you want to show off your skills up to you!  
          Phone, video conference, or face to face all works for us. And of course, we will cover all your travel expenses.
          </div>
          {/* <div className={common.container}>
            <a href="/case-studies" className={`${common.button} ${common.buttonPrimary} ${contact.span2}`}>
              See all case studies
            </a>
          </div> */}
        </div>
        <div className={styles.deploymentModels}>
          <div className={`${styles.deploymentModel} ${styles.panel}`}>
            <div className={styles.deploymentModelTitle}>
              01 <br />Meet your recruiter
            </div>
            {/* <div className={styles.deploymentModelDescription}>
            The goal of this meeting is to get to know each other better. We will introduce you to our organization, and you can tell us how you ended up where you are. We will also discuss compensation and role expectations. How we do this is up to you, we can meet for a coffee, chat on the phone, or have lunch.
            </div> */}
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              02 <br /> High level technical interview
            </div>
            {/* <div className={styles.deploymentModelDescription}>
            The goal of this session is to see how you deliver solutions to a real problem. This will be a high level discussion with one of our engineers, where we talk about system design, languages, libraries, frameworks, and so on.
            </div> */}
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              03 <br /> Low level technical interview
            </div>
            {/* <div className={styles.deploymentModelDescription}>
            The goal of this session is to look more deeply into one of your areas of expertise. This discussion will be tailored to the role you are interested in. For example, if you are looking to join us as a Software Engineer, this session will focus on problem solving, code quality and algorithms. We will do some live programming, either with paper/pencil, in a simple text editor on a computer, or on a whiteboard; the choice is yours.            
            </div> */}
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              04 <br /> Touch base with your recruiter
            </div>
            {/* <div className={styles.deploymentModelDescription}>
            After the interviews we should both reflect and give each other feedback to decide on the next step. If you had a bad day during one of the interviews, or if we feel like we are missing some information, we can discuss here whether we add another session.          
            </div> */}
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              05 <br /> Meet one of our founders
            </div>
            {/* <div className={styles.deploymentModelDescription}>
            The goal of this session is for you to get to know more about our company and learn more about our culture. Take the time to ask all the questions you might have as we want this to be a mutually beneficial meeting. How we do this is up to you, we can meet for a coffee, chat on the phone, or have lunch. You decide.            
            </div> */}
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
            06 <br /> Optional - Meet the team
            </div>
            {/* <div className={styles.deploymentModelDescription}>
            The goal of this meeting is just to meet and greet. There is no hard agenda, it’s just a pleasant meeting. This typically includes a tour of the office, and/or lunch with the team (we’re paying!).            
            </div> */}
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
            07 <br /> All done now what?
            </div>
            {/* <div className={styles.deploymentModelDescription}>
            Now that we both (hopefully) have all the information we need, we will decide if we’re a good fit for each other. This is the time to reach out with any questions you might still have.
            <br /><br />
            If we both agree you’d be a good fit for the company we will draw up the papers.
            <br /><br />
            Even if we don’t feel like it’s a good fit right now, we would still like to keep in touch. Things change fast, and who knows what the future holds for us!            
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
