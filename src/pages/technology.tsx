import React from "react";
import Layout from "@theme/Layout";
import styles from "./technology.module.css";
import common from "../css/common.module.css";
import { Check, CheckCircle2 } from "lucide-react";
import CTA from "../components/cta/cta";

function Index() {
  return (
    <Layout title="Technology">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>One platform to scale your company.</div>
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.priceTiers}>
            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>3,000,000 SMS</div>
              <div className={styles.priceTierDescription}>
                per 365 days
              </div>
            </div>

            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>Team</div>
              <div className={styles.priceTierDescription}>Team Description</div>
              <div className={styles.price}>Pay-as-you-go</div>
              <a
                className={common.button}
                style={{ backgroundColor: "#2196F3", border: "0", color: "#fff" }}
                href="https://wgtwo.com">
                Get Started for Free
              </a>
            </div>

            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>2,000,000 voice calls</div>
              <div className={styles.priceTierDescription}>
                2021
              </div>
              
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.title}>Our tech</div>
          </div>
        </div>
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
        </div>

        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.title}>Questions & Answers</div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.questions}>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What happens if I go over my limit?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>Which plan is right for me?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What are my deployment options?</div>
              <div className={styles.answerAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut facilisis velit, ac vehicula justo. Etiam ac nulla eu ex lobortis dignissim. Ut porttitor mi nisl, et lacinia sapien sagittis sit amet. Vestibulum vitae ex odio. Proin at nunc vitae massa ullamcorper vehicula in eu enim. Aliquam erat volutpat. Nulla sapien tellus, condimentum vel est quis, aliquet sagittis felis. Phasellus sagittis leo a posuere bibendum. Cras in aliquam dui, ut porttitor ex. Phasellus convallis ipsum non gravida tincidunt.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>What if I have more questions?</div>
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
