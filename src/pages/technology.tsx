import React from "react";
import Layout from "@theme/Layout";
import styles from "./technology.module.css";
import common from "../css/common.module.css";
import TechnologyMetricList from "../components/technologymetrics/technologymetrics-list";
import { Check, CheckCircle2 } from "lucide-react";
import CTA from "../components/cta/cta";
import Multig from "../components/multig/multig";
import Ourservice from "../components/ourservice/ourservice";
import contact from "./contact.module.css";
import Image from "@theme/IdealImage";

let form = {
  name: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLInputElement>(),
  button: React.createRef<HTMLButtonElement>(),
};

function Index() {
  return (
    <Layout title="Technology">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Let's dig into our core.</div>
              <div className={common.subtitle}>
                <br />
                <b>wgtwo</b> is building a future proof technology that reduces
                 cost and complexity while radically enhancing innovation potential in the telecom industry.
                Our core is continuously evolving. We improve its security, scalability, redundancy, features, and integrations every day. Leveraging a modern DevSecOps approach, our customers get a continuously improving core network.
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${common.section} ${common.sectionDark} ${styles.technologyMetricsSection}`}>
          <div className={common.container}>
            <h1>In 2021, we helped our customers deliver</h1>
            <TechnologyMetricList />
          </div>
        </div>
        <Multig />
        
        <div className={common.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureGridHeader}>Messaging</div>
            <div className={styles.featureGridHeader}>Voice</div>
            <div className={styles.featureGridHeader}>Team</div>
            <div className={styles.featureGridHeader}>Data</div>

            <div>SMSC</div>
            <div>G-MSC</div>
            <div>Unlimited</div>
            <div>GGSN/PGW</div>

            <div>SMS router</div>
            <div>SBC</div>
            <div>Unlimited</div>
            <div>S-GW</div>

            <div>SMS GW</div>
            <div>MTAS/SCC-AS</div>
            <No />
            <div>MME</div>

            <div>SMPP GW</div>
            <div>MRF</div>
            <No />
            <div>DNS</div>

            <div>IP-SM-GW</div>
            <div>XCAP</div>
            <No />
            <div>ePDG</div>
            
            <div>MMS proxy</div>
            <div>LI-GW</div>
            <No />
            <div>CGNAT</div>

            <div>MMSC</div>
            <div>SCP/IM-SSF</div>
            <No />
            <div>AMF</div>

            <div>MMSC-GW</div>
            <div>WebRTC</div>
            <No />
            <div>SMF</div>

            <div>SMSF (roadmap)</div>
            <div>VoNR (roadmap)</div>
            <No />
            <div>UPF</div>

            <div>Voicemail</div>
            <div>ePDG</div>
            <No />
            <No />

            <div className={styles.featureGridHeader}>Connectivity</div>
            <div className={styles.featureGridHeader}>Charging</div>
            <div className={styles.featureGridHeader}>Team</div>
            <div className={styles.featureGridHeader}>Signaling</div>

            <div>HLR/HSS</div>
            <div>Charging gateway</div>
            <Yes />
            <div>STP</div>

            <div>UDR</div>
            <div>Real-time billing gateway</div>
            <No />
            <div>DRA</div>

            <div><a className={styles.link}href="/docs/auc">AuC</a></div>
            <div>CHF</div>
            <No />
            <div>DEA</div>

            <div>UDM</div>
            <No />
            <No />
            <div>Firewaling</div>

            <div>AUSF</div>
            <No />
            <No />
            <No />

            <div>AAA</div>
            <No />
            <No />
            <No />

            <div>AAA proxy</div>
            <No />
            <No />
            <No />

            <div>MNP/ENUM</div>
            <No />
            <No />
            <No />

            <div>XCAP</div>
            <No />
            <No />
            <No />

            <div>Entitlement server</div>
            <No />
            <No />
            <No />

            <div className={styles.featureGridHeader}>Policy</div>
            <div className={styles.featureGridHeader}>Support</div>
            <div className={styles.featureGridHeader}>Team</div>
            <div className={styles.featureGridHeader}>API´s</div>

            <div>Radius</div>
            <div>Orchestration and automation</div>
            <Yes />
            <div>APIs for developers</div>

            <div>PCEF</div>
            <div>Monitoring and alerting</div>
            <Yes />
            <div>Develop platform for 3rd party developers</div>

            <div>PCRF</div>
            <div>Customer service tools and portals</div>
            <No />
            <div>Storefront for operators</div>

            <div>PCF</div>
            <div>24/7 Level 3 On-call</div>
            <No />
            <No />

          </div>
        </div>

        <Ourservice />
        <br />  
        <br />  
        <br />  
        <br />  
        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.title}>Questions & Answers</div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.questions}>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What do I gain when migrating my subscribers to wgtwo?</div>
              <div className={styles.answerAnswer}>
              <b>Operational simplicity</b>: Operators get the services in a managed SaaS model. This implies that we take care of operations, 24/7, upgrades, tickets, moving the operator to the next generation of technology  and more.
              <br /><b>Architectural simplicity</b>: The core is built with inspiration from hyperscalers and modern technology companies. We terminate teleco complexity at the edge of the network, which drives simplicity and efficiency on the inside of the network.
              <br /><b>Financial simplicity</b>: A set-up fee and a SIM fee. Those two elements generally cover our main agreement. We aim for a simple and transparent price annex.
              <br /><b>Affordability</b>: The choice of operating model, architecture and technology drive radical cost savings that are passed on to our customers.
              <br /><b>Faster and lower risk delivery</b>: Through pre-integrating all the various functions and nodes, we reduce cost, complexity and time involved in integration and deployment.
              <br /><b>Innovation</b>: The next “G” in telecom is always significant, but it doesn’t allow one operator to stand out from the rest. We provide operators the ability to do micro-innovation at scale, allowing the launch of many products to fit many segments.              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>How many subscribers does wgtwo core support?</div>
              <div className={styles.answerAnswer}>
              Our core provides operators with a flexible, affordable, fully featured MNO-grade core that can scale down to small private network deployments, and up to multi-million operators.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>How much does a normal integration take?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>Do I have to worry about your core network going end of life?</div>
              <div className={styles.answerAnswer}>
                todo
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>Security?</div>
              <div className={styles.answerAnswer}>
                todo
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>Voice related?</div>
              <div className={styles.answerAnswer}>
                todo
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className={`${common.section} ${common.sectionDark}`}>
          <div className={`${common.container} ${common.splitContainer}`}>
            <div className={common.text}>
              <div className={common.title}>You still have a question in mind?</div>
              <div className={common.subtitle}>We love to tell you more!</div>
            </div>
            <div className={contact.form}>
              <input ref={form.name} placeholder="Name" />
              <input ref={form.email} placeholder="Email address" />
              <input ref={form.message} placeholder="Message" className={contact.span2} />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${contact.span2}`}>
                Submit your message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function No() {
  return <div></div>;
}

function Yes() {
  return (
    <div className={styles.check}>
      <Check color="#4CAF50" />
    </div>
  );
}

function sendMessage() {
  message(
    `New question from Technology page!\nName: ${form.name.current.value}\nEmail: ${form.email.current.value}\nRepo URL: ${form.message.current.value}`
  );

  form.name.current.disabled = true;
  form.email.current.disabled = true;
  form.message.current.disabled = true;

  form.button.current.innerText = "New Case Study Submitted!";
  form.button.current.disabled = true;
}

export default Index;
