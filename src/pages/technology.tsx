import React from "react";
import Layout from "@theme/Layout";
import styles from "./technology.module.css";
import common from "../css/common.module.css";
import TechnologyMetricList from "../components/technologymetrics/technologymetrics-list";
import { Check, CheckCircle2 } from "lucide-react";
import CTA from "../components/cta/cta";
import Multig from "../components/multig/multig";
import Image from "@theme/IdealImage";

function Index() {
  return (
    <Layout title="Technology">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Let's dig into our core</div>
              <div className={common.subtitle}>
                <br />
                Our core is continuously evolving. We improve its security, scalability, redundancy, features, and integrations every day. Leveraging a modern DevSecOps approach, our customers get a continuously improving core network.
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${common.section} ${common.sectionDark} ${common.sectionLessBottom} ${styles.technologyMetricsSection}`}>
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

            <div>AuC</div>
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
          <Image alt="Network Diagram" img={require("../../static/img/simplified-network-diagram.png")} />
            <p>Simplified functional overview - 2G/3G/4G/5G NSA/5G</p>
        </div>
                
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>Does wgtwo deliver a complete mobile core network with operations and a an SLA?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>How much does a normal integration take?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>How much does <b>wgtwo</b>> core cost??</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
          </div>
        </div>

        <CTA />
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

export default Index;
